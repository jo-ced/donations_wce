export const prerender = false;

import type { APIRoute } from 'astro';
import { fetchDonations } from '../../data/donations';

export const GET: APIRoute = async () => {
  try {
    const data = await fetchDonations();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('[Donations API]', err.message);
    return new Response(
      JSON.stringify({ error: 'Spenden konnten nicht geladen werden.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
