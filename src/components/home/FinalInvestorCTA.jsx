'use client';

import { useState } from 'react';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function FinalInvestorCTA() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const trimmed = email.trim();
    if (!trimmed || !emailRegex.test(trimmed)) {
      setStatus({
        type: 'error',
        message: 'Enter a valid corporate or investor email address.'
      });
      return;
    }

    if (!consent) {
      setStatus({
        type: 'error',
        message: 'Please confirm consent to receive electronic news releases.'
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'Thank you for your interest. You have been registered to receive BluEnergies regulatory releases.'
      });
      setEmail('');
      setConsent(false);
    }, 700);
  };

  return (
    <section id="final-cta" className="section final-cta-section theme-light">
      {/* Delicate Bathymetric Contour Lines Background */}
      <div className="final-cta-contours-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="final-cta-contours-svg"
          preserveAspectRatio="none"
        >
          {/* Top-Right Marine Bathymetric Ridge Contours */}
          <path d="M780 -20 C960 90 1120 40 1440 150" stroke="rgba(22, 166, 166, 0.14)" strokeWidth="1.2" fill="none" />
          <path d="M840 -20 C1010 125 1170 75 1440 205" stroke="rgba(22, 166, 166, 0.12)" strokeWidth="1" fill="none" />
          <path d="M900 -20 C1070 160 1220 110 1440 260" stroke="rgba(22, 166, 166, 0.10)" strokeWidth="1" fill="none" />
          <path d="M970 -20 C1130 200 1280 150 1440 320" stroke="rgba(22, 166, 166, 0.08)" strokeWidth="1" fill="none" />
          <path d="M1040 -20 C1190 240 1340 195 1440 380" stroke="rgba(22, 166, 166, 0.06)" strokeWidth="1" fill="none" />
          
          {/* Bottom-Left Continental Slope Fairway Contours */}
          <path d="M-60 410 C160 370 380 460 620 420" stroke="rgba(22, 166, 166, 0.09)" strokeWidth="1.2" fill="none" />
          <path d="M-60 470 C190 425 420 515 680 475" stroke="rgba(22, 166, 166, 0.07)" strokeWidth="1" fill="none" />
          <path d="M-60 530 C220 480 470 565 740 530" stroke="rgba(22, 166, 166, 0.05)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container final-cta-container">
        {/* Editorial Left-Aligned Header Block */}
        <div className="final-cta-header">
          <Eyebrow text="Connect & Follow" theme="light" className="final-cta-eyebrow" />
          <h2 className="final-cta-heading">
            Follow Our Progress in<br />Deepwater Exploration
          </h2>
          <p className="final-cta-lede">
            Stay informed as BluEnergies and operating partner TotalEnergies advance<br className="cta-break" />
            3D seismic reprocessing and seabed exploration across the 8,924 km² Harper Basin concession.
          </p>

          <div className="final-cta-buttons">
            <Button href="/investors/outlook/" variant="primary" className="cta-btn-primary">
              Investor information &rarr;
            </Button>
            <Button href="/contact/contact-details/" variant="secondary" theme="light" className="cta-btn-secondary">
              Contact corporate team &rarr;
            </Button>
          </div>
        </div>

        {/* Horizontal Subscription Box (Soft Icy Tint) */}
        <div className="cta-newsletter-card">
          <div className="cta-newsletter-grid">
            {/* Left Column: Icon + Title & Description */}
            <div className="cta-newsletter-left">
              <div className="cta-newsletter-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="cta-newsletter-info">
                <h3 className="cta-newsletter-title">Subscribe to Official News Releases</h3>
                <p className="cta-newsletter-subtitle">
                  Receive TSX Venture and OTCQX news releases, quarterly filings, and corporate presentation updates directly via email.
                </p>
              </div>
            </div>

            {/* Vertical Rule Divider */}
            <div className="cta-newsletter-divider" aria-hidden="true"></div>

            {/* Right Column: Inline Form + Checkbox */}
            <div className="cta-newsletter-right">
              <form className="cta-newsletter-form" onSubmit={handleSubmit} noValidate>
                <div className="cta-input-group">
                  <label htmlFor="final-cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="final-cta-email"
                    name="email"
                    className="cta-email-input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="cta-submit-btn" disabled={loading}>
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>

                <label className="cta-consent-row" htmlFor="final-cta-consent">
                  <input
                    type="checkbox"
                    id="final-cta-consent"
                    name="consent"
                    className="cta-consent-checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <span className="cta-consent-text">
                    I agree to receive regulatory announcements and investor updates from BluEnergies Ltd. by electronic message, in compliance with Canadian Anti-Spam Legislation (CASL).
                  </span>
                </label>

                {status.message && (
                  <div
                    className={`cta-form-feedback ${status.type === 'error' ? 'is-error' : 'is-success'}`}
                    role="alert"
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Contact Information Row */}
        <div className="cta-contact-row">
          {/* Headquarters */}
          <div className="cta-contact-item">
            <div className="cta-contact-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="cta-contact-details">
              <span className="cta-contact-label">Headquarters</span>
              <span className="cta-contact-val">Suite 2050 – 1055 West Georgia Street, Vancouver, BC, V6E 3P3</span>
            </div>
          </div>

          <div className="cta-contact-divider" aria-hidden="true"></div>

          {/* Email */}
          <div className="cta-contact-item">
            <div className="cta-contact-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="cta-contact-details">
              <span className="cta-contact-label">Email</span>
              <a href="mailto:info@blu-energies.com" className="cta-contact-link">info@blu-energies.com</a>
            </div>
          </div>

          <div className="cta-contact-divider" aria-hidden="true"></div>

          {/* Listings */}
          <div className="cta-contact-item">
            <div className="cta-contact-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <div className="cta-contact-details">
              <span className="cta-contact-label">Listings</span>
              <span className="cta-contact-val">TSXV: BLU &bull; OTCQX: BLUGF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
