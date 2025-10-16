import styled from "styled-components";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import SendwichIcon from "./SendwichIcon";
import BlackScreenLogo from "../icons/BlackScreenLogo";
import WhiteScreenLogo from "../icons/WhiteScreenLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import getTranslation from "../config/translationsUtil";
import {
  getHeaderNavigation,
  homeNavigation,
} from "../config/navigationConfig";
import { useCookies } from "../providers/CookieContext";

const NavBar = ({ onThemeChange }) => {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getGlobalCookie, setGlobalCookie } = useCookies();
  const [themeBlackChange, setThemeBlackChange] = useState(false);

  useEffect(() => {
    onThemeChange(themeBlackChange);
  }, [themeBlackChange, onThemeChange]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onChangeTheme = () => {
    setThemeBlackChange(!themeBlackChange);
    const globalCookie = getGlobalCookie();
    globalCookie.whiteTheme = !themeBlackChange;
    setGlobalCookie(globalCookie);
  };

  useEffect(() => {
    setThemeBlackChange(
      getGlobalCookie().whiteTheme !== undefined && getGlobalCookie().whiteTheme
    );
  }, [getGlobalCookie]);

  return (
    <>
      <NavBarContainer $scrolled={scrolled.toString()}>
        <StyledLogoLink to={homeNavigation.to}>
          <NavBarLogo
            src={themeBlackChange ? logoWhite : logoBlack}
            alt="Logo Memento Tech"
          />
          <LogoText>Memento Tech</LogoText>
        </StyledLogoLink>
        <SendwichIcon
          clicked={menuIconClicked}
          color={themeBlackChange ? "white" : "black"}
          onClick={() => setMenuIconClicked(!menuIconClicked)}
        />

        <LinksContainer>
          {getHeaderNavigation().map((navigation) => (
            <NavBarLink to={navigation.to} key={navigation.labelCode}>
              {getTranslation(navigation.labelCode)}
            </NavBarLink>
          ))}
        </LinksContainer>

        {menuIconClicked && (
          <MobileLinksContainer>
            {getHeaderNavigation().map((navigation) => (
              <MobileNavBarLink
                to={navigation.to}
                key={navigation.labelCode}
                onClick={() => setMenuIconClicked(!menuIconClicked)}
              >
                {getTranslation(navigation.labelCode)}
              </MobileNavBarLink>
            ))}
            <LanguageContainer>
              <LanguageSwitcher themeBlackChange={themeBlackChange} />
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
          <LanguageSwitcher themeBlackChange={themeBlackChange} />
          <VerticalSpacer />
          <BlackScreenLogoContainer onClick={onChangeTheme}>
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

  @media screen and (max-width: 1000px) {
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

  @media screen and (max-width: 1000px) {
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
  bottom: calc(-30vh - 2px);
  left: 0;
  z-index: 10001;

  padding: 2rem;

  @media screen and (min-width: 1000px) {
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

  &:last-child {
    color: #fff;
    background-color: #246bad;
  }
`;

const LeftMostPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
    visibility: hidden;
  }
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
