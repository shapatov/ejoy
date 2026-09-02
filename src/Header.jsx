import i18n from 'i18next';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLanguage } from "./helpers";

export function Header({ year }) {
    const { t } = useTranslation();

    const [dropdown, setDropdown] = useState(false);

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
                <div className="dropdown-container">
                    <a href="#" onClick={(e) => {e.preventDefault(); setDropdown(!dropdown);}}>
                        {t("previous")}
                    </a>

                    <div className={`dropdown-menu ${dropdown ? "open" : ""}`}>
                        <Link to="/2026">eJOY 2026</Link>
                        <Link to="/2025">eJOY 2025</Link>
                    </div>
                </div>

                <Link to="/hof">Hall of Fame</Link>
                <Link to="/ranking">{t("rankl")}</Link>
                <span className="lang-switch">
                    <a href="#" className="active" onClick={(e) => {
                        e.preventDefault();
                        const newLang = (buttonText == 'BG' ? 'en' : 'bg');
                        setButtonText(newLang.toUpperCase());
                        i18n.changeLanguage(newLang);
                    }}>{buttonText}</a>
                </span>
            </nav>
        </>
    )
}