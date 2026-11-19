'use client';

import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import { useInView } from '../../hooks/useMotion';

export default function WorkProgramme() {
  const [gridRef, inView] = useInView({ threshold: 0.1 });
  const steps = [
    {
      num: '01',
      title: 'TGS 3D Seismic Reprocessing',
      contractor: 'TGS ASA',
      scope: '6,167 km² of 3D Seismic Data',
      status: 'In Progress (Announced July 2026)',
      statusType: 'active',
      desc: 'Application of advanced broadband depth migration and high-fidelity velocity modelling to sharpen subsurface structural imaging and resolve stratigraphic boundaries across Cretaceous fan systems.',
      image: '/img/work-programme/programme-seismic.png',
      alt: '3D seismic reprocessing visualization showing subsurface depth migration and velocity modeling',
      contractorIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18"/>
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
          <path d="M9 9h1"/>
          <path d="M9 13h1"/>
          <path d="M9 17h1"/>
          <path d="M14 9h1"/>
          <path d="M14 13h1"/>
          <path d="M14 17h1"/>
        </svg>
      ),
      scopeIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      statusIcon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Multibeam Bathymetric Seafloor Survey',
      contractor: 'GeoPartners / TDI-Brooks (R/V GYRE)',
      scope: '4,045 km² High-Resolution MBES',
      status: 'In Progress (Announced July 2026)',
      statusType: 'active',
      desc: 'Executing a comprehensive seafloor bathymetric survey to map seabed topography, identify pockmarks and fault scarps, and detect potential sea-bottom hydrocarbon seepage features.',
      image: '/img/work-programme/programme-bathymetry.png',
      alt: 'High-resolution multibeam seafloor bathymetry survey mapped across offshore Harper Basin',
      contractorIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.02"/>
          <path d="M12 10V4"/>
          <path d="M12 4h5l-2 3h-3"/>
        </svg>
      ),
      scopeIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>
        </svg>
      ),
      statusIcon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.02"/>
          <path d="M12 10V4"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Seabed Geochemical Coring & Heat-Flow',
      contractor: 'TDI-Brooks International',
      scope: 'Piston Coring & Geothermal Probes',
      status: 'In Progress',
      statusType: 'active',
      desc: 'Acquiring physical seabed piston cores for hydrocarbon geochemical fingerprinting combined with in-situ heat-flow measurements to calibrate basin thermal maturity and migration models.',
      image: '/img/work-programme/programme-coring.png',
      alt: 'Physical seabed piston core samples in laboratory rack for geochemical hydrocarbon fingerprinting',
      contractorIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 2v6.292a7 7 0 1 0 4 0V2"/>
          <path d="M8.5 2h7"/>
        </svg>
      ),
      scopeIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
      ),
      statusIcon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Prospect Delineation & Well Targeting',
      contractor: 'TotalEnergies & BluEnergies Consortium',
      scope: 'Blocks LB-26, LB-30, LB-31',
      status: 'Planned Next Stage (2026–2027)',
      statusType: 'upcoming',
      desc: 'Full synthesis of reprocessed 3D seismic, AVO amplitude anomalies, and geochemical seepage data to rank drillable prospects and mature candidates for an exploration drilling campaign.',
      image: '/img/work-programme/programme-targeting.png',
      alt: 'High-amplitude Cretaceous turbidite fan prospect delineation and exploration well target map',
      contractorIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      scopeIcon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="22" y1="12" x2="18" y2="12"/>
          <line x1="6" y1="12" x2="2" y2="12"/>
          <line x1="12" y1="6" x2="12" y2="2"/>
          <line x1="12" y1="22" x2="12" y2="18"/>
        </svg>
      ),
      statusIcon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
    }
  ];

  return (
    <div ref={gridRef}>
      <Section background="soft-blue" id="work-programme" className="programme-section">
        <div className={`programme-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <Eyebrow text="Exploration Progression" theme="light" />
          <h2 className="programme-heading">
            <span className="programme-heading-accent">Exploration</span> Work Programme
          </h2>
          <p className="programme-lede">
            BluEnergies and operating partner TotalEnergies are actively executing a multi-disciplinary technical exploration programme across Reconnaissance Licence RL-003.
          </p>
        </div>

        {/* Campaign Operational Ledger Ribbon (Human Agency Craft) */}
        <div className={`programme-campaign-ribbon motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
          <div className="campaign-ribbon-item">
            <span className="ribbon-key">EXPLORATION CAMPAIGN</span>
            <span className="ribbon-val">Phase 1: Subsurface De-Risking</span>
          </div>
          <div className="campaign-ribbon-item">
            <span className="ribbon-key">GEOPHYSICAL CONTRACTOR</span>
            <span className="ribbon-val">TGS ASA (Houston / London)</span>
          </div>
          <div className="campaign-ribbon-item">
            <span className="ribbon-key">SURVEY VESSEL</span>
            <span className="ribbon-val">R/V GYRE (TDI-Brooks)</span>
          </div>
          <div className="campaign-ribbon-item">
            <span className="ribbon-key">CAMPAIGN TARGET</span>
            <span className="ribbon-val">Well Spud Selection (2026–2027)</span>
          </div>
        </div>

        <div className="programme-timeline-grid">
          {steps.map((s, idx) => (
            <div key={idx} className={`programme-card motion-fade-up stagger-${idx + 1} ${inView ? 'is-in-view' : ''}`}>
              {/* Left Visual Column: Number Tab + Technical Photo Strip */}
              <div className="programme-visual-col">
                <div className="programme-num-tab">
                  <span className="programme-num-text">{s.num}</span>
                </div>
                <div className="programme-visual-img-wrap">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="programme-visual-img"
                  />
                </div>
              </div>

              {/* Right Content Column */}
              <div className="programme-card-content">
                <div className="programme-card-header">
                  <h3 className="programme-card-title">{s.title}</h3>
                  <span className={`programme-status-pill ${s.statusType === 'active' ? 'active' : 'planned'}`}>
                    <span className="programme-status-icon" aria-hidden="true">{s.statusIcon}</span>
                    <span>{s.status}</span>
                  </span>
                </div>

                <div className="programme-card-meta">
                  <div className="programme-meta-row">
                    <span className="programme-meta-icon">{s.contractorIcon}</span>
                    <span className="programme-meta-label">Contractor:</span>
                    <span className="programme-meta-val">{s.contractor}</span>
                  </div>
                  <div className="programme-meta-row">
                    <span className="programme-meta-icon">{s.scopeIcon}</span>
                    <span className="programme-meta-label">Scope:</span>
                    <span className="programme-meta-val">{s.scope}</span>
                  </div>
                </div>

                <p className="programme-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
