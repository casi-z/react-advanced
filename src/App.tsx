import {GlobalContext} from "./context";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Main from "./pages/Main/Main";
import leftPanelItems from "@/data/LeftPanelItems";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "@/types/types";
import {useEffect} from "react";
import {
    allAgreedWorkTime, allDistractionTime,
    allIdleTime,
    allProductiveTime,
    allWorkTime,
    persons as fakePersons,
} from "@/data/fake/persons";
import sites from "@/data/fake/sites";
import programs from "@/data/fake/programs";
import {setPersonsAction} from "@/store/personsReducer";
import {setStatisticAction} from "@/store/statisticReducer";
import {setSitesAction} from "@/store/sitesReducer";
import {setProgramsAction} from "@/store/programsReducer";


function App() {

    const dispatch = useDispatch()

    function fakeFetching() {
        dispatch(setPersonsAction(fakePersons))
        dispatch(setProgramsAction(programs))
        //@ts-ignore
        dispatch(setSitesAction(sites))
        dispatch(setStatisticAction({
            workTime: allWorkTime,
            agreedWorkTime: allAgreedWorkTime,
            productiveTime: allProductiveTime,
            idleTime: allIdleTime,
            distractionTime: allDistractionTime,
        }))
    }

    useEffect(() => {
        fakeFetching()

    }, []);



    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Navigate to="/statistic/main"/>}/>

                <Route path="statistic">
                    {leftPanelItems.statistic.map((item, index) =>
                        <Route key={index} path={item.href} element={item.page}/>
                    )}
                </Route>

                <Route path="settings">
                    {leftPanelItems.settings.map((item, index) =>
                        <Route key={index} path={item.href} element={item.page}/>
                    )}
                </Route>

                {/* Перекидываю на ошибку 404 при неправильном url */}
                <Route path="*" element={<Navigate to="/error?code=404"/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
