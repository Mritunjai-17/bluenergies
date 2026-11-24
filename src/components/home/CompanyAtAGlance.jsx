'use client';

import Eyebrow from '../ui/Eyebrow';
import { useInView, useCountUp } from '../../hooks/useMotion';

export default function CompanyAtAGlance() {
  const [sectionRef, inView] = useInView({ threshold: 0.08 });

  const bluInterest = useCountUp(35, 1200, inView);
  const totalInterest = useCountUp(65, 1200, inView);
  const totalArea = useCountUp(8924, 1500, inView);
  const blocksCount = useCountUp(3, 1000, inView);
  const seismicArea = useCountUp(6167, 1400, inView);
  const fansCount = useCountUp(6, 1000, inView);

  const handleCellMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <section id="at-a-glance" ref={sectionRef} className="section section-dark-navy theme-dark hud-metrics-section">
      <div className="container">
        {/* =========================================================
           1. SECTION HEADER (ARCHITECTURAL TELEMETRY KICKER)
           ========================================================= */}
        <div className={`hud-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="hud-header-meta">
            <Eyebrow text="EXPLORATION AT A GLANCE" theme="dark" />
            <span className="hud-header-badge">RECONNAISSANCE LICENCE RL-003</span>
            <span className="hud-header-telemetry">LAT 04°15&apos;N – 05°05&apos;N • WATER DEPTH 1,500m–3,200m</span>
          </div>
          <h2 className="hud-title">
            Key Operational &amp; Exploration Metrics
          </h2>
          <p className="hud-lede">
            Verified quantitative metrics defining BluEnergies&apos; commercial interest, operating partnership with TotalEnergies, and technical evaluation scope across the deepwater Harper Basin.
          </p>
        </div>

        {/* =========================================================
           2. ARCHITECTURAL BLUEPRINT GRID (6 CELLS, 0 CARDS, PURE HAIRLINES & CROSSHAIRS)
           ========================================================= */}
        <div className={`hud-blueprint-grid motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
          {/* Decorative Corner Framing Crosshairs */}
          <div className="hud-grid-crosshair ch-top-left" aria-hidden="true">+</div>
          <div className="hud-grid-crosshair ch-top-right" aria-hidden="true">+</div>
          <div className="hud-grid-crosshair ch-bottom-left" aria-hidden="true">+</div>
          <div className="hud-grid-crosshair ch-bottom-right" aria-hidden="true">+</div>

          {/* =========================================================
             CELL 01: COMMERCIAL STRUCTURE (35% / 65%)
             ========================================================= */}
          <div className="hud-cell hud-cell-01" onMouseMove={handleCellMouseMove}>
            <div className="hud-cell-corner-mark" aria-hidden="true">+</div>
            <div className="hud-cell-header">
              <span className="hud-cell-index">01 // COMMERCIAL STRUCTURE</span>
              <span className="hud-cell-stamp">JSAA STATUTORY ALLIANCE</span>
            </div>

            <div className="hud-partnership-row">
              <div className="hud-partner is-blu">
                <span className="hud-partner-val">{bluInterest}%</span>
                <span className="hud-partner-name">BluEnergies</span>
                <span className="hud-partner-role">Carried Participating</span>
              </div>
              <div className="hud-partner-divider" aria-hidden="true">:</div>
              <div className="hud-partner is-total">
                <span className="hud-partner-val">{totalInterest}%</span>
                <span className="hud-partner-name">TotalEnergies</span>
                <span className="hud-partner-role">Operating Partner (Lead)</span>
              </div>
            </div>

            {/* Hairline Proportional Equity Track */}
            <div
              className="hud-equity-track"
              role="img"
              aria-label="Unified exploration interest: BluEnergies 35% carried participating interest, TotalEnergies 65% operating interest"
            >
              <div
                className={`hud-equity-blu ${inView ? 'is-active' : ''}`}
                style={{ width: '35%' }}
              />
              <div
                className={`hud-equity-total ${inView ? 'is-active' : ''}`}
                style={{ width: '65%' }}
              />
            </div>

            <p className="hud-cell-desc">
              Governed under the Joint Study and Assessment Agreement (JSAA) for Licence RL-003, pairing early basin capture agility with supermajor deepwater operational scale.
            </p>
          </div>

          {/* =========================================================
             CELL 02: SPATIAL COVERAGE (8,924 km²)
             ========================================================= */}
          <div className="hud-cell hud-cell-02" onMouseMove={handleCellMouseMove}>
            <div className="hud-cell-corner-mark" aria-hidden="true">+</div>
            <div className="hud-cell-header">
              <span className="hud-cell-index">02 // SPATIAL COVERAGE</span>
              <span className="hud-cell-stamp">LPRA AUTHORIZED</span>
            </div>

            <div className="hud-stat-hero">
              <span className="hud-stat-num">{totalArea}</span>
              <span className="hud-stat-unit">km²</span>
            </div>

            <div className="hud-meta-tags">
              <span className="hud-meta-tag is-cyan">~2.2 Million Gross Acres</span>
              <span className="hud-meta-tag">1,500m – 3,200m Water Depth</span>
            </div>

            <p className="hud-cell-desc">
              Deepwater Harper Basin fairway, offshore southern Liberia, authorized by the Liberia Petroleum Regulatory Authority (LPRA) across 2,205,168 gross acres.
            </p>
          </div>

          {/* =========================================================
             CELL 03: CONCESSION ARCHITECTURE (3 Contiguous Blocks)
             ========================================================= */}
          <div className="hud-cell hud-cell-03" onMouseMove={handleCellMouseMove}>
            <div className="hud-cell-corner-mark" aria-hidden="true">+</div>
            <div className="hud-cell-header">
              <span className="hud-cell-index">03 // CONCESSION ARCHITECTURE</span>
              <span className="hud-cell-stamp">REGIONAL SYNERGY</span>
            </div>

            <div className="hud-stat-hero">
              <span className="hud-stat-num">{blocksCount}</span>
              <span className="hud-stat-unit">Contiguous Blocks</span>
            </div>

            <div className="hud-block-pills">
              <span className="hud-block-chip">LB-26</span>
              <span className="hud-block-chip">LB-30</span>
              <span className="hud-block-chip">LB-31</span>
            </div>

            <p className="hud-cell-desc">
              Directly contiguous to TotalEnergies&apos; operated exploration acreage across the Côte d&apos;Ivoire offshore maritime border, generating trans-basin operational synergies.
            </p>
          </div>

          {/* =========================================================
             CELL 04: GEOPHYSICAL VOLUME (6,167 km²)
             ========================================================= */}
          <div className="hud-cell hud-cell-04" onMouseMove={handleCellMouseMove}>
            <div className="hud-cell-corner-mark" aria-hidden="true">+</div>
            <div className="hud-cell-header">
              <span className="hud-cell-index">04 // GEOPHYSICAL VOLUME</span>
              <span className="hud-cell-stamp">TGS ASA HOUSTON/LONDON</span>
            </div>

            <div className="hud-stat-hero">
              <span className="hud-stat-num">{seismicArea}</span>
              <span className="hud-stat-unit">km² Broadband PSDM</span>
            </div>

            <div className="hud-meta-tags">
              <span className="hud-meta-tag is-cyan">AVO Class II/III Anomaly</span>
              <span className="hud-meta-tag">Pre-Stack Depth Migration</span>
            </div>

            <p className="hud-cell-desc">
              High-resolution broadband reprocessing targeting Upper Cretaceous deepwater channel-fan fairways and amplitude conformity directly comparable to conjugate Atlantic discoveries.
            </p>
          </div>

          {/* =========================================================
             CELL 05: DELINEATED PLAYS (6+ Turbidite Fans)
             ========================================================= */}
          <div className="hud-cell hud-cell-05" onMouseMove={handleCellMouseMove}>
            <div className="hud-cell-corner-mark" aria-hidden="true">+</div>
            <div className="hud-cell-header">
              <span className="hud-cell-index">05 // PROSPECTIVE FAIRWAY</span>
              <span className="hud-cell-stamp">MULTI-BILLION BBL SCALE</span>
            </div>

            <div className="hud-stat-hero">
              <span className="hud-stat-num">{fansCount}+</span>
              <span className="hud-stat-unit">Turbidite Fan Complexes</span>
            </div>

            <div className="hud-analogue-chips">
              <span className="hud-analogue-tag">Jubilee &amp; TEN</span>
              <span className="hud-analogue-tag">Baleine</span>
              <span className="hud-analogue-tag">Venus</span>
            </div>

            <p className="hud-cell-desc">
              Channelized gravity flows with stacked net pay reservoirs trapped in high-integrity structural-stratigraphic traps with prolific marine source charge.
            </p>
          </div>

          {/* =========================================================
             CELL 06: STATUTORY GOVERNANCE (NI 51-101)
             ========================================================= */}
          <div className="hud-cell hud-cell-06" onMouseMove={handleCellMouseMove}>
            <div className="hud-cell-corner-mark" aria-hidden="true">+</div>
            <div className="hud-cell-header">
              <span className="hud-cell-index">06 // STATUTORY OVERSIGHT</span>
              <span className="hud-cell-stamp is-active">SEDAR+ VERIFIED</span>
            </div>

            <div className="hud-governance-tickers">
              <div className="hud-ticker-badge">
                <span className="hud-ticker-market">TSXV</span>
                <span className="hud-ticker-symbol">BLU</span>
              </div>
              <div className="hud-ticker-divider" aria-hidden="true">|</div>
              <div className="hud-ticker-badge">
                <span className="hud-ticker-market">OTCQX</span>
                <span className="hud-ticker-symbol">BLUGF</span>
              </div>
              <div className="hud-ticker-status">
                <span className="hud-status-dot" aria-hidden="true" />
                <span>NI 51-101 Compliant</span>
              </div>
            </div>

            <div className="hud-meta-tags">
              <span className="hud-meta-tag is-cyan">Reconnaissance Licence RL-003</span>
              <span className="hud-meta-tag">100% Cost Recoverable</span>
            </div>

            <p className="hud-cell-desc">
              All commercial terms, licence boundaries, and prospective resource estimates are documented in official regulatory filings available on SEDAR+.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
