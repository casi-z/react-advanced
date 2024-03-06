import {combineReducers, createStore} from "redux";
import personsReducer from "@/store/personsReducer";
import programsReducer from "@/store/programsReducer";
import sitesReducer from "@/store/sitesReducer";
import statisticReducer from "@/store/statisticReducer";


const rootReducer = combineReducers({
    persons: personsReducer,
    programs: programsReducer,
    sites: sitesReducer,
    statistic: statisticReducer,

})
export const store = createStore(rootReducer)