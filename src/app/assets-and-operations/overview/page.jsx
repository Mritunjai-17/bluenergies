import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import SeabedGraphic from '../../../components/widgets/SeabedGraphic';
import Button from '../../../components/ui/Button';

export const metadata = {
  title: 'Harper Basin, offshore Liberia — Assets & Operations',
  description: 'Exploring 8,924 km² of undrilled deepwater Cretaceous basin floor fans alongside operator TotalEnergies.'
};

export default function AssetsOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Assets & operations"
        title="Harper Basin, offshore Liberia."
        lede="Exploring 8,924 km² of undrilled deepwater Cretaceous basin floor fans alongside operator TotalEnergies."
      />

      {/* Section 1: The Play */}
      <Section background="paper" id="the-play">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>1. The play: Cretaceous basin floor fan complexes</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              The Harper Basin is a transform margin basin located in ultra-deep waters off southern Liberia, representing one of the few remaining lightly explored Cretaceous turbidite fan provinces along the West African Equatorial margin.
            </p>
            <p>
              Regional legacy seismic interpretation across Blocks LB-26, LB-30, and LB-31 has identified <strong>seven discrete Cretaceous basin floor fan systems</strong>. These fans exhibit high-amplitude stratigraphic seismic anomalies analogous to major commercial petroleum discoveries in Ghana (Jubilee, TEN), Côte d&apos;Ivoire (Baleine, Calao), and the conjugate margin in Guyana and Suriname.
            </p>
            <p>
              Thick marine shale sequences provide both rich Cenomanian-Turonian oil-prone source kitchens and regional top seals, while coarse submarine channel-fan sand bodies provide high-porosity reservoir intervals.
            </p>
          </div>

          <div>
            <div style={{ marginBottom: '16px' }}>
              <SeabedGraphic compact={true} />
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', padding: '0 4px' }}>
              <strong>Geological Cross-Section Model:</strong> Schematic representation of Cretaceous stratigraphic fan pinch-outs against continental slope shales with deepwater wellbore penetration trajectory.
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: The Partnership */}
      <Section background="foam" id="the-partnership">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>2. The partnership: Joint exploration with TotalEnergies</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              In January 2026, BluEnergies formalized a Joint Study and Assessment Agreement (JSAA) with energy supermajor TotalEnergies covering Reconnaissance Licence RL-003.
            </p>
            <p>
              Reconnaissance Licence RL-003 was granted by the Liberia Petroleum Regulatory Authority (LPRA) and encompasses 8,924 km² (approx. 2.2 million acres) across ultra-deepwater blocks LB-26, LB-30, and LB-31.
            </p>
            <p>
              Under the agreement, <strong>TotalEnergies holds 65% operating interest</strong> and <strong>BluEnergies holds 35% participating interest</strong>. The licence term remains valid through <strong>30 June 2027</strong>. Significantly, all approved exploration expenditures incurred during the reconnaissance term are eligible for recovery upon transitioning to petroleum sharing contracts.
            </p>
          </div>

          {/* Reusable Ownership Bar Panel */}
          <div className="ownership-panel">
            <h3 className="ownership-title">Licence Ownership Distribution</h3>
            <p className="ownership-desc">
              Reconnaissance licence RL-003 (LPRA-003). Valid through June 30, 2027. All agreed exploration expenditures are recoverable.
            </p>

            <div className="ownership-bar-track" role="img" aria-label="Ownership: BluEnergies 35%, TotalEnergies 65%">
              <div className="ownership-bar-blu">BluEnergies 35%</div>
              <div className="ownership-bar-total">TotalEnergies 65%</div>
            </div>

            <div className="ownership-legend">
              <div className="legend-blu">
                <span className="legend-dot" style={{ background: 'var(--deep-teal)' }}></span>
                <span><strong>BluEnergies</strong> (35% Working Interest)</span>
              </div>
              <div className="legend-total">
                <span className="legend-dot" style={{ background: 'var(--sand)' }}></span>
                <span><strong>TotalEnergies</strong> (65% Operator)</span>
              </div>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(81,194,201,0.2)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>
              Blocks LB-26, LB-30, LB-31 • 8,924 km² (~2.2M Acres)
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: The Work Programme */}
      <Section background="paper" id="the-work-programme">
        <div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>3. The work programme: Modern seismic & seabed surveys</h2>
          <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.8rem', maxWidth: '75ch' }}>
            BluEnergies and TotalEnergies are executing a comprehensive multi-phase technical campaign designed to mature high-grade geological prospects into drill-ready well targets.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '32px' }}>
            <div style={{ background: 'var(--foam)', padding: '28px', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--deep-teal)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '12px' }}>3D Seismic Reprocessing</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink)', marginBottom: 0 }}>
                International geophysical contractor <strong>TGS ASA</strong> is actively reprocessing <strong>6,167 km² of modern 3D seismic data</strong>. Advanced broadband processing routines and amplitude-versus-offset (AVO) modeling are being applied to delineate reservoir geometry, resolve stratigraphic trapping mechanisms, and evaluate Direct Hydrocarbon Indicators (DHIs).
              </p>
            </div>

            <div style={{ background: 'var(--foam)', padding: '28px', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--deep-teal)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '12px' }}>Multibeam & Seabed Coring</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink)', marginBottom: 0 }}>
                In partnership with GeoPartners and TDI-Brooks utilizing the research vessel <em>R/V GYRE</em>, a <strong>4,045 km² high-resolution Multibeam Echosounder (MBES)</strong> bathymetric survey is under way. The survey maps seafloor topography, detects active hydrocarbon seepage anomalies, and performs piston coring and heat flow measurements to calibrate thermal maturity models.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '48px', padding: '28px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '12px' }}>Path to drilling decisions</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '16px' }}>
              The integrated outputs from 3D reprocessing, seabed seepage coring, and thermal gradient analysis will directly support the refinement of drillable prospect candidates and the formal selection of well locations ahead of licence term conversion.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button href="/investors/presentations/" variant="primary">
                Download presentation
              </Button>
              <Button href="/investors/outlook/" variant="secondary" theme="light">
                View exploration outlook
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
