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
    slug: 'backfunds',
    image: '/work/backfunds.svg',
    title: 'Getting sellers paid tomorrow, not next week',
    client: 'Back Market',
    discipline: 'Embedded Finance',
    year: '2026',
    status: 'In progress',
    anchor: true,
    summary:
      'Back Market’s first embedded financing product: next-business-day payouts, funded by a partner, designed to never read as debt. I owned the payout experience end to end, from coded concept to the full account lifecycle.',
    blocks: [
      {
        type: 'narrative',
        body:
          'Back Market sellers wait about seven days to be paid after a sale. For smaller and growing sellers that delay locks up working capital they would otherwise spend on stock, the single biggest lever on how fast they can grow. Slow cash is a growth ceiling and, over time, a retention risk. BackFunds is the answer: next-business-day payouts, funded by a third-party partner so Back Market carries no balance-sheet risk, surfaced natively in the seller Back Office so it reads as a Back Market capability rather than a loan bolted on. The design problem was harder than the pitch. Sellers don’t arrive looking for credit. The word “financing” carries baggage. And the mechanics underneath, how repayment works, what a “balance” is, what it costs, were either counter-intuitive or not yet pinned down.',
      },
      {
        type: 'stat',
        value: 'D+1',
        label: 'Payouts land the next business day, against Back Market’s seven-day standard',
      },
      {
        type: 'narrative',
        body:
          'I was design DRI on Back Market’s first embedded financing product, with the partner’s terms still moving and several mechanics undefined in the spec. In practice that meant reducing ambiguity into decisions the team could build against, then pressure-testing them with the partner and stakeholders. I owned the experience from coded concept through the Money and Wallet entry point, the value-modelling tool, and the full account lifecycle, working with a PM, a product partner, a content designer, two researchers, and the funding partner’s own team.',
      },
      {
        type: 'narrative',
        body:
          'The concept was built as high-fidelity coded screens in Claude Code rather than static mocks, so stakeholders and the funding partner reacted to something close to the real product. The partner’s senior team ended up critiquing flows, not artwork, and after a positive review the project moved into phased technical planning. It also made the numbers a design responsibility. Every figure in the prototype had to reconcile against one coherent money model; at one point the displayed outstanding balance implied a month of advances, impossible under a daily-advance, weekly-repayment cycle. I caught it and fixed the model. Unglamorous, and exactly what makes a money prototype credible in an exec review.',
      },
      {
        type: 'quote',
        text: 'Never imply the seller owes money. The product carries no repayment burden, so the UI must not manufacture one.',
        cite: 'Design principle',
      },
      {
        type: 'narrative',
        body:
          'The hardest work was making the mechanics honest and legible. The seller never wires money back: their early payout is repaid automatically when the normal weekly payout lands and routes to the partner. The “outstanding balance” in the spec is really the float of advances not yet settled, not money the seller owes. A UI that said “you owe a balance” would frighten sellers away from a product with no repayment burden. I worked the mechanics through with the PM, confirmed there is no arrears path, and made the principle above a hard copy rule. Every balance, pause, and cancel screen presents repayment as passive and automatic.',
      },
      {
        type: 'narrative',
        body:
          'The spec gated “pause” on a zero balance. But an active seller almost always carries a float, so a literal gate would make pause practically unreachable, and the “you can’t pause” wall would become the most common thing sellers hit. Backwards. I designed a scheduled pause instead: tapping pause stops new advances immediately, the balance winds down from incoming payouts, and the account flips to paused at zero. The backend constraint is honoured and the seller gets a control that actually works. Pause and cancel became structurally parallel: both wind down, pause is resumable, cancel is terminal with a reapply path.',
      },
      {
        type: 'media',
        label: 'Scheduled pause',
        caption: 'The pause drawer: wind-down states instead of a zero-balance gate.',
      },
      {
        type: 'narrative',
        body:
          'The partner’s exact pricing wasn’t confirmed, and exec feedback was explicit: don’t show a single daily fee before underwriting. All cost and advance figures moved to honest ranges (“500 to 750 euros a day, around 0.1% to 0.15% daily”) that bracket the working model without promising a number no one could stand behind. The same discipline applied to eligibility. Internal risk-classification language was translated into plain second-person reasons a seller actually recognises, so an internal quality-tier threshold became “consistently strong quality metrics: low defect and refund rates.”',
      },
      {
        type: 'media',
        label: 'Why you qualify',
        caption: 'Eligibility criteria translated into plain language, with indicative ranges instead of single figures.',
      },
      {
        type: 'narrative',
        body:
          'Two product calls I argued for shaped the architecture. First, show one provider, not a marketplace: the product can route a seller to one of several funding partners, and the eligibility engine already picks the cheapest fit, so a side-by-side comparison would be cognitive load dressed up as empowerment. Sellers see a single match, framed as “matched for you.” Second, host servicing inside the Back Office. Partners normally hand the seller off to their own site after signup, which is also their biggest drop-off point. I pushed to host the full dashboard, pause, and cancel natively instead. A deliberate departure and a real maintenance cost, signed off by product leadership, because it’s what keeps BackFunds feeling like Back Market rather than a redirect to a lender.',
      },
      {
        type: 'narrative',
        body:
          'A single signup pitch ignored the fact that a seller moves through a lifecycle. Designing all five states up front (eligible, under review, action needed, active, not approved) made the entry point honest and reusable, and pulled product questions forward, like how “not approved” should feel: calm, not an error. Tone carries the state through Revolve’s semantic tokens, and only “action needed” earns a loud primary button. The banner went through the same discipline. Version one led with the product and read like an advert. The chosen version leads with the outcome, “Get paid tomorrow, not next week,” anchored to the seller’s real next payout amount and date.',
      },
      {
        type: 'media',
        label: 'Money & Wallet entry point',
        caption: 'The status-aware wallet promo across the five-state lifecycle.',
      },
      {
        type: 'narrative',
        body:
          'BackFunds is pre-launch, so adoption numbers don’t exist yet and none are invented here. The early signal is commercial: before launch, the sales pipeline had reached roughly a third of the target seller list, with the first sellers signed and more in conversation. Design is currently paused, deliberately, while engineering and product finalise the integration architecture with the partner; the design file has been handed over as the single source of truth for the build. The design-driven decisions (data-owned value model, single-provider routing, native servicing, range-based pricing) are now the product direction.',
      },
    ],
  },
  {
    num: '02',
    slug: 'ai-seller-back-office',
    image: '/work/ai-seller-back-office.svg',
    title: 'Designing for AI in the seller back office',
    client: 'Back Market',
    discipline: 'Seller Back Office',
    year: '2025–present',
    status: 'In progress',
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
    num: '03',
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
    num: '04',
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
    num: '05',
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
