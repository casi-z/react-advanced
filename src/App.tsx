import { GlobalContext } from "./context";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from "./pages/Main/Main";
import leftPanelItems from "@/data/LeftPanelItems";


function App() {

    return (
        <GlobalContext.Provider value={{}}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Navigate to="/statistic/main" />} />
                    <Route path="statistic">
                        {leftPanelItems.statistic.map((item, index) =>
                            <Route path={item.href} element={item.page} />
                        )}
                    </Route>


                    {/* Перекидываю на ошибку 404 при неправильном url */}
                    <Route path="*" element={<Navigate to="/error?code=404" />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}

export default App
