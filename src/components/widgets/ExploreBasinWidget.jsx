'use client';

import { useState } from 'react';

export default function ExploreBasinWidget({
  onToggleTrajectory,
  showTrajectory = true
}) {
  const [layers, setLayers] = useState({
    topography: true,
    fanSystems: true,
    trajectory: showTrajectory,
    licenceArea: false
  });

  const toggleLayer = (key) => {
    const updated = !layers[key];
    setLayers(prev => ({ ...prev, [key]: updated }));
    if (key === 'trajectory' && onToggleTrajectory) {
      onToggleTrajectory(updated);
    }
  };

  return (
    <aside className="explore-basin-panel" aria-label="Interactive geological layer controls">
      <div className="explore-basin-header">
        <span className="explore-basin-title">Explore the basin</span>
        <button
          type="button"
          className="explore-info-btn"
          aria-label="Layer information"
          title="Toggle 3D seismic interpretation and bathymetry layers"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
      </div>

      <div className="explore-layer-list">
        {/* Layer 1: Seabed topography */}
        <div className={`explore-layer-row ${layers.topography ? 'is-active' : ''}`}>
          <span className="layer-name">Seabed topography</span>
          <button
            type="button"
            className="layer-toggle-btn"
            onClick={() => toggleLayer('topography')}
            aria-label="Toggle seabed topography"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        {/* Layer 2: Fan systems */}
        <div className={`explore-layer-row ${layers.fanSystems ? 'is-active' : ''}`}>
          <span className="layer-name">
            Fan systems
            <svg className="layer-caret" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
          <button
            type="button"
            className="layer-toggle-btn"
            onClick={() => toggleLayer('fanSystems')}
            aria-label="Toggle Cretaceous fan systems"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        {/* Layer 3: Prospect trajectory */}
        <div className={`explore-layer-row ${layers.trajectory ? 'is-active' : ''}`}>
          <span className="layer-name">Prospect trajectory</span>
          <button
            type="button"
            className="layer-toggle-btn"
            onClick={() => toggleLayer('trajectory')}
            aria-label="Toggle drilled prospect trajectory path"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        {/* Layer 4: Licence area */}
        <div className={`explore-layer-row ${layers.licenceArea ? 'is-active' : ''}`}>
          <span className="layer-name">
            Licence area
            <svg className="layer-caret" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
          <button
            type="button"
            className="layer-toggle-btn"
            onClick={() => toggleLayer('licenceArea')}
            aria-label="Toggle concession licence boundary"
          >
            {layers.licenceArea ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
