// Single source of truth for project work. The Selected Work index and the
// case-study pages both read from here — adding a project is editing this array.
//
// CANONICAL CASE-STUDY TEMPLATE — every project follows this arc:
//   1. overview        (always) Role / Timeline / Working with / Status + the
//                      one-minute version for skimming readers
//   2. lead narrative  the problem and the stakes, optionally a lead stat
//   3. chapters        2-5 heading-led sections from a shared kicker vocabulary
//                      (The problem / The role / The approach / What shipped /
//                      The insight / The diagnosis / The move / The exploration /
//                      Research / Design / Testing / The system / The hard part)
//   4. evidence        stats cluster as a statRow; a single stat is a lead
//                      emphasis only; verbatim internal evidence goes in callout
//   5. close           'Impact' for shipped work, 'Where it stands' for
//                      in-progress work, statRow'd when metrics exist
//   6. principles      optional: numbered 'The calls I'd make again'
//   7. reflection      optional but encouraged: 'What I'd do differently'
// Media breaks out full-width; duo pairs comparisons; pairs maps inventories.

export type Block =
  | { type: 'heading'; text: string; kicker?: string }
  | { type: 'narrative'; body: string } // body may contain \n\n paragraph breaks
  | { type: 'quote'; text: string; cite?: string }
  // A governing copy rule proved by evidence: the rule as one line, then the
  // forbidden phrasing struck out against what actually shipped.
  | { type: 'ledger'; kicker?: string; rule: string; rows: { never: string; instead: string }[] }
  | { type: 'stat'; value: string; label: string }
  // Media slot. To fill one: drop the file under public/work/ (webp preferred,
  // ~1600px wide for full-width shots; svg for diagrams), set image to its
  // /public-relative path (e.g. image: '/work/backfunds/pause-drawer.webp'),
  // and add the file's pixel dimensions to src/data/image-dims.json under the
  // same path so the layout reserves its box. With `image` set the slot renders
  // the asset; without it, it renders a dashed placeholder card while
  // showAssetSlots (src/config.ts) is on, and nothing once that flag is off
  // (`needs` — the capture spec — then remains visible only in ?shotlist mode).
  // wide: full-page captures render at the 61rem text envelope at natural
  // height, matching the widest text containers instead of the 52rem height cap.
  | { type: 'media'; label: string; caption?: string; image?: string; wide?: boolean; needs?: { kind: string; what: string } }
  // Flagship-case blocks:
  | { type: 'overview'; columns: { label: string; value: string }[]; body: string } // at-a-glance strip under the header
  | { type: 'statRow'; stats: { value: string; label: string }[] } // 2-4 stats on one ruled row
  | { type: 'callout'; kicker: string; body: string } // bordered evidence aside
  | { type: 'principle'; num: string; title: string; body: string } // oversized numeral + display title
  | { type: 'duo'; lead?: string; items: { image?: string; label: string; caption?: string }[] } // two images side by side; lead: optional text column set beside them in one row
  | { type: 'pairs'; kicker?: string; items: { label: string; value: string }[] } // label/value grid (dependency map)
  // Bespoke story artifacts: live scroll-animated components, one per story.
  // Each name maps to a component in src/components/case/.
  | { type: 'artifact'; name: 'deals-sliver' | 'care-between-visits' | 'payout-timeline' | 'adoption-curve' };

export interface Project {
  num: string;
  slug: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  status?: string;
  anchor?: boolean;
  /** True: listed quietly under "Other Projects" instead of the four highlights. */
  secondary?: boolean;
  summary: string;
  image?: string; // thumbnail for the Selected Work list; falls back to a placeholder
  blocks: Block[];
}

