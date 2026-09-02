import { Link } from "react-router-dom"
import { NewAbout, NewRules } from "./NewComponents"
import { Results } from "./Results"
import { Header } from "./Header"
import { useTranslation } from "react-i18next"
import { CompetitorView } from "./CompetitorView"
import { Prefooter } from "./Prefooter"
import { Footer } from "./Footer"

export function EJOY2027() {
    const { t } = useTranslation();
    return (
        <>
            <Header year={2027}></Header>

            <NewAbout></NewAbout>

            <Results year={2027} tasks={{
                "day0": ["A-B", "guess", "tree", "tree2"],
                "day1": ["apples", "redica", "bribe2", "minecraft"],
                "day2": ["ezici", "nod2", "knapsack"]
            }} hasENRanking={true}></Results>

            <NewRules></NewRules>

            <section id="schedule">
                <h2>{t('schedule')}</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>{t('date')}</th>
                            <th>{t('event')}</th>
                        </tr>
                        <tr>
                            <td>5 {t('august')} 2026, 11:00 - 13:00</td>
                            <td>{t('practice')}</td>
                        </tr>
                        <tr>
                            <td>6 {t('august')} 2026, 9:30 - 13:30</td>
                            <td>{t('day')} 1 {t('of')} eJOY 2027</td>
                        </tr>
                        <tr>
                            <td>7 {t('august')} 2026, 9:30 - 13:30</td>
                            <td>{t('day')} 2 {t('of')} eJOY 2027</td>
                        </tr>
                        <tr>
                            <td>26 {t('august')} 2026, 23:30 - 27 {t('august')} 2026, 00:30</td>
                            <td>{t('awarding')} eJOY 2027</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <Prefooter></Prefooter>
            <Footer></Footer>
        </>
    )
}