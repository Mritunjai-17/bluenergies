/**
 * BluEnergies Ltd. — Stock Market Data Access Module
 * Central function to retrieve stock quote data. Currently returns clearly marked
 * sample data; can be swapped for a real-time market data feed provider (e.g. TMX Datalinx).
 */

/**
 * @typedef {Object} StockQuote
 * @property {string} exchange
 * @property {string} symbol
 * @property {string} currency
 * @property {string} open
 * @property {string} high
 * @property {string} low
 * @property {string} volume
 * @property {boolean} isSample
 * @property {string} disclaimer
 */

/**
 * Fetch stock data for BluEnergies Ltd.
 * @returns {Promise<StockQuote>} Current quote object
 */
export async function getStockQuote() {
  // To integrate a live feed, replace this mock resolution with an authenticated fetch:
  // const res = await fetch('https://api.marketdata.com/v1/quote/TSXV:BLU');
  // return await res.json();

  return {
    exchange: 'TSXV',
    symbol: 'BLU',
    currency: 'CAD',
    open: '2.08',
    high: '2.08',
    low: '2.00',
    volume: '36,505',
    isSample: true,
    disclaimer: 'Sample data for illustration purposes. Not real-time or live market information.'
  };
}
