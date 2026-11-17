export default function SeabedGraphic({ compact = false, className = '' }) {
  return (
    <div
      className={`seabed-graphic-wrapper ${compact ? 'seabed-compact' : ''} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        className="seabed-svg"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="layerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#07334F" />
            <stop offset="100%" stopColor="#041B2D" />
          </linearGradient>
          <linearGradient id="layerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#094063" />
            <stop offset="100%" stopColor="#062B44" />
          </linearGradient>
          <linearGradient id="layerGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F5A7A" />
            <stop offset="100%" stopColor="#094063" />
          </linearGradient>
          <linearGradient id="layerGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A9FAE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#17808C" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Geological layer 1: Deep Basal Basement Formation (#07334F) */}
        <path
          d="M0 240 C320 210 640 290 980 230 C1180 195 1320 220 1440 210 V600 H0 Z"
          fill="url(#layerGrad1)"
        />

        {/* Geological layer 2: Cretaceous Deep Marine Shales (#094063) */}
        <path
          d="M0 290 C260 260 540 340 820 300 C1080 260 1280 320 1440 290 V600 H0 Z"
          fill="url(#layerGrad2)"
        />

        {/* Geological layer 3: Basin Floor Turbidite Sandstones (#0F5A7A) */}
        <path
          d="M0 350 C300 320 580 400 920 360 C1160 330 1340 370 1440 350 V600 H0 Z"
          fill="url(#layerGrad3)"
        />

        {/* Geological layer 4: Bathymetric Seabed Mudline (#2A9FAE at ~55% opacity) */}
        <path
          d="M0 420 C220 380 480 450 780 420 C1040 390 1260 435 1440 410 V600 H0 Z"
          fill="url(#layerGrad4)"
        />

        {/* Stratigraphic Bedding Reflectors */}
        <path
          d="M0 380 Q360 360 720 420 T1440 385"
          stroke="rgba(81, 194, 201, 0.18)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          d="M0 310 Q420 280 880 330 T1440 305"
          stroke="rgba(81, 194, 201, 0.14)"
          strokeWidth="1.5"
        />

        {/* Exploration Trajectory & Target Node */}
        <g className="wellbore-path">
          <line x1="880" y1="60" x2="880" y2="120" stroke="#E39B2F" strokeWidth="1.5" opacity="0.6" />
          <circle cx="880" cy="60" r="4" fill="#E39B2F" />
          <path
            d="M880 120 C880 240 850 340 820 490"
            stroke="#E39B2F"
            strokeWidth="2.5"
            strokeDasharray="7 5"
          />
          <ellipse cx="820" cy="490" rx="42" ry="12" fill="#E39B2F" fillOpacity="0.25" stroke="#E39B2F" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="820" cy="490" r="5" fill="#E39B2F" />
          <text x="895" y="110" fill="#E39B2F" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.05em">PROSPECT TRAJECTORY</text>
          <text x="838" y="494" fill="#E39B2F" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontSize="10" fontWeight="500">Cretaceous Fan Play Target</text>
        </g>
      </svg>
    </div>
  );
}
