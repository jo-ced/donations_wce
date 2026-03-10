import Stripe from 'stripe';

export const CAMPAIGN_GOAL = import.meta.env.PUBLIC_CAMPAIGN_GOAL ?
  parseInt(import.meta.env.PUBLIC_CAMPAIGN_GOAL, 10) :
  2000000; // cents

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

let cache: { data: DonationsResponse; at: number } | null = null;
const TTL = 10_000; // 10 seconds

export function clearCache() {
  cache = null;
}

export async function fetchDonations(): Promise<DonationsResponse> {
  if (cache && Date.now() - cache.at < TTL) return cache.data;

  const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    status: 'complete',
  });

  const data: DonationItem[] = sessions.data
    .filter((s) => s.payment_status === 'paid' || (s.payment_status === 'unpaid' && s.metadata?.paymentMethod === 'sepa_debit'))
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
      };
    });

  const result: DonationsResponse = {
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

  cache = { data: result, at: Date.now() };
  return result;
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
