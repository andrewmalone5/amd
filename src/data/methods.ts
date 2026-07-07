// Methodology pages — the "How I Work" long-form pieces. Same block system as
// the case studies, same truth rules: first person, no em dashes, examples
// drawn from real projects (anonymized the same way the case studies are).
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
          'Solve the Right Problem is a discipline I apply before any design work starts: making sure the team is pointed at the actual problem, not the one written in the brief three months ago. It comes from watching teams ship polished, well-crafted features that nobody used, because nobody stopped to ask whether the brief was still right.\n\nThe pattern that taught me this: the projects that failed were rarely the ones with bad design. They were the ones where the team executed well against unclear requirements, undefined success metrics, or assumptions nobody had tested. The design was fine. The problem was wrong.',
      },

      { type: 'heading', kicker: 'Why it exists', text: 'The most expensive mistake is a beautiful answer to the wrong question' },
      {
        type: 'narrative',
        body:
          'I have worked on teams that had everything: good designers, strong engineers, clear timelines, executive buy-in. And the feature still flopped, because the problem statement was wrong from the start. Someone wrote a brief based on assumptions, the team executed against it, and nobody paused to check whether the assumptions held.\n\nThat is a framing failure, not an execution failure. The brief said build X, everyone built X, and X was what someone upstream thought the user needed, filtered through three layers of interpretation. Three specific failures produce it, over and over.',
      },
      {
        type: 'pairs',
        kicker: 'The three failures behind it',
        items: [
          { label: 'Requirements drift from reality', value: 'The brief was written months ago and the context has moved. Nobody revalidates it, so the team ships a faithful answer to an expired question.' },
          { label: 'Success is undefined until it is too late', value: 'Ask five people what success looks like for the feature and you get five different answers. If they cannot agree before launch, the metric gets invented after it.' },
          { label: 'Disciplines work in sequence, not in parallel', value: 'Design hands to engineering, engineering discovers constraints, scope quietly changes. The root cause is that the disciplines never sat in the same room and agreed what they were building, and why, before the work started.' },
        ],
      },

      { type: 'heading', kicker: 'The practice', text: 'Five questions I ask before I open Figma' },
      {
        type: 'narrative',
        body:
          'This is not a workshop or a framework you can download. It is a set of questions I bring into every kickoff, every brief review, every time a stakeholder says we need to build this. The point is to make sure speed is pointed in the right direction.',
      },
      {
        type: 'pairs',
        items: [
          { label: '01 What problem are we actually solving?', value: 'Not the feature request. The thing that hurts if we do nothing. If the team cannot state it without naming the solution, there is no problem statement yet.' },
          { label: '02 How do we know this is the right problem?', value: 'What evidence sits under the brief: user research, support tickets, analytics, or one loud voice in a meeting three months ago?' },
          { label: '03 What does success look like, and for whom?', value: 'A number, a behaviour, and a person. If the success metric is missing, the first deliverable is the metric, not the design.' },
          { label: '04 What are we NOT building?', value: 'Scope creep starts when this is never said out loud. Naming what is out of scope is the cheapest protection a project gets.' },
          { label: '05 Who needs to be in the room for this to work?', value: 'If engineering and the metric owner are not aligned before pixels, you will get their constraints as change requests after them.' },
        ],
      },

      { type: 'heading', kicker: 'The key insight', text: 'Pushing back on a brief is doing the job' },
      {
        type: 'narrative',
        body:
          'Early in my career I treated briefs as instructions. If the result did not land, I assumed I had designed it wrong. It took a few failures to notice that sometimes the brief is wrong, and that a good brief survives scrutiny. A bad one falls apart when you ask how we know this is what the user needs, and you want that to happen before the sprint, not after launch.',
      },
      {
        type: 'callout',
        kicker: 'Why designers should own this edge',
        body:
          'Designers sit at the intersection of user needs, business goals, and technical constraints. That position gives you a perspective nobody else on the team has. When something in the brief does not add up, when the success metric is missing, when the scope has quietly doubled, you are often the first person in a position to notice. Staying quiet about it lets the team walk into a wall.',
      },

      { type: 'heading', kicker: 'In practice', text: 'The brief said navigation. The problem was the homepage.' },
      {
        type: 'narrative',
        body:
          'A brief landed asking us to improve Back Office navigation: sellers were struggling to find the tools they needed, so the ask was a cleaner layout, better visual hierarchy, a more organised menu. The questions above pulled it apart in one review. What evidence said navigation was the problem? Analytics showed sellers were not lost in the menus; they were leaving the homepage without acting at all.',
      },
      {
        type: 'callout',
        kicker: 'What actually changed',
        body:
          'The brief was asking us to optimise a journey that was not happening. Instead of reorganising navigation, we redesigned the homepage around one question: what does a seller need the moment they log in? The output was a task-oriented surface built around the actions needing attention, not a tidier menu of every tool that existed. A better navigation structure would have solved nothing.',
      },

      { type: 'heading', kicker: 'Why it works', text: 'Teams that skip problem definition don’t save time. They borrow it.' },
      {
        type: 'narrative',
        body:
          'The time skipped at the start comes back with interest: design effort landing on the wrong problem, rework when the real constraints surface, and engineers and PMs losing trust in the design direction because it keeps changing. Asked early, the same questions cost an afternoon.\n\nThe best version of this discipline is not me asking the questions. It is a team that has heard them often enough to stop being surprised, and starts asking them itself.',
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
          'Narrative-First Design is a practice I run with cross-functional teams: a one-hour workshop that aligns everyone on the user’s story before any design work begins. Adoption blockers get named while changing direction still costs an afternoon, not a sprint.\n\nI started running it after noticing where the hardest launch problems actually came from. Low activation, low usage, features that worked exactly as built but not as needed: almost all of them were things the team could have named together, in a room, before anyone opened a design tool.',
      },

      { type: 'heading', kicker: 'Why it exists', text: 'Most alignment failures are framing failures' },
      {
        type: 'narrative',
        body:
          'Teams that ship features nobody uses usually had alignment. Everyone agreed on the brief. What they did not have was a shared frame for the user’s story, so each discipline filled the gaps with its own version, and the versions only collided at launch.',
      },
      {
        type: 'pairs',
        kicker: 'The three failures it prevents',
        items: [
          { label: 'Adoption blockers surface too late', value: 'The reasons a user would not adopt the feature exist on day one. Without a ritual that names them, they surface in the post-launch metrics instead.' },
          { label: 'Design decisions detach from user intent', value: 'Without a shared story, each decision gets justified against taste, precedent, or whoever argued last. The story gives every decision one thing to be checked against.' },
          { label: 'Alignment lives in Slack, not the work', value: 'A thread agreeing on direction is not alignment; it is a record that a conversation happened. Alignment is when the team can retell the same story unprompted.' },
        ],
      },

      { type: 'heading', kicker: 'The framework', text: 'Seven questions. One hour. A story the whole team owns.' },
      {
        type: 'narrative',
        body:
          'The workshop walks the team through the user’s story as seven plot points, in order. Together they produce a complete picture of who the user is, why the feature exists, and where it could fail.',
      },
      {
        type: 'pairs',
        items: [
          { label: '01 What does the user want?', value: 'Their goal in their words, not the feature’s description of it.' },
          { label: '02 Why can’t they get it today?', value: 'The obstacle that makes the current path fail, cost too much, or feel too risky.' },
          { label: '03 What do we introduce?', value: 'The feature, told as an event in the user’s story rather than a spec.' },
          { label: '04 What would stop them adopting it?', value: 'The friction, doubt, or habit that makes the user hesitate. The plot point teams skip.' },
          { label: '05 What convinces them to cross?', value: 'The proof, framing, or moment that makes trying it feel safe and worth it.' },
          { label: '06 What changes in their behaviour?', value: 'What they now do differently, and what that requires of the product around it.' },
          { label: '07 What does success look like?', value: 'The observable outcome for the user and the measurable one for the team.' },
        ],
      },

      { type: 'heading', kicker: 'The key insight', text: 'Most teams skip plot point four. That’s where features go to die.' },
      {
        type: 'narrative',
        body:
          'In classic story structure this is the crisis: the moment the protagonist must decide whether to change. In product terms it is the moment the feature has been introduced, the user understands what it is, and now has to decide whether to change their behaviour. That decision is where most features lose their users, and designing for it starts with naming it.',
      },
      {
        type: 'callout',
        kicker: 'Why naming it changes the brief',
        body:
          'Ask a team what would stop the user and you get answers like: the user does not trust the data, the workflow adds a step they were not doing before, they need to convince their manager before they can act. Each one produces a different design brief. None of them would have come out of a PRD review.',
      },

      { type: 'heading', kicker: 'The output', text: 'One sentence the whole team can use' },
      {
        type: 'narrative',
        body:
          'The workshop produces a single sentence, assembled from the plot points: who the user is, what blocks them, what we introduce, and what changes for them. It has to be short enough to remember and specific enough to be useful.\n\nThat sentence becomes the feature’s north star. It gets quoted in sprints, referenced in PRD reviews, and used to gut-check design decisions through the project. When a decision cannot be justified against it, that is a productive conversation to have, and when the sentence itself has to change mid-project, that is the earliest possible warning that the ground has moved.',
      },

      { type: 'heading', kicker: 'In practice', text: 'One workshop, two blockers, two features' },
      {
        type: 'narrative',
        body:
          'Running the workshop on a seller-incentive feature, the room had been treating adoption as one problem: sellers were not acting on the incentive. Plot point four split it in two.',
      },
      {
        type: 'callout',
        kicker: 'What the workshop surfaced',
        body:
          'Two distinct blockers had been living under one name. First: sellers could not see their own performance clearly enough to act on the incentive at all. Second: the timing of the information did not fit how sellers actually plan. Those became two features, a performance tracker and a forward-planning view, instead of one confused surface that would have solved neither. Neither blocker would have surfaced from the brief.',
      },

      { type: 'heading', kicker: 'Why it works', text: 'It’s not a process for designers. It’s a process for teams.' },
      {
        type: 'narrative',
        body:
          'The practice only works with everyone in the room: PM, design, engineering, research, whoever owns the metric. The story belongs to the team, not to a single discipline, and that shared ownership is what makes the decisions durable. Decisions stay tethered to user intent, adoption blockers surface in an hour instead of a sprint, and alignment stops being assumed, because you have heard the whole room tell the same story.',
      },
    ],
    companion: {
      slug: 'solve-the-right-problem',
      title: 'Good execution of the wrong thing is still failure.',
      note: 'The companion discipline: the questions I ask before any of this, to make sure the story we align on is the right one.',
    },
  },
];
