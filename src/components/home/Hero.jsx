'use client';

import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="hero-wrapper" aria-label="Introduction">
      {/* 1. Offshore Exploration Vessel Cinematic Video Background (z-index: 1) */}
      <div className="hero-bg-layer" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-bg-video"
        >
          <source src="/videos/hero-ship.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
      </div>

      {/* 2. Main Centered Hero Container (z-index: 3) */}
      <div className="hero-container">
        <div className="hero-content-grid">
          {/* Narrative & Action CTAs */}
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
        </div>
      </div>
    </section>
  );
}
