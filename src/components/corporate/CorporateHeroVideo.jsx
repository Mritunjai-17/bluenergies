'use client';

import { useState, useEffect } from 'react';

/**
 * Editorial Corporate Hero Video Showcase
 * Human-crafted editorial presentation tailored for the 2-column About Us hero.
 * Features:
 *  - Cinematic vessel preview with refined editorial typography (no AI dashboard boxes/pills)
 *  - Tactile, frosted obsidian play disc with subtle hover elevation
 *  - 100% unobstructed 16:9 playback canvas with stage controls cleanly OUTSIDE the iframe
 *  - Fullscreen Cinema Mode lightbox modal
 */
export default function CorporateHeroVideo() {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const YOUTUBE_ID = '-ZmxXdsUQsU';
  const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;

  const handleStartPlay = () => {
    setIsPlayingInline(true);
  };

  const handleStopInline = () => {
    setIsPlayingInline(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Keyboard shortcut (Escape) to close active video or modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isModalOpen) {
          handleCloseModal();
        } else if (isPlayingInline) {
          handleStopInline();
        }
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      if (isPlayingInline) {
        window.addEventListener('keydown', handleKeyDown);
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, isPlayingInline]);

  return (
    <div className="corp-hero-visual-wrap">
      {isPlayingInline ? (
        /* =========================================================
           ACTIVE 16:9 INLINE VIDEO STAGE (HUMAN DESIGN: ZERO OVERLAYS)
           Controls sit completely OUTSIDE and ABOVE the video frame.
           Zero text or button collisions with YouTube native player.
           ========================================================= */
        <div className="hero-inline-stage" role="region" aria-label="Corporate Overview Video Player">
          {/* Top Control Bar — Cleanly OUTSIDE and ABOVE the video */}
          <div className="hero-inline-header">
            <div className="hero-inline-badge">
              <span className="hero-inline-live-dot" aria-hidden="true"></span>
              <span className="hero-inline-kicker">NOW STREAMING</span>
              <span className="hero-inline-sep" aria-hidden="true">&bull;</span>
              <span className="hero-inline-title">Harper Basin RL-003</span>
            </div>
            <div className="hero-inline-actions">
              <button
                type="button"
                className="hero-inline-btn"
                onClick={handleOpenModal}
                title="Expand to Fullscreen Cinema Mode"
                aria-label="Expand to Cinema Mode"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                <span>Cinema Mode</span>
              </button>
              <button
                type="button"
                className="hero-inline-btn is-close"
                onClick={handleStopInline}
                title="Return to poster cover"
                aria-label="Close Video"
              >
                <span>Close</span>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          {/* Clean 16:9 Screen (Completely unobstructed, zero overlays) */}
          <div className="hero-inline-screen">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="BluEnergies Corporate Overview & Technical Programme"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="hero-inline-iframe"
            />
          </div>

          {/* Bottom Stage Metadata — Cleanly OUTSIDE and BELOW the video */}
          <div className="hero-inline-footer">
            <span className="hero-inline-caption">
              TotalEnergies (65% Op) &bull; BluEnergies (35%) &bull; Blocks LB-26, 30 &amp; 31
            </span>
            <a
              href={YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-inline-yt-link"
            >
              <span>Watch on YouTube</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      ) : (
        /* =========================================================
           EDITORIAL POSTER COVER STATE (HUMAN DESIGN: RESTRAINED & CLEAN)
           No generic AI dashboard boxes or nested borders.
           ========================================================= */
        <div
          className="hero-video-poster"
          onClick={handleStartPlay}
          role="button"
          tabIndex={0}
          aria-label="Play Harper Basin Technical Programme & Corporate Overview Video"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleStartPlay();
            }
          }}
        >
          {/* Authentic High-Resolution Offshore Exploration Vessel */}
          <div className="hero-video-image-box">
            <img
              src="/img/vessel-editorial-hires.jpg"
              alt="Offshore seismic exploration vessel conducting broadband acquisition in deepwater Liberia"
              className="hero-video-img"
            />
            {/* Cinematic Filmic Gradient Overlay */}
            <div className="hero-video-overlay" aria-hidden="true"></div>
          </div>

          {/* Top Tag: Quiet Editorial Micro-Label (Unboxed) */}
          <div className="hero-video-top-tag">
            <div className="hero-video-tag-group">
              <span className="hero-video-tag-dot" aria-hidden="true"></span>
              <span className="hero-video-tag-text">
                TECHNICAL PROGRAMME &bull; OFFSHORE LIBERIA
              </span>
            </div>
            <span className="hero-video-duration">4:17 MIN</span>
          </div>

          {/* Center Play Control */}
          <div className="hero-video-center-trigger">
            <div className="hero-play-disc" aria-hidden="true">
              <div className="hero-play-disc-ring"></div>
              <svg
                className="hero-play-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="hero-play-prompt">Play Corporate Overview</span>
          </div>

          {/* Bottom Editorial Caption */}
          <div className="hero-video-caption-bar">
            <div className="hero-video-caption-content">
              <h3 className="hero-video-caption-title">
                Harper Basin Technical Programme &amp; Corporate Overview
              </h3>
              <p className="hero-video-caption-sub">
                TotalEnergies Joint Exploration &bull; Reconnaissance Licence RL-003 &bull; 1080p HD
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
         CINEMA-GRADE EXPANDED MODAL LIGHTBOX
         Header and Footer are strictly OUTSIDE the 16:9 video frame
         ========================================================= */}
      {isModalOpen && (
        <div
          className="corp-video-modal-backdrop"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="Corporate Overview Video Player"
        >
          <div
            className="corp-video-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header — Outside Video */}
            <div className="corp-video-modal-header">
              <div className="corp-video-modal-title">
                <span className="corp-modal-dot" aria-hidden="true"></span>
                <span>BluEnergies Ltd. &mdash; Harper Basin Technical Programme &amp; Corporate Overview</span>
              </div>
              <button
                type="button"
                className="corp-video-modal-close"
                onClick={handleCloseModal}
                aria-label="Close cinema player"
              >
                &times;
              </button>
            </div>

            {/* Modal Body — Pure 16:9 canvas with ZERO overlays */}
            <div className="corp-video-modal-body">
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="BluEnergies Ltd. — Offshore Operations & Corporate Mandate"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="corp-video-player"
              />
            </div>

            {/* Modal Footer — Outside Video */}
            <div className="corp-video-modal-footer">
              <span>Official Exploration Footage &bull; TotalEnergies Partnership RL-003 &bull; Deepwater Liberia</span>
              <a
                href={YOUTUBE_WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="corp-modal-link"
              >
                Watch on YouTube.com &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
