import { HashRouter,Route, Routes } from "react-router-dom"
import Home from "./Home/Home"

export default function AppRouter() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </HashRouter>
  )
}
