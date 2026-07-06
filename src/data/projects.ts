// Single source of truth for project work. The Selected Work index and the
// case-study pages both read from here — adding a project is editing this array.
//
// Copy is from Andrew's existing site. Case-study page detail (blocks) is
// minimal for now — the list summaries are real; deeper page content and real
// screenshots get added per project.

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
    slug: 'ai-seller-back-office',
    image: '/work/ai-seller-back-office.svg',
    title: 'Designing for AI in the seller back office',
    client: 'Back Market',
    discipline: 'Seller Back Office',
    year: '2025–present',
    status: 'In progress',
    anchor: true,
    summary:
      'A multi-year programme bringing machine intelligence into Back Market’s seller platform: automated pricing, an AI assistant, the Automation Spectrum, trust framework, and sequencing model that shaped every feature decision.',
    blocks: [
      {
        type: 'narrative',
        body:
          'A multi-year programme bringing machine intelligence into Back Market’s seller platform: automated pricing, an AI assistant, the Automation Spectrum, trust framework, and sequencing model that shaped every feature decision.',
      },
      { type: 'media', label: 'Screenshot', caption: 'Placeholder — add a screenshot.' },
    ],
  },
  {
    num: '02',
    slug: 'deals-programme',
    image: '/work/deals-programme.svg',
    title: 'Commission rates don’t move sellers. Margin math does.',
    client: 'Back Market',
    discipline: 'Deals Programme',
    year: '2025',
    summary:
      'Back Market’s Deals programme offered sellers reduced commission, but with no product surface, no margin context, and no way to self-evaluate, adoption was near zero. I designed three iterations of in-product decision support, each one earned by the signal the last one generated.',
    blocks: [
      {
        type: 'narrative',
        body:
          'Back Market’s Deals programme offered sellers reduced commission, but with no product surface, no margin context, and no way to self-evaluate, adoption was near zero. I designed three iterations of in-product decision support, each one earned by the signal the last one generated.',
      },
      { type: 'media', label: 'Screenshot', caption: 'Placeholder — add a screenshot.' },
    ],
  },
  {
    num: '03',
    slug: 'back-office-homepage',
    image: '/work/back-office-homepage.svg',
    title: 'Making the homepage worth opening',
    client: 'Back Market',
    discipline: 'Seller Back Office',
    year: '2024–25',
    summary:
      'Sellers had stopped using the Back Office homepage entirely, bookmarking around it to reach Orders and Insights directly. I redesigned the content layer to answer a seller’s first-60-seconds questions. By mid-2025, the #1 most-visited page in the product.',
    blocks: [
      {
        type: 'narrative',
        body:
          'Sellers had stopped using the Back Office homepage entirely, bookmarking around it to reach Orders and Insights directly. I redesigned the content layer to answer a seller’s first-60-seconds questions. By mid-2025, the #1 most-visited page in the product.',
      },
      { type: 'media', label: 'Screenshot', caption: 'Placeholder — add a screenshot.' },
    ],
  },
  {
    num: '04',
    slug: 'care-gap',
    image: '/work/care-gap.svg',
    title: 'Closing the gap between appointments.',
    client: 'Integris Healthcare',
    discipline: 'Mobile App',
    year: '2022',
    summary:
      'Patients drift from their care plans when there’s nothing connecting their between-clinic visits. TahoeMe was designed to close that gap, building the habits and trust that keep patients engaged with their treatment.',
    blocks: [
      {
        type: 'narrative',
        body:
          'Patients drift from their care plans when there’s nothing connecting their between-clinic visits. TahoeMe was designed to close that gap, building the habits and trust that keep patients engaged with their treatment.',
      },
      { type: 'media', label: 'Screenshot', caption: 'Placeholder — add a screenshot.' },
    ],
  },
];
