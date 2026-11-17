'use client';

import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="hero-wrapper" aria-label="Introduction">
      {/* 1. Real Oceanic Photographic Background (z-index: 1) */}
      <div className="hero-bg-layer" aria-hidden="true">
        <img
          src="/img/hero-seabed-bg.jpg"
          alt="Deepwater oceanic margin with natural sunlight caustics and sediment seabed"
          className="hero-bg-photo"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      {/* 2. Main Centered Hero Container (z-index: 3) */}
      <div className="hero-container">
        <div className="hero-content-grid">
          {/* Left Column: Narrative & Action CTAs */}
          <div className="hero-col-narrative">
            <div className="hero-anim-1">
              <Eyebrow text="WEST AFRICA DEEPWATER EXPLORER" theme="dark" className="hero-eyebrow" />
            </div>

            <h1 className="hero-h1 hero-anim-2">
              Reading the seabed<br className="hero-h1-break" /> before the rest of<br className="hero-h1-break" /> the margin does.
            </h1>

            <div className="hero-accent-bar hero-anim-2" aria-hidden="true"></div>

            <p className="hero-lede hero-anim-3">
              BluEnergies is advancing frontier deepwater exploration in West Africa&apos;s Harper Basin, identifying Cretaceous fan systems alongside operating partner TotalEnergies through high-resolution 3D seismic reprocessing and multibeam seabed surveys.
            </p>

            <div className="hero-buttons hero-anim-4">
              <Button href="/assets-and-operations/overview/" variant="primary">
                See our assets &rarr;
              </Button>
              <Button href="/investors/outlook/" variant="secondary" theme="dark">
                Investor information &rarr;
              </Button>
            </div>
          </div>

          {/* Right Column: Key Operational Metrics with Vertical Hairline Rule & Icons */}
          <div className="hero-col-stats hero-anim-3">
            <div className="hero-stats-group">
              {/* Stat 1: 35% with Strata Layers Icon */}
              <div className="hero-stat-card">
                <div className="hero-stat-icon-wrap" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#51C2C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 12 12 17 22 12" />
                    <polyline points="2 17 12 22 22 17" />
                  </svg>
                </div>

                <div className="hero-stat-content">
                  <span className="hero-stat-number">35%</span>
                  <p className="hero-stat-desc">
                    Interest in three Harper Basin blocks, offshore Liberia.
                  </p>
                </div>
              </div>

              {/* Horizontal Separator Rule */}
              <div className="hero-stats-divider" aria-hidden="true"></div>

              {/* Stat 2: 8,924 km² with Location Map Pin Icon */}
              <div className="hero-stat-card">
                <div className="hero-stat-icon-wrap" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#51C2C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div className="hero-stat-content">
                  <span className="hero-stat-number hero-stat-area">
                    8,924 <span className="stat-unit">km<sup>2</sup></span>
                  </span>
                  <p className="hero-stat-desc">
                    Licence area, partnered with TotalEnergies under Reconnaissance Licence RL-003.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