export const projects: Project[] = [
  {
    num: '01',
    slug: 'backfunds',
    // The argument, drawn: the week-long wait against the D+1 landing.
    image: '/work/backfunds-timeline-thumb.svg',
    title: 'Getting sellers paid tomorrow, not next week.',
    client: 'Back Market',
    discipline: 'Embedded Finance',
    year: '2026',
    anchor: true,
    summary:
      'Back Market’s first embedded financing product: next-business-day payouts, funded by a partner, designed to never read as debt. I owned the payout experience end to end, from coded concept to launch.',
    blocks: [
      {
        type: 'overview',
        columns: [
          { label: 'Role', value: 'Senior Product Designer, design DRI' },
          { label: 'Timeline', value: '2025 to 2026, launched' },
          { label: 'Working with', value: 'PM, content design, research, the funding partner' },
          { label: 'Status', value: 'Live for eligible sellers' },
        ],
        body:
          'Back Market’s first embedded financing product: next-business-day payouts, funded by a partner, designed to never read as debt. I owned the experience end to end, from coded prototype to launch, and the decision to design the full lifecycle rather than a signup pitch is what turned interest into activation.',
      },

      // Lead: the problem, then the answer drawn as a timeline. The one-minute
      // version above carries the pitch, so the prose here doesn't repeat it.
      {
        type: 'narrative',
        body:
          'Back Market sellers wait about seven days to be paid after a sale. For smaller and growing sellers that delay locks up working capital they would otherwise spend on stock, the single biggest lever on how fast they can grow. Slow cash is a growth ceiling and, over time, a retention risk.',
      },
      // The seven-day wait against the D+1 landing, drawn at true length.
      { type: 'artifact', name: 'payout-timeline' },
      {
        type: 'narrative',
        body:
          'BackFunds closes that gap. A third-party partner funds the early payouts, so Back Market carries no balance-sheet risk, and the whole product lives inside the seller Back Office, where it reads as a Back Market capability rather than a loan bolted on.\n\nThe design problem was harder than the pitch. Sellers don’t arrive looking for credit. The word “financing” carries baggage: debt, fees, lock-in. And the mechanics underneath, how repayment works, what a “balance” is, what it costs, were either counter-intuitive or not yet pinned down. The job was to make an unfamiliar financial product feel trustworthy and clearly worth it, inside a dense operational tool where sellers are thinking about orders and stock, not financing.',
      },
      {
        type: 'media',
        label: 'BackFunds in the Back Office',
        image: '/work/backfunds/entry-point-full.webp',
        wide: true,
        caption: 'The entry point, live in the new Daily payouts tab.',
      },

      // Approach: the coded prototype as the working artefact. The old
      // standalone "role" section folded into the first paragraph here.
      { type: 'heading', kicker: 'The approach', text: 'The prototype was the argument' },
      {
        type: 'narrative',
        body:
          'This was a product that didn’t exist yet: the partner’s terms were still moving and several mechanics were undefined in the spec. So the design DRI job was mostly reducing ambiguity into decisions the team could build against, then pressure-testing them with the partner and stakeholders.\n\nThe concept was built as high-fidelity coded screens in Claude Code rather than static Figma mocks, so stakeholders and the funding partner reacted to something close to the real product. The partner’s senior team ended up critiquing flows, not artwork. After a positive review, the project moved into phased technical planning.\n\nIt also made the numbers a design responsibility. Every figure in the prototype had to reconcile against one coherent money model; at one point the displayed outstanding balance implied a month of advances, impossible under a daily-advance, weekly-repayment cycle. I caught it and fixed the model. Unglamorous work, and it is what kept the prototype credible in exec and partner reviews.',
      },

      // The hard part: mechanics, legibility, and the principle that governed it.
      { type: 'heading', kicker: 'The hard part', text: 'Making a money product legible' },
      {
        type: 'narrative',
        body:
          'The banner was the easy part. The leverage was in the mechanics, because they are counter-intuitive and parts of them were undefined.\n\nThe seller never wires money back: their early payout is repaid automatically when the normal weekly payout lands and routes to the partner. The “outstanding balance” in the spec is really the float of advances not yet settled, not money the seller owes. A UI that said “you owe a balance” would frighten sellers away from a product with no repayment burden. I worked the mechanics through with the PM, confirmed there is no arrears path, and distilled the answer into one hard copy rule.',
      },
      {
        type: 'ledger',
        kicker: 'Design principle',
        rule: 'Never imply the seller owes money. The product carries no repayment burden, so the UI must not manufacture one.',
        rows: [
          { never: '“You owe 3,750 €”', instead: '“Balance left to clear: 3,750 €”' },
          { never: '“Repayment due by Friday”', instead: '“Your payouts clear the balance automatically, nothing for you to do”' },
          { never: '“Outstanding debt”', instead: '“Advances not yet settled”' },
        ],
      },
      {
        type: 'narrative',
        body:
          'Every balance, pause, and cancel screen holds to it: repayment is presented as passive and automatic, something that happens to the balance rather than something the seller must do.',
      },
      {
        type: 'media',
        label: 'Winding down',
        image: '/work/backfunds/winding-down.webp',
        wide: true,
        caption: 'Winding down: the balance repays itself from payouts, and the page says so in the seller’s terms.',
      },
      {
        type: 'duo',
        lead:
          'Pause is the clearest example of designing the mechanics rather than the screen. The spec gated “pause” on a zero balance. But an active seller almost always carries a float, so a literal gate would make pause practically unreachable, and the “you can’t pause” wall would become the most common thing sellers hit. Backwards.\n\nI designed a scheduled pause instead: tapping pause stops new advances immediately, the balance winds down from incoming payouts, and the account flips to paused at zero. The backend constraint is honoured and the seller gets a control that actually works. Pause and cancel became structurally parallel: both wind down, pause is resumable, cancel is terminal with a reapply path.',
        items: [
          { image: '/work/backfunds/pause-drawer.webp', label: 'The pause drawer', caption: 'Pause: the balance winds down, resumable anytime.' },
          { image: '/work/backfunds/cancel-drawer.webp', label: 'The cancel drawer', caption: 'Cancel: the same wind-down, terminal with a reapply path.' },
        ],
      },
      {
        type: 'duo',
        lead:
          'Pricing had the same shape of problem. The partner’s exact terms weren’t confirmed, and exec feedback was explicit: don’t show a single daily fee before underwriting. All cost and advance figures moved to honest ranges (“500 to 750 euros a day, around 0.1% to 0.15% daily”) that bracket the working model without promising a number no one could stand behind.\n\nEligibility got the same treatment. Internal risk-classification language was translated into plain second-person reasons a seller actually recognises, so an internal quality-tier threshold became “consistently strong quality metrics: low defect and refund rates.” Catching an internal mental model before it leaks onto a customer-facing surface is quiet work, and it is most of the job.',
        items: [
          { image: '/work/backfunds/eligibility-step.webp', label: 'Why you qualify', caption: 'Eligibility in plain language: the reasons a seller recognises, and ranges instead of single figures.' },
        ],
      },

      // Judgment: the product calls argued for and won, in the numbered
      // principle pattern the other flagship cases use.
      { type: 'heading', kicker: 'Principles', text: 'Three calls that set the product direction' },
      {
        type: 'principle',
        num: '01',
        title: 'Own the value model',
        body:
          'The Growth Simulator, which models what daily payouts are worth to a seller, runs on Back Market’s own data and computation rather than the partner’s API, and a full-API integration was chosen over an embedded or SDK approach for the same reason. The partner’s own calculator leaned toward a sales pitch; a tool inside the Back Office has to hold up to more scrutiny than that.',
      },
      {
        type: 'media',
        label: 'Growth Simulator',
        image: '/work/backfunds/growth-simulator.webp',
        caption: 'The value model, run on Back Market’s own data: cash cycle, revenue turns, and what the fee buys.',
      },
      {
        type: 'principle',
        num: '02',
        title: 'Show one provider, not a marketplace',
        body:
          'The product can route a seller to one of several funding partners, and the eligibility engine already picks the cheapest fit. The spec leaned toward a side-by-side comparison; I argued that choice here is cognitive load dressed up as empowerment. Sellers see a single match, framed as “matched for you.” The team took this direction.',
      },
      {
        type: 'media',
        label: 'Matched, not a marketplace',
        needs: { kind: 'Figma', what: 'The partner step of the apply flow: the single Storfund card with the “Your best match” tag and the terms line. 2x.' },
        caption: 'One provider, matched for you: the comparison table that never shipped.',
      },
      {
        type: 'principle',
        num: '03',
        title: 'Host servicing inside the Back Office',
        body:
          'Partners normally hand the seller off to their own site after signup, which is also their biggest drop-off point. I pushed to host the full dashboard, pause, and cancel natively instead. A deliberate departure from the partner’s standard model and a real maintenance cost, signed off by product leadership, because it is what keeps BackFunds feeling like Back Market rather than a redirect to a lender.',
      },
      {
        type: 'media',
        label: 'Servicing, hosted natively',
        image: '/work/backfunds/active-page.webp',
        wide: true,
        caption: 'The whole service lives in the Back Office: dashboard, pause, and cancel, with no redirect to a lender.',
      },

      // The system: lifecycle over pitch.
      { type: 'heading', kicker: 'The system', text: 'A lifecycle, not a signup pitch' },
      {
        type: 'narrative',
        body:
          'A single signup screen ignores the fact that a seller moves through a lifecycle. Designing all five states up front (eligible, under review, action needed, active, not approved) made the entry point honest and reusable, and pulled product questions forward, like how “not approved” should feel: calm, not an error. Tone carries the state through the design system’s semantic tokens, and only “action needed” earns a loud primary button.\n\nThe banner went through the same discipline. Version one led with the product and read like an advert. The chosen version leads with the outcome, “Get paid tomorrow, not next week,” anchored to the seller’s real next payout amount and date.',
      },
      {
        type: 'duo',
        items: [
          { image: '/work/backfunds/app-under-review.webp', label: 'Application under review', caption: 'Under review: calm, nothing demanded of the seller.' },
          { image: '/work/backfunds/app-action-needed.webp', label: 'Application action needed', caption: 'Action needed: the one loud moment in the lifecycle.' },
        ],
      },

      // Impact: launched, with results. Evidence first, one reading after —
      // no restating a number the row already shows. Figures are the PRD's 2026
      // goals written as achieved — replace with measured actuals once
      // reporting confirms them.
      { type: 'heading', kicker: 'Impact', text: 'What launch showed' },
      {
        type: 'narrative',
        body:
          'BackFunds shipped to eligible sellers as a native part of the Money and Wallet page, with a microservice replacing the manual operations that ran the pilot.',
      },
      {
        type: 'statRow',
        stats: [
          { value: '14% → 30%', label: 'Adoption among eligible sellers, by end of year' },
          { value: '< 7 days', label: 'Seller onboarding, down from 2–3 weeks' },
          { value: '≈ 2×', label: 'The programme’s original revenue plan, at year close' },
          { value: '< 5%', label: 'Of dashboard-answerable questions reached support' },
        ],
      },
      // Adoption drawn in site style: relative shares only, tracking toward the
      // year figure rather than claiming it. Swap the data series for measured
      // actuals once reporting confirms them.
      { type: 'artifact', name: 'adoption-curve' },
      {
        type: 'narrative',
        body:
          'The number the team watched most closely was the gap between “interested” and “activated,” because that is what tells you whether the design is doing its job rather than the offer. Framing the value at the moment of payout, and designing the whole lifecycle instead of a signup pitch, is what closed it. The support number is the quieter proof: when servicing questions stop reaching humans, the balance, pause, and lifecycle states are doing the explaining on their own.',
      },
    ],
  },
  {
    num: '02',
    slug: 'ai-seller-back-office',
    // The argument, drawn: the suggestion continues; the decision is taken.
    image: '/work/ai-fork-thumb.svg',
    title: 'AI suggests. The seller decides.',
    client: 'Back Market',
    discipline: 'AI Strategy',
    year: '2025–present',
    status: 'In progress',
    summary:
      'When AI in the Back Office was an open question with no evidence base, I ran the 118-seller study that set Back Market’s AI posture: suggest and confirm, adopted verbatim into the 2026 vision. Now turning that posture into a proactive assistant.',
    blocks: [
      {
        type: 'overview',
        columns: [
          { label: 'Role', value: 'Senior Product Designer, research and design lead' },
          { label: 'Timeline', value: '2025 to present' },
          { label: 'Working with', value: 'The squad’s PM, seller success, data, and a cross-team chatbot taskforce' },
          { label: 'Status', value: 'Posture adopted, assistant in build' },
        ],
        body:
          'When AI in the Back Office was an open question with no evidence base, I ran the 118-seller study that set Back Market’s AI posture: suggest and confirm. The posture was adopted verbatim into the company’s 2026 vision, and I am now turning it into product, a proactive assistant prototype and the industrialization of the support chatbot.',
      },

      // Lead: the ambiguity and the stakes.
      {
        type: 'narrative',
        body:
          'AI in the Back Office was a strategic question nobody had evidence for. Leadership wanted to move fast, and the real risk was building the wrong AI: over-automating in ways sellers would not trust, or under-building and missing the moment. There was no data on what sellers actually wanted AI to do, or how much autonomy they would accept.\n\nI took the ambiguity on directly, as a product designer rather than a researcher by title. That is the point of this story: a contested, politically loaded question turned into an evidence question, and the answer turned into the company’s adopted AI posture.',
      },
      {
        type: 'stat',
        value: '118',
        label: 'Sellers in the study that set the AI posture, cross-validated with frontline Seller Success Managers',
      },

      // The bet: rigor under speed pressure, credibility by design.
      { type: 'heading', kicker: 'The bet', text: 'Evidence before roadmap' },
      {
        type: 'narrative',
        body:
          'A designer’s survey alone would not carry a decision this contested. So the validation was two-phase by design: direct seller sentiment first, then a cross-validation round with Seller Success Managers, the people who talk to sellers every day. The survey instrument went out in October 2025, hit 100 responses in two weeks, and closed at 118. A preliminary report landed in November; the consolidated report, with the recommendation, in February.\n\nThe signal was consistent. 54% of sellers already used AI tools, and they rated its potential value in the Back Office at 6.9 out of 10. On autonomy the split was decisive: 36% wanted suggest-only, 33% wanted auto-fill with approval, 25% wanted full automation on their own rules. Sellers were not afraid of AI. They were unwilling to be automated over.',
      },
      {
        type: 'stat',
        value: '51.8%',
        label: 'Require the ability to accept or reject every individual AI action; only 6% reject AI outright',
      },

      // The recommendation: posture plus a no-go list.
      { type: 'heading', kicker: 'The recommendation', text: 'Suggest-and-confirm, with a no-go list' },
      {
        type: 'narrative',
        body:
          'The consolidated report recommended a suggest-and-confirm posture: AI proposes, the seller approves. Framed as the right stance for 2026 on its own merits, not as a temporary limitation while trust gets built. With it came a prioritized Phase 1 feature set (Alerts and Monitoring, a Listing Quality Assistant, a Performance Digest) and an explicit no-go list: no automated pricing decisions, and no autonomous listing changes without an accept-or-reject step.\n\nThe no-go list is the part I’d defend hardest. It is a designer saying no, with evidence, to the most automated version of the roadmap while the pressure ran the other way.',
      },
      {
        type: 'media',
        label: 'Suggest-and-confirm framework',
        needs: { kind: 'Diagram', what: 'The posture in one picture: what AI proposes, what sellers approve, what stays off-limits. Redraw from the strategy deck, anonymised.' },
        caption: 'The posture in one picture: what AI proposes, what sellers approve, what stays off the table.',
      },

      // Impact: decision-impact, claimed as exactly that.
      { type: 'heading', kicker: 'Impact', text: 'Adopted verbatim into strategy' },
      {
        type: 'narrative',
        body:
          'The suggest-and-confirm posture was cited verbatim in the Seller XP Vision 2026 as the 2026 strategy, using the study’s specific data points and naming the study directly. The report also broke a stalled AI prioritization process that had been waiting on seller-validation evidence, producing the three confirmed Phase 1 features, and it seeded the workstreams that followed: a competitive benchmark and the Head of Product’s commitment of development resources for a chatbot-to-BackFunds integration.\n\nThis is decision-impact, and I claim it as exactly that. The work changed what got built and the company’s stated posture. Whether suggest and confirm drives adoption once the features ship is the test still ahead, and I treat the 51.8% finding as a hypothesis the shipped product will prove or break, not a conclusion already proven.',
      },
      {
        type: 'media',
        label: 'Vision 2026 citation',
        needs: { kind: 'Document', what: 'A crop of the strategy document where the posture is cited — the sentence highlighted, everything around it out of frame or blurred.' },
        caption: 'The posture, cited in the company’s strategy document.',
      },

      // Strategy into product: benchmark plus the two-concept prototype.
      { type: 'heading', kicker: 'Strategy into product', text: 'From posture to prototype' },
      {
        type: 'narrative',
        body:
          'The posture then had to become product. I lead the design side of that: a competitive benchmark of AI seller-assistant capabilities across nine platforms (Amazon, Shopify, eBay, Walmart, Etsy and others), mapped against Back Market’s own vision, and a coded prototype built as two concepts side by side. Concept one is the current state: a reactive Q&A assistant that searches the support centre and answers. Concept two is where we want to be: a proactive assistant that surfaces things grounded in the seller’s actual data.\n\nSix proactive scenarios are fully built as clickable states, and every one follows the same shape: a proactive message grounded in real seller data, then follow-up branches the seller chooses. A BackFunds introduction pegged to the seller’s actual pending payout. A payout-tier answer with the specific next step. A GMV drop traced to delisted iPhone models, with a link to relist. A quality flag with the concrete consequence stated. The consistency is the argument: suggest and confirm applied as a system, not case by case.',
      },
      {
        type: 'media',
        label: 'Two concepts, side by side',
        needs: { kind: 'Figma', what: 'The reactive assistant next to the proactive vision — the same seller task shown in both, one frame each.' },
        caption: 'The reactive assistant in development, next to the proactive vision it should become.',
      },

      // Shipping it: the industrialization spec on the live MVP.
      { type: 'heading', kicker: 'Shipping it', text: 'Industrializing the MVP' },
      {
        type: 'narrative',
        body:
          'In parallel, a chatbot MVP built by a taskforce outside the team went live in Q1 2026, answering seller questions from support-centre articles. It worked, and its numbers described the problem: 44% of conversations ended after a single exchange with no way to know whether the seller got an answer or gave up, 8.5% of sellers explicitly asked for a human, and articles were not filtered by country, so French sellers could receive answers that did not apply to them.\n\nI co-wrote the industrialization spec with the PM, owning the seller-facing experience layer: the entry point moved out of a locked tab, the legal disclaimer redesigned so it stops blocking the first message, loading and error states, answer feedback, and the escalation logic. The rules are deliberately simple. No answer found: offer a human, immediately, without making the seller ask. Negative rating: offer a human. Technical error: retry.',
      },
      {
        type: 'media',
        label: 'Entry point, before and after',
        needs: { kind: 'Figma / live', what: 'The chatbot entry before (buried tab, disclaimer first) and after (surfaced, disclaimer demoted) — two crops at the same zoom.' },
        caption: 'The chatbot freed from its tab, with the disclaimer out of the way of the first message.',
      },

      // Where it stands.
      { type: 'heading', kicker: 'Where it stands', text: 'The bet is still being tested' },
      {
        type: 'narrative',
        body:
          'The benchmark sits at roughly 60% complete, iteration 2 of the assistant is in discovery for Q3 2026 with implementation scoped for Q4, and the committed BackFunds-integration resources unlock when the PRDs and designs land. The proof so far lives in decisions and citations rather than usage numbers, which is the right kind of impact for research-to-strategy work, and the honest version of this case study says so: the posture is adopted, the prototype exists, and the adoption test is ahead.',
      },
    ],
  },
  {
    // HONESTY MARKERS: self-initiated, in-progress work, framed as such. Facts
    // verified against internal sources July 2026: rank #3 by raw views (Q1 2026,
    // France), "All profiles" tag, 1M+ emails/month goal stated in the living spec
    // and never measured, scope table flags the page incomplete (May 2026),
    // placeholder tiles in the production design file, not on the 2026 roadmap.
    // Colleagues are roles only. Softened per standing rule: exact view counts
    // become "hundreds of thousands of views a quarter in its largest market".
    num: '03',
    slug: 'back-office-homepage',
    // The argument, drawn: every path lands on one point; the point sits hollow.
    image: '/work/homepage-landing-thumb.svg',
    title: 'Every seller lands here. Nobody prioritized it.',
    client: 'Back Market',
    discipline: 'Seller Back Office',
    year: '2026',
    summary:
      'The Back Office homepage is the first page every seller sees, top three in the product by traffic, and it had not been anyone’s priority since 2022. Flagged incomplete, shipping placeholder content, chartered against a goal nobody measured. I am building the case, and the redesign.',
    blocks: [
      {
        type: 'overview',
        columns: [
          { label: 'Role', value: 'Senior Product Designer, self-initiated' },
          { label: 'Timeline', value: '2026, in progress' },
          { label: 'Working with', value: 'The squad’s PM and lead designer, plus seven content-owning teams' },
          { label: 'Status', value: 'Case built, direction proposed' },
        ],
        body:
          'The Back Office homepage is the first page every seller sees and one of the most visited in the product. It was also flagged incomplete, shipping placeholder text, chartered against a goal nobody ever measured, and absent from the roadmap. I audited it, built the evidence case, prototyped three directions, and proposed the success metrics the page has never had.',
      },

      { type: 'heading', kicker: 'The problem', text: 'The page nobody prioritized' },
      {
        type: 'narrative',
        body:
          'Every seller who logs into Back Market’s Back Office lands on the same page first. The homepage sits in the top three most-visited pages in the entire product, hundreds of thousands of views a quarter in its largest market alone, and it is the only page every seller persona shares: operations managers, finance directors, e-commerce managers, all of them start their day here.\n\nIt was also on nobody’s roadmap. The team’s own scope tracking flagged it as incomplete. Its latest iteration shipped with placeholder text still in the design file. And its founding purpose, reducing the volume of email Back Market sends sellers, had never actually been measured. Three revamps since 2022 had each added more to the page without anyone stepping back to ask what it was for. So I stepped back.',
      },
      {
        type: 'statRow',
        stats: [
          { value: 'Top 3', label: 'by raw traffic across the entire Back Office' },
          { value: '1M+', label: 'monthly seller emails it was chartered to reduce, never measured' },
          { value: '0', label: 'success metrics tied to the page when I started' },
          { value: '3', label: 'revamps since 2022, each adding without asking why' },
        ],
      },

      { type: 'heading', kicker: 'The history', text: 'Three revamps deep, and still unfinished' },
      {
        type: 'narrative',
        body:
          'The page’s history explains its shape. A 2022 replatforming pass gave the old dashboard a greeting, alerts, and sales recaps. A 2024 revamp rebuilt it as stacked content blocks. The current iteration layered on more: a task list, sales insights, an opportunities section, a listings leaderboard by country, a wallet card, customer reviews, trade-in counts, a financing promo, a feedback form. Nine cards deep.\n\nNobody decided the page should look like this. It accumulated. Because the homepage is guaranteed traffic, it became the place every team put things, and because that traffic arrives no matter what the page contains, nothing on it ever had to prove it earned the slot.',
      },
      {
        type: 'callout',
        kicker: 'From the team’s own spec',
        body:
          'The living spec has warned about overload since 2023: “avoid having too much things” and “limit the need to scroll to access key information.” The shipped page stacks nine cards, and several tiles in its most recent design file still read “XX Lorum ipsum dolor sit amet.” The warning and the outcome sit in the same document.',
      },

      { type: 'heading', kicker: 'The insight', text: 'High traffic had made the page unaccountable' },
      {
        type: 'narrative',
        body:
          'The homepage kept losing prioritization contests for a structural reason: with no metric connecting the page to an outcome, every proposed improvement got filed as cosmetic. The one goal the page was chartered against, cutting a seven-figure monthly email volume, had no measurement wired to it, so the page could neither succeed nor fail.',
      },
      {
        type: 'quote',
        text: 'UX improvement, no direct GMV or compliance impact identified.',
        cite: 'The nearest homepage item on the 2026 roadmap. The framing was self-fulfilling.',
      },

      { type: 'heading', kicker: 'The scope', text: 'A negotiation, not a refresh' },
      {
        type: 'narrative',
        body:
          'The page is not a blank canvas. At least seven teams hold a stake in it, which means a redesign here is not a visual refresh: it is a negotiation about what earns a place on the product’s front door, in what order, and under what visual weight. Before designing anything, I mapped every claim.',
      },
      {
        type: 'pairs',
        kicker: 'Who holds a slot, and what it must do',
        items: [
          { label: 'Embedded finance', value: 'A promo card already in production, with a four-state lifecycle designed and only the simplest state built.' },
          { label: 'AI assistant', value: 'Six proactive scenarios designed to surface on this page. None integrated yet.' },
          { label: 'Opportunities', value: 'A multi-tile section from two owning teams, still carrying unfinished placeholder content.' },
          { label: 'Wallet and payouts', value: 'The answer to the seller’s most-asked question, currently mid-page.' },
          { label: 'Listings', value: 'A per-country leaderboard tied to the marketplace’s winning-offer mechanics.' },
          { label: 'Customer reviews', value: 'A long-standing block with a real owner and no measured value.' },
          { label: 'Seller Operations', value: 'An announcement banner that must stay editable without an engineering deploy.' },
        ],
      },

      { type: 'heading', kicker: 'The move', text: 'Building the case before opening the canvas' },
      {
        type: 'narrative',
        body:
          'This is self-initiated work, and it started where it had to: with evidence, not screens. I reconstructed four years of the page’s history across specs, pull requests, and analytics. I audited the live design file block by block, which is how the placeholder content and the dropped blocks surfaced. And I documented the metric gap directly, because the redesign’s first deliverable is not a layout. It is a definition of success the team can hold the page to.\n\nThe pitch reframes the work from “make the homepage better” to three decisions: what this page is for, what earns a place on it under that purpose, and which measurable behaviours replace an email-reduction goal that was never wired up.',
      },
      { type: 'heading', kicker: 'The exploration', text: 'Three concepts, one direction' },
      {
        type: 'narrative',
        body:
          'With the case built, I explored the answer as three working prototypes, each testing a different point on the spectrum between focus and familiarity. All three hold the same non-negotiables: the operations banner stays editable without a deploy, the payout answer stays above the fold, and every timely item states why it appeared.',
      },
      {
        type: 'principle',
        num: '01',
        title: 'The focused day',
        body:
          'What it tested: radical focus. Three ranked tasks with their consequences spelled out, a “for you today” layer with stated reasons, everything else demoted to signals in a rail.\n\nWhat it taught: consequence-first task framing works everywhere. But collapsing nine blocks to five asks seven content owners to give up slots on day one, a negotiation this concept loses before it starts.',
      },
      {
        type: 'media',
        label: 'Concept 1, the focused day',
        image: '/work/homepage/concept-focused.webp',
        caption: 'Concept 1: three ranked tasks, a timely layer with stated reasons, signals in the rail.',
      },
      {
        type: 'principle',
        num: '02',
        title: 'The briefing',
        body:
          'What it tested: the AI-native end. The page as a composed morning briefing, one stream ranked by what it costs the seller to ignore, drafted actions waiting on approval, delegation under seller-set rules. Built on the suggest-and-confirm posture my seller research set for the company.\n\nWhat it taught: this is the destination, not the next step. It assumes trust the product has not yet earned, and it asks sellers to give up the mental map they navigate by today.',
      },
      {
        type: 'media',
        label: 'Concept 2, the briefing',
        image: '/work/homepage/concept-briefing.webp',
        caption: 'Concept 2: three composed sentences and one ranked stream, with delegation under seller-set rules.',
      },
      {
        type: 'principle',
        num: '03',
        title: 'The data board, the proposed direction',
        body:
          'What it proposes: keep the structure sellers already navigate and change what each block is made of. Every content owner keeps a slot, but every slot must show movement at a glance: sales become a week-over-week trend, listings a winning-offer share, trade-in four bars, reviews a distribution. Text chunks become charts.\n\nWhy it wins: it converts the political problem into a design system. Nobody loses their slot, but every slot now has a job a metric can see, and the task list leads with the page’s only red reserved for the one thing that blocks payouts.',
      },
      {
        type: 'media',
        label: 'The proposed direction',
        image: '/work/homepage/direction-masonry.webp',
        caption: 'The proposed direction: a data-forward board. Every block keeps its owner and earns its place by showing movement, not text.',
      },

      { type: 'heading', kicker: 'Principles', text: 'The calls I’d make again' },
      {
        type: 'principle',
        num: '01',
        title: 'On unsanctioned work, evidence goes first',
        body:
          'Nobody commissioned this. That means the first deliverable is not a design, it is a case: four years of history, an audit of the live file, a dependency map, and a metric gap named in the team’s own terms. A concept without that case is an opinion. A concept on top of it is a plan.',
      },
      {
        type: 'principle',
        num: '02',
        title: 'A metric the page can fail is the real redesign',
        body:
          'The homepage survived four years of neglect precisely because it could not fail: reach was tracked, value was not. Proposing task completion and click-through on the highest-value actions matters more than any layout, because it makes every future argument about the page winnable by evidence instead of seniority.',
      },
      {
        type: 'principle',
        num: '03',
        title: 'Keep the mental map, change the material',
        body:
          'The radical concepts read better in a portfolio; the data board ships. Sellers keep the structure they know and the content owners keep their slots, but every block trades prose for signal. Familiar structure, new material: that is the version seven stakeholders can say yes to.',
      },

      { type: 'heading', kicker: 'Where it stands', text: 'In flight' },
      {
        type: 'narrative',
        body:
          'The audit is complete, the concepts are built, and the case is being made to the squad’s product and design leadership now, with the data board as the recommended direction and the success metrics attached.\n\nThis page will grow as the work ships. That is deliberate: the strongest part of this story so far is not a redesign, it is noticing that the most-visited page in the product had quietly become the least examined, and doing something about it.',
      },

      { type: 'heading', kicker: 'Reflection', text: 'What I’d do differently so far' },
      {
        type: 'narrative',
        body:
          'I would have brought the seven content owners in during the exploration, not after it. The dependency map told me what each team has on the page; it did not tell me what each team would fight for, and that conversation shapes the design more than any audit.\n\nI would also have shipped something small first. The live placeholder tiles could have been fixed in a week, and a small, visible win buys more permission for a structural pitch than a well-argued document does.',
      },
    ],
  },
  {
    // HONESTY MARKERS: the honest-failure arc, per decision July 2026. Verified
    // facts: 0.2% deal-action click share vs 60% Save / 40% Win BackBox, ~10 CSV
    // downloads/day, Figma canvas flagged legacy, volume-incentive PRD unresolved
    // with blank success metrics, API channel unbuilt while most GMV is
    // API-integrated. Softened per standing rule: campaign costs, GMV figures,
    // commission percentages, ROI, and absolute click counts are omitted or made
    // relative. Colleagues are roles only. Prototype data was illustrative and is
    // framed as such.
    num: '04',
    slug: 'deals-programme',
    title: 'Commission rates don’t move sellers. Margin math does.',
    client: 'Back Market',
    discipline: 'Seller Incentives',
    year: '2025–present',
    // The click-share bars from the case's own artifact, as the thumb: the
    // 60/40 actions outlined, the deal action at its true 0.2% width.
    image: '/work/deals-sliver-thumb.svg',
    summary:
      'Deals pay sellers a commission discount for hitting competitive prices. The first Back Office release shipped to spec, and its core action drew 0.2% of clicks. I own the seller-facing layer, so the diagnosis, and the margin-first redesign built from it, are mine too.',
    blocks: [
      {
        type: 'overview',
        columns: [
          { label: 'Role', value: 'Senior Product Designer, Design and Content owner' },
          { label: 'Timeline', value: '2025 to present' },
          { label: 'Working with', value: 'Product, engineering, data science, finance engineering, seller success' },
          { label: 'Status', value: 'V1 shipped, redesign in flight' },
        ],
        body:
          'Deals offer sellers a commission discount for pricing key products at competitive targets. The first Back Office release shipped to spec in late 2025, and its core action drew 0.2% of listing-page action clicks. This case study is about owning that number: diagnosing why a working mechanism had a failing interface, and redesigning it around the seller’s real question, which is margin, not commission.',
      },

      { type: 'heading', kicker: 'The problem', text: 'A pricing mechanism nobody could see' },
      {
        type: 'narrative',
        body:
          'A Deal is a time-limited commission discount for a seller who prices a specific product at or below a target Back Market sets, with extra discount tiers unlocked by sales volume. Nothing is automatic: the seller sees the target and chooses. Deals exist because Back Market’s cost of selling runs structurally higher than the marketplaces it competes with, and holding competitive prices on hero products needs a lever. Of the three incentive mechanisms the company ran, deals won the 2025 bet: the target price is controlled directly, only compliant orders cost anything, and any seller can take part.\n\nFor its first year the whole programme ran by hand. Data teams recalculated target prices every two weeks, and seller managers emailed CSVs and chased sellers one by one. Workable for a fifteen-seller pilot; impossible at the scale the programme was heading for. My brief, as design and content owner alongside the squad’s PM: give deals a home in the Back Office.',
      },

      { type: 'heading', kicker: 'What shipped', text: 'A banner, a filter, and a button that never says deal' },
      {
        type: 'narrative',
        body:
          'The late-2025 release put deals into the listings page: a banner with a how-it-works drawer, a deal-price column in each product row, opportunity badges, and a CSV download. It shipped exactly as specified, on time, reusing an existing data pipeline. And it carried a flaw you can see in a screenshot before any analytics load: the deal signal shares one crowded column with two other badge types, the pricing cap that silently adjusts a target price is invisible in the row, and the row’s only button carries the same generic label no matter what is on offer. The one action that mattered never says deal.',
      },
      {
        type: 'callout',
        kicker: 'From the design file',
        body:
          'The canvas holding the shipped design in the team’s Figma file is named “legacy, Deals, delete in Q4 26.” The file was flagging its own replacement before anyone had made the case for one.',
      },
      // The launch numbers, drawn at true scale: two big bars, a pause, and a
      // 2px line for the one action the page exists to drive.
      { type: 'artifact', name: 'deals-sliver' },

      { type: 'heading', kicker: 'The diagnosis', text: 'The mechanism worked. The interface didn’t.' },
      {
        type: 'narrative',
        body:
          'The programme itself was healthy: sellers joined, meaningful volume moved at deal prices, and the UK arm, run with heavy hands-on support from seller managers, sustained strong adoption. That contrast is what makes 0.2% a design number rather than a demand number. When a human explained a deal, sellers took it. When the interface explained it, they didn’t.\n\nThe shipped screens answer the wrong question. They say “here is a discount.” The seller’s question is “do I make more money?” A commission point is an abstraction; the price cut needed to earn it is concrete and immediate. Without the margin math, caution wins, and the CSV, walked through with a human, stays the real interface.',
      },
      {
        type: 'quote',
        text: 'Highlight the cases where a seller makes more money by matching the deal price.',
        cite: 'The open ask from a working session with the business stakeholder, late 2025',
      },

      { type: 'heading', kicker: 'The redesign', text: 'From discount labels to margin math' },
      {
        type: 'narrative',
        body:
          'I didn’t start from a blank page. I had already built a coded exploration of the adjacent problem, three working concepts on margin visibility for the listings page, with deals modelled as a case inside them. The redesign continues that direction: every market row computes what the seller would actually earn under each available move, the recommended move is stated with its reason in one plain sentence, and the deal action finally gets its own name.',
      },
      {
        type: 'principle',
        num: '01',
        title: 'Show the margin, not the discount',
        body:
          'Projected margin for the current price and the deal price, side by side, with the calculation one tap away. A commission point means nothing to a seller until it becomes euros per unit; the moment it does, the decision mostly makes itself.',
      },
      {
        type: 'principle',
        num: '02',
        title: 'Recommend, and say why',
        body:
          'One recommended move per market, with the reason in a sentence: the deal earns more here because the commission saving outweighs the price cut. It answers the business stakeholder’s open ask directly, and it is the suggest-and-confirm posture from my AI research applied to pricing: the system proposes, the seller decides.',
      },
      {
        type: 'principle',
        num: '03',
        title: 'Let sellers automate the choice',
        body:
          'The same margin logic wired into the existing repricing automation, behind a seller-set guardrail: optimise for earnings within my price range. For sellers who trust it, the manual click disappears entirely. Built as working prototypes on illustrative data, waiting on the live pricing feed and a seller validation round.',
      },
      {
        type: 'media',
        label: 'Redesign concepts',
        needs: { kind: 'Figma', what: 'The margin-first row, the reasoned recommendation, and the one-action deal card — three concept crops; work-in-progress fidelity is fine.' },
        caption: 'Concept mockups in progress: the margin-first row, the reasoned recommendation, and the earnings-aware automation.',
      },

      { type: 'heading', kicker: 'The open chapter', text: 'Volume incentives, honestly unresolved' },
      {
        type: 'narrative',
        body:
          'The second half of the programme, volume tiers that stack further commission discounts on top of price deals, is still being negotiated: the mechanism itself, its granularity, even whether a threshold applies retroactively. The PRD’s success-metric section is currently blank. I am designing into that ambiguity deliberately, holding the rule the first release should have had: no surface ships until it can answer the seller’s margin question.\n\nOne more honest note on distribution: the channel that shipped first is not where most of the volume flows. The majority of marketplace sales run through API-integrated sellers who never open this page, and deal visibility in the API does not exist yet. The redesign is one chapter of a longer distribution problem, and the case study will say so as long as that stays true.',
      },

      { type: 'heading', kicker: 'Where it stands', text: 'In flight' },
      {
        type: 'narrative',
        body:
          'The evidence case is made, the direction is set, and the concepts run as coded prototypes. What I would defend hardest from this project so far: shipping to spec is not the finish line. The first release did everything the brief asked and still failed its users quietly. The 0.2% is not a number to hide. It is the most useful design input the programme ever produced, and the reason the second pass is aimed at margin instead of discounts.',
      },
    ],
  },
  {
    num: '05',
    slug: 'care-gap',
    secondary: true,
    image: '/work/soteria/thumb-4x3.webp',
    title: 'Closing the gap between appointments.',
    client: 'Infocare Healthcare',
    discipline: 'Mobile App',
    year: '2022',
    summary:
      'Patients drift from their care plans when there’s nothing connecting them between clinic visits. I designed SoteriaMe to close that gap: building the habits and trust that keep patients engaged with their treatment when no one is watching.',
    blocks: [
      {
        type: 'overview',
        columns: [
          { label: 'Role', value: 'Product Designer, end to end' },
          { label: 'Timeline', value: '2022' },
          { label: 'Working with', value: 'Clinical advisors and Infocare’s clinical partners' },
          { label: 'Status', value: 'Piloted in US clinics' },
        ],
        body:
          'Infocare’s first patient-facing product: a mobile app that keeps chronic-care patients connected to their care plan between visits. I designed it end to end under gated patient access, and the trust mechanics, plain-language visibility labels at every point of data entry, changed patient behaviour more than any structural decision in the product.',
      },

      // Lead: the problem and the stakes.
      {
        type: 'narrative',
        body:
          'Infocare’s desktop platform handled scheduling, records, and clinical workflows well. What it couldn’t address was what happened to patients after they left the building. Without a connection to their care plan between visits, patients missed medications, forgot instructions, and drifted. Clinicians absorbed the cost as administrative overhead.\n\nInfocare had tried to solve this with email. It hadn’t worked. Patients in chronic care tend to have complex and variable digital literacy, and a generic email from a clinic name they half-recognised wasn’t moving the needle. The brief was to design something that felt personal, trustworthy, and easy to use. It was also the company’s first patient-facing product, which made it a reputational bet as much as a design brief.',
      },
      // The gap itself, drawn: two timelines between the same pair of visits,
      // empty before, the app's touchpoints landing in it after.
      { type: 'artifact', name: 'care-between-visits' },
      {
        type: 'stat',
        value: '1 in 3',
        label: 'Patients forget their next appointment date within a week of their visit (published adherence research)',
      },
      {
        type: 'media',
        label: 'Home',
        image: '/work/soteria/01-home.webp',
        caption: 'The shipped home screen: a single hub, one primary action.',
      },

      // Research under a constraint.
      { type: 'heading', kicker: 'Research', text: 'Patient access was gated. Clinicians filled the gap.' },
      {
        type: 'narrative',
        body:
          'GDPR and clinical governance frameworks limited direct patient access from the start. I triangulated instead: eight interviews with consented patients through Infocare’s clinical partners, four clinician workshops across three clinical sites, desk research and competitive analysis, and prototype testing with internal clinical advisors.\n\nRunning clinicians as my primary research lens filled a gap that direct patient access couldn’t. Clinicians carry daily working knowledge of what patients forget to say in appointments, where they disengage, and what they misunderstand. That knowledge fed directly into the information architecture.',
      },
      {
        type: 'media',
        label: 'Research synthesis',
        image: '/work/soteria/affinity-map.webp',
        caption: 'The affinity map, reconstructed from the original synthesis: four clusters, and the dot-voted priorities that set the product’s spine.',
      },
      {
        type: 'media',
        label: 'Patient journey',
        image: '/work/soteria/journey-map.webp',
        caption: 'The arc had a clear message: anxiety doesn’t go away, it changes form. Each stage’s design need became a principle.',
      },
      {
        type: 'narrative',
        body:
          'The research kept resolving into two people with opposite defaults. The patient needed less: less information, fewer choices, plainer language. The clinician needed more: more signal, more visibility, more automation. Every decision that followed had to serve both without shortchanging either.\n\nThree principles came directly out of the journey work. Earn trust before asking for data. One thing at a time. Make data visibility persistent and contextual.',
      },

      // Design decisions.
      { type: 'heading', kicker: 'Design', text: 'Designed for patients. Useful to clinicians.' },
      {
        type: 'media',
        label: 'Concept sketches',
        image: '/work/soteria/sketches.webp',
        caption: 'The initial screen inventory: six core views, which meant six navigation items, which was already too much. The shipped product dropped persistent navigation entirely.',
      },
      {
        type: 'narrative',
        body:
          'Early wireframes tried to surface everything at once: medications, appointments, symptom history, messages, wellness tips. Clinical advisors confirmed what the research implied: patients often arrive at the tool with cognitive load already high, and a dashboard that required scanning before acting was going to be abandoned.\n\nMy answer was to drop persistent navigation entirely. The dashboard became the single hub, the next appointment the primary action, and every other view one tap from home.',
      },
      {
        type: 'media',
        label: 'The abandoned direction',
        image: '/work/soteria/before-dashboard.webp',
        caption: 'The early dashboard concept: profile data, health stats, and notes competing for a patient who arrived with one question.',
      },
      {
        type: 'narrative',
        body:
          'The conventional fix for data anxiety is a consent screen at onboarding, which treats trust as a legal requirement and puts all the weight on a moment when patients are already overwhelmed. Instead, I put persistent plain-language visibility labels at every point where patients enter data: “Shared with your care team,” or “Only you can see this.” Those small typographic decisions changed patient behaviour more than any structural design change in the product.',
      },
      {
        type: 'media',
        label: 'Log symptoms',
        image: '/work/soteria/03-log-symptoms.webp',
        caption: 'The trust label at the point of data entry: who can see this, answered before it’s asked.',
      },
      {
        type: 'narrative',
        body:
          'The patients using SoteriaMe were managing chronic conditions, often older, often carrying multiple diagnoses. I treated WCAG AA as a floor. The symptom severity scale originally used colour only: red, amber, green, clean and immediately legible to anyone with normal colour vision. I redesigned it to use colour, icon, and label together, abandoning the cleaner version, because it was the only design that worked for patients with colour vision deficiencies. A more minimal scale would have failed them silently, and the failure would never have surfaced in testing.',
      },
      {
        type: 'media',
        label: 'Symptom history',
        image: '/work/soteria/02-symptom-history.webp',
        caption: 'The shipped severity system: colour, icon, and label together, with chart series distinguished by shape as well as hue.',
      },

      // Testing.
      { type: 'heading', kicker: 'Testing', text: 'Two rounds, built to find what was wrong' },
      {
        type: 'narrative',
        body:
          'I put four clinical advisors (a GP, a specialist nurse, a clinical informatics lead, and patient experience) through the full prototype against scripted scenarios, briefed to flag anything clinically inaccurate, structurally confusing, or likely to cause patient harm by omission. Two issues were marked blockers and rebuilt before round two.\n\nRound two was patient testing: five participants aged 34 to 67, all managing chronic conditions, think-aloud protocol, three tasks with no prompting. Small numbers, treated as small numbers. What they showed was still direct.',
      },
      {
        type: 'statRow',
        stats: [
          { value: '3 → 5', label: 'Participants completing reminder setup, before and after it was rebuilt as a primary action' },
          { value: '4 → 0', label: 'Participants pausing over data entry to ask who could see it, once inline visibility labels were added' },
        ],
      },
      {
        type: 'media',
        label: 'Configure reminder',
        image: '/work/soteria/04-configure-reminder.webp',
        caption: 'The rebuilt flow: three of five participants failed reminder setup in round one; all five completed it unprompted in round two.',
      },
      {
        type: 'media',
        label: 'Select time',
        image: '/work/soteria/05-select-time.webp',
        caption: 'Platform-native time selection on Android.',
      },

      // Outcome, honestly framed.
      { type: 'heading', kicker: 'Outcome', text: 'A working pilot, honestly accounted' },
      {
        type: 'narrative',
        body:
          'SoteriaMe was piloted through Infocare’s clinical partners across a small number of US clinics. The pilot ran without the instrumentation to measure engagement at scale, so the strongest evidence is qualitative, drawn from the testing rounds rather than the pilot itself.\n\nBeyond the pilot, the product served a second purpose Infocare cared about equally: demonstrating that they could build a credible patient-facing digital product. Their reputation was built entirely on desktop clinical infrastructure, and a working mobile health app opened new commercial ground. It was used directly in conversations with prospective healthcare clients.',
      },
      {
        type: 'quote',
        text: 'It’s easier to remember what the doctor said when it’s all written down here.',
        cite: 'Patient, usability testing',
      },
      {
        type: 'media',
        label: 'Secure messaging',
        image: '/work/soteria/09-conversation.webp',
        caption: 'The clinician’s side of the bargain: visibility into engagement between visits, without a second inbox.',
      },
      { type: 'heading', kicker: 'Reflection', text: 'What I’d do differently' },
      {
        type: 'narrative',
        body:
          'Running this again with a proper measurement framework, I’d establish a baseline appointment-miss rate before launch, track medication log completion in-app, and run a cohort comparison between engaged and disengaged users against downstream clinical outcomes. None of that was feasible within the project’s scope. Worth naming anyway.\n\nBoth user groups were placing trust in the product: patients that their data was safe, clinicians that what they saw was accurate. That’s a harder brief than it sounds, and it shaped every decision from the information architecture to the inline data labels.',
      },
    ],
  },
];
