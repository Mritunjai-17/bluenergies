'use client';

import Link from 'next/link';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import { news } from '../../data/news.ts';
import { useInView } from '../../hooks/useMotion';

export default function LatestNews() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const featured = news[0];
  const stacked = news.slice(1, 4);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <div ref={sectionRef} id="latest-news" className="home-news-wrapper">
      <Section background="warm-white" className="home-news-section">
        {/* 1. Refined Editorial Header with Safe Clearances */}
        <div className={`home-news-header news-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
          <div className="news-header-left">
            <Eyebrow text="NEWS &amp; DISCLOSURES" theme="light" className="news-eyebrow" />
            <h2 className="news-title">
              Latest Corporate Announcements
            </h2>
            <p className="news-subtitle">
              Key corporate updates, financing milestones and operational progress from BluEnergies.
            </p>
          </div>

          <Link href="/news-and-media/news/" className="news-header-btn">
            <span>View all announcements</span>
            <span className="news-btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* 2. Symmetrical, Balanced Editorial Grid (Zero Whitespace Mismatch) */}
        <div className="home-news-editorial-grid">
          {/* Left Column: Prominent Featured Story */}
          {featured && (
            <article
              className={`home-news-lead-card motion-fade-up ${inView ? 'is-in-view' : ''}`}
              onMouseMove={handleCardMouseMove}
            >
              <div className="home-news-lead-visual">
                <img
                  src="/img/vessel-editorial-hires.jpg"
                  alt="Offshore seismic exploration vessel operating in deepwater West Africa"
                  className="home-news-lead-img"
                />
                <div className="home-news-lead-badge-strip">
                  <span className="home-news-tag">LATEST TSXV RELEASE</span>
                  <span className="home-news-date">{featured.date}</span>
                </div>
              </div>

              <div className="home-news-lead-content">
                <div className="home-news-lead-main">
                  <span className="home-news-lead-kicker">ADVISORY MANDATE &bull; TSXV: BLU</span>
                  
                  <h3 className="home-news-lead-title">
                    <Link href={`/news-and-media/news/${featured.slug}/`}>
                      {featured.title}
                    </Link>
                  </h3>

                  <p className="home-news-lead-summary">
                    {featured.summary}
                  </p>

                  {/* Structured Editorial Advisory Dossier */}
                  <div className="home-news-lead-brief">
                    <div className="home-news-lead-brief-header">
                      <span className="home-news-lead-brief-title">Strategic Mandate &amp; Highlights</span>
                      <span className="home-news-lead-brief-badge">SEDAR+ Verified</span>
                    </div>
                    <ul className="home-news-lead-brief-points">
                      <li>
                        <strong>Market Execution:</strong> Specialized capital markets advisors retained to expand institutional engagement across Canadian and European resource funds.
                      </li>
                      <li>
                        <strong>Asset Advancement:</strong> Providing commercial evaluation and operational support for planned exploration deliverables across Harper Basin RL-003.
                      </li>
                      <li>
                        <strong>Exchange Governance:</strong> Retention agreements executed pursuant to TSX Venture Exchange policies and standard corporate disclosure guidelines.
                      </li>
                    </ul>
                    <div className="home-news-lead-chips">
                      <span className="home-news-chip">Capital Markets Advisory</span>
                      <span className="home-news-chip">Harper Basin RL-003</span>
                      <span className="home-news-chip">TSXV: BLU</span>
                      <span className="home-news-chip">SEDAR+ Disclosure</span>
                    </div>
                  </div>
                </div>

                <div className="home-news-lead-footer">
                  <Link href={`/news-and-media/news/${featured.slug}/`} className="home-news-cta">
                    <span>Read full announcement</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <span className="home-news-disclosure-note">
                    Filed on SEDAR+ &bull; TSXV: BLU
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Right Column: Clean Editorial Stacked Rows with Synchronized Baseline Footer */}
          <div
            className={`home-news-stacked-list motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}
            onMouseMove={handleCardMouseMove}
          >
            <div className="home-news-stacked-items">
              {stacked.map((item, idx) => (
                <article key={item.slug} className={`home-news-stacked-row stagger-${idx + 1}`}>
                  <div className="home-news-row-meta">
                    <span className="home-news-row-badge">TSXV Release</span>
                    <time className="home-news-row-date">{item.date}</time>
                  </div>

                  <h3 className="home-news-row-title">
                    <Link href={`/news-and-media/news/${item.slug}/`} className="home-news-row-link">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="home-news-row-summary">
                    {item.summary}
                  </p>

                  <Link href={`/news-and-media/news/${item.slug}/`} className="home-news-row-action">
                    <span>Read release</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="home-news-stacked-footer">
              <Link href="/news-and-media/news/" className="home-news-cta">
                <span>View all announcements</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <span className="home-news-disclosure-note">
                SEDAR+ Disclosures Archive
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
