export type AssessmentProduct = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  audience: string;
  summary: string;
  question: string;
  outcome: string;
  bestFor: string[];
  deliverables: string[];
  preparation: string[];
  stages: Array<[string, string]>;
  primaryAction: {label: string; href: string; external?: boolean};
  secondaryAction?: {label: string; href: string; external?: boolean};
};

export const assessmentProducts: AssessmentProduct[] = [
  {
    slug: 'individual-development-roadmap',
    title: 'Individual Development Roadmap',
    shortTitle: 'Individual development',
    eyebrow: 'For individuals',
    audience: 'Professionals, learners, and mentors',
    summary: 'Turn assessment insight into a focused development plan with practical actions, evidence, and review points.',
    question: 'What capability should I strengthen next, and how will I show progress?',
    outcome: 'A guided 30-day roadmap and a repeatable growth rhythm.',
    bestFor: [
      'Turning broad feedback into one usable development priority',
      'Preparing for a growth conversation with a mentor or manager',
      'Creating evidence of improvement through real work',
      'Building a sustainable weekly learning practice',
    ],
    deliverables: [
      'A focused capability and outcome statement',
      'A four-week action and practice plan',
      'A practical evidence checklist',
      'Weekly reflection and review prompts',
      'A closing reflection and next-step decision',
    ],
    preparation: [
      'Bring recent feedback, goals, and examples of work that matter to you.',
      'Choose a real work outcome where you can practise the capability.',
      'Identify one person who can provide specific, timely feedback.',
      'Keep confidential assessment answers in the approved response system.',
    ],
    stages: [
      ['Reflect', 'Name the strengths, constraints, and change that matter now.'],
      ['Focus', 'Choose one capability and define an observable outcome.'],
      ['Practise', 'Use learning, real work, and feedback to build the capability.'],
      ['Review', 'Collect evidence, assess what changed, and choose the next step.'],
    ],
    primaryAction: {
      label: 'Start the IDR assessment',
      href: 'https://forms.cloud.microsoft/r/3pDGVLp645',
      external: true,
    },
    secondaryAction: {label: 'Open the IDR guide', href: '/docs/intro'},
  },
  {
    slug: 'skills-role-readiness',
    title: 'Skills & role readiness',
    shortTitle: 'Role readiness',
    eyebrow: 'For career moves',
    audience: 'Professionals, career changers, and managers',
    summary: 'Clarify current strengths, identify priority gaps, and connect development goals to the role you want to perform.',
    question: 'What evidence shows I am ready for this role, and which gaps matter most?',
    outcome: 'A readiness picture, prioritised gaps, and a focused development route.',
    bestFor: [
      'Preparing for expanded responsibilities or a role transition',
      'Comparing current evidence with real role expectations',
      'Prioritising a small number of high-value development areas',
      'Creating a practical conversation between a learner and manager',
    ],
    deliverables: [
      'A role-outcome and responsibility map',
      'A strengths and evidence inventory',
      'Prioritised capability gaps',
      'A development action plan',
      'Suggested practice, feedback, and review points',
    ],
    preparation: [
      'Bring a current role description or a clear summary of the target role.',
      'List recent work examples that demonstrate relevant capability.',
      'Gather feedback from a manager, peer, customer, or project lead.',
      'Separate essential role requirements from useful future capabilities.',
    ],
    stages: [
      ['Define', 'Clarify the target role, responsibilities, and expected outcomes.'],
      ['Evidence', 'Map current strengths to examples that another person can review.'],
      ['Prioritise', 'Rank gaps by role impact, urgency, and opportunity to practise.'],
      ['Develop', 'Build a focused learning and evidence plan around the top priorities.'],
    ],
    primaryAction: {
      label: 'Request a readiness review',
      href: 'https://www.skunkworksacademy.com/contact.html',
      external: true,
    },
    secondaryAction: {label: 'Find the right assessment', href: '/find-your-assessment'},
  },
  {
    slug: 'certification-readiness',
    title: 'Certification readiness',
    shortTitle: 'Certification readiness',
    eyebrow: 'For learners',
    audience: 'Certification candidates and learning teams',
    summary: 'Choose the right certification route, establish a realistic baseline, and prepare through applied learning rather than unfocused study.',
    question: 'Am I preparing for the right certification, and what should I practise before the exam?',
    outcome: 'A realistic route from baseline knowledge to confident exam preparation.',
    bestFor: [
      'Choosing between certification levels or technology pathways',
      'Identifying prerequisite knowledge before starting a course',
      'Planning study around work and available practice time',
      'Connecting exam objectives to practical demonstrations',
    ],
    deliverables: [
      'A certification and prerequisite fit check',
      'A topic-level confidence baseline',
      'Priority learning and practice areas',
      'A study and lab rhythm',
      'Readiness checkpoints before scheduling the exam',
    ],
    preparation: [
      'Bring the certification name, level, and official exam objectives.',
      'List relevant work experience, courses, labs, and prior certifications.',
      'Be realistic about weekly time available for study and practice.',
      'Identify the environment or lab access available for hands-on work.',
    ],
    stages: [
      ['Select', 'Confirm that the certification matches the role and outcome you need.'],
      ['Baseline', 'Review prerequisite and objective-level confidence.'],
      ['Prepare', 'Plan targeted learning, labs, retrieval practice, and review.'],
      ['Validate', 'Use practice evidence and checkpoints before booking the exam.'],
    ],
    primaryAction: {
      label: 'Browse certification pathways',
      href: 'https://www.skunkworksacademy.com/catalogue/',
      external: true,
    },
    secondaryAction: {label: 'Use the resource hub', href: '/resources'},
  },
  {
    slug: 'team-capability-review',
    title: 'Team capability review',
    shortTitle: 'Team capability',
    eyebrow: 'For teams',
    audience: 'Managers, delivery leads, and learning teams',
    summary: 'Create a shared view of capability strengths, delivery risks, and development opportunities across a team or function.',
    question: 'Which capabilities will help this team deliver its next outcomes more reliably?',
    outcome: 'Prioritised capability themes and an actionable team learning plan.',
    bestFor: [
      'Planning development against delivery or transformation priorities',
      'Identifying shared capability themes without ranking individuals',
      'Balancing immediate risk with longer-term capability building',
      'Creating common language between leaders, teams, and learning partners',
    ],
    deliverables: [
      'A capability-to-outcome map',
      'An aggregated strengths and risks view',
      'Prioritised team development themes',
      'Suggested learning, practice, and peer-sharing actions',
      'Review measures tied to delivery evidence',
    ],
    preparation: [
      'Define the team outcomes, services, or change priorities in scope.',
      'Bring role profiles, delivery risks, and existing development plans.',
      'Agree how results will be aggregated and who may view them.',
      'Avoid using a development review as a hidden performance-ranking exercise.',
    ],
    stages: [
      ['Scope', 'Agree the business outcomes, population, and decisions in scope.'],
      ['Review', 'Gather role, evidence, and capability perspectives consistently.'],
      ['Synthesis', 'Identify shared themes, strengths, risks, and dependencies.'],
      ['Activate', 'Create a team plan with owners, practice opportunities, and reviews.'],
    ],
    primaryAction: {
      label: 'Plan a team review',
      href: 'https://www.skunkworksacademy.com/contact.html',
      external: true,
    },
    secondaryAction: {label: 'See how assessment works', href: '/how-it-works'},
  },
];

export function getAssessment(slug: string): AssessmentProduct {
  const assessment = assessmentProducts.find((item) => item.slug === slug);
  if (!assessment) throw new Error(`Unknown assessment product: ${slug}`);
  return assessment;
}
