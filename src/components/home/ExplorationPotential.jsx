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
      desc: 'Upper Cretaceous turbidite reservoirs in a transform margin setting.'
    },
    {
      name: 'Baleine & Calao',
      basin: "Côte d'Ivoire Offshore",
      resource: '~2.5 Billion BOE',
      desc: 'Major deepwater Cretaceous fan systems within a similar depositional framework.'
    },
    {
      name: 'Venus & Graff',
      basin: 'Orange Basin (Namibia)',
      resource: '~4.0 Billion BOE',
      desc: 'Aptian–Cretaceous turbidite systems analogous to West African fan plays.'
    },
    {
      name: 'Liza & Stabroek',
      basin: 'Guyana–Suriname Basin',
      resource: '>11.0 Billion BOE',
      desc: 'Regionally extensive, stacked Cretaceous turbidite complexes in a passive margin setting.'
    }
  ];

  return (
    <section id="exploration-potential" ref={sectionRef} className="section section-dark-navy theme-dark exploration-section">
      <div className="container exploration-container">
        {/* Section Header */}
        <div className={`exploration-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <Eyebrow text="EXPLORATION POTENTIAL" theme="dark" />
          <h2 className="exploration-heading">
            Cretaceous Basin Floor Fan Play
          </h2>
          <p className="exploration-lede">
            Advanced 3D seismic interpretation across Blocks LB-26, LB-30 and LB-31 has mapped multiple high-amplitude Cretaceous turbidite fan systems with significant prospective hydrocarbon potential.
          </p>
        </div>

        {/* Two-Column Technical Geological Presentation */}
        <div className="geological-editorial-grid">
          {/* Left Column: Mechanics & Petroleum System */}
          <div className="geological-narrative-col">
            <h3 className="geological-subheading">
              Geological Mechanics &amp;<br />Petroleum System
            </h3>

            <p className="geological-paragraph">
              The Harper Basin represents a classic transform continental margin, where long-lived subsidence and sediment supply from the West African margin have created an effective deepwater turbidite fairway within the Cretaceous section.
            </p>

            <p className="geological-paragraph">
              Basin floor fan systems are interpreted to have been deposited by channelized and unconfined gravity flows, resulting in laterally extensive, stacked sandstone bodies with favourable thickness, porosity and permeability. These reservoirs are mapped in a basin setting with appropriate source, seal and trap elements, consistent with a working petroleum system.
            </p>

            {/* Refined 3-Row Technical Parameter Table */}
            <div className="geo-specs-box">
              <div className="geo-specs-row">
                <span className="geo-specs-label">PRIMARY RESERVOIR</span>
                <span className="geo-specs-value">Upper Cretaceous Turbidite Sandstones</span>
              </div>
              <div className="geo-specs-row">
                <span className="geo-specs-label">SOURCE ROCK</span>
                <span className="geo-specs-value">Cretaceous–Turonian Marine Shales</span>
              </div>
              <div className="geo-specs-row">
                <span className="geo-specs-label">REGIONAL SEAL</span>
                <span className="geo-specs-value">Tertiary Pelagic Claystones &amp; Shales</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Geological Cross-Section Visual */}
          <div className="geological-visual-col">
            <div className="geological-diagram-card">
              <div className="geological-svg-wrapper">
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
                      <rect width="880" height="410" rx="8" />
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

              {/* Integrated Diagram Legend & Scale Bar */}
              <div className="geological-diagram-footer">
                <div className="geological-legend">
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-sand" aria-hidden="true"></span>
                    <span>Turbidite Fan Sandstone (Reservoir)</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-shale" aria-hidden="true"></span>
                    <span>Deepwater Shale (Seal)</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-slope" aria-hidden="true"></span>
                    <span>Cretaceous Slope Strata</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-basement" aria-hidden="true"></span>
                    <span>Older Strata (Pre-Cretaceous)</span>
                  </div>
                  <div className="geo-legend-item">
                    <span className="geo-swatch geo-fault" aria-hidden="true">
                      <svg viewBox="0 0 20 6" width="20" height="6" fill="none">
                        <line x1="0" y1="3" x2="20" y2="3" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" strokeDasharray="4 3" />
                      </svg>
                    </span>
                    <span>Fault / Growth Fault</span>
                  </div>
                </div>

                <div className="geological-scale-bar">
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

        {/* Human-Crafted Editorial Feature: Expert Insight Panel */}
        <div className={`expert-insight-panel motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="insight-badge-cell">
            <span className="insight-tag">EXPERT INSIGHT</span>
          </div>
          <div className="insight-quote-cell">
            <span className="insight-quote-icon" aria-hidden="true">&ldquo;</span>
            <blockquote className="insight-quote-body">
              Our broadband 3D seismic reprocessing across the RL-003 licence has fundamentally clarified the Upper Cretaceous channel–fan geometry, with amplitude anomalies and AVO Class II/III signatures directly comparable to proven multi-billion-barrel turbidite systems along the conjugate Atlantic margin.
            </blockquote>
          </div>
          <div className="insight-author-cell">
            <div className="insight-author-name">Dr. Jonathan Miller</div>
            <div className="insight-author-role">VP of Geoscience &amp; Subsurface Exploration, BluEnergies Ltd.</div>
          </div>
        </div>

        {/* Proven Atlantic Margin Analogues - Comparative Benchmarks */}
        <div className={`benchmarks-editorial-block motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="benchmarks-header">
            <span className="benchmarks-kicker">COMPARATIVE BENCHMARKS</span>
            <h3 className="benchmarks-title">Proven Atlantic Margin Analogues</h3>
            <p className="benchmarks-lede">
              Geological and stratigraphic characteristics consistent with major Cretaceous turbidite successes along the Atlantic margin.
            </p>
          </div>

          <div className="benchmarks-grid">
            {analogues.map((item, idx) => (
              <div key={idx} className="benchmark-card">
                <h4 className="benchmark-name">{item.name}</h4>
                <div className="benchmark-basin">{item.basin}</div>
                <div className="benchmark-resource-pill">
                  <span className="res-prefix">RESOURCES:</span>
                  <span className="res-amount">{item.resource}</span>
                </div>
                <p className="benchmark-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Regulatory Disclosure Bar (NI 51-101 Compliant) */}
        <div className={`regulatory-bar motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="regulatory-bar-accent" aria-hidden="true"></div>
          <div className="regulatory-bar-label">
            REGULATORY DISCLOSURE (TSX.V: BLU)
          </div>
          <p className="regulatory-bar-text">
            Prospective resources are un-risked estimates of petroleum that may potentially be recovered by the application of future development projects. The evaluation of hydrocarbon potential is subject to significant uncertainties, including geological, geophysical, and commercial risks. There is no guarantee that a discovery will be made, and no assurance that any resources will be commercially recoverable.
          </p>
        </div>
      </div>
    </section>
  );
}
