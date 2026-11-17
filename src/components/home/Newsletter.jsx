'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setStatus({
        type: 'error',
        message: 'Enter a valid email address, for example name@company.com.'
      });
      return;
    }

    if (!consent) {
      setStatus({
        type: 'error',
        message: 'Please confirm consent to receive electronic communications.'
      });
      return;
    }

    setLoading(true);

    // If backend endpoint is not set:
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: 'error',
        message: 'Subscription service is currently in preparation. Please contact info@blu-energies.com directly.'
      });
    }, 600);
  };

  return (
    <Section background="paper" id="newsletter">
      <div className="newsletter-card">
        <Eyebrow text="Investors" theme="light" />
        <h2>Follow the work as it moves.</h2>
        <p className="lede" style={{ color: 'var(--muted)' }}>
          Get news releases and operations updates by email. Unsubscribe whenever you like.
        </p>

        <form id="newsletter-form" className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <div className="newsletter-input-group">
            <label htmlFor="newsletter-email" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>

          <label className="consent-label" htmlFor="newsletter-consent">
            <input
              type="checkbox"
              id="newsletter-consent"
              name="consent"
              className="consent-checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <span>
              I agree to receive news, updates and other communications from BluEnergies Ltd. by commercial electronic message, and understand I can withdraw consent at any time using the unsubscribe link.
            </span>
          </label>

          {status.message && (
            <div
              id="newsletter-feedback"
              className={`form-feedback ${status.type === 'error' ? 'is-error' : 'is-success'}`}
              role="alert"
              aria-live="polite"
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
