'use client';

import { useState } from 'react';
import PageHero from '../../../components/ui/PageHero';
import Section from '../../../components/ui/Section';
import Button from '../../../components/ui/Button';

export default function RequestForInformationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus({ type: '', message: '' });

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your inquiry details.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Consent is required to submit.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'The form submission endpoint (FORM_ENDPOINT) has not been configured in the environment. Please reach out directly to info@blu-energies.com.'
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you. Your request for information has been sent successfully.'
        });
        setFormData({
          name: '',
          email: '',
          organisation: '',
          message: '',
          consent: false
        });
      } else {
        throw new Error('Server returned non-200');
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'An error occurred while submitting your request. Please email us at info@blu-energies.com directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request for Information"
        lede="Submit institutional queries, analyst requests, or operational information requests to BluEnergies corporate management."
      />

      <Section background="paper">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Investor & Industry Inquiry</h2>
          <p className="lede" style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Complete the form below to connect with our corporate office. All requests are routed to management for review.
          </p>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-grid">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                {errors.name && (
                  <span className="field-error" style={{ color: '#c92a2a', fontSize: '0.82rem' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                {errors.email && (
                  <span className="field-error" style={{ color: '#c92a2a', fontSize: '0.82rem' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Organisation */}
              <div className="form-group form-group-full">
                <label htmlFor="contact-org" className="form-label">Organisation / Firm</label>
                <input
                  type="text"
                  id="contact-org"
                  name="organisation"
                  className="form-input"
                  placeholder="Company, institutional fund, or media outlet"
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                />
              </div>

              {/* Message */}
              <div className="form-group form-group-full">
                <label htmlFor="contact-message" className="form-label">Message / Details of Request *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Specify the information or presentation requested..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
                {errors.message && (
                  <span className="field-error" style={{ color: '#c92a2a', fontSize: '0.82rem' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Consent */}
              <div className="form-group form-group-full">
                <label className="consent-label" htmlFor="contact-consent">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    name="consent"
                    className="consent-checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    required
                  />
                  <span>
                    I agree to the processing of my contact information by BluEnergies Ltd. for the purpose of answering this inquiry in accordance with applicable privacy legislation. *
                  </span>
                </label>
                {errors.consent && (
                  <span className="field-error" style={{ color: '#c92a2a', fontSize: '0.82rem', marginTop: '4px' }}>
                    {errors.consent}
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginTop: '28px' }}>
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send request'}
              </Button>
            </div>

            {/* Global Status Message */}
            {status.message && (
              <div
                role="alert"
                aria-live="polite"
                style={{
                  marginTop: '20px',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.92rem',
                  background: status.type === 'error' ? 'rgba(201, 42, 42, 0.1)' : 'rgba(23, 128, 140, 0.1)',
                  border: status.type === 'error' ? '1px solid #c92a2a' : '1px solid var(--deep-teal)',
                  color: status.type === 'error' ? '#c92a2a' : 'var(--deep-teal)'
                }}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}
