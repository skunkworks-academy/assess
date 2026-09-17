import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './site-pages.module.css';

const resources = [
  ['Learning plans', 'IDR resource library', 'Use learning notes, feedback prompts, evidence ladders, and simple planning tools.', '/docs/resource-library', false],
  ['Microsoft', 'Microsoft Learn', 'Build cloud, AI, data, security, and business application skills through modular learning.', 'https://learn.microsoft.com/training/', true],
  ['Web foundations', 'MDN Web Docs', 'Use trusted documentation and guided learning for modern web technologies.', 'https://developer.mozilla.org/en-US/docs/Learn_web_development', true],
  ['Data practice', 'Kaggle Learn', 'Practise data, machine learning, and analysis skills through short applied lessons.', 'https://www.kaggle.com/learn', true],
  ['Team delivery', 'Atlassian Team Playbook', 'Run practical team exercises for planning, collaboration, and improvement.', 'https://www.atlassian.com/team-playbook', true],
  ['Open learning', 'OpenLearn', 'Explore free structured learning from The Open University across professional subjects.', 'https://www.open.edu/openlearn/', true],
  ['GitHub', 'GitHub Skills', 'Learn GitHub workflows through hands-on, repository-based exercises.', 'https://skills.github.com/', true],
  ['Certification routes', 'Skunkworks Academy catalogue', 'Explore available learning and certification pathways supported by the academy.', 'https://www.skunkworksacademy.com/catalogue/', true],
  ['Participant access', 'Individual roadmaps', 'Open the current cohort workspaces and continue a development plan.', '/docs/individual-plans', false],
];

export default function Resources(): ReactNode {
  return (
    <Layout title="Assessment resources" description="Practical assessment, learning, feedback, and evidence resources from Skunkworks Academy and trusted learning providers.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve"><div className="container"><p className={styles.eyebrow}>RESOURCE HUB</p><h1>Learn with an outcome in mind.</h1><p>Choose resources that help you make, test, explain, or improve something. Then collect evidence and ask for focused feedback.</p><Link className="button button--primary button--lg" to="/docs/resource-library">Open the practical toolkit</Link></div></header>
        <section className={styles.pageSection}><div className="container"><p className={styles.kicker}>CURATED STARTING POINTS</p><h2>Resources for action and evidence.</h2><p className={styles.sectionIntro}>These links support the assessment pathways. Confirm course fit, prerequisites, availability, and certification requirements with the provider before committing time or budget.</p><div className={styles.resourceGrid}>{resources.map(([label,title,copy,href,external]) => <article className={styles.resourceCard} key={title as string}><span>{label}</span><h3>{title}</h3><p>{copy}</p>{external ? <a href={href as string}>{`Visit ${title}`} <span aria-hidden="true">↗</span></a> : <Link to={href as string}>Open resource <span aria-hidden="true">→</span></Link>}</article>)}</div></div></section>
        <section className={`${styles.pageSection} ${styles.pageSectionMuted}`}><div className="container"><p className={styles.kicker}>USE RESOURCES WELL</p><h2>A simple learning contract.</h2><div className={styles.threeGrid}><article className={styles.infoCard}><h3>Before</h3><p>Name the capability, the useful outcome, and the evidence you intend to create.</p></article><article className={styles.infoCard}><h3>During</h3><p>Capture questions and apply each important idea to a real or simulated task.</p></article><article className={styles.infoCard}><h3>After</h3><p>Produce evidence, request one specific piece of feedback, and update your plan.</p></article></div></div></section>
      </main>
    </Layout>
  );
}
