import { useTranslation } from "react-i18next"

export function Prefooter() {
    const { t } = useTranslation();
    return (
        <>
            <section id="committee">
                <h2>{t("comm")}</h2>
                <div className="cards">
                    <div className="card">
                        <h3>{t("mitko")}</h3>
                        <p>{t("author")}</p>
                    </div>
                    <div className="card">
                        <h3>{t("kiki")}</h3>
                        <p>{t("author")}</p>
                    </div>
                    <div className="card">
                        <h3>{t("bobi")}</h3>
                        <p>{t("moral")}</p>
                    </div>
                </div>
            </section>

            <section id="judge">
                <h2>{t("grading")}</h2>
                <p>{t("gradexpl")}<br></br></p>
                <a href="https://bos.ejoy.dev/" className="btn" target="_blank">{t("grading")}</a><a
                    href="https://arena.ejoy.dev/" className="btn" target="_blank">{(t("arena"))}</a><br></br>
            </section>
        </>
    )
}