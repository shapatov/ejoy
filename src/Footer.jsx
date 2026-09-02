import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p style={{whiteSpace: "pre-line"}}>© {new Date().getFullYear()} {t('footer.text')} <a style={{color: "white"}} href="mailto:mitko@ejoy.dev">mitko@ejoy.dev</a>, <a style={{color: "white"}} href="mailto:kiki@ejoy.dev">kiki@ejoy.dev</a>, <a style={{color: "white"}} href="mailto:bobi@ejoy.dev">bobi@ejoy.dev</a></p>.
        </footer>
    )
}