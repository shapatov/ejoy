import { Link } from "react-router-dom"
import { NewAbout, NewRules } from "./NewComponents"
import { Results } from "./Results"
import { Header } from "./Header"
import { useTranslation } from "react-i18next"

export function EJOY2025() {
    const { t } = useTranslation();
    return (
        <>
            <Header year={2025}></Header>

            <section id="about">
                <h2>{t("about")} eJOY</h2>
                <p>{t("about2025")}</p>
            </section>

            <Results year={2025} tasks={{
                "day1": ["cheshma", "bribe", "stone"],
            }} hasSol={false} hasBOSRes={false} analysisExt="pdf" hasENRanking={true} noAnalysis={["bribe", "stone"]}></Results>

            <section id="schedule">
                <h2>{t("schedule")}</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>{t("date")}</th>
                            <th>{t("event")}</th>
                        </tr>
                        <tr>
                            <td>19 {t("august")} 2025</td>
                            <td>{t("task")} cheshma</td>
                        </tr>
                        <tr>
                            <td>20 {t("august")} 2025</td>
                            <td>{t("task")} bribe</td>
                        </tr>
                        <tr>
                            <td>22 {t("august")} 2025</td>
                            <td>{t("task")} stone</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}