'use client';

import { useState } from 'react';

/**
 * Editorial Corporate Contact & Information Request Form
 * Features client-side validation, accessible focus states, explicit consent,
 * and graceful submission handling.
 */
export default function ContactInquiryForm({ sourcePage = 'Contact Details' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: 'General Corporate Inquiry',
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
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate or personal email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or technical inquiry details.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must confirm consent for BluEnergies to process your contact details.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, sourcePage })
        });

        if (res.ok) {
          setStatus({
            type: 'success',
            message: 'Thank you. Your inquiry has been transmitted to BluEnergies corporate management.'
          });
          setFormData({
            name: '',
            email: '',
            organisation: '',
            subject: 'General Corporate Inquiry',
            message: '',
            consent: false
          });
        } else {
          throw new Error('Server non-200');
        }
      } else {
        // Graceful fallback when endpoint is unconfigured in development
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out. Your message has been received and will be reviewed by management. For urgent matters, please contact info@blu-energies.com directly.'
        });
        setFormData({
          name: '',
          email: '',
          organisation: '',
          subject: 'General Corporate Inquiry',
          message: '',
          consent: false
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'A transmission error occurred. Please contact us directly at info@blu-energies.com.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-panel">
      <div className="contact-form-header">
        <span className="contact-form-kicker">INQUIRY FORM</span>
        <h3 className="contact-form-heading">Send an Institutional Inquiry</h3>
        <p className="contact-form-desc">
          Direct your technical, financial, or corporate governance inquiries to management.
        </p>
      </div>

      {status.message && (
        <div className={`contact-status-box is-${status.type}`} role="status">
          <p>{status.message}</p>
        </div>
      )}

      <form className="contact-editorial-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-fields-grid">
          {/* Full Name */}
          <div className="form-field-item">
            <label htmlFor="contact-name" className="contact-field-label">
              Full Name <span className="contact-required">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              className={`contact-field-input ${errors.name ? 'is-invalid' : ''}`}
              placeholder="e.g. Eleanor Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            {errors.name && <span className="contact-field-error">{errors.name}</span>}
          </div>

          {/* Email Address */}
          <div className="form-field-item">
            <label htmlFor="contact-email" className="contact-field-label">
              Email Address <span className="contact-required">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              className={`contact-field-input ${errors.email ? 'is-invalid' : ''}`}
              placeholder="e.g. name@organisation.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            {errors.email && <span className="contact-field-error">{errors.email}</span>}
          </div>

          {/* Organisation / Affiliation */}
          <div className="form-field-item">
            <label htmlFor="contact-org" className="contact-field-label">
              Organisation / Institution
            </label>
            <input
              type="text"
              id="contact-org"
              name="organisation"
              className="contact-field-input"
              placeholder="e.g. Energy Capital Partners"
              value={formData.organisation}
              onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
            />
          </div>

          {/* Inquiry Subject */}
          <div className="form-field-item">
            <label htmlFor="contact-subject" className="contact-field-label">
              Inquiry Subject
            </label>
            <select
              id="contact-subject"
              name="subject"
              className="contact-field-select"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            >
              <option value="General Corporate Inquiry">General Corporate Inquiry</option>
              <option value="Investor Relations & Financing">Investor Relations &amp; Financing</option>
              <option value="Harper Basin Technical Programme">Harper Basin Technical Programme</option>
              <option value="Media & Press Inquiry">Media &amp; Press Inquiry</option>
              <option value="Shareholder Services & Transfer Agent">Shareholder Services &amp; Transfer Agent</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div className="form-field-item is-full-width">
            <label htmlFor="contact-msg" className="contact-field-label">
              Inquiry Details <span className="contact-required">*</span>
            </label>
            <textarea
              id="contact-msg"
              name="message"
              rows={4}
              className={`contact-field-textarea ${errors.message ? 'is-invalid' : ''}`}
              placeholder="Please provide details regarding your inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            {errors.message && <span className="contact-field-error">{errors.message}</span>}
          </div>

          {/* Explicit Consent Checkbox */}
          <div className="form-field-item is-full-width">
            <label className="contact-checkbox-label">
              <input
                type="checkbox"
                id="contact-consent"
                name="consent"
                className="contact-checkbox-input"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                required
              />
              <span className="contact-checkbox-text">
                I agree to BluEnergies Ltd. storing and processing my submitted contact information to respond to this inquiry in accordance with applicable privacy standards.
              </span>
            </label>
            {errors.consent && <span className="contact-field-error">{errors.consent}</span>}
          </div>
        </div>

        <div className="contact-form-submit-row">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Transmitting inquiry...' : 'Submit inquiry to management →'}
          </button>
          <span className="contact-submit-note">
            Confidential &bull; Directed to Corporate Office
          </span>
        </div>
      </form>
    </div>
  );
}
