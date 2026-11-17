import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import DownloadLink from '../../../components/ui/DownloadLink';

export const metadata = {
  title: 'Corporate Governance',
  description: 'Corporate governance policies, board committee charters, and business conduct guidelines.'
};

export default function CorporateGovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title="Corporate Governance"
        lede="Maintaining rigorous governance, transparent shareholder communications, and prudent oversight across all international activities."
      />

      <Section background="paper">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>Our governance commitment</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              The Board of Directors of BluEnergies Ltd. is committed to sound corporate governance practices designed to maintain shareholder confidence, safeguard corporate assets, and ensure strict compliance with TSX Venture Exchange and Canadian securities standards.
            </p>
            <p>
              Our governance structure emphasizes independent board leadership, rigorous committee oversight of internal controls, transparent public reporting, and adherence to international environmental, social, and health and safety (HSE) benchmarks during offshore operations.
            </p>
            <p>
              The Audit Committee is chaired by independent director Cyrus Driver, CPA, CA, and oversees quarterly and annual financial reviews, engagement with external auditors, and risk assessment procedures.
            </p>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginTop: '2.5rem', marginBottom: '1rem' }}>Core principles</h3>
            <ul style={{ listStyle: 'square', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--ink)' }}>
              <li><strong>Board Independence:</strong> Ensuring independent, non-executive directors provide effective objective oversight.</li>
              <li><strong>Financial Accountability:</strong> Maintaining verifiable accounting standards and internal controls.</li>
              <li><strong>Operational Stewardship:</strong> Partnering with tier-one operators (TotalEnergies) adhering to international offshore HSE standards.</li>
              <li><strong>Ethical Conduct & Anti-Corruption:</strong> Zero-tolerance policies for bribery, corruption, or regulatory non-compliance in foreign jurisdictions.</li>
            </ul>
          </div>

          {/* Downloadable Governance Charters */}
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '1.25rem' }}>Governance Documents</h3>

            <DownloadLink
              title="Audit Committee Charter"
              href="#"
              format="PDF"
              size="180 KB"
              date="2026"
            />

            <DownloadLink
              title="Code of Business Conduct & Ethics"
              href="#"
              format="PDF"
              size="210 KB"
              date="2026"
            />

            <DownloadLink
              title="Corporate Disclosure & Insider Trading Policy"
              href="#"
              format="PDF"
              size="195 KB"
              date="2026"
            />

            <DownloadLink
              title="Whistleblower Policy"
              href="#"
              format="PDF"
              size="160 KB"
              date="2026"
            />

            <DownloadLink
              title="Majority Voting Policy"
              href="#"
              format="PDF"
              size="140 KB"
              date="2026"
            />

            <div style={{ marginTop: '24px', padding: '16px', background: 'var(--foam)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--muted)' }}>
              <span>Official charters adopted in accordance with National Policy 58-201 <em>Corporate Governance Guidelines</em>.</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
