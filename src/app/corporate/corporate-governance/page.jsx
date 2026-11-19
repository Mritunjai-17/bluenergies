import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import Button from '../../../components/ui/Button';

export const metadata = {
  title: 'Corporate Governance | BluEnergies Ltd. (TSXV: BLU | OTCQX: BLUGF)',
  description: 'Official corporate governance policies, Code of Conduct and Ethics, Anti-Bribery Policy, and ESTMA regulatory filings for BluEnergies Ltd.'
};

export default function CorporateGovernancePage() {
  return (
    <>
      {/* =========================================================
         1. EDITORIAL HERO SECTION
         ========================================================= */}
      <section className="corp-hero-section is-gov" aria-label="Corporate Governance Overview">
        {/* Subtle, Quiet Bathymetric Contour Linework */}
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 1440 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="corp-hero-contours-svg"
            preserveAspectRatio="none"
          >
            <path d="M880 -20 C1040 60 1220 30 1440 110" stroke="rgba(81, 194, 201, 0.12)" strokeWidth="0.8" fill="none" />
            <path d="M960 -20 C1100 90 1260 60 1440 160" stroke="rgba(81, 194, 201, 0.08)" strokeWidth="0.8" fill="none" />
            <path d="M-40 420 C180 380 400 450 640 420" stroke="rgba(81, 194, 201, 0.07)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <div className="corp-gov-hero-content motion-fade-up">
            {/* Top Corporate Nav Tabs */}
            <nav className="corp-subnav-tabs" aria-label="Corporate Pages">
              <Link href="/corporate/about-us/" className="corp-subnav-tab">
                About Us
              </Link>
              <Link href="/corporate/board-management/" className="corp-subnav-tab">
                Board &amp; Management
              </Link>
              <Link href="/corporate/corporate-governance/" className="corp-subnav-tab is-active" aria-current="page">
                Corporate Governance
              </Link>
            </nav>

            <div className="corp-gov-hero-header">
              <Eyebrow text="Fiduciary Oversight &amp; Regulatory Compliance" theme="dark" />
              <h1 className="corp-gov-hero-title">
                Corporate Governance
              </h1>
              <p className="corp-gov-hero-lede">
                BluEnergies Ltd. maintains rigorous governance standards, independent board oversight, transparent financial reporting, and strict ethical conduct across all Atlantic Margin exploration activities.
              </p>
            </div>

            <div className="corp-gov-hero-actions">
              <Button href="/resources/governance/code-of-conduct-and-ethics.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
                Download Code of Conduct (PDF) &rarr;
              </Button>
              <Button href="/corporate/board-management/" variant="secondary" theme="dark">
                Meet the Board of Directors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. GOVERNANCE PILLARS (SOOTHING & AIRY EDITORIAL)
         ========================================================= */}
      <section className="corp-gov-pillars-section" aria-label="Governance Principles">
        <div className="container">
          <div className="corp-gov-section-intro motion-fade-up">
            <span className="corp-gov-section-tag">Governance Principles</span>
            <h2 className="corp-gov-section-heading">Our Governance Commitment</h2>
            <p className="corp-gov-section-desc">
              The Board of Directors of BluEnergies Ltd. is committed to sound corporate practices designed to preserve shareholder confidence, safeguard corporate assets, and ensure strict compliance with Canadian securities standards.
            </p>
          </div>

          <div className="corp-gov-pillars-grid">
            <div className="corp-gov-pillar-card motion-fade-up stagger-1">
              <div className="corp-pillar-number">01</div>
              <h3 className="corp-pillar-title">Board Independence &amp; Oversight</h3>
              <p className="corp-pillar-text">
                The majority of directors on the BluEnergies Board are independent under Canadian securities regulations (NI 52-110). Non-executive directors provide objective stewardship, risk oversight, and rigorous strategic guidance.
              </p>
            </div>

            <div className="corp-gov-pillar-card motion-fade-up stagger-2">
              <div className="corp-pillar-number">02</div>
              <h3 className="corp-pillar-title">Financial Rigor &amp; Audit</h3>
              <p className="corp-pillar-text">
                The Audit Committee, chaired by independent director Cyrus Driver (CPA, CA), oversees financial reporting, internal accounting controls, risk mitigation, and regular engagement with independent external auditors KPMG LLP.
              </p>
            </div>

            <div className="corp-gov-pillar-card motion-fade-up stagger-3">
              <div className="corp-pillar-number">03</div>
              <h3 className="corp-pillar-title">Zero-Tolerance Anti-Corruption</h3>
              <p className="corp-pillar-text">
                Uncompromising compliance with Canada&apos;s <em>Corruption of Foreign Public Officials Act</em> (CFPOA) and UK Bribery Act. Bribery, improper inducements, and facilitation payments are strictly prohibited in all jurisdictions.
              </p>
            </div>

            <div className="corp-gov-pillar-card motion-fade-up stagger-4">
              <div className="corp-pillar-number">04</div>
              <h3 className="corp-pillar-title">Supermajor Operator Standards</h3>
              <p className="corp-pillar-text">
                Operational execution in the Harper Basin is governed under joint-venture partnership with supermajor TotalEnergies (65% operator), ensuring world-class deepwater HSE, environmental, and maritime safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. OFFICIAL POLICIES & CHARTERS (CLEAN DOCUMENT CARDS)
         ========================================================= */}
      <section className="corp-gov-docs-section" aria-label="Governance Documents">
        <div className="container">
          <div className="corp-gov-section-intro motion-fade-up">
            <span className="corp-gov-section-tag">Official Filings</span>
            <h2 className="corp-gov-section-heading">Policies &amp; Charters</h2>
            <p className="corp-gov-section-desc">
              Authoritative governance policies adopted by the Board of Directors of BluEnergies Ltd., binding across all executives, directors, employees, and joint-venture representatives.
            </p>
          </div>

          <div className="corp-gov-docs-grid">
            {/* Document 1: Code of Conduct and Ethics */}
            <div className="corp-gov-doc-card motion-fade-up stagger-1">
              <div className="corp-doc-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="corp-doc-details">
                <div className="corp-doc-header-tag">BOARD POLICY &bull; ETHICS</div>
                <h3 className="corp-doc-title">Code of Conduct and Ethics</h3>
                <p className="corp-doc-desc">
                  Establishes the ethical standards, fiduciary duties, conflict-of-interest disclosures, and fair business dealing rules mandatory for all BluEnergies personnel and contractors.
                </p>
                <div className="corp-doc-meta">
                  <span className="corp-meta-chip">PDF Document</span>
                  <span className="corp-meta-chip">99 KB</span>
                  <span className="corp-meta-chip">Official Board Charter</span>
                </div>
              </div>
              <div className="corp-doc-action-col">
                <a
                  href="/resources/governance/code-of-conduct-and-ethics.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corp-doc-download-btn"
                  aria-label="Download Code of Conduct and Ethics PDF"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Document 2: Anti-Bribery and Corruption Policy */}
            <div className="corp-gov-doc-card motion-fade-up stagger-2">
              <div className="corp-doc-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="corp-doc-details">
                <div className="corp-doc-header-tag">COMPLIANCE &bull; STATUTORY</div>
                <h3 className="corp-doc-title">Anti-Bribery and Corruption Policy</h3>
                <p className="corp-doc-desc">
                  Formalizes BluEnergies&apos; zero-tolerance policy regarding bribery, facilitation payments, corrupt inducements, and commercial extortion in domestic and foreign jurisdictions.
                </p>
                <div className="corp-doc-meta">
                  <span className="corp-meta-chip">PDF Document</span>
                  <span className="corp-meta-chip">80 KB</span>
                  <span className="corp-meta-chip">CFPOA &amp; Bribery Act</span>
                </div>
              </div>
              <div className="corp-doc-action-col">
                <a
                  href="/resources/governance/anti-bribery-corruption-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corp-doc-download-btn"
                  aria-label="Download Anti-Bribery and Corruption Policy PDF"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. ESTMA REPORTING SECTION (SPECIAL INSTITUTIONAL PANEL)
         ========================================================= */}
      <section className="corp-gov-estma-section" aria-label="ESTMA Reporting">
        <div className="container">
          <div className="corp-estma-panel motion-fade-up">
            <div className="corp-estma-content">
              <div className="corp-estma-badge">
                <span className="corp-estma-dot" aria-hidden="true"></span>
                <span>NATURAL RESOURCES CANADA &bull; ESTMA REPORTING</span>
              </div>
              <h2 className="corp-estma-title">
                Extractive Sector Transparency Measures Act (ESTMA)
              </h2>
              <p className="corp-estma-desc">
                In compliance with the <em>Extractive Sector Transparency Measures Act</em> (ESTMA) enacted by the Parliament of Canada, BluEnergies Ltd. publicly reports all qualifying payments made to municipal, regional, and national government entities in Canada and abroad.
              </p>
              <p className="corp-estma-sub">
                This legislation fulfills Canada’s international commitments under the Extractive Industries Transparency Initiative (EITI), fostering open accountability and deterring corruption in natural resource exploration.
              </p>
            </div>

            <div className="corp-estma-download-card">
              <div className="corp-estma-doc-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div className="corp-estma-doc-info">
                <h3 className="corp-estma-doc-name">2025 ESTMA Report</h3>
                <span className="corp-estma-doc-period">Reporting Period: Apr 8, 2025 – Sept 30, 2025</span>
                <span className="corp-estma-doc-size">PDF &bull; 319 KB &bull; Verified Filing</span>
              </div>
              <a
                href="/resources/estma/blu-estma-reporting-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="corp-estma-btn"
                aria-label="Download 2025 ESTMA Report PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Report</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. REGULATORY FILINGS & SEDAR+ DISCLOSURE CHANNEL
         ========================================================= */}
      <section className="corp-gov-sedar-section" aria-label="Regulatory Disclosures">
        <div className="container">
          <div className="corp-sedar-box motion-fade-up">
            <div className="corp-sedar-text">
              <span className="corp-sedar-label">CONTINUOUS DISCLOSURE CHANNEL</span>
              <h3 className="corp-sedar-title">Regulatory Disclosures on SEDAR+</h3>
              <p className="corp-sedar-desc">
                As a publicly traded Canadian natural resource issuer listed on the TSX Venture Exchange (TSXV: BLU) and quoted on the OTCQX Best Market (OTCQX: BLUGF), BluEnergies Ltd. files all mandatory regulatory documents, audited annual statements, interim financials, and material change reports on SEDAR+.
              </p>
            </div>
            <div className="corp-sedar-actions">
              <a
                href="https://www.sedarplus.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="corp-sedar-link-btn"
              >
                <span>Access SEDAR+ Profile</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <Link href="/investors/financials/" className="corp-sedar-sec-btn">
                <span>View Quarterly Financials &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         6. CORPORATE SECTION NAVIGATION (CROSS-CONNECT)
         ========================================================= */}
      <section className="corp-gov-nav-section" aria-label="Corporate Directory Links">
        <div className="container">
          <div className="corp-gov-nav-grid motion-fade-up">
            <Link href="/corporate/about-us/" className="corp-nav-portal-card">
              <span className="corp-portal-tag">CORPORATE MANDATE</span>
              <h3 className="corp-portal-title">About BluEnergies</h3>
              <p className="corp-portal-desc">
                Learn about our focused corporate mandate, supermajor partnership in the Harper Basin, and capital allocation discipline.
              </p>
              <span className="corp-portal-arrow">Explore company overview &rarr;</span>
            </Link>

            <Link href="/corporate/board-management/" className="corp-nav-portal-card">
              <span className="corp-portal-tag">EXECUTIVE LEADERSHIP</span>
              <h3 className="corp-portal-title">Board &amp; Management</h3>
              <p className="corp-portal-desc">
                Discover the deepwater exploration track record and governance credentials of our directors and senior executive team.
              </p>
              <span className="corp-portal-arrow">Meet executive leadership &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
