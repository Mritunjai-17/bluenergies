import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';
import { mediaArticles } from '../../../data/media.ts';

export const metadata = {
  title: 'In the Media | Industry Coverage | BluEnergies Ltd.',
  description: 'External news coverage, trade publication commentary, and industry analysis covering BluEnergies Ltd. and West Africa deepwater exploration.'
};

export default function InTheMediaPage() {
  const mediaTabs = [
    { label: 'News Releases', href: '/news-and-media/news/' },
    { label: 'In the Media', href: '/news-and-media/in-the-media/' }
  ];

  return (
    <div className="page-light-wrapper">
      {/* =========================================================
         1. MEDIA HERO & SUBNAV (WARM IVORY TONE)
         ========================================================= */}
      <section className="news-hero-section tone-ivory" aria-label="Media Coverage Hero">
        <div className="container">
          <SubnavTabs items={mediaTabs} activeHref="/news-and-media/in-the-media/" theme="light" ariaLabel="Media Sections" />

          <div className="news-hero-intro motion-fade-up">
            <Eyebrow text="External Coverage" theme="light" />
            <h1 className="news-hero-title">
              In the Media &amp; Industry Publications
            </h1>
            <div className="inv-accent-bar" aria-hidden="true"></div>
            <p className="news-hero-lede">
              Independent coverage, geological trade features, and energy sector reporting tracking deepwater Atlantic Margin exploration in the Harper Basin.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. EDITORIAL MEDIA COVERAGE LIST (WARM IVORY TONE)
         ========================================================= */}
      <section className="news-archive-section tone-ivory" aria-label="Media Articles">
        <div className="container">
          <div className="media-editorial-list motion-fade-up">
            {mediaArticles.map((article) => (
              <article key={article.headline} className="media-editorial-card tone-card-light">
                <div className="media-card-top">
                  <div className="media-card-pub">
                    <strong className="media-pub-name">{article.publication}</strong>
                    <span className="media-pub-date">{article.date}</span>
                  </div>
                  {article.isVerified ? (
                    <span className="media-verified-badge">Verified Coverage</span>
                  ) : (
                    <span className="media-industry-tag">Industry Feature</span>
                  )}
                </div>

                <h2 className="media-card-title">{article.headline}</h2>
                <p className="media-card-excerpt">{article.excerpt}</p>

                <div className="media-card-footer">
                  <span className="media-card-topic">TOPIC: {article.topic || 'Atlantic Margin Exploration'}</span>
                  {article.sourceUrl ? (
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-card-link"
                      aria-label={`Read ${article.headline} on ${article.publication}`}
                    >
                      <span>Read article on publication</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : (
                    <span className="media-card-archive-note">Published in Print &amp; Digital Editions</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
