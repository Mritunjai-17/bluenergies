import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import Button from '../../../components/ui/Button';

export const metadata = {
  title: 'About BluEnergies',
  description: 'A Canadian explorer focused on unlocking high-impact Cretaceous basin floor fan systems along the West African continental margin.'
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title="About BluEnergies"
        lede="A Canadian explorer focused on unlocking high-impact Cretaceous basin floor fan systems along the West African continental margin."
      />

      {/* Strategy & Overview: Editorial Split Layout */}
      <Section background="paper">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Disciplined frontier exploration</h2>
            <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.8rem' }}>
              BluEnergies Ltd. is a publicly traded Canadian natural resource company (TSXV: BLU) headquartered in Vancouver, British Columbia. The company was founded in 2020 with a single, uncompromising mandate: identify and capture world-class deepwater exploration plays before they become crowded or cost-prohibitive.
            </p>
            <p>
              Rather than assembling a broad, unfocused portfolio of disparate exploration concessions, BluEnergies concentrates capital, technical talent, and management focus on the under-explored Harper Basin, located in ultra-deep waters offshore Liberia.
            </p>
            <p>
              Through our Reconnaissance Licence RL-003, we hold a 35% participating interest across Blocks LB-26, LB-30, and LB-31—encompassing 8,924 km² (approximately 2.2 million acres). Exploration operations are conducted in formal partnership with TotalEnergies, who serves as operator with a 65% interest. All exploration expenditures incurred under the reconnaissance licence framework are recoverable upon conversion to production sharing agreements.
            </p>
          </div>

          <div className="editorial-aside-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>Corporate at a glance</h3>
            <table style={{ fontSize: '0.9rem' }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>Founding Year</td>
                  <td style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>2020</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>Headquarters</td>
                  <td style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>Vancouver, BC, Canada</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>Primary Exchange</td>
                  <td style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>TSX Venture (TSXV: BLU)</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>US Quotation</td>
                  <td style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>OTCQX: BLUGF</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>Core Concession</td>
                  <td style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>Harper Basin (RL-003)</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>Concession Area</td>
                  <td style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textAlign: 'right' }}>8,924 km² (Blocks 26, 30, 31)</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, padding: '10px 0' }}>Operating Partner</td>
                  <td style={{ padding: '10px 0', textAlign: 'right' }}>TotalEnergies (65%)</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '24px' }}>
              <Button href="/assets-and-operations/overview/" variant="quiet">
                Detailed asset breakdown &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Geological Context: The West Africa Atlantic Margin */}
      <Section background="foam">
        <div style={{ maxWidth: '920px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>The geological thesis: Atlantic margin Cretaceous fans</h2>
          <p className="lede" style={{ color: 'var(--muted)', marginBottom: '1.8rem' }}>
            Over the past two decades, deepwater basin floor fan plays have emerged as the most prolific hydrocarbon exploration target along Africa’s Atlantic margin.
          </p>
          <p>
            The geological success story along the transform margin is anchored by major benchmark discoveries: from the multi-billion-barrel <strong>Jubilee discovery in Ghana</strong> (which first established the Cretaceous turbidite fan model along the margin), to the giant <strong>Baleine and Calao discoveries offshore Côte d&apos;Ivoire</strong> immediately adjacent to Liberia, and the unprecedented <strong>Venus light-oil discovery in the Orange Basin offshore Namibia</strong>.
          </p>
          <p>
            The Harper Basin shares the same regional Cretaceous syn-rift to post-rift depositional dynamics, robust Cenomanian-Turonian marine source kitchens, and steep slope channels feeding high-net-to-gross basin floor fans. With seven major fan systems already identified on regional 3D seismic, BluEnergies and TotalEnergies are applying modern reprocessing and seabed geochemical mapping to de-risk drilling targets in this undrilled frontier.
          </p>

          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button href="/assets-and-operations/overview/" variant="primary">
              Explore the asset
            </Button>
            <Button href="/investors/presentations/" variant="secondary" theme="light">
              Download corporate presentation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
