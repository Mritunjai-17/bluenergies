import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';

export const metadata = {
  title: 'Financial Reports & Filings | BluEnergies Ltd. (TSXV: BLU)',
  description: 'Official quarterly condensed financial statements, Management Discussion & Analysis (MD&A), and continuous regulatory disclosures for BluEnergies Ltd.'
};

export default function FinancialsPage() {
  const investorTabs = [
    { label: 'Exploration Outlook', href: '/investors/outlook/' },
    { label: 'Stock Information', href: '/investors/stock-information/' },
    { label: 'Financial Filings', href: '/investors/financials/' },
    { label: 'Presentations', href: '/investors/presentations/' },
    { label: 'AGM & Voting', href: '/investors/agm/' }
  ];

  const filings2026 = [
    {
      title: 'Q2 2026 Interim Condensed Financial Statements',
      period: 'Six Months Ended June 30, 2026',
      type: 'Financial Statements (Unaudited)',
      date: 'August 2026',
      size: '480 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: 'Q2 2026 Management’s Discussion and Analysis (MD&A)',
      period: 'Six Months Ended June 30, 2026',
      type: 'MD&A Report',
      date: 'August 2026',
      size: '620 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: 'Q1 2026 Interim Financial Statements',
      period: 'Three Months Ended March 31, 2026',
      type: 'Financial Statements (Unaudited)',
      date: 'May 2026',
      size: '450 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: 'Q1 2026 Management’s Discussion and Analysis (MD&A)',
      period: 'Three Months Ended March 31, 2026',
      type: 'MD&A Report',
      date: 'May 2026',
      size: '590 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    }
  ];

  const filings2025 = [
    {
      title: '2025 Audited Annual Financial Statements',
      period: 'Fiscal Year Ended December 31, 2025',
      type: 'Audited Statements (KPMG LLP)',
      date: 'April 2026',
      size: '890 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: '2025 Annual Management’s Discussion and Analysis (MD&A)',
      period: 'Fiscal Year Ended December 31, 2025',
      type: 'Annual MD&A Report',
      date: 'April 2026',
      size: '1.1 MB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: '2025 Annual Information Form (AIF)',
      period: 'Fiscal Year Ended December 31, 2025',
      type: 'Annual Information Form',
      date: 'April 2026',
      size: '1.4 MB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    }
  ];

  return (
    <>
      {/* =========================================================
         1. FINANCIALS HERO (DEEP NAVY TONE)
         ========================================================= */}
      <section className="inv-hero-section tone-navy" aria-label="Financials Hero">
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="corp-hero-contours-svg" preserveAspectRatio="none">
            <path d="M820 -20 C980 90 1200 60 1440 150" stroke="rgba(24, 126, 134, 0.16)" strokeWidth="0.8" fill="none" />
            <path d="M-40 560 C200 510 440 590 700 550" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <SubnavTabs items={investorTabs} activeHref="/investors/financials/" theme="dark" ariaLabel="Investor Sections" />

          <div className="inv-hero-grid motion-fade-up">
            <div className="inv-hero-narrative">
              <Eyebrow text="Financial Disclosures" theme="dark" />
              <h1 className="inv-hero-title">
                Financial Reports &amp; Regulatory Filings
              </h1>
              <div className="inv-accent-bar" aria-hidden="true"></div>
              <p className="inv-hero-lede">
                Audited annual statements, quarterly interim reports, and Management’s Discussion and Analysis (MD&amp;A) filed in compliance with IFRS and Canadian securities regulations.
              </p>
            </div>

            <div className="inv-hero-card">
              <div className="inv-card-header">
                <span className="inv-card-kicker">CONTINUOUS DISCLOSURE PROFILE</span>
                <span className="inv-card-doc-id">SEDAR+ &bull; TMX Group</span>
              </div>

              <div className="inv-card-metrics">
                <div className="inv-card-metric">
                  <span className="inv-metric-num">IFRS</span>
                  <span className="inv-metric-lbl">International Accounting Standards (IASB)</span>
                </div>
                <div className="inv-card-metric">
                  <span className="inv-metric-num">KPMG</span>
                  <span className="inv-metric-lbl">Independent Statutory Auditor</span>
                </div>
              </div>

              <div className="inv-card-footer">
                <span>All documents accessible via the System for Electronic Document Analysis and Retrieval (SEDAR+).</span>
                <a href="https://www.sedarplus.ca" target="_blank" rel="noopener noreferrer" className="inv-card-action">
                  SEDAR+ profile &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. FINANCIAL DOCUMENT LIBRARY (WARM IVORY TONE)
         ========================================================= */}
      <section className="inv-content-section tone-ivory" aria-label="Financial Documents">
        <div className="container">
          {/* Fiscal 2026 Documents */}
          <div className="inv-fin-period-block motion-fade-up">
            <div className="inv-fin-period-header">
              <span className="inv-fin-year-pill">FISCAL YEAR 2026</span>
              <h2 className="inv-fin-period-title">Quarterly Interim Disclosures</h2>
            </div>

            <div className="inv-fin-table-wrap tone-card-light">
              <table className="inv-fin-table" aria-label="Fiscal 2026 Financial Reports">
                <thead>
                  <tr>
                    <th scope="col">Document Title</th>
                    <th scope="col">Reporting Period</th>
                    <th scope="col">Publication Date</th>
                    <th scope="col">Format / Size</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filings2026.map((filing) => (
                    <tr key={filing.title}>
                      <td className="inv-fin-title-cell">
                        <strong>{filing.title}</strong>
                        <span className="inv-fin-type-tag">{filing.type}</span>
                      </td>
                      <td className="inv-fin-period-cell">{filing.period}</td>
                      <td className="inv-fin-date-cell">{filing.date}</td>
                      <td className="inv-fin-meta-cell">
                        <span className="inv-fin-badge">{filing.format}</span>
                        <span>{filing.size}</span>
                      </td>
                      <td className="inv-fin-action-cell">
                        <a
                          href={filing.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inv-fin-download-btn"
                          aria-label={`Download ${filing.title}`}
                        >
                          <span>Download</span>
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fiscal 2025 Documents */}
          <div className="inv-fin-period-block motion-fade-up stagger-1" style={{ marginTop: 'clamp(48px, 6vh, 64px)' }}>
            <div className="inv-fin-period-header">
              <span className="inv-fin-year-pill">FISCAL YEAR 2025</span>
              <h2 className="inv-fin-period-title">Audited Annual Financial Filings</h2>
            </div>

            <div className="inv-fin-table-wrap tone-card-light">
              <table className="inv-fin-table" aria-label="Fiscal 2025 Financial Reports">
                <thead>
                  <tr>
                    <th scope="col">Document Title</th>
                    <th scope="col">Reporting Period</th>
                    <th scope="col">Publication Date</th>
                    <th scope="col">Format / Size</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filings2025.map((filing) => (
                    <tr key={filing.title}>
                      <td className="inv-fin-title-cell">
                        <strong>{filing.title}</strong>
                        <span className="inv-fin-type-tag">{filing.type}</span>
                      </td>
                      <td className="inv-fin-period-cell">{filing.period}</td>
                      <td className="inv-fin-date-cell">{filing.date}</td>
                      <td className="inv-fin-meta-cell">
                        <span className="inv-fin-badge">{filing.format}</span>
                        <span>{filing.size}</span>
                      </td>
                      <td className="inv-fin-action-cell">
                        <a
                          href={filing.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inv-fin-download-btn"
                          aria-label={`Download ${filing.title}`}
                        >
                          <span>Download</span>
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
