'use client';

import { useState } from 'react';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function Hero() {
  const [layersOpen, setLayersOpen] = useState(false);
  const [activeLayers, setActiveLayers] = useState({
    bathymetry: true,
    surveyGrid: false,
    fans: true,
    licence: false
  });

  const toggleLayer = (key) => {
    setActiveLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
              <Eyebrow text="West Africa deepwater explorer" theme="dark" />
            </div>

            <h1 className="hero-h1 hero-anim-2">
              Reading the seabed before the rest of the margin does.
            </h1>

            <p className="hero-lede hero-anim-3">
              BluEnergies is advancing frontier deepwater exploration in West Africa&apos;s Harper Basin, identifying Cretaceous fan systems alongside operating partner TotalEnergies through high-resolution 3D seismic reprocessing and multibeam seabed surveys.
            </p>

            <div className="hero-buttons hero-anim-4">
              <Button href="/assets-and-operations/overview/" variant="primary">
                See our assets
              </Button>
              <Button href="/investors/outlook/" variant="secondary" theme="dark">
                Investor information
              </Button>
            </div>
          </div>

          {/* Right Column: Key Operational Metrics with Vertical Hairline Rule */}
          <div className="hero-col-stats hero-anim-3">
            <div className="hero-stats-group">
              <div className="hero-stat-item">
                <span className="hero-stat-number">35%</span>
                <p className="hero-stat-desc">
                  Interest in three Harper Basin blocks, offshore Liberia.
                </p>
              </div>

              <div className="hero-stat-divider" aria-hidden="true"></div>

              <div className="hero-stat-item">
                <span className="hero-stat-number">8,924 km<sup>2</sup></span>
                <p className="hero-stat-desc">
                  Licence area, partnered with TotalEnergies under Reconnaissance Licence RL-003.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Subtle Bottom Bar with Centered Scroll Cue and Secondary Layer Trigger */}
      <div className="hero-bottom-bar" aria-hidden="true">
        {/* Secondary Expandable Basin Data Layers Trigger */}
        <div className="hero-bottom-left">
          <button
            type="button"
            className="hero-layers-btn"
            onClick={() => setLayersOpen(!layersOpen)}
            aria-expanded={layersOpen}
            aria-label="Toggle basin survey data layers"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span>Basin survey layers</span>
            <svg className={`chevron-icon ${layersOpen ? 'is-open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1L5 5L9 1" />
            </svg>
          </button>

          {/* Expandable Layer Panel */}
          {layersOpen && (
            <div className="hero-layers-popover" role="dialog" aria-label="Survey Layers">
              <div className="layers-popover-header">
                <span className="layers-popover-title">Harper Basin Survey Layers</span>
                <span className="layers-popover-badge">RL-003</span>
              </div>
              <div className="layers-popover-list">
                <label className="layer-popover-item">
                  <input
                    type="checkbox"
                    checked={activeLayers.bathymetry}
                    onChange={() => toggleLayer('bathymetry')}
                  />
                  <span>Multibeam bathymetry (TDI-Brooks)</span>
                </label>
                <label className="layer-popover-item">
                  <input
                    type="checkbox"
                    checked={activeLayers.fans}
                    onChange={() => toggleLayer('fans')}
                  />
                  <span>Cretaceous fan systems (7 mapped)</span>
                </label>
                <label className="layer-popover-item">
                  <input
                    type="checkbox"
                    checked={activeLayers.surveyGrid}
                    onChange={() => toggleLayer('surveyGrid')}
                  />
                  <span>TGS 3D seismic reprocessing</span>
                </label>
                <label className="layer-popover-item">
                  <input
                    type="checkbox"
                    checked={activeLayers.licence}
                    onChange={() => toggleLayer('licence')}
                  />
                  <span>Reconnaissance Licence RL-003 boundary</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Centered Scroll Cue */}
        <a href="#who-we-are" className="hero-scroll-cue" aria-label="Scroll to company overview">
          <div className="mouse-icon">
            <span className="mouse-wheel"></span>
          </div>
          <span className="scroll-text">Scroll to explore</span>
          <svg className="scroll-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1L6 6L11 1" />
          </svg>
        </a>

        {/* Technical Coordinate Annotation (Right) */}
        <div className="hero-bottom-right">
          <span className="hero-geo-coords">HARPER BASIN &bull; 4&deg;18&prime;N 8&deg;24&prime;W</span>
        </div>
      </div>
    </section>
  );
}
