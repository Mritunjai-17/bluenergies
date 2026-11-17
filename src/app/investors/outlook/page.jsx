import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import Button from '../../../components/ui/Button';

export const metadata = {
  title: 'Exploration Outlook & Strategy',
  description: 'Corporate strategy, funding position, and exploration milestones for BluEnergies Ltd.'
};

export default function OutlookPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Exploration Outlook & Strategy"
        lede="Positioned for high-impact catalyst delivery with fully funded technical programmes and an industry major partnership."
      />

      <Section background="paper">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2.1rem', marginBottom: '1.25rem' }}>Focused value creation along Africa&apos;s Atlantic margin</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              BluEnergies’ investment thesis centers on high-equity participation in frontier deepwater plays alongside world-class operating partners, executed with capital discipline and strict budget control.
            </p>
            <p>
              The company’s strategic partnership with TotalEnergies across Reconnaissance Licence RL-003 provides BluEnergies with immediate operational scale, access to cutting-edge technical workflows, and shared capital exposure in the 8,924 km² Harper Basin concession.
            </p>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', marginTop: '2rem', marginBottom: '1rem' }}>Capital Position & Funding</h3>
            <p>
              In July 2026, BluEnergies successfully closed an upsized, non-brokered private placement of 9,202,027 units at C$2.25 per unit, raising <strong>gross proceeds of approximately C$20.7 million</strong> from institutional resource funds and sophisticated natural resource investors.
            </p>
            <p>
              This capital injection ensures that BluEnergies is fully funded to meet its share of current technical commitments, including TGS 3D seismic reprocessing, regional seabed coring surveys with GeoPartners, thermal maturity modeling, and corporate working capital through the licence tenure ending June 30, 2027.
            </p>
          </div>

          {/* Financial Position Highlight Box */}
          <div className="editorial-aside-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>Investment Highlights</h3>
            <ul style={{ listStyle: 'square', paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.92rem', color: 'var(--ink)' }}>
              <li><strong>Tier-1 Supermajor Partnership:</strong> Partnered with TotalEnergies (65% operator), a recognized global leader in deepwater exploration and development.</li>
              <li><strong>Significant Equity:</strong> 35% participating working interest provides material leverage to commercial discovery.</li>
              <li><strong>Expenditure Recovery:</strong> Work programme expenditures under RL-003 are fully cost-recoverable upon PSC conversion.</li>
              <li><strong>Strong Treasury:</strong> C$20.7 million financing completed in July 2026 to fund technical programmes.</li>
              <li><strong>Prolific Analogue Margin:</strong> Geologically linked to major transform margin fan discoveries in Ghana, Côte d&apos;Ivoire, and Namibia.</li>
            </ul>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button href="/investors/presentations/" variant="primary">
                Download corporate presentation
              </Button>
              <Button href="/investors/stock-information/" variant="secondary" theme="light">
                View stock information
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Exploration Catalysts Timeline */}
      <Section background="foam">
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Exploration Roadmap & Catalysts</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '75ch' }}>
            Key operational milestones driving de-risking and shareholder value across the Harper Basin licence.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '24px', padding: '20px', background: 'var(--paper)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--deep-teal)' }}>
              <div style={{ fontWeight: 600, color: 'var(--deep-teal)' }}>H1 2026</div>
              <div>
                <strong>Partnership Formation & Launch:</strong> Formalized JSAA with TotalEnergies on Blocks LB-26, LB-30, and LB-31 under RL-003. Launched 3D seismic reprocessing.
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '24px', padding: '20px', background: 'var(--paper)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--deep-teal)' }}>
              <div style={{ fontWeight: 600, color: 'var(--deep-teal)' }}>H2 2026</div>
              <div>
                <strong>Seabed Geochemical & Bathymetric Survey:</strong> Deployment of <em>R/V GYRE</em> for 4,045 km² MBES seafloor mapping, geochemical coring, and heat flow measurement across seepage anomalies. Completion of C$20.7M private placement.
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '24px', padding: '20px', background: 'var(--paper)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--flare)' }}>
              <div style={{ fontWeight: 600, color: 'var(--flare)' }}>2027</div>
              <div>
                <strong>Prospect Ranking & Well-Target Selection:</strong> Integration of reprocessed 3D seismic volumes, AVO anomalies, and seepage data to firm up primary drillable prospects and determine initial exploration well locations.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
