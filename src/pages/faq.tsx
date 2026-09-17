import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './site-pages.module.css';

const faqs = [
  ['Which assessment should I choose?', 'Choose the Individual Development Roadmap for a personal growth plan, Skills & Role Readiness for a role transition, Certification Readiness for an exam pathway, and Team Capability Review for aggregated team planning. The guided selector can recommend a starting point.'],
  ['Is an assessment a pass or fail test?', 'No. These pathways are designed to support a decision and development plan. Certification providers may have formal exam requirements, but this site does not award or predict a pass result.'],
  ['What happens after I complete an assessment?', 'Review the findings, agree a small number of priorities, connect them to real practice, and decide what evidence will show progress. Use scheduled review points to adapt the plan.'],
  ['Can a manager complete the assessment for someone?', 'A manager can add valuable context and evidence, but individual reflection and an open development conversation remain important. Agree who contributes and who can access the outcome before starting.'],
  ['Are individual responses published on this site?', 'No. The public site contains guidance, resources, and development-plan templates. Keep confidential responses and feedback in the approved response system.'],
  ['How should an IDR participant use their workspace?', 'Open the participant portal, confirm the suggested focus with a mentor or manager, define a 30-day outcome, practise weekly, collect evidence, and review the plan at the end of the cycle.'],
  ['Can a development priority change?', 'Yes. A roadmap is a working plan, not a permanent label. Update it when evidence, feedback, role needs, or delivery context changes.'],
  ['Does completing a course count as evidence?', 'It is participation evidence. Stronger evidence shows understanding, application, improvement, or contribution—for example a work sample, lab, explanation, feedback, or reusable guide.'],
  ['How do I request a team assessment or readiness review?', 'Use the Skunkworks Academy contact route and include the audience, desired outcome, approximate scope, timing, and the decision you need the assessment to support.'],
];

export default function Faq(): ReactNode {
  return (
    <Layout title="Assessment FAQ" description="Answers to common questions about Skunkworks Academy assessments, IDRs, evidence, privacy, and next steps.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve"><div className="container"><p className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</p><h1>Clear answers before you begin.</h1><p>Understand the pathways, outputs, evidence expectations, and treatment of assessment information.</p><Link className="button button--primary button--lg" to="/find-your-assessment">Find my assessment</Link></div></header>
        <section className={styles.pageSection}><div className="container"><p className={styles.kicker}>ASSESSMENT AND IDR</p><h2>Common questions.</h2><div className={styles.faqList}>{faqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
        <section className={styles.splitCallout}><div className="container"><div><p className={styles.kicker}>NEED SOMETHING SPECIFIC?</p><h2>Talk to Skunkworks Academy.</h2><p>Share the audience, outcome, and decision you want the assessment to support.</p></div><a className="button button--primary button--lg" href="https://www.skunkworksacademy.com/contact.html">Contact the academy</a></div></section>
      </main>
    </Layout>
  );
}
