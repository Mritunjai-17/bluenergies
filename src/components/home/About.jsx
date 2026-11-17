import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';

export default function About() {
  return (
    <Section background="paper" id="who-we-are">
      <div style={{ maxWidth: '860px' }}>
        <Eyebrow text="Who we are" theme="light" />
        <h2>A focused explorer, not a portfolio of everything.</h2>
        <p className="lede" style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          High success rates in basin floor fan plays from Ghana to Namibia to Côte d&apos;Ivoire have pulled the industry toward Africa&apos;s Atlantic margin. We got into the Harper Basin early, and we keep our work narrow so every dollar goes into understanding one place well.
        </p>
      </div>

      {/* Editorial 3-Column Factual Row */}
      <div className="about-facts-row">
        <div className="about-fact-item">
          <div className="about-fact-num">2020</div>
          <div className="about-fact-desc">Company founded with a focused deepwater exploration mandate.</div>
        </div>

        <div className="about-fact-item">
          <div className="about-fact-num">3</div>
          <div className="about-fact-desc">Offshore exploration blocks: LB-26, LB-30, and LB-31 in the Harper Basin.</div>
        </div>

        <div className="about-fact-item">
          <div className="about-fact-num">7</div>
          <div className="about-fact-desc">Cretaceous basin floor fan systems mapped on regional 3D seismic.</div>
        </div>
      </div>
    </Section>
  );
}
