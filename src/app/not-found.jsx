import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export const metadata = {
  title: 'Page Not Found | BluEnergies Ltd.',
  description: 'The requested page could not be found.'
};

export default function NotFound() {
  return (
    <Section background="abyss" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '160px' }}>
      <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--display)', fontSize: '5rem', color: 'var(--teal)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </div>
        <h1 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem' }}>
          Uncharted coordinates.
        </h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.15rem', marginBottom: '2.5rem', marginLeft: 'auto', marginRight: 'auto' }}>
          The page you are looking for has been moved, renamed, or is currently unavailable. Return to the homepage to navigate our corporate and exploration information.
        </p>
        <div>
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </Section>
  );
}
