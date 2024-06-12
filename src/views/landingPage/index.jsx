import React from 'react'
import './landingPageStyles.css';

import Header from "shared/header";
import HeroSection from "components/heroSection";
import SubHeroSection from 'components/subHeroSection';
import InfoCard from 'components/infoCard';
import OurExperience from 'components/ourExperience';
import FindYourSpace from 'components/findYourSpace';
import  Comprehensive  from 'shared/comprehensive';
import FeaturedProperties from 'components/featuredProperties';
import Accomodation from 'shared/accomodation';
import Discover from 'components/discover';
import FindHomes from 'shared/findHomes';
import OfficeSpace from 'components/officeSpace';
import AppStores from 'components/appstores';
import Footer from 'shared/footer';

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
      <Discover />
      <FindHomes />
      <OfficeSpace />
      <AppStores />
      <Footer />
    </div>
  )
}

export default LandingPage;