import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function Asset() {
  return (
    <Section background="foam" id="assets-operations">
      <div className="assets-split-grid">
        {/* Left: Narrative and CTA */}
        <div>
          <Eyebrow text="Assets & operations" theme="light" />
          <h2>Harper Basin, offshore Liberia.</h2>
          <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Seismic reprocessing and seabed surveys are under way with TotalEnergies to firm up drillable prospects and, later, well locations.
          </p>
          <p style={{ color: 'var(--ink)', marginBottom: '2rem' }}>
            Reconnaissance Licence RL-003 covers 8,924 km² across three contiguous ultra-deepwater blocks. The work programme leverages high-resolution 3D reprocessing alongside multibeam bathymetric coring to map stratigraphic trapping and direct hydrocarbon indicators across the transform margin.
          </p>
          <div>
            <Button href="/assets-and-operations/overview/" variant="primary">
              Explore the asset
            </Button>
          </div>
        </div>

        {/* Right: Distinctive Ownership Panel */}
        <div className="ownership-panel">
          <h3 className="ownership-title">Who holds what</h3>
          <p className="ownership-desc">
            Reconnaissance licence RL-003. Expenditure under the licence is recoverable upon transition to production sharing contracts.
          </p>

          {/* Visual Ownership Split Bar */}
          <div className="ownership-bar-track" role="img" aria-label="Ownership distribution: BluEnergies 35%, TotalEnergies 65%">
            <div className="ownership-bar-blu">BluEnergies 35%</div>
            <div className="ownership-bar-total">TotalEnergies 65%</div>
          </div>

          {/* Legend */}
          <div className="ownership-legend">
            <div className="legend-blu">
              <span className="legend-dot" style={{ background: 'var(--deep-teal)' }}></span>
              <span><strong>BluEnergies</strong> (35% Interest)</span>
            </div>
            <div className="legend-total">
              <span className="legend-dot" style={{ background: 'var(--sand)' }}></span>
              <span><strong>TotalEnergies</strong> (65% Operator)</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
