'use client';

import { useState } from 'react';
import Link from 'next/link';
import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';
import { news } from '../../../data/news.ts';

export default function NewsPage() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const mediaTabs = [
    { label: 'News Releases', href: '/news-and-media/news/' },
    { label: 'In the Media', href: '/news-and-media/in-the-media/' }
  ];

  // Helper to determine category
  const getCategory = (title) => {
    if (title.toLowerCase().includes('private placement') || title.toLowerCase().includes('financing')) {
      return 'Financing';
    }
    if (title.toLowerCase().includes('totalenergies') || title.toLowerCase().includes('harper basin') || title.toLowerCase().includes('operations')) {
      return 'Exploration & Operations';
    }
    return 'Corporate Announcement';
  };

  const years = ['All', ...new Set(news.map(item => item.year))];
  const categories = ['All', 'Exploration & Operations', 'Financing', 'Corporate Announcement'];

  const filteredNews = news.filter(item => {
    const matchYear = selectedYear === 'All' || item.year === selectedYear;
    const cat = getCategory(item.title);
    const matchCat = selectedCategory === 'All' || cat === selectedCategory;
    return matchYear && matchCat;
  });

  // Featured lead story (first item in news list)
  const featuredItem = news[0];

  return (
    <div className="page-light-wrapper">
      {/* =========================================================
         1. NEWS HERO & SUBNAV (PREMIUM WARM IVORY TONE)
         Clean typographic editorial publication hero
         ========================================================= */}
      <section className="news-hero-section tone-ivory" aria-label="Newsroom Header">
        <div className="container">
          <SubnavTabs items={mediaTabs} activeHref="/news-and-media/news/" theme="light" ariaLabel="Media Sections" />

          <div className="news-hero-intro motion-fade-up">
            <Eyebrow text="News &amp; Media" theme="light" />
            <h1 className="news-hero-title">
              News Releases &amp; Regulatory Disclosures
            </h1>
            <div className="inv-accent-bar" aria-hidden="true"></div>
            <p className="news-hero-lede">
              Official regulatory releases, technical exploration milestones, and corporate updates from BluEnergies Ltd. (TSXV: BLU | OTCQX: BLUGF).
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. SINGLE FEATURED ANNOUNCEMENT (EDITORIAL LEAD STORY ON WARM IVORY)
         ========================================================= */}
      {featuredItem && (
        <section className="news-featured-section tone-ivory" aria-label="Featured Regulatory Release">
          <div className="container">
            <div className="news-featured-card tone-card-light motion-fade-up">
              <div className="news-featured-header">
                <span className="news-featured-tag">LATEST REGULATORY DISCLOSURE</span>
                <span className="news-featured-date">{featuredItem.date} &bull; TSXV Release</span>
              </div>

              <h2 className="news-featured-title">
                <Link href={`/news-and-media/news/${featuredItem.slug}/`}>
                  {featuredItem.title}
                </Link>
              </h2>

              <p className="news-featured-excerpt">{featuredItem.summary}</p>

              <div className="news-featured-footer">
                <Link
                  href={`/news-and-media/news/${featuredItem.slug}/`}
                  className="btn btn-primary"
                  aria-label={`Read release: ${featuredItem.title}`}
                >
                  Read full release &rarr;
                </Link>
                <span className="news-featured-disclosure">
                  Filed under continuous disclosure on SEDAR+ &bull; TSX Venture Tier 2
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
         3. ANNOUNCEMENT ARCHIVE & EDITORIAL FILTER BAR (WARM IVORY)
         Structured: DATE | CATEGORY | HEADLINE | ACTION
         ========================================================= */}
      <section className="news-archive-section tone-ivory" aria-label="News Archive">
        <div className="container">
          {/* Interactive Filters: Category and Year */}
          <div className="news-filter-bar motion-fade-up">
            <div className="news-filter-group" role="group" aria-label="Filter by Category">
              <span className="news-filter-label">CATEGORY:</span>
              <div className="news-filter-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`news-filter-pill ${selectedCategory === cat ? 'is-active' : ''}`}
                    aria-pressed={selectedCategory === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="news-filter-group" role="group" aria-label="Filter by Year">
              <span className="news-filter-label">YEAR:</span>
              <div className="news-filter-pills">
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    className={`news-filter-pill ${selectedYear === year ? 'is-active' : ''}`}
                    aria-pressed={selectedYear === year}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chronological Newsroom List (3-Column Editorial Grid: 18% Meta | 67% Content | 15% Action) */}
          <div className="news-editorial-list-wrap motion-fade-up stagger-1">
            {filteredNews.length > 0 ? (
              <div className="news-editorial-list" role="feed" aria-label="Corporate News Releases">
                {filteredNews.map((item) => {
                  const category = getCategory(item.title);
                  return (
                    <article key={item.slug} className="news-editorial-row">
                      {/* Column 1 (18%): Date & Category */}
                      <div className="news-row-col-meta">
                        <time dateTime={item.date} className="news-row-date">{item.date}</time>
                        <span className="news-row-category">{category}</span>
                      </div>

                      {/* Column 2 (67%): Headline & Short Description */}
                      <div className="news-row-col-content">
                        <h3 className="news-row-headline">
                          <Link href={`/news-and-media/news/${item.slug}/`} className="news-headline-link">
                            {item.title}
                          </Link>
                        </h3>
                        <p className="news-row-summary">{item.summary}</p>
                      </div>

                      {/* Column 3 (15%): Read Article Action */}
                      <div className="news-row-col-action">
                        <Link
                          href={`/news-and-media/news/${item.slug}/`}
                          className="news-editorial-link"
                          aria-label={`Read release: ${item.title}`}
                        >
                          <span>Read release</span>
                          <span aria-hidden="true" className="news-link-arrow">&rarr;</span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="news-no-results">
                <p>No regulatory releases match the selected filters ({selectedCategory}, {selectedYear}).</p>
                <button
                  type="button"
                  onClick={() => { setSelectedCategory('All'); setSelectedYear('All'); }}
                  className="btn btn-secondary-light"
                  style={{ marginTop: '12px' }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
