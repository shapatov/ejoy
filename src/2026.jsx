import { Link } from "react-router-dom"
import { NewAbout, NewRules } from "./NewComponents"
import { Results } from "./Results"
import { Header } from "./Header"
import { useTranslation } from "react-i18next"
import { Prefooter } from "./Prefooter"
import { Footer } from "./Footer"

export function EJOY2026() {
    const { t } = useTranslation();
    return (
        <>
            <Header year={2026}></Header>

            <section id="about">
                <h2>{t('about')} eJOY</h2>
                <p>{t('about2026')}</p>
            </section>

            <Results year={2026} tasks={{
                "day1": ["nod", "testove", "wordle"],
                "day2": ["parola", "permutation", "grader67", "statement"]
            }} hasSol={false} hasENRanking={true} analysisExt="txt"></Results>

            <section id="invite">
                <h2>{t("invite")}</h2>
                <p style={{whiteSpace: "pre-line"}}>{t("invite1").replaceAll("xxxx", "2026")}</p>
            </section>

            <section id="rules">
                <h2>{t("rules")}</h2>
                <ul>
                    <li>{t("rule5new")}</li>
                    <li>{t("rule2new")}</li>
                    <li>{t("ruleold")}</li>
                    <li>{t("ruleold2")}</li>
                </ul>
            </section>

            <section id="schedule">
                <h2>{t("schedule")}</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>{t("date")}</th>
                            <th>{t("event")}</th>
                        </tr>
                        <tr>
                            <td>9 - 30 {t("september")} 2025</td>
                            <td>{t("practice")} {t("over")}</td>
                        </tr>
                        <tr>
                            <td>4 {t("october")} 2025, 8:30 - 12:30</td>
                            <td>{t("day")} 1 {t("of")} eJOY 2026</td>
                        </tr>
                        <tr>
                            <td>5 {t("october")} 2025, 8:30 - 12:30</td>
                            <td>{t("day")} 2 of eJOY 2026</td>
                        </tr>
                        <tr>
                            <td>5 {t("october")} 2025, {t("endofday")}</td>
                            <td>{t("ofstand")}</td>
                        </tr>
                        <tr>
                            <td>22 - 23 {t("november")} 2025</td>
                            <td>{t("awarding")} eJOY 2026</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <Prefooter></Prefooter>
            <Footer></Footer>
        </>
    )
}