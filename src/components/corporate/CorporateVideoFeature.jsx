'use client';

import { useState, useEffect } from 'react';

/**
 * Editorial Corporate Video Showcase — BluEnergies Ltd.
 * Human-crafted editorial presentation for the Harper Basin Technical Programme.
 * Features:
 *  - Cinematic vessel preview with refined editorial typography (no AI dashboard boxes/pills)
 *  - Tactile, frosted obsidian play disc with subtle hover elevation
 *  - 100% unobstructed 16:9 playback canvas with stage controls cleanly OUTSIDE the iframe
 *  - Fullscreen Cinema Mode lightbox modal
 */
export default function CorporateVideoFeature() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const YOUTUBE_ID = '-ZmxXdsUQsU';
  const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  const handleStopInline = () => {
    setIsPlaying(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close active playback or modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isModalOpen) {
          handleCloseModal();
        } else if (isPlaying) {
          handleStopInline();
        }
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      if (isPlaying) {
        window.addEventListener('keydown', handleKeyDown);
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, isPlaying]);

  return (
    <div className="corp-media-wrapper motion-fade-up">
      {isPlaying ? (
        /* =========================================================
           ACTIVE 16:9 VIDEO STAGE (HUMAN DESIGN: 100% UNOBSTRUCTED)
           Stage controls sit cleanly OUTSIDE the video frame.
           Zero text or overlay collisions with YouTube native title.
           ========================================================= */
        <div className="corp-video-stage" role="region" aria-label="Corporate Overview Video Player">
          {/* Top Control Bar — Cleanly OUTSIDE and ABOVE the video */}
          <div className="corp-stage-header">
            <div className="corp-stage-info">
              <span className="corp-stage-live-dot" aria-hidden="true"></span>
              <span className="corp-stage-kicker">NOW STREAMING</span>
              <span className="corp-stage-sep" aria-hidden="true">&bull;</span>
              <h3 className="corp-stage-title">Harper Basin Technical Programme &amp; Corporate Overview</h3>
            </div>
            <div className="corp-stage-controls">
              <button
                type="button"
                className="corp-stage-btn"
                onClick={handleOpenModal}
                title="Expand to Cinema Lightbox"
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
                className="corp-stage-btn is-close"
                onClick={handleStopInline}
                title="Return to Cover State"
                aria-label="Close Video"
              >
                <span>Close Video</span>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          {/* Clean 16:9 Screen (Zero overlays over the video player) */}
          <div className="corp-stage-screen">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="BluEnergies Corporate Overview & Technical Programme"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="corp-stage-iframe"
            />
          </div>

          {/* Bottom Stage Metadata Ribbon — Cleanly OUTSIDE and BELOW the video */}
          <div className="corp-stage-footer">
            <div className="corp-stage-meta-strip">
              <span className="corp-stage-meta-item">
                <strong className="corp-stage-meta-label">Concession:</strong> Harper Basin (RL-003) &bull; Blocks LB-26, 30 &amp; 31
              </span>
              <span className="corp-stage-meta-divider" aria-hidden="true">&bull;</span>
              <span className="corp-stage-meta-item">
                <strong className="corp-stage-meta-label">Consortium:</strong> TotalEnergies (65% Operator) &bull; BluEnergies (35% Carried)
              </span>
              <span className="corp-stage-meta-divider" aria-hidden="true">&bull;</span>
              <span className="corp-stage-meta-item">
                <strong className="corp-stage-meta-label">Footprint:</strong> 8,924 km² Deepwater Fairway
              </span>
            </div>
            <a
              href={YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="corp-stage-yt-link"
            >
              <span>Watch on YouTube</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      ) : (
        /* =========================================================
           EDITORIAL COVER STATE (HUMAN CRAFTSMANSHIP: CLEAN & CONFIDENT)
           Eliminates repetitive boxes, neon pill badges, and AI clutter.
           ========================================================= */
        <div
          className="corp-media-frame"
          onClick={handleStartPlay}
          role="button"
          tabIndex={0}
          aria-label="Play BluEnergies Corporate Video & Technical Overview"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleStartPlay();
            }
          }}
        >
          {/* Authentic High-Resolution Offshore Exploration Vessel */}
          <div className="corp-media-bg">
            <img
              src="/img/vessel-editorial-hires.jpg"
              alt="Offshore seismic exploration vessel conducting broadband acquisition in deepwater West Africa"
              className="corp-media-img"
            />
            {/* Cinematic Filmic Gradient Overlay */}
            <div className="corp-media-vignette" aria-hidden="true"></div>
          </div>

          {/* Top Editorial Eyebrow Strip (Quiet, refined, unboxed) */}
          <div className="corp-media-header">
            <div className="corp-media-kicker-group">
              <span className="corp-media-pulse-dot" aria-hidden="true"></span>
              <span className="corp-media-kicker">OFFSHORE EXPLORATION CAMPAIGN &bull; HARPER BASIN RL-003</span>
            </div>
            <span className="corp-media-duration">4:17 MIN</span>
          </div>

          {/* Center Tactile Play Trigger */}
          <div className="corp-media-center">
            <div className="corp-play-button" aria-hidden="true">
              <div className="corp-play-ring"></div>
              <svg
                className="corp-play-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="corp-play-prompt">Play Corporate &amp; Technical Overview</span>
          </div>

          {/* Bottom Editorial Content & Metadata Ribbon (No nested cards or individual boxes) */}
          <div className="corp-media-footer">
            <div className="corp-media-text-block">
              <h3 className="corp-media-title">
                Harper Basin Technical Programme &amp; Corporate Overview
              </h3>
              <p className="corp-media-subtitle">
                High-Resolution 3D Broadband Seismic Reprocessing &bull; TotalEnergies Partnership &bull; 1080p HD
              </p>
            </div>

            {/* Continuous, Borderless Specification Strip */}
            <div className="corp-media-meta-ribbon">
              <div className="corp-media-meta-col">
                <span className="corp-meta-key">CONCESSION FOOTPRINT</span>
                <span className="corp-meta-val">8,924 km² &bull; Blocks LB-26, 30 &amp; 31</span>
              </div>
              <div className="corp-media-meta-sep" aria-hidden="true"></div>
              <div className="corp-media-meta-col">
                <span className="corp-meta-key">OPERATING CONSORTIUM</span>
                <span className="corp-meta-val">TotalEnergies (65%) &bull; BluEnergies (35%)</span>
              </div>
              <div className="corp-media-meta-sep" aria-hidden="true"></div>
              <div className="corp-media-meta-col">
                <span className="corp-meta-key">OFFICIAL PRESENTATION</span>
                <span className="corp-meta-val">1080p HD Exploration Footage</span>
              </div>
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
