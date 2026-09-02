import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import i18n from "i18next";

countries.registerLocale(en);

export function getFlag(country) {
    const code = countries.getAlpha2Code(country, "en");

    if (!code) return "";

    return [...code]
        .map(c => String.fromCodePoint(c.charCodeAt(0) + 127397))
        .join("");
}

export const normalizeLang = (lng) => { 
    return ['en', 'bg'].includes(lng.split('-')[0]) ? lng.split('-')[0].toUpperCase() : 'EN'; 
}

export const getLanguage = () => {
    return normalizeLang(i18n.language) ||
        (typeof window !== 'undefined' && normalizeLang(window.localStorage.i18nextLng)) ||
        'EN';
};