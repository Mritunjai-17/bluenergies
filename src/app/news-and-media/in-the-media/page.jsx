import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import { mediaArticles } from '../../../data/media.ts';

export const metadata = {
  title: 'In the Media',
  description: 'External news coverage and industry commentary covering BluEnergies Ltd. and West Africa deepwater exploration.'
};

export default function InTheMediaPage() {
  return (
    <>
      <PageHero
        eyebrow="News & media"
        title="In the Media"
        lede="External coverage, international industry commentary, and editorial features covering our offshore exploration operations."
      />

      <Section background="paper">
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Industry Coverage & Features</h2>
          <p className="lede" style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Articles and technical reports published by independent energy publications tracking West Africa’s deepwater margin and the Harper Basin work programme.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {mediaArticles.map((article) => (
              <article
                key={article.headline}
                style={{
                  padding: '24px',
                  background: 'var(--foam)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid var(--deep-teal)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  alignItems: 'center',
                  gap: '24px'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1.05rem' }}>{article.publication}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '2px' }}>{article.date}</div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <h3 style={{ fontSize: '1.18rem', marginBottom: '6px', color: 'var(--ink)' }}>{article.headline}</h3>
                  {article.notes && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted)', margin: 0 }}>
                      {article.isVerified ? article.notes : <span className="content-needed">{article.notes}</span>}
                    </p>
                  )}
                </div>

                <div style={{ justifySelf: 'end' }}>
                  {article.isVerified ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary-light"
                      style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                    >
                      Read article &rarr;
                    </a>
                  ) : (
                    <span className="content-needed" style={{ fontSize: '0.8rem' }}>Archive unverified</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
