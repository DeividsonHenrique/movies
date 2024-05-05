import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import PageNotFound from "./Pages/PageNotFound"
import Watch from "./Pages/Watch"


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Watch" element={<Watch />} ></Route>
                <Route path="*" element={<PageNotFound />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes