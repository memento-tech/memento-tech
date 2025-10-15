import { createContext, useContext } from "react";
import Cookies from "js-cookie";

export const USER_GLOBAL_COOKIE_NAME = "global";
export const PARTNER_GLOBAL_COOKIE_NAME = "partner_global";

const CookieContext = createContext(null);

export const CookieProvider = ({ children }) => {
  const globalCookieName = "globalCookie";

  const getCookie = (name) => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : null;
  };

  const setCookie = (name, value, options) => {
    Cookies.set(name, JSON.stringify(value), options);
  };

  const removeCookie = (name) => {
    Cookies.remove(name);
  };

  const getGlobalCookie = () => {
    let globalCookie = Cookies.get(globalCookieName);
    return globalCookie ? JSON.parse(globalCookie) : {};
  };

  const setGlobalCookie = (value) => {
    Cookies.set(globalCookieName, JSON.stringify(value), {
      expires: 365 * 10,
      path: "/",
      domain: window.location.hostname,
      sameSite: "Strict",
    });
  };

  return (
    <CookieContext.Provider
      value={{
        getCookie,
        setCookie,
        removeCookie,
        getGlobalCookie,
        setGlobalCookie,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => useContext(CookieContext);
