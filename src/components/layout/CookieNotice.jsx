'use client';

import { useState, useEffect } from 'react';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('blu_cookie_pref');
      if (!stored) {
        setVisible(true);
      }
    } catch (e) {
      // localStorage may be restricted
    }
  }, []);

  const savePreference = (pref) => {
    try {
      localStorage.setItem('blu_cookie_pref', pref);
    } catch (e) {}
    setVisible(false);
  };

  return (
    <div
      id="cookie-notice"
      className={`cookie-notice ${visible ? 'is-visible' : ''}`}
      role="region"
      aria-label="Privacy and Cookie Notice"
    >
      <p style={{ marginBottom: '8px', fontWeight: 600, color: '#ffffff' }}>Cookie & Privacy Preferences</p>
      <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.86rem', marginBottom: '12px' }}>
        We use strictly necessary technical cookies to enable secure website navigation and essential session functionality.
      </p>
      <div className="cookie-actions">
        <button
          id="cookie-accept"
          className="cookie-btn-accept"
          type="button"
          onClick={() => savePreference('accepted')}
        >
          Accept
        </button>
        <button
          id="cookie-decline"
          className="cookie-btn-decline"
          type="button"
          onClick={() => savePreference('declined')}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
