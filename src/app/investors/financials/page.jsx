import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import DownloadLink from '../../../components/ui/DownloadLink';
import Button from '../../../components/ui/Button';

export const metadata = {
  title: 'Financial Reports & Filings',
  description: 'Quarterly financial statements, MD&A, and regulatory disclosures for BluEnergies Ltd.'
};

export default function FinancialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Financial Reports & Filings"
        lede="Official quarterly financial statements, management discussion and analysis (MD&A), and regulatory filings."
      />

      <Section background="paper">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>Regulatory disclosure & financial reports</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
              BluEnergies Ltd. is a reporting issuer in Canada subject to continuous disclosure requirements under Canadian National Instruments. All financial statements are prepared in accordance with International Financial Reporting Standards (IFRS) as issued by the International Accounting Standards Board (IASB).
            </p>

            {/* Fiscal Year 2026 Filings */}
            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', marginBottom: '1.25rem', borderBottom: '2px solid var(--deep-teal)', paddingBottom: '8px' }}>
              Fiscal Year 2026
            </h3>

            <div style={{ marginBottom: '32px' }}>
              <DownloadLink
                title="Q2 2026 Interim Condensed Financial Statements (Six Months Ended June 30, 2026)"
                href="#"
                format="PDF"
                size="480 KB"
                date="August 2026"
              />
              <DownloadLink
                title="Q2 2026 Management’s Discussion and Analysis (MD&A)"
                href="#"
                format="PDF"
                size="620 KB"
                date="August 2026"
              />
              <DownloadLink
                title="Q1 2026 Interim Financial Statements (Three Months Ended March 31, 2026)"
                href="#"
                format="PDF"
                size="450 KB"
                date="May 2026"
              />
              <DownloadLink
                title="Q1 2026 Management’s Discussion and Analysis (MD&A)"
                href="#"
                format="PDF"
                size="590 KB"
                date="May 2026"
              />
            </div>

            {/* Fiscal Year 2025 Filings */}
            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', marginBottom: '1.25rem', borderBottom: '2px solid var(--deep-teal)', paddingBottom: '8px' }}>
              Fiscal Year 2025 (Annual)
            </h3>

            <div style={{ marginBottom: '32px' }}>
              <DownloadLink
                title="2025 Audited Annual Financial Statements"
                href="#"
                format="PDF"
                size="890 KB"
                date="April 2026"
              />
              <DownloadLink
                title="2025 Annual Management’s Discussion and Analysis (MD&A)"
                href="#"
                format="PDF"
                size="1.1 MB"
                date="April 2026"
              />
              <DownloadLink
                title="2025 Annual Information Form (AIF)"
                href="#"
                format="PDF"
                size="1.4 MB"
                date="April 2026"
              />
            </div>
          </div>

          {/* SEDAR+ Notice */}
          <div className="editorial-aside-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>Continuous Disclosure</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '16px' }}>
              Complete continuous disclosure filings, material change reports, and technical disclosures are officially archived on SEDAR+ (System for Electronic Data Analysis and Retrieval +).
            </p>

            <div style={{ marginBottom: '24px' }}>
              <Button href="https://www.sedarplus.ca" target="_blank" variant="secondary" theme="light">
                Search SEDAR+ Filings &rarr;
              </Button>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '18px', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.6' }}>
              <strong>Independent Auditors</strong><br />
              [CONTENT NEEDED: Auditor Name]<br />
              Vancouver, BC, Canada
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
