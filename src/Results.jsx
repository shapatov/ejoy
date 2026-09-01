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
                {tasks["day1"] &&
                    <>
                        <h2>{t("day")} 1{(tasks["day0"]||tasks["day2"])?<> - <a href={`contests/ejoy${year}/standing_Day1${rankingLangExt}.pdf`}>{t("stand")}</a></>:<></>}</h2>
                        <ul>
                            <li key={1}>{t("stat")}:<> </>
                                {
                                    tasks["day1"].slice(0, -1).map(task =>
                                        <Fragment key={task}><a href={`contests/ejoy${year}/${task}${statementLangExt}.pdf`}>{task}</a>, </Fragment>
                                    )
                                }
                                <a href={`contests/ejoy${year}/${tasks["day1"][tasks["day1"].length - 1]}${statementLangExt}.pdf`}>{tasks["day1"][tasks["day1"].length - 1]}</a>
                            </li>
                            {(analysisExt) && <li key={2}>{t("editorial")}:<> </>
                                {
                                    tasks["day1"].slice(0, -1).map(task =>
                                        <Fragment key={task}>{noAnalysis.includes(task) ? <>{task}</> : <a href={`contests/ejoy${year}/${task}_analysis${analysisLangExt}.${analysisExt}`}>{task}</a>}, </Fragment>
                                    )
                                }
                                {noAnalysis.includes(tasks["day1"][tasks["day1"].length - 1]) ? <>{tasks["day1"][tasks["day1"].length - 1]}</> : <a href={`contests/ejoy${year}/${tasks["day1"][tasks["day1"].length - 1]}_analysis${analysisLangExt}.${analysisExt}`}>{tasks["day1"][tasks["day1"].length - 1]}</a>}
                            </li>}
                            <li key={3}>{t("tests")}:<> </>
                                {
                                    tasks["day1"].slice(0, -1).map(task =>
                                        <Fragment key={task}><a href={`contests/ejoy${year}/${task}.zip`}>{task}</a>, </Fragment>
                                    )
                                }
                                <a href={`contests/ejoy${year}/${tasks["day1"][tasks["day1"].length - 1]}.zip`}>{tasks["day1"][tasks["day1"].length - 1]}</a>
                            </li>
                            {hasBOSRes && <li key={4}><a href={`contests/ejoy${year}/standing_detailed_Day1${rankingLangExt}.xlsx`}>{t("results")}</a> {t("fromgr")}</li>}
                            {hasSol && <li key={5}><a href={`contests/ejoy${year}/submissions_Day1_all.zip`}>{t("sols")}</a> {t("cont")}</li>}
                        </ul>
                    </>
                }


                {tasks["day2"] &&
                    <>
                        <br></br>
                        <h2>{t("day")} 2 - <a href={`contests/ejoy${year}/standing_Day2${rankingLangExt}.pdf`}>{t("stand")}</a></h2>
                        <ul>
                            <li key={1}>{t("stat")}:<> </>
                                {
                                    tasks["day2"].slice(0, -1).map(task =>
                                        <Fragment key={task}><a href={`contests/ejoy${year}/${task}${statementLangExt}.pdf`}>{task}</a>, </Fragment>
                                    )
                                }
                                <a href={`contests/ejoy${year}/${tasks["day2"][tasks["day2"].length - 1]}${statementLangExt}.pdf`}>{tasks["day2"][tasks["day2"].length - 1]}</a>
                            </li>
                            {analysisExt && <li key={2}>{t("editorial")}:<> </>
                                {
                                    tasks["day2"].slice(0, -1).map(task =>
                                        <Fragment key={task}>{noAnalysis.includes(task) ? <>{task}</> : <a href={`contests/ejoy${year}/${task}_analysis${analysisLangExt}.${analysisExt}`}>{task}</a>}, </Fragment>
                                    )
                                }
                                {noAnalysis.includes(tasks["day2"][tasks["day2"].length - 1]) ? <>{tasks["day2"][tasks["day2"].length - 1]}</> : <a href={`contests/ejoy${year}/${tasks["day2"][tasks["day2"].length - 1]}_analysis${analysisLangExt}.${analysisExt}`}>{tasks["day2"][tasks["day2"].length - 1]}</a>}
                            </li>}
                            <li key={3}>{t("tests")}:<> </>
                                {
                                    tasks["day2"].slice(0, -1).map(task =>
                                        <Fragment key={task}><a href={`contests/ejoy${year}/${task}.zip`}>{task}</a>, </Fragment>
                                    )
                                }
                                <a href={`contests/ejoy${year}/${tasks["day2"][tasks["day2"].length - 1]}.zip`}>{tasks["day2"][tasks["day2"].length - 1]}</a>
                            </li>
                            {hasBOSRes && <li key={4}><a href={`contests/ejoy${year}/standing_detailed_Day2${rankingLangExt}.xlsx`}>{t("results")}</a> {t("fromgr")}</li>}
                            {hasSol && <li key={5}><a href={`contests/ejoy${year}/submissions_Day2_all.zip`}>{t("sols")}</a> {t("cont")}</li>}
                        </ul>
                    </>
                }

                {tasks["day0"] &&
                    <>
                        <br></br>
                        <h2>{t("practice")} - <a href={`contests/ejoy${year}/standing_Day0${rankingLangExt}.pdf`}>{t("stand")}</a></h2>
                        <ul>
                            <li key={1}>{t("stat")}:<> </>
                                {
                                    tasks["day0"].slice(0, -1).map(task =>
                                        <Fragment key={task}><a href={`contests/ejoy${year}/${task}${statementLangExt}.pdf`}>{task}</a>, </Fragment>
                                    )
                                }
                                <a href={`contests/ejoy${year}/${tasks["day0"][tasks["day0"].length - 1]}${statementLangExt}.pdf`}>{tasks["day0"][tasks["day0"].length - 1]}</a>
                            </li>
                            {analysisExt && <li key={2}>{t("editorial")}:<> </>
                                {
                                    tasks["day0"].slice(0, -1).map(task =>
                                        <Fragment key={task}>{noAnalysis.includes(task) ? <>{task}</> : <a href={`contests/ejoy${year}/${task}_analysis${analysisLangExt}.${analysisExt}`}>{task}</a>}, </Fragment>
                                    )
                                }
                                {noAnalysis.includes(tasks["day0"][tasks["day0"].length - 1]) ? <>{tasks["day0"][tasks["day0"].length - 1]}</> : <a href={`contests/ejoy${year}/${tasks["day0"][tasks["day0"].length - 1]}_analysis${analysisLangExt}.${analysisExt}`}>{tasks["day0"][tasks["day0"].length - 1]}</a>}
                            </li>}
                            <li key={3}>{t("tests")}:<> </>
                                {
                                    tasks["day0"].slice(0, -1).map(task =>
                                        <Fragment key={task}><a href={`contests/ejoy${year}/${task}.zip`}>{task}</a>, </Fragment>
                                    )
                                }
                                <a href={`contests/ejoy${year}/${tasks["day0"][tasks["day0"].length - 1]}.zip`}>{tasks["day0"][tasks["day0"].length - 1]}</a>
                            </li>
                            {hasBOSRes && <li key={4}><a href={`contests/ejoy${year}/standing_detailed_Day0${rankingLangExt}.xlsx`}>{t("results")}</a> {t("fromgr")}</li>}
                            {hasSol && <li key={5}><a href={`contests/ejoy${year}/submissions_Day0_all.zip`}>{t("sols")}</a> {t("cont")}</li>}
                        </ul>
                    </>
                }
            </section>
        </>
    )
}