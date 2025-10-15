import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import OurWorkSection from "../components/OurWorkSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <WhatWeDoSection />
      <OurWorkSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  z-index: 10;
`;
