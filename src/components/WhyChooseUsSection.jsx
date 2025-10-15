import styled from "styled-components";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import dependable from "../assets/dependable.png";
import graphicDesign from "../assets/graphic-design.png";
import productDevelopment from "../assets/product-development.png";
import passionDevelopment from "../assets/sustainable-development.png";
import adaptable from "../assets/adapt.png";
import { Link } from "react-router";
import getTranslation from "../config/translationsUtil";
import { contactNavigation } from "../config/navigationConfig";

const WhyChooseUsSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>
        {getTranslation("home.page.why.choose.us.section.title")}
      </SectionHeader>
      <Subheader>
        {getTranslation("home.page.why.choose.us.section.subtitle")}
      </Subheader>
      <CardsContainer>
        <CardContainer>
          <CardText>
            {getTranslation("home.page.why.choose.us.section.adaptable")}
          </CardText>
          <CardImage src={adaptable} alt="Adaptable icon" />
        </CardContainer>
        <CardContainer>
          <CardImage src={dependable} alt="Dependable icon"/>
          <CardText>
            {getTranslation("home.page.why.choose.us.section.collaboration")}
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardText>
            {getTranslation("home.page.why.choose.us.section.design")}
          </CardText>
          <CardImage src={graphicDesign} alt="Graphic icon"/>
        </CardContainer>
        <CardContainer>
          <CardImage src={productDevelopment} alt="Product development icon " />
          <CardText>
            {getTranslation("home.page.why.choose.us.section.vision")}
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardText>
            {getTranslation("home.page.why.choose.us.section.meaning")}
          </CardText>
          <CardImage src={passionDevelopment} alt="Passion development icon"/>
        </CardContainer>
        <CardContainer>
          <CardText>
            {getTranslation("home.page.why.choose.us.section.final.part.one")}
            <br />
            {getTranslation("home.page.why.choose.us.section.final.part.two")}
          </CardText>
          <StartButton to={contactNavigation.to}>
            {getTranslation(
              "home.page.why.choose.us.section.start.button.label"
            )}
          </StartButton>
        </CardContainer>
      </CardsContainer>
    </SectionFullContainer>
  );
};

export default WhyChooseUsSection;

const Subheader = styled.h3`
  width: 50%;
  font-size: 16px;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  height: 180px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: -10px 10px 30px #6060603e;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    flex-direction: column;
    justify-content: center;
  }
`;

const CardText = styled.p`
  color: #000000;
  width: 60%;
  margin: 0 1rem;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
`;

const StartButton = styled(Link)`
  margin-top: 1rem;
  padding: 0.3rem 3rem;
  margin-bottom: 0;
  background-color: #fee8c2;
  border-radius: 8px;
  font-weight: 400;

  &:hover {
    scale: 1.1;
    transition: scale 0.1s ease-in-out;
  }
`;
