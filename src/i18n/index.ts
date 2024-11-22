import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en1 from './en/en1';
import es1 from './es/es1';

// StackBlitz seem unable to import json into TS.
/* 
import nb1 from './nb/ns1.json';
import sv1 from './sv/ns1.json'; 
*/

export const resources = {
  en: {
    common: en1,
  },
  es: {
    common: es1,
  },
} as const;

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  defaultNS: 'common',
  keySeparator: '.',
  nsSeparator: ':',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

// this will make translations available outside of React. In theory :D
const t = i18n.t.bind(i18n);
export { t };

export default i18n;
