import React from "react";

import BenefitSection from "./BenefitSection";
import IntroSection from "./IntroSection";
import EventSection from "./EventSection";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <BenefitSection />
      <EventSection />
    </div>
  );
}

export default Home;
