import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './site-pages.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout title="Start an assessment" description="Start an IDR, request a role readiness review, plan a team capability assessment, or access an existing participant roadmap.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve"><div className="container"><p className={styles.eyebrow}>START HERE</p><h1>Choose the next action that fits.</h1><p>Begin the Individual Development Roadmap, request support for another pathway, or return to an existing participant workspace.</p></div></header>
        <section className={styles.pageSection}><div className="container"><div className={styles.contactGrid}>
          <article className={styles.contactCard}><h2>Start an IDR</h2><p>Complete the approved assessment form, then use the portal guide to turn insight into a 30-day development plan.</p><a href="https://forms.cloud.microsoft/r/3pDGVLp645">Open the IDR assessment <span aria-hidden="true">↗</span></a></article>
          <article className={styles.contactCard}><h2>Request an assessment</h2><p>Contact Skunkworks Academy for role readiness, certification pathway, or team capability support.</p><a href="https://www.skunkworksacademy.com/contact.html">Contact the academy <span aria-hidden="true">↗</span></a></article>
          <article className={styles.contactCard}><h2>Continue an IDR</h2><p>Return to the participant portal to open a roadmap, use the prompts, and record agreed development actions.</p><Link to="/docs/individual-plans">Open participant portal <span aria-hidden="true">→</span></Link></article>
        </div></div></section>
      </main>
    </Layout>
  );
}
