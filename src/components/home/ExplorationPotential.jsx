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
                <>
                  {/* View 2: High-Precision Human-Engineered Technical 2D Cross-Section */}
                  <div
                    className="geo-svg-stage"
                    ref={svgRef}
                    onMouseMove={handleSvgMouseMove}
                    onMouseLeave={handleSvgMouseLeave}
                  >
                    {/* Quiet Status Pill: AVO Direct Hydrocarbon Indicator */}
                    <div className="geo-stage-telemetry" aria-label="AVO Anomaly Status">
                      <span className="geo-telemetry-dot" aria-hidden="true"></span>
                      <span className="geo-telemetry-text">AVO Class II/III Hydrocarbon Anomaly</span>
                    </div>
                    <svg
                      viewBox="0 0 940 440"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="geological-cross-svg"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      aria-label="Geological Cross-Section showing Cretaceous continental slope, submarine canyon, basin floor, and stacked turbidite fan reservoir deposits"
                    >
                      <defs>
                        {/* 1. Deep Ocean Bathymetric Water Gradient */}
                        <linearGradient id="oceanWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#041525" />
                          <stop offset="35%" stopColor="#08233A" />
                          <stop offset="75%" stopColor="#0B304E" />
                          <stop offset="100%" stopColor="#0E3C62" />
                        </linearGradient>

                        {/* 2. Feeder Canyon Coarse Infill Gradient */}
                        <linearGradient id="canyonInfillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#113F5E" />
                          <stop offset="50%" stopColor="#1B5D88" />
                          <stop offset="100%" stopColor="#113F5E" />
                        </linearGradient>

                        {/* 3. Authentic Sandstone Stipple Lithology Pattern (USGS / Geological Standard) */}
                        <pattern id="sandstoneStipple" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="0.8" fill="#FDE68A" opacity="0.65" />
                          <circle cx="8" cy="4" r="0.8" fill="#FBBF24" opacity="0.6" />
                          <circle cx="5" cy="8" r="0.8" fill="#FDE68A" opacity="0.65" />
                          <circle cx="11" cy="10" r="0.8" fill="#F59E0B" opacity="0.55" />
                        </pattern>

                        {/* 4. Fine Shale Laminations Pattern (Impermeable Seal) */}
                        <pattern id="shaleDashPattern" x="0" y="0" width="16" height="8" patternUnits="userSpaceOnUse">
                          <line x1="2" y1="2" x2="8" y2="2" stroke="rgba(81, 194, 201, 0.4)" strokeWidth="0.8" />
                          <line x1="10" y1="6" x2="15" y2="6" stroke="rgba(81, 194, 201, 0.35)" strokeWidth="0.8" />
                        </pattern>

                        {/* 5. Turbidite Fan Sandstone Shaded Gradients */}
                        <linearGradient id="fanMainReservoirGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#B45309" />
                          <stop offset="15%" stopColor="#D97706" />
                          <stop offset="45%" stopColor="#F59E0B" />
                          <stop offset="75%" stopColor="#FBBF24" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>

                        <linearGradient id="fanCoreSweetSpot" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="#FEF08A" stopOpacity="0.85" />
                          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                        </linearGradient>

                        <clipPath id="diagramCanvasClip">
                          <rect width="940" height="440" rx="0" />
                        </clipPath>
                      </defs>

                      <g clipPath="url(#diagramCanvasClip)">
                        {/* Dark Subsurface Canvas Base */}
                        <rect width="940" height="440" fill="#04121E" />

                        {/* Horizontal Seismic Time/Depth Guidelines (Grid Hairlines) */}
                        <line x1="66" y1="50" x2="874" y2="50" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="1" strokeDasharray="2 4" />
                        <line x1="66" y1="120" x2="874" y2="120" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="1" strokeDasharray="2 4" />
                        <line x1="66" y1="190" x2="874" y2="190" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="1" strokeDasharray="2 4" />
                        <line x1="66" y1="260" x2="874" y2="260" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="1" strokeDasharray="2 4" />
                        <line x1="66" y1="330" x2="874" y2="330" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="1" strokeDasharray="2 4" />
                        <line x1="66" y1="400" x2="874" y2="400" stroke="rgba(81, 194, 201, 0.09)" strokeWidth="1" strokeDasharray="2 4" />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 1: PRE-CRETACEOUS ACOUSTIC BASEMENT
                            ------------------------------------------------------------- */}
                        <path
                          d="M66 440 L874 440 L874 365 C760 370 640 372 520 365 C390 358 260 330 160 295 L66 260 Z"
                          fill="#051522"
                          className={`geo-stratum ${activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />
                        {/* Basement Fractures / Shear Fabric */}
                        <path d="M120 340 L160 440 M260 350 L300 440 M420 370 L450 440 M680 375 L710 440" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1.2" strokeDasharray="6 4" />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 2: ALBIAN MATURE MARINE SOURCE KITCHEN
                            ------------------------------------------------------------- */}
                        <path
                          d="M66 260 L160 295 C260 330 390 358 520 365 C640 372 760 370 874 365 L874 315 C750 320 620 315 490 305 C370 294 240 255 140 210 L66 180 Z"
                          fill="#091F2E"
                          className={`geo-stratum ${activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />
                        {/* Source Rock Organic-Rich Marker Horizon */}
                        <path d="M100 235 C220 278 350 310 480 320 C610 330 740 332 874 326" stroke="#2DD4BF" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.45" />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 3: CRETACEOUS SLOPE CLASTICS FAIRWAY
                            ------------------------------------------------------------- */}
                        <path
                          d="M66 82 L180 96 C320 152 440 208 440 208 L874 216 L874 315 C750 320 620 315 490 305 C370 294 240 255 140 210 L66 180 Z"
                          fill="#0D2B3F"
                          className={`geo-stratum ${activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* Cretaceous Clinoforms (Seismic Deposition Geometry) */}
                        <path d="M78 122 C185 148 300 190 435 228" stroke="rgba(81, 194, 201, 0.16)" strokeWidth="1" />
                        <path d="M98 152 C210 185 330 226 460 260" stroke="rgba(81, 194, 201, 0.16)" strokeWidth="1" />
                        <path d="M120 182 C230 218 350 258 485 292" stroke="rgba(81, 194, 201, 0.16)" strokeWidth="1" />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 4: REGIONAL TRANSGRESSIVE MARINE SHALE SEAL
                            ------------------------------------------------------------- */}
                        <path
                          d="M340 220 C450 208 580 204 710 208 C790 212 874 216 874 242 C874 260 780 254 660 248 C540 242 420 238 340 230 Z"
                          fill="#133F4E"
                          className={`geo-stratum ${activeHorizon === 'shale' ? 'is-highlighted-teal' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />
                        {/* Shale Texture Fill */}
                        <path
                          d="M340 220 C450 208 580 204 710 208 C790 212 874 216 874 242 C874 260 780 254 660 248 C540 242 420 238 340 230 Z"
                          fill="url(#shaleDashPattern)"
                          opacity="0.8"
                          className={`geo-stratum ${activeHorizon === 'shale' ? 'is-highlighted-teal' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 5: INCISED SUBMARINE FEEDER CANYON
                            ------------------------------------------------------------- */}
                        <path
                          d="M230 118 C285 142 350 180 435 208 C385 218 320 188 230 118 Z"
                          fill="url(#canyonInfillGrad)"
                          stroke="rgba(81, 194, 201, 0.45)"
                          strokeWidth="1"
                          className={`geo-stratum ${activeHorizon === 'canyon' ? 'is-highlighted-teal' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 6: SANTONIAN BASIN FLOOR TURBIDITE FAN COMPLEX
                            (Authentic Lobate Shingled Fairway with Realistic Geometry)
                            ------------------------------------------------------------- */}
                        {/* Basal Fan Lobe 3 */}
                        <path
                          d="M430 278 C520 262 650 258 775 266 C835 270 865 280 835 288 C760 298 610 298 510 294 C460 291 410 286 430 278 Z"
                          fill="#B45309"
                          opacity="0.85"
                          className={`geo-stratum ${activeHorizon === 'reservoir' ? 'is-highlighted-amber' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* Main Target Fan Lobe 2 (Stratigraphic Pinchout & Internal Channel Axis) */}
                        <path
                          d="M390 248 C480 230 635 224 775 236 C840 242 870 255 835 263 C755 274 570 274 480 268 C430 264 375 256 390 248 Z"
                          fill="url(#fanMainReservoirGrad)"
                          stroke="#F6C561"
                          strokeWidth="1.2"
                          className={`geo-stratum ${activeHorizon === 'reservoir' ? 'is-highlighted-amber' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* Sandstone Geological Stipple Texture */}
                        <path
                          d="M390 248 C480 230 635 224 775 236 C840 242 870 255 835 263 C755 274 570 274 480 268 C430 264 375 256 390 248 Z"
                          fill="url(#sandstoneStipple)"
                          opacity="0.65"
                          className={`geo-stratum ${activeHorizon === 'reservoir' ? 'is-highlighted-amber' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* Upper Depositional Fan Lobe 1 */}
                        <path
                          d="M460 232 C530 218 655 215 770 223 C825 228 850 238 820 244 C760 254 620 252 535 248 C490 245 440 240 460 232 Z"
                          fill="#D97706"
                          opacity="0.85"
                          className={`geo-stratum ${activeHorizon === 'reservoir' ? 'is-highlighted-amber' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* AVO Class II/III Amplitude Anomaly Sweet Spot (Hydrocarbon Indicator Envelope) */}
                        <path
                          d="M480 246 C560 236 680 234 780 242 C830 246 845 254 815 258 C745 266 595 265 520 260 C475 257 445 252 480 246 Z"
                          fill="url(#fanCoreSweetSpot)"
                          className={`geo-stratum ${activeHorizon === 'reservoir' ? 'is-highlighted-amber' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* Internal Seismic Reflection Lines inside Fan */}
                        <path d="M430 254 C530 242 660 240 760 248" stroke="#FEF08A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                        <path d="M460 264 C560 254 680 252 780 258" stroke="#FEF08A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

                        {/* -------------------------------------------------------------
                            GEOLOGICAL STRATA 7: DEEP OCEAN WATER COLUMN
                            ------------------------------------------------------------- */}
                        <path
                          d="M66 50 L874 50 L874 216 L440 208 C320 152 180 96 66 82 Z"
                          fill="url(#oceanWaterGrad)"
                        />
                        {/* Sea Surface Water Line (0m MSL Datum) */}
                        <line x1="66" y1="50" x2="874" y2="50" stroke="rgba(81, 194, 201, 0.45)" strokeWidth="1.2" />

                        {/* Seafloor / Mudline Boundary Line */}
                        <path
                          d="M66 82 L180 96 C320 152 440 208 440 208 L874 216"
                          stroke="#2DD4BF"
                          strokeWidth="1.6"
                        />

                        {/* -------------------------------------------------------------
                            SYNTHETIC EXTENSIONAL GROWTH FAULTS
                            ------------------------------------------------------------- */}
                        <g stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" strokeDasharray="4 3">
                          <line x1="560" y1="235" x2="515" y2="415" />
                          <line x1="720" y1="248" x2="680" y2="415" />
                          <line x1="840" y1="262" x2="805" y2="415" />
                        </g>
                        {/* Downthrown Fault Arrows */}
                        <path d="M545 290 L541 300 L549 300 Z" fill="rgba(255, 255, 255, 0.6)" />
                        <path d="M705 305 L701 315 L709 315 Z" fill="rgba(255, 255, 255, 0.6)" />

                        {/* -------------------------------------------------------------
                            EXPLORATION DRILLSHIP & WELLBORE TRAJECTORY (BLU-RL003-1X)
                            ------------------------------------------------------------- */}
                        {/* 1. Surface Drillship Silhouette at Sea Level */}
                        <g transform="translate(685, 41)" className={`geo-stratum ${activeHorizon === 'trajectory' ? 'callout-trajectory is-highlighted-trajectory' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}>
                          <polygon points="0,9 6,2 34,2 40,9" fill="#FFFFFF" opacity="0.95" />
                          <rect x="15" y="-3" width="10" height="5" fill="#51C2C9" />
                          <line x1="20" y1="-8" x2="20" y2="-3" stroke="#F6C561" strokeWidth="1.5" />
                          <circle cx="20" cy="-9" r="1.5" fill="#F6C561" />
                        </g>

                        {/* 2. Deepwater Marine Riser through Water Column */}
                        <line
                          x1="705" y1="50" x2="705" y2="214"
                          stroke="#51C2C9" strokeWidth="1.5"
                          className={`geo-stratum ${activeHorizon === 'trajectory' ? 'callout-trajectory is-highlighted-trajectory' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* 3. Subsea Wellhead & Blow-Out Preventer at Seabed (-2,150m) */}
                        <rect
                          x="701" y="210" width="8" height="7" rx="1"
                          fill="#51C2C9" stroke="#04121E" strokeWidth="1"
                          className={`geo-stratum ${activeHorizon === 'trajectory' ? 'callout-trajectory is-highlighted-trajectory' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* 4. Deviated Subsurface Wellbore Trajectory Path */}
                        <path
                          d="M705 214 L705 238 C705 245 700 252 690 258 L665 272"
                          stroke="#F6C561"
                          strokeWidth="2.2"
                          fill="none"
                          className={`geo-stratum ${activeHorizon === 'trajectory' ? 'callout-trajectory is-highlighted-trajectory' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* 5. Perforated Target Pay Zone (Glow Marker) */}
                        <circle
                          cx="678" cy="265" r="4"
                          fill="#FEF08A" stroke="#B45309" strokeWidth="1.5"
                          className={`geo-stratum ${activeHorizon === 'trajectory' ? 'callout-trajectory is-highlighted-trajectory' : activeHorizon !== 'all' ? 'is-dimmed' : ''}`}
                        />

                        {/* -------------------------------------------------------------
                            HUMAN-CRAFTED SCIENTIFIC LEADER LINES & ANNOTATION FLAGS
                            ------------------------------------------------------------- */}
                        {/* Callout 1: Seafloor / Mudline */}
                        <g className="geo-callout-group">
                          <text x="350" y="75" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif">Seafloor / Mudline (-2,150m MSL)</text>
                          <path d="M345 78 L310 95 L270 95" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="0.9" fill="none" />
                          <circle cx="270" cy="95" r="2" fill="#51C2C9" />
                        </g>

                        {/* Callout 2: Submarine Feeder Canyon */}
                        <g className={`geo-callout-group ${activeHorizon === 'canyon' ? 'is-highlighted-teal' : ''}`}>
                          <text x="180" y="170" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif">Submarine Feeder Canyon</text>
                          <text x="180" y="182" fill="rgba(81, 194, 201, 0.9)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">Slope Canyon Throat Incision</text>
                          <path d="M260 162 L290 152 L315 152" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="0.9" fill="none" />
                          <circle cx="315" cy="152" r="2" fill="#51C2C9" />
                        </g>

                        {/* Callout 3: Upper Cretaceous Regional Marine Shale Seal */}
                        <g className={`geo-callout-group ${activeHorizon === 'shale' ? 'is-highlighted-teal' : ''}`}>
                          <text x="440" y="175" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif">Regional Marine Shale Seal</text>
                          <text x="440" y="187" fill="rgba(81, 194, 201, 0.9)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">Impermeable Transgressive Cap</text>
                          <path d="M495 190 L515 210 L545 224" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="0.9" fill="none" />
                          <circle cx="545" cy="224" r="2" fill="#51C2C9" />
                        </g>

                        {/* Callout 4: Santonian Turbidite Fan Fairway */}
                        <g className={`geo-callout-group ${activeHorizon === 'reservoir' ? 'is-highlighted-amber' : ''}`}>
                          <rect x="520" y="125" width="168" height="38" rx="4" fill="rgba(4, 18, 30, 0.92)" stroke="rgba(246, 197, 97, 0.4)" strokeWidth="1" />
                          <text x="530" y="140" fill="#FDE68A" fontSize="9.5" fontWeight="700" fontFamily="'Hanken Grotesk', system-ui, sans-serif">Santonian Basin Floor Fan</text>
                          <text x="530" y="153" fill="rgba(255, 255, 255, 0.8)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">Stacked Turbidite Reservoir Pay</text>
                          <path d="M604 163 L604 195 L615 240" stroke="#F6C561" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                          <circle cx="615" cy="240" r="2.5" fill="#F6C561" />
                        </g>

                        {/* Callout 5: Wellbore Prospect BLU-RL003-1X Flag */}
                        <g className={`geo-callout-group ${activeHorizon === 'trajectory' ? 'callout-trajectory is-highlighted-trajectory' : ''}`}>
                          <rect x="735" y="80" width="138" height="52" rx="4" fill="rgba(4, 18, 30, 0.94)" stroke="#F6C561" strokeWidth="1.2" />
                          <text x="745" y="96" fill="#F6C561" fontSize="9.5" fontWeight="700" fontFamily="'JetBrains Mono', monospace">PROSPECT BLU-RL003-1X</text>
                          <text x="745" y="110" fill="#FFFFFF" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">Water Depth: 2,150m</text>
                          <text x="745" y="123" fill="#51C2C9" fontSize="8" fontFamily="'JetBrains Mono', monospace">Target TVD: ~3,420m MSL</text>
                          <path d="M735 106 L715 106 L705 85" stroke="#F6C561" strokeWidth="1" fill="none" />
                          <circle cx="705" cy="85" r="2.5" fill="#F6C561" />
                        </g>

                        {/* -------------------------------------------------------------
                            LEFT & RIGHT DUAL CALIBRATION AXES (DEPTH & TWO-WAY TIME)
                            ------------------------------------------------------------- */}
                        {/* Left Depth Axis Panel */}
                        <rect x="0" y="0" width="66" height="440" fill="#030D16" />
                        <line x1="66" y1="0" x2="66" y2="440" stroke="rgba(81, 194, 201, 0.25)" strokeWidth="1" />
                        <text x="33" y="28" fill="rgba(81, 194, 201, 0.85)" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">DEPTH (m)</text>

                        <line x1="60" y1="50" x2="66" y2="50" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="56" y="53" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">0</text>

                        <line x1="60" y1="120" x2="66" y2="120" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="56" y="123" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">1,000</text>

                        <line x1="60" y1="190" x2="66" y2="190" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="56" y="193" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">2,000</text>

                        <line x1="60" y1="260" x2="66" y2="260" stroke="#F6C561" strokeWidth="1.5" />
                        <text x="56" y="263" fill="#F6C561" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="end">3,000</text>

                        <line x1="60" y1="330" x2="66" y2="330" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="56" y="333" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">4,000</text>

                        <line x1="60" y1="400" x2="66" y2="400" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="56" y="403" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">5,000</text>

                        {/* Right Two-Way Traveltime (TWT) Axis Panel */}
                        <rect x="874" y="0" width="66" height="440" fill="#030D16" />
                        <line x1="874" y1="0" x2="874" y2="440" stroke="rgba(81, 194, 201, 0.25)" strokeWidth="1" />
                        <text x="907" y="28" fill="rgba(81, 194, 201, 0.85)" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">TWT (s)</text>

                        <line x1="874" y1="50" x2="880" y2="50" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="884" y="53" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">0.0s</text>

                        <line x1="874" y1="120" x2="880" y2="120" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="884" y="123" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">1.5s</text>

                        <line x1="874" y1="190" x2="880" y2="190" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="884" y="193" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">3.0s</text>

                        <line x1="874" y1="260" x2="880" y2="260" stroke="#F6C561" strokeWidth="1.5" />
                        <text x="884" y="263" fill="#F6C561" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">4.5s</text>

                        <line x1="874" y1="330" x2="880" y2="330" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="884" y="333" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">6.0s</text>

                        <line x1="874" y1="400" x2="880" y2="400" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                        <text x="884" y="403" fill="rgba(255, 255, 255, 0.7)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">7.5s</text>

                        {/* Top Orientation Geographic Coordinates */}
                        <text x="80" y="38" fill="rgba(255, 255, 255, 0.85)" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">NE (LIBERIAN SHELF EDGE)</text>
                        <text x="860" y="38" fill="rgba(255, 255, 255, 0.85)" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="end">SW (DEEPWATER HARPER BASIN)</text>

                        {/* Interactive Cursor Dynamic Crosshair Depth Reticle */}
                        {cursorPos && (
                          <g className="geo-cursor-reticle" pointerEvents="none">
                            <line x1="66" y1={cursorPos.y} x2="874" y2={cursorPos.y} stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1={cursorPos.x} y1="0" x2={cursorPos.x} y2="440" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" strokeDasharray="3 3" />
                            <circle cx={cursorPos.x} cy={cursorPos.y} r="4" fill="#2DD4BF" stroke="#04121E" strokeWidth="1.5" />
                            <g transform={`translate(${Math.min(730, Math.max(76, cursorPos.x + 10))}, ${Math.max(20, Math.min(410, cursorPos.y - 14))})`}>
                              <rect width="124" height="22" rx="3" fill="rgba(4, 18, 30, 0.95)" stroke="rgba(81, 194, 201, 0.45)" strokeWidth="1" />
                              <text x="62" y="14.5" fill="#2DD4BF" fontSize="9" fontWeight="700" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                                TVDSS: ~{cursorPos.depth.toLocaleString()}m MSL
                              </text>
                            </g>
                          </g>
                        )}
                      </g>
                    </svg>
                  </div>

                  {/* Figure Footer: Lithological Legend & Fixed Clean Scale Bar */}
                  <div className="geo-diagram-footer">
                    <div className="geo-diagram-legend">
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
                        <span className="geo-swatch geo-basement" aria-hidden="true"></span>
                        <span>Albian Source Kitchen / Basement</span>
                      </div>
                      <div className="geo-legend-item">
                        <span className="geo-swatch geo-fault" aria-hidden="true"></span>
                        <span>Growth Fault Displacements</span>
                      </div>
                    </div>

                    <div className="geo-diagram-scale" aria-label="Scale bar: approximately 30 kilometers horizontal">
                      <div className="scale-marks">
                        <span>0</span>
                        <span>10 km</span>
                        <span>20 km</span>
                        <span>30 km</span>
                      </div>
                      <div className="scale-ruler" aria-hidden="true">
                        <div className="scale-seg"></div>
                        <div className="scale-seg"></div>
                        <div className="scale-seg"></div>
                      </div>
                    </div>
                  </div>
                </>
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
