import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages on the custom domain andrewmalone.design.
// Domain root, so base is '/'. The CNAME lives at public/CNAME.
// All internal links go through src/lib/url.ts (withBase), so they resolve
// correctly at the root.
export default defineConfig({
  site: 'https://andrewmalone.design',
  base: '/',
});
