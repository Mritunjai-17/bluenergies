'use client';

import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useMotion';

export default function FeaturedAsset() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="featured-asset" ref={sectionRef} className="section section-soft-blue theme-light featured-asset-section">
      <div className="container">
        <div className="assets-editorial-layout">
          {/* Left Column: Narrative Copy & Official Legal Dossier */}
          <div className={`assets-text-col motion-fade-up ${inView ? 'is-in-view' : ''}`}>
            <Eyebrow text="FEATURED ASSET" theme="light" />

            <h2 className="featured-asset-heading">
              Harper Basin,<br />Offshore Liberia
            </h2>

            <div className="featured-accent-line" aria-hidden="true"></div>

            <p className="featured-asset-lede">
              Reconnaissance Licence RL-003 encompasses 8,924 km² (approx. 2.2 million acres) across deepwater Blocks LB-26, LB-30, and LB-31 along the prolific West African Transform Margin.
            </p>

            <p className="featured-asset-body">
              The concession is governed by a Joint Study and Assessment Agreement with operator TotalEnergies (65%) and BluEnergies (35% working interest), authorized by the Liberia Petroleum Regulatory Authority (LPRA). The current exploration licence term extends through June 30, 2027, with all technical expenditures fully eligible for recovery upon conversion to production sharing contracts.
            </p>

            {/* Official Legal & Operating Dossier Table (Human Agency Craft) */}
            <div className="concession-dossier-table" role="table" aria-label="Concession RL-003 Specifications">
              <div className="dossier-row" role="row">
                <span className="dossier-key" role="rowheader">Concession Code</span>
                <span className="dossier-val" role="cell">Reconnaissance Licence RL-003</span>
              </div>
              <div className="dossier-row" role="row">
                <span className="dossier-key" role="rowheader">Operating Partner</span>
                <span className="dossier-val" role="cell">TotalEnergies EP Liberia (65%)</span>
              </div>
              <div className="dossier-row" role="row">
                <span className="dossier-key" role="rowheader">Working Interest</span>
                <span className="dossier-val" role="cell">BluEnergies Ltd. (35% Carried Partner)</span>
              </div>
              <div className="dossier-row" role="row">
                <span className="dossier-key" role="rowheader">Governing Authority</span>
                <span className="dossier-val" role="cell">Liberia Petroleum Regulatory Authority (LPRA)</span>
              </div>
              <div className="dossier-row" role="row">
                <span className="dossier-key" role="rowheader">Term Expiry</span>
                <span className="dossier-val" role="cell">June 30, 2027 (PSC Conversion Transition)</span>
              </div>
              <div className="dossier-row" role="row">
                <span className="dossier-key" role="rowheader">Cost Recovery</span>
                <span className="dossier-val" role="cell">100% Eligible under Model Petroleum Law</span>
              </div>
            </div>

            {/* Block Specification Details */}
            <div className="blocks-badge-list">
              {/* LB-26 */}
              <div className="block-badge-item motion-fade-up stagger-1">
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
              <div className="block-badge-item motion-fade-up stagger-2">
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
              <div className="block-badge-item motion-fade-up stagger-3">
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

            <div className="featured-asset-cta motion-fade-up stagger-2">
              <Button href="/assets-and-operations/overview/" variant="primary" className="featured-asset-btn">
                <span>View assets &amp; operations</span>
                <svg className="featured-btn-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Technical Concession Map Card & Ownership Breakdown */}
          <div className={`assets-visual-col motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
            <div className="concession-map-card">
              {/* Header with Cartographic Metadata */}
              <div className="concession-map-header">
                <div className="concession-header-left">
                  <div className="concession-rig-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16M12 2v20M6 22l6-14 6 14M7 16h10M8.5 10h7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="concession-title">Reconnaissance Licence RL-003</h3>
                    <div className="concession-subtitle">Harper Basin &bull; Offshore Southern Liberia &bull; WGS-84 UTM Zone 29N</div>
                  </div>
                </div>
                <span className="concession-term-pill">Term: June 30, 2027</span>
              </div>

              {/* Technical Exploration Satellite Bathymetry Concession Map */}
              <div className="concession-svg-wrapper">
                <img
                  src="/img/harper-basin-concession-map.png"
                  alt="Reconnaissance Licence RL-003 Concession Blocks LB-26, LB-30, and LB-31 Satellite & Bathymetry Map, Harper Basin Offshore Liberia"
                  width={529}
                  height={393}
                  className="concession-map-img"
                  loading="lazy"
                />
              </div>

              {/* Map Legend */}
              <div className="concession-map-legend">
                <div className="map-legend-item">
                  <span className="legend-indicator legend-blocks" aria-hidden="true"></span>
                  <span>Licence Blocks (RL-003)</span>
                </div>
                <div className="map-legend-item">
                  <span className="legend-indicator legend-seismic" aria-hidden="true"></span>
                  <span>3D Seismic Reprocessing (TGS)</span>
                </div>
                <div className="map-legend-item">
                  <span className="legend-indicator legend-bathymetry" aria-hidden="true">
                    <svg viewBox="0 0 18 8" width="18" height="8" fill="none">
                      <path d="M1 2C4 0 7 4 10 2C13 0 16 4 17 2M1 6C4 4 7 8 10 6C13 4 16 8 17 6" stroke="#51C2C9" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>Bathymetry (1,500m – 3,200m)</span>
                </div>
              </div>

              {/* Partnership Ownership Bar */}
              <div className="concession-ownership-block">
                <div className="ownership-labels-row">
                  <span className="ownership-label-blu">BluEnergies 35% (Working Interest)</span>
                  <span className="ownership-label-total">TotalEnergies 65% (Operator)</span>
                </div>
                <div className="ownership-bar-track" role="img" aria-label="Ownership: BluEnergies 35%, TotalEnergies 65%">
                  <div className="ownership-bar-blu" style={{ width: inView ? '35%' : '0%' }}>35%</div>
                  <div className="ownership-bar-total" style={{ width: inView ? '65%' : '0%' }}>65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
