import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';
import { team } from '../../data/team.ts';

export default function LeadershipIntro() {
  const leadershipPreview = team.slice(0, 4);

  return (
    <Section background="white" id="leadership">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <Eyebrow text="Leadership & Governance" theme="light" />
          <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', lineHeight: 1.2, margin: 0, color: 'var(--text-dark)' }}>
            Experienced Exploration Leadership
          </h2>
          <p className="lede" style={{ color: 'var(--text-secondary)', marginTop: '12px', marginBottom: 0, maxWidth: '75ch' }}>
            Guided by an experienced board and technical executive team with over a century of combined global hydrocarbon exploration and capital markets leadership.
          </p>
        </div>
        <Button href="/corporate/board-management/" variant="secondary" theme="light">
          Meet full leadership
        </Button>
      </div>

      <div className="leadership-cards-grid">
        {leadershipPreview.map((member) => (
          <div key={member.name} className="leadership-card">
            <div className="leadership-card-initials" aria-hidden="true">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="leadership-card-name">{member.name}</h3>
            <span className="leadership-card-role">{member.role}</span>
            <p className="leadership-card-bio">
              {member.bio.replace(/\[CONTENT NEEDED:.*?\]/g, '')}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
