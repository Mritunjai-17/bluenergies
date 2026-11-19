'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { team, TeamMember } from '../../data/team.ts';

export default function TeamDirectory() {
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = team.filter((m) => m.category === 'board');
  const managementMembers = team.filter((m) => m.category === 'management');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedMember) {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  const renderMemberCard = (member) => {
    const initials = member.name
      .split(' ')
      .map((n) => n[0])
      .join('');

    return (
      <article
        key={member.id}
        className="team-card-enhanced motion-fade-up"
        onClick={() => setSelectedMember(member)}
        role="button"
        tabIndex={0}
        aria-label={`View full biography for ${member.name}, ${member.role}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedMember(member);
          }
        }}
      >
        {/* Photo or Corporate Avatar */}
        <div className="team-card-photo-wrap">
          {member.image ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.role} at BluEnergies Ltd.`}
              className="team-card-photo"
              loading="lazy"
            />
          ) : (
            <div className="team-card-avatar-fallback">
              <span className="team-avatar-initials">{initials}</span>
              <span className="team-avatar-seal">BluEnergies</span>
            </div>
          )}

          {/* Committee / Independence Badge */}
          {member.committee && (
            <span className="team-card-badge is-highlight">{member.committee}</span>
          )}
          {member.isIndependent && !member.committee && (
            <span className="team-card-badge">Independent</span>
          )}
        </div>

        {/* Info */}
        <div className="team-card-info">
          <div className="team-card-category-tag">
            {member.category === 'board' ? 'Board of Directors' : 'Executive Management'}
          </div>

          <h3 className="team-card-name">{member.name}</h3>
          <div className="team-card-role">{member.role}</div>

          <p className="team-card-excerpt">{member.excerpt}</p>

          <div className="team-card-action">
            <span>Read full biography</span>
            <span className="team-card-arrow" aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="team-directory-container">
      {/* 1. Board of Directors Section */}
      <section className="team-group-section" aria-labelledby="board-heading">
        <div className="team-group-header">
          <div className="team-group-badge">Corporate Stewardship</div>
          <h2 id="board-heading" className="team-group-title">Board of Directors</h2>
          <p className="team-group-desc">
            Providing independent governance, risk management oversight, and strategic stewardship across BluEnergies&apos; Atlantic Margin exploration mandate.
          </p>
        </div>

        <div className="team-cards-grid">
          {boardMembers.map(renderMemberCard)}
        </div>
      </section>

      {/* 2. Executive Management Section */}
      <section className="team-group-section is-management" aria-labelledby="mgmt-heading">
        <div className="team-group-header">
          <div className="team-group-badge">Technical &amp; Operational Leadership</div>
          <h2 id="mgmt-heading" className="team-group-title">Executive Management</h2>
          <p className="team-group-desc">
            Directing technical work programmes, joint-venture partnership execution with TotalEnergies (RL-003), and corporate capital allocation.
          </p>
        </div>

        <div className="team-cards-grid is-three-col">
          {managementMembers.map(renderMemberCard)}
        </div>
      </section>

      {/* 3. Governance Compliance Bar */}
      <div className="team-governance-footer">
        <div className="team-gov-note">
          <span className="team-gov-icon" aria-hidden="true">&bull;</span>
          <span>
            The majority of the Board of Directors of BluEnergies Ltd. are independent under Canadian National Instrument 52-110 audit committee and governance guidelines.
          </span>
        </div>
        <Link href="/corporate/corporate-governance/" className="team-gov-link">
          Corporate governance policies &rarr;
        </Link>
      </div>

      {/* 4. Full Biography Interactive Modal */}
      {selectedMember && (
        <div
          className="team-modal-backdrop"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-member-name"
        >
          <div
            className="team-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="team-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close biography dialog"
            >
              &times;
            </button>

            <div className="team-modal-content">
              {/* Modal Left Column: Photo & Details */}
              <div className="team-modal-sidebar">
                <div className="team-modal-photo-wrap">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="team-modal-photo"
                    />
                  ) : (
                    <div className="team-modal-avatar-fallback">
                      <span className="team-modal-initials">
                        {selectedMember.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="team-modal-tags">
                  <span className="team-modal-pill">
                    {selectedMember.category === 'board' ? 'Board of Directors' : 'Executive Management'}
                  </span>
                  {selectedMember.isIndependent && (
                    <span className="team-modal-pill is-secondary">Independent Director</span>
                  )}
                  {selectedMember.committee && (
                    <span className="team-modal-pill is-accent">{selectedMember.committee}</span>
                  )}
                </div>

                <div className="team-modal-company-info">
                  <span className="team-modal-company-name">BluEnergies Ltd.</span>
                  <span className="team-modal-ticker">TSXV: BLU &bull; OTCQX: BLUGF</span>
                </div>
              </div>

              {/* Modal Right Column: Full Biography Narrative */}
              <div className="team-modal-body">
                <div className="team-modal-header">
                  <h3 id="modal-member-name" className="team-modal-name">
                    {selectedMember.name}
                  </h3>
                  <div className="team-modal-role">{selectedMember.role}</div>
                </div>

                <div className="team-modal-bio-text">
                  {selectedMember.bioParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="team-modal-footer">
                  <button
                    type="button"
                    className="team-modal-done-btn"
                    onClick={() => setSelectedMember(null)}
                  >
                    Close biography
                  </button>
                  <Link
                    href="/corporate/corporate-governance/"
                    className="team-modal-gov-link"
                    onClick={() => setSelectedMember(null)}
                  >
                    View governance charters &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
