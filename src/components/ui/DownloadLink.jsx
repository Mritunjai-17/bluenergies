import Link from 'next/link';

export default function DownloadLink({
  title,
  href,
  format = 'PDF',
  size,
  date,
  isExternal = false
}) {
  const isPlaceholder = href === '#' || href.includes('placeholder');
  const isInternal = href.startsWith('/') && !href.startsWith('//');

  const content = (
    <>
      <div className="download-info">
        <span className="download-title">{title}</span>
        <span className="download-meta">
          {format} {size && `• ${size}`} {date && `• ${date}`}
          {isPlaceholder && (
            <span className="content-needed" style={{ marginLeft: '8px' }}>
              Document in preparation
            </span>
          )}
        </span>
      </div>
      <div className="download-action">
        {isExternal ? (
          <>
            <span>Watch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </>
        ) : (
          <>
            <span>Download</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </>
        )}
      </div>
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className="download-row">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="download-row"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  );
}
