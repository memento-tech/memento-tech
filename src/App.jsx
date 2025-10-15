import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import FullContainer from "./components/FullContainer";
import ScrollToTop from "./components/ScrollToTop";
import styled, { ThemeProvider } from "styled-components";
import backgroundImage from "./assets/inspiration-geometry.png";
import { blackTheme, defaultTheme } from "./Theme";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import CareersPage from "./pages/CareersPage";
import { useTranslation } from "react-i18next";
import { useCookies } from "./providers/CookieContext";
import { ALL_LANGUAGES } from "./config/i18n";

function App() {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const { i18n } = useTranslation();
  const { getGlobalCookie, setGlobalCookie } = useCookies();

  const updateCurrentTheme = (blackThemeActive) => {
    setCurrentTheme(blackThemeActive ? blackTheme : defaultTheme);
  };

  useEffect(() => {
    const globalCookie = getGlobalCookie();
    if (!globalCookie.currentLanguage) {
      const current = ALL_LANGUAGES.filter(
        (language) => language.languageCode === i18n.language
      )[0];

      globalCookie.currentLanguage = current;
      setGlobalCookie(globalCookie);
      i18n.changeLanguage(current.languageCode);
    } else {
      i18n.changeLanguage(globalCookie.currentLanguage.languageCode);
    }
  }, [getGlobalCookie, setGlobalCookie, i18n, i18n.language]);

  return (
    <ThemeProvider theme={currentTheme}>
      <FullContainer>
        <FullContainerBackground />
        <BrowserRouter>
          <ScrollToTop />
          <NavBar onThemeChange={updateCurrentTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FullContainer>
    </ThemeProvider>
  );
}

export default App;

const FullContainerBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  background-size: 300px 300px;
`;
