import Stripe from 'stripe';

export const CAMPAIGN_GOAL = 2000000; // cents

export interface DonationItem {
  id: string;
  object: 'donation';
  amount: number;
  currency: string;
  status: 'succeeded';
  created: number;
  donor: {
    name: string | null;
    anonymous: boolean;
  };
  metadata: Record<string, string>;
}

export interface DonationsResponse {
  object: 'list';
  url: string;
  has_more: boolean;
  data: DonationItem[];
  campaign: {
    id: string;
    object: 'campaign';
    goal: number;
    currency: string;
  };
}

export async function fetchDonations(): Promise<DonationsResponse> {
  const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    status: 'complete',
  });

  const data: DonationItem[] = sessions.data
    .filter((s) => s.payment_status === 'paid')
    .map((s) => {
      const showOnList = s.metadata?.showOnList === 'true';
      const displayName = s.metadata?.displayName || null;
      return {
        id: s.id,
        object: 'donation' as const,
        amount: Number(s.metadata?.originalAmountCents) || s.amount_total || 0,
        currency: s.currency || 'eur',
        status: 'succeeded' as const,
        created: s.created,
        donor: {
          name: showOnList ? displayName : null,
          anonymous: !showOnList,
        },
        metadata: s.metadata || {},
      };
    });

  return {
    object: 'list',
    url: '/api/donations.json',
    has_more: false,
    data,
    campaign: {
      id: 'cmp_velit-hearing-aids',
      object: 'campaign',
      goal: CAMPAIGN_GOAL,
      currency: 'eur',
    },
  };
}

const currencySymbols: Record<string, string> = {
  eur: '€',
  usd: '$',
  gbp: '£',
  try: '₺',
};

export function getCurrencySymbol(code: string): string {
  return currencySymbols[code] ?? code.toUpperCase();
}
