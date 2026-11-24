import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import Button from '../../../components/ui/Button';
import CorporateHeroVideo from '../../../components/corporate/CorporateHeroVideo';
import { news } from '../../../data/news.ts';
import { site } from '../../../data/site.ts';

export const metadata = {
  title: 'About BluEnergies | Corporate Mandate & Exploration Strategy',
  description: 'BluEnergies Ltd. (TSXV: BLU | OTCQX: BLUGF) is a Canadian frontier oil and gas explorer focused on unlocking high-impact Cretaceous fan plays in the Harper Basin, offshore Liberia, partnered with TotalEnergies.'
};

export default function AboutUsPage() {
  // Take the 3 most recent corporate announcements
  const recentNews = news.slice(0, 3);

  return (
    <>
      {/* =========================================================
         1. CORPORATE HERO & INTRODUCTION (HUMAN EDITORIAL ARCHITECTURE)
         One Strong Heading • One Compelling Visual • One Clear Action Group • One Restrained Info Strip
         ========================================================= */}
      <section className="corp-hero-section" aria-label="Corporate Overview">
        {/* Subtle, Quiet Bathymetric Contour Linework (Perimeter Depth Only) */}
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 1440 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="corp-hero-contours-svg"
            preserveAspectRatio="none"
          >
            {/* Top-Right Bathymetric Terraces (Kept outside central text area) */}
            <path d="M880 -20 C1040 80 1220 50 1440 140" stroke="rgba(81, 194, 201, 0.12)" strokeWidth="0.8" fill="none" />
            <path d="M940 -20 C1090 110 1260 80 1440 190" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="0.8" fill="none" />
            <path d="M1020 -20 C1160 145 1310 115 1440 250" stroke="rgba(81, 194, 201, 0.06)" strokeWidth="0.8" fill="none" />
            
            {/* Bottom-Left Shelf Contour */}
            <path d="M-40 560 C180 520 400 590 640 560" stroke="rgba(81, 194, 201, 0.08)" strokeWidth="0.8" fill="none" />
            <path d="M-40 620 C220 575 460 650 720 620" stroke="rgba(81, 194, 201, 0.05)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          {/* Top Corporate Nav Tabs */}
          <nav className="corp-subnav-tabs" aria-label="Corporate Pages">
            <Link href="/corporate/about-us/" className="corp-subnav-tab is-active" aria-current="page">
              About Us
            </Link>
            <Link href="/corporate/board-management/" className="corp-subnav-tab">
              Board &amp; Management
            </Link>
            <Link href="/corporate/corporate-governance/" className="corp-subnav-tab">
              Corporate Governance
            </Link>
          </nav>

          {/* Balanced 2-Column Hero Grid: Left Narrative (48%) / Right Cinematic Video (52%) */}
          <div className="corp-hero-grid">
            {/* LEFT COLUMN: Corporate Introduction */}
            <div className="corp-hero-content motion-fade-up">
              <Eyebrow text="About BluEnergies" theme="dark" />

              <h1 className="corp-hero-heading">
                Pioneering Frontier Deepwater Exploration<br className="corp-br-desktop" /> along the Atlantic Margin
              </h1>

              <div className="corp-hero-accent-bar" aria-hidden="true"></div>

              <p className="corp-hero-lede">
                BluEnergies Ltd. is a publicly traded Canadian natural resource explorer (TSXV: BLU | OTCQX: BLUGF) dedicated to capturing and de-risking high-impact Cretaceous basin floor fan systems along the Atlantic Margin.
              </p>

              <div className="corp-hero-positioning">
                <p>
                  Rather than assembling a broad, capital-dilutive portfolio of disparate minor concessions, BluEnergies concentrates 100% of technical firepower, balance sheet focus, and management discipline on the under-explored Harper Basin, offshore southern Liberia. Through Reconnaissance Licence RL-003, we partner with global energy supermajor TotalEnergies (65% operator) to systematically mature multi-billion-barrel prospective resource targets across 8,924 km² of undrilled deepwater fairway.
                </p>
              </div>

              <div className="corp-hero-cta">
                <Button href="/assets-and-operations/overview/" variant="primary">
                  Explore our assets &amp; operations &rarr;
                </Button>
                <Button
                  href="/resources/presentations/corporate-presentation.pdf"
                  variant="secondary"
                  theme="dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download corporate presentation
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN: Cinematic Technical Exploration Visual */}
            <div className="corp-hero-visual-col motion-fade-up stagger-1">
              <CorporateHeroVideo />
            </div>
          </div>

          {/* BORDERLESS / HAIRLINE CORPORATE INFORMATION STRIP DIRECTLY BENEATH HERO */}
          <div className="corp-info-strip motion-fade-up stagger-2" role="region" aria-label="Essential Corporate Metrics">
            <div className="corp-info-item">
              <span className="corp-info-kicker">PRIMARY LISTING</span>
              <div className="corp-info-val-wrap">
                <div className="corp-info-val">
                  TSX Venture: <span className="corp-info-symbol">BLU</span>
                </div>
                <div className="corp-info-sub">OTCQX: BLUGF &bull; TSXV Tier 2 Explorer</div>
              </div>
            </div>

            <div className="corp-info-divider" aria-hidden="true"></div>

            <div className="corp-info-item">
              <span className="corp-info-kicker">CONCESSION FOOTPRINT</span>
              <div className="corp-info-val-wrap">
                <div className="corp-info-val">
                  8,924 <span className="corp-info-unit">km²</span>
                </div>
                <div className="corp-info-sub">~2.2M Gross Acres &bull; Blocks LB-26, 30 &amp; 31</div>
              </div>
            </div>

            <div className="corp-info-divider" aria-hidden="true"></div>

            <div className="corp-info-item">
              <span className="corp-info-kicker">OPERATING PARTNER</span>
              <div className="corp-info-val-wrap">
                <div className="corp-info-val">TotalEnergies</div>
                <div className="corp-info-sub">65% Operator &bull; BluEnergies 35% Carried</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. STRATEGIC FOCUS & EXPLORATION MANDATE
         ========================================================= */}
      <section className="corp-strategy-section" aria-label="Corporate Strategy">
        <div className="container">
          <div className="corp-section-header motion-fade-up">
            <Eyebrow text="Strategic Focus" theme="light" />
            <h2 className="corp-section-heading">
              Disciplined Capital Allocation in Prolific Frontier Geology
            </h2>
            <p className="corp-section-lede">
              A high-conviction corporate model designed to deliver asymmetric shareholder value while de-risking tier-one deepwater targets alongside an established energy supermajor.
            </p>
          </div>

          {/* 3 Strategic Pillars Grid */}
          <div className="corp-pillars-grid">
            <div className="corp-pillar-card motion-fade-up stagger-1">
              <span className="corp-pillar-index">PILLAR 01</span>
              <h3 className="corp-pillar-title">Single-Basin Concentration</h3>
              <p className="corp-pillar-desc">
                We avoid the dilutive overhead and operational distraction of scattered regional acreage. Instead, we concentrate 100% of our technical and financial capital on 8,924 km² of undrilled Cretaceous fan systems across Blocks LB-26, LB-30, and LB-31 in the deepwater Harper Basin.
              </p>
            </div>

            <div className="corp-pillar-card motion-fade-up stagger-2">
              <span className="corp-pillar-index">PILLAR 02</span>
              <h3 className="corp-pillar-title">Supermajor Operational Pedigree</h3>
              <p className="corp-pillar-desc">
                Our formal joint exploration partnership with TotalEnergies (65% operator / 35% BluEnergies) pairs early basin capture agility with world-leading deepwater engineering capabilities, high-spec survey vessels, and the technical validation of an international supermajor.
              </p>
            </div>

            <div className="corp-pillar-card motion-fade-up stagger-3">
              <span className="corp-pillar-index">PILLAR 03</span>
              <h3 className="corp-pillar-title">100% Eligible Cost Recovery</h3>
              <p className="corp-pillar-desc">
                Governed under a Joint Study and Assessment Agreement (JSAA) and authorized by the Liberia Petroleum Regulatory Authority (LPRA), all approved exploration expenditures qualify for full cost recovery upon transition to Production Sharing Contracts (PSCs).
              </p>
            </div>
          </div>

          {/* Geological Context & Atlantic Margin Analogues Box */}
          <div className="corp-geology-box motion-fade-up stagger-1">
            <div className="corp-geology-grid">
              <div>
                <Eyebrow text="The Geological Thesis" theme="dark" />
                <h3 className="corp-geology-title">
                  Atlantic Margin Cretaceous Turbidite Fan Systems
                </h3>
                <p className="corp-geology-p">
                  Over the past two decades, deepwater Cretaceous basin floor fans have emerged as the most prolific hydrocarbon play along the Atlantic Margin. The Harper Basin shares identical transform margin tectonics, Cenomanian-Turonian marine source kitchens, and steep slope channels with landmark discoveries: from <strong>Jubilee &amp; TEN</strong> in Ghana (~2.1B BOE), to <strong>Baleine &amp; Calao</strong> offshore Côte d&apos;Ivoire (~2.5B BOE), and <strong>Venus</strong> in Namibia (~4.0B BOE).
                </p>
                <p className="corp-geology-p" style={{ marginBottom: 0 }}>
                  With high-resolution 3D seismic broadband reprocessing and multibeam seabed geochemical surveys actively underway, BluEnergies and TotalEnergies are systematically identifying drilling locations across seven mapped fan complexes.
                </p>
              </div>

              <div className="corp-geology-metrics">
                <div className="corp-geology-metric-item">
                  <span className="corp-geo-num">8,924</span>
                  <span className="corp-geo-label">Square Kilometres of Gross Concession Footprint</span>
                </div>
                <div className="corp-geology-metric-item">
                  <span className="corp-geo-num">6,167</span>
                  <span className="corp-geo-label">km² of Active 3D Seismic Reprocessing with TGS</span>
                </div>
                <div className="corp-geology-metric-item">
                  <span className="corp-geo-num">7</span>
                  <span className="corp-geo-label">Mapped High-Amplitude Turbidite Fan Targets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. INSTITUTIONAL CORPORATE SPECIFICATIONS & STATUTORY PROFILE
         Preserves all factual data from previous fact sheet in a clean, human-designed institutional ledger
         ========================================================= */}
      <section className="corp-spec-section" aria-label="Corporate Profile & Statutory Specifications">
        <div className="container">
          <div className="corp-spec-header-row motion-fade-up">
            <div>
              <Eyebrow text="Corporate Directory" theme="dark" />
              <h2 className="corp-section-heading" style={{ color: '#FFFFFF', marginBottom: '8px' }}>
                Corporate Profile &amp; Statutory Specifications
              </h2>
              <p className="corp-section-lede" style={{ color: 'rgba(220, 235, 245, 0.72)', maxWidth: '62ch' }}>
                Verified regulatory filings, market tickers, auditor mandates, and commercial operating frameworks for institutional investors and analysts.
              </p>
            </div>
            <div className="corp-spec-header-action">
              <Button href="/investors/stock-information/" variant="secondary" theme="dark">
                View stock information &rarr;
              </Button>
            </div>
          </div>

          <div className="corp-spec-ledger-grid motion-fade-up stagger-1">
            {/* Column 1: Market Listings & Corporate Seat */}
            <div className="corp-spec-panel">
              <div className="corp-spec-panel-header">
                <span className="corp-spec-panel-index">01</span>
                <h3 className="corp-spec-panel-title">Capital Structure &amp; Domicile</h3>
              </div>
              <dl className="corp-spec-table">
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Corporate Domicile</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">Vancouver, BC, Canada</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Founding Year</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">2020</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Primary Exchange</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def highlight">TSX Venture (TSXV: BLU)</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">US OTC Quotation</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">OTCQX Best Market (OTCQX: BLUGF)</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Independent Auditor</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">KPMG LLP</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Registrar &amp; Transfer Agent</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">Computershare Investor Services Inc.</dd>
                </div>
              </dl>
            </div>

            {/* Column 2: Flagship Concession & Operating Consortium */}
            <div className="corp-spec-panel">
              <div className="corp-spec-panel-header">
                <span className="corp-spec-panel-index">02</span>
                <h3 className="corp-spec-panel-title">Concession Framework &amp; Joint Venture</h3>
              </div>
              <dl className="corp-spec-table">
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Flagship Concession</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def highlight">Harper Basin (RL-003)</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Exploration Blocks</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">Blocks LB-26, LB-30 &amp; LB-31</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Gross Acreage</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">8,924 km² (~2.2M Gross Acres)</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Operating Partner</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">TotalEnergies (65% Operating Interest)</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Working Interest</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def">BluEnergies Ltd. (35% Carried Interest)</dd>
                </div>
                <div className="corp-spec-row">
                  <dt className="corp-spec-term">Fiscal Status</dt>
                  <span className="corp-spec-dotted-leader" aria-hidden="true"></span>
                  <dd className="corp-spec-def highlight">100% Eligible Cost-Recoverable (LPRA)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. COMPACT CORPORATE ANNOUNCEMENTS (EDITORIAL LIST)
         ========================================================= */}
      <section className="corp-news-section" aria-label="Corporate Announcements">
        <div className="container">
          <div className="corp-news-header-row motion-fade-up">
            <div>
              <Eyebrow text="News &amp; Disclosures" theme="light" />
              <h2 className="corp-section-heading" style={{ marginBottom: '6px' }}>
                Recent Corporate Announcements
              </h2>
              <p className="corp-section-lede">
                Regulatory releases, private placement closings, and operational updates from BluEnergies.
              </p>
            </div>

            <Button href="/news-and-media/news/" variant="secondary" theme="light">
              View all announcements &rarr;
            </Button>
          </div>

          <div className="corp-news-list motion-fade-up stagger-1">
            {recentNews.map((item) => (
              <article key={item.slug} className="corp-news-row">
                <div className="corp-news-meta">
                  <time className="corp-news-date">{item.date}</time>
                  <span className="corp-news-badge">TSXV Release</span>
                </div>

                <div>
                  <h3 className="corp-news-title">
                    <Link href={`/news-and-media/news/${item.slug}/`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="corp-news-desc">{item.summary}</p>
                </div>

                <Link
                  href={`/news-and-media/news/${item.slug}/`}
                  className="corp-news-link"
                  aria-label={`Read announcement: ${item.title}`}
                >
                  <span>Read release</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         5. CORPORATE DIRECTORY & SISTER PAGES NAVIGATION
         ========================================================= */}
      <section className="corp-directory-section" aria-label="Corporate Navigation">
        <div className="container">
          <div className="motion-fade-up" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 10px auto' }}>
            <Eyebrow text="Corporate Directory" theme="light" />
            <h2 className="corp-section-heading" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', marginTop: '8px' }}>
              Explore BluEnergies Leadership &amp; Governance
            </h2>
            <p className="corp-section-lede" style={{ fontSize: '0.98rem' }}>
              Direct connections to our executive management profiles and transparent corporate governance charters.
            </p>
          </div>

          <div className="corp-directory-grid motion-fade-up stagger-1">
            {/* Card 1: About Us (Current) */}
            <div className="corp-directory-card is-active" aria-current="page">
              <div>
                <div className="corp-dir-header">
                  <span className="corp-dir-tag current">ACTIVE PAGE</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="corp-dir-title">About BluEnergies</h3>
                <p className="corp-dir-desc">
                  Corporate profile, exploration philosophy, and commercial alignment with TotalEnergies in the Harper Basin.
                </p>
              </div>
              <span className="corp-dir-link" style={{ color: '#0b6868' }}>
                You are here &bull; Overview
              </span>
            </div>

            {/* Card 2: Board & Management */}
            <Link href="/corporate/board-management/" className="corp-directory-card">
              <div>
                <div className="corp-dir-header">
                  <span className="corp-dir-tag">LEADERSHIP</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="corp-dir-title">Board &amp; Management</h3>
                <p className="corp-dir-desc">
                  Meet our executive officers and independent directors with decades of combined global deepwater and capital markets experience.
                </p>
              </div>
              <span className="corp-dir-link">
                View leadership profiles &rarr;
              </span>
            </Link>

            {/* Card 3: Corporate Governance */}
            <Link href="/corporate/corporate-governance/" className="corp-directory-card">
              <div>
                <div className="corp-dir-header">
                  <span className="corp-dir-tag">GOVERNANCE</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3 className="corp-dir-title">Corporate Governance</h3>
                <p className="corp-dir-desc">
                  Inspect our board committee charters, code of business conduct, ethical policies, and SEDAR+ compliance standards.
                </p>
              </div>
              <span className="corp-dir-link">
                View governance charters &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
