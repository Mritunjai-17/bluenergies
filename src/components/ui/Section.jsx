export default function Section({
  background = 'paper',
  id,
  className = '',
  containerClassName = '',
  style,
  children
}) {
  const isDark = background === 'abyss' || background === 'navy';
  const themeClass = isDark ? 'theme-dark' : 'theme-light';

  return (
    <section
      id={id}
      className={`section section-${background} ${themeClass} ${className}`.trim()}
      style={style}
    >
      <div className={`container ${containerClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
}
