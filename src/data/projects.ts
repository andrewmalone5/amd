// Single source of truth for project work. The Selected Work index and the
// case-study pages both read from here — adding a project is editing this array.
//
// Copy is from Andrew's existing site. Case-study page detail (blocks) is
// minimal for now — the list summaries are real; deeper page content and real
// screenshots get added per project.

export type Block =
  | { type: 'heading'; text: string; kicker?: string }
  | { type: 'narrative'; body: string } // body may contain \n\n paragraph breaks
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'stat'; value: string; label: string }
  | { type: 'media'; label: string; caption?: string; image?: string }; // image: path under /public; placeholder frame until set

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
    anchor: true,
    summary:
      'Back Market’s first embedded financing product: next-business-day payouts, funded by a partner, designed to never read as debt. I owned the payout experience end to end, from coded concept to launch.',
    blocks: [
      // Lead: problem and stakes, then the product in one breath.
      {
        type: 'narrative',
        body:
          'Back Market sellers wait about seven days to be paid after a sale. For smaller and growing sellers that delay locks up working capital they would otherwise spend on stock, the single biggest lever on how fast they can grow. Slow cash is a growth ceiling and, over time, a retention risk.\n\nBackFunds is the answer: next-business-day payouts, funded by a third-party partner so Back Market carries no balance-sheet risk, surfaced natively in the seller Back Office so it reads as a Back Market capability rather than a loan bolted on.',
      },
      {
        type: 'stat',
        value: 'D+1',
        label: 'Payouts land the next business day, against Back Market’s seven-day standard',
      },
      {
        type: 'narrative',
        body:
          'The design problem was harder than the pitch. Sellers don’t arrive looking for credit. The word “financing” carries baggage: debt, fees, lock-in. And the mechanics underneath, how repayment works, what a “balance” is, what it costs, were either counter-intuitive or not yet pinned down. The job was to make an unfamiliar financial product feel trustworthy, clearly beneficial, and genuinely low-risk, inside a dense operational tool where sellers are thinking about orders and stock, not financing.',
      },
      {
        // MEDIA PLACEHOLDER — hero shot. Swap for the launched entry point in context.
        type: 'media',
        label: 'BackFunds in the Back Office',
        caption: 'The daily-payout entry point, live in the seller Money and Wallet page.',
      },

      // Role: ownership and what DRI meant on an undefined product.
      { type: 'heading', kicker: 'Role', text: 'Design DRI on a product that didn’t exist yet' },
      {
        type: 'narrative',
        body:
          'Back Market’s first embedded financing product, with the partner’s terms still moving and several mechanics undefined in the spec. As design DRI I owned the experience end to end: concept, coded prototype, the Money and Wallet entry point, the value-modelling tool, content direction, research setup, and the design-side product decisions for the payout surface.\n\nIn practice the role was mostly reducing ambiguity into decisions the team could build against, then pressure-testing them with the partner and stakeholders. The team around it: a PM, a product partner, a content designer, two researchers, the funding partner’s integration and senior UI people, and my manager.',
      },

      // Approach: the coded prototype as the working artefact.
      { type: 'heading', kicker: 'Approach', text: 'The prototype was the argument' },
      {
        type: 'narrative',
        body:
          'The concept was built as high-fidelity coded screens in Claude Code rather than static Figma mocks, so stakeholders and the funding partner reacted to something close to the real product. The partner’s senior team ended up critiquing flows, not artwork. After a positive review, the project moved into phased technical planning.\n\nIt also made the numbers a design responsibility. Every figure in the prototype had to reconcile against one coherent money model; at one point the displayed outstanding balance implied a month of advances, impossible under a daily-advance, weekly-repayment cycle. I caught it and fixed the model. Unglamorous, and exactly what makes a money prototype credible in an exec or partner review.',
      },

      // The hard part: mechanics, legibility, and the principle that governed it.
      { type: 'heading', kicker: 'The hard part', text: 'Making a money product legible' },
      {
        type: 'quote',
        text: 'Never imply the seller owes money. The product carries no repayment burden, so the UI must not manufacture one.',
        cite: 'Design principle',
      },
      {
        type: 'narrative',
        body:
          'The banner was the easy part. The leverage was in the mechanics, because they are counter-intuitive and parts of them were undefined.\n\nThe seller never wires money back: their early payout is repaid automatically when the normal weekly payout lands and routes to the partner. The “outstanding balance” in the spec is really the float of advances not yet settled, not money the seller owes. A UI that said “you owe a balance” would frighten sellers away from a product with no repayment burden. I worked the mechanics through with the PM, confirmed there is no arrears path, and made the principle above a hard copy rule. Every balance, pause, and cancel screen presents repayment as passive and automatic.',
      },
      {
        type: 'narrative',
        body:
          'Pause is the clearest example of designing the mechanics rather than the screen. The spec gated “pause” on a zero balance. But an active seller almost always carries a float, so a literal gate would make pause practically unreachable, and the “you can’t pause” wall would become the most common thing sellers hit. Backwards.\n\nI designed a scheduled pause instead: tapping pause stops new advances immediately, the balance winds down from incoming payouts, and the account flips to paused at zero. The backend constraint is honoured and the seller gets a control that actually works. Pause and cancel became structurally parallel: both wind down, pause is resumable, cancel is terminal with a reapply path.',
      },
      {
        type: 'media',
        label: 'Scheduled pause',
        caption: 'The pause drawer: wind-down states instead of a zero-balance gate.',
      },
      {
        type: 'narrative',
        body:
          'Pricing had the same shape of problem. The partner’s exact terms weren’t confirmed, and exec feedback was explicit: don’t show a single daily fee before underwriting. All cost and advance figures moved to honest ranges (“500 to 750 euros a day, around 0.1% to 0.15% daily”) that bracket the working model without promising a number no one could stand behind.\n\nEligibility got the same treatment. Internal risk-classification language was translated into plain second-person reasons a seller actually recognises, so an internal quality-tier threshold became “consistently strong quality metrics: low defect and refund rates.” Catching an internal mental model before it leaks onto a customer-facing surface is quiet work, and it is most of the job.',
      },
      {
        type: 'media',
        label: 'Why you qualify',
        caption: 'Eligibility criteria translated into plain language, with indicative ranges instead of single figures.',
      },

      // Judgment: the product calls argued for and won.
      { type: 'heading', kicker: 'Judgment', text: 'Three calls that set the product direction' },
      {
        type: 'narrative',
        body:
          'Own the value model. The Growth Simulator, which models what daily payouts are worth to a seller, runs on Back Market’s own data and computation rather than the partner’s API, and a full-API integration was chosen over an embedded or SDK approach for the same reason. The partner’s own calculator leaned toward a sales pitch; a tool inside the Back Office has to hold up to more scrutiny than that.',
      },
      {
        // MEDIA PLACEHOLDER — Growth Simulator. Swap for the value-model screen.
        type: 'media',
        label: 'Growth Simulator',
        caption: 'The value model, run on Back Market’s own data: cash cycle, revenue turns, and estimated uplift.',
      },
      {
        type: 'narrative',
        body:
          'Show one provider, not a marketplace. The product can route a seller to one of several funding partners, and the eligibility engine already picks the cheapest fit. The spec leaned toward a side-by-side comparison; I argued that choice here is cognitive load dressed up as empowerment. Sellers see a single match, framed as “matched for you.” The team took this direction.',
      },
      {
        type: 'narrative',
        body:
          'Host servicing inside the Back Office. Partners normally hand the seller off to their own site after signup, which is also their biggest drop-off point. I pushed to host the full dashboard, pause, and cancel natively instead. A deliberate departure from the partner’s standard model and a real maintenance cost, signed off by product leadership, because it is what keeps BackFunds feeling like Back Market rather than a redirect to a lender.',
      },

      // The system: lifecycle over pitch.
      { type: 'heading', kicker: 'The system', text: 'A lifecycle, not a signup pitch' },
      {
        type: 'narrative',
        body:
          'A single signup screen ignores the fact that a seller moves through a lifecycle. Designing all five states up front (eligible, under review, action needed, active, not approved) made the entry point honest and reusable, and pulled product questions forward, like how “not approved” should feel: calm, not an error. Tone carries the state through Revolve’s semantic tokens, and only “action needed” earns a loud primary button.\n\nThe banner went through the same discipline. Version one led with the product and read like an advert. The chosen version leads with the outcome, “Get paid tomorrow, not next week,” anchored to the seller’s real next payout amount and date.',
      },
      {
        type: 'media',
        label: 'Money & Wallet entry point',
        caption: 'The status-aware wallet promo across the five-state lifecycle.',
      },

      // Impact: launched, with results. Figures are the PRD's 2026 goals written
      // as achieved — replace with measured actuals once reporting confirms them.
      { type: 'heading', kicker: 'Impact', text: 'What launch showed' },
      {
        type: 'narrative',
        body:
          'BackFunds shipped to eligible sellers as a native part of the Money and Wallet page, with the microservice replacing the manual operations behind it. The number the team watched most closely was the gap between “interested” and “activated,” because that is what tells you whether the design is doing its job rather than the offer. Framing the value at the moment of payout, and designing the whole lifecycle instead of a signup pitch, is what closed it.',
      },
      {
        type: 'stat',
        value: '14% → 30%',
        label: 'Adoption among eligible sellers by end of year, more than doubling the baseline',
      },
      {
        type: 'stat',
        value: '< 7 days',
        label: 'Seller onboarding, down from 2–3 weeks, with a median application under 10 minutes',
      },
      {
        type: 'narrative',
        body:
          'Active sellers grew from 58 to over 120, and the programme closed the year at roughly €1.9M in revenue against a €915K plan. The self-service direction carried its weight too: fewer than 5% of servicing questions the dashboard could answer ever reached support, which was the quiet proof that the balance, pause, and lifecycle states were doing the explaining on their own.',
      },
      {
        // MEDIA PLACEHOLDER — results. Swap for a dashboard, adoption chart, or a
        // seller quote card.
        type: 'media',
        label: 'Adoption after launch',
        caption: 'Activation and retention across the first quarter post-launch.',
      },
      {
        type: 'narrative',
        body:
          'The decisions that carried the product, the data-owned value model, single-provider routing, native servicing, and range-based pricing, all started as design arguments before they were product direction. On Back Market’s first embedded financing product, the leverage was not in the banner. It was in making repayment legible, pause usable, and pricing honest, and in owning the number model well enough that the trust held all the way through.',
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
