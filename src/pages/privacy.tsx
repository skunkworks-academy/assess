import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './site-pages.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout title="Assessment privacy guidance" description="Privacy and responsible-use guidance for Skunkworks Academy assessment responses and development plans.">
      <main>
        <header className={styles.pageHero} data-swa-surface-tone="dark" data-swa-contrast="preserve"><div className="container"><p className={styles.eyebrow}>PRIVACY GUIDANCE</p><h1>Use assessment information with care.</h1><p>This public portal provides guidance and templates. Confidential responses, scores, feedback, and identifying information belong only in approved systems with appropriate access.</p></div></header>
        <section className={styles.pageSection}><div className="container"><div className={styles.prose}><h2>Purpose of this guidance</h2><p>This page explains how to use the Assess portal responsibly. It supplements, but does not replace, the formal privacy notices and policies that apply to a specific assessment or organisation.</p><h2>Keep private information out of the public repository</h2><ul><li>Do not publish raw assessment answers, scores, reports, exports, or private feedback.</li><li>Do not add identity numbers, contact details, customer information, credentials, or other sensitive personal data.</li><li>Use participant pages for agreed development actions and non-sensitive evidence references only.</li><li>Keep confidential source material in the organisation-approved response or document system.</li></ul><h2>Collect only what the assessment needs</h2><p>State the purpose, audience, intended output, and access rules before collecting responses. Avoid collecting information merely because it may be interesting later.</p><h2>Separate development from hidden evaluation</h2><p>Tell participants how their information will be used. Do not present an assessment as developmental and then use it for undisclosed ranking, selection, or disciplinary decisions.</p><h2>Use access deliberately</h2><p>Limit access to people who need the information for the agreed purpose. When team results are discussed, use aggregated themes where possible and avoid exposing individual responses.</p><h2>Review and correct</h2><p>Give participants an opportunity to add context, correct inaccurate information, and confirm the development priorities before a roadmap is treated as final.</p><h2>Questions or requests</h2><p>For the formal privacy terms applying to Skunkworks Academy services, use the privacy and contact routes on the main Skunkworks Academy website.</p></div></div></section>
      </main>
    </Layout>
  );
}
