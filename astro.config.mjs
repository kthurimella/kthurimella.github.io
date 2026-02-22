import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kthurimella.github.io',
  outDir: './dist',
  build: {
    assets: '_astro',
  },
});
