'use client';

import Link from 'next/link';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';
import { team } from '../../data/team.ts';

export default function LeadershipIntro() {
  // Top 4 executive board leaders
  const leadershipPreview = team.slice(0, 4);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <Section background="warm-white" id="leadership" className="home-leadership-section">
      <div className="motion-fade-up home-leadership-header">
        <div className="home-leadership-header-left">
          <Eyebrow text="Leadership &amp; Governance" theme="light" />
          <h2 className="home-leadership-title">
            Experienced Exploration Leadership
          </h2>
          <p className="home-leadership-lede">
            Guided by an experienced board and technical executive team with over a century of combined global hydrocarbon exploration and capital markets leadership.
          </p>
        </div>
        <Button href="/corporate/board-management/" variant="secondary" theme="light">
          Meet full leadership &rarr;
        </Button>
      </div>

      <div className="home-leadership-grid">
        {leadershipPreview.map((member, idx) => (
          <article
            key={member.id || member.name}
            className={`home-leader-card motion-fade-up stagger-${idx + 1}`}
            onMouseMove={handleCardMouseMove}
          >
            <Link
              href="/corporate/board-management/"
              className="home-leader-card-link"
              aria-label={`View biography of ${member.name}, ${member.role}`}
            >
              {/* Executive Portrait Frame */}
              <div className="home-leader-photo-wrap">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} at BluEnergies Ltd.`}
                    className="home-leader-photo"
                    loading="lazy"
                  />
                ) : (
                  <div className="home-leader-fallback">
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                )}

                {/* Governance Role Tag */}
                {member.committee ? (
                  <span className="home-leader-badge is-highlight">{member.committee}</span>
                ) : member.isIndependent ? (
                  <span className="home-leader-badge">Independent</span>
                ) : (
                  <span className="home-leader-badge">Executive</span>
                )}
              </div>

              {/* Leader Narrative */}
              <div className="home-leader-body">
                <h3 className="home-leader-name">{member.name}</h3>
                <span className="home-leader-role">{member.role}</span>
                <p className="home-leader-excerpt">{member.excerpt}</p>
                <div className="home-leader-action">
                  <span>View full biography</span>
                  <span className="home-leader-arrow" aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
