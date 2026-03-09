export const prerender = false;

import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);
const siteUrl = import.meta.env.PUBLIC_SITE_URL;

// Fee structures per payment method
function withCoveredFees(baseCents: number, method: string): number {
  if (method === 'sepa_debit') {
    // SEPA-Lastschrift: €0.35 Fixbetrag
    return baseCents + 35;
  }
  if (method === 'paypal') {
    // PayPal: 2.49% + €0.35
    return Math.round((baseCents + 35 + 10) / (1 - 0.0249 - 0.002));
  }
  // Kreditkarte (Standard EWR): 1.5% + €0.25
  return Math.round((baseCents + 25) / (1 - 0.015));
}

const PAYMENT_METHOD_TYPES: Record<string, Stripe.Checkout.SessionCreateParams.PaymentMethodType[]> = {
  card: ['card'],
  sepa_debit: ['sepa_debit'],
  paypal: ['paypal'],
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { amount, donorName, showOnList, displayName, coverFees, paymentMethod = 'sepa_debit', lang } = body;
    const langPrefix = lang === 'en' ? '/en' : '';

    const euros = Number(amount);
    if (!euros || euros < 1 || euros > 50_000) {
      return new Response(
        JSON.stringify({ error: 'Ungültiger Betrag.' }),
        { status: 400 },
      );
    }

    const baseCents = Math.round(euros * 100);
    const method = ['card', 'sepa_debit', 'paypal'].includes(paymentMethod) ? paymentMethod : 'sepa_debit';
    const finalCents = coverFees ? withCoveredFees(baseCents, method) : baseCents;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: PAYMENT_METHOD_TYPES[method] ?? ['sepa_debit'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: finalCents,
            product_data: {
              name: 'Spende — Velids Traum vom Hören',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        donorName: donorName || '',
        displayName: displayName || '',
        showOnList: String(!!showOnList),
        originalAmountCents: String(baseCents),
        feesCovered: String(!!coverFees),
        paymentMethod: method,
      },
      success_url: `${siteUrl}${langPrefix}/projekte/dream-of-hearing/danke?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}${langPrefix}/projekte/dream-of-hearing`,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err: any) {
    console.error('[Stripe]', err.message);
    return new Response(
      JSON.stringify({ error: 'Checkout konnte nicht erstellt werden.' }),
      { status: 500 },
    );
  }
};
