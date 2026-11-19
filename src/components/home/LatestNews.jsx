'use client';

import Link from 'next/link';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import { news } from '../../data/news.ts';
import { useInView } from '../../hooks/useMotion';

export default function LatestNews() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const featured = news[0];
  const stacked = news.slice(1, 3);

  return (
    <div ref={sectionRef}>
      <Section background="warm-white" id="latest-news" className="news-section">
      {/* 1. Editorial Header Row */}
      <div className={`news-header motion-fade-up ${inView ? 'is-in-view' : ''}`}>
        <div className="news-header-left">
          <Eyebrow text="NEWS & DISCLOSURES" theme="light" className="news-eyebrow" />
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

      {/* 2. Asymmetric Editorial Grid (Featured Left + Stacked Right) */}
      <div className="news-editorial-grid">
        {/* Left Column: Prominent Featured Card */}
        {featured && (
          <article className={`news-featured-card motion-fade-up ${inView ? 'is-in-view' : ''}`}>
            <div className="news-featured-visual">
              <img
                src="/img/news-vessel-hires.png"
                alt="Offshore seismic exploration vessel at sunset"
                className="news-featured-img"
              />
              <svg
                className="news-featured-curve"
                viewBox="0 0 100 400"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M 100 0 C 65 110 40 250 0 400 L 100 400 Z" fill="#061D2E" />
                <path d="M 100 0 C 65 110 40 250 0 400" fill="none" stroke="#26D0CE" strokeWidth="2.5" opacity="0.75" />
              </svg>
            </div>

            <div className="news-featured-content">
              <div className="news-featured-top">
                <div className="news-featured-meta">
                  <span className="news-featured-date">{featured.date}</span>
                  <span className="news-featured-badge">TSXV Release</span>
                </div>

                <h3 className="news-featured-title">
                  <Link href={`/news-and-media/news/${featured.slug}/`} className="news-featured-link">
                    {featured.title}
                  </Link>
                </h3>

                <p className="news-featured-summary">
                  {featured.summary}
                </p>
              </div>

              <div className="news-featured-bottom">
                <Link href={`/news-and-media/news/${featured.slug}/`} className="news-featured-cta">
                  <span>Read announcement</span>
                  <span className="news-cta-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Right Column: Stacked Announcements */}
        <div className="news-stacked-list">
          {stacked.map((item, idx) => (
            <article key={item.slug} className={`news-stacked-item motion-fade-up stagger-${idx + 1} ${inView ? 'is-in-view' : ''}`}>
              <div className="news-stacked-meta">
                <span className="news-stacked-date">{item.date}</span>
                <span className="news-stacked-badge">TSXV Release</span>
              </div>

              <div className="news-stacked-heading-row">
                <div className="news-stacked-bar" aria-hidden="true"></div>
                <h3 className="news-stacked-title">
                  <Link href={`/news-and-media/news/${item.slug}/`} className="news-stacked-link">
                    {item.title}
                  </Link>
                </h3>
              </div>

              <p className="news-stacked-summary">
                {item.summary}
              </p>

              <div>
                <Link href={`/news-and-media/news/${item.slug}/`} className="news-stacked-cta">
                  <span>Read announcement</span>
                  <span className="news-cta-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  </div>
  );
}
