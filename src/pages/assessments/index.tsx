import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {assessmentProducts} from '../../data/assessments';
import styles from '../site-pages.module.css';

export default function AssessmentCatalogue(): ReactNode {
  return (
    <Layout title="Assessment pathways" description="Compare Skunkworks Academy assessment pathways for individual development, role readiness, certification preparation, and team capability.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve">
          <div className="container"><p className={styles.eyebrow}>ASSESSMENT CATALOGUE</p><h1>Start with the decision you need to make.</h1><p>Compare each pathway by audience, question, and output. If the right starting point is not obvious, use the guided selector.</p><Link className="button button--primary button--lg" to="/find-your-assessment">Find my assessment</Link></div>
        </header>

        <section className={styles.pageSection}>
          <div className="container">
            <div className={styles.catalogueGrid}>
              {assessmentProducts.map((product, index) => (
                <article className={styles.catalogueCard} key={product.slug}>
                  <div className={styles.cardMeta}><span>{product.eyebrow}</span><b>{String(index + 1).padStart(2, '0')}</b></div>
                  <h2>{product.title}</h2>
                  <p>{product.summary}</p>
                  <dl><dt>Best question</dt><dd>{product.question}</dd><dt>Core output</dt><dd>{product.outcome}</dd></dl>
                  <Link to={`/assessments/${product.slug}`}>View this pathway <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.splitCallout}>
          <div className="container"><div><p className={styles.kicker}>NOT SURE YET?</p><h2>Use the outcome selector.</h2><p>Answer one practical question and get a suggested place to begin.</p></div><Link className="button button--primary button--lg" to="/find-your-assessment">Compare by outcome</Link></div>
        </section>
      </main>
    </Layout>
  );
}
