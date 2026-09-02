import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EJOY2025 } from './2025.jsx'
import { EJOY2026 } from './2026.jsx'
import { EJOY2027 } from './2027.jsx'
import './App.css'
import { Error } from './Error.jsx'
import { HoF } from './HoF.jsx'
import { Ranking } from './Ranking.jsx'

function App() {
    const [count, setCount] = useState(0);
    const { t } = useTranslation();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EJOY2027 />} />
                <Route path="/2026" element={<EJOY2026 />} />
                <Route path="/2025" element={<EJOY2025 />} />
                <Route path="/hof" element={<HoF />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
