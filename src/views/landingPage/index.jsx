import React from 'react'
import HeroSection from "components/heroSection";
import Header from "shared/header";
import './landingPageStyles.css';
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  )
}

export default LandingPage;