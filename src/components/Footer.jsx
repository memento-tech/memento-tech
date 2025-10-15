import { Link } from "react-router";
import styled from "styled-components";
import logo from "../assets/logo-white.png";
import linkedInIcon from "../assets/Linkedin Icon.png";
import twitterIcon from "../assets/Twitter Icon.png";
import facebookIcon from "../assets/Facebook Icon.png";
import hoverCircleImage from "../assets/hoverCircleImage.jpg";
import getTranslation from "../config/translationsUtil";
import {
  contactNavigation,
  getFooterNavigation,
} from "../config/navigationConfig";

const Footer = () => {
  return (
    <FooterContainer>
      <ColoredContainer>
        <ContentContainer>
          <LeftPart>
            <ReadyTitle>
              {getTranslation("footer.ready.to.start.title")}
            </ReadyTitle>
            <KickstartButton to={contactNavigation.to}>
              {getTranslation("footer.kickstart.button.label")}
            </KickstartButton>
            <LogoContainer>
              <Logo src={logo} alt="Logo Memento Tech"/>
              <LogoText>Memento Tech</LogoText>
            </LogoContainer>
          </LeftPart>
          <QuickLinksSection>
            <QuickLinksHeader>
              {getTranslation("footer.quick.links.label")}
            </QuickLinksHeader>
            {getFooterNavigation().map((navigation) => (
              <LinkStyled to={navigation.to} key={navigation.labelCode}>
                {getTranslation(navigation.labelCode)}
              </LinkStyled>
            ))}
          </QuickLinksSection>
          <RightPart>
            <div>
              <SocialNetworksPart>
                <SocialNetworkLinkImg src={facebookIcon} alt="Facebook Logo" />
                <SocialNetworkLinkImg src={linkedInIcon} alt="Linked In Logo" />
                <SocialNetworkLinkImg src={twitterIcon} alt="X Logo" />
              </SocialNetworksPart>

              <EmailLink href="mailto:info@memento-tech.com">
                info@memento-tech.com
              </EmailLink>
            </div>
            <HoverCircle
              style={{ height: "300px", width: "300px", top: "-120px" }}
            >
              <HoverCircle
                style={{
                  height: "290px",
                  width: "290px",
                  backgroundColor: "#5093D2",
                  top: "5px",
                  left: "5px",
                }}
              >
                <HoverCircle
                  style={{
                    height: "272px",
                    width: "272px",
                    backgroundColor: "#166ABB",
                    top: "8px",
                    left: "8px",
                  }}
                >
                  <HoverCircle
                    style={{
                      height: "250px",
                      width: "250px",
                      backgroundColor: "#fff",
                      top: "11px",
                      left: "11px",
                    }}
                  >
                    <HoverCircleImage src={hoverCircleImage} />
                  </HoverCircle>
                </HoverCircle>
              </HoverCircle>
            </HoverCircle>
          </RightPart>
        </ContentContainer>
      </ColoredContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  min-height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ColoredContainer = styled.div`
  border-top-left-radius: 60%;
  border-top-right-radius: 60%;
  height: 100%;
  width: 200%;
  background-color: #012f5b;
  margin-top: 3rem;

  position: absolute;
  left: -50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ReadyTitle = styled.h3`
  color: #fff;
  font-size: 35px;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const KickstartButton = styled(Link)`
  background-color: #fce5c0;
  border-radius: 20px;
  width: 250px;
  padding: 0.5rem 0;
  font-weight: 400;
  margin-left: 1rem;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    scale: 1.1;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
`;

const Logo = styled.img`
  height: 150px;
  width: auto;
`;

const LogoText = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: 35px;
`;

const QuickLinksSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuickLinksHeader = styled.p`
  color: #fff;
`;

const LinkStyled = styled(Link)`
  color: #fff;
  margin-top: 0.5rem;

  &:hover {
    scale: 1.1;
  }
`;

const RightPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3rem;
  position: relative;
`;

const SocialNetworksPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const EmailLink = styled.a`
  color: #fff;
`;

const SocialNetworkLinkImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const HoverCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 50%;
  overflow: hidden;
`;

const HoverCircleImage = styled.img`
  object-fit: cover;
  rotate: 20deg;
  width: 300px;
  height: 280px;

  transform: translateX(-50px) translateY(10px);
`;
