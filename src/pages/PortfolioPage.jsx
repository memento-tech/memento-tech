import styled from "styled-components";
import titleContainerBackground from "../assets/portfolioHeaderBackground.png";
import headerImage1 from "../assets/about1.jpg";
import headerImage2 from "../assets/about2.jpg";
import headerImage3 from "../assets/about3.jpg";
import GetInTouchSection from "../components/GetInTouchSection";
import Projects from "../components/Projects";
import getTranslation from "../config/translationsUtil";

const PortfolioPage = () => {
  return (
    <Container>
      <HeaderSection>
        <TitleContainer>
          <TitleContainerBackground
            src={titleContainerBackground}
            alt="Left part container background"
          />
          <HeaderTitle>
            {getTranslation("portfolio.page.title")}
            <br />
            <br />
            {getTranslation("portfolio.page.subtitle")}
          </HeaderTitle>
        </TitleContainer>
        <HeaderImagesContainer>
          <HeaderImage
            src={headerImage1}
            alt="Medium round display image for header"
            style={{ width: "200px", height: "200px" }}
          />
          <HeaderImage
            src={headerImage2}
            alt="Large round display image for header"
            style={{ width: "300px", height: "300px" }}
          />
          <HeaderImage
            src={headerImage3}
            alt="Small round display image for header"
            style={{ width: "200px", height: "200px" }}
          />
        </HeaderImagesContainer>
      </HeaderSection>
      <Projects />
      <Splitter />
      <GetInTouchSection />
    </Container>
  );
};

export default PortfolioPage;

const Splitter = styled.div`
  margin-top: 3rem;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 70%;
  height: 500px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  background: ${(props) => props.theme.portfolioPageHeaderBackground};
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-left: 0;

  animation: slideAcross 1s ease-in-out;

  @keyframes slideAcross {
    0% {
      left: -70%;
    }
    100% {
      left: 0;
    }
  }
`;

const TitleContainerBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  opacity: 0.5;
`;

const HeaderTitle = styled.h1`
  box-sizing: border-box;
  text-transform: uppercase;
  width: 80%;
  padding: 2rem 0;
  margin: 0;
  text-align: start;
  font-weight: 400;
  line-height: 3.1rem;

  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.1rem;
`;

const HeaderImagesContainer = styled.div`
  width: 50%;

  animation: slideAcrossImages 1s ease-in-out;

  @keyframes slideAcrossImages {
    0% {
      transform: translateX(100%);
    }
    100% {
      right: 0;
    }
  }
`;

const HeaderImage = styled.img`
  border-radius: 50%;
  box-shadow: -10px 10px 20px #3f3f3fae;

  object-fit: cover;
`;
