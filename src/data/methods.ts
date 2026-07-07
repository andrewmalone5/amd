// Methodology pages — the "How I Work" long-form pieces. Same block system as
// the case studies, same truth rules: first person, no em dashes, examples
// drawn from real projects (anonymized the same way the case studies are).
//
// Voice notes from the copy pass: open with the incident, not the definition;
// contractions throughout; at most one three-part list per section; the
// "not X but Y" construction rationed to the lines that earn it.
import type { Block } from './projects';

export interface Method {
  slug: string;
  kicker: string;
  title: string;
  /** Short line used by the How I Work index rows. */
  summary: string;
  blocks: Block[];
  /** Cross-link to the companion methodology. */
  companion: { slug: string; title: string; note: string };
}

export const methods: Method[] = [
  {
    slug: 'solve-the-right-problem',
    kicker: 'Process / Methodology',
    title: 'Good execution of the wrong thing is still failure.',
    summary:
      'A short list of questions I ask before opening Figma. Good execution of the wrong thing is still failure, and the cheapest time to find out is before the work starts.',
    blocks: [
      {
        type: 'narrative',
        body:
          'The project that taught me this shipped on time, looked exactly like the mocks, and got approving nods in the launch review. Then almost nobody used it. Nothing was broken. The brief had simply been written months earlier, on assumptions nobody went back to check, and we’d all executed faithfully against a question that had expired.\n\nThe design was fine. The problem was wrong. Solve the Right Problem is what I’ve done about that ever since: a habit of checking that the team is pointed at the actual problem before any design work starts, not the one written down three months ago.',
      },

      { type: 'heading', kicker: 'Why it exists', text: 'The most expensive mistake is a beautiful answer to the wrong question' },
      {
        type: 'narrative',
        body:
          'You can have everything going for a project and still lose this way. The brief says build X, so everyone builds X. But X is what someone upstream thought the user needed, filtered through a few layers of interpretation before it ever reached the team. Nobody paused to check whether it still held, because pausing feels like slowing down.\n\nWhen I dig into a failed launch, it’s almost never one dramatic mistake. It’s one of three quiet ones.',
      },
      {
        type: 'pairs',
        kicker: 'The three quiet failures',
        items: [
          { label: 'Requirements drift from reality', value: 'The brief was written months ago and the context has moved on. Nobody revalidates it, so the team ships a faithful answer to an expired question.' },
          { label: 'Success is undefined until it’s too late', value: 'Ask five people what success looks like and you’ll get five answers. If the team can’t agree before launch, the metric gets invented after it.' },
          { label: 'Disciplines work in sequence, not in parallel', value: 'Design hands to engineering, engineering discovers constraints, scope quietly changes. Nobody sat in the same room and agreed what they were building before the work started.' },
        ],
      },

      { type: 'heading', kicker: 'The practice', text: 'Five questions I ask before I open Figma' },
      {
        type: 'narrative',
        body:
          'There’s no canvas, no template, nothing to download. Just five questions I bring into every kickoff and every brief review, and they’ve killed more bad projects than any process I’ve run.',
      },
      {
        type: 'pairs',
        items: [
          { label: '01 What problem are we actually solving?', value: 'Not the feature request. The thing that hurts if we do nothing. If the team can’t state it without naming the solution, there’s no problem statement yet.' },
          { label: '02 How do we know this is the right problem?', value: 'What’s under the brief: user research, support tickets, analytics? Or one loud voice in a meeting three months ago?' },
          { label: '03 What does success look like, and for whom?', value: 'A number, a behaviour, and a person. If the metric is missing, the first deliverable is the metric.' },
          { label: '04 What are we NOT building?', value: 'Scope creep starts when this never gets said out loud. Naming what’s out is the cheapest protection a project gets.' },
          { label: '05 Who needs to be in the room for this to work?', value: 'If engineering and the metric owner aren’t aligned before pixels, their constraints arrive later, dressed as change requests.' },
        ],
      },

      { type: 'heading', kicker: 'The key insight', text: 'Pushing back on a brief is doing the job' },
      {
        type: 'narrative',
        body:
          'Early in my career I treated briefs as instructions. If the result didn’t land, I assumed I’d designed it wrong. It took a few failures to see the other possibility: sometimes the brief is wrong, and a good brief survives being asked how we know. A bad one falls apart the moment you ask. You want that collapse to happen in a review, not in production.',
      },
      {
        type: 'callout',
        kicker: 'Why designers should own this',
        body:
          'Designers sit where user needs, business goals, and technical constraints meet. When something in the brief doesn’t add up, when the metric is missing or the scope has quietly doubled, you’re often the first person positioned to notice. Staying quiet about it lets the team walk into a wall.',
      },

      { type: 'heading', kicker: 'In practice', text: 'The brief said navigation. The problem was the homepage.' },
      {
        type: 'narrative',
        body:
          'A brief landed asking us to improve Back Office navigation. Sellers were struggling to find their tools, so the ask was a cleaner layout and a better-organised menu. Reasonable, plausible, and it fell apart on question two. The analytics didn’t show sellers lost in menus. They showed sellers leaving the homepage without acting at all.',
      },
      {
        type: 'media',
        label: 'The questions, applied',
        image: '/method/brief-annotated.png',
        caption: 'The five questions run against the navigation brief. It didn’t survive question two.',
      },
      {
        type: 'callout',
        kicker: 'What actually changed',
        body:
          'The brief wanted us to optimise a journey that wasn’t happening. So instead of reorganising navigation, we redesigned the homepage around what a seller needs the moment they log in: the actions waiting for them, not a tidier menu of every tool that exists. A better navigation structure would have solved nothing.',
      },

      { type: 'heading', kicker: 'Why it works', text: 'Teams that skip problem definition don’t save time. They borrow it.' },
      {
        type: 'narrative',
        body:
          'The time you skip at the start comes back with interest. It comes back as rework when the real constraints surface, and as a design direction people stop trusting because it keeps changing. Asked early, the same questions cost an afternoon.\n\nThe best version of this discipline isn’t me asking the questions. It’s the team beating me to them.',
      },
    ],
    companion: {
      slug: 'narrative-first-design',
      title: 'Start with the story. Then open Figma.',
      note: 'The companion practice: how I get cross-functional teams aligned on the user’s story before design work begins.',
    },
  },

  {
    slug: 'narrative-first-design',
    kicker: 'Process / Methodology',
    title: 'Start with the story. Then open Figma.',
    summary:
      'Before any screens, I get the team aligned on the user’s story: who they are, what they came to do, and where it breaks down. Most disagreements about design turn out to be disagreements about the story.',
    blocks: [
      {
        type: 'narrative',
        body:
          'The launches that hurt most were never the broken ones. They were the ones that worked exactly as built and still didn’t get used. Every time I traced one back, the blocker turned out to be something the team could have named together, in a room, in an hour, before anyone opened a design tool.\n\nSo that’s what Narrative-First Design is: a one-hour workshop I run with cross-functional teams to align on the user’s story before any design work begins. Adoption blockers get named while changing direction still costs an afternoon, not a sprint.',
      },

      { type: 'heading', kicker: 'Why it exists', text: 'Most alignment failures are framing failures' },
      {
        type: 'narrative',
        body:
          'Here’s the uncomfortable part: teams that ship features nobody uses usually had alignment. Everyone agreed on the brief. What they didn’t have was a shared frame for the user’s story, so each discipline filled the gaps with its own version, and the versions only collided at launch.',
      },
      {
        type: 'pairs',
        kicker: 'The three failures it prevents',
        items: [
          { label: 'Adoption blockers surface too late', value: 'The reasons a user won’t adopt the feature exist on day one. Without a ritual that names them, they surface in the post-launch metrics instead.' },
          { label: 'Design decisions detach from user intent', value: 'Without a shared story, decisions get justified against taste, or against whoever argued last. The story gives every decision one thing to be checked against.' },
          { label: 'Alignment lives in Slack, not the work', value: 'A thread agreeing on direction just proves a conversation happened. Alignment is when the team can retell the same story unprompted.' },
        ],
      },

      { type: 'heading', kicker: 'The framework', text: 'Seven questions. One hour. A story the whole team owns.' },
      {
        type: 'narrative',
        body:
          'The workshop walks the team through the user’s story as seven plot points, in order. By the end there’s a complete picture of who the user is, why the feature exists, and where it could fail.',
      },
      {
        type: 'pairs',
        items: [
          { label: '01 What does the user want?', value: 'Their goal in their words, not the feature’s description of it.' },
          { label: '02 Why can’t they get it today?', value: 'The obstacle that makes the current path fail, cost too much, or feel too risky.' },
          { label: '03 What do we introduce?', value: 'The feature, told as an event in the user’s story rather than a spec.' },
          { label: '04 What would stop them adopting it?', value: 'The hesitation. The plot point teams skip.' },
          { label: '05 What convinces them to cross?', value: 'The proof or the moment that makes trying it feel safe and worth it.' },
          { label: '06 What changes in their behaviour?', value: 'What they now do differently, and what that demands of the product around it.' },
          { label: '07 What does success look like?', value: 'The observable outcome for the user, and the measurable one for the team.' },
        ],
      },
      {
        type: 'media',
        label: 'The story arc',
        image: '/method/story-arc.png',
        caption: 'The seven plot points as the team walks them: rising context, the crisis at four, resolution the whole room has agreed on.',
      },

      { type: 'heading', kicker: 'The key insight', text: 'Most teams skip plot point four. That’s where features go to die.' },
      {
        type: 'narrative',
        body:
          'In story structure it’s the crisis: the moment the protagonist has to decide whether to change. In product terms, the feature has been introduced, the user understands it, and now they have to decide whether to change how they work. Most features lose their users right there, quietly, and you can’t design for a moment you never named.',
      },
      {
        type: 'callout',
        kicker: 'Why naming it changes the brief',
        body:
          'Ask a team what would stop the user and the answers come fast. The user doesn’t trust the data. The workflow adds a step they weren’t doing before. They need to convince their manager before they can act. Each of those produces a different design brief, and none of them would have come out of a PRD review.',
      },

      { type: 'heading', kicker: 'The output', text: 'One sentence the whole team can use' },
      {
        type: 'narrative',
        body:
          'The workshop ends with a single sentence assembled from the plot points: who the user is, what blocks them, what we’re introducing, and what changes for them. Short enough to remember, specific enough to argue with.\n\nThat sentence becomes the feature’s north star. It gets quoted in sprints and PRD reviews, and it gut-checks design decisions for the rest of the project. When a decision can’t be justified against it, that’s a conversation worth having. And when the sentence itself has to change mid-project, that’s the earliest warning you’ll ever get that the problem has moved underneath you.',
      },
      {
        type: 'media',
        label: 'The sentence template',
        image: '/method/sentence-template.png',
        caption: 'The template, and one filled in from a real workshop.',
      },

      { type: 'heading', kicker: 'In practice', text: 'One workshop, two blockers, two features' },
      {
        type: 'narrative',
        body:
          'Running the workshop on a seller-incentive feature, the room had been treating adoption as a single problem: sellers weren’t acting on the incentive. Plot point four split it in two.',
      },
      {
        type: 'callout',
        kicker: 'What the workshop surfaced',
        body:
          'Two different blockers had been living under one name. Sellers couldn’t see their own performance clearly enough to act on the incentive at all, and separately, the timing of the information didn’t fit how they actually plan. Those became two features, a performance tracker and a forward-planning view, instead of one confused surface that would have solved neither. Neither blocker was anywhere in the brief.',
      },

      { type: 'heading', kicker: 'Why it works', text: 'It’s not a process for designers. It’s a process for teams.' },
      {
        type: 'narrative',
        body:
          'It only works with everyone in the room, including whoever owns the metric. The story belongs to the team rather than to any one discipline, and that’s what makes the decisions hold. Blockers surface in an hour instead of a sprint. Nobody assumes alignment, because you’ve heard the whole room tell the same story.',
      },
    ],
    companion: {
      slug: 'solve-the-right-problem',
      title: 'Good execution of the wrong thing is still failure.',
      note: 'The companion discipline: the questions I ask before any of this, to make sure the story we align on is the right one.',
    },
  },
];
