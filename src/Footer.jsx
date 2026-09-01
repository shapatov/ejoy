import { useTranslation } from "react-i18next"

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <s>©</s> {new Date().getFullYear()} {t('footer.text')}
        </footer>
    )
}