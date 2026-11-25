'use client';

import { useState, useRef } from 'react';
import Eyebrow from '../ui/Eyebrow';
import { useInView } from '../../hooks/useMotion';
import SeismicCube3D from './SeismicCube3D';

export default function ExplorationPotential() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [viewMode, setViewMode] = useState('2d'); // Default to 2D profile as user requested, with instant 3D toggle
  const [activeHorizon, setActiveHorizon] = useState('all');
  const [cursorPos, setCursorPos] = useState(null);
  const svgRef = useRef(null);

  const handleSvgMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
    const svgX = (x / rect.width) * 940;
    const svgY = (y / rect.height) * 440;
    const depth = Math.round((svgY / 440) * 5200);
    setCursorPos({ x: svgX, y: svgY, depth });
  };

  const handleSvgMouseLeave = () => {
    setCursorPos(null);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  const analogues = [
    {
      id: '01',
      name: 'Jubilee & TEN',
      basin: 'Tano Basin (Ghana)',
      marginType: 'Transform Margin',
      resourceMetric: '~2.1 BBOE',
      resourceFull: '2.1 Billion BOE Recoverable',
      stratigraphy: 'Turonian Turbidites',
      desc: 'Upper Cretaceous channel-fan systems in a conjugate transform margin setting directly analogous to the Harper Basin fairway.',
      matchTag: 'Stratigraphic & AVO Analogue'
    },
    {
      id: '02',
      name: 'Baleine & Calao',
      basin: "Côte d'Ivoire Offshore",
      marginType: 'West African Margin',
      resourceMetric: '~2.5 BBOE',
      resourceFull: '2.5 Billion BOE In-Place',
      stratigraphy: 'Cenomanian–Turonian',
      desc: 'Major deepwater Cretaceous fan complex within an identical West African transform margin subsidence and depositional framework.',
      matchTag: 'Play Architecture Analogue'
    },
    {
      id: '03',
      name: 'Venus & Graff',
      basin: 'Orange Basin (Namibia)',
      marginType: 'South Atlantic Margin',
      resourceMetric: '~4.0 BBOE',
      resourceFull: '4.0+ Billion BOE Discoveries',
      stratigraphy: 'Aptian–Santonian',
      desc: 'Prolific Cretaceous basin floor fan complexes sharing operational partner TotalEnergies and identical deepwater gravity flow mechanics.',
      matchTag: 'Turbidite Fan Fairway'
    },
    {
      id: '04',
      name: 'Liza & Stabroek',
      basin: 'Guyana–Suriname Basin',
      marginType: 'Equatorial Conjugate',
      resourceMetric: '>11.0 BBOE',
      resourceFull: '11.0+ Billion BOE Recoverable',
      stratigraphy: 'Campanian–Santonian',
      desc: 'World-class stacked Cretaceous sandstone turbidites along the conjugate Atlantic margin prior to South American continental rifting.',
      matchTag: 'Conjugate Margin Match'
    }
  ];

  return (
    <section id="exploration-potential" ref={sectionRef} className="section section-dark-navy theme-dark exploration-section">
      <div className="container exploration-container">
        {/* =========================================================
           1. SECTION HEADER (REFINED EDITORIAL TYPOGRAPHY & HEADROOM)
           ========================================================= */}
        <div className={`exploration-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="exploration-kicker-row">
            <span className="exploration-kicker">TECHNICAL EVALUATION &bull; BLOCKS LB-26, LB-30 &amp; LB-31</span>
            <span className="exploration-survey-tag">3D SEISMIC REPROCESSING ACTIVE</span>
          </div>

          <h2 className="exploration-heading">
            Cretaceous Basin Floor Fan Play
          </h2>

          <p className="exploration-lede">
            High-resolution 3D broadband seismic reprocessing across Reconnaissance Licence RL-003 has delineated multiple high-amplitude Cretaceous turbidite fan complexes with multi-billion-barrel prospective resource potential.
          </p>
        </div>

        {/* =========================================================
           2. TWO-COLUMN GEOLOGICAL PRESENTATION (EDITORIAL BALANCED)
           ========================================================= */}
        <div className="geological-editorial-grid">
          {/* Left Column: Geological Narrative & Unboxed Specifications */}
          <div className={`geological-narrative-col motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
            <div className="geological-narrative-head">
              <span className="geological-chapter-tag">REGIONAL PETROLEUM SYSTEM</span>
              <h3 className="geological-subheading">
                Geological Mechanics &amp;<br className="geo-br-desktop" />Petroleum Architecture
              </h3>
            </div>

            <p className="geological-paragraph">
              The Harper Basin represents a classic transform continental margin, where long-lived subsidence and continuous sediment flux from the West African craton have established an optimal deepwater turbidite fairway throughout the Cretaceous sequence.
            </p>

            <p className="geological-paragraph">
              Basin floor fan architectures are interpreted as channelized and unconfined gravity flows, yielding laterally continuous, stacked sandstone bodies with favourable reservoir net-to-gross, porosity, and permeability. These reservoirs are trapped in an ideal structural-stratigraphic configuration with prolific source rock charge and regional marine shale seal integrity.
            </p>

            {/* Refined Specification List (Borderless, Clean Hairlines) */}
            <div className="geo-specs-editorial">
              <div className="geo-specs-title-row">
                <span className="geo-specs-kicker">STRATIGRAPHIC SPECIFICATIONS</span>
                <span className="geo-specs-rule" aria-hidden="true"></span>
              </div>

              <dl className="geo-specs-list">
                <div className="geo-spec-item">
                  <dt className="geo-spec-term">Primary Reservoir</dt>
                  <dd className="geo-spec-desc">Upper Cretaceous Turbidite Sandstones</dd>
                </div>
                <div className="geo-spec-item">
                  <dt className="geo-spec-term">Source Rock</dt>
                  <dd className="geo-spec-desc">Cretaceous–Turonian Marine Shales</dd>
                </div>
                <div className="geo-spec-item">
                  <dt className="geo-spec-term">Regional Seal</dt>
                  <dd className="geo-spec-desc">Tertiary Pelagic Claystones &amp; Shales</dd>
                </div>
                <div className="geo-spec-item">
                  <dt className="geo-spec-term">Trapping Mechanism</dt>
                  <dd className="geo-spec-desc">Stratigraphic Pinchout &amp; Fault Closures</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: High-Fidelity Geological Cross-Section Diagram */}
          <div className={`geological-visual-col motion-fade-up stagger-2 ${inView ? 'is-in-view' : ''}`}>
            <div className="geological-diagram-frame">
              {/* Unified Human-Designed Diagram Toolbar (No FIG 4.1 line, No stacked nested boxes) */}
              <div className="geo-diagram-toolbar">
                <div className="geo-toolbar-strata">
                  <div className="geo-horizon-pills" role="tablist" aria-label="Geological Strata Filter">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeHorizon === 'all'}
                      className={`geo-horizon-pill ${activeHorizon === 'all' ? 'is-active' : ''}`}
                      onClick={() => setActiveHorizon('all')}
                    >
                      All Strata
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeHorizon === 'reservoir'}
                      className={`geo-horizon-pill ${activeHorizon === 'reservoir' ? 'is-active' : ''}`}
                      onClick={() => setActiveHorizon(activeHorizon === 'reservoir' ? 'all' : 'reservoir')}
                    >
                      Santonian Fan
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeHorizon === 'shale'}
                      className={`geo-horizon-pill ${activeHorizon === 'shale' ? 'is-active' : ''}`}
                      onClick={() => setActiveHorizon(activeHorizon === 'shale' ? 'all' : 'shale')}
                    >
                      Marine Shale Seal
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeHorizon === 'canyon'}
                      className={`geo-horizon-pill ${activeHorizon === 'canyon' ? 'is-active' : ''}`}
                      onClick={() => setActiveHorizon(activeHorizon === 'canyon' ? 'all' : 'canyon')}
                    >
                      Feeder Canyon
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeHorizon === 'trajectory'}
                      className={`geo-horizon-pill ${activeHorizon === 'trajectory' ? 'is-active' : ''}`}
                      onClick={() => setActiveHorizon(activeHorizon === 'trajectory' ? 'all' : 'trajectory')}
                    >
                      Wellbore Trajectory
                    </button>
                  </div>
                </div>

                <div className="geo-toolbar-actions">
                  <div className="geo-view-switcher" role="tablist" aria-label="Geological Visualization Mode">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={viewMode === '2d'}
                      className={`geo-view-btn ${viewMode === '2d' ? 'is-active' : ''}`}
                      onClick={() => setViewMode('2d')}
                    >
                      2D Profile
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={viewMode === '3d'}
                      className={`geo-view-btn ${viewMode === '3d' ? 'is-active' : ''}`}
                      onClick={() => setViewMode('3d')}
                    >
                      3D Seismic Cube
                    </button>
                  </div>
                </div>
              </div>

              {/* View 1: Interactive 3D Seismic Volume Cube */}
              {viewMode === '3d' ? (
                <>
                  <SeismicCube3D activeHorizon={activeHorizon} onHorizonChange={setActiveHorizon} />

                  {/* 3D Survey Legend & Scale Bar */}
                  <div className="geo-diagram-footer">
                    <div className="geo-diagram-legend">
                      <div className="geo-legend-item">
                        <span className="geo-swatch geo-sand" aria-hidden="true"></span>
                        <span>Santonian Turbidite Fan (Pay Zone)</span>
                      </div>
                      <div className="geo-legend-item">
                        <span className="geo-swatch geo-shale" aria-hidden="true"></span>
                        <span>Upper Cretaceous Shale (Seal)</span>
                      </div>
                      <div className="geo-legend-item">
                        <span className="geo-swatch geo-slope" aria-hidden="true"></span>
                        <span>Tertiary Clastics Overburden</span>
                      </div>
                      <div className="geo-legend-item">
                        <span className="geo-swatch geo-basement" aria-hidden="true"></span>
                        <span>Albian Source Kitchen / Basement</span>
                      </div>
                    </div>

                    <div className="geo-diagram-scale" aria-label="Survey dimensions: 15 km Inline x 10 km Crossline">
                      <div className="scale-marks">
                        <span>0</span>
                        <span>5 km</span>
                        <span>10 km</span>
                        <span>15 km</span>
                      </div>
                      <div className="scale-ruler" aria-hidden="true">
                        <div className="scale-seg"></div>
                        <div className="scale-seg"></div>
                        <div className="scale-seg"></div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* View 2: High-Definition Regional 2D Seismic Profile Card */
                <div className="geo-seismic-card">
                  {/* Card Header (Crisp HTML Typography) */}
                  <div className="geo-seismic-card-header">
                    <div className="geo-seismic-header-left">
                      <svg className="geo-seismic-wave-icon" viewBox="0 0 24 10" fill="none" aria-hidden="true">
                        <path d="M1 5C4 1 7 9 10 5C13 1 16 9 19 5C21 2.5 22.5 3 23 5" stroke="#51C2C9" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <h4 className="geo-seismic-card-title">Harper Basin – Regional 2D Seismic Profile</h4>
                    </div>
                    <span className="geo-seismic-badge-pill">Illustrative</span>
                  </div>

                  {/* Seismic Reflection Profile Stage (Vector Overlay with High-Resolution Seismic Volume) */}
                  <div className="geo-seismic-stage-canvas">
                    <svg
                      viewBox="0 0 940 440"
                      className="geo-seismic-vector-svg"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      aria-label="Harper Basin – Regional 2D Seismic Profile showing Seafloor, Santonian Fan Target Reservoir, Marine Shale Seal, Feeder Canyon, and Potential Hydrocarbon Accumulation"
                    >
                      {/* 1. Underlying Ultra-High-Resolution 2D Broadband Seismic Reflection Volume */}
                      <image
                        href="/img/harper-basin-seismic-profile-hd.png"
                        x="55"
                        y="28"
                        width="885"
                        height="412"
                        preserveAspectRatio="none"
                      />

                      {/* 2. Top Geodetic Coordinate Axis (NW <---> SE) */}
                      <rect x="0" y="0" width="940" height="28" fill="#04121E" />
                      <text x="75" y="19" fill="#94A3B8" fontSize="11" fontWeight="700" fontFamily="'JetBrains Mono', monospace">NW</text>
                      <line x1="105" y1="15" x2="885" y2="15" stroke="rgba(81, 194, 201, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
                      <text x="915" y="19" fill="#94A3B8" fontSize="11" fontWeight="700" fontFamily="'JetBrains Mono', monospace" textAnchor="end">SE</text>
                      <line x1="0" y1="28" x2="940" y2="28" stroke="rgba(81, 194, 201, 0.25)" strokeWidth="1" />

                      {/* 3. Left Vertical TWT (Two-Way Travel Time) Axis Grid */}
                      <rect x="0" y="28" width="55" height="412" fill="#04121E" />
                      <line x1="55" y1="28" x2="55" y2="440" stroke="rgba(81, 194, 201, 0.25)" strokeWidth="1" />
                      <text transform="rotate(-90)" x="-234" y="18" fill="#94A3B8" fontSize="10.5" fontWeight="700" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                        TWT (s)
                      </text>
                      <text x="34" y="52" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">0.0</text>
                      <text x="34" y="112" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">1.0</text>
                      <text x="34" y="174" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">2.0</text>
                      <text x="34" y="236" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">3.0</text>
                      <text x="34" y="298" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">4.0</text>
                      <text x="34" y="360" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">5.0</text>
                      <text x="34" y="420" fill="#CBD5E1" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">6.0</text>

                      {/* 4. Razor-Sharp Vector Callout Badges with White Cards & Pointers */}
                      {/* Callout A: Seafloor */}
                      <g>
                        <line x1="463" y1="128" x2="463" y2="154" stroke="#38BDF8" strokeWidth="1.5" />
                        <circle cx="463" cy="154" r="3" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
                        <rect x="418" y="102" width="90" height="26" rx="4" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.2" />
                        <text x="463" y="119" fill="#071B29" fontSize="11" fontWeight="700" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">Seafloor</text>
                      </g>

                      {/* Callout B: Feeder Canyon (Sediment Supply) */}
                      <g>
                        <line x1="278" y1="256" x2="300" y2="246" stroke="#94A3B8" strokeWidth="1.5" />
                        <circle cx="300" cy="246" r="3" fill="#FFFFFF" stroke="#071B29" strokeWidth="1" />
                        <rect x="122" y="244" width="156" height="34" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
                        <text x="200" y="259" fill="#071B29" fontSize="11" fontWeight="700" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">Feeder Canyon</text>
                        <text x="200" y="271.5" fill="#4A6070" fontSize="8.5" fontWeight="600" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">(Sediment Supply)</text>
                      </g>

                      {/* Callout C: Santonian Fan (Target Reservoir) */}
                      <g>
                        <line x1="420" y1="190" x2="462" y2="256" stroke="#F59E0B" strokeWidth="1.5" />
                        <circle cx="462" cy="256" r="3" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
                        <rect x="338" y="156" width="164" height="34" rx="4" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.2" />
                        <text x="420" y="171" fill="#071B29" fontSize="11" fontWeight="700" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">Santonian Fan</text>
                        <text x="420" y="183.5" fill="#4A6070" fontSize="8.5" fontWeight="600" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">(Target Reservoir)</text>
                      </g>

                      {/* Callout D: Marine Shale Seal */}
                      <g>
                        <line x1="769" y1="192" x2="824" y2="244" stroke="#51C2C9" strokeWidth="1.5" />
                        <circle cx="824" cy="244" r="3" fill="#51C2C9" stroke="#FFFFFF" strokeWidth="1" />
                        <rect x="696" y="166" width="146" height="26" rx="4" fill="#FFFFFF" stroke="#51C2C9" strokeWidth="1.2" />
                        <text x="769" y="183.5" fill="#071B29" fontSize="11" fontWeight="700" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">Marine Shale Seal</text>
                      </g>

                      {/* Callout E: Potential Hydrocarbon Accumulation */}
                      <g>
                        <line x1="791" y1="292" x2="791" y2="270" stroke="#EF4444" strokeWidth="1.5" />
                        <circle cx="791" cy="270" r="3" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
                        <rect x="712" y="292" width="180" height="34" rx="4" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.2" />
                        <text x="802" y="307" fill="#071B29" fontSize="10.5" fontWeight="700" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">Potential</text>
                        <text x="802" y="319.5" fill="#071B29" fontSize="10.5" fontWeight="700" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">Hydrocarbon Accumulation</text>
                      </g>

                      {/* 5. Razor-Sharp Vector Scale Bar */}
                      <g transform="translate(680, 388)">
                        <rect width="210" height="32" rx="4" fill="#04121E" opacity="0.94" stroke="rgba(81, 194, 201, 0.25)" strokeWidth="1" />
                        <line x1="20" y1="11" x2="190" y2="11" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="20" y1="6" x2="20" y2="11" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="62.5" y1="7" x2="62.5" y2="11" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="105" y1="7" x2="105" y2="11" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="147.5" y1="7" x2="147.5" y2="11" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="190" y1="6" x2="190" y2="11" stroke="#FFFFFF" strokeWidth="1.5" />
                        <text x="20" y="23" fill="#E2E8F0" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">0</text>
                        <text x="62.5" y="23" fill="#E2E8F0" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">10</text>
                        <text x="105" y="23" fill="#E2E8F0" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">20</text>
                        <text x="147.5" y="23" fill="#E2E8F0" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">30</text>
                        <text x="190" y="23" fill="#E2E8F0" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">40 km</text>
                      </g>
                    </svg>
                  </div>

                  {/* Card Footer Legend (Crisp HTML Typography) */}
                  <div className="geo-seismic-card-legend">
                    <div className="geo-legend-item">
                      <span className="geo-swatch geo-sand" aria-hidden="true"></span>
                      <span>Santonian Turbidite Fan (Target)</span>
                    </div>
                    <div className="geo-legend-item">
                      <span className="geo-swatch geo-shale" aria-hidden="true"></span>
                      <span>Upper Cretaceous Marine Shale (Seal)</span>
                    </div>
                    <div className="geo-legend-item">
                      <span className="geo-swatch geo-slope" aria-hidden="true"></span>
                      <span>Tertiary Clastics Slope</span>
                    </div>
                    <div className="geo-legend-item">
                      <span className="geo-swatch geo-fault" aria-hidden="true"></span>
                      <span>Growth Fault Displacements</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================
           3. EXPERT INSIGHT SECTION (AUTHENTIC RESEARCH PULL-QUOTE)
           ========================================================= */}
        <div className={`geological-insight-editorial motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
          <div className="geo-insight-decor" aria-hidden="true">
            <span className="geo-insight-quote-symbol">&ldquo;</span>
          </div>

          <div className="geo-insight-content">
            <div className="geo-insight-header">
              <span className="geo-insight-badge">SUBSURFACE APPRAISAL</span>
              <span className="geo-insight-sep" aria-hidden="true">&bull;</span>
              <span className="geo-insight-meta">RL-003 Broadband 3D Interpretation</span>
            </div>

            <blockquote className="geo-insight-quote">
              Our broadband 3D seismic reprocessing across the RL-003 licence has fundamentally clarified the Upper Cretaceous channel–fan geometry, with amplitude anomalies and AVO Class II/III signatures directly comparable to proven multi-billion-barrel turbidite systems along the conjugate Atlantic margin.
            </blockquote>

            <div className="geo-insight-attribution">
              <span className="geo-insight-author-name">Dr. Jonathan Miller</span>
              <span className="geo-insight-author-divider" aria-hidden="true">&mdash;</span>
              <span className="geo-insight-author-role">VP of Geoscience &amp; Subsurface Exploration, BluEnergies Ltd.</span>
            </div>
          </div>
        </div>

        {/* =========================================================
           4. COMPARATIVE RESEARCH STRIP ("Proven Atlantic Margin Analogues")
           ========================================================= */}
        <div className={`analogues-research-block motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="analogues-header">
            <div className="analogues-title-wrap">
              <span className="analogues-kicker">COMPARATIVE RESEARCH &amp; ANALOGUES</span>
              <h3 className="analogues-title">Proven Atlantic Margin Analogues</h3>
            </div>
            <p className="analogues-lede">
              Geological, geochemical, and stratigraphic characteristics directly consistent with world-class Cretaceous turbidite discoveries along the conjugate Atlantic margins.
            </p>
          </div>

          <div className="analogues-bento-grid">
            {analogues.map((analogue, idx) => (
              <div
                key={analogue.name}
                className={`analogue-card motion-fade-up stagger-${idx + 1}`}
                onMouseMove={handleCardMouseMove}
              >
                {/* Motion Spotlight Glow Layer */}
                <div className="analogue-card-spotlight" aria-hidden="true"></div>

                {/* Card Top Meta Strip */}
                <div className="analogue-card-meta">
                  <span className="analogue-card-index">{analogue.id}</span>
                  <span className="analogue-card-margin">{analogue.marginType}</span>
                </div>

                {/* Basin / Location Row */}
                <div className="analogue-card-basin">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="analogue-geo-icon">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>{analogue.basin}</span>
                </div>

                {/* Hero Metric: Big Gold Resource Stat */}
                <div className="analogue-hero-metric">
                  <span className="analogue-metric-val">{analogue.resourceMetric}</span>
                  <span className="analogue-metric-label">{analogue.resourceFull}</span>
                </div>

                {/* Discovery Field Name */}
                <h4 className="analogue-name">{analogue.name}</h4>

                {/* Geological Description */}
                <p className="analogue-desc">{analogue.desc}</p>

                {/* RL-003 Geological Correlation Tag */}
                <div className="analogue-match-pill">
                  <span className="analogue-match-dot" aria-hidden="true"></span>
                  <span className="analogue-match-text">{analogue.matchTag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
