// @ts-nocheck
import styled from "styled-components";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import SendwichIcon from "./SendwichIcon";
import ArrowIcon from "../icons/ArrowIcon";
import BlackScreenLogo from "../icons/BlackScreenLogo";
import WhiteScreenLogo from "../icons/WhiteScreenLogo";

const NavBar = ({ onThemeChange }) => {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [themeBlackChange, setThemeBlackChange] = useState(false);

  useEffect(() => {
    onThemeChange(themeBlackChange);
  }, [themeBlackChange]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBarContainer $scrolled={scrolled.toString()}>
        <StyledLogoLink to={"/"}>
          <NavBarLogo src={themeBlackChange ? logoWhite : logoBlack} />
          <LogoText>Memento Tech</LogoText>
        </StyledLogoLink>
        <SendwichIcon
          clicked={menuIconClicked}
          color={themeBlackChange ? "white" : "black"}
          onClick={() => setMenuIconClicked(!menuIconClicked)}
        />

        <LinksContainer>
          <NavBarLink to={"/"}>Home</NavBarLink>
          <NavBarLink to={"/portfolio"}>Portfolio</NavBarLink>
          <NavBarLink to={"/tech-hub"}>About Us</NavBarLink>
          <NavBarLink to={"/contact-us"}>Contact</NavBarLink>
        </LinksContainer>

        {menuIconClicked && (
          <MobileLinksContainer>
            <MobileNavBarLink to={"/"}>Home</MobileNavBarLink>
            <MobileNavBarLink to={"/portfolio"}>Portfolio</MobileNavBarLink>
            <MobileNavBarLink to={"/tech-hub"}>About Us</MobileNavBarLink>
            <MobileNavBarLink to={"/contact-us"}>Contact</MobileNavBarLink>
            <LanguageContainer>
              <LanguageChanger>
                En
                <ArrowIcon
                  height={20}
                  rotate={90}
                  color={themeBlackChange ? "#ffffff" : "#000000"}
                />
              </LanguageChanger>
              <VerticalSpacer />
              <BlackScreenLogoContainer
                onClick={() => setThemeBlackChange(!themeBlackChange)}
              >
                {themeBlackChange ? (
                  <WhiteScreenLogo height={18} />
                ) : (
                  <BlackScreenLogo height={18} />
                )}
              </BlackScreenLogoContainer>
            </LanguageContainer>
          </MobileLinksContainer>
        )}

        <LeftMostPart>
          <LanguageChanger>
            En
            <ArrowIcon
              height={20}
              rotate={90}
              color={themeBlackChange ? "#ffffff" : "#000000"}
            />
          </LanguageChanger>
          <VerticalSpacer />
          <BlackScreenLogoContainer
            onClick={() => setThemeBlackChange(!themeBlackChange)}
          >
            {themeBlackChange ? (
              <WhiteScreenLogo height={18} />
            ) : (
              <BlackScreenLogo height={18} />
            )}
          </BlackScreenLogoContainer>
        </LeftMostPart>
      </NavBarContainer>
    </>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;

  background-color: ${(props) => props.theme.headerBackground};

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  box-sizing: border-box;
  padding: 0 3rem;
  padding-bottom: ${({ $scrolled }) => ($scrolled === "true" ? "2px" : "0")};

  z-index: 1000;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
`;

const StyledLogoLink = styled(Link)`
  border: 0;
  color: ${(props) => props.theme.fontColorBlack};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.span`
  text-transform: uppercase;
  transform: translateY(2px);
  font-family: "JejuMyeongjo";
  font-size: 25px;
`;

const NavBarLogo = styled.img`
  max-height: 70%;
  max-width: 50px;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    max-width: 40px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MobileLinksContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBackground};
  width: 100%;
  height: 30vh;
  bottom: calc(-30vh - 5px);
  left: 0;
  z-index: 10001;

  padding: 2rem;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const MobileNavBarLink = styled(Link)`
  color: ${(props) => props.theme.fontColorBlack};
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

const LanguageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.fontColorBlack};
`;

const NavBarLink = styled(Link)`
  padding: 0 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, 0.2s ease-in-out;

  border-radius: 20px;
  padding: 5px 5px;
  margin: 0 5px;
  width: 100px;
  background-color: #f7f7f77d;
  text-transform: uppercase;
  color: ${(props) => props.theme.fontColorBlack};

  font-size: 0.8rem;
  font-weight: 100;
  &:hover {
    transform: scale(1.1);
    font-weight: 100;
  }

  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const LeftMostPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;

const LanguageChanger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerticalSpacer = styled.div`
  height: 20px;
  width: 1px;
  background-color: black;
  margin-right: 10px;
`;

const BlackScreenLogoContainer = styled.div`
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;
