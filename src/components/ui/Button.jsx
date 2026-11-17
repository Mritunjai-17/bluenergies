import Link from 'next/link';

export default function Button({
  href,
  variant = 'primary',
  theme = 'light',
  type = 'button',
  className = '',
  id,
  target,
  rel,
  onClick,
  disabled,
  children
}) {
  let variantClass = `btn-${variant}`;
  if (variant === 'secondary') {
    variantClass += theme === 'dark' ? ' btn-secondary-dark' : ' btn-secondary-light';
  }

  const computedRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;
  const combinedClass = `btn ${variantClass} ${className}`.trim();

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link href={href} className={combinedClass} id={id}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClass} id={id} target={target} rel={computedRel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
