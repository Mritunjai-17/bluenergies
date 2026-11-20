import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';

export const metadata = {
  title: 'Annual General Meeting & Proxy Voting | BluEnergies Ltd. (TSXV: BLU)',
  description: 'Shareholder meeting dates, management proxy circulars, voting instructions, and transfer agent coordinates for BluEnergies Ltd.'
};

export default function AgmPage() {
  const investorTabs = [
    { label: 'Exploration Outlook', href: '/investors/outlook/' },
    { label: 'Stock Information', href: '/investors/stock-information/' },
    { label: 'Financial Filings', href: '/investors/financials/' },
    { label: 'Presentations', href: '/investors/presentations/' },
    { label: 'AGM & Voting', href: '/investors/agm/' }
  ];

  const meetingMaterials = [
    {
      title: 'Notice of Annual General Meeting & Management Information Circular',
      type: 'Meeting Circular',
      date: 'Fiscal 2026',
      size: '520 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: 'Form of Proxy / Voting Instruction Form (VIF)',
      type: 'Proxy Voting Form',
      date: 'Fiscal 2026',
      size: '210 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: 'Financial Statement Request Form (Registered & Beneficial)',
      type: 'Request Form',
      date: 'Fiscal 2026',
      size: '120 KB',
      format: 'PDF',
      href: '/resources/reports/research-report.pdf'
    }
  ];

  return (
    <>
      {/* =========================================================
         1. AGM HERO (DEEP NAVY TONE)
         ========================================================= */}
      <section className="inv-hero-section tone-navy" aria-label="AGM Hero">
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="corp-hero-contours-svg" preserveAspectRatio="none">
            <path d="M820 -20 C980 90 1200 60 1440 150" stroke="rgba(24, 126, 134, 0.16)" strokeWidth="0.8" fill="none" />
            <path d="M-40 560 C200 510 440 590 700 550" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <SubnavTabs items={investorTabs} activeHref="/investors/agm/" theme="dark" ariaLabel="Investor Sections" />

          <div className="inv-hero-grid motion-fade-up">
            <div className="inv-hero-narrative">
              <Eyebrow text="Shareholder Governance" theme="dark" />
              <h1 className="inv-hero-title">
                Annual General Meeting &amp; Voting
              </h1>
              <div className="inv-accent-bar" aria-hidden="true"></div>
              <p className="inv-hero-lede">
                Notice of meeting, management information circular, proxy forms, and step-by-step voting procedures for registered and beneficial shareholders.
              </p>
            </div>

            <div className="inv-hero-card">
              <div className="inv-card-header">
                <span className="inv-card-kicker">ANNUAL SHAREHOLDER MEETING</span>
                <span className="inv-card-doc-id">Vancouver, BC</span>
              </div>

              <div className="inv-card-metrics">
                <div className="inv-card-metric">
                  <span className="inv-metric-num">KPMG</span>
                  <span className="inv-metric-lbl">Auditor Re-appointment Vote</span>
                </div>
                <div className="inv-card-metric">
                  <span className="inv-metric-num">Board</span>
                  <span className="inv-metric-lbl">Independent Director Election</span>
                </div>
              </div>

              <div className="inv-card-footer">
                <span>Proxy voting conducted via Computershare Investor Services.</span>
                <a href="https://www.investorvote.com" target="_blank" rel="noopener noreferrer" className="inv-card-action">
                  InvestorVote portal &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. MEETING MATERIALS & VOTING GUIDELINES (WARM IVORY TONE)
         ========================================================= */}
      <section className="inv-content-section tone-ivory" aria-label="AGM Materials & Guidelines">
        <div className="container">
          <div className="inv-two-col-tables motion-fade-up">
            {/* Column 1: Meeting Materials Downloads */}
            <div className="inv-table-panel tone-card-light">
              <div className="inv-table-header">
                <span className="inv-table-index">01</span>
                <h2 className="inv-table-title">Shareholder Meeting Materials</h2>
              </div>

              <div className="inv-agm-docs-list">
                {meetingMaterials.map((doc) => (
                  <div key={doc.title} className="inv-agm-doc-item">
                    <div className="inv-agm-doc-info">
                      <span className="inv-agm-doc-type">{doc.type} &bull; {doc.size}</span>
                      <strong className="inv-agm-doc-title">{doc.title}</strong>
                    </div>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inv-agm-download-btn"
                      aria-label={`Download ${doc.title}`}
                    >
                      Download PDF &rarr;
                    </a>
                  </div>
                ))}
              </div>

              <div className="inv-table-footer-note">
                <span>Hard copies available upon written request to Computershare.</span>
              </div>
            </div>

            {/* Column 2: Voting Instructions (Registered vs Beneficial) */}
            <div className="inv-table-panel tone-card-light">
              <div className="inv-table-header">
                <span className="inv-table-index">02</span>
                <h2 className="inv-table-title">Shareholder Voting Guidelines</h2>
              </div>

              <div className="inv-voting-guide">
                <div className="inv-voting-row">
                  <h4 className="inv-voting-role">Registered Shareholders</h4>
                  <p className="inv-voting-desc">
                    Shareholders holding physical share certificates or DRS Direct Registration statements may vote online at <a href="https://www.investorvote.com" target="_blank" rel="noopener noreferrer" className="inv-service-link">www.investorvote.com</a> using the 15-digit control number on their Form of Proxy, or by mailing the proxy to Computershare Investor Services.
                  </p>
                </div>

                <div className="inv-voting-divider" aria-hidden="true"></div>

                <div className="inv-voting-row">
                  <h4 className="inv-voting-role">Beneficial (Non-Registered) Shareholders</h4>
                  <p className="inv-voting-desc">
                    Shareholders holding shares through an intermediary (broker, investment dealer, bank, or clearing agency) will receive a Voting Instruction Form (VIF). Please follow instructions on the VIF or contact your broker to vote via Broadridge / <a href="https://www.proxyvote.com" target="_blank" rel="noopener noreferrer" className="inv-service-link">ProxyVote.com</a>.
                  </p>
                </div>

                <div className="inv-voting-divider" aria-hidden="true"></div>

                <div className="inv-voting-row">
                  <h4 className="inv-voting-role">Questions &amp; Shareholder Inquiries</h4>
                  <p className="inv-voting-desc">
                    For assistance with voting, contact executive management directly at <a href="mailto:info@blu-energies.com" className="inv-service-link">info@blu-energies.com</a> or view our <Link href="/contact/contact-details/" className="inv-service-link">corporate contact directory &rarr;</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
