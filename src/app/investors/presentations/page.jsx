import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import DownloadLink from '../../../components/ui/DownloadLink';
import { site } from '../../../data/site.ts';

export const metadata = {
  title: 'Presentations & Publications',
  description: 'Download investor slide presentations, fact sheets, independent research reports, and media briefings.'
};

export default function PresentationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Presentations & Publications"
        lede="Investor slide decks, factsheets, equity research reports, and executive video briefings."
      />

      <Section background="paper">
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Corporate Documents & Presentations</h2>
          <p className="lede" style={{ color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '75ch' }}>
            Key information documents detailing our exploration asset portfolio, regional geology along the West African margin, and corporate capital structure.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
            <DownloadLink
              title="Corporate Presentation — Exploration Overview"
              href={site.downloads.find(d => d.label === 'Corporate presentation')?.href || '#'}
              format="PDF"
              size="4.2 MB"
              date="Q3 2026"
            />

            <DownloadLink
              title="BluEnergies Investor Fact Sheet"
              href={site.downloads.find(d => d.label === 'Fact sheet')?.href || '#'}
              format="PDF"
              size="1.1 MB"
              date="2026"
            />

            <DownloadLink
              title="Independent Equity Research Report"
              href={site.downloads.find(d => d.label === 'Research report')?.href || '#'}
              format="PDF"
              size="1.8 MB"
              date="2026"
            />
          </div>

          <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem', borderTop: '1px solid var(--line)', paddingTop: '36px' }}>
            Media & Executive Briefings
          </h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.8rem' }}>
            Watch executive discussions and video presentations outlining the Harper Basin deepwater play.
          </p>

          <div>
            <DownloadLink
              title="Corporate Overview & West Africa Exploration Video"
              href={site.downloads.find(d => d.label === 'Corporate video')?.href || 'https://www.youtube.com/@BluEnergies'}
              format="Video (YouTube)"
              isExternal={true}
              date="2026"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
