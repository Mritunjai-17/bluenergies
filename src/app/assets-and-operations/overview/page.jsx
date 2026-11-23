import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import Button from '../../../components/ui/Button';
import GeologicalStorytelling from '../../../components/assets/GeologicalStorytelling';

export const metadata = {
  title: 'Assets & Operations | Harper Basin Deepwater Exploration (RL-003)',
  description: 'BluEnergies Ltd. holds a 35% participating interest across 8,924 km² in deepwater Blocks LB-26, LB-30, and LB-31 in the Harper Basin, offshore Liberia, partnered with operator TotalEnergies (65%).'
};

export default function AssetsOverviewPage() {
  const analogues = [
    {
      name: 'Jubilee & TEN',
      location: 'Tano Basin, Offshore Ghana',
      operator: 'Tullow Oil / Kosmos Energy',
      resource: '~2.1 Billion BOE',
      geology: 'Upper Cretaceous Turonian turbidite channel-fan systems charged by rich marine source rocks in a transform margin tectonic framework directly analogous to the Harper Basin.',
      status: 'Commercial Discovery & Producing'
    },
    {
      name: 'Baleine & Calao',
      location: "Offshore Côte d'Ivoire (CI-205 / CI-101)",
      operator: 'Eni / Petroci',
      resource: '~2.5 Billion BOE',
      geology: 'Stacked Cretaceous slope and basin-floor turbidites situated immediately adjacent along the equatorial West African transform margin.',
      status: 'Fast-Track Production & Appraisal'
    },
    {
      name: 'Venus & Graff',
      location: 'Orange Basin, Deepwater Namibia',
      operator: 'TotalEnergies / Shell',
      resource: '~4.0 Billion BOE',
      geology: 'Landmark Aptian-Cretaceous deepwater basin-floor fan sandstone plays trapped along the South Atlantic continental break-up margin.',
      status: 'Appraisal & Development Planning'
    },
    {
      name: 'Liza & Stabroek',
      location: 'Guyana–Suriname Conjugate Margin',
      operator: 'ExxonMobil / Hess / CNOOC',
      resource: '>11.0 Billion BOE',
      geology: 'Extensive stratigraphic basin floor fan complexes on the South American conjugate Atlantic passive margin sharing identical opening tectonics and source rock age.',
      status: 'Multi-FPSO Producing Hub'
    }
  ];

  const workProgrammeStages = [
    {
      stage: '01',
      title: '3D Seismic Reprocessing & Broadband Depth Migration',
      contractor: 'TGS ASA',
      scale: '6,167 km² High-Resolution 3D Volume',
      status: 'Active Programme',
      desc: 'TGS ASA is actively reprocessing 6,167 km² of existing 3D seismic data utilizing modern broadband PSTM and PSDM algorithms. The campaign applies advanced amplitude-versus-offset (AVO) modeling, gathers conditioning, and pre-stack inversion to evaluate Direct Hydrocarbon Indicators (DHIs) and resolve stratigraphic pinch-outs across 7 mapped turbidite fan complexes.',
      image: '/img/work-programme/programme-seismic.png',
      imageAlt: '3D seismic broadband reprocessing visualization across Harper Basin fairway'
    },
    {
      stage: '02',
      title: 'High-Resolution Multibeam (MBES) Seafloor Bathymetry',
      contractor: 'GeoPartners Ltd. & TDI-Brooks International',
      scale: '4,045 km² Seabed Mapping Fairway',
      status: 'Active Operations',
      desc: 'Deploying the specialized survey vessel R/V GYRE across water depths from 500m to 3,500m. The vessel is executing a 4,045 km² high-density multibeam echo-sounder survey to produce ultra-high resolution bathymetric and acoustic backscatter maps, identifying seabed morphology, chemosynthetic mounds, and fault scarps.',
      image: '/img/work-programme/programme-bathymetry.png',
      imageAlt: 'High-resolution multibeam echo-sounder seafloor bathymetric map'
    },
    {
      stage: '03',
      title: 'Seabed Geochemical Coring & Heat Flow Calibration',
      contractor: 'GeoPartners Ltd. & TDI-Brooks International',
      scale: 'Dedicated Piston Coring & Heat Probe Stations',
      status: 'In Progress',
      desc: 'Acquiring high-resolution piston cores targeted precisely over active acoustic gas plumes and seabed seep anomalies. Recovered sediments undergo head-space gas analysis, fluorescence microscopy, and biomarker characterization to confirm an active thermogenic petroleum system and calibrate thermal gradient models.',
      image: '/img/work-programme/programme-coring.png',
      imageAlt: 'Geochemical piston coring and thermal probe operation offshore Liberia'
    },
    {
      stage: '04',
      title: 'Prospect Ranking & Exploration Well Selection',
      contractor: 'TotalEnergies (Operator) & BluEnergies',
      scale: 'Blocks LB-26, LB-30 & LB-31',
      status: 'Targeted for 2027',
      desc: 'Integrating the reprocessed 3D seismic volumes, calibrated AVO anomalies, and geochemical seepage signatures to generate a prioritized prospect inventory. Formal selection of drillable well locations and trajectory modeling will support transitioning from the reconnaissance framework into Production Sharing Contracts (PSCs).',
      image: '/img/work-programme/programme-targeting.png',
      imageAlt: 'Exploration prospect ranking and deepwater wellbore targeting trajectory'
    }
  ];

  return (
    <>
      {/* =========================================================
         1. ASSETS HERO (DEEP NAVY: ASYMMETRICAL EDITORIAL COMPOSITION)
         ========================================================= */}
      <section className="assets-hero-section" aria-label="Assets & Operations Hero">
        <div className="assets-hero-contours-wrap" aria-hidden="true">
          <svg viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="corp-hero-contours-svg" preserveAspectRatio="none">
            <path d="M780 -30 C960 90 1180 60 1440 160" stroke="rgba(24, 126, 134, 0.16)" strokeWidth="0.8" fill="none" />
            <path d="M860 -20 C1020 120 1220 90 1440 210" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
            <path d="M-40 540 C220 490 460 580 740 540" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <div className="assets-hero-grid">
            {/* Left Narrative */}
            <div className="assets-hero-content motion-fade-up">
              <Eyebrow text="Assets &amp; Operations" theme="dark" />

              <h1 className="assets-hero-heading">
                Exploring the Potential of the Harper Basin
              </h1>

              <div className="assets-hero-accent-bar" aria-hidden="true"></div>

              <p className="assets-hero-lede">
                BluEnergies Ltd. holds a 35% participating interest across 8,924 km² (~2.2M gross acres) in deepwater Blocks LB-26, LB-30, and LB-31 under Reconnaissance Licence RL-003, offshore southern Liberia.
              </p>

              <div className="assets-hero-positioning">
                <p>
                  Partnered with global energy supermajor TotalEnergies (65% operator), our technical work programme is systematically capturing and de-risking high-impact Cretaceous basin floor fan plays along one of the final lightly drilled deepwater fairways of the Atlantic Margin.
                </p>
              </div>

              <div className="assets-hero-cta">
                <Button href="/resources/presentations/corporate-presentation.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
                  Download technical presentation &rarr;
                </Button>
                <Button href="#work-programme" variant="secondary" theme="dark">
                  View exploration programme
                </Button>
              </div>
            </div>

            {/* Right Authentic Photographic Visual */}
            <div className="assets-hero-visual-col motion-fade-up stagger-1">
              <div className="assets-visual-frame">
                <img
                  src="/img/vessel-editorial-hires.jpg"
                  alt="High-specification offshore seismic vessel conducting broadband survey operations in deepwater Liberia"
                  className="assets-visual-img"
                />
                <div className="assets-visual-overlay" aria-hidden="true"></div>

                <div className="assets-visual-badge">
                  <span className="assets-visual-dot" aria-hidden="true"></span>
                  <span>HARPER BASIN RL-003 &bull; WATER DEPTHS 1,500M–3,200M</span>
                </div>

                <div className="assets-visual-caption">
                  <h3 className="assets-caption-title">High-Resolution Broadband Exploration Fairway</h3>
                  <p className="assets-caption-sub">
                    TotalEnergies Operating Partnership &bull; 8,924 km² Gross Concession Footprint
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="assets-metrics-strip motion-fade-up stagger-2" role="region" aria-label="Harper Basin Key Statistics">
            <div className="assets-metric-item">
              <span className="assets-metric-label">CONCESSION SCALE</span>
              <span className="assets-metric-val">8,924 <span className="assets-metric-unit">km²</span></span>
              <span className="assets-metric-sub">~2.2 Million Gross Acres</span>
            </div>
            <div className="assets-metric-divider" aria-hidden="true"></div>

            <div className="assets-metric-item">
              <span className="assets-metric-label">COMMERCIAL INTEREST</span>
              <span className="assets-metric-val">35% <span className="assets-metric-unit">Carried</span></span>
              <span className="assets-metric-sub">TotalEnergies 65% Operator</span>
            </div>
            <div className="assets-metric-divider" aria-hidden="true"></div>

            <div className="assets-metric-item">
              <span className="assets-metric-label">LICENSED BLOCKS</span>
              <span className="assets-metric-val">3 <span className="assets-metric-unit">Contiguous</span></span>
              <span className="assets-metric-sub">Blocks LB-26, LB-30 &amp; LB-31</span>
            </div>
            <div className="assets-metric-divider" aria-hidden="true"></div>

            <div className="assets-metric-item">
              <span className="assets-metric-label">FISCAL STATUS</span>
              <span className="assets-metric-val">100% <span className="assets-metric-unit">Cost Recovery</span></span>
              <span className="assets-metric-sub">Authorized under LPRA Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. HARPER BASIN ASSET OVERVIEW & COMMERCIAL FRAMEWORK (WARM IVORY TONE)
         Clean 2-column layout with dark navy text and white ledger panel
         ========================================================= */}
      <section className="assets-overview-section tone-ivory" id="concession-overview" aria-label="Harper Basin Concession Overview">
        <div className="container">
          <div className="assets-editorial-two-col motion-fade-up">
            <div>
              <Eyebrow text="Concession Framework" theme="light" />
              <h2 className="assets-section-title">
                Flagship Exploration Concession: Reconnaissance Licence RL-003
              </h2>
              <div className="assets-section-accent" aria-hidden="true"></div>

              <p className="assets-editorial-body">
                In January 2026, BluEnergies formalized a Joint Study and Assessment Agreement (JSAA) with energy supermajor <strong>TotalEnergies</strong> to evaluate and de-risk Reconnaissance Licence RL-003 (LPRA-003), authorized by the <strong>Liberia Petroleum Regulatory Authority (LPRA)</strong>.
              </p>

              <p className="assets-editorial-body">
                The concession spans an expansive <strong>8,924 km²</strong> across deepwater Blocks <strong>LB-26, LB-30, and LB-31</strong> in water depths extending from 1,500 to 3,200 meters. The license term remains in full force through <strong>June 30, 2027</strong>.
              </p>

              <p className="assets-editorial-body">
                Critically for capital discipline and shareholder value, all agreed technical work programme expenditures incurred under the reconnaissance licence qualify for <strong>100% full cost recovery</strong> upon transitioning into long-term Production Sharing Contracts (PSCs).
              </p>
            </div>

            {/* Operating Partnership & Statutory Specifications Panel */}
            <div className="assets-spec-card tone-card-light">
              <div className="assets-spec-card-header">
                <span className="assets-spec-kicker">CONCESSION STATUTORY REGISTER</span>
                <h3 className="assets-spec-card-title">Operating Joint Venture Structure</h3>
              </div>

              {/* 65 / 35 JV Distribution Bar */}
              <div className="assets-jv-bar-wrap">
                <div className="assets-jv-bar-labels">
                  <span className="assets-jv-label-operator">TotalEnergies (Operator) &bull; 65%</span>
                  <span className="assets-jv-label-partner">BluEnergies &bull; 35%</span>
                </div>
                <div className="assets-jv-bar-track" role="img" aria-label="Joint venture ownership: TotalEnergies 65%, BluEnergies 35%">
                  <div className="assets-jv-seg-operator" style={{ width: '65%' }}></div>
                  <div className="assets-jv-seg-partner" style={{ width: '35%' }}></div>
                </div>
              </div>

              <dl className="assets-spec-table">
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Licence Identification</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def highlight">Reconnaissance Licence RL-003</dd>
                </div>
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Governing Authority</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def">Liberia Petroleum Regulatory Authority (LPRA)</dd>
                </div>
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Operating Partner</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def">TotalEnergies EP Liberia B.V. (65%)</dd>
                </div>
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Carried Interest</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def">BluEnergies Ltd. (35% Working Interest)</dd>
                </div>
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Included Offshore Blocks</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def">Blocks LB-26, LB-30 &amp; LB-31</dd>
                </div>
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Tenure Expiry</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def">June 30, 2027 (PSC Transition)</dd>
                </div>
                <div className="assets-spec-row">
                  <dt className="assets-spec-term">Expenditure Status</dt>
                  <span className="assets-spec-leader" aria-hidden="true"></span>
                  <dd className="assets-spec-def highlight">100% Eligible for Cost Recovery</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. EXPLORATION POTENTIAL (PALE MIST BLUE TONE)
         Geological cross-section model as hero focal point
         ========================================================= */}
      <section className="assets-geology-section tone-mist" id="geological-thesis" aria-label="Geological Mechanics & Petroleum System">
        <div className="container">
          <div className="assets-section-header motion-fade-up">
            <Eyebrow text="Exploration Potential" theme="light" />
            <h2 className="assets-section-title">
              Cretaceous Basin Floor Fan Play
            </h2>
            <p className="assets-section-desc">
              High-resolution seismic interpretation across the Harper Basin has mapped seven discrete deepwater turbidite fan complexes. These Cretaceous fan lobes represent the primary reservoir targets along the transform margin fairway.
            </p>
          </div>

          <div className="motion-fade-up stagger-1">
            <GeologicalStorytelling />
          </div>
        </div>
      </section>

      {/* =========================================================
         4. EXPLORATION TECHNICAL FEATURE & ATLANTIC MARGIN ANALOGUES (DEEP NAVY TONE)
         Split editorial technical composition with 3D seismic volume
         ========================================================= */}
      <section className="assets-analogues-section tone-navy" aria-label="Technical Exploration Feature and Atlantic Margin Analogues">
        <div className="container">
          {/* Subsurface 3D Seismic Technical Feature (Split Editorial Composition) */}
          <div className="assets-seismic-feature motion-fade-up">
            <div className="assets-seismic-image-box">
              <img
                src="/img/work-programme/programme-seismic.png"
                alt="3D seismic broadband pre-stack depth migration volume across Harper Basin Blocks LB-26, LB-30, and LB-31"
                className="assets-seismic-img"
              />
              <div className="assets-seismic-caption">
                <span className="assets-seismic-tag">TGS ASA 3D BROADBAND REPROCESSING</span>
                <span className="assets-seismic-meta">6,167 km² High-Resolution PSDM Volume &bull; 7 Mapped Turbidite Lobes</span>
              </div>
            </div>

            <div className="assets-seismic-content">
              <Eyebrow text="Subsurface Imaging" theme="dark" />
              <h2 className="assets-seismic-heading">
                Broadband Depth Migration &amp; Direct Hydrocarbon Indicators
              </h2>
              <p className="assets-seismic-desc">
                TGS ASA is actively processing 6,167 km² of 3D reflection data utilizing modern broadband PSTM and PSDM algorithms. The workflow incorporates high-fidelity amplitude-versus-offset (AVO) modeling, gathers conditioning, and acoustic impedance inversion to image deepwater fan lobes and evaluate Class II/III Direct Hydrocarbon Indicator (DHI) signatures across Blocks LB-26, LB-30, and LB-31.
              </p>

              <div className="assets-seismic-specs">
                <div className="assets-seismic-spec-item">
                  <span className="assets-seismic-spec-val">3–90 Hz</span>
                  <span className="assets-seismic-spec-lbl">Broadband Frequency Spectrum</span>
                </div>
                <div className="assets-seismic-spec-item">
                  <span className="assets-seismic-spec-val">7,000 m</span>
                  <span className="assets-seismic-spec-lbl">Target Subsurface Imaging Depth</span>
                </div>
                <div className="assets-seismic-spec-item">
                  <span className="assets-seismic-spec-val">7 Lobes</span>
                  <span className="assets-seismic-spec-lbl">Delineated Turbidite Fan Fairways</span>
                </div>
              </div>
            </div>
          </div>

          <div className="assets-section-header motion-fade-up">
            <Eyebrow text="Margin Analogues" theme="dark" />
            <h2 className="assets-section-title" style={{ color: '#FFFFFF' }}>
              Proven Atlantic Margin Cretaceous Fan Systems
            </h2>
            <p className="assets-section-desc" style={{ color: 'rgba(220, 235, 245, 0.78)' }}>
              Over the past two decades, deepwater Cretaceous basin floor fans have emerged as the most prolific hydrocarbon play along the Atlantic Margin. The Harper Basin shares identical transform margin tectonics, Cenomanian-Turonian marine source kitchens, and steep slope channel systems with major global discoveries.
            </p>
          </div>

          <div className="assets-analogues-table-wrap motion-fade-up stagger-1">
            <table className="assets-analogues-table" aria-label="Atlantic Margin Analogues Comparison">
              <thead>
                <tr>
                  <th scope="col">Discovery / Complex</th>
                  <th scope="col">Geographic Basin</th>
                  <th scope="col">Est. Recoverable Resource</th>
                  <th scope="col">Geological Relationship to Harper Basin</th>
                </tr>
              </thead>
              <tbody>
                {analogues.map((item) => (
                  <tr key={item.name}>
                    <td className="analog-name-cell">
                      <strong>{item.name}</strong>
                      <span className="analog-operator-tag">{item.operator}</span>
                    </td>
                    <td className="analog-location-cell">{item.location}</td>
                    <td className="analog-resource-cell">
                      <span className="analog-resource-num">{item.resource}</span>
                      <span className="analog-status-tag">{item.status}</span>
                    </td>
                    <td className="analog-desc-cell">{item.geology}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="assets-analogues-disclaimer">
              * Note: Analogous commercial discoveries in Ghana, Côte d&apos;Ivoire, Namibia, and Guyana are provided for geological context and comparative depositional analysis only. They do not constitute a guarantee that similar commercial hydrocarbons will be discovered in the Harper Basin concession.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. EXPLORATION WORK PROGRAMME (WARM IVORY TONE: VERTICAL TIMELINE)
         ========================================================= */}
      <section className="assets-programme-section tone-ivory" id="work-programme" aria-label="Exploration Work Programme">
        <div className="container">
          <div className="assets-section-header motion-fade-up">
            <Eyebrow text="Exploration Roadmap" theme="light" />
            <h2 className="assets-section-title">
              Technical Exploration Work Programme
            </h2>
            <p className="assets-section-desc">
              BluEnergies and TotalEnergies are executing a coordinated multi-phase technical campaign designed to mature high-grade geological prospects into drill-ready well targets ahead of licence term conversion.
            </p>
          </div>

          <div className="assets-timeline-wrap motion-fade-up stagger-1">
            <div className="assets-timeline-track" aria-hidden="true"></div>

            <div className="assets-timeline-list">
              {workProgrammeStages.map((stage) => (
                <article key={stage.stage} className="assets-timeline-item">
                  <div className="assets-timeline-marker">
                    <span className="assets-timeline-number">{stage.stage}</span>
                  </div>

                  <div className="assets-timeline-body">
                    <div className="assets-timeline-header">
                      <div>
                        <span className="assets-timeline-contractor">{stage.contractor} &bull; {stage.scale}</span>
                        <h3 className="assets-timeline-title">{stage.title}</h3>
                      </div>
                      <span className={`assets-timeline-status ${stage.stage === '04' ? 'is-upcoming' : 'is-active'}`}>
                        {stage.status}
                      </span>
                    </div>

                    <div className="assets-timeline-content-grid">
                      <p className="assets-timeline-desc">{stage.desc}</p>
                      <div className="assets-timeline-image-box">
                        <img src={stage.image} alt={stage.imageAlt} className="assets-timeline-img" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         6. TECHNICAL RESOURCES & STATUTORY DISCLOSURES (MIST BLUE TONE)
         ========================================================= */}
      <section className="assets-disclosures-section tone-mist" aria-label="Technical Disclosures and Downloads">
        <div className="container">
          <div className="assets-disclosures-grid motion-fade-up">
            {/* Left: Document Downloads */}
            <div className="assets-docs-panel">
              <Eyebrow text="Documentation" theme="light" />
              <h3 className="assets-docs-heading">Technical Briefings &amp; Maps</h3>
              <p className="assets-docs-lede">
                Download verified exploration presentations, geological summaries, and regulatory filings for the Harper Basin campaign.
              </p>

              <div className="assets-docs-list">
                <a
                  href="/resources/presentations/corporate-presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="assets-doc-row"
                >
                  <div className="assets-doc-info">
                    <span className="assets-doc-type">PDF DOCUMENT &bull; 4.2 MB</span>
                    <strong className="assets-doc-title">Corporate Presentation — Harper Basin Technical Overview</strong>
                  </div>
                  <span className="assets-doc-btn">Download &rarr;</span>
                </a>

                <a
                  href="/resources/factsheets/Blu-Energies-Fact-Sheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="assets-doc-row"
                >
                  <div className="assets-doc-info">
                    <span className="assets-doc-type">PDF DOCUMENT &bull; 1.1 MB</span>
                    <strong className="assets-doc-title">BluEnergies Corporate Fact Sheet &amp; Asset Summary</strong>
                  </div>
                  <span className="assets-doc-btn">Download &rarr;</span>
                </a>

                <a
                  href="/resources/reports/research-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="assets-doc-row"
                >
                  <div className="assets-doc-info">
                    <span className="assets-doc-type">PDF DOCUMENT &bull; 1.8 MB</span>
                    <strong className="assets-doc-title">Independent Equity Research — Atlantic Margin Exploration</strong>
                  </div>
                  <span className="assets-doc-btn">Download &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right: Statutory Disclaimers */}
            <div className="assets-legal-panel">
              <h4 className="assets-legal-title">Regulatory Disclosures &amp; Forward-Looking Statements</h4>
              <p className="assets-legal-p">
                Exploration disclosures on this page have been prepared in accordance with Canadian National Instrument 51-101 (Standards of Disclosure for Oil and Gas Activities) and the provisions of the Liberia Petroleum Regulatory Authority (LPRA) Exploration Guidelines.
              </p>
              <p className="assets-legal-p">
                Prospective resources are those quantities of petroleum estimated, as of a given date, to be potentially recoverable from undiscovered accumulations by application of future development projects. Prospective resources have both an associated chance of discovery and a chance of development. There is no certainty that any portion of the resources will be discovered. If discovered, there is no certainty that it will be commercially viable to produce any portion of the resources.
              </p>
              <div className="assets-legal-footer">
                <span>TSX Venture Exchange: <strong>BLU</strong> &bull; OTCQX: <strong>BLUGF</strong></span>
                <Link href="/legal/" className="assets-legal-link">Review Complete Legal Notices &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
