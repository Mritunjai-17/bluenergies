import { getStockQuote } from '../../scripts/stock.js';

export default async function StockTicker({ className = '' }) {
  const quote = await getStockQuote();

  return (
    <div className={`stock-ticker-card ${className}`.trim()}>
      <div className="stock-ticker-header">
        <div>
          <div style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '4px' }}>
            MARKET IDENTIFIER
          </div>
          <div className="stock-symbol">{quote.exchange}: {quote.symbol}</div>
        </div>
        {quote.isSample && (
          <div className="stock-sample-tag" title={quote.disclaimer}>
            Sample Data
          </div>
        )}
      </div>

      <div className="stock-metrics-grid">
        <div className="stock-metric-item">
          <span className="stock-metric-label">Open ({quote.currency})</span>
          <span className="stock-metric-value">{quote.open}</span>
        </div>
        <div className="stock-metric-item">
          <span className="stock-metric-label">Day High ({quote.currency})</span>
          <span className="stock-metric-value">{quote.high}</span>
        </div>
        <div className="stock-metric-item">
          <span className="stock-metric-label">Day Low ({quote.currency})</span>
          <span className="stock-metric-value">{quote.low}</span>
        </div>
        <div className="stock-metric-item">
          <span className="stock-metric-label">Volume (Shares)</span>
          <span className="stock-metric-value">{quote.volume}</span>
        </div>
      </div>

      <div style={{
        marginTop: '24px',
        paddingTop: '14px',
        borderTop: '1px solid rgba(81, 194, 201, 0.15)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: 'rgba(255, 255, 255, 0.55)',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <span>Pricing quotes delayed minimum 15 minutes. TSX Venture Exchange.</span>
        <span style={{ color: 'var(--flare)', fontWeight: 500 }}>{quote.disclaimer}</span>
      </div>
    </div>
  );
}
