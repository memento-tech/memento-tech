import i18next from "i18next";

export default function getTranslation(messageCode, params = {}) {
  var translation = "";
  translation = i18next.t(messageCode, params);
  return translation;
}
