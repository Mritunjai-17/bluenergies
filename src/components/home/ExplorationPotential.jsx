'use client';

import Eyebrow from '../ui/Eyebrow';
import { useInView } from '../../hooks/useMotion';

export default function ExplorationPotential() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const analogues = [
    {
      name: 'Jubilee & TEN',
      basin: 'Tano Basin (Ghana)',
      resource: '~2.1 Billion BOE',
      desc: 'Upper Cretaceous turbidite reservoirs in a conjugate transform margin setting.'
    },
    {
      name: 'Baleine & Calao',
      basin: "Côte d'Ivoire Offshore",
      resource: '~2.5 Billion BOE',
      desc: 'Major deepwater Cretaceous fan systems within a similar depositional and subsidence framework.'
    },
    {
      name: 'Venus & Graff',
      basin: 'Orange Basin (Namibia)',
      resource: '~4.0 Billion BOE',
      desc: 'Aptian–Cretaceous turbidite fan systems directly analogous to West African deepwater plays.'
    },
    {
      name: 'Liza & Stabroek',
      basin: 'Guyana–Suriname Basin',
      resource: '>11.0 Billion BOE',
      desc: 'Stacked Cretaceous turbidite complexes along the South American conjugate passive margin.'
    }
  ];

  return (
    <section id="exploration-potential" ref={sectionRef} className="section section-dark-navy theme-dark exploration-section">
      <div className="container exploration-container">
        {/* =========================================================
           1. SECTION HEADER (REFINED EDITORIAL TYPOGRAPHY)
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
              {/* Figure Header Bar (Scientific Paper Metadata) */}
              <div className="geo-diagram-header">
                <div className="geo-diagram-meta-left">
                  <span className="geo-fig-id">FIG. 4.1</span>
                  <span className="geo-fig-divider" aria-hidden="true">&bull;</span>
                  <span className="geo-fig-title">Harper Basin Depositional Architecture &bull; Regional Dip Section</span>
                </div>
                <div className="geo-diagram-meta-right">
                  <span className="geo-datum-tag">DATUM: MEAN SEA LEVEL (MSL)</span>
                </div>
              </div>

              {/* The Technical Cross-Section Canvas */}
              <div className="geo-svg-stage">
                <svg
                  viewBox="0 0 880 410"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="geological-cross-svg"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Geological Cross-Section showing Cretaceous continental slope, submarine canyon, basin floor, and stacked turbidite fan reservoir deposits"
                >
                  <defs>
                    <linearGradient id="oceanWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#03101B" />
                      <stop offset="50%" stopColor="#072033" />
                      <stop offset="100%" stopColor="#0B2E48" />
                    </linearGradient>

                    <linearGradient id="canyonInfillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0A2C44" />
                      <stop offset="100%" stopColor="#114766" />
                    </linearGradient>

                    <linearGradient id="fanSandMainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC972B" />
                      <stop offset="30%" stopColor="#F6C561" />
                      <stop offset="65%" stopColor="#F9D47F" />
                      <stop offset="100%" stopColor="#E39D32" />
                    </linearGradient>

                    <linearGradient id="fanSandUpperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#CF8920" />
                      <stop offset="50%" stopColor="#EFAF44" />
                      <stop offset="100%" stopColor="#D8952B" />
                    </linearGradient>

                    <linearGradient id="fanSandBasalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B37415" />
                      <stop offset="50%" stopColor="#DC972B" />
                      <stop offset="100%" stopColor="#BA7B19" />
                    </linearGradient>

                    <clipPath id="diagramCanvasClip">
                      <rect width="880" height="410" rx="4" />
                    </clipPath>
                  </defs>

                  <g clipPath="url(#diagramCanvasClip)">
                    {/* Dark Canvas Background */}
                    <rect width="880" height="410" fill="#04121E" />

                    {/* Depth Axis Column Background */}
                    <rect x="0" y="0" width="58" height="410" fill="#030D16" />
                    <line x1="58" y1="0" x2="58" y2="410" stroke="rgba(81, 194, 201, 0.25)" strokeWidth="1" />

                    {/* Depth Axis Header & Ticks */}
                    <text x="29" y="30" fill="rgba(81, 194, 201, 0.75)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">Depth (m)</text>

                    <line x1="52" y1="95" x2="58" y2="95" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                    <text x="48" y="98" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">1,000</text>

                    <line x1="52" y1="165" x2="58" y2="165" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                    <text x="48" y="168" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">2,000</text>

                    <line x1="52" y1="235" x2="58" y2="235" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                    <text x="48" y="238" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">3,000</text>

                    <line x1="52" y1="305" x2="58" y2="305" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                    <text x="48" y="308" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">4,000</text>

                    <line x1="52" y1="375" x2="58" y2="375" stroke="rgba(81, 194, 201, 0.5)" strokeWidth="1" />
                    <text x="48" y="378" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" textAnchor="end">5,000</text>

                    {/* Section Orientation Indicators */}
                    <text x="80" y="34" fill="rgba(255, 255, 255, 0.9)" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="700">SW</text>
                    <text x="850" y="34" fill="rgba(255, 255, 255, 0.9)" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="700">NE</text>

                    {/* Geological Strata 1: Basement (Deep Pre-Cretaceous) */}
                    <path
                      d="M58 410 L880 410 L880 345 C750 350 630 352 500 346 C380 340 250 315 150 282 L58 250 Z"
                      fill="#061622"
                    />

                    {/* Geological Strata 2: Older Strata (Pre-Cretaceous) */}
                    <path
                      d="M58 250 L150 282 C250 315 380 340 500 346 C630 352 750 350 880 345 L880 295 C740 300 610 295 480 285 C360 274 230 238 130 196 L58 170 Z"
                      fill="#0D2232"
                    />

                    {/* Geological Strata 3: Cretaceous Slope Strata */}
                    <path
                      d="M58 75 L180 88 C320 142 460 198 460 198 L880 206 L880 295 C740 300 610 295 480 285 C360 274 230 238 130 196 L58 170 Z"
                      fill="#103248"
                    />

                    {/* Cretaceous Strata Layering Lines */}
                    <path d="M70 115 C170 140 280 180 420 215" stroke="rgba(81, 194, 201, 0.14)" strokeWidth="0.9" />
                    <path d="M90 145 C200 175 320 215 450 248" stroke="rgba(81, 194, 201, 0.14)" strokeWidth="0.9" />

                    {/* Geological Strata 4: Deepwater Marine Shale (Regional Seal) */}
                    <path
                      d="M340 215 C440 204 570 200 700 204 C780 208 880 212 880 235 C880 252 770 248 650 242 C530 238 410 234 340 225 Z"
                      fill="#1E4342"
                    />

                    {/* Incised Submarine Feeder Canyon Throat */}
                    <path
                      d="M260 120 C310 142 370 178 440 204 C390 215 330 185 260 120 Z"
                      fill="url(#canyonInfillGrad)"
                      opacity="0.88"
                    />

                    {/* Stacked Turbidite Fan Sandstone Lobe 3 (Basal / Deep) */}
                    <path
                      d="M440 272 C520 256 650 252 770 260 C830 264 860 275 830 282 C760 292 615 292 520 288 C470 285 425 280 440 272 Z"
                      fill="url(#fanSandBasalGrad)"
                      opacity="0.9"
                    />

                    {/* Stacked Turbidite Fan Sandstone Lobe 2 (Main Reservoir Target) */}
                    <path
                      d="M410 248 C490 230 635 224 765 236 C830 242 860 255 825 263 C750 274 575 274 490 268 C440 264 390 256 410 248 Z"
                      fill="url(#fanSandMainGrad)"
                      stroke="#F6C561"
                      strokeWidth="1.2"
                    />

                    {/* Stacked Turbidite Fan Sandstone Lobe 1 (Upper Lobe) */}
                    <path
                      d="M470 230 C540 216 660 213 770 221 C825 226 850 236 820 242 C760 252 625 250 540 246 C495 243 450 238 470 230 Z"
                      fill="url(#fanSandUpperGrad)"
                      opacity="0.9"
                    />

                    {/* Ocean Water Column */}
                    <path
                      d="M58 0 L880 0 L880 206 L460 198 C320 142 180 88 58 75 Z"
                      fill="url(#oceanWaterGrad)"
                    />
                    <path
                      d="M58 75 L180 88 C320 142 460 198 460 198 L880 206"
                      stroke="#48A7C5"
                      strokeWidth="1.4"
                    />

                    {/* Growth Fault Displacements */}
                    <line x1="560" y1="230" x2="520" y2="390" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" strokeDasharray="4 3" />
                    <line x1="720" y1="245" x2="685" y2="390" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" strokeDasharray="4 3" />
                    <line x1="840" y1="260" x2="810" y2="390" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" strokeDasharray="4 3" />

                    {/* Annotation 1: Seabed */}
                    <text x="430" y="66" fill="#F1F5F9" fontSize="10.5" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">Seabed</text>
                    <line x1="430" y1="72" x2="410" y2="105" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="410" cy="105" r="2.5" fill="#FFFFFF" />

                    {/* Annotation 2: Submarine Channel (Feeder System) */}
                    <text x="495" y="142" fill="#F1F5F9" fontSize="10" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">Submarine Channel</text>
                    <text x="495" y="155" fill="rgba(255, 255, 255, 0.75)" fontSize="8.5" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">(Feeder System)</text>
                    <line x1="495" y1="162" x2="480" y2="200" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="480" cy="200" r="2.5" fill="#FFFFFF" />

                    {/* Annotation 3: Water Depth */}
                    <text x="785" y="100" fill="rgba(255, 255, 255, 0.85)" fontSize="9" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">Water Depth</text>
                    <text x="785" y="113" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">~1,900 – 2,400 m</text>

                    {/* Annotation 4: Basin Floor Fan (Turbidite Deposit) */}
                    <text x="615" y="165" fill="#F1F5F9" fontSize="10" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">Basin Floor Fan</text>
                    <text x="615" y="178" fill="rgba(255, 255, 255, 0.75)" fontSize="8.5" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">(Turbidite Deposit)</text>
                    <line x1="615" y1="184" x2="635" y2="232" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="635" cy="232" r="2.5" fill="#FFFFFF" />

                    {/* Annotation 5: Prospect Trajectory Callout & Wellbore Target */}
                    <g className={`callout-trajectory ${inView ? 'trajectory-active' : ''}`}>
                      <g transform="translate(675, 58)">
                        <rect width="134" height="25" rx="3" fill="#061826" stroke="#E5A84B" strokeWidth="1.3" />
                        <text x="67" y="16.5" fill="#F1F5F9" fontSize="9.5" fontWeight="600" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Prospect Trajectory</text>
                      </g>
                      <line x1="705" y1="83" x2="685" y2="252" stroke="#E5A84B" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="685" cy="252" r="9" fill="none" stroke="#E5A84B" strokeWidth="1.4" />
                      <circle cx="685" cy="252" r="3.5" fill="#E5A84B" />
                    </g>

                    {/* Stratigraphic Section Labels (Bottom Right) */}
                    <text x="775" y="348" fill="rgba(255, 255, 255, 0.8)" fontSize="9.5" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">Cretaceous Section</text>
                    <text x="775" y="380" fill="rgba(255, 255, 255, 0.55)" fontSize="9" fontWeight="600" fontFamily="'Hanken Grotesk', system-ui, sans-serif" textAnchor="middle">Basement</text>
                  </g>
                </svg>
              </div>

              {/* Diagram Legend & Scale Bar (Unboxed, Figure Caption Flow) */}
              <div className="geo-diagram-footer">
                <div className="geo-diagram-legend">
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-sand" aria-hidden="true"></span>
                    <span>Turbidite Fan Sandstone (Reservoir)</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-shale" aria-hidden="true"></span>
                    <span>Deepwater Marine Shale (Seal)</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-slope" aria-hidden="true"></span>
                    <span>Cretaceous Slope Strata</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-basement" aria-hidden="true"></span>
                    <span>Pre-Cretaceous Basement</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-fault" aria-hidden="true">
                      <svg viewBox="0 0 18 4" width="18" height="4" fill="none">
                        <line x1="0" y1="2" x2="18" y2="2" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" strokeDasharray="3 2" />
                      </svg>
                    </span>
                    <span>Growth Fault</span>
                  </div>
                </div>

                <div className="geo-diagram-scale">
                  <div className="scale-marks">
                    <span>0</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30 km</span>
                  </div>
                  <div className="scale-ruler" aria-hidden="true">
                    <div className="scale-seg"></div>
                    <div className="scale-seg"></div>
                    <div className="scale-seg"></div>
                  </div>
                </div>
              </div>
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

          <div className="analogues-strip">
            {analogues.map((item, idx) => (
              <div key={idx} className={`analogue-entry motion-fade-up stagger-${idx + 1} ${inView ? 'is-in-view' : ''}`}>
                <div className="analogue-topline">
                  <span className="analogue-index">0{idx + 1}</span>
                  <span className="analogue-basin-tag">{item.basin}</span>
                </div>

                <h4 className="analogue-name">{item.name}</h4>

                <div className="analogue-resource-metric">
                  <span className="analogue-metric-label">PROVEN RESOURCE</span>
                  <span className="analogue-metric-val">{item.resource}</span>
                </div>

                <p className="analogue-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
           5. REGULATORY DISCLOSURE FOOTNOTE (NI 51-101 COMPLIANT)
           ========================================================= */}
        <footer className={`regulatory-disclosure-footnote motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
          <div className="regulatory-footnote-indicator" aria-hidden="true"></div>
          <div className="regulatory-footnote-content">
            <span className="regulatory-footnote-tag">STATUTORY REGULATORY DISCLOSURE (TSX.V: BLU &bull; OTCQX: BLUGF)</span>
            <p className="regulatory-footnote-text">
              Prospective resources are un-risked estimates of petroleum that may potentially be recovered by the application of future development projects. The evaluation of hydrocarbon potential is subject to significant uncertainties, including geological, geophysical, and commercial risks. There is no guarantee that a discovery will be made, and no assurance that any resources will be commercially recoverable.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
