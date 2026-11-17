'use client';

import { useState } from 'react';
import Section from '../ui/Section';
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
    <Section background="dark-navy" id="final-cta">
      <div className="final-cta-container">
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 48px' }}>
          <Eyebrow text="Connect & Follow" theme="dark" />
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', lineHeight: 1.15, color: '#ffffff', marginBottom: '1.25rem' }}>
            Follow Our Progress in Deepwater Exploration
          </h2>
          <p className="lede" style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: '0 auto', maxWidth: '75ch' }}>
            Stay informed as BluEnergies and operating partner TotalEnergies advance 3D seismic reprocessing and seabed exploration across the 8,924 km² Harper Basin concession.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px', flexWrap: 'wrap' }}>
            <Button href="/investors/outlook/" variant="primary">
              Investor information
            </Button>
            <Button href="/contact/contact-details/" variant="secondary" theme="dark">
              Contact corporate team
            </Button>
          </div>
        </div>

        {/* Integrated Compliant Newsletter Box */}
        <div className="newsletter-card" style={{ background: 'var(--secondary-navy)', border: '1px solid rgba(22, 166, 166, 0.25)', borderRadius: '14px', padding: '36px', maxWidth: '1040px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--display)' }}>
            Subscribe to Official News Releases
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', margin: 0 }}>
            Receive TSX Venture and OTCQX news releases, quarterly filings, and corporate presentation updates directly via email.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <div className="newsletter-input-group">
              <label htmlFor="final-cta-email" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Email address
              </label>
              <input
                type="email"
                id="final-cta-email"
                name="email"
                className="newsletter-input"
                style={{ background: 'var(--dark-navy)', borderColor: 'rgba(22, 166, 166, 0.35)', color: '#ffffff' }}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>

            <label className="consent-label" htmlFor="final-cta-consent" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <input
                type="checkbox"
                id="final-cta-consent"
                name="consent"
                className="consent-checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              <span>
                I agree to receive regulatory announcements and investor updates from BluEnergies Ltd. by electronic message, in compliance with Canadian Anti-Spam Legislation (CASL). I can withdraw consent at any time.
              </span>
            </label>

            {status.message && (
              <div
                className={`form-feedback ${status.type === 'error' ? 'is-error' : 'is-success'}`}
                style={{ color: status.type === 'error' ? '#ff8787' : '#51C2C9', display: 'block' }}
                role="alert"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}
          </form>

          {/* Corporate IR Contact Footer Bar */}
          <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(81, 194, 201, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
            <div>
              <strong>Headquarters:</strong> Suite 2050 - 1055 West Georgia Street, Vancouver, BC, V6E 3P3
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:info@blu-energies.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>info@blu-energies.com</a>
            </div>
            <div>
              <strong>Listings:</strong> TSXV: BLU &bull; OTCQX: BLUGF
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
