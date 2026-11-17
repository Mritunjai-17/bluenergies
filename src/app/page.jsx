import Hero from '../components/home/Hero';
import CompanyOverview from '../components/home/CompanyOverview';
import CompanyAtAGlance from '../components/home/CompanyAtAGlance';
import FeaturedAsset from '../components/home/FeaturedAsset';
import ExplorationPotential from '../components/home/ExplorationPotential';
import StrategicPartnership from '../components/home/StrategicPartnership';
import WorkProgramme from '../components/home/WorkProgramme';
import InvestorSnapshot from '../components/home/InvestorSnapshot';
import LatestNews from '../components/home/LatestNews';
import LeadershipIntro from '../components/home/LeadershipIntro';
import FinalInvestorCTA from '../components/home/FinalInvestorCTA';

export const metadata = {
  title: 'BluEnergies Ltd. | West Africa Deepwater Exploration',
  description: "BluEnergies Ltd. (TSXV: BLU | OTCQX: BLUGF) is a Canadian oil and gas exploration company focused on West Africa's deepwater Harper Basin, partnered with TotalEnergies under Reconnaissance Licence RL-003."
};

export default function HomePage() {
  return (
    <>
      {/* 00. Existing Hero Section (Preserved & Untouched) */}
      <Hero />

      {/* 01. Company Overview */}
      <CompanyOverview />

      {/* 02. Company at a Glance */}
      <CompanyAtAGlance />

      {/* 03. Featured Asset: Harper Basin */}
      <FeaturedAsset />

      {/* 04. Exploration Potential: Cretaceous Basin Floor Fan Play */}
      <ExplorationPotential />

      {/* 05. Strategic Partnership: Joint Exploration with TotalEnergies */}
      <StrategicPartnership />

      {/* 06. Exploration Work Programme */}
      <WorkProgramme />

      {/* 07. Investor Snapshot */}
      <InvestorSnapshot />

      {/* 08. Latest News */}
      <LatestNews />

      {/* 09. Leadership Introduction */}
      <LeadershipIntro />

      {/* 10. Final Investor CTA */}
      <FinalInvestorCTA />
    </>
  );
}
