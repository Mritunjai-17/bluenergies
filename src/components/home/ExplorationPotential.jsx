import Eyebrow from '../ui/Eyebrow';

export default function ExplorationPotential() {
  const analogues = [
    {
      field: 'Jubilee & TEN',
      region: 'Ghana (Tano Basin)',
      similarity: 'Upper Cretaceous stratigraphic turbidite channel-fan plays sealed by regional marine shales.'
    },
    {
      field: 'Baleine & Calao',
      region: "Côte d'Ivoire (Offshore)",
      similarity: 'Major deepwater oil and gas discoveries in adjacent transform margin basin settings.'
    },
    {
      field: 'Venus & Graff',
      region: 'Namibia (Orange Basin)',
      similarity: 'Aptian-Cretaceous basin floor fan complexes sharing high net-to-gross reservoir characteristics.'
    },
    {
      field: 'Liza & Stabroek',
      region: 'Guyana-Suriname Basin',
      similarity: 'Equatorial Atlantic conjugate margin analogue with multi-billion barrel turbidite fan reservoirs.'
    }
  ];

  return (
    <section id="exploration-potential" className="section section-dark-navy theme-dark exploration-section">
      <div className="container">
        {/* Section Header */}
        <div className="exploration-header">
          <Eyebrow text="EXPLORATION POTENTIAL" theme="dark" />
          <h2 className="exploration-heading">
            Cretaceous Basin Floor Fan Play
          </h2>
          <p className="exploration-lede">
            Advanced 3D seismic interpretation across Blocks LB-26, LB-30, and LB-31 has mapped multiple high-amplitude Cretaceous turbidite fan systems with significant prospective hydrocarbon potential.
          </p>
        </div>

        {/* Two-Column Editorial Geological Presentation */}
        <div className="geological-editorial-grid">
          {/* Left Column: Technical Narrative & Petroleum System */}
          <div className="geological-narrative-col">
            <h3 className="geological-subheading">
              Geological Mechanics &amp;<br />Petroleum System
            </h3>

            <p className="geological-paragraph">
              The Harper Basin represents a classic transform continental margin. Submarine canyons incised during the Mid-to-Late Cretaceous transported coarse clastic sands onto the deep ocean floor, depositing stacked turbidite fan lobes with high reservoir quality.
            </p>

            <p className="geological-paragraph">
              Rich Cenomanian-Turonian marine organic-rich shales act as prime oil-prone source kitchens, while subsequent thick pelagic clay blankets form impermeable top and lateral seals. Seismic amplitude anomalies and amplitude-versus-offset (AVO) signatures indicate the presence of hydrocarbon-bearing porous sandstone reservoirs.
            </p>
          </div>

          {/* Right Column: High-Fidelity Geological Cross-Section Visual */}
          <div className="geological-visual-col">
            <div className="geological-diagram-card">
              <div className="geological-svg-wrapper">
                <svg
                  viewBox="0 0 740 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="geological-cross-svg"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Geological Cross-Section showing Cretaceous continental slope, submarine canyon, basin floor, and stacked turbidite fan reservoir deposits"
                >
                  <defs>
                    {/* Deep Oceanic Water Column Gradient */}
                    <linearGradient id="oceanWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#051826" />
                      <stop offset="60%" stopColor="#082338" />
                      <stop offset="100%" stopColor="#0A2C46" />
                    </linearGradient>

                    {/* Submarine Canyon Infill Gradient */}
                    <linearGradient id="canyonWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0B2F4A" />
                      <stop offset="100%" stopColor="#124D6E" />
                    </linearGradient>

                    {/* Turbidite Sandstone Reservoir Golden Gradient */}
                    <linearGradient id="turbiditeSandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DF9F3D" />
                      <stop offset="25%" stopColor="#F5BE58" />
                      <stop offset="55%" stopColor="#F8C96C" />
                      <stop offset="85%" stopColor="#E5A844" />
                      <stop offset="100%" stopColor="#D49332" />
                    </linearGradient>

                    {/* Clip path for entire canvas */}
                    <clipPath id="diagramClip">
                      <rect width="740" height="340" rx="8" />
                    </clipPath>
                  </defs>

                  <g clipPath="url(#diagramClip)">
                    {/* Card Canvas Deep Background */}
                    <rect width="740" height="340" fill="#061A28" />

                    {/* 1. Deep Ocean Water Column above Seabed */}
                    <path
                      d="M0 0 L740 0 L740 205 L365 205 C355 212 345 215 335 215 C325 215 315 210 305 202 C250 178 120 142 0 105 Z"
                      fill="url(#oceanWaterGrad)"
                    />

                    {/* Water Column Bathymetric Depth & Internal Waves */}
                    <path d="M0 65 C140 105 280 155 330 175 L740 175" stroke="rgba(81, 194, 201, 0.08)" strokeWidth="1" strokeDasharray="5 5" />
                    <path d="M0 90 C140 130 280 180 330 195 L740 195" stroke="rgba(81, 194, 201, 0.12)" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Submarine Canyon Channel Infill Water */}
                    <path
                      d="M305 202 C318 214 330 216 340 214 C352 211 358 206 365 205 L365 212 C355 218 340 220 330 218 C318 215 310 208 305 202 Z"
                      fill="url(#canyonWaterGrad)"
                      opacity="0.8"
                    />

                    {/* Seabed Mudline (Water-to-Rock Boundary) */}
                    <path
                      d="M0 105 C120 142 250 178 305 202 C318 214 330 216 340 214 C352 211 358 206 365 205 L740 205"
                      stroke="#51C2C9"
                      strokeWidth="1.8"
                      fill="none"
                    />

                    {/* 2. CONTINENTAL SLOPE STRATA (Dipping Layers & Fine Seismic Bedding Lines) */}
                    {/* Interval A: Upper Slope Pelagic Sediments (#4B6B82) */}
                    <path d="M0 105 C120 142 250 178 305 202 C318 214 330 216 340 214 L340 226 C260 226 130 185 0 135 Z" fill="#4B6B82" />
                    <path d="M0 112 C120 148 245 186 312 210" stroke="rgba(0,0,0,0.35)" strokeWidth="0.8" />
                    <path d="M0 119 C120 155 245 192 318 214" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
                    <path d="M0 127 C120 163 245 200 326 218" stroke="rgba(0,0,0,0.35)" strokeWidth="0.8" />

                    {/* Interval B: Mid-Slope Siltstones & Channel Levees (#3A5263) */}
                    <path d="M0 135 C130 185 260 226 340 226 L342 248 C260 248 130 205 0 162 Z" fill="#3A5263" />
                    <path d="M0 141 C130 190 260 230 330 230" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />
                    <path d="M0 148 C130 196 260 236 333 236" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
                    <path d="M0 155 C130 201 260 242 336 242" stroke="rgba(0,0,0,0.35)" strokeWidth="0.8" />

                    {/* Interval C: Cenomanian-Turonian Marine Organic Shales - Source Kitchen (#2E4453) */}
                    <path d="M0 162 C130 205 260 248 342 248 L345 272 C260 272 130 228 0 192 Z" fill="#2E4453" />
                    <path d="M0 169 C130 211 260 252 338 252" stroke="rgba(0,0,0,0.45)" strokeWidth="0.85" />
                    <path d="M0 176 C130 217 260 258 340 258" stroke="rgba(81,194,201,0.2)" strokeWidth="0.8" strokeDasharray="8 4" />
                    <path d="M0 184 C130 223 260 264 342 264" stroke="rgba(0,0,0,0.45)" strokeWidth="0.85" />

                    {/* Interval D: Lower Cretaceous Clastics & Interbedded Sandstones (#385060) */}
                    <path d="M0 192 C130 228 260 272 345 272 L348 298 C260 298 130 252 0 224 Z" fill="#385060" />
                    <path d="M0 200 C130 235 260 278 344 278" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />
                    <path d="M0 208 C130 241 260 284 345 284" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
                    <path d="M0 216 C130 247 260 290 346 290" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />

                    {/* Interval E: Deep Syn-Rift / Pre-Rift Clastic Foundation (#253846) */}
                    <path d="M0 224 C130 252 260 298 348 298 L352 320 C260 320 130 278 0 258 Z" fill="#253846" />
                    <path d="M0 232 C130 260 260 304 348 304" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />
                    <path d="M0 240 C130 267 260 310 350 310" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
                    <path d="M0 249 C130 273 260 315 351 315" stroke="rgba(0,0,0,0.45)" strokeWidth="0.8" />

                    {/* Interval F: Deep Continental Basement Rock (#182733) */}
                    <path d="M0 258 C130 278 260 320 352 320 L355 340 L0 340 Z" fill="#182733" />
                    <path d="M0 272 C100 292 200 326 352 328" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
                    <path d="M0 290 C100 308 200 334 353 336" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
                    <path d="M0 312 C100 325 200 338 354 340" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />

                    {/* 3. BASIN FLOOR SEDIMENTARY ARCHITECTURE (Right Side from x=365 to x=740) */}
                    {/* Top Seal: Pelagic Clay Blanket Formation (#4C6575) */}
                    <path
                      d="M365 205 L740 205 L740 230 C640 230 480 224 365 205 Z"
                      fill="#4C6575"
                    />
                    <path d="M370 211 L740 211" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />
                    <path d="M375 217 L740 217" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
                    <path d="M380 223 L740 223" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />

                    {/* Source Kitchen beneath Fan: Marine Organic Shales (#304859) */}
                    <path
                      d="M346 288 C450 298 560 302 740 286 L740 322 C560 326 450 324 350 318 Z"
                      fill="#304859"
                    />
                    <path d="M348 296 C450 304 560 308 740 293" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />
                    <path d="M349 304 C450 310 560 314 740 301" stroke="rgba(81,194,201,0.18)" strokeWidth="0.8" strokeDasharray="8 4" />
                    <path d="M350 311 C450 316 560 319 740 310" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />

                    {/* Basal Deep Oceanic Crust Foundation (#182733) */}
                    <path
                      d="M350 318 L740 322 L740 340 L352 340 Z"
                      fill="#182733"
                    />
                    <path d="M351 328 L740 330" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />

                    {/* 4. CRETACEOUS TURBIDITE FAN DEPOSITS (Warm Sandstone Reservoir with Internal Lobe Strata) */}
                    {/* Main Lenticular Turbidite Fan Body */}
                    <path
                      d="M335 226 C415 216 540 216 675 230 C705 234 718 244 702 254 C645 282 525 300 415 300 C355 300 325 272 335 226 Z"
                      fill="url(#turbiditeSandGrad)"
                    />

                    {/* Fine Internal Turbidite Lobe Splays & Cross-Bedding Reflectors */}
                    <path d="M340 236 C420 226 530 226 665 238" stroke="#A86E18" strokeWidth="1.1" strokeDasharray="6 3" />
                    <path d="M344 245 C430 238 540 239 652 249" stroke="#945F12" strokeWidth="1.1" />
                    <path d="M350 256 C440 250 540 252 638 261" stroke="#A86E18" strokeWidth="1" strokeDasharray="8 4" />
                    <path d="M358 268 C445 264 540 266 620 274" stroke="#945F12" strokeWidth="1.1" />
                    <path d="M370 279 C450 277 535 279 600 285" stroke="#A86E18" strokeWidth="1" strokeDasharray="6 3" />
                    <path d="M388 290 C455 288 525 290 580 294" stroke="#945F12" strokeWidth="0.9" />

                    {/* Internal Cross-stratification highlights */}
                    <path d="M420 232 C430 236 440 242 445 245" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                    <path d="M480 234 C490 238 500 244 505 248" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                    <path d="M540 238 C550 242 560 248 565 252" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />

                    {/* Label inside Fan: Turbidite Fan Deposits */}
                    <text
                      x="495"
                      y="266"
                      fill="#071B29"
                      fontSize="13.5"
                      fontWeight="700"
                      fontFamily="'Hanken Grotesk', system-ui, sans-serif"
                      textAnchor="middle"
                      letterSpacing="0.01em"
                    >
                      Turbidite Fan Deposits
                    </text>

                    {/* 5. TECHNICAL CALLOUT PINS & ANNOTATIONS */}
                    {/* Callout 1: Continental Slope */}
                    <g className="callout-slope">
                      <circle cx="232" cy="142" r="3.5" fill="#FFFFFF" />
                      <line x1="232" y1="142" x2="264" y2="88" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text
                        x="268"
                        y="84"
                        fill="#FFFFFF"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="'Hanken Grotesk', system-ui, sans-serif"
                      >
                        Continental Slope
                      </text>
                    </g>

                    {/* Callout 2: Submarine Canyon */}
                    <g className="callout-canyon">
                      <circle cx="336" cy="206" r="3.5" fill="#FFFFFF" />
                      <line x1="336" y1="206" x2="368" y2="136" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text
                        x="372"
                        y="126"
                        fill="#FFFFFF"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="'Hanken Grotesk', system-ui, sans-serif"
                      >
                        Submarine
                        <tspan x="372" y="140">Canyon</tspan>
                      </text>
                    </g>

                    {/* Callout 3: Basin Floor */}
                    <g className="callout-floor">
                      <circle cx="530" cy="206" r="3.5" fill="#FFFFFF" />
                      <line x1="530" y1="206" x2="530" y2="164" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text
                        x="530"
                        y="156"
                        fill="#FFFFFF"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="'Hanken Grotesk', system-ui, sans-serif"
                        textAnchor="middle"
                      >
                        Basin Floor
                      </text>
                    </g>

                    {/* Callout 4: Prospect Trajectory (Curved Trajectory & Target) */}
                    <g className="callout-trajectory">
                      <path
                        d="M590 85 C586 135 576 190 566 250"
                        stroke="#E5A84B"
                        strokeWidth="2.4"
                        strokeDasharray="5 4"
                        fill="none"
                      />

                      {/* Target Node in Reservoir */}
                      <circle cx="566" cy="250" r="4.5" fill="#E5A84B" stroke="#071B29" strokeWidth="1.5" />
                      <circle cx="566" cy="250" r="8.5" fill="none" stroke="#E5A84B" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.85" />

                      {/* Top Trajectory Badge & Arrow */}
                      <g transform="translate(605, 52)">
                        <rect width="124" height="28" rx="5" fill="#071B29" stroke="#E5A84B" strokeWidth="1.4" />
                        <text
                          x="62"
                          y="18.5"
                          fill="#FFFFFF"
                          fontSize="10.5"
                          fontWeight="600"
                          fontFamily="'Hanken Grotesk', system-ui, sans-serif"
                          textAnchor="middle"
                        >
                          Prospect Trajectory
                        </text>
                      </g>
                      <path d="M605 68 L594 76" stroke="#FFFFFF" strokeWidth="1.2" />
                      <polygon points="590,80 596,74 593,71" fill="#FFFFFF" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Diagram Legend */}
              <div className="geological-legend">
                <div className="geo-legend-item">
                  <span className="geo-swatch geo-sand" aria-hidden="true"></span>
                  <span>Turbidite sand (reservoir)</span>
                </div>
                <div className="geo-legend-item">
                  <span className="geo-swatch geo-shale" aria-hidden="true"></span>
                  <span>Shale (source rock)</span>
                </div>
                <div className="geo-legend-item">
                  <span className="geo-swatch geo-clay" aria-hidden="true"></span>
                  <span>Clay (seal)</span>
                </div>
                <div className="geo-legend-item">
                  <span className="geo-swatch geo-trajectory" aria-hidden="true">
                    <svg viewBox="0 0 20 6" width="20" height="6" fill="none">
                      <line x1="0" y1="3" x2="20" y2="3" stroke="#E5A84B" strokeWidth="2" strokeDasharray="4 3" />
                    </svg>
                  </span>
                  <span>Prospect trajectory</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proven Atlantic Margin Analogues - Editorial Comparison Row */}
        <div className="analogues-editorial-block">
          <div className="analogues-title-col">
            <h3 className="analogues-heading">
              Proven Atlantic<br />Margin Analogues
            </h3>
          </div>

          <div className="analogues-columns-grid">
            {analogues.map((a, i) => (
              <div key={i} className="analogue-col-item">
                <div className="analogue-field-name">{a.field}</div>
                <div className="analogue-basin-region">{a.region}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Regulatory Disclosure Box */}
        <div className="regulatory-disclosure-card">
          <p className="regulatory-disclosure-text">
            <strong className="regulatory-disclosure-prefix">Regulatory Disclosure regarding Exploration Assets:</strong>{' '}
            Prospective resources are estimated quantities of petroleum that may potentially be recovered by the application of future development projects. These prospective resources are undiscovered and have both an associated risk of discovery and a risk of development. There is no certainty that any portion of the resources will be discovered or, if discovered, will be commercially viable. BluEnergies Ltd. has not yet drilled an exploration well or established commercial production in Reconnaissance Licence RL-003.
          </p>
        </div>
      </div>
    </section>
  );
}
