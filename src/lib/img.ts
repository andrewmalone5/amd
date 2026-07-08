// Intrinsic dimensions for images under /public, so every <img> can carry
// width/height and the browser reserves its box before the file arrives —
// no layout shift as case studies load.
//
// The manifest is generated from the files themselves; after adding or
// re-exporting images, regenerate with sharp (see scripts note in README or
// re-run: for each public image, record its pixel width and height keyed by
// its /public-relative path).
import dims from '../data/image-dims.json';

const manifest = dims as Record<string, { width: number; height: number }>;

/** Width/height attributes for a /public-relative image path; {} if unknown. */
export function imgDims(path?: string): { width?: number; height?: number } {
  if (!path) return {};
  return manifest[path] ?? {};
}
