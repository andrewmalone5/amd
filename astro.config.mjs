import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages on the project path: andrewmalone5.github.io/amd/
//
// TO SWITCH TO A CUSTOM DOMAIN LATER:
//   1. set `base: '/'`
//   2. set `site` to the domain (e.g. 'https://mayaokonkwo.com')
//   3. add `public/CNAME` containing the bare domain
//   4. point DNS at GitHub Pages and set the domain in the repo Pages settings
// All internal links go through src/lib/url.ts (withBase), so nothing else changes.
export default defineConfig({
  site: 'https://andrewmalone5.github.io',
  base: '/amd',
});
