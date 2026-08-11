// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain produksi — dipakai sitemap & tag canonical.
export default defineConfig({
  site: 'https://ngopisam.biz.id',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
