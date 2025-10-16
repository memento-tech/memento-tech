import styled from "styled-components";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import getTranslation from "../config/translationsUtil";
import TestimonialCardsFull from "./TestimonialCardsFull";
import TestimonialsCarousel from "./TestimonialsCarousel";

const TestimonialsSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>
        {getTranslation("home.page.testimonials.section.title")}
      </SectionHeader>
      <Subheader>
        {getTranslation("home.page.testimonials.section.subtitle")}
      </Subheader>
      <TestimonialCardsFull />
      <TestimonialsCarousel />
    </SectionFullContainer>
  );
};

export default TestimonialsSection;

const Subheader = styled.h3`
  width: 120px;
`;
