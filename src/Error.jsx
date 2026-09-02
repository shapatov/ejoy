import { Link } from "react-router-dom"
import { NewAbout, NewRules } from "./NewComponents"
import { Results } from "./Results"
import { Header } from "./Header"
import { useTranslation } from "react-i18next"
import { CompetitorView } from "./CompetitorView"
import { Prefooter } from "./Prefooter"
import { Footer } from "./Footer"

export function Error() {
    return (
        <>
            <Header year=""></Header>
            <div style={{display: "flex", justifyContent: "center", marginTop: "25px"}}>
                <img src="https://http.cat/404"></img>
            </div>
            <Footer></Footer>
        </>
    )
}