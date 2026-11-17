import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function CompanyOverview() {
  return (
    <section id="company-overview" className="section section-warm-white theme-light overview-section">
      {/* 1. Single Primary Organic Wave Separator Rising into Hero */}
      <div className="overview-wave-separator" aria-hidden="true">
        <svg
          viewBox="0 0 1440 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="overview-wave-svg"
        >
          {/* Main solid warm-white wave */}
          <path
            d="M0,42 C180,22 320,12 480,12 C660,12 800,48 960,48 C1120,48 1240,20 1340,20 C1385,20 1415,26 1440,30 L1440,78 L0,78 Z"
            fill="#F5F7F6"
          />
          {/* Subtle teal crest hairline */}
          <path
            d="M0,42 C180,22 320,12 480,12 C660,12 800,48 960,48 C1120,48 1240,20 1340,20 C1385,20 1415,26 1440,30"
            stroke="rgba(22, 166, 166, 0.28)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* 2. Delicate Geological / Bathymetric Contour Lines Background */}
      <div className="overview-contours-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overview-contours-svg"
          preserveAspectRatio="none"
        >
          <path d="M-60 60 C320 90 680 50 1020 90 C1240 120 1380 70 1500 80" stroke="rgba(22, 166, 166, 0.08)" strokeWidth="1" fill="none" />
          <path d="M-60 200 C360 230 720 190 1060 230 C1280 260 1390 210 1500 220" stroke="rgba(20, 43, 58, 0.03)" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          <path d="M-60 380 C400 410 760 370 1100 410 C1300 440 1400 390 1500 400" stroke="rgba(22, 166, 166, 0.06)" strokeWidth="1" fill="none" />
          <path d="M-60 580 C440 610 800 570 1140 610 C1320 640 1410 590 1500 600" stroke="rgba(20, 43, 58, 0.025)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* 3. Main Centered Container */}
      <div className="container">
        <div className="overview-grid">
          {/* Left Column: Narrative Content */}
          <div className="overview-col-narrative">
            <Eyebrow text="Company Overview" theme="light" />

            <h2 className="overview-heading">
              Focused on High-Potential<br className="overview-heading-br" /> Deepwater Exploration
            </h2>

            <div className="overview-accent-line" aria-hidden="true"></div>

            <p className="overview-lede">
              BluEnergies Ltd. is a publicly traded Canadian energy company (TSXV: BLU | OTCQX: BLUGF) dedicated to unlocking high-impact frontier oil and gas plays across the West African continental margin.
            </p>

            <p className="overview-body">
              Rather than accumulating a scattered, capital-dilutive acreage portfolio, BluEnergies concentrates technical resources and balance sheet focus on the under-explored Harper Basin, offshore southern Liberia. Through Reconnaissance Licence RL-003, the company partners with global energy supermajor TotalEnergies to systematically de-risk multi-billion-barrel prospective resource targets across 8,924 km² of undrilled Cretaceous turbidite fan complexes.
            </p>

            <div className="overview-cta">
              <Button href="/corporate/about-us/" variant="primary" className="overview-btn">
                <span>Learn more about us</span>
                <svg className="overview-btn-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Dark Navy Corporate Mandate & Profile Card */}
          <div className="overview-col-card">
            <div className="overview-card">
              <div className="overview-card-header">
                <div className="overview-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="overview-card-title">Corporate Mandate &amp; Profile</h3>
              </div>

              <div className="overview-card-rows">
                {/* Row 1: Headquarters */}
                <div className="overview-card-row">
                  <div className="overview-row-label">
                    <svg className="overview-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Headquarters</span>
                  </div>
                  <strong className="overview-row-value">Vancouver, BC, Canada</strong>
                </div>

                {/* Row 2: Stock Exchange */}
                <div className="overview-card-row">
                  <div className="overview-row-label">
                    <svg className="overview-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                      <polyline points="16 7 22 7 22 13"/>
                    </svg>
                    <span>Stock Exchange</span>
                  </div>
                  <strong className="overview-row-value">TSXV: BLU | OTCQX: BLUGF</strong>
                </div>

                {/* Row 3: Geographical Focus */}
                <div className="overview-card-row">
                  <div className="overview-row-label">
                    <svg className="overview-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span>Geographical Focus</span>
                  </div>
                  <strong className="overview-row-value">Offshore West Africa</strong>
                </div>

                {/* Row 4: Operating Partner */}
                <div className="overview-card-row">
                  <div className="overview-row-label">
                    <svg className="overview-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>Operating Partner</span>
                  </div>
                  <strong className="overview-row-value">TotalEnergies (65%)</strong>
                </div>

                {/* Row 5: Core Asset */}
                <div className="overview-card-row">
                  <div className="overview-row-label">
                    <svg className="overview-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 22h16M12 2v20M6 22l6-14 6 14M7 16h10M8.5 10h7"/>
                    </svg>
                    <span>Core Asset</span>
                  </div>
                  <strong className="overview-row-value">Harper Basin (RL-003)</strong>
                </div>

                {/* Row 6: Expenditure Status */}
                <div className="overview-card-row">
                  <div className="overview-row-label">
                    <svg className="overview-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="9" ry="3"/>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    </svg>
                    <span>Expenditure Status</span>
                  </div>
                  <strong className="overview-row-value overview-value-accent">Fully Cost-Recoverable</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
