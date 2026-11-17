import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function FeaturedAsset() {
  return (
    <section id="featured-asset" className="section section-soft-blue theme-light featured-asset-section">
      {/* Background Geological Contour Lines */}
      <div className="featured-asset-contours" aria-hidden="true">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="featured-contours-svg"
          preserveAspectRatio="none"
        >
          <path d="M-60 80 C320 120 700 60 1100 110 C1300 140 1420 90 1500 100" stroke="rgba(22, 166, 166, 0.07)" strokeWidth="1" fill="none" />
          <path d="M-60 220 C360 260 740 200 1140 250 C1340 280 1440 230 1500 240" stroke="rgba(20, 43, 58, 0.035)" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          <path d="M-60 380 C400 420 780 360 1180 410 C1380 440 1460 390 1500 400" stroke="rgba(22, 166, 166, 0.06)" strokeWidth="1" fill="none" />
          <path d="M-60 560 C440 600 820 540 1220 590 C1420 620 1480 570 1500 580" stroke="rgba(20, 43, 58, 0.025)" strokeWidth="1" fill="none" />
          <path d="M-60 720 C480 760 860 700 1260 750 C1460 780 1500 730 1500 740" stroke="rgba(22, 166, 166, 0.05)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      <div className="container">
        <div className="assets-editorial-layout">
          {/* Left Column: Narrative Copy & Block Specification Details */}
          <div className="assets-text-col">
            <Eyebrow text="FEATURED ASSET" theme="light" />

            <h2 className="featured-asset-heading">
              Harper Basin,<br />Offshore Liberia
            </h2>

            <div className="featured-accent-line" aria-hidden="true"></div>

            <p className="featured-asset-lede">
              Reconnaissance Licence RL-003 encompasses 8,924 km² (approx. 2.2 million acres) across deepwater Blocks LB-26, LB-30, and LB-31 along the West African Transform Margin.
            </p>

            <p className="featured-asset-body">
              The concession is governed by a Joint Study and Assessment Agreement with operator TotalEnergies (65%) and BluEnergies (35% working interest), authorized by the Liberia Petroleum Regulatory Authority (LPRA). The current exploration licence term extends through June 30, 2027, with all technical expenditures fully eligible for recovery upon conversion to production sharing contracts.
            </p>

            {/* Block Specification Details */}
            <div className="blocks-badge-list">
              {/* LB-26 */}
              <div className="block-badge-item">
                <div className="block-badge-pill">LB-26</div>
                <div className="block-badge-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="block-badge-separator" aria-hidden="true"></div>
                <span className="block-badge-name">Upper slope to basin floor</span>
              </div>

              {/* LB-30 */}
              <div className="block-badge-item">
                <div className="block-badge-pill">LB-30</div>
                <div className="block-badge-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16M12 2v20M6 22l6-14 6 14M7 16h10M8.5 10h7" />
                  </svg>
                </div>
                <div className="block-badge-separator" aria-hidden="true"></div>
                <span className="block-badge-name">Central deepwater fan complex</span>
              </div>

              {/* LB-31 */}
              <div className="block-badge-item">
                <div className="block-badge-pill">LB-31</div>
                <div className="block-badge-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12c4-3 8 3 12 0s6-3 8-1M2 18c4-3 8 3 12 0s6-3 8-1M2 6c4-3 8 3 12 0s6-3 8-1" />
                  </svg>
                </div>
                <div className="block-badge-separator" aria-hidden="true"></div>
                <span className="block-badge-name">Distal stratigraphic pinch-out</span>
              </div>
            </div>

            <div className="featured-asset-cta">
              <Button href="/assets-and-operations/overview/" variant="primary" className="featured-asset-btn">
                <span>View assets &amp; operations</span>
                <svg className="featured-btn-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Technical Concession Map Card & Ownership Breakdown */}
          <div className="assets-visual-col">
            <div className="concession-map-card">
              {/* Header */}
              <div className="concession-map-header">
                <div className="concession-header-left">
                  <div className="concession-rig-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16M12 2v20M6 22l6-14 6 14M7 16h10M8.5 10h7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="concession-title">Reconnaissance Licence RL-003</h3>
                    <div className="concession-subtitle">Harper Basin &bull; Offshore Southern Liberia</div>
                  </div>
                </div>
                <span className="concession-term-pill">Term to June 30, 2027</span>
              </div>

              {/* Technical Exploration SVG Map */}
              <div className="concession-svg-wrapper">
                <svg viewBox="0 0 540 310" fill="none" xmlns="http://www.w3.org/2000/svg" className="concession-svg">
                  {/* Oceanic Basin Deep Background */}
                  <rect width="540" height="310" fill="#051826" rx="8" />

                  {/* Ambient Bathymetry Contours */}
                  <path d="M0 60 Q140 45, 280 85 T540 100" stroke="rgba(81, 194, 201, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0 110 Q150 95, 300 135 T540 155" stroke="rgba(81, 194, 201, 0.14)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0 165 Q160 145, 320 190 T540 215" stroke="rgba(81, 194, 201, 0.14)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0 220 Q170 200, 340 245 T540 270" stroke="rgba(81, 194, 201, 0.12)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Coastline and Liberia Mainland */}
                  <path d="M0 0 L540 0 L540 68 C420 54 280 32 0 44 Z" fill="#09253A" />
                  <path d="M0 44 C280 32 420 54 540 68" stroke="rgba(81, 194, 201, 0.45)" strokeWidth="1.5" />
                  <text x="24" y="28" fill="rgba(255, 255, 255, 0.65)" fontSize="11" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontWeight="700" letterSpacing="0.1em">LIBERIA MAINLAND</text>

                  {/* North Compass Arrow */}
                  <g transform="translate(502, 16)">
                    <text x="4" y="10" fill="#FFFFFF" fontSize="11" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontWeight="700" textAnchor="middle">N</text>
                    <path d="M4 14 L0 28 L4 25 L8 28 Z" fill="#51C2C9" />
                  </g>

                  {/* Depth Indicators */}
                  <text x="480" y="118" fill="rgba(81, 194, 201, 0.65)" fontSize="9.5" fontFamily="'Hanken Grotesk', system-ui, sans-serif">1,000 m</text>
                  <text x="480" y="174" fill="rgba(81, 194, 201, 0.65)" fontSize="9.5" fontFamily="'Hanken Grotesk', system-ui, sans-serif">2,000 m</text>
                  <text x="480" y="230" fill="rgba(81, 194, 201, 0.65)" fontSize="9.5" fontFamily="'Hanken Grotesk', system-ui, sans-serif">3,000 m</text>

                  {/* Concession Licence Blocks (RL-003) */}
                  {/* Block LB-26 (Western Slope) */}
                  <polygon
                    points="48,102 185,113 172,197 32,186"
                    fill="rgba(22, 166, 166, 0.12)"
                    stroke="#16A6A6"
                    strokeWidth="1.8"
                  />
                  <text x="108" y="155" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">LB-26</text>

                  {/* Block LB-30 (Central Fan Complex) */}
                  <polygon
                    points="185,113 335,126 322,210 172,197"
                    fill="rgba(22, 166, 166, 0.18)"
                    stroke="#16A6A6"
                    strokeWidth="1.8"
                  />
                  <text x="258" y="167" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">LB-30</text>

                  {/* Block LB-31 (Eastern Stratigraphic) */}
                  <polygon
                    points="335,126 470,138 455,222 322,210"
                    fill="rgba(22, 166, 166, 0.12)"
                    stroke="#16A6A6"
                    strokeWidth="1.8"
                  />
                  <text x="402" y="180" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">LB-31</text>

                  {/* 3D Seismic Coverage (TGS Reprocessing - 6,167 km²) */}
                  <polygon
                    points="56,114 458,148 444,212 42,178"
                    fill="rgba(227, 155, 47, 0.04)"
                    stroke="#E39B2F"
                    strokeWidth="1.4"
                    strokeDasharray="5 4"
                  />
                  <text x="254" y="244" fill="#E39B2F" fontSize="11" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">6,167 km² 3D Seismic (TGS Reprocessing)</text>

                  {/* Metric Scale Bar */}
                  <g transform="translate(426, 260)">
                    <line x1="0" y1="6" x2="80" y2="6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" />
                    <line x1="0" y1="2" x2="0" y2="6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" />
                    <line x1="20" y1="3" x2="20" y2="6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" />
                    <line x1="40" y1="2" x2="40" y2="6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" />
                    <line x1="80" y1="2" x2="80" y2="6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" />
                    <text x="0" y="16" fill="rgba(255, 255, 255, 0.5)" fontSize="8" fontFamily="'Hanken Grotesk', system-ui, sans-serif">0</text>
                    <text x="18" y="16" fill="rgba(255, 255, 255, 0.5)" fontSize="8" fontFamily="'Hanken Grotesk', system-ui, sans-serif">25</text>
                    <text x="38" y="16" fill="rgba(255, 255, 255, 0.5)" fontSize="8" fontFamily="'Hanken Grotesk', system-ui, sans-serif">50</text>
                    <text x="70" y="16" fill="rgba(255, 255, 255, 0.5)" fontSize="8" fontFamily="'Hanken Grotesk', system-ui, sans-serif">100 km</text>
                  </g>
                </svg>
              </div>

              {/* Map Legend */}
              <div className="concession-map-legend">
                <div className="map-legend-item">
                  <span className="legend-indicator legend-blocks" aria-hidden="true"></span>
                  <span>Licence Blocks (RL-003)</span>
                </div>
                <div className="map-legend-item">
                  <span className="legend-indicator legend-seismic" aria-hidden="true"></span>
                  <span>3D Seismic Coverage</span>
                </div>
                <div className="map-legend-item">
                  <span className="legend-indicator legend-bathymetry" aria-hidden="true">
                    <svg viewBox="0 0 18 8" width="18" height="8" fill="none">
                      <path d="M1 2C4 0 7 4 10 2C13 0 16 4 17 2M1 6C4 4 7 8 10 6C13 4 16 8 17 6" stroke="#51C2C9" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>Bathymetry (m)</span>
                </div>
              </div>

              {/* Partnership Ownership Bar */}
              <div className="concession-ownership-block">
                <div className="ownership-labels-row">
                  <span className="ownership-label-blu">BluEnergies 35% (Partner)</span>
                  <span className="ownership-label-total">TotalEnergies 65% (Operator)</span>
                </div>
                <div className="ownership-bar-track" role="img" aria-label="Ownership: BluEnergies 35%, TotalEnergies 65%">
                  <div className="ownership-bar-blu">35%</div>
                  <div className="ownership-bar-total">65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
