'use client';

import { useState, useEffect } from 'react';

/**
 * Human-Crafted Editorial Corporate Video Showcase.
 * Features an authentic exploration vessel cover state and a dedicated
 * 16:9 playback stage with zero overlapping overlays.
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
           ACTIVE 16:9 VIDEO STAGE (HUMAN DESIGN: ZERO OVERLAYS)
           ========================================================= */
        <div className="corp-video-stage">
          {/* Top Stage Control Header - Cleanly ABOVE the video */}
          <div className="corp-stage-header">
            <div className="corp-stage-info">
              <span className="corp-stage-status-dot" aria-hidden="true"></span>
              <span className="corp-stage-label">NOW STREAMING</span>
              <span className="corp-stage-sep" aria-hidden="true">&bull;</span>
              <h3 className="corp-stage-title">Harper Basin Technical Programme &amp; Corporate Overview</h3>
            </div>
            <div className="corp-stage-controls">
              <button
                type="button"
                className="corp-stage-btn"
                onClick={handleOpenModal}
                title="Expand to Cinema Lightbox"
                aria-label="Theater Mode"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                <span>Theater Mode</span>
              </button>
              <button
                type="button"
                className="corp-stage-btn is-close"
                onClick={handleStopInline}
                title="Return to Overview Cover"
                aria-label="Close Video"
              >
                <span>Close Video</span>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          {/* Clean 16:9 Screen (Completely unobstructed, no text collision) */}
          <div className="corp-stage-screen">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="BluEnergies Corporate Overview & Technical Programme"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="corp-stage-iframe"
            />
          </div>

          {/* Bottom Stage Metadata Ribbon */}
          <div className="corp-stage-footer">
            <div className="corp-stage-meta-list">
              <div className="corp-stage-meta-item">
                <span className="corp-stage-meta-key">CONCESSION:</span>
                <span className="corp-stage-meta-val">Harper Basin (RL-003) &bull; Blocks LB-26, 30, 31</span>
              </div>
              <span className="corp-stage-meta-divider" aria-hidden="true">|</span>
              <div className="corp-stage-meta-item">
                <span className="corp-stage-meta-key">PARTNER:</span>
                <span className="corp-stage-meta-val">TotalEnergies (65% Operator)</span>
              </div>
              <span className="corp-stage-meta-divider" aria-hidden="true">|</span>
              <div className="corp-stage-meta-item">
                <span className="corp-stage-meta-key">ACREAGE:</span>
                <span className="corp-stage-meta-val">8,924 km² Deepwater Fairway</span>
              </div>
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
           COVER STATE (EDITORIAL VESSEL THUMBNAIL)
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
          {/* Background exploration vessel photo (ready for custom thumbnail) */}
          <div className="corp-media-bg">
            <img
              src="/img/news-vessel-hires.png"
              alt="Offshore seismic exploration vessel operating in deepwater West Africa"
              className="corp-media-img"
            />
            <div className="corp-media-overlay"></div>
          </div>

          {/* Top Cartographic / Programme Metadata Badges */}
          <div className="corp-media-header">
            <span className="corp-media-badge">
              <span className="corp-media-dot" aria-hidden="true"></span>
              OFFSHORE EXPLORATION CAMPAIGN &bull; WEST AFRICA
            </span>
            <span className="corp-media-tag">RECONNAISSANCE LICENCE RL-003</span>
          </div>

          {/* Centre Play Action */}
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

            <div className="corp-media-titles">
              <h3 className="corp-media-title">
                Harper Basin Technical Programme &amp; Corporate Overview
              </h3>
              <p className="corp-media-subtitle">
                High-Resolution Exploration Operations &bull; TotalEnergies Partnership RL-003
              </p>
            </div>
          </div>

          {/* Bottom Technical Status Ribbon */}
          <div className="corp-media-footer">
            <div className="corp-media-stat">
              <span className="corp-stat-label">EXPLORATION FOOTPRINT</span>
              <span className="corp-stat-val">8,924 km² (Blocks LB-26, 30, 31)</span>
            </div>
            <div className="corp-media-divider" aria-hidden="true">|</div>
            <div className="corp-media-stat">
              <span className="corp-stat-label">OPERATING CONSORTIUM</span>
              <span className="corp-stat-val">TotalEnergies (65%) &amp; BluEnergies (35%)</span>
            </div>
            <div className="corp-media-divider" aria-hidden="true">|</div>
            <div className="corp-media-stat">
              <span className="corp-stat-label">OFFICIAL PRESENTATION</span>
              <span className="corp-stat-val">1080p HD Video &bull; 4:17 min</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Cinema-Grade Video Modal */}
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
            <div className="corp-video-modal-header">
              <div className="corp-video-modal-title">
                <span className="corp-modal-dot"></span>
                <span>BluEnergies Ltd. — Harper Basin Technical Programme &amp; Corporate Overview</span>
              </div>
              <button
                type="button"
                className="corp-video-modal-close"
                onClick={handleCloseModal}
                aria-label="Close video player"
              >
                &times;
              </button>
            </div>

            <div className="corp-video-modal-body">
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="BluEnergies Ltd. — Offshore Operations & Corporate Mandate"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="corp-video-player"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>

            <div className="corp-video-modal-footer">
              <span>Official Video: BluEnergies Frontier Exploration in the Harper Basin</span>
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
