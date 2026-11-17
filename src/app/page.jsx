import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Asset from '../components/home/Asset';
import News from '../components/home/News';
import Newsletter from '../components/home/Newsletter';

export const metadata = {
  title: 'BluEnergies Ltd. | West Africa Deepwater Exploration',
  description: "BluEnergies Ltd. (TSXV: BLU) is an exploration company focused on West Africa's deepwater basins, partnering with TotalEnergies in the Harper Basin, offshore Liberia."
};

export default function HomePage() {
  return (
    <>
      {/* 1. Deepwater Hero Section with Geological Seabed Graphic */}
      <Hero />

      {/* 2. About Section: Focused Explorer Editorial Row */}
      <About />

      {/* 3. Assets Section: Harper Basin & Ownership Distribution */}
      <Asset />

      {/* 4. News Section: Horizontal Chronological Releases */}
      <News />

      {/* 5. Newsletter Section: Compliant Investor Updates */}
      <Newsletter />
    </>
  );
}
