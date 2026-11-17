import Link from 'next/link';
import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import { team } from '../../../data/team.ts';

export const metadata = {
  title: 'Board & Management',
  description: 'Executive management and independent board of directors of BluEnergies Ltd.'
};

export default function BoardManagementPage() {
  const management = team.filter((m) => m.category === 'management');
  const board = team.filter((m) => m.category === 'board');

  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title="Board & Management"
        lede="An executive and advisory team combining decades of deepwater exploration experience, major operator leadership, and capital markets discipline."
      />

      {/* Executive Management Section */}
      <Section background="paper">
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--navy)' }}>Executive Management</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
            Directing day-to-day operations, joint-venture partner alignment with TotalEnergies, and technical work programmes.
          </p>
        </div>

        <div className="team-grid">
          {management.map((member) => (
            <article key={member.name} className="team-card">
              <div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
              </div>
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Board of Directors Section */}
      <Section background="foam">
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--navy)' }}>Board of Directors</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
            Providing independent governance, risk management oversight, and strategic guidance across our exploration portfolio.
          </p>
        </div>

        <div className="team-grid">
          {board.map((member) => (
            <article key={member.name} className="team-card">
              <div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
              </div>
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>

        {/* Governance Note */}
        <div style={{
          marginTop: '48px',
          paddingTop: '28px',
          borderTop: '1px solid var(--line)',
          fontSize: '0.92rem',
          color: 'var(--muted)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          <span>The majority of the Board of Directors of BluEnergies Ltd. are independent under Canadian securities regulations.</span>
          <Link href="/corporate/corporate-governance/" className="btn-quiet">Corporate governance policies &rarr;</Link>
        </div>
      </Section>
    </>
  );
}
