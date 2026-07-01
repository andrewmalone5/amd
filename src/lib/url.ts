// Prefix an internal path with the configured base so links work whether the
// site is served at a subpath (e.g. github.io/amd) or at a domain root.
// Astro auto-handles base for asset imports, but NOT for hand-written hrefs —
// so every internal link goes through here.
const BASE = import.meta.env.BASE_URL; // '/amd/' on the project path, '/' at root

export function withBase(path: string): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  if (!path || path === '/') return `${base}/`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
