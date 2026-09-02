import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { getLanguage } from "./Header";

export function Results({ year, tasks, hasSol = true, hasBOSRes = true, analysisExt = "pdf", noAnalysis = [], hasBGAnalysis = true, hasENRanking = false }) {
    const { t } = useTranslation();

    const statementLangExt = (getLanguage() == "BG" ? "" : "_en");
    const analysisLangExt = (hasBGAnalysis ? (getLanguage() == "BG" ? "" : "_en") : "");
    const rankingLangExt = (hasENRanking ? (getLanguage() == "BG" ? "" : "_en") : "");

    return (
        <>
            <section id="results">
                <h2><a href={`contests/ejoy${year}/results${rankingLangExt}.pdf`}>{t("final")}</a></h2><br></br>
                
                {["1", "2", "0"].map((day) => (
                    tasks[`day${day}`] && (
                        <Fragment key={day}>
                            <h2>{day == "0" ? t("practice") : (t("day") + " " + day)}{(tasks["day0"] || tasks["day2"]) ? <> - <a href={`contests/ejoy${year}/standing_Day${day}${rankingLangExt}.pdf`}>{t("stand")}</a></> : <></>}</h2>
                            <ul>
                                <li key={1}>{t("stat")}:<> </>
                                    {
                                        tasks[`day${day}`].map(task =>
                                            <Fragment key={task}><a href={`contests/ejoy${year}/${task}${statementLangExt}.pdf`}>{task}</a>{task!=tasks[`day${day}`][tasks[`day${day}`].length-1] && <>, </>}</Fragment>
                                        )
                                    }
                                </li>
                                {(analysisExt) && <li key={2}>{t("editorial")}:<> </>
                                    {
                                        tasks[`day${day}`].map(task =>
                                            <Fragment key={task}>{noAnalysis.includes(task) ? <>{task}</> : <a href={`contests/ejoy${year}/${task}_analysis${analysisLangExt}.${analysisExt}`}>{task}</a>}{task!=tasks[`day${day}`][tasks[`day${day}`].length-1] && <>, </>}</Fragment>
                                        )
                                    }
                                </li>}
                                <li key={3}>{t("tests")}:<> </>
                                    {
                                        tasks[`day${day}`].map(task =>
                                            <Fragment key={task}><a href={`contests/ejoy${year}/${task}.zip`}>{task}</a>{task!=tasks[`day${day}`][tasks[`day${day}`].length-1] && <>, </>}</Fragment>
                                        )
                                    }
                                </li>
                                {hasBOSRes && <li key={4}><a href={`contests/ejoy${year}/standing_detailed_Day${day}${rankingLangExt}.xlsx`}>{t("results")}</a> {t("fromgr")}</li>}
                                {hasSol && <li key={5}><a href={`contests/ejoy${year}/submissions_Day${day}_all.zip`}>{t("sols")}</a> {t("cont")}</li>}
                            </ul>
                            <br></br>
                        </Fragment>
                    )
                ))}
            </section>
        </>
    )
}