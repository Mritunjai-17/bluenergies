import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';

export default function StrategicPartnership() {
  const pillars = [
    {
      title: 'Global Deepwater Operating Leadership',
      desc: 'TotalEnergies is a global energy supermajor with world-leading deepwater exploration and development expertise, having drilled landmark discoveries in West Africa, Brazil, and Suriname.'
    },
    {
      title: 'Technical Evaluation & Data Synergy',
      desc: 'The partnership combines TotalEnergies’ proprietary geoscience capabilities with BluEnergies’ local basin capture intelligence to accelerate geological, geophysical, and geochemical studies.'
    },
    {
      title: 'Commercial Framework & Cost Recovery',
      desc: 'The Joint Study and Assessment Agreement (JSAA) establishes an efficient capital structure where 100% of approved reconnaissance expenditures qualify for cost recovery under subsequent production contracts.'
    },
    {
      title: 'Direct Pathway to Drilling Exploration Wells',
      desc: 'The joint programme systematically de-risks candidate well locations, preparing the consortium to mature the licence into definitive drilling targets ahead of the June 30, 2027 milestone.'
    }
  ];

  return (
    <Section background="white" id="strategic-partnership">
      <div className="editorial-grid" style={{ alignItems: 'center' }}>
        <div className="motion-fade-up">
          <Eyebrow text="Strategic Partnership" theme="light" />
          <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', lineHeight: 1.18, marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
            Joint Exploration with TotalEnergies
          </h2>
          <p className="lede" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            In January 2026, BluEnergies formalized a Joint Study and Assessment Agreement (JSAA) with TotalEnergies for Reconnaissance Licence RL-003, offshore Liberia.
          </p>
          <p style={{ color: 'var(--text-dark)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Under the agreement, <strong>TotalEnergies holds a 65% operating interest</strong> and <strong>BluEnergies holds a 35% participating interest</strong>. This collaboration pairs BluEnergies&apos; early basin mover advantage with the operational scale, engineering pedigree, and capital strength of one of the world&apos;s leading deepwater operators.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Button href="/assets-and-operations/overview/#the-partnership" variant="secondary" theme="light">
              Explore partnership details
            </Button>
          </div>
        </div>

        {/* Partnership Pillar Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {pillars.map((p, idx) => (
            <div key={idx} className={`motion-fade-up stagger-${idx + 1}`} style={{ background: 'var(--soft-blue)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(20, 43, 58, 0.08)', borderLeft: '3px solid var(--teal-primary)' }}>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--dark-navy)', marginBottom: '6px' }}>
                {p.title}
              </strong>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
