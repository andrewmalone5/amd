// Pre-launch switches.

/**
 * When true, unfilled media slots render as visible dashed placeholder frames
 * in the page flow (label, capture spec, planned caption) so asset gaps are
 * reviewable in place — including on the deployed site.
 *
 * LAUNCH CHECKLIST: flip to false before launch. Unfilled slots then go back
 * to rendering nothing publicly; their specs stay reachable through the
 * owner-only ?shotlist mode.
 */
export const showAssetSlots = true;
