import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const assessmentProducts = [
  {
    eyebrow: 'For individuals',
    title: 'Individual Development Roadmap',
    description: 'Turn assessment insight into a focused development plan with practical actions, evidence, and review points.',
    outcome: 'A guided 30-day roadmap and a repeatable growth rhythm.',
    action: 'Explore the IDR',
    to: '/docs/intro',
    featured: true,
  },
  {
    eyebrow: 'For career moves',
    title: 'Skills & role readiness',
    description: 'Clarify current strengths, identify priority gaps, and connect development goals to the role you want to perform.',
    outcome: 'A clear readiness picture and focused learning priorities.',
    action: 'Explore assessments',
    href: 'https://www.skunkworksacademy.com/assessments/',
  },
  {
    eyebrow: 'For learners',
    title: 'Certification readiness',
    description: 'Use a structured readiness conversation to choose the right course, prepare with purpose, and avoid unfocused study.',
    outcome: 'A practical route from baseline to exam preparation.',
    action: 'Browse the catalogue',
    href: 'https://www.skunkworksacademy.com/catalogue/',
  },
  {
    eyebrow: 'For teams',
    title: 'Team capability review',
    description: 'Create a shared view of capability strengths, delivery risks, and development opportunities across a team or function.',
    outcome: 'Prioritised capability themes for an actionable learning plan.',
    action: 'Plan a team review',
    href: 'https://www.skunkworksacademy.com/contact.html',
  },
];

const process = [
  ['01', 'Choose', 'Start with the person, role, certification, or team outcome that matters.'],
  ['02', 'Assess', 'Capture a useful baseline through guided questions and reflection.'],
  ['03', 'Prioritise', 'Turn the findings into a small number of meaningful development goals.'],
  ['04', 'Act', 'Practise in real work, collect evidence, review progress, and adapt.'],
];

function ProductAction({product}: {product: (typeof assessmentProducts)[number]}) {
  if ('to' in product && product.to) {
    return <Link className={styles.cardLink} to={product.to}>{product.action} <span aria-hidden="true">→</span></Link>;
  }

  return <a className={styles.cardLink} href={product.href}>{product.action} <span aria-hidden="true">→</span></a>;
}

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
                <a className="button button--primary button--lg" href="#assessment-products">Find your assessment</a>
                <Link className="button button--outline button--secondary button--lg" to="/docs/individual-plans">Open the IDR portal</Link>
              </div>
            </div>
            <aside className={styles.selector} aria-label="Assessment selection guide">
              <p className={styles.selectorLabel}>Start with your outcome</p>
              <ul>
                <li><span>01</span><a href="#individual-development-roadmap">Build a personal development plan</a></li>
                <li><span>02</span><a href="#skills-role-readiness">Prepare for a role or career move</a></li>
                <li><span>03</span><a href="#certification-readiness">Check certification readiness</a></li>
                <li><span>04</span><a href="#team-capability-review">Understand team capability</a></li>
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
                  className={`${styles.productCard} ${product.featured ? styles.featuredCard : ''}`}
                  id={product.title.toLowerCase().replaceAll('&', '').replaceAll(' ', '-').replaceAll('--', '-')}
                  key={product.title}>
                  <div className={styles.cardTopline}>
                    <p>{product.eyebrow}</p>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{product.title}</h3>
                  <p className={styles.cardDescription}>{product.description}</p>
                  <div className={styles.outcome}><strong>You receive</strong><span>{product.outcome}</span></div>
                  <ProductAction product={product} />
                </article>
              ))}
            </div>
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
