'use client';

import { useState, useEffect } from 'react';

/**
 * Editorial Geological Cross-Section & Storytelling Component
 * Features an authentic scientific schematic of the Cretaceous Basin Floor Fan Play,
 * detailed petroleum systems annotations, and an expandable high-resolution lightbox.
 */
export default function GeologicalStorytelling() {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed]);

  const renderSvgDiagram = (isModal = false) => (
    <svg
      viewBox="0 0 1200 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isModal ? 'geo-diagram-svg is-modal' : 'geo-diagram-svg'}
      aria-label="Geological Cross-Section Model of Cretaceous Basin Floor Fans"
    >
      <defs>
        {/* Layer Gradients */}
        <linearGradient id="geoWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#041826" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#072A40" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="geoBasementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B202D" />
          <stop offset="100%" stopColor="#06141D" />
        </linearGradient>

        <linearGradient id="geoShaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D344E" />
          <stop offset="100%" stopColor="#092234" />
        </linearGradient>

        <linearGradient id="geoFanSandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#126875" />
          <stop offset="50%" stopColor="#1AA5A5" />
          <stop offset="100%" stopColor="#51C2C9" />
        </linearGradient>

        <linearGradient id="geoAvoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5A93C" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C97B1A" stopOpacity="0.65" />
        </linearGradient>
      </defs>

      {/* 1. Deepwater Column (0m to 3,200m) */}
      <rect x="0" y="0" width="1200" height="260" fill="url(#geoWaterGrad)" />

      {/* 2. Crystalline Basement / Syn-Rift Fault Blocks */}
      <path
        d="M0 500 L240 480 L440 540 L680 510 L940 560 L1200 530 L1200 680 L0 680 Z"
        fill="url(#geoBasementGrad)"
      />

      {/* 3. Deep Marine Source Shales (Cenomanian - Turonian Kitchen) */}
      <path
        d="M0 400 C280 370 520 440 820 420 C1020 410 1120 450 1200 440 L1200 550 L0 520 Z"
        fill="url(#geoShaleGrad)"
      />

      {/* 4. Continental Slope Mudline (Seafloor) */}
      <path
        d="M0 160 C180 180 360 270 560 300 C800 320 1020 315 1200 310"
        stroke="#51C2C9"
        strokeWidth="2.5"
        strokeDasharray="none"
      />

      {/* 5. Submarine Channel / Slope Canyons */}
      <path
        d="M160 210 Q 300 270 420 340"
        stroke="rgba(81, 194, 201, 0.45)"
        strokeWidth="3"
        strokeDasharray="4 4"
      />
      <path
        d="M220 230 Q 360 290 480 360"
        stroke="rgba(81, 194, 201, 0.35)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* 6. Cretaceous Basin Floor Turbidite Fans (Stacked Lobes) */}
      {/* Lobe 1 (Deepest) */}
      <ellipse
        cx="720"
        cy="470"
        rx="180"
        ry="24"
        transform="rotate(-4 720 470)"
        fill="url(#geoFanSandGrad)"
        opacity="0.8"
      />
      {/* Lobe 2 (Main Target with AVO Anomaly) */}
      <ellipse
        cx="780"
        cy="435"
        rx="210"
        ry="30"
        transform="rotate(-3 780 435)"
        fill="url(#geoAvoGlow)"
        stroke="#E5A93C"
        strokeWidth="1.5"
      />
      {/* Lobe 3 (Upper Pinchout) */}
      <ellipse
        cx="840"
        cy="395"
        rx="160"
        ry="22"
        transform="rotate(-2 840 395)"
        fill="url(#geoFanSandGrad)"
        opacity="0.9"
      />

      {/* 7. Stratigraphic Pinch-out Trapping Line */}
      <path
        d="M580 440 C660 410 740 380 980 400"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />

      {/* 8. Wellbore Exploration Trajectory */}
      <g className="geo-wellbore-group">
        <line x1="790" y1="40" x2="790" y2="100" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="790" cy="40" r="5" fill="#E5A93C" />
        <path
          d="M790 100 C790 220 785 320 780 435"
          stroke="#E5A93C"
          strokeWidth="2.5"
          strokeDasharray="7 4"
        />
        <circle cx="780" cy="435" r="6" fill="#E5A93C" stroke="#FFFFFF" strokeWidth="2" />
      </g>

      {/* Annotations & Text Callouts */}
      <g className="geo-labels-group" fontFamily="var(--body)" fontSize="11" fill="#FFFFFF">
        {/* Sea Surface / Rig */}
        <text x="805" y="45" fill="#E5A93C" fontWeight="700" letterSpacing="0.08em">CANDIDATE DRILLING LOCATION</text>
        <text x="805" y="62" fill="rgba(255,255,255,0.7)" fontSize="10">Deepwater Fairway (1,500m - 3,200m Bathymetry)</text>

        {/* Slope mudline */}
        <text x="32" y="150" fill="#51C2C9" fontWeight="600" letterSpacing="0.06em">CONTINENTAL SHELF / SLOPE TRANSITION</text>
        <text x="440" y="325" fill="rgba(81,194,201,0.85)" fontSize="10">Submarine Channel Bypass Canyons</text>

        {/* Reservoir Fan Target */}
        <rect x="760" y="475" width="260" height="42" rx="4" fill="rgba(7,27,41,0.85)" stroke="rgba(229,169,60,0.5)" />
        <text x="772" y="492" fill="#E5A93C" fontWeight="700" fontSize="11">PRIMARY TURBIDITE FAN TARGET</text>
        <text x="772" y="507" fill="rgba(255,255,255,0.8)" fontSize="10">Class II/III AVO Seismic Bright Spot Anomaly</text>

        {/* Source Kitchen */}
        <text x="40" y="440" fill="rgba(255,255,255,0.85)" fontWeight="600">Cenomanian–Turonian Marine Source Kitchen</text>
        <text x="40" y="456" fill="rgba(220,235,245,0.65)" fontSize="10">Thermally Mature Marine Shales • Active Hydrocarbon Seepage</text>

        {/* Basement */}
        <text x="40" y="590" fill="rgba(255,255,255,0.45)" fontSize="10" letterSpacing="0.08em">SYN-RIFT TRANSFORM BASEMENT</text>
      </g>
    </svg>
  );

  return (
    <div className="geo-storytelling-card">
      <div className="geo-diagram-header">
        <div className="geo-diagram-meta">
          <span className="geo-diagram-badge">
            <span className="geo-diagram-dot" aria-hidden="true"></span>
            SUBSURFACE PETROLEUM SYSTEM MODEL
          </span>
          <span className="geo-diagram-scale">HARPER BASIN &bull; BLOCKS LB-26, 30 &amp; 31</span>
        </div>
        <button
          type="button"
          className="geo-zoom-btn"
          onClick={() => setIsZoomed(true)}
          aria-label="Enlarge Geological Diagram"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
          <span>Enlarge Model</span>
        </button>
      </div>

      <div className="geo-diagram-stage" onClick={() => setIsZoomed(true)} role="button" tabIndex={0} aria-label="Click to inspect geological cross-section">
        {renderSvgDiagram(false)}
        <div className="geo-diagram-hint" aria-hidden="true">
          <span>Click to inspect high-resolution reservoir cross-section &rarr;</span>
        </div>
      </div>

      {/* Mechanics Grid beneath diagram */}
      <div className="geo-mechanics-grid">
        <div className="geo-mechanic-item">
          <span className="geo-mechanic-label">TRAP TYPE</span>
          <span className="geo-mechanic-val">Stratigraphic Pinch-Out</span>
          <p className="geo-mechanic-desc">Up-dip pinch-outs of turbidite channel-lobe sand complexes against impermeable continental slope shales.</p>
        </div>

        <div className="geo-mechanic-item">
          <span className="geo-mechanic-label">RESERVOIR</span>
          <span className="geo-mechanic-val">Cretaceous Turbidites</span>
          <p className="geo-mechanic-desc">High-porosity deepwater fan sandstones displaying pronounced acoustic impedance contrasts and conformable AVO anomalies.</p>
        </div>

        <div className="geo-mechanic-item">
          <span className="geo-mechanic-label">SOURCE KITCHEN</span>
          <span className="geo-mechanic-val">Cenomanian–Turonian</span>
          <p className="geo-mechanic-desc">Rich oil-prone marine source rocks validated by seabed heat flow modeling and geochemical piston core recoveries.</p>
        </div>

        <div className="geo-mechanic-item">
          <span className="geo-mechanic-label">REGIONAL SEAL</span>
          <span className="geo-mechanic-val">Pelagic Clay Shales</span>
          <p className="geo-mechanic-desc">Extensive regional transgressive shales provide comprehensive vertical and lateral top-seal competence.</p>
        </div>
      </div>

      {/* Modal Lightbox */}
      {isZoomed && (
        <div className="corp-video-modal-backdrop" onClick={() => setIsZoomed(false)} role="dialog" aria-modal="true" aria-label="Detailed Geological Cross-Section">
          <div className="corp-video-modal-dialog geo-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="corp-video-modal-header">
              <div className="corp-video-modal-title">
                <span className="corp-modal-dot"></span>
                <span>Harper Basin Subsurface Cross-Section &amp; Cretaceous Petroleum System</span>
              </div>
              <button type="button" className="corp-video-modal-close" onClick={() => setIsZoomed(false)} aria-label="Close modal">
                &times;
              </button>
            </div>
            <div className="geo-modal-body">
              {renderSvgDiagram(true)}
            </div>
            <div className="corp-video-modal-footer">
              <span>Schematic model based on 6,167 km² 3D seismic reprocessing and 4,045 km² MBES seabed coring surveys.</span>
              <button type="button" className="btn btn-secondary-light" onClick={() => setIsZoomed(false)} style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
