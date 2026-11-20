import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';

export const metadata = {
  title: 'Presentations & Publications | BluEnergies Ltd. (TSXV: BLU)',
  description: 'Download corporate investor slide presentations, fact sheets, independent equity research reports, and executive video briefings.'
};

export default function PresentationsPage() {
  const investorTabs = [
    { label: 'Exploration Outlook', href: '/investors/outlook/' },
    { label: 'Stock Information', href: '/investors/stock-information/' },
    { label: 'Financial Filings', href: '/investors/financials/' },
    { label: 'Presentations', href: '/investors/presentations/' },
    { label: 'AGM & Voting', href: '/investors/agm/' }
  ];

  const presentations = [
    {
      title: 'Corporate Presentation — Harper Basin Deepwater Exploration',
      date: 'Q3 2026',
      type: 'Executive Presentation',
      format: 'PDF',
      size: '4.2 MB',
      desc: 'Comprehensive review of the Harper Basin (RL-003) concession, TotalEnergies 65/35 partnership structure, 3D broadband seismic reprocessing, and Atlantic Margin analogues.',
      href: '/resources/presentations/corporate-presentation.pdf'
    },
    {
      title: 'BluEnergies Investor Fact Sheet',
      date: '2026',
      type: 'Corporate Summary',
      format: 'PDF',
      size: '1.1 MB',
      desc: 'Two-page institutional summary detailing market tickers (TSXV: BLU | OTCQX: BLUGF), share structure, concession acreage, and exploration work programme.',
      href: '/resources/factsheets/Blu-Energies-Fact-Sheet.pdf'
    },
    {
      title: 'Independent Equity Research Report — Atlantic Margin Fairway',
      date: '2026',
      type: 'Technical Analyst Report',
      format: 'PDF',
      size: '1.8 MB',
      desc: 'Independent technical evaluation of deepwater Cretaceous turbidite fan potential, transform margin structural mechanics, and regional commercial discovery analogues.',
      href: '/resources/reports/research-report.pdf'
    },
    {
      title: 'ESTMA Statutory Reporting — Extractive Sector Transparency',
      date: '2026',
      type: 'Statutory Disclosure',
      format: 'PDF',
      size: '319 KB',
      desc: 'Annual reporting of payments to governments in accordance with Canada’s Extractive Sector Transparency Measures Act (ESTMA).',
      href: '/resources/estma/blu-estma-reporting-2025.pdf'
    }
  ];

  return (
    <>
      {/* =========================================================
         1. PRESENTATIONS HERO (DEEP NAVY TONE)
         ========================================================= */}
      <section className="inv-hero-section tone-navy" aria-label="Presentations Hero">
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="corp-hero-contours-svg" preserveAspectRatio="none">
            <path d="M820 -20 C980 90 1200 60 1440 150" stroke="rgba(24, 126, 134, 0.16)" strokeWidth="0.8" fill="none" />
            <path d="M-40 560 C200 510 440 590 700 550" stroke="rgba(24, 126, 134, 0.12)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <SubnavTabs items={investorTabs} activeHref="/investors/presentations/" theme="dark" ariaLabel="Investor Sections" />

          <div className="inv-hero-grid motion-fade-up">
            <div className="inv-hero-narrative">
              <Eyebrow text="Investor Briefings" theme="dark" />
              <h1 className="inv-hero-title">
                Presentations &amp; Analyst Publications
              </h1>
              <div className="inv-accent-bar" aria-hidden="true"></div>
              <p className="inv-hero-lede">
                Investor roadshow slide decks, geological briefing summaries, independent equity research, and transparency disclosures.
              </p>
            </div>

            <div className="inv-hero-card">
              <div className="inv-card-header">
                <span className="inv-card-kicker">TECHNICAL EXPLORATION DECK</span>
                <span className="inv-card-doc-id">Updated Q3 2026</span>
              </div>

              <div className="inv-card-metrics">
                <div className="inv-card-metric">
                  <span className="inv-metric-num">38 Slides</span>
                  <span className="inv-metric-lbl">Geological &amp; Commercial Deep Dive</span>
                </div>
                <div className="inv-card-metric">
                  <span className="inv-metric-num">PDF</span>
                  <span className="inv-metric-lbl">High-Resolution Digital Distribution</span>
                </div>
              </div>

              <div className="inv-card-footer">
                <span>Direct PDF download available below.</span>
                <a
                  href="/resources/presentations/corporate-presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inv-card-action"
                >
                  Download presentation &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. PRESENTATIONS & PUBLICATIONS LIBRARY (MIST BLUE TONE)
         ========================================================= */}
      <section className="inv-content-section tone-mist" aria-label="Presentations Library">
        <div className="container">
          <div className="inv-pres-grid motion-fade-up">
            {presentations.map((item) => (
              <article key={item.title} className="inv-pres-card tone-card-light">
                <div className="inv-pres-top">
                  <span className="inv-pres-type">{item.type}</span>
                  <span className="inv-pres-date">{item.date}</span>
                </div>

                <h3 className="inv-pres-title">{item.title}</h3>
                <p className="inv-pres-desc">{item.desc}</p>

                <div className="inv-pres-footer">
                  <span className="inv-pres-badge">{item.format} &bull; {item.size}</span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inv-pres-btn"
                    aria-label={`Download ${item.title}`}
                  >
                    <span>Download</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Executive Video Feature Strip */}
          <div className="inv-pres-video-strip tone-card-light motion-fade-up stagger-1" style={{ marginTop: 'clamp(36px, 5vh, 52px)' }}>
            <div className="inv-pres-video-content">
              <span className="inv-pres-video-kicker">EXECUTIVE VIDEO BRIEFING</span>
              <h3 className="inv-pres-video-title">Harper Basin Technical Programme &amp; Strategy Overview</h3>
              <p className="inv-pres-video-desc">
                Watch executive management review BluEnergies’ corporate mandate, the 35% carried partnership with TotalEnergies, and the active 6,167 km² 3D seismic reprocessing campaign.
              </p>
            </div>
            <a
              href="https://www.youtube.com/watch?v=-ZmxXdsUQsU"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Watch executive briefing &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
