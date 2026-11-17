import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import StockTicker from '../../../components/widgets/StockTicker';
import Button from '../../../components/ui/Button';

export const metadata = {
  title: 'Stock Information',
  description: 'TSX Venture Exchange (TSXV: BLU) and OTCQX: BLUGF stock trading information and share capital overview.'
};

export default function StockInformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Stock Information"
        lede="Market listings, share structure overview, and trading data for BluEnergies Ltd. on the TSX Venture Exchange and OTCQX."
      />

      {/* Stock Ticker Widget Section */}
      <Section background="paper">
        <div>
          <StockTicker />

          {/* Notice regarding sample data */}
          <div style={{
            marginTop: '24px',
            padding: '18px 22px',
            background: 'rgba(227, 155, 47, 0.08)',
            borderLeft: '3px solid var(--flare)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            color: 'var(--ink)'
          }}>
            <strong>Market Data Notice:</strong> The trading figures above represent sample data for website demonstration and interface testing. BluEnergies Ltd. does not guarantee the timeliness, sequence, or accuracy of trading quotations displayed without a direct live data feed license. To view live, real-time market data, visit the official TSX Venture Exchange or your accredited brokerage portal.
          </div>
        </div>
      </Section>

      {/* Exchange Details & Capital Structure */}
      <Section background="foam">
        <div className="editorial-grid">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>Listings & Trading Symbols</h2>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Exchange</th>
                    <th>Ticker Symbol</th>
                    <th>Currency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>TSX Venture Exchange (TSXV)</strong></td>
                    <td><strong style={{ color: 'var(--deep-teal)' }}>BLU</strong></td>
                    <td>CAD ($)</td>
                    <td>Listed & Active</td>
                  </tr>
                  <tr>
                    <td><strong>OTQX Best Market</strong></td>
                    <td><strong style={{ color: 'var(--deep-teal)' }}>BLUGF</strong></td>
                    <td>USD ($)</td>
                    <td>Cross-traded</td>
                  </tr>
                  <tr>
                    <td><strong>Frankfurt Stock Exchange</strong></td>
                    <td>[CONTENT NEEDED]</td>
                    <td>EUR (&euro;)</td>
                    <td>Under review</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', marginTop: '2.5rem', marginBottom: '1rem' }}>Capital Structure Summary</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              In July 2026, the company completed an upsized non-brokered financing of 9,202,027 units at C$2.25 per unit for aggregate gross proceeds of approximately C$20.7 million.
            </p>

            <div className="table-responsive">
              <table>
                <tbody>
                  <tr>
                    <td>Common Shares Issued & Outstanding</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>[CONTENT NEEDED: exact current share count]</td>
                  </tr>
                  <tr>
                    <td>Warrants (Exercise price C$3.00, Exp. July 2028)</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>4,601,013</td>
                  </tr>
                  <tr>
                    <td>Stock Options Outstanding</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>[CONTENT NEEDED]</td>
                  </tr>
                  <tr>
                    <td>Fully Diluted Capitalization</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>[CONTENT NEEDED]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Registrar & Transfer Agent Information */}
          <div className="editorial-aside-box">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>Shareholder Services</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '16px' }}>
              For inquiries regarding share transfers, address changes, or share certificates, contact our registrar and transfer agent:
            </p>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--muted)', marginBottom: '24px' }}>
              <strong>Registrar & Transfer Agent</strong><br />
              [CONTENT NEEDED: Name of transfer agent, e.g. Computershare or Odyssey Trust]<br />
              Vancouver, BC, Canada
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '18px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}>Investor Relations Inquiries</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '16px' }}>
                For institutional or retail investor queries, contact management directly:
              </p>
              <Button href="/contact/request-for-information/" variant="primary">
                Request information
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
