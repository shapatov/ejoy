import { useTranslation } from "react-i18next";
import contestants from '../public/data/contestants.json';
import contests from '../public/data/contests.json';
import { getFlag, getGrade } from "./helpers";

export function CompetitorView({ id, onClose }) {
    let G = 0, S = 0, B = 0, HM = 0;

    const { t } = useTranslation();
    const c = contestants[id - 1];
    const fullName = c.firstName + " " + (c.middleName ? c.middleName + " " : "") + c.lastName;

    Object.keys(contests).forEach((year) => {
        if (contests[year][id.toString()] && contests[year][id.toString()]["medal"]) {
            const m = contests[year][id.toString()]["medal"];
            if (m == "G") G++;
            if (m == "S") S++;
            if (m == "B") B++;
            if (m == "HM") HM++;
        }
    });

    return (
        <div id="overlay" onClick={onClose} style={{ position: "fixed", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#00000061", zIndex: "999" }}>
            <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", padding: "80px", backgroundColor: "white", borderRadius: "10px" }}>
                <a style={{ cursor:"pointer", position: "absolute", top: "12px", right: "20px", fontSize: "34px", color: "black" }} onClick={onClose}>&#x2715;</a>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
                        <img src={`img/${c.firstName.toLowerCase()}${c.lastName.toLowerCase()}.jpg`} onError={(e) => { e.target.src = "img/error.png"; }} width="190px" alt={fullName}></img>
                        <div>
                            <p style={{ fontSize: "38px", fontWeight: "bold" }}>{fullName}</p>
                            <p style={{ fontSize: "24px" }}>{getFlag(c.country)} {c.city ? c.city + ", " : ""} {c.country}</p>
                            {c.school && <p style={{ fontSize: "24px" }}>🏫 {c.school}</p>}
                            {c.grade && <p style={{ fontSize: "24px" }}>🎓 {getGrade(c.grade)}{t("grade")}</p>}
                            <table style={{ border: "2px solid gray", width: "auto", tableLayout: "auto" }}>
                                <tbody>
                                    <tr className="medalTr">
                                        <td style={{ backgroundColor: "#ffff00" }}>🥇 {G}</td>
                                        <td style={{ backgroundColor: "#e5e4e4" }}>🥈 {S}</td>
                                        <td style={{ backgroundColor: "#f4ad82" }}>🥉 {B}</td>
                                        <td style={{ backgroundColor: "#dffbff" }}>🏅 {HM}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>eJOY</th>
                                <th>{t("points")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(contests).sort().reverse().map((year) => {
                                const part = contests[year][id.toString()];
                                const medal = (part ? contests[year][id.toString()]["medal"] : "");
                                const bg = (medal == "G" ? "#ffff00" : (medal == "S" ? "#e5e4e4" : (medal == "B" ? "#f4ad82" : (medal == "HM" ? "#dffbff" : "#ffffff"))));
                                return <tr key={year} style={{ backgroundColor: bg }}>
                                    <td>{year}</td>
                                    <td>{contests[year][id.toString()] ? contests[year][id.toString()]["points"] + " " + t("points2") : t("nopart")}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
}