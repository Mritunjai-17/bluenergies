import Link from 'next/link';

/**
 * Reusable Editorial Subnavigation Tabs
 * Provides cohesive pill navigation across multi-page sections
 * Supports theme="dark" (default) or theme="light" for multi-tone pages
 */
export default function SubnavTabs({ items, activeHref, theme = 'dark', ariaLabel = 'Section Subnavigation' }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className={`corp-subnav-tabs ${theme === 'light' ? 'theme-light' : 'theme-dark'}`} aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = activeHref === item.href || (item.exact ? activeHref === item.href : activeHref.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`corp-subnav-tab ${isActive ? 'is-active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
