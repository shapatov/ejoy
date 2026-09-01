import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import i18n from 'i18next';
import { useState } from "react";

export const getLanguage = () => {
    return i18n.language.substring(0, 2).toUpperCase() ||
        (typeof window !== 'undefined' && window.localStorage.i18nextLng.substring(0, 2).toUpperCase()) ||
        'bg';
};

export function Header({ year }) {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `eJOY ${year}`;
    }, [year]);

    const [buttonText, setButtonText] = useState(getLanguage());

    return (
        <>
            <header>
                <Link to="/"><img src="/ejoy.png" alt="eJOY Logo" style={{ "height": "80px", "marginBottom": "10px" }}></img></Link>
                <h1>{t('ejoy_l')} {year}</h1>
            </header>
            <nav>
                <Link to="/">eJOY 2027</Link>
                <Link to="/2026">eJOY 2026</Link>
                <Link to="/2025">eJOY 2025</Link>
                <span className="lang-switch">
                    <a href="#" className="active" onClick={() => {
                        const newLang = (buttonText == 'BG' ? 'en' : 'bg');
                        setButtonText(newLang.toUpperCase());
                        i18n.changeLanguage(newLang);
                    }}>{buttonText}</a>
                </span>
            </nav>
        </>
    )
}