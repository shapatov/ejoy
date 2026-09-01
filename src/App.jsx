import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Footer } from './Footer.jsx'
import { Header } from './Header.jsx'
import { EJOY2027 } from './2027.jsx'
import { EJOY2026 } from './2026.jsx'
import { EJOY2025 } from './2025.jsx'
import { Prefooter } from './Prefooter.jsx'

function App() {
    const [count, setCount] = useState(0);
    const { t } = useTranslation();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EJOY2027 />} />
                <Route path="/2026" element={<EJOY2026 />} />
                <Route path="/2025" element={<EJOY2025 />} />
            </Routes>

            <Prefooter></Prefooter>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App
