import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PREVIEW: deployed to the plain GitHub Pages URL so it's viewable now,
// before the custom domain's DNS is set — andrewmalone5.github.io/amd/
//
// TO GO LIVE ON THE CUSTOM DOMAIN (andrewmalone.design) once DNS is ready:
//   1. set `base: '/'`
//   2. set `site: 'https://andrewmalone.design'`
//   3. add `public/CNAME` containing `andrewmalone.design`
// All internal links go through src/lib/url.ts (withBase), so nothing else changes.
export default defineConfig({
  site: 'https://andrewmalone5.github.io',
  base: '/amd',
  integrations: [sitemap()],
});
