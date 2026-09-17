import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './site-pages.module.css';

export default function About(): ReactNode {
  return (
    <Layout title="About Assess" description="About the Skunkworks Academy approach to practical assessment, development planning, and evidence-based learning.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve"><div className="container"><p className={styles.eyebrow}>ABOUT ASSESS</p><h1>Make capability visible and development practical.</h1><p>Skunkworks Academy Assess connects reflection, evidence, learning, and real work so that assessment leads to a useful next decision.</p><Link className="button button--primary button--lg" to="/how-it-works">See the approach</Link></div></header>
        <section className={styles.pageSection}><div className="container"><div className={styles.prose}><h2>Why this site exists</h2><p>Assessment is most useful when it gives a person or team a clearer view of what matters now and a realistic way to act. This site brings together assessment pathways, guidance, learning resources, and Individual Development Roadmap workspaces in one place.</p><h2>What we mean by assessment</h2><p>An assessment is a structured way to combine context, reflection, evidence, and conversation. It may include questions, work examples, role expectations, learning history, feedback, or demonstrations. No single score should be treated as the whole person or the final decision.</p><h2>What participants can expect</h2><ul><li>A clear explanation of the purpose and intended output.</li><li>Questions connected to a real role, goal, certification, or team outcome.</li><li>Space to add context and evidence.</li><li>A small number of prioritised next steps.</li><li>Guidance for practice, feedback, and review.</li></ul><h2>What managers and mentors can expect</h2><p>The process supports a development conversation; it does not replace one. Managers and mentors help validate context, identify practice opportunities, offer specific feedback, and review evidence without turning development data into an undisclosed performance ranking.</p></div></div></section>
        <section className={styles.splitCallout}><div className="container"><div><p className={styles.kicker}>EXPLORE THE OFFERING</p><h2>Choose an assessment pathway.</h2><p>Compare the audience, decision, and output for every assessment.</p></div><Link className="button button--primary button--lg" to="/assessments">View assessments</Link></div></section>
      </main>
    </Layout>
  );
}
