'use client';

import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';
import { useInView, useCountUp } from '../../hooks/useMotion';

export default function InvestorSnapshot() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const milestoneAmount = useCountUp(20.7, 1400, inView, { decimals: 1 });

  return (
    <div ref={sectionRef}>
      <Section background="dark-navy" id="investor-snapshot" className="investor-snapshot-section">
        <div className="investor-grid-2col">
          {/* Left Column: Narrative, CTA & Official Capital Structure Ledger */}
          <div className="investor-narrative-col">
            <div className={`motion-fade-up ${inView ? 'is-in-view' : ''}`}>
              <Eyebrow text="Investor Relations" theme="dark" />
              <h2 className="investor-heading">
                <span className="investor-heading-accent">Capital Structure &</span><br />Investor Proposition
              </h2>
              <p className="investor-lede">
                BluEnergies provides institutional and retail investors with leveraged exposure to frontier deepwater exploration in one of Africa&apos;s few remaining undrilled Cretaceous fan plays.
              </p>
              <p className="investor-desc">
                With C$20.7 million in growth capital raised through an oversubscribed non-brokered private placement in July 2026, the company is fully funded to execute its share of the active 3D reprocessing and seabed survey programmes alongside operating partner TotalEnergies.
              </p>
            </div>

            {/* Official Capital Markets & Registrar Dossier (Human Agency Craft) */}
            <div className={`investor-ledger-box motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
              <div className="investor-ledger-header">
                <span className="ledger-box-tag">MARKET IDENTIFIERS</span>
                <span className="ledger-box-sedar">SEDAR+ PROFILE: 00054231</span>
              </div>
              <div className="investor-ledger-grid">
                <div className="ledger-data-item">
                  <span className="ledger-data-key">CUSIP</span>
                  <span className="ledger-data-val">09608R108</span>
                </div>
                <div className="ledger-data-item">
                  <span className="ledger-data-key">ISIN</span>
                  <span className="ledger-data-val">CA09608R1082</span>
                </div>
                <div className="ledger-data-item">
                  <span className="ledger-data-key">Transfer Agent</span>
                  <span className="ledger-data-val">Computershare Investor Services</span>
                </div>
                <div className="ledger-data-item">
                  <span className="ledger-data-key">Auditor</span>
                  <span className="ledger-data-val">KPMG LLP</span>
                </div>
              </div>
            </div>

            <div className={`investor-cta-wrap motion-fade-up stagger-2 ${inView ? 'is-in-view' : ''}`}>
              <Button href="/investors/outlook/" variant="primary">
                Explore investor information &rarr;
              </Button>
            </div>
          </div>

          {/* Right Column: Market & Filings Summary */}
          <div className="investor-panel-col">
            {/* Top Ticker Cards (TSXV: BLU & OTCQX: BLUGF) */}
            <div className={`investor-tickers-grid motion-fade-up stagger-1 ${inView ? 'is-in-view' : ''}`}>
              {/* Card 1: Primary Exchange */}
              <div className="investor-exchange-card investor-card-tsxv">
                <div className="investor-exchange-content">
                  <span className="investor-exchange-eyebrow">Primary Exchange</span>
                  <div className="investor-exchange-ticker">TSXV: BLU</div>
                  <span className="investor-exchange-name">Toronto Stock Exchange Venture</span>
                </div>
              </div>

              {/* Card 2: US Quotation */}
              <div className="investor-exchange-card investor-card-otcqx">
                <div className="investor-exchange-content">
                  <span className="investor-exchange-eyebrow">US Quotation</span>
                  <div className="investor-exchange-ticker">OTCQX: BLUGF</div>
                  <span className="investor-exchange-name">OTCQX Best Market</span>
                </div>
              </div>
            </div>

            {/* Middle Card: Recent Financing Milestone */}
            <div className={`investor-milestone-card motion-fade-up stagger-2 ${inView ? 'is-in-view' : ''}`}>
              <div className="investor-milestone-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="8" ry="3"/>
                  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
                  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
                </svg>
              </div>

              <div className="investor-milestone-content">
                <h4 className="investor-milestone-title">Recent Financing Milestone</h4>
                <p className="investor-milestone-text">
                  <strong className="investor-milestone-highlight">C${milestoneAmount}M Private Placement:</strong>
                  Closed July 23, 2026 at C$2.25 per unit, fully funding exploration commitments on RL-003.
                </p>
                <p className="investor-milestone-subtext">
                  All regulatory filings and audited financial statements are verified and archived on SEDAR+.
                </p>
              </div>
            </div>

            {/* Bottom 3 Action Cards with Concrete Formats & Document Sizes */}
            <div className={`investor-actions-grid motion-fade-up stagger-3 ${inView ? 'is-in-view' : ''}`}>
              <a href="/investors/presentations/" className="investor-action-tile">
                <div className="action-tile-left">
                  <span className="action-tile-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </span>
                  <div>
                    <span className="action-tile-label">Presentation &amp; Fact Sheet</span>
                    <span className="action-tile-meta">PDF &bull; 4.8 MB &bull; Q3 2026</span>
                  </div>
                </div>
                <span className="action-tile-arrow" aria-hidden="true">&rarr;</span>
              </a>

              <a href="/investors/financials/" className="investor-action-tile">
                <div className="action-tile-left">
                  <span className="action-tile-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </span>
                  <div>
                    <span className="action-tile-label">Audited Financial Filings</span>
                    <span className="action-tile-meta">SEDAR+ &bull; Interim Statements</span>
                  </div>
                </div>
                <span className="action-tile-arrow" aria-hidden="true">&rarr;</span>
              </a>

              <a href="/contact/contact-details/" className="investor-action-tile">
                <div className="action-tile-left">
                  <span className="action-tile-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </span>
                  <div>
                    <span className="action-tile-label">Investor Relations Contact</span>
                    <span className="action-tile-meta">Institutional Executive Line</span>
                  </div>
                </div>
                <span className="action-tile-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
