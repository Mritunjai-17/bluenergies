'use client';

import Link from 'next/link';
import { site } from '../../data/site.ts';

export default function Footer() {
  const handleOpenCookieNotice = () => {
    const notice = document.getElementById('cookie-notice');
    if (notice) {
      notice.classList.add('is-visible');
      const acceptBtn = document.getElementById('cookie-accept');
      if (acceptBtn) acceptBtn.focus();
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Left Column: Identity & Corporate Details */}
          <div className="footer-brand">
            <Link href="/" aria-label="BluEnergies Ltd. Home">
              <svg className="footer-logo" viewBox="0 0 252 47" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BluEnergies">
                <g fill="#51C2C9">
                  <path d="M22.5 4.5 C12.2 4.5 4 12.8 4 23.5 C4 30.5 7.8 36.6 13.5 40 C11.2 38.2 9.5 35 9.5 30.8 C9.5 22.5 16 15.5 24.5 15.5 C29.5 15.5 33.8 18 36.5 22 C34.5 18 29.5 13 22.5 13 C15.5 13 10.2 18.5 10.2 25.5 C10.2 29.5 12.2 33 15.2 35.5 C12 32.5 10.5 28 10.5 23.5 C10.5 15.5 17 9 25 9 C31 9 36 12.5 38.5 17.5 C36 11 30 6 22.5 4.5 Z" />
                  <path d="M24 2 C11 2 1 12 1 24.5 C1 32 5.5 38.5 12 42.5 C9 40 7 36 7 31 C7 21 15 13 25 13 C31.5 13 37 16.5 40 21.5 C37.5 14.5 31.5 8 24 2 Z" opacity="0.85" />
                  <path d="M18 43 C21 44.5 24.5 45 28 44.5 C22 43.5 17 40 14 35.5 C14.5 38.5 16 41 18 43 Z" />
                </g>
                <text x="54" y="35" fill="#FFFFFF" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontWeight="800" fontSize="38" letterSpacing="-0.8px">BluEnergies</text>
              </svg>
            </Link>

            <div className="footer-copy">
              <p style={{ marginBottom: '6px', fontWeight: 500, color: '#ffffff' }}>&copy; 2026 BluEnergies Ltd. {site.ticker.exchange}: {site.ticker.symbol}</p>
              <p style={{ marginBottom: '6px' }}>{site.address}</p>
              <p>{site.description}</p>
            </div>
          </div>

          {/* Centre Column: Navigation Directory */}
          <div className="footer-links-grid">
            <div>
              <h4 className="footer-col-title">Corporate</h4>
              <ul className="footer-nav-list">
                <li><Link href="/corporate/about-us/" className="footer-nav-link">About us</Link></li>
                <li><Link href="/corporate/board-management/" className="footer-nav-link">Board & management</Link></li>
                <li><Link href="/corporate/corporate-governance/" className="footer-nav-link">Corporate governance</Link></li>
                <li><Link href="/assets-and-operations/overview/" className="footer-nav-link">Assets & operations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Investors</h4>
              <ul className="footer-nav-list">
                <li><Link href="/investors/outlook/" className="footer-nav-link">Outlook</Link></li>
                <li><Link href="/investors/stock-information/" className="footer-nav-link">Stock information</Link></li>
                <li><Link href="/investors/financials/" className="footer-nav-link">Financials</Link></li>
                <li><Link href="/investors/presentations/" className="footer-nav-link">Presentations</Link></li>
                <li><Link href="/investors/agm/" className="footer-nav-link">AGM</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">News & Legal</h4>
              <ul className="footer-nav-list">
                <li><Link href="/news-and-media/news/" className="footer-nav-link">News releases</Link></li>
                <li><Link href="/news-and-media/in-the-media/" className="footer-nav-link">In the media</Link></li>
                <li><Link href="/contact/contact-details/" className="footer-nav-link">Contact details</Link></li>
                <li><Link href="/contact/request-for-information/" className="footer-nav-link">Request information</Link></li>
                <li><Link href="/legal/" className="footer-nav-link">Legal & forward-looking</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Direct Contact & Cookie Preferences */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-links">
              <a href={`mailto:${site.email}`} className="footer-social-link">{site.email}</a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="footer-social-link">YouTube</a>
              <a href={site.social.x} target="_blank" rel="noopener noreferrer" className="footer-social-link">X (Twitter)</a>
            </div>

            <button
              id="update-cookie-preferences"
              className="footer-cookie-btn"
              type="button"
              onClick={handleOpenCookieNotice}
            >
              Update cookie preferences
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div>
            <span>TSX Venture Exchange: <strong>BLU</strong> | OTCQX: <strong>BLUGF</strong></span>
          </div>
          <div>
            <span>Deepwater Oil & Gas Exploration • West Africa & Atlantic Margin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
