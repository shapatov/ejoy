import { useState } from "react"
import { useTranslation } from "react-i18next"
import contestants from '../public/data/contestants.json'
import contests from '../public/data/contests.json'
import { CompetitorView } from "./CompetitorView"
import { Header } from "./Header"
import { getFlag } from "./helpers"

export function HoF() {
    const { t } = useTranslation();
    const [sortBy, setSortBy] = useState("total");
    const [dir, setDir] = useState(0);
    const [clicked, setClicked] = useState(0);
    const [loadedId, setLoadedId] = useState(0);
    const [opened, setOpened] = useState(0);

    const data = {};
    Object.keys(contests).forEach((year) => {
        Object.keys(contests[year]).forEach((id) => {
            const m = contests[year][id]["medal"];
            if (!data[id]) {
                data[id] = { "id": Number(id) - 1, "G": 0, "S": 0, "HM": 0, "B": 0, "total": 0, "participations": 0, "country": contestants[Number(id) - 1]["country"], "name": contestants[Number(id) - 1]["firstName"] + " " + (contestants[Number(id) - 1]["middleName"] ? contestants[Number(id) - 1]["middleName"] + " " : "") + " " + (contestants[Number(id) - 1]["lastName"]) };
            }
            if (m) { data[id][m]++; data[id]["total"]++; }
            data[id]["participations"]++;
        });
    });
    function srt(s) {
        setClicked(1);
        if (sortBy == s) {
            setDir(!dir);
        }
        else {
            setDir(0);
            setSortBy(s);
        }
    };
    function cmp(a, b) {
        if (a[sortBy] > b[sortBy]) return dir ? 1 : -1;
        if (a[sortBy] < b[sortBy]) return dir ? -1 : 1;
        return 0;
    }
    const sortedData = Object.values(data).sort(cmp);
    return (
        <>
            {opened == 1 && <CompetitorView id={loadedId} onClose={() => setOpened(0)}></CompetitorView>}
            <Header year=""></Header>
            <section>
                <h1>Hall of Fame</h1><br></br>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>{t('rank')}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("name")}>{t('participant')}{sortBy == "name" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("country")}>{t('country')}{sortBy == "country" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("participations")}>{t('participations')}{sortBy == "participations" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("G")}>🥇 G{sortBy == "G" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("S")}>🥈 S{sortBy == "S" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("B")}>🥉 B{sortBy == "B" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("HM")}>🏅 HM{sortBy == "HM" && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                                <th style={{ cursor: "pointer" }} onClick={() => srt("total")}>{t('total')}{sortBy == "total" && clicked == 1 && <span style={{ fontWeight: "bold" }}>{dir == 0 ? <> &#8595;</> : <> &#8593;</>}</span>}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item) => (
                                <tr style={{ cursor: "pointer" }} onClick={() => { setLoadedId(item["id"] + 1); setOpened(1); }} key={item["name"]}>
                                    <td>{sortedData.filter(t => cmp(t, item) == -1).length + 1}</td>
                                    <td>{item["name"]}</td>
                                    <td>{getFlag(contestants[item["id"]]["country"])} {contestants[item["id"]]["country"]}</td>
                                    <td>{item["participations"]}</td>
                                    <td style={{ backgroundColor: "#ffff00" }}>{item["G"]}</td>
                                    <td style={{ backgroundColor: "#e5e4e4" }}>{item["S"]}</td>
                                    <td style={{ backgroundColor: "#f4ad82" }}>{item["B"]}</td>
                                    <td style={{ backgroundColor: "#dffbff" }}>{item["HM"]}</td>
                                    <td>{item["total"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}