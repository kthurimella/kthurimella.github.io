import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kthurimella.github.io',
  outDir: './dist',
  build: {
    assets: '_astro',
  },
  integrations: [sitemap()],
});
