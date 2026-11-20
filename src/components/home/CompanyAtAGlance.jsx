'use client';

import Eyebrow from '../ui/Eyebrow';
import { useInView, useCountUp } from '../../hooks/useMotion';

export default function CompanyAtAGlance() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  const bluInterest = useCountUp(35, 1200, inView);
  const totalInterest = useCountUp(65, 1200, inView);
  const totalArea = useCountUp(8924, 1500, inView);
  const blocksCount = useCountUp(3, 1000, inView);
  const seismicArea = useCountUp(6167, 1400, inView);
  const fansCount = useCountUp(6, 1000, inView);

  return (
    <section id="at-a-glance" ref={sectionRef} className="section section-dark-navy theme-dark metrics-section">
      <div className="container">
        {/* =========================================================
           1. SECTION HEADER (CLEAN INSTITUTIONAL EDITORIAL)
           ========================================================= */}
        <div className={`metrics-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="metrics-header-meta">
            <Eyebrow text="EXPLORATION AT A GLANCE" theme="dark" />
            <span className="metrics-concession-tag">RECONNAISSANCE LICENCE RL-003</span>
          </div>
          <h2 className="metrics-title">
            Key Operational &amp; Exploration Metrics
          </h2>
          <p className="metrics-lede">
            Verified quantitative metrics defining BluEnergies&apos; commercial interest, operating partnership with TotalEnergies, and technical evaluation scope across the deepwater Harper Basin.
          </p>
        </div>

        {/* =========================================================
           2. UPPER EDITORIAL TIER: PARTNERSHIP & FOOTPRINT (2 COLS)
           ========================================================= */}
        <div className="metrics-upper-tier">
          {/* A. Partnership Structure (Unified 35/65 Proportional Comparison) */}
          <div className={`metrics-partnership-block motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
            <div className="metrics-block-eyebrow">
              <span className="metrics-eyebrow-index">01</span>
              <span className="metrics-eyebrow-text">PARTNERSHIP STRUCTURE</span>
            </div>

            <div className="partnership-comparison">
              <div className="partnership-figures-row">
                {/* BluEnergies side */}
                <div className="partnership-party is-blu">
                  <div className="partnership-pct">{bluInterest}%</div>
                  <div className="partnership-party-name">BluEnergies</div>
                  <div className="partnership-party-role">Participating Interest (Carried)</div>
                </div>

                {/* TotalEnergies side */}
                <div className="partnership-party is-total">
                  <div className="partnership-pct">{totalInterest}%</div>
                  <div className="partnership-party-name">TotalEnergies</div>
                  <div className="partnership-party-role">Operating Partner (Lead)</div>
                </div>
              </div>

              {/* Single understated horizontal proportional bar (35/65) */}
              <div
                className="partnership-bar-track"
                role="img"
                aria-label="Unified exploration interest: BluEnergies 35% carried participating interest, TotalEnergies 65% operating interest"
              >
                <div
                  className={`partnership-bar-blu ${inView ? 'is-active' : ''}`}
                  style={{ width: '35%' }}
                />
                <div
                  className={`partnership-bar-total ${inView ? 'is-active' : ''}`}
                  style={{ width: '65%' }}
                />
              </div>

              {/* One short supporting description */}
              <p className="partnership-description">
                Governed under a Joint Study and Assessment Agreement (JSAA) for Reconnaissance Licence RL-003, pairing BluEnergies&apos; early basin capture agility with TotalEnergies&apos; deepwater operational pedigree.
              </p>
            </div>
          </div>

          {/* B. Concession Footprint (Prominent Editorial Statistic) */}
          <div className={`metrics-footprint-block motion-fade-up stagger-2 ${inView ? 'is-in-view' : ''}`}>
            <div className="metrics-block-eyebrow">
              <span className="metrics-eyebrow-index">02</span>
              <span className="metrics-eyebrow-text">CONCESSION FOOTPRINT</span>
            </div>

            <div className="footprint-display">
              <div className="footprint-stat-row">
                <span className="footprint-number">{totalArea}</span>
                <span className="footprint-unit">km²</span>
              </div>

              <div className="footprint-meta">
                <h3 className="footprint-title">Gross Exploration Acreage</h3>
                <div className="footprint-acreage-equiv">
                  <span className="footprint-acreage-val">~2.2 Million Gross Acres</span>
                  <span className="footprint-acreage-acres">(2,205,168 acres)</span>
                </div>
                <p className="footprint-context">
                  Deepwater Harper Basin fairway, offshore southern Liberia across water depths of 1,500m to 3,200m, authorized by the Liberia Petroleum Regulatory Authority (LPRA).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
           3. LOWER EDITORIAL TIER: TECHNICAL EXPLORATION PROGRAMME
           (THREE CLEAN EDITORIAL COLUMNS WITH EQUAL VISUAL WEIGHT)
           ========================================================= */}
        <div className={`metrics-technical-tier motion-fade-up stagger-3 ${inView ? 'is-in-view' : ''}`}>
          <div className="technical-tier-header">
            <div className="metrics-block-eyebrow">
              <span className="metrics-eyebrow-index">03</span>
              <span className="metrics-eyebrow-text">TECHNICAL EXPLORATION PROGRAMME</span>
            </div>
            <span className="technical-tier-caption">Subsurface Evaluation &amp; De-risking Scope</span>
          </div>

          <div className="technical-columns-grid">
            {/* Column 1: 3 Contiguous Exploration Blocks */}
            <div className={`technical-col motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
              <div className="technical-metric-num">
                {blocksCount}
              </div>
              <h4 className="technical-metric-title">Contiguous Exploration Blocks</h4>
              <p className="technical-metric-desc">
                Blocks LB-26, LB-30, and LB-31 positioned across the high-potential Cretaceous slope-to-basin fairway in water depths of 1,500m to 3,200m.
              </p>
            </div>

            {/* Column 2: 6,167 km² of 3D Seismic Reprocessing */}
            <div className={`technical-col motion-fade-up stagger-2 ${inView ? 'is-in-view' : ''}`}>
              <div className="technical-metric-num">
                {seismicArea} <span className="technical-metric-unit">km²</span>
              </div>
              <h4 className="technical-metric-title">3D Seismic Reprocessing</h4>
              <p className="technical-metric-desc">
                High-density 3D seismic volume currently undergoing advanced broadband PSDM and PSTM depth migration with TGS, covering 69% of the licence footprint.
              </p>
            </div>

            {/* Column 3: 6 Mapped Cretaceous Basin Floor Fans */}
            <div className={`technical-col motion-fade-up stagger-3 ${inView ? 'is-in-view' : ''}`}>
              <div className="technical-metric-num">
                {fansCount}
              </div>
              <h4 className="technical-metric-title">Mapped Basin Floor Fans</h4>
              <p className="technical-metric-desc">
                Identified Cretaceous turbidite reservoir targets displaying pronounced class II/III AVO amplitude anomalies analogous to major conjugate margin discoveries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
