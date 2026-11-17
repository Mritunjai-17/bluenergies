'use client';

import { useState } from 'react';
import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import NewsRow from '../../../components/ui/NewsRow';
import { news } from '../../../data/news.ts';

export default function NewsPage() {
  const [selectedYear, setSelectedYear] = useState('All');
  const years = ['All', ...new Set(news.map(item => item.year))];

  const filteredNews = selectedYear === 'All'
    ? news
    : news.filter(item => item.year === selectedYear);

  return (
    <>
      <PageHero
        eyebrow="News & media"
        title="News Releases"
        lede="Official regulatory announcements, exploration updates, and corporate disclosures from BluEnergies Ltd."
      />

      <Section background="warm-white">
        <div>
          {/* Year Filter Bar */}
          <div className="filter-bar" style={{ marginBottom: '40px' }}>
            {years.map((year) => (
              <button
                key={year}
                className={`filter-pill ${selectedYear === year ? 'is-active' : ''}`}
                onClick={() => setSelectedYear(year)}
                type="button"
              >
                {year}
              </button>
            ))}
          </div>

          {/* Chronological News Rows List */}
          <div className="news-list" style={{ borderTop: '1px solid var(--line)' }}>
            {filteredNews.map((item) => (
              <div key={item.slug}>
                <NewsRow
                  date={item.date}
                  title={item.title}
                  href={`/news-and-media/news/${item.slug}/`}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
