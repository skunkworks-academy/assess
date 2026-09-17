import type {ReactNode} from 'react';
import {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {assessmentProducts} from '../data/assessments';
import styles from './site-pages.module.css';

const choices = [
  ['individual-development-roadmap', 'Develop myself', 'I want a focused growth plan built around feedback, practice, and evidence.'],
  ['skills-role-readiness', 'Prepare for a role', 'I want to understand whether my current evidence matches a role or career move.'],
  ['certification-readiness', 'Prepare for certification', 'I need the right pathway, a baseline, and a practical preparation plan.'],
  ['team-capability-review', 'Plan for a team', 'I need a shared view of capability strengths, risks, and development priorities.'],
] as const;

export default function FindYourAssessment(): ReactNode {
  const [selected, setSelected] = useState<string>('');
  const result = assessmentProducts.find((product) => product.slug === selected);

  return (
    <Layout title="Find your assessment" description="Choose the assessment pathway that best matches your individual, career, certification, or team outcome.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve">
          <div className="container"><p className={styles.eyebrow}>GUIDED SELECTOR</p><h1>What needs to be clearer after the assessment?</h1><p className={styles.selectorIntro}>Choose the outcome closest to your current need. You can review every pathway before starting.</p></div>
        </header>
        <section className={styles.pageSection}>
          <div className="container">
            <p className={styles.kicker}>CHOOSE ONE OUTCOME</p>
            <div className={styles.choiceGrid} role="group" aria-label="Assessment outcomes">
              {choices.map(([slug, title, copy], index) => (
                <button
                  aria-pressed={selected === slug}
                  className={`${styles.choiceButton} ${selected === slug ? styles.choiceButtonActive : ''}`}
                  key={slug}
                  onClick={() => setSelected(slug)}
                  type="button">
                  <span>{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><small>{copy}</small>
                </button>
              ))}
            </div>
            {result ? (
              <div className={styles.resultCard} aria-live="polite">
                <div><span className={styles.eyebrow}>SUGGESTED STARTING POINT</span><h2>{result.title}</h2><p>{result.outcome}</p></div>
                <div><Link className="button button--primary button--lg" to={`/assessments/${result.slug}`}>View this pathway</Link><Link className={styles.resultLink} to="/assessments">Compare all assessments</Link></div>
              </div>
            ) : <div className={styles.emptyResult} aria-live="polite">Select an outcome to see a suggested assessment pathway.</div>}
          </div>
        </section>
      </main>
    </Layout>
  );
}
