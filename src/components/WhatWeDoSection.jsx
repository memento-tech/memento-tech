import styled from "styled-components";
import SupportIcon from "../icons/SupportIcon";
import RocketIcon from "../icons/RocketIcon";
import SmartphoneIcon from "../icons/SmartphoneIcon";
import BrowserIcon from "../icons/BrowserIcon";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import getTranslation from "../config/translationsUtil";

const WhatWeDoSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>
        {getTranslation("home.page.what.we.do.section.title")}
      </SectionHeader>
      <CardsContainer>
        <Card>
          <h3>
            {getTranslation(
              "home.page.what.we.do.section.web.development.title"
            )}
          </h3>
          <BrowserIcon height={120} />
          <CardText>
            {getTranslation(
              "home.page.what.we.do.section.web.development.description"
            )}
          </CardText>
        </Card>
        <Card>
          <h3>
            {getTranslation("home.page.what.we.do.section.mobile.apps.title")}
          </h3>
          <SmartphoneIcon height={120} />
          <CardText>
            {getTranslation(
              "home.page.what.we.do.section.mobile.apps.description"
            )}
          </CardText>
        </Card>
        <Card>
          <h3>
            {getTranslation(
              "home.page.what.we.do.section.digital.transformation.title"
            )}
          </h3>
          <RocketIcon height={120} />
          <CardText>
            {getTranslation(
              "home.page.what.we.do.section.digital.transformation.description"
            )}
          </CardText>
        </Card>
        <Card>
          <h3>
            {getTranslation(
              "home.page.what.we.do.section.consulting.and.support.title"
            )}
          </h3>
          <SupportIcon height={120} />
          <CardText>
            {getTranslation(
              "home.page.what.we.do.section.consulting.and.support.description"
            )}
          </CardText>
        </Card>
      </CardsContainer>
    </SectionFullContainer>
  );
};

export default WhatWeDoSection;

const CardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 7%;
  margin-top: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    height: auto;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4%;
    margin-top: 0;
    height: auto;
    width: 90%;
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground};
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: 10px;
  box-shadow: -5px 5px 4px ${(props) => props.theme.backdrop};
  color: #000000;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    box-sizing: border-box;
    row-gap: 0;
  }
`;

const CardText = styled.p`
  box-sizing: border-box;
  width: 80%;
  margin: 1rem 1rem;
  font-weight: 400;
`;
