import { Footer } from "./Footer"
import { Header } from "./Header"

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