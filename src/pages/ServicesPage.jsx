import styled from "styled-components";
import GetInTouchSection from "../components/GetInTouchSection";
import CodeIcon from "../icons/CodeIcon";
import WebIcon from "../icons/WebIcon";
import PhoneInIcon from "../icons/PhoneInIcon";
import CloudIcon from "../icons/CloudIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import RoundArrowsIcon from "../icons/RoundArrowsIcon";
import getTranslation from "../config/translationsUtil";

const ServicesPage = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>{getTranslation("services.page.title")}</HeaderTitle>
        <HeaderDescription>
          {getTranslation("services.page.subtitle")}
        </HeaderDescription>
      </HeaderContainer>
      <ServicesContainer>
        <ServiceContainer>
          <CodeIcon height={100} />
          <ServiceName>
            {getTranslation("services.page.custom.software.development.title")}
          </ServiceName>
          <ServicesDescription>
            {getTranslation(
              "services.page.custom.software.development.description"
            )}
          </ServicesDescription>
          <StyledUl>
            <StyledLi>
              {getTranslation(
                "services.page.custom.software.development.list.item.one"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.custom.software.development.list.item.two"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.custom.software.development.list.item.three"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.custom.software.development.list.item.four"
              )}
            </StyledLi>
          </StyledUl>
        </ServiceContainer>
        <ServiceContainer>
          <WebIcon height={100} />
          <ServiceName>
            {getTranslation("services.page.web.development.title")}
          </ServiceName>
          <ServicesDescription>
            {getTranslation("services.page.web.development.description")}
          </ServicesDescription>
          <StyledUl>
            <StyledLi>
              {getTranslation("services.page.web.development.list.item.one")}
            </StyledLi>
            <StyledLi>
              {getTranslation("services.page.web.development.list.item.two")}
            </StyledLi>
            <StyledLi>
              {getTranslation("services.page.web.development.list.item.three")}
            </StyledLi>
            <StyledLi>
              {getTranslation("services.page.web.development.list.item.four")}
            </StyledLi>
          </StyledUl>
        </ServiceContainer>
        <ServiceContainer>
          <IconContainer>
            <PhoneInIcon height={90} />
          </IconContainer>
          <ServiceName>
            {getTranslation("services.page.mobile.app.development.title")}
          </ServiceName>
          <ServicesDescription>
            {getTranslation("services.page.mobile.app.development.description")}
          </ServicesDescription>
          <StyledUl>
            <StyledLi>
              {getTranslation(
                "services.page.mobile.app.development.list.item.one"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.mobile.app.development.list.item.two"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.mobile.app.development.list.item.three"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.mobile.app.development.list.item.four"
              )}
            </StyledLi>
          </StyledUl>
        </ServiceContainer>
        <ServiceContainer>
          <IconContainer>
            <CloudIcon height={80} />
          </IconContainer>
          <ServiceName>
            {getTranslation("services.page.saas.solutions.title")}
          </ServiceName>
          <ServicesDescription>
            {getTranslation("services.page.saas.solutions.description")}
          </ServicesDescription>
          <StyledUl>
            <StyledLi>
              {getTranslation("services.page.saas.solutions.list.item.one")}
            </StyledLi>
            <StyledLi>
              {getTranslation("services.page.saas.solutions.list.item.two")}
            </StyledLi>
            <StyledLi>
              {getTranslation("services.page.saas.solutions.list.item.three")}
            </StyledLi>
            <StyledLi>
              {getTranslation("services.page.saas.solutions.list.item.four")}
            </StyledLi>
          </StyledUl>
        </ServiceContainer>
        <ServiceContainer>
          <IconContainer>
            <RoundArrowsIcon height={60} />
          </IconContainer>
          <ServiceName>
            {getTranslation("services.page.full.lifecycle.development.title")}
          </ServiceName>
          <ServicesDescription>
            {getTranslation(
              "services.page.full.lifecycle.development.description"
            )}
          </ServicesDescription>
          <StyledUl>
            <StyledLi>
              {getTranslation(
                "services.page.full.lifecycle.development.list.item.one"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.full.lifecycle.development.list.item.two"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.full.lifecycle.development.list.item.three"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.full.lifecycle.development.list.item.four"
              )}
            </StyledLi>
          </StyledUl>
        </ServiceContainer>
        <ServiceContainer>
          <IconContainer>
            <WebsiteIcon height={60} />
          </IconContainer>
          <ServiceName>
            {getTranslation("services.page.wordpress.development.title")}
          </ServiceName>
          <ServicesDescription>
            {getTranslation("services.page.wordpress.development.description")}
          </ServicesDescription>
          <StyledUl>
            <StyledLi>
              {getTranslation(
                "services.page.wordpress.development.list.item.one"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.wordpress.development.list.item.two"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.wordpress.development.list.item.three"
              )}
            </StyledLi>
            <StyledLi>
              {getTranslation(
                "services.page.wordpress.development.list.item.four"
              )}
            </StyledLi>
          </StyledUl>
        </ServiceContainer>
      </ServicesContainer>

      <GetInTouchSection />
    </Container>
  );
};

export default ServicesPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.headerBackground};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid white;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
`;

const HeaderDescription = styled.h3`
  width: 50%;
  font-size: 25px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ServicesContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const ServiceContainer = styled.div`
  background-color: ${(props) => props.theme.servicesBackground};
  border-radius: 30px;
  box-shadow: -5px 5px 8px #949494;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: flex-start;
  color: #000;
`;

const ServiceName = styled.h4`
  font-size: 22px;
  text-align: start;
`;

const ServicesDescription = styled.p`
  text-align: start;
`;

const StyledUl = styled.ul``;

const StyledLi = styled.li`
  text-align: start;
  padding-top: 8px;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #246bad;
  display: flex;
  justify-content: center;
  align-items: center;
`;
