import { useTranslation } from "react-i18next";

export function NewAbout() {
    const { t } = useTranslation();
    return (
        <section id="about">
            <h2>{t('about')} eJOY</h2>
            <p>{t('aboutnew1')}<br></br>{t('aboutnew2')} <a href="https://discord.gg/UwraDb4bG4">{t('aboutnew3')}.</a></p>
        </section>
    )
}

export function NewRules() {
    const { t } = useTranslation();
    return (
        <>
            <section id="rules">
                <h2>{t('rules')}</h2>
                <ul>
                    <li>{t('rule1new')}</li>
                    <li>{t('rule2new')}</li>
                    <li>{t('rule3new')}</li>
                    <li>{t('rule4new')}</li>
                </ul>
            </section>

            <section id="submit">
                <h2>{t('rulessubmit')}</h2>
                <ul>
                    <li>{t('rule5new')}</li>
                    <li>{t('rule6new')}</li>
                    <li>{t('rule7new')}</li>
                    <li>{t('rule8new')}</li>
                </ul>
            </section>
        </>
    );
}