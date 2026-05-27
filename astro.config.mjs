import { defineConfig } from 'astro/config';

// This site is a GitHub user page served at the root domain,
// so `base` stays "/" and links like /work-experience work as-is.
export default defineConfig({
  site: 'https://fjmoguel.github.io',
});
