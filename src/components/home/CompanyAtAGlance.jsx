import Eyebrow from '../ui/Eyebrow';

export default function CompanyAtAGlance() {
  return (
    <section id="at-a-glance" className="section section-dark-navy theme-dark metrics-section">
      {/* 1. Delicate Geological / Topographic Contours Background */}
      <div className="metrics-contours-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="metrics-contours-svg"
          preserveAspectRatio="none"
        >
          <path d="M-50 120 C320 60 700 180 1100 100 C1300 60 1420 110 1500 130" stroke="rgba(22, 166, 166, 0.05)" strokeWidth="1" fill="none" />
          <path d="M-50 260 C360 200 740 320 1140 240 C1340 200 1440 250 1500 270" stroke="rgba(81, 194, 201, 0.035)" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          <path d="M-50 420 C400 360 780 480 1180 400 C1380 360 1460 410 1500 430" stroke="rgba(22, 166, 166, 0.045)" strokeWidth="1" fill="none" />
          <path d="M-50 600 C440 540 820 660 1220 580 C1420 540 1480 590 1500 610" stroke="rgba(81, 194, 201, 0.03)" strokeWidth="1" fill="none" />
          <path d="M-50 740 C480 680 860 800 1260 720 C1460 680 1500 730 1500 750" stroke="rgba(22, 166, 166, 0.04)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="metrics-header">
          <Eyebrow text="EXPLORATION AT A GLANCE" theme="dark" />
          <h2 className="metrics-title">
            Key Operational &amp; Exploration Metrics
          </h2>
          <p className="metrics-lede">
            Verified quantitative metrics defining BluEnergies&apos; exploration footprint, commercial partnership structure, and technical evaluation scope in the Harper Basin.
          </p>
        </div>

        {/* Primary Metrics: Connected Partnership Card (35% & 65%) + Standalone 8,924 km² */}
        <div className="metrics-primary-grid">
          {/* Part A: Connected Commercial Partnership Card */}
          <div className="metrics-partnership-card">
            {/* Left: BluEnergies 35% */}
            <div className="metrics-partner-col">
              <span className="metrics-stat-num">35%</span>
              <h3 className="metrics-stat-title">BluEnergies&apos; Participating Interest</h3>
              <p className="metrics-stat-desc">
                Carried commercial participating working interest in RL-003.
              </p>
            </div>

            {/* Center: Handshake Partnership Connector Badge */}
            <div className="metrics-connector-badge" aria-label="Commercial exploration partnership" role="img">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 17l-4 4a2.828 2.828 0 1 1-4-4l4-4m12 0l4 4a2.828 2.828 0 1 1-4 4l-4-4m-5-5l5 5m-2-7l2-2a2.828 2.828 0 0 1 4 4l-2 2" />
              </svg>
            </div>

            {/* Right: TotalEnergies 65% */}
            <div className="metrics-partner-col">
              <span className="metrics-stat-num">65%</span>
              <h3 className="metrics-stat-title">TotalEnergies&apos; Participating Interest</h3>
              <p className="metrics-stat-desc">
                Energy supermajor TotalEnergies serves as operating partner leading offshore operations.
              </p>
            </div>
          </div>

          {/* Part B: Standalone Total Licence Area Metric */}
          <div className="metrics-standalone-card">
            <span className="metrics-stat-num-large">
              8,924 <span className="metrics-unit">km<sup>2</sup></span>
            </span>
            <div className="metrics-stat-bar" aria-hidden="true"></div>
            <h3 className="metrics-stat-title">Total Licence Area</h3>
            <p className="metrics-stat-desc">
              Encompassing approx. 2.2 million gross acres across deepwater Harper Basin, offshore Liberia.
            </p>
          </div>
        </div>

        {/* Thin Understated Tier Separator */}
        <div className="metrics-tier-divider" aria-hidden="true"></div>

        {/* Secondary Technical Metrics: 3 Supporting Columns */}
        <div className="metrics-secondary-grid">
          {/* Secondary Metric 1: Offshore Licence Blocks */}
          <div className="metrics-secondary-item">
            <div className="metrics-secondary-header">
              <div className="metrics-secondary-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="metrics-secondary-hairline" aria-hidden="true"></div>
              <span className="metrics-secondary-val">3</span>
            </div>
            <h4 className="metrics-secondary-title">Offshore Licence Blocks</h4>
            <p className="metrics-secondary-desc">
              Contiguous deepwater exploration blocks: LB-26, LB-30, and LB-31 under LPRA jurisdiction.
            </p>
          </div>

          {/* Secondary Metric 2: Existing 3D Seismic Coverage */}
          <div className="metrics-secondary-item">
            <div className="metrics-secondary-header">
              <div className="metrics-secondary-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="metrics-secondary-hairline" aria-hidden="true"></div>
              <span className="metrics-secondary-val">
                6,167 <span className="metrics-unit-sm">km<sup>2</sup></span>
              </span>
            </div>
            <h4 className="metrics-secondary-title">Existing 3D Seismic Coverage</h4>
            <p className="metrics-secondary-desc">
              High-resolution 3D seismic dataset currently undergoing advanced depth reprocessing with TGS.
            </p>
          </div>

          {/* Secondary Metric 3: Identified Deepwater Fan Systems */}
          <div className="metrics-secondary-item">
            <div className="metrics-secondary-header">
              <div className="metrics-secondary-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="metrics-secondary-hairline" aria-hidden="true"></div>
              <span className="metrics-secondary-val">6</span>
            </div>
            <h4 className="metrics-secondary-title">Identified Deepwater Fan Systems</h4>
            <p className="metrics-secondary-desc">
              Identified Cretaceous basin floor fan complexes with independently certified prospective resource potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
