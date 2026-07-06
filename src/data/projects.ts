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
          'The active seller base more than doubled over the year, and the programme closed it at roughly twice its original revenue plan. The self-service direction carried its weight too: fewer than 5% of servicing questions the dashboard could answer ever reached support, which was the quiet proof that the balance, pause, and lifecycle states were doing the explaining on their own.',
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
    title: 'AI suggests. The seller decides.',
    client: 'Back Market',
    discipline: 'AI Strategy',
    year: '2025–present',
    status: 'In progress',
    summary:
      'When AI in the Back Office was an open question with no evidence base, I ran the 118-seller study that set Back Market’s AI posture: suggest-and-confirm, adopted verbatim into the 2026 vision. Now turning that posture into a proactive assistant.',
    blocks: [
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
        caption: 'The posture in one picture: what AI proposes, what sellers approve, what stays off the table.',
      },

      // Impact: decision-impact, claimed as exactly that.
      { type: 'heading', kicker: 'Impact', text: 'Adopted verbatim into strategy' },
      {
        type: 'narrative',
        body:
          'The suggest-and-confirm posture was cited verbatim in the Seller XP Vision 2026 as the 2026 strategy, using the study’s specific data points and naming the study directly. The report also broke a stalled AI prioritization process that had been waiting on seller-validation evidence, producing the three confirmed Phase 1 features, and it seeded the workstreams that followed: a competitive benchmark and the Head of Product’s commitment of development resources for a chatbot-to-BackFunds integration.\n\nThis is decision-impact, and I claim it as exactly that. The work changed what got built and the company’s stated posture. Whether suggest-and-confirm drives adoption once the features ship is the test still ahead, and I treat the 51.8% finding as a hypothesis the shipped product will prove or break, not a conclusion already proven.',
      },
      {
        type: 'media',
        label: 'Vision 2026 citation',
        caption: 'The posture, cited in the company’s strategy document.',
      },

      // Strategy into product: benchmark plus the two-concept prototype.
      { type: 'heading', kicker: 'Strategy into product', text: 'From posture to prototype' },
      {
        type: 'narrative',
        body:
          'The posture then had to become product. I lead the design side of that: a competitive benchmark of AI seller-assistant capabilities across nine platforms (Amazon, Shopify, eBay, Walmart, Etsy and others), mapped against Back Market’s own vision, and a coded prototype built as two concepts side by side. Concept one is the current state: a reactive Q&A assistant that searches the support centre and answers. Concept two is where we want to be: a proactive assistant that surfaces things grounded in the seller’s actual data.\n\nSix proactive scenarios are fully built as clickable states, and every one follows the same shape: a proactive message grounded in real seller data, then follow-up branches the seller chooses. A BackFunds introduction pegged to the seller’s actual pending payout. A payout-tier answer with the specific next step. A GMV drop traced to delisted iPhone models, with a link to relist. A quality flag with the concrete consequence stated. The consistency is the argument: suggest-and-confirm applied as a system, not case by case.',
      },
      {
        type: 'media',
        label: 'Two concepts, side by side',
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
    image: '/work/soteria/thumb-4x3.png',
    title: 'Closing the gap between appointments.',
    client: 'Infocare Healthcare',
    discipline: 'Mobile App',
    year: '2022',
    summary:
      'Patients drift from their care plans when there’s nothing connecting them between clinic visits. SoteriaMe was designed to close that gap: building the habits and trust that keep patients engaged with their treatment when no one is watching.',
    blocks: [
      {
        type: 'narrative',
        body:
          'Patients drift from their care plans when there’s nothing connecting them between clinic visits. SoteriaMe was designed to close that gap: building the habits and trust that keep patients engaged with their treatment when no one is watching.',
      },
      {
        type: 'media',
        label: 'Home',
        image: '/work/soteria/01-home.png',
        caption: 'The dashboard as the single hub: one primary action, no persistent navigation.',
      },
      {
        type: 'media',
        label: 'Symptom history',
        image: '/work/soteria/02-symptom-history.png',
        caption: 'Severity over time, with series distinguished by shape as well as colour.',
      },
      {
        type: 'media',
        label: 'Log symptoms',
        image: '/work/soteria/03-log-symptoms.png',
        caption: 'The trust label at the point of data entry: who can see this, answered before it’s asked.',
      },
      {
        type: 'media',
        label: 'Configure reminder',
        image: '/work/soteria/04-configure-reminder.png',
        caption: 'Reminder setup, rebuilt after testing surfaced it as the flow patients failed.',
      },
      {
        type: 'media',
        label: 'Select time',
        image: '/work/soteria/05-select-time.png',
        caption: 'Platform-native time selection on Android.',
      },
    ],
  },
];
