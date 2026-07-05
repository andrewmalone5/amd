// Single source of truth for project work. The Selected Work index and the
// case-study pages both read from here — adding a real project is editing this
// array, nothing else.
//
// A case-study page is composed from `blocks`: only the blocks a project needs,
// in any order. That's what lets density vary per project instead of forcing
// every story into the same template.
//
// COPY NOTE: titles, meta, and summaries are the placeholder persona verbatim.
// Pull-quote text and stat values/labels are extracted verbatim from those
// summaries. Media captions are placeholders. No new prose has been written.

export type Block =
  | { type: 'narrative'; body: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'stat'; value: string; label: string }
  | { type: 'media'; label: string; caption?: string };

export interface Project {
  num: string;
  slug: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  status?: string;
  anchor?: boolean;
  summary: string;
  image?: string; // thumbnail for the Selected Work list; falls back to a placeholder
  blocks: Block[];
}

export const projects: Project[] = [
  {
    num: '01',
    slug: 'refunds',
    image: '/work/refunds.svg', // placeholder — replace with a real thumbnail
    title: 'Rebuilding refunds from the ground up',
    client: 'Neobank',
    discipline: 'Payments',
    year: '2024–present',
    status: 'In progress',
    anchor: true,
    summary:
      'Refunds were the top driver of support tickets and the single worst-rated flow in the app. I led a full rebuild across three teams — mapping the reconciliation logic, redesigning the customer-facing states, and building a shared component set the payments org still uses. Adoption of the new flow hit 80% within two quarters and ticket volume dropped by a third.',
    // Richest page: the anchor. Narrative, a media slot, a pull quote, a stat.
    blocks: [
      {
        type: 'narrative',
        body:
          'Refunds were the top driver of support tickets and the single worst-rated flow in the app. I led a full rebuild across three teams — mapping the reconciliation logic, redesigning the customer-facing states, and building a shared component set the payments org still uses. Adoption of the new flow hit 80% within two quarters and ticket volume dropped by a third.',
      },
      {
        type: 'media',
        label: 'Prototype',
        caption: 'Placeholder — a live React prototype or image sequence mounts here.',
      },
      { type: 'quote', text: 'I led a full rebuild across three teams.' },
      { type: 'stat', value: '80%', label: 'adoption within two quarters' },
    ],
  },
  {
    num: '02',
    slug: 'instant-transfers',
    image: '/work/instant-transfers.svg', // placeholder — replace with a real thumbnail
    title: 'When “instant” isn’t',
    client: 'Neobank',
    discipline: 'Payments',
    year: '2023',
    summary:
      'Instant transfers aren’t instant when they fail. I designed the waiting and failure states nobody wants to think about.',
    // Deliberately minimal: two sentences, one block. Proves the template holds
    // at the shortest length without looking broken or empty.
    blocks: [
      {
        type: 'narrative',
        body:
          'Instant transfers aren’t instant when they fail. I designed the waiting and failure states nobody wants to think about.',
      },
    ],
  },
  {
    num: '03',
    slug: 'merchant-dashboard',
    image: '/work/merchant-dashboard.svg', // placeholder — replace with a real thumbnail
    title: 'A dashboard people opened on purpose',
    client: 'Neobank',
    discipline: 'Merchant Tools',
    year: '2022–23',
    summary:
      'Merchants ignored the analytics dashboard entirely. I rebuilt it around the one question they actually asked — “did I make money today?” — and it became the most-visited screen in the merchant product.',
    // Quote-led: opens on the question that reframed the project.
    blocks: [
      { type: 'quote', text: 'did I make money today?' },
      {
        type: 'narrative',
        body:
          'Merchants ignored the analytics dashboard entirely. I rebuilt it around the one question they actually asked — “did I make money today?” — and it became the most-visited screen in the merchant product.',
      },
    ],
  },
  {
    num: '04',
    slug: 'onboarding',
    image: '/work/onboarding.svg', // placeholder — replace with a real thumbnail
    title: 'Onboarding without the drop-off',
    client: 'Fintech startup',
    discipline: 'Mobile',
    year: '2021',
    summary:
      'New users abandoned signup at identity verification. I redesigned the flow around explaining why each step mattered, and cut drop-off at the verification step nearly in half.',
    // Number-led: opens on the outcome, then explains it.
    blocks: [
      { type: 'stat', value: 'Nearly half', label: 'drop-off at the verification step' },
      {
        type: 'narrative',
        body:
          'New users abandoned signup at identity verification. I redesigned the flow around explaining why each step mattered, and cut drop-off at the verification step nearly in half.',
      },
    ],
  },
];
