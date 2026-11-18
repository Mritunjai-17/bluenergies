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
        {/* Top Cartographic / Technical Coordinate Header Strip */}
        <div className={`technical-ledger-strip motion-fade ${inView ? 'is-in-view' : ''}`}>
          <div className="ledger-strip-left">
            <span className="ledger-tag">CONCESSION REGISTER</span>
            <span className="ledger-coord">RECONNAISSANCE LICENCE RL-003</span>
            <span className="ledger-divider" aria-hidden="true">|</span>
            <span className="ledger-coord">BOUNDS: 4°10&apos;N – 5°05&apos;N &bull; 7°45&apos;W – 9°15&apos;W</span>
          </div>
          <div className="ledger-strip-right">
            <span className="ledger-status-dot" aria-hidden="true"></span>
            <span className="ledger-status-text">OFFICIAL EQUITY DISCLOSURE</span>
          </div>
        </div>

        {/* Section Header */}
        <div className={`metrics-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <Eyebrow text="EXPLORATION AT A GLANCE" theme="dark" />
          <h2 className="metrics-title">
            Key Operational &amp; Exploration Metrics
          </h2>
          <p className="metrics-lede">
            Verified quantitative metrics defining BluEnergies&apos; commercial interest, operating partnership with TotalEnergies, and technical evaluation scope across the deepwater Harper Basin.
          </p>
        </div>

        {/* Human-Crafted Swiss Architectural Data Ledger (Replacing generic card boxes) */}
        <div className={`technical-ledger-board motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
          {/* Row 1: Operating Equity Balance (35% BluEnergies / 65% TotalEnergies) */}
          <div className="ledger-row ledger-row-equity">
            <div className="ledger-col-meta">
              <span className="ledger-index">01 / COMMERCIAL STRUCTURE</span>
              <h3 className="ledger-row-title">Operating Equity &amp; Participating Interest</h3>
              <p className="ledger-row-desc">
                Governed under a Joint Study and Assessment Agreement with energy supermajor TotalEnergies acting as operating partner.
              </p>
            </div>

            <div className="ledger-col-equity-display">
              {/* BluEnergies Share */}
              <div className="ledger-equity-block ledger-equity-blu">
                <div className="ledger-equity-header">
                  <span className="ledger-equity-brand">BluEnergies</span>
                  <span className="ledger-equity-role">Carried Working Interest</span>
                </div>
                <div className="ledger-equity-number">{bluInterest}%</div>
                <div className="ledger-equity-bar-track">
                  <div className={`ledger-equity-bar-fill-blu ${inView ? 'is-active' : ''}`}></div>
                </div>
              </div>

              {/* Central Partnership Link Icon */}
              <div className="ledger-equity-connector" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 17l-4 4a2.828 2.828 0 1 1-4-4l4-4m12 0l4 4a2.828 2.828 0 1 1-4 4l-4-4m-5-5l5 5m-2-7l2-2a2.828 2.828 0 0 1 4 4l-2 2" />
                </svg>
              </div>

              {/* TotalEnergies Share */}
              <div className="ledger-equity-block ledger-equity-total">
                <div className="ledger-equity-header">
                  <span className="ledger-equity-brand">TotalEnergies</span>
                  <span className="ledger-equity-role">Operating Partner (Lead)</span>
                </div>
                <div className="ledger-equity-number">{totalInterest}%</div>
                <div className="ledger-equity-bar-track">
                  <div className={`ledger-equity-bar-fill-total ${inView ? 'is-active' : ''}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Concession Scale & Acreage Depth */}
          <div className="ledger-row ledger-row-scale">
            <div className="ledger-col-meta">
              <span className="ledger-index">02 / CONCESSION FOOTPRINT</span>
              <h3 className="ledger-row-title">Gross Exploration Acreage</h3>
              <p className="ledger-row-desc">
                Covering 2,205,168 gross acres along the West African Transform Margin, authorized by the Liberia Petroleum Regulatory Authority (LPRA).
              </p>
            </div>

            <div className="ledger-col-scale-display">
              <div className="ledger-huge-metric">
                <span className="ledger-huge-number">{totalArea}</span>
                <span className="ledger-huge-unit">km²</span>
              </div>
              <div className="ledger-acre-calc">
                <span className="ledger-calc-tag">EQUIVALENT SCALE</span>
                <span className="ledger-calc-val">~2.2 Million Gross Acres</span>
                <span className="ledger-calc-sub">Offshore Liberia Deepwater (Water depths 1,500m – 3,200m)</span>
              </div>
            </div>
          </div>

          {/* Row 3: Subsurface Exploration Assets (3-Column Technical Rail) */}
          <div className="ledger-row ledger-row-assets">
            {/* Asset Col 1: 3 Offshore Blocks */}
            <div className="ledger-asset-card">
              <div className="ledger-asset-header">
                <span className="ledger-asset-index">SPEC 01</span>
                <span className="ledger-asset-badge">LPRA BLOCKS</span>
              </div>
              <div className="ledger-asset-number">{blocksCount}</div>
              <h4 className="ledger-asset-title">Contiguous Exploration Blocks</h4>
              <p className="ledger-asset-desc">
                Blocks LB-26, LB-30, and LB-31 positioned across the high-potential Cretaceous fan fairway.
              </p>
              <div className="ledger-asset-tags">
                <span>LB-26 (Slope)</span>
                <span>LB-30 (Central)</span>
                <span>LB-31 (Distal)</span>
              </div>
            </div>

            {/* Asset Col 2: 3D Seismic Reprocessing */}
            <div className="ledger-asset-card">
              <div className="ledger-asset-header">
                <span className="ledger-asset-index">SPEC 02</span>
                <span className="ledger-asset-badge">GEOPHYSICAL DATA</span>
              </div>
              <div className="ledger-asset-number">
                {seismicArea} <span className="ledger-asset-unit">km²</span>
              </div>
              <h4 className="ledger-asset-title">3D Seismic Reprocessing</h4>
              <p className="ledger-asset-desc">
                High-density 3D seismic volume currently undergoing broadband PSDM/PSTM depth migration with TGS.
              </p>
              <div className="ledger-asset-tags">
                <span>Contractor: TGS ASA</span>
                <span>69% Acreage Coverage</span>
              </div>
            </div>

            {/* Asset Col 3: Identified Cretaceous Fan Systems */}
            <div className="ledger-asset-card">
              <div className="ledger-asset-header">
                <span className="ledger-asset-index">SPEC 03</span>
                <span className="ledger-asset-badge">SUBSURFACE TARGETS</span>
              </div>
              <div className="ledger-asset-number">{fansCount}</div>
              <h4 className="ledger-asset-title">Cretaceous Basin Floor Fans</h4>
              <p className="ledger-asset-desc">
                Mapped turbidite reservoir complexes displaying class II/III AVO anomalies analogous to major margin discoveries.
              </p>
              <div className="ledger-asset-tags">
                <span>Target: Upper Cretaceous</span>
                <span>Certified Fan Complex</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
