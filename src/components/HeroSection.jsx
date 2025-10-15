import styled from "styled-components";
import backgroundImage from "../assets/hero-section-background.png";
import logoImage from "../assets/logo-white.png";
import ogledaloDrustva from "../assets/ogledalo-drustva.png";
import ogledaloDrustvaHome from "../assets/ogledalo-drustva-home.png";
import yogaWebsite from "../assets/yoga-website.png";
import { Link } from "react-router";
import getTranslation from "../config/translationsUtil";
import { contactNavigation, portfolioNavigation } from "../config/navigationConfig";

const HeroSection = () => {
  return (
    <Container>
      <ContainerImage src={backgroundImage} alt="Hero Section Background Image" />
      <TopContent>
        <Logo src={logoImage} alt="Logo Memento Tech"/>
        <TopTextContainer>
          <TopText>Memento Tech</TopText>
          <HorizontalLineContainer>
            <HorizontalLine />
            <HorizontalLine />
            <HorizontalLine />
            <HorizontalLine />
          </HorizontalLineContainer>
          <BottomText>{getTranslation("home.page.main.subtitle")}</BottomText>
          <Description>
            {getTranslation("home.page.main.description")}
          </Description>
        </TopTextContainer>
      </TopContent>
      <ButtonsContainer>
        <Button to={contactNavigation.to}>
          {getTranslation("home.page.free.quote.button.label")}
        </Button>
        <Button to={portfolioNavigation.to} style={{ backgroundColor: "#054268" }}>
          {getTranslation("home.page.portfolio.button.label")}
        </Button>
      </ButtonsContainer>

      <AbsScreensContainer>
        <AbsScreenContainer
          style={{
            rotate: "-5deg",
            bottom: -30,
          }}
        >
          <AbsScreenImg src={ogledaloDrustva} alt="Ogledalo Drustva Image home page" />
        </AbsScreenContainer>
        <AbsScreenContainer
          style={{
            left: 250,
            bottom: -60,
            zIndex: 101,
          }}
        >
          <AbsScreenImg
            src={ogledaloDrustvaHome}
            alt="Ogledalo drustva image admin page"
            style={{ height: "auto", width: "100px" }}
          />
        </AbsScreenContainer>
        <AbsScreenContainer
          style={{
            left: 339,
            rotate: "5deg",
            bottom: -30,
          }}
        >
          <AbsScreenImg src={yogaWebsite} alt="Yoga image home page"/>
        </AbsScreenContainer>
      </AbsScreensContainer>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100%;
  min-height: 450px;

  /* overflow: hidden; */
  position: relative;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const ContainerImage = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ffe8c2;
`;

const TopContent = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: auto;
  padding-bottom: 10px;
`;

const Logo = styled.img`
  object-fit: fill;
  width: auto;
  height: 200px;
`;

const TopTextContainer = styled.div`
  color: white;
  width: 100%;

  transform: translateY(35px);
`;

const TopText = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  padding: 0;
  margin: 0;
  text-align: start;
  font-family: "JejuMyeongjo";
`;

const HorizontalLineContainer = styled.div`
  display: grid;
  grid-template-columns: 20fr 3fr 1fr 0.5fr;
  grid-gap: 40px;
`;

const HorizontalLine = styled.div`
  background-color: white;
  height: 3px;
  margin: 5px 0;
`;

const BottomText = styled.h3`
  text-align: end;
  margin: 0;
  margin-right: 278px;
  padding: 0;
  text-transform: uppercase;

  font-family: "Courier New", Courier, monospace;
  font-weight: 100;
`;

const Description = styled.p`
  text-align: start;
  width: 700px;
  font-style: italic;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;

  margin-left: auto;
  width: 48%;
  margin-bottom: 2rem;
  z-index: 1;
`;

const Button = styled(Link)`
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out, 0.2s ease-in-out;
  }
`;

const AbsScreensContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 150px;
`;

const AbsScreenContainer = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 0;
`;

const AbsScreenImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  height: 130px;
  width: auto;
  border-radius: 10px;
  box-shadow: -5px 5px 4px #0000004e;
`;
