import type { APIRoute } from 'astro';
import { getDonations } from '../../data/donations';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(getDonations()), {
    headers: { 'Content-Type': 'application/json' },
  });
};
