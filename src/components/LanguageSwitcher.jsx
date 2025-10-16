import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import { ALL_LANGUAGES } from "../config/i18n";
import getTranslation from "../config/translationsUtil";
import { useCookies } from "../providers/CookieContext";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({
  themeBlackChange,
  onlanguageChange = () => {},
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const { i18n } = useTranslation();
  const { getGlobalCookie, setGlobalCookie } = useCookies();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const onLanguageChangeInternal = (languageCode) => {
    const selected = ALL_LANGUAGES.filter(
      (language) => language.languageCode === languageCode
    )[0];

    setSelectedLanguage(selected);

    i18n.changeLanguage(selected.languageCode);
    setPopupOpen(!popupOpen);

    const globalCookie = getGlobalCookie();
    globalCookie.currentLanguage = selected;
    setGlobalCookie(globalCookie);
    onlanguageChange();
  };

  useEffect(() => {
    const globalCookie = getGlobalCookie();
    if (!globalCookie.currentLanguage) {
      const current = ALL_LANGUAGES.filter(
        (language) => language.languageCode === i18n.language
      )[0];

      globalCookie.currentLanguage = current;
      setSelectedLanguage(current);
      setGlobalCookie(globalCookie);
    } else {
      setSelectedLanguage(globalCookie.currentLanguage);
    }
  }, [getGlobalCookie, setGlobalCookie, i18n.language]);

  if (!selectedLanguage) {
    return <></>;
  }

  return (
    <LanguageContainer>
      <LanguageChanger onClick={() => setPopupOpen(!popupOpen)}>
        <LangTitle style={{ scale: 1 }}>
          {selectedLanguage?.languageCode}
        </LangTitle>
        <ArrowIcon
          height={20}
          rotate={90}
          color={themeBlackChange ? "#ffffff" : "#000000"}
        />
      </LanguageChanger>
      {popupOpen && (
        <LanguagePopup>
          {ALL_LANGUAGES.map((lang) => (
            <LangTitle
              onClick={() => onLanguageChangeInternal(lang.languageCode)}
              key={lang.languageCode}
            >
              {lang.languageCode} ({getTranslation(lang.titleCode)})
            </LangTitle>
          ))}
        </LanguagePopup>
      )}
    </LanguageContainer>
  );
};

export default LanguageSwitcher;

const LanguageContainer = styled.div`
  position: relative;
`;

const LanguageChanger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

const LanguagePopup = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  padding: 1rem;
  background-color: ${(props) => props.theme.headerBackground};
  border: 1px solid white;
  border-radius: 5px;
  border-top-left-radius: 0;
  white-space: nowrap;
  width: fit-content;
`;

const LangTitle = styled.p`
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }

  &::first-letter {
    text-transform: capitalize;
  }

  user-select: none;
`;
