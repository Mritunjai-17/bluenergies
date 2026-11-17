export default function Eyebrow({
  text,
  theme = 'light',
  className = ''
}) {
  const waveColor = theme === 'dark' ? '#51C2C9' : '#17808C';

  return (
    <div className={`eyebrow eyebrow-${theme} ${className}`.trim()}>
      <svg
        className="eyebrow-wave"
        viewBox="0 0 34 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1 4C5 1 9 1 13 4C17 7 21 7 25 4C28 1.8 31 2 33 4"
          stroke={waveColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{text}</span>
    </div>
  );
}
