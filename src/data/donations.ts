const donations = [
  { id: 'don_1a2b3c4d', amount: 15000, name: 'Mehmet K.', anonymous: false, created: 1739836800 },
  { id: 'don_2b3c4d5e', amount: 7500, name: 'Sarah L.', anonymous: false, created: 1739923200 },
  { id: 'don_3c4d5e6f', amount: 20000, name: null, anonymous: true, created: 1740096000 },
  { id: 'don_4d5e6f7g', amount: 5000, name: 'Julia R.', anonymous: false, created: 1740268800 },
  { id: 'don_5e6f7g8h', amount: 10000, name: null, anonymous: true, created: 1740355200 },
  { id: 'don_6f7g8h9i', amount: 3000, name: 'Emre B.', anonymous: false, created: 1740528000 },
  { id: 'don_7g8h9i0j', amount: 4500, name: 'Claudia W.', anonymous: false, created: 1740700800 },
  { id: 'don_8h9i0j1k', amount: 2500, name: null, anonymous: true, created: 1740787200 },
  { id: 'don_9i0j1k2l', amount: 6000, name: 'Fatma Ö.', anonymous: false, created: 1740960000 },
  { id: 'don_0j1k2l3m', amount: 4000, name: 'Thomas H.', anonymous: false, created: 1741132800 },
  { id: 'don_1k2l3m4n', amount: 1500, name: null, anonymous: true, created: 1741219200 },
  { id: 'don_2l3m4n5o', amount: 8000, name: 'Lena M.', anonymous: false, created: 1741392000 },
  { id: 'don_3m4n5o6p', amount: 2000, name: 'Ali C.', anonymous: false, created: 1741564800 },
  { id: 'don_4n5o6p7q', amount: 3500, name: 'Marie D.', anonymous: false, created: 1741651200 },
  { id: 'don_5o6p7q8r', amount: 1000, name: null, anonymous: true, created: 1741737600 },
  { id: 'don_6p7q8r9s', amount: 2500, name: 'Hakan T.', anonymous: false, created: 1741824000 },
  { id: 'don_7q8r9s0t', amount: 4400, name: 'Sofia P.', anonymous: false, created: 1741910400 },
];

const campaign = {
  id: 'cmp_velit-hearing-aids',
  object: 'campaign' as const,
  goal: 130000,
  currency: 'eur',
};

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
  campaign: typeof campaign;
}

export function getDonations(): DonationsResponse {
  const data: DonationItem[] = donations.map((d) => ({
    id: d.id,
    object: 'donation',
    amount: d.amount,
    currency: 'eur',
    status: 'succeeded',
    created: d.created,
    donor: {
      name: d.anonymous ? null : d.name,
      anonymous: d.anonymous,
    },
    metadata: {},
  }));

  return {
    object: 'list',
    url: '/api/donations.json',
    has_more: false,
    data,
    campaign,
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
