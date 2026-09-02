import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        load: 'languageOnly',
        supportedLngs: ['en', 'bg'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'lang',
            convertDetectedLanguage: (lng) => {
                const base = lng.split('-')[0];
                return ['en', 'bg'].includes(base) ? base : 'en';
            },
        },
        debug: false,
        react: {
            useSuspense: true
        }
    });

i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;