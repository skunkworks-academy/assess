import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './site-pages.module.css';

const steps = [
  ['01', 'Frame', 'Agree the outcome, audience, context, and decision the assessment must support.'],
  ['02', 'Gather', 'Collect structured reflection, relevant evidence, and perspectives from the right people.'],
  ['03', 'Interpret', 'Identify strengths, constraints, gaps, and patterns without treating a score as the whole story.'],
  ['04', 'Act', 'Choose a small number of priorities and connect them to practice, feedback, and real work.'],
  ['05', 'Review', 'Use evidence to assess progress, update the plan, and decide what comes next.'],
];

export default function HowItWorks(): ReactNode {
  return (
    <Layout title="How assessment works" description="Learn how Skunkworks Academy assessments move from context and evidence to practical development action.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve"><div className="container"><p className={styles.eyebrow}>OUR APPROACH</p><h1>Assessment should improve the next decision.</h1><p>A useful assessment combines context, reflection, evidence, and conversation. The output is a practical plan—not a label.</p><Link className="button button--primary button--lg" to="/assessments">Explore pathways</Link></div></header>
        <section className={styles.pageSection}><div className="container"><p className={styles.kicker}>FIVE STAGES</p><h2>One repeatable assessment rhythm.</h2><div className={styles.stepGrid}>{steps.map(([n,t,c]) => <article className={styles.stepCard} key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
        <section className={`${styles.pageSection} ${styles.pageSectionMuted}`}><div className="container"><p className={styles.kicker}>DESIGN PRINCIPLES</p><h2>What makes an assessment useful.</h2><div className={styles.principleGrid}>
          <article className={styles.infoCard}><h3>Context before comparison</h3><p>Interpret capability against a real role, outcome, or delivery need rather than an abstract ranking.</p></article>
          <article className={styles.infoCard}><h3>Evidence before confidence</h3><p>Use examples, artefacts, feedback, and demonstration to strengthen self-reported confidence.</p></article>
          <article className={styles.infoCard}><h3>Priorities before volume</h3><p>A small number of important, practicable priorities creates more progress than a long gap list.</p></article>
          <article className={styles.infoCard}><h3>Practice before consumption</h3><p>Learning becomes useful when it changes what someone can make, explain, decide, or deliver.</p></article>
          <article className={styles.infoCard}><h3>Review before completion</h3><p>Development plans stay active through evidence reviews and deliberate course correction.</p></article>
          <article className={styles.infoCard}><h3>Care before collection</h3><p>Collect only what is needed, use approved systems, and keep access aligned to the stated purpose.</p></article>
        </div></div></section>
        <section className={styles.pageSection}><div className="container"><p className={styles.kicker}>EVIDENCE LADDER</p><h2>Move beyond attendance.</h2><p className={styles.sectionIntro}>The goal is not simply to complete learning. It is to build evidence that a capability can be understood, applied, improved, and shared.</p><table className={styles.evidenceTable}><thead><tr><th>Level</th><th>Evidence</th><th>Useful example</th></tr></thead><tbody>
          <tr><td>1 · Participation</td><td>I attended, watched, or read.</td><td>Course completion or session notes</td></tr>
          <tr><td>2 · Understanding</td><td>I can explain the idea accurately.</td><td>A concise explanation, diagram, or knowledge check</td></tr>
          <tr><td>3 · Application</td><td>I used the capability in a real or simulated task.</td><td>A lab, work sample, analysis, presentation, or prototype</td></tr>
          <tr><td>4 · Improvement</td><td>Feedback shows the outcome became more useful.</td><td>Before-and-after evidence with targeted peer feedback</td></tr>
          <tr><td>5 · Contribution</td><td>I helped another person or team apply it.</td><td>A reusable guide, mentoring session, or team practice</td></tr>
        </tbody></table></div></section>
        <section className={styles.splitCallout}><div className="container"><div><p className={styles.kicker}>BEGIN WITH THE OUTCOME</p><h2>Find the right pathway.</h2><p>Use the guided selector if you are deciding between individual, role, certification, and team needs.</p></div><Link className="button button--primary button--lg" to="/find-your-assessment">Find my assessment</Link></div></section>
      </main>
    </Layout>
  );
}
