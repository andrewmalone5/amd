// Single source of truth for project work. The Selected Work index and the
// case-study pages both read from here — adding a real project is editing this
// array, nothing else. All copy is the placeholder persona, verbatim.

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
}

export const projects: Project[] = [
  {
    num: '01',
    slug: 'refunds',
    title: 'Rebuilding refunds from the ground up',
    client: 'Neobank',
    discipline: 'Payments',
    year: '2024–present',
    status: 'In progress',
    anchor: true,
    summary:
      'Refunds were the top driver of support tickets and the single worst-rated flow in the app. I led a full rebuild across three teams — mapping the reconciliation logic, redesigning the customer-facing states, and building a shared component set the payments org still uses. Adoption of the new flow hit 80% within two quarters and ticket volume dropped by a third.',
  },
  {
    num: '02',
    slug: 'instant-transfers',
    title: 'When “instant” isn’t',
    client: 'Neobank',
    discipline: 'Payments',
    year: '2023',
    summary:
      'Instant transfers aren’t instant when they fail. I designed the waiting and failure states nobody wants to think about.',
  },
  {
    num: '03',
    slug: 'merchant-dashboard',
    title: 'A dashboard people opened on purpose',
    client: 'Neobank',
    discipline: 'Merchant Tools',
    year: '2022–23',
    summary:
      'Merchants ignored the analytics dashboard entirely. I rebuilt it around the one question they actually asked — “did I make money today?” — and it became the most-visited screen in the merchant product.',
  },
  {
    num: '04',
    slug: 'onboarding',
    title: 'Onboarding without the drop-off',
    client: 'Fintech startup',
    discipline: 'Mobile',
    year: '2021',
    summary:
      'New users abandoned signup at identity verification. I redesigned the flow around explaining why each step mattered, and cut drop-off at the verification step nearly in half.',
  },
];
