import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {assessmentProducts} from '../data/assessments';
import styles from './index.module.css';

const process = [
  ['01', 'Choose', 'Start with the person, role, certification, or team outcome that matters.'],
  ['02', 'Assess', 'Capture a useful baseline through guided questions and reflection.'],
  ['03', 'Prioritise', 'Turn the findings into a small number of meaningful development goals.'],
  ['04', 'Act', 'Practise in real work, collect evidence, review progress, and adapt.'],
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Assessments and Development Roadmaps"
      description="Choose a practical Skunkworks Academy assessment for individual development, skills readiness, certification preparation, or team capability planning.">
      <main>
        <section className={styles.hero} data-swa-surface-tone="dark" data-swa-contrast="preserve">
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>SKUNKWORKS ACADEMY ASSESS</p>
              <h1>Choose the right assessment for what comes next.</h1>
              <p className={styles.lede}>Practical assessments and development roadmaps that turn reflection into focused learning, visible evidence, and confident next steps.</p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/find-your-assessment">Find your assessment</Link>
                <Link className="button button--outline button--secondary button--lg" to="/docs/individual-plans">Open the IDR portal</Link>
              </div>
            </div>
            <aside className={styles.selector} aria-label="Assessment selection guide">
              <p className={styles.selectorLabel}>Start with your outcome</p>
              <ul>
                <li><span>01</span><Link to="/assessments/individual-development-roadmap">Build a personal development plan</Link></li>
                <li><span>02</span><Link to="/assessments/skills-role-readiness">Prepare for a role or career move</Link></li>
                <li><span>03</span><Link to="/assessments/certification-readiness">Check certification readiness</Link></li>
                <li><span>04</span><Link to="/assessments/team-capability-review">Understand team capability</Link></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.choiceBand} aria-label="Assessment promise">
          <div className="container">
            <span>Clear baseline</span><span>Focused priorities</span><span>Practical action</span><span>Visible evidence</span>
          </div>
        </section>

        <section className={styles.section} id="assessment-products">
          <div className="container">
            <div className={styles.sectionHeading}>
              <div><p className={styles.kicker}>ASSESSMENT PATHWAYS</p><h2>Select the outcome you need.</h2></div>
              <p>Each pathway helps you move from insight to action. Choose the closest fit now; the plan can evolve as your context changes.</p>
            </div>
            <div className={styles.productGrid}>
              {assessmentProducts.map((product, index) => (
                <article
                  className={`${styles.productCard} ${index === 0 ? styles.featuredCard : ''}`}
                  id={product.slug}
                  key={product.title}>
                  <div className={styles.cardTopline}>
                    <p>{product.eyebrow}</p>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{product.title}</h3>
                  <p className={styles.cardDescription}>{product.summary}</p>
                  <div className={styles.outcome}><strong>You receive</strong><span>{product.outcome}</span></div>
                  <Link className={styles.cardLink} to={`/assessments/${product.slug}`}>Explore this pathway <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
            <div className={styles.catalogueAction}><Link to="/assessments">Compare all assessment pathways <span aria-hidden="true">→</span></Link></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`}>
          <div className="container">
            <p className={styles.kicker}>FROM INSIGHT TO EVIDENCE</p>
            <h2>A simple rhythm for useful assessment.</h2>
            <div className={styles.processGrid}>
              {process.map(([number, title, copy]) => (
                <article className={styles.processStep} key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.idrPanel}>
          <div className={`container ${styles.idrGrid}`}>
            <div>
              <p className={styles.kicker}>CURRENT IDR PARTICIPANTS</p>
              <h2>Your roadmap workspace is ready.</h2>
              <p>Open your individual plan, work through the prompts, add agreed assessment insights, and track evidence from real learning and delivery.</p>
            </div>
            <div className={styles.idrActions}>
              <Link className="button button--primary button--lg" to="/docs/individual-plans">Choose your roadmap</Link>
              <Link className={styles.textLink} to="/docs/resource-library">Browse the resource library <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className={styles.privacyNote}>
          <div className="container">
            <strong>Assessment data deserves care.</strong>
            <p>Use approved systems for assessment responses and personal feedback. This public portal provides guidance, resources, and development-plan templates—not confidential respondent data.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
