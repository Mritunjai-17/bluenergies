import { notFound } from 'next/navigation';
import Eyebrow from '../../../../components/ui/Eyebrow';
import Section from '../../../../components/ui/Section';
import Button from '../../../../components/ui/Button';
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
      title: 'News Release Not Found'
    };
  }

  return {
    title: article.title,
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
    <>
      {/* News Detail Header */}
      <header className="page-hero" style={{ minHeight: '260px', paddingTop: '130px', paddingBottom: '50px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Eyebrow text="News release" theme="dark" />
          <div style={{ color: 'var(--teal)', fontWeight: 500, fontSize: '1rem', marginBottom: '12px', letterSpacing: '0.02em' }}>
            {article.date}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: 0 }}>
            {article.title}
          </h1>
        </div>

        <svg className="page-hero-wave" viewBox="0 0 1440 28" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 14C240 2 480 26 720 14C960 2 1200 26 1440 14V28H0V14Z" fill="#51C2C9" fillOpacity="0.12" />
        </svg>
      </header>

      {/* News Body Section */}
      <Section background="paper">
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Back Navigation Link */}
          <div style={{ marginBottom: '32px' }}>
            <Button href="/news-and-media/news/" variant="quiet">
              &larr; Back to all news
            </Button>
          </div>

          {/* Article Content */}
          <article className="news-body-content" style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink)' }}>
            {article.body.map((paragraph, idx) => {
              if (paragraph.includes('[CONTENT NEEDED')) {
                return (
                  <div key={idx} style={{ margin: '24px 0' }}>
                    <span className="content-needed">{paragraph}</span>
                  </div>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: '1.5rem', maxWidth: 'none' }}>
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Bottom Signoff & Share */}
          <div style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <strong>BluEnergies Ltd.</strong> (TSXV: BLU | OTCQX: BLUGF)<br />
              <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                Investor Relations: <a href="mailto:info@blu-energies.com" style={{ color: 'var(--deep-teal)' }}>info@blu-energies.com</a>
              </span>
            </div>
            <Button href="/news-and-media/news/" variant="secondary" theme="light">
              Back to all news
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
