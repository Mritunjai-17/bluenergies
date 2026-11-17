import '../styles/globals.css';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import CookieNotice from '../components/layout/CookieNotice';
import { site } from '../data/site.ts';

export const metadata = {
  metadataBase: new URL('https://www.blu-energies.com'),
  title: {
    default: `${site.name} | West Africa Deepwater Exploration`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | West Africa Deepwater Exploration`,
    description: site.description,
    images: ['/og.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | West Africa Deepwater Exploration`,
    description: site.description,
    images: ['/og.jpg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
