import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import Button from '../../../components/ui/Button';
import TeamDirectory from '../../../components/corporate/TeamDirectory';

export const metadata = {
  title: 'Board & Management | BluEnergies Ltd. (TSXV: BLU | OTCQX: BLUGF)',
  description: 'Executive management and independent board of directors of BluEnergies Ltd., combining over a century of deepwater hydrocarbon discoveries, major operator leadership, and capital markets discipline.'
};

export default function BoardManagementPage() {
  return (
    <>
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="corp-hero-section is-team" aria-label="Board &amp; Management Overview">
        {/* Subtle Bathymetric Contour Lines */}
        <div className="corp-hero-contours-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 1440 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="corp-hero-contours-svg"
            preserveAspectRatio="none"
          >
            <path d="M880 -20 C1040 60 1220 30 1440 110" stroke="rgba(81, 194, 201, 0.12)" strokeWidth="0.8" fill="none" />
            <path d="M960 -20 C1100 90 1260 60 1440 160" stroke="rgba(81, 194, 201, 0.08)" strokeWidth="0.8" fill="none" />
            <path d="M-40 420 C180 380 400 450 640 420" stroke="rgba(81, 194, 201, 0.07)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="container">
          <div className="corp-team-hero-content motion-fade-up">
            {/* Top Corporate Nav Tabs */}
            <nav className="corp-subnav-tabs" aria-label="Corporate Pages">
              <Link href="/corporate/about-us/" className="corp-subnav-tab">
                About Us
              </Link>
              <Link href="/corporate/board-management/" className="corp-subnav-tab is-active" aria-current="page">
                Board &amp; Management
              </Link>
              <Link href="/corporate/corporate-governance/" className="corp-subnav-tab">
                Corporate Governance
              </Link>
            </nav>

            <div className="corp-team-hero-header">
              <Eyebrow text="Corporate Leadership" theme="dark" />
              <h1 className="corp-team-hero-title">
                Board &amp; Management
              </h1>
              <p className="corp-team-hero-lede">
                An experienced board and technical executive team with over a century of combined global hydrocarbon exploration, world-class basin discoveries, and capital markets discipline.
              </p>
            </div>

            <div className="corp-team-hero-actions">
              <Button href="/resources/presentations/corporate-presentation.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
                Download corporate presentation (PDF) &rarr;
              </Button>
              <Button href="/corporate/corporate-governance/" variant="secondary" theme="dark">
                View corporate governance charters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEAM DIRECTORY SECTION (BOARD & MANAGEMENT) */}
      <section className="corp-team-directory-section" aria-label="Corporate Directory">
        <div className="container">
          <TeamDirectory />
        </div>
      </section>
    </>
  );
}
