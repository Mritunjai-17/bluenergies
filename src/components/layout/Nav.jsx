'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '../../data/navigation.ts';
import { site } from '../../data/site.ts';

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className="nav-header">
        <nav className={`nav-pill ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main Navigation">
          {/* Logo Link */}
          <Link href="/" className="nav-logo-link" aria-label="BluEnergies Ltd. Homepage">
            <svg className="nav-logo-svg" viewBox="0 0 252 47" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BluEnergies">
              <g fill="#51C2C9">
                <path d="M22.5 4.5 C12.2 4.5 4 12.8 4 23.5 C4 30.5 7.8 36.6 13.5 40 C11.2 38.2 9.5 35 9.5 30.8 C9.5 22.5 16 15.5 24.5 15.5 C29.5 15.5 33.8 18 36.5 22 C34.5 18 29.5 13 22.5 13 C15.5 13 10.2 18.5 10.2 25.5 C10.2 29.5 12.2 33 15.2 35.5 C12 32.5 10.5 28 10.5 23.5 C10.5 15.5 17 9 25 9 C31 9 36 12.5 38.5 17.5 C36 11 30 6 22.5 4.5 Z" />
                <path d="M24 2 C11 2 1 12 1 24.5 C1 32 5.5 38.5 12 42.5 C9 40 7 36 7 31 C7 21 15 13 25 13 C31.5 13 37 16.5 40 21.5 C37.5 14.5 31.5 8 24 2 Z" opacity="0.85" />
                <path d="M18 43 C21 44.5 24.5 45 28 44.5 C22 43.5 17 40 14 35.5 C14.5 38.5 16 41 18 43 Z" />
              </g>
              <text x="54" y="35" fill="#FFFFFF" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontWeight="800" fontSize="38" letterSpacing="-0.8px">BluEnergies</text>
            </svg>
          </Link>

          {/* Divider between logo and navigation */}
          <div className="nav-logo-divider" aria-hidden="true"></div>

          {/* Desktop Navigation Links */}
          <ul className="nav-links" role="menubar">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.children && item.children.some(c => pathname === c.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li key={item.label} className="nav-item" role="none">
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    role="menuitem"
                    aria-haspopup={hasChildren ? 'true' : undefined}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <svg className="nav-caret" viewBox="0 0 10 6" aria-hidden="true">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    )}
                  </Link>

                  {hasChildren && (
                    <ul className="nav-dropdown" role="menu" aria-label={item.label}>
                      {item.children.map((child) => (
                        <li key={child.label} role="none">
                          <Link
                            href={child.href}
                            className={`nav-dropdown-link ${pathname === child.href ? 'is-active' : ''}`}
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right: Stock Identifier & Mobile Menu Toggle */}
          <div className="nav-right">
            <Link href="/investors/stock-information/" className="nav-ticker-badge" aria-label="Stock Information: TSXV: BLU">
              <span className="nav-ticker-pulse" aria-hidden="true"></span>
              <span>{site.ticker.exchange}: {site.ticker.symbol}</span>
            </Link>

            <button
              className="nav-toggle-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span>Menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Navigation Sheet */}
      <div
        id="mobile-nav"
        className={`mobile-nav-sheet ${mobileOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        <div className="mobile-nav-header">
          <Link href="/" className="nav-logo-link" onClick={() => setMobileOpen(false)}>
            <svg height="28" viewBox="0 0 252 47" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BluEnergies">
              <g fill="#51C2C9">
                <path d="M22.5 4.5 C12.2 4.5 4 12.8 4 23.5 C4 30.5 7.8 36.6 13.5 40 C11.2 38.2 9.5 35 9.5 30.8 C9.5 22.5 16 15.5 24.5 15.5 C29.5 15.5 33.8 18 36.5 22 C34.5 18 29.5 13 22.5 13 C15.5 13 10.2 18.5 10.2 25.5 C10.2 29.5 12.2 33 15.2 35.5 C12 32.5 10.5 28 10.5 23.5 C10.5 15.5 17 9 25 9 C31 9 36 12.5 38.5 17.5 C36 11 30 6 22.5 4.5 Z" />
                <path d="M24 2 C11 2 1 12 1 24.5 C1 32 5.5 38.5 12 42.5 C9 40 7 36 7 31 C7 21 15 13 25 13 C31.5 13 37 16.5 40 21.5 C37.5 14.5 31.5 8 24 2 Z" opacity="0.85" />
                <path d="M18 43 C21 44.5 24.5 45 28 44.5 C22 43.5 17 40 14 35.5 C14.5 38.5 16 41 18 43 Z" />
              </g>
              <text x="54" y="35" fill="#FFFFFF" fontFamily="'Hanken Grotesk', system-ui, sans-serif" fontWeight="800" fontSize="38" letterSpacing="-0.8px">BluEnergies</text>
            </svg>
          </Link>
          <button
            className="mobile-nav-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            Close &times;
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navigation.map((item) => (
            <li key={item.label}>
              <div className="mobile-nav-heading">
                <Link
                  href={item.href}
                  className="mobile-sub-link"
                  style={{ color: 'var(--teal)', fontWeight: 600 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
              {item.children && (
                <ul className="mobile-sub-list">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="mobile-sub-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div style={{
          marginTop: 'auto',
          paddingTop: '32px',
          borderTop: '1px solid rgba(81, 194, 201, 0.2)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          <p style={{ marginBottom: '8px' }}>{site.ticker.exchange}: {site.ticker.symbol}</p>
          <p><a href={`mailto:${site.email}`} style={{ color: 'var(--teal)' }}>{site.email}</a></p>
        </div>
      </div>
    </>
  );
}
