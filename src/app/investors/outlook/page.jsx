import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import Button from '../../../components/ui/Button';
import SubnavTabs from '../../../components/ui/SubnavTabs';

export const metadata = {
  title: 'Investor Outlook & Strategy | BluEnergies Ltd. (TSXV: BLU)',
  description: 'Corporate investment overview, disciplined exploration capital allocation, C$20.7M treasury, and operational roadmap for BluEnergies Ltd.'
};

export default function OutlookPage() {
  const investorTabs = [
    { label: 'Exploration Outlook', href: '/investors/outlook/' },
    { label: 'Stock Information', href: '/investors/stock-information/' },
    { label: 'Financial Filings', href: '/investors/financials/' },
    { label: 'Presentations', href: '/investors/presentations/' },
    { label: 'AGM & Voting', href: '/investors/agm/' }
  ];

  const milestones = [
    {
      period: 'H1 2026',
      title: 'Partnership Formation & Concession Inception',
      status: 'Completed',
      desc: 'Executed Joint Study and Assessment Agreement (JSAA) with operator TotalEnergies across deepwater Blocks LB-26, LB-30, and LB-31 under Reconnaissance Licence RL-003. Launched 6,167 km² 3D seismic broadband reprocessing with TGS ASA.'
    },
    {
      period: 'July 2026',
      title: 'C$20.7M Institutional Private Placement',
      status: 'Completed',
      desc: 'Closed an upsized non-brokered financing of 9,202,027 units at C$2.25 per unit, raising gross proceeds of approximately C$20.7 million to fully fund BluEnergies’ participating share of technical operations through the licence tenure.'
    },
    {
      period: 'H2 2026',
      title: 'Seabed Geochemical & MBES Bathymetric Campaign',
      status: 'Active Operations',
      desc: 'Deployed specialized survey vessel R/V GYRE across a 4,045 km² fairway for high-resolution multibeam echo-sounding, geochemical piston coring, and heat flow thermal calibration over active seep anomalies.'
    },
    {
      period: '2027',
      title: 'Prospect De-risking & Exploration Well Targeting',
      status: 'Upcoming Milestone',
      desc: 'Integration of broadband 3D seismic gathers, calibrated AVO anomalies, and geochemical seepage data to establish a ranked inventory of drillable Cretaceous fan targets and transition to Production Sharing Contracts (PSCs).'
    }
  ];

  return (
    <>
      {/* =========================================================
         1. INVESTORS HERO & SUBNAV (DEEP NAVY TONE)
         ========================================================= */}
      <section className="inv-hero-section tone-navy" aria-label="Investor Relations Hero">
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="corp-hero-contours-svg" preserveAspectRatio="none">
            <path d="M820 -20 C980 90 1200 60 1440 150" stroke="rgba(24, 126, 134, 0.16)" strokeWidth="0.8" fill="none" />
            <path d="M-40 560 C200 510 440 590 700 550" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <SubnavTabs items={investorTabs} activeHref="/investors/outlook/" theme="dark" ariaLabel="Investor Sections" />

          <div className="inv-hero-grid motion-fade-up">
            <div className="inv-hero-narrative">
              <Eyebrow text="Investors" theme="dark" />
              <h1 className="inv-hero-title">
                Investor Information &amp; Corporate Resources
              </h1>
              <div className="inv-accent-bar" aria-hidden="true"></div>
              <p className="inv-hero-lede">
                Positioned for asymmetric equity leverage in frontier Atlantic Margin exploration with an active technical programme alongside TotalEnergies and a fully funded treasury.
              </p>
            </div>

            {/* Right Financial Composition */}
            <div className="inv-hero-card">
              <div className="inv-card-header">
                <span className="inv-card-kicker">MARKET LISTING &bull; DUAL QUOTATION</span>
                <div className="inv-ticker-pills">
                  <span className="inv-ticker-pill is-primary">TSXV: BLU</span>
                  <span className="inv-ticker-pill">OTCQX: BLUGF</span>
                </div>
              </div>

              <div className="inv-card-metrics">
                <div className="inv-card-metric">
                  <span className="inv-metric-num">C$20.7M</span>
                  <span className="inv-metric-lbl">Treasury Financing Closed July 2026</span>
                </div>
                <div className="inv-card-metric">
                  <span className="inv-metric-num">35%</span>
                  <span className="inv-metric-lbl">Carried Working Interest (8,924 km²)</span>
                </div>
              </div>

              <div className="inv-card-footer">
                <span>Headquartered in Vancouver, BC &bull; Reporting Issuer under Canadian Securities Law</span>
                <Link href="/investors/stock-information/" className="inv-card-action">
                  Stock information &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. INVESTMENT PROPOSITION & CAPITAL DISCIPLINE (WARM IVORY TONE)
         ========================================================= */}
      <section className="inv-content-section tone-ivory" aria-label="Investment Proposition">
        <div className="container">
          <div className="inv-editorial-grid motion-fade-up">
            {/* Left Narrative */}
            <div>
              <Eyebrow text="Core Investment Thesis" theme="light" />
              <h2 className="inv-section-title">
                Focused Capital Discipline in Frontier Deepwater
              </h2>
              <div className="assets-section-accent" aria-hidden="true"></div>

              <p className="inv-body-p">
                BluEnergies’ investment model concentrates 100% of technical firepower, balance sheet focus, and managerial discipline on a single, tier-one frontier basin rather than dispersing shareholder capital across a fragmented portfolio of marginal leases.
              </p>

              <p className="inv-body-p">
                Through our partnership with global supermajor <strong>TotalEnergies (65% operator)</strong>, BluEnergies benefits from world-leading deepwater engineering capabilities and high-specification survey assets while maintaining an impactful <strong>35% carried participating interest</strong> across 8,924 km² of undrilled Cretaceous fan systems.
              </p>

              <p className="inv-body-p">
                In July 2026, the Company completed an upsized, non-brokered private placement of 9,202,027 units at C$2.25 per unit, raising <strong>gross proceeds of C$20,704,560</strong>. This capital injection ensures BluEnergies is fully funded to execute its share of technical commitments across Blocks LB-26, LB-30, and LB-31 through the licence expiry ending June 30, 2027.
              </p>
            </div>

            {/* Right Supporting Highlights */}
            <div className="inv-highlights-box tone-card-light">
              <h3 className="inv-highlights-title">Investment Highlights</h3>
              <ul className="inv-highlights-list">
                <li>
                  <strong>Supermajor Partnership:</strong> Partnered with TotalEnergies (65% operator), an international leader with unmatched deepwater frontier execution capability.
                </li>
                <li>
                  <strong>High-Equity Leverage:</strong> 35% working interest provides material torque to commercial discovery in an 8,924 km² fairway.
                </li>
                <li>
                  <strong>100% Cost Recovery:</strong> Authorized under the Liberia Petroleum Regulatory Authority (LPRA) framework, exploration expenditures qualify for full cost recovery upon PSC conversion.
                </li>
                <li>
                  <strong>Robust Balance Sheet:</strong> C$20.7M financing closed in July 2026 to fund comprehensive 3D seismic and seabed coring campaigns.
                </li>
                <li>
                  <strong>Prolific Analogue Geology:</strong> Geologically linked to major transform margin fan discoveries in Ghana (Jubilee, TEN), Côte d&apos;Ivoire (Baleine, Calao), and Namibia (Venus).
                </li>
              </ul>

              <div className="inv-highlights-actions">
                <Button href="/resources/presentations/corporate-presentation.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
                  Download corporate presentation
                </Button>
                <Button href="/investors/financials/" variant="secondary" theme="light">
                  View financial reports &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. EXPLORATION ROADMAP & KEY MILESTONES (MIST BLUE TONE)
         ========================================================= */}
      <section className="inv-milestones-section tone-mist" aria-label="Exploration Milestones">
        <div className="container">
          <div className="assets-section-header motion-fade-up">
            <Eyebrow text="Execution Roadmap" theme="light" />
            <h2 className="assets-section-title">
              Exploration Roadmap &amp; Catalysts
            </h2>
            <p className="assets-section-desc">
              Key operational and regulatory milestones driving de-risking and shareholder value across the Harper Basin licence.
            </p>
          </div>

          <div className="inv-milestones-grid motion-fade-up stagger-1">
            {milestones.map((m) => (
              <div key={m.period} className="inv-milestone-card tone-card-light">
                <div className="inv-milestone-header">
                  <span className="inv-milestone-period">{m.period}</span>
                  <span className={`inv-milestone-status ${m.status === 'Completed' ? 'is-done' : m.status === 'Active Operations' ? 'is-active' : 'is-upcoming'}`}>
                    {m.status}
                  </span>
                </div>
                <h3 className="inv-milestone-title">{m.title}</h3>
                <p className="inv-milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         4. COMPACT INVESTOR RELATIONS CONTACT (WARM IVORY TONE)
         ========================================================= */}
      <section className="inv-contact-strip tone-ivory" aria-label="Investor Contact">
        <div className="container">
          <div className="inv-contact-inner tone-card-light motion-fade-up">
            <div>
              <span className="inv-contact-kicker">INVESTOR RELATIONS INQUIRIES</span>
              <h3 className="inv-contact-title">Direct Communication with Management</h3>
              <p className="inv-contact-desc">
                Institutional shareholders, research analysts, and prospective investors may contact executive management directly regarding corporate strategy and financial filings.
              </p>
            </div>
            <div className="inv-contact-actions">
              <a href="mailto:info@blu-energies.com" className="btn btn-primary">
                Email Investor Relations &rarr;
              </a>
              <Link href="/contact/request-for-information/" className="btn btn-secondary-light">
                Submit inquiry form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
