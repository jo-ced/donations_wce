// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx(), alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
