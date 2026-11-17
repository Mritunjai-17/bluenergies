import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import Button from '../../../components/ui/Button';
import { site } from '../../../data/site.ts';

export const metadata = {
  title: 'Contact Details',
  description: 'Corporate headquarters, management contacts, and investor relations for BluEnergies Ltd.'
};

export default function ContactDetailsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Details"
        lede="Get in touch with management, shareholder relations, and our corporate headquarters in Vancouver."
      />

      <Section background="paper">
        <div className="editorial-grid">
          {/* Contact Information Details */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Corporate Headquarters</h2>

            <div style={{ marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <strong>BluEnergies Ltd.</strong><br />
              {site.address}<br />
              {site.city}
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '8px' }}>General & Corporate Inquiries</h3>
              <p style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                Email: <a href={`mailto:${site.email}`} style={{ color: 'var(--deep-teal)', fontWeight: 600 }}>{site.email}</a>
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '8px' }}>Investor Relations</h3>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '4px' }}>
                Investor Relations Contact: <strong>Craig Steinke</strong>, Chief Executive Officer
              </p>
              <p style={{ fontSize: '1.05rem' }}>
                Email: <a href={`mailto:${site.email}`} style={{ color: 'var(--deep-teal)', fontWeight: 600 }}>{site.email}</a>
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '12px' }}>Official Channels</h3>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-light">
                  LinkedIn
                </a>
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-light">
                  YouTube
                </a>
                <a href={site.social.x} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-light">
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Action Box */}
          <div className="editorial-aside-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>Direct Information Requests</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
              To request specific geological presentations, financial reports, or arrange an executive briefing, please submit a formal request via our online form.
            </p>
            <Button href="/contact/request-for-information/" variant="primary">
              Submit information request
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
