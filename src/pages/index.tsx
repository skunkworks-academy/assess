import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const pathways = [
  ['01', 'Reflect', 'Name your current strengths, constraints, and the result you want to create.'],
  ['02', 'Focus', 'Select one meaningful capability and define a small, observable outcome.'],
  ['03', 'Practise', 'Use curated learning resources, real work, feedback, and weekly evidence.'],
  ['04', 'Review', 'Assess what changed, adjust your plan, and choose the next best step.'],
];

const people = [
  ['Adrian Rincon', 'adrian-rincon'],
  ['Analita Gonçalves', 'analita-goncalves'],
  ['Fernanda Koppe Souto Maior Macias', 'fernanda-koppe-souto-maior-macias'],
  ['Nkateko Mtembi', 'nkateko-mtembi'],
  ['Mthiya Lunga', 'mthiya-lunga'],
  ['Blessing Cloudio', 'blessing-cloudio'],
  ['Christine du Plessis', 'christine-du-plessis'],
  ['Colani Siguca Gembe', 'colani-siguca-gembe'],
  ['Ammar Boualem Zeghough', 'ammar-boualem-zeghough'],
];

export default function Home(): ReactNode {
  return (
    <Layout title="Individual Development Roadmaps" description="A practical learning hub for purposeful development.">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>SKUNKWORKS ACADEMY · 2026 COHORT</p>
            <h1>Make your next step<br />a visible one.</h1>
            <p className={styles.lede}>A private-ready Individual Development Roadmap workspace for turning learning goals into focused action, evidence, and growth.</p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">Begin your roadmap</Link>
              <Link className="button button--outline button--secondary button--lg" to="/docs/resource-library">Browse resources</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <p className={styles.kicker}>THE IDR RHYTHM</p>
            <h2>Progress is a practice, not a document.</h2>
            <div className={styles.pathwayGrid}>
              {pathways.map(([number, title, copy]) => <article className={styles.step} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.peopleSection)}>
          <div className="container">
            <p className={styles.kicker}>YOUR WORKSPACE</p>
            <h2>Choose your individual roadmap.</h2>
            <p className={styles.sectionIntro}>Every space includes a 30-day action plan, reflection prompts, an evidence checklist, and hand-picked starting resources. Complete it with your own assessment insight and mentor feedback.</p>
            <div className={styles.peopleGrid}>
              {people.map(([name, slug], index) => <Link className={styles.personCard} to={`/docs/individual-plans/${slug}`} key={slug}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><small>Open roadmap →</small>
              </Link>)}
            </div>
          </div>
        </section>

        <section className={styles.callout}>
          <div className="container"><div><p className={styles.kicker}>DON’T KNOW WHERE TO START?</p><h2>Start small. Learn in public. Review often.</h2></div><Link className="button button--primary button--lg" to="/docs/how-to-use-this-portal">Use the guide</Link></div>
        </section>
      </main>
    </Layout>
  );
}
