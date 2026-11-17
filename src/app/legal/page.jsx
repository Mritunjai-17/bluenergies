import PageHero from '../../components/ui/PageHero';
import Section from '../../components/ui/Section';

export const metadata = {
  title: 'Legal & Forward-Looking Statements',
  description: 'Terms of use, regulatory disclaimers, and forward-looking statements advisory for BluEnergies Ltd.'
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & Legal"
        title="Legal & Forward-Looking Statements"
        lede="Terms of website use, regulatory disclaimers, and advisory notices regarding forward-looking information."
      />

      <Section background="paper">
        <div style={{ maxWidth: '1080px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink)' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.25rem' }}>Forward-Looking Statements & Cautionary Advisory</h2>
          <p>
            Certain statements contained on this website constitute &quot;forward-looking statements&quot; or &quot;forward-looking information&quot; within the meaning of applicable Canadian securities legislation (collectively, &quot;forward-looking statements&quot;). Forward-looking statements are typically identified by words such as &quot;anticipate&quot;, &quot;continue&quot;, &quot;estimate&quot;, &quot;expect&quot;, &quot;forecast&quot;, &quot;may&quot;, &quot;will&quot;, &quot;project&quot;, &quot;could&quot;, &quot;plan&quot;, &quot;intend&quot;, &quot;should&quot;, &quot;believe&quot;, &quot;outlook&quot;, and similar expressions.
          </p>
          <p>
            Forward-looking statements on this website include, but are not limited to, statements relating to: exploration activities and work programmes across Blocks LB-26, LB-30, and LB-31 in the Harper Basin offshore Liberia; the interpretation and reprocessing of 3D seismic data; multibeam bathymetric and geochemical seafloor surveys; the identification, delineation, and de-risking of potential drillable prospects; the commercial terms of Reconnaissance Licence RL-003 and the potential conversion thereof; anticipated capital expenditures; and future corporate milestones.
          </p>
          <p>
            Such statements are subject to significant risks, uncertainties, and assumptions, many of which are beyond the control of BluEnergies Ltd. Exploration for hydrocarbons is a speculative venture involving high degrees of geological, technical, operational, and financial risk. Actual results, performance, or achievements may differ materially from those expressed or implied. Factors that could cause actual outcomes to differ include market conditions, commodity price fluctuations, foreign operational risks, regulatory approvals, and joint venture partner operational decisions.
          </p>

          <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.25rem' }}>Disclaimer of Warranties & Continuous Disclosure</h2>
          <p>
            The information presented on this website is provided for informational purposes only and does not constitute an offer to buy or sell securities in any jurisdiction. Information disclosed under the corporate and investor sections may not represent the complete disclosure record of the Company. For official regulatory filings, investors must consult the Company&apos;s public filings available on SEDAR+ at <a href="https://www.sedarplus.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--deep-teal)' }}>www.sedarplus.ca</a>.
          </p>

          <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.25rem' }}>Copyright & Trademarks</h2>
          <p>
            All content, graphics, logos, and materials on this site are the intellectual property of BluEnergies Ltd. or used under licence from respective partners. Unauthorized reproduction, distribution, or commercial exploitation is strictly prohibited without prior written consent.
          </p>

          <div style={{ marginTop: '32px', padding: '18px 24px', background: 'var(--foam)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--deep-teal)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: 0 }}>
              [CONTENT NEEDED: Specific provincial statutory legal disclaimers and TSX Venture Exchange regulatory statements to be verified and finalized by legal counsel.]
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
