import React from 'react'
import HeroSection from "components/heroSection";
import Header from "shared/header";
import './landingPageStyles.css';
import SubHeroSection from 'components/subHeroSection';
import InfoCard from 'components/infoCard';
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard />
    </div>
  )
}

export default LandingPage;