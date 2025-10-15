import styled from "styled-components";
import about1 from "../assets/about1.jpg";

const AboutUsPage = () => {
  return (
    <PageContainer>
      <TextContainer>Text</TextContainer>
      <HeroContainer>
        <HeroImage src={about1} alt="About us hero container image"/>
      </HeroContainer>
    </PageContainer>
  );
};

export default AboutUsPage;

const PageContainer = styled.div`
  align-items: center;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const TextContainer = styled.div`
  min-width: 50%;
  height: 100%;
`;

const HeroContainer = styled.div`
  height: 100vh;
  min-width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 50%;
  object-fit: cover;
  background-color: transparent;
`;
