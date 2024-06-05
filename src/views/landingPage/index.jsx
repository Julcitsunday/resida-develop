import React from 'react'
import HeroSection from "components/heroSection";
import Header from "shared/header";
import './landingPageStyles.css';
import SubHeroSection from 'components/subHeroSection';
import InfoCard from 'components/infoCard';
import OurExperience from 'components/ourExperience';
import FindYourSpace from 'components/findYourSpace';
import  Comprehensive  from 'shared/comprehensive';
import FeaturedProperties from 'components/featuredProperties';
import Accomodation from 'shared/accomodation';
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard />
      <OurExperience />
      <FindYourSpace />
      <Comprehensive />
      <FeaturedProperties />
      <Accomodation />
    </div>
  )
}

export default LandingPage;