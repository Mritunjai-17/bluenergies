import Eyebrow from './Eyebrow';

export default function PageHero({
  eyebrow = 'BluEnergies',
  title,
  lede,
  className = ''
}) {
  return (
    <header className={`page-hero ${className}`.trim()}>
      <div className="container">
        <div className="page-hero-content">
          {eyebrow && <Eyebrow text={eyebrow} theme="dark" />}
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </div>
      </div>

      <svg
        className="page-hero-wave"
        viewBox="0 0 1440 28"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 14C240 2 480 26 720 14C960 2 1200 26 1440 14V28H0V14Z"
          fill="#51C2C9"
          fillOpacity="0.12"
        />
      </svg>
    </header>
  );
}
