import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type {AssessmentProduct} from '../data/assessments';
import styles from './AssessmentSite.module.css';

function Action({action, primary = false}: {action: AssessmentProduct['primaryAction']; primary?: boolean}) {
  const className = primary ? 'button button--primary button--lg' : styles.secondaryAction;
  if (action.external) {
    return <a className={className} href={action.href}>{action.label}</a>;
  }
  return <Link className={className} to={action.href}>{action.label}</Link>;
}

export default function AssessmentDetail({product}: {product: AssessmentProduct}): ReactNode {
  return (
    <Layout title={product.title} description={product.summary}>
      <main>
        <section className={styles.detailHero} data-swa-surface-tone="dark" data-swa-contrast="preserve">
          <div className="container">
            <Link className={styles.breadcrumb} to="/assessments">Assessment pathways</Link>
            <p className={styles.eyebrow}>{product.eyebrow}</p>
            <h1>{product.title}</h1>
            <p className={styles.heroLead}>{product.summary}</p>
            <div className={styles.heroActions}>
              <Action action={product.primaryAction} primary />
              {product.secondaryAction && <Action action={product.secondaryAction} />}
            </div>
          </div>
        </section>

        <section className={styles.questionBand}>
          <div className="container"><span>The decision this supports</span><strong>{product.question}</strong></div>
        </section>

        <section className={styles.contentSection}>
          <div className={`container ${styles.twoColumn}`}>
            <div>
              <p className={styles.kicker}>WHEN TO USE IT</p>
              <h2>A good fit when you need direction, not another score.</h2>
              <ul className={styles.checkList}>
                {product.bestFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <aside className={styles.outcomePanel}>
              <p>Core outcome</p>
              <h3>{product.outcome}</h3>
              <span>Designed for</span>
              <strong>{product.audience}</strong>
            </aside>
          </div>
        </section>

        <section className={`${styles.contentSection} ${styles.mutedSection}`}>
          <div className="container">
            <p className={styles.kicker}>WHAT YOU RECEIVE</p>
            <h2>Useful outputs you can act on.</h2>
            <div className={styles.deliverableGrid}>
              {product.deliverables.map((item, index) => (
                <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <p className={styles.kicker}>THE ASSESSMENT RHYTHM</p>
            <h2>From context to practical action.</h2>
            <div className={styles.stageGrid}>
              {product.stages.map(([title, copy], index) => (
                <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.contentSection} ${styles.preparationSection}`}>
          <div className={`container ${styles.twoColumn}`}>
            <div>
              <p className={styles.kicker}>PREPARE WELL</p>
              <h2>Bring context and evidence.</h2>
              <p className={styles.introCopy}>The quality of the outcome depends on honest context, relevant examples, and a clear decision to support.</p>
            </div>
            <ol className={styles.preparationList}>
              {product.preparation.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
        </section>

        <section className={styles.ctaPanel}>
          <div className="container">
            <div><p className={styles.kicker}>READY TO MOVE FORWARD?</p><h2>Turn the assessment into a useful next step.</h2></div>
            <div className={styles.heroActions}>
              <Action action={product.primaryAction} primary />
              <Link className={styles.secondaryAction} to="/find-your-assessment">Compare all pathways</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
