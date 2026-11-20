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

  return (
    <div ref={sectionRef} id="latest-news" className="home-news-wrapper">
      <Section background="warm-white" className="home-news-section">
        {/* 1. Editorial Header Row */}
        <div className={`news-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
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

        {/* 2. Human-Crafted Editorial Grid */}
        <div className="home-news-editorial-grid">
          {/* Left Column: Prominent Featured Story */}
          {featured && (
            <article className={`home-news-lead-card motion-fade-up ${inView ? 'is-in-view' : ''}`}>
              <div className="home-news-lead-visual">
                <img
                  src="/img/news-vessel-hires.png"
                  alt="Offshore seismic exploration vessel operating in deepwater West Africa"
                  className="home-news-lead-img"
                />
                <div className="home-news-lead-badge-strip">
                  <span className="home-news-tag">LATEST TSXV RELEASE</span>
                  <span className="home-news-date">{featured.date}</span>
                </div>
              </div>

              <div className="home-news-lead-content">
                <h3 className="home-news-lead-title">
                  <Link href={`/news-and-media/news/${featured.slug}/`}>
                    {featured.title}
                  </Link>
                </h3>

                <p className="home-news-lead-summary">
                  {featured.summary}
                </p>

                <div className="home-news-lead-footer">
                  <Link href={`/news-and-media/news/${featured.slug}/`} className="home-news-cta">
                    <span>Read full release</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <span className="home-news-disclosure-note">
                    Filed on SEDAR+ &bull; TSXV: BLU
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Right Column: Clean Editorial Stacked Rows */}
          <div className="home-news-stacked-list">
            {stacked.map((item, idx) => (
              <article key={item.slug} className={`home-news-stacked-row motion-fade-up stagger-${idx + 1} ${inView ? 'is-in-view' : ''}`}>
                <div className="home-news-row-meta">
                  <time className="home-news-row-date">{item.date}</time>
                  <span className="home-news-row-badge">TSXV Release</span>
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
        </div>
      </Section>
    </div>
  );
}
