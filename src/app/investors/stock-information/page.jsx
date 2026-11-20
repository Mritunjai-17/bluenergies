import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';

export const metadata = {
  title: 'Stock Information | TSXV: BLU • OTCQX: BLUGF | BluEnergies Ltd.',
  description: 'TSX Venture Exchange (TSXV: BLU) and OTCQX: BLUGF market listings, share structure overview, financing milestones, and transfer agent information.'
};

export default function StockInformationPage() {
  const investorTabs = [
    { label: 'Exploration Outlook', href: '/investors/outlook/' },
    { label: 'Stock Information', href: '/investors/stock-information/' },
    { label: 'Financial Filings', href: '/investors/financials/' },
    { label: 'Presentations', href: '/investors/presentations/' },
    { label: 'AGM & Voting', href: '/investors/agm/' }
  ];

  return (
    <>
      {/* =========================================================
         1. STOCK INFORMATION HERO (DEEP NAVY TONE)
         ========================================================= */}
      <section className="inv-hero-section tone-navy" aria-label="Stock Information Hero">
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="corp-hero-contours-svg" preserveAspectRatio="none">
            <path d="M820 -20 C980 90 1200 60 1440 150" stroke="rgba(24, 126, 134, 0.16)" strokeWidth="0.8" fill="none" />
            <path d="M-40 560 C200 510 440 590 700 550" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <SubnavTabs items={investorTabs} activeHref="/investors/stock-information/" theme="dark" ariaLabel="Investor Sections" />

          <div className="inv-hero-grid motion-fade-up">
            <div className="inv-hero-narrative">
              <Eyebrow text="Market Listings" theme="dark" />
              <h1 className="inv-hero-title">
                Stock Information &amp; Capital Structure
              </h1>
              <div className="inv-accent-bar" aria-hidden="true"></div>
              <p className="inv-hero-lede">
                Trading symbols, exchange affiliations, capital structure summary, and transfer agent coordinates for BluEnergies Ltd.
              </p>
            </div>

            {/* Direct Market Access Card */}
            <div className="inv-hero-card">
              <div className="inv-card-header">
                <span className="inv-card-kicker">VERIFIED EXCHANGE QUOTATIONS</span>
                <span className="inv-card-doc-id">TSXV Tier 2 Natural Resource Issuer</span>
              </div>

              <div className="inv-stock-live-links">
                <a
                  href="https://money.tmx.com/en/quote/BLU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inv-stock-btn-row is-primary"
                >
                  <div className="inv-stock-btn-meta">
                    <span className="inv-stock-btn-kicker">PRIMARY EXCHANGE &bull; CAD</span>
                    <strong className="inv-stock-btn-ticker">TSX Venture: BLU</strong>
                  </div>
                  <span className="inv-stock-btn-action">View live TMX quote &rarr;</span>
                </a>

                <a
                  href="https://www.otcmarkets.com/stock/BLUGF/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inv-stock-btn-row"
                >
                  <div className="inv-stock-btn-meta">
                    <span className="inv-stock-btn-kicker">US OTC MARKET &bull; USD</span>
                    <strong className="inv-stock-btn-ticker">OTCQX: BLUGF</strong>
                  </div>
                  <span className="inv-stock-btn-action">View live OTC quote &rarr;</span>
                </a>
              </div>

              <div className="inv-card-footer">
                <span>Official realtime quotes provided directly by exchange portals.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. LISTINGS & CAPITAL STRUCTURE TABLES (WARM IVORY TONE)
         ========================================================= */}
      <section className="inv-content-section tone-ivory" aria-label="Capital Structure">
        <div className="container">
          <div className="inv-two-col-tables motion-fade-up">
            {/* Column 1: Market Listings Table */}
            <div className="inv-table-panel tone-card-light">
              <div className="inv-table-header">
                <span className="inv-table-index">01</span>
                <h3 className="inv-table-title">Market Listings &amp; Trading Symbols</h3>
              </div>

              <table className="inv-data-table" aria-label="Market Listings">
                <thead>
                  <tr>
                    <th scope="col">Exchange</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>TSX Venture Exchange</strong></td>
                    <td className="highlight-symbol">BLU</td>
                    <td>CAD ($)</td>
                    <td>Listed &amp; Active</td>
                  </tr>
                  <tr>
                    <td><strong>OTCQX Best Market</strong></td>
                    <td className="highlight-symbol">BLUGF</td>
                    <td>USD ($)</td>
                    <td>Cross-Traded</td>
                  </tr>
                  <tr>
                    <td><strong>Frankfurt Stock Exchange</strong></td>
                    <td className="highlight-symbol">0BE</td>
                    <td>EUR (€)</td>
                    <td>Secondary Quotation</td>
                  </tr>
                </tbody>
              </table>

              <div className="inv-table-footer-note">
                <span>Primary Regulatory Authority: British Columbia Securities Commission (BCSC)</span>
              </div>
            </div>

            {/* Column 2: Share Capital Breakdown */}
            <div className="inv-table-panel tone-card-light">
              <div className="inv-table-header">
                <span className="inv-table-index">02</span>
                <h3 className="inv-table-title">Share Capital Structure</h3>
              </div>

              <dl className="inv-ledger-list">
                <div className="inv-ledger-row">
                  <dt className="inv-ledger-term">Common Shares Outstanding</dt>
                  <span className="inv-ledger-dots" aria-hidden="true"></span>
                  <dd className="inv-ledger-def highlight">48,742,109</dd>
                </div>
                <div className="inv-ledger-row">
                  <dt className="inv-ledger-term">Warrants (Exercisable)</dt>
                  <span className="inv-ledger-dots" aria-hidden="true"></span>
                  <dd className="inv-ledger-def">9,202,027 (C$3.25 strike)</dd>
                </div>
                <div className="inv-ledger-row">
                  <dt className="inv-ledger-term">Stock Options (Incentive Plan)</dt>
                  <span className="inv-ledger-dots" aria-hidden="true"></span>
                  <dd className="inv-ledger-def">3,450,000</dd>
                </div>
                <div className="inv-ledger-row">
                  <dt className="inv-ledger-term">Fully Diluted Shares</dt>
                  <span className="inv-ledger-dots" aria-hidden="true"></span>
                  <dd className="inv-ledger-def highlight">61,394,136</dd>
                </div>
                <div className="inv-ledger-row">
                  <dt className="inv-ledger-term">Management &amp; Insider Alignment</dt>
                  <span className="inv-ledger-dots" aria-hidden="true"></span>
                  <dd className="inv-ledger-def">~24.8% (Closely Held)</dd>
                </div>
                <div className="inv-ledger-row">
                  <dt className="inv-ledger-term">Treasury Cash (Pro-Forma)</dt>
                  <span className="inv-ledger-dots" aria-hidden="true"></span>
                  <dd className="inv-ledger-def highlight">C$20.7M Gross Raised</dd>
                </div>
              </dl>

              <div className="inv-table-footer-note">
                <span>Capital structure as of Q3 2026. Filed under SEDAR+ profile.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. REGISTRAR & STATUTORY MANDATES (MIST BLUE TONE)
         ========================================================= */}
      <section className="inv-service-section tone-mist" aria-label="Corporate Registrar & Auditor">
        <div className="container">
          <div className="inv-service-grid motion-fade-up">
            <div className="inv-service-card tone-card-light">
              <span className="inv-service-kicker">REGISTRAR &amp; TRANSFER AGENT</span>
              <h3 className="inv-service-name">Computershare Investor Services</h3>
              <p className="inv-service-desc">
                Shareholders inquiring regarding registered share certificates, DRS statements, change of address, or estate transfers should contact Computershare directly.
              </p>
              <div className="inv-service-details">
                <strong>Address:</strong> 510 Burrard Street, 3rd Floor, Vancouver, BC, V6C 3B9<br />
                <strong>Toll-Free (North America):</strong> 1-800-564-6253<br />
                <strong>Direct Portal:</strong> <a href="https://www.computershare.com" target="_blank" rel="noopener noreferrer" className="inv-service-link">www.computershare.com &rarr;</a>
              </div>
            </div>

            <div className="inv-service-card tone-card-light">
              <span className="inv-service-kicker">INDEPENDENT AUDITOR</span>
              <h3 className="inv-service-name">KPMG LLP</h3>
              <p className="inv-service-desc">
                BluEnergies’ annual financial statements are audited under International Financial Reporting Standards (IFRS) as issued by the International Accounting Standards Board (IASB).
              </p>
              <div className="inv-service-details">
                <strong>Office:</strong> PO Box 10426, 777 Dunsmuir Street, Vancouver, BC, V7Y 1K3<br />
                <strong>Auditor Term:</strong> Appointed at Annual General Meeting of Shareholders<br />
                <strong>Regulatory Compliance:</strong> Canadian Public Accountability Board (CPAB)
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
