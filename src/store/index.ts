import {combineReducers, createStore} from "redux";
import personsReducer from "@/store/personsReducer";
import programsReducer from "@/store/programsReducer";
import sitesReducer from "@/store/sitesReducer";
import statisticReducer from "@/store/statisticReducer";
import modalReducer from "@/store/modalReducer";


const rootReducer = combineReducers({
    persons: personsReducer,
    programs: programsReducer,
    sites: sitesReducer,
    statistic: statisticReducer,
    modal: modalReducer,

})
export const store = createStore(rootReducer)