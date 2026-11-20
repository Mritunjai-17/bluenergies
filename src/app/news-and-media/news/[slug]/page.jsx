import Link from 'next/link';
import { notFound } from 'next/navigation';
import Eyebrow from '../../../../components/ui/Eyebrow';
import { news } from '../../../../data/news.ts';

export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'News Release Not Found | BluEnergies Ltd.'
    };
  }

  return {
    title: `${article.title} | BluEnergies Ltd.`,
    description: article.summary
  };
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="page-light-wrapper">
      {/* Editorial Announcement Header (Warm Ivory Tone) */}
      <section className="article-header-section tone-ivory" aria-label="Article Header">
        <div className="container">
          <div className="article-nav-back">
            <Link href="/news-and-media/news/" className="article-back-link">
              <span aria-hidden="true">&larr;</span>
              <span>Back to all announcements</span>
            </Link>
          </div>

          <div className="article-header-content motion-fade-up">
            <div className="article-meta-row">
              <span className="article-date-badge">{article.date}</span>
              <span className="article-meta-sep" aria-hidden="true">&bull;</span>
              <span className="article-exchange-tag">TSXV: BLU &bull; OTCQX: BLUGF</span>
            </div>

            <h1 className="article-heading">
              {article.title}
            </h1>

            <div className="inv-accent-bar" aria-hidden="true"></div>

            <p className="article-lede">
              {article.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Reading Body (Warm Ivory Tone) */}
      <section className="article-body-section tone-ivory" aria-label="Announcement Content">
        <div className="container">
          <div className="article-layout-grid">
            {/* Primary Editorial Prose Measure (68ch) */}
            <article className="article-prose motion-fade-up">
              <div className="article-body-paragraphs">
                {article.body && article.body.map((p, idx) => (
                  <p key={idx} className="article-paragraph">
                    {p}
                  </p>
                ))}
              </div>

              {/* Official Corporate Signoff Ledger */}
              <div className="article-signoff tone-card-light">
                <div className="article-signoff-header">
                  <span className="article-signoff-badge">ON BEHALF OF THE BOARD OF DIRECTORS</span>
                  <h3 className="article-signoff-name">BluEnergies Ltd.</h3>
                </div>
                <p className="article-signoff-text">
                  <em>&ldquo;Craig Steinke&rdquo;</em><br />
                  Executive Chairman &amp; Chief Executive Officer
                </p>
                <div className="article-signoff-contacts">
                  <div className="signoff-contact-item">
                    <strong>Investor Relations Inquiries:</strong><br />
                    Email: <a href="mailto:info@blu-energies.com" className="signoff-link">info@blu-energies.com</a>
                  </div>
                  <div className="signoff-contact-item">
                    <strong>Corporate Headquarters:</strong><br />
                    Suite 2200 - 885 West Georgia Street, Vancouver, BC, V6C 3E8
                  </div>
                </div>
              </div>

              {/* Statutory Continuous Disclosure Footnote */}
              <footer className="article-legal-footnote">
                <p>
                  <strong>Cautionary Statement Regarding Forward-Looking Statements:</strong> Neither the TSX Venture Exchange nor its Regulation Services Provider (as that term is defined in the policies of the TSX Venture Exchange) accepts responsibility for the adequacy or accuracy of this release. This press release contains forward-looking information within the meaning of applicable Canadian securities legislation. Forward-looking statements are typically identified by words such as &ldquo;anticipate&rdquo;, &ldquo;plan&rdquo;, &ldquo;estimate&rdquo;, &ldquo;expect&rdquo;, &ldquo;may&rdquo;, &ldquo;will&rdquo;, &ldquo;project&rdquo; and similar expressions. These statements involve known and unknown risks, uncertainties and other factors that may cause actual results or events to differ materially from those anticipated in such statements.
                </p>
              </footer>
            </article>

            {/* Sidebar Sticky Quick-Nav & Metadata */}
            <aside className="article-sidebar motion-fade-up stagger-1">
              <div className="article-sidebar-card tone-card-light">
                <span className="sidebar-card-kicker">FILING SPECIFICATIONS</span>
                <dl className="sidebar-meta-list">
                  <div className="sidebar-meta-row">
                    <dt>Filing Date</dt>
                    <dd>{article.date}</dd>
                  </div>
                  <div className="sidebar-meta-row">
                    <dt>Primary Ticker</dt>
                    <dd>TSXV: BLU</dd>
                  </div>
                  <div className="sidebar-meta-row">
                    <dt>US Quotation</dt>
                    <dd>OTCQX: BLUGF</dd>
                  </div>
                  <div className="sidebar-meta-row">
                    <dt>Jurisdiction</dt>
                    <dd>British Columbia, Canada</dd>
                  </div>
                  <div className="sidebar-meta-row">
                    <dt>Official Register</dt>
                    <dd>SEDAR+ Profile</dd>
                  </div>
                </dl>
                <div className="sidebar-card-footer">
                  <Link href="/news-and-media/news/" className="sidebar-back-btn">
                    &larr; View all news releases
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
