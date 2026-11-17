import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import DownloadLink from '../../../components/ui/DownloadLink';

export const metadata = {
  title: 'Annual General Meeting',
  description: 'Shareholder meeting dates, management proxy circulars, and voting materials for BluEnergies Ltd.'
};

export default function AgmPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Annual General Meeting"
        lede="Shareholder meeting schedules, management information circulars, voting instructions, and proxy materials."
      />

      <Section background="paper">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>Annual General Meeting of Shareholders</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.8rem' }}>
              BluEnergies Ltd. encourages all shareholders to exercise their right to vote by proxy or by participating in the annual meeting.
            </p>

            {/* Upcoming Meeting Details */}
            <div style={{ background: 'var(--foam)', borderLeft: '3px solid var(--deep-teal)', padding: '24px', borderRadius: '0 var(--radius-md) var(--radius-md) 0', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '8px' }}>Next Scheduled Meeting</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '6px' }}><strong>Date:</strong> [CONTENT NEEDED: Next AGM Date]</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '6px' }}><strong>Time:</strong> [CONTENT NEEDED: Time]</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '6px' }}><strong>Location:</strong> Vancouver, BC / Virtual Webcast</p>
              <p style={{ fontSize: '0.95rem', marginBottom: 0 }}><strong>Record Date:</strong> [CONTENT NEEDED: Record Date for Voting]</p>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', marginBottom: '1.25rem' }}>Meeting Materials & Proxies</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <DownloadLink
                title="Notice of Annual General Meeting and Management Information Circular"
                href="#"
                format="PDF"
                size="520 KB"
                date="2026"
              />
              <DownloadLink
                title="Form of Proxy / Voting Instruction Form (VIF)"
                href="#"
                format="PDF"
                size="210 KB"
                date="2026"
              />
              <DownloadLink
                title="Financial Statement Request Form"
                href="#"
                format="PDF"
                size="120 KB"
                date="2026"
              />
            </div>
          </div>

          {/* Voting Instructions Aside */}
          <div className="editorial-aside-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>How to Vote</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '14px' }}>
              <strong>Registered Shareholders:</strong> May vote in person at the meeting or by completing, signing, and returning the enclosed Form of Proxy to the transfer agent.
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '18px' }}>
              <strong>Beneficial (Non-Registered) Shareholders:</strong> You will receive a voting instruction form from your intermediary (broker, bank, or trust company). Please follow the instructions provided on that form.
            </p>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.85rem', color: 'var(--muted)' }}>
              Questions regarding voting your shares may be directed to <a href="mailto:info@blu-energies.com" style={{ color: 'var(--deep-teal)' }}>info@blu-energies.com</a>.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
