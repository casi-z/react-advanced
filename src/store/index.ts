import {combineReducers, createStore} from "redux";
import personsReducer from "@/store/personsReducer";
import programsReducer from "@/store/programsReducer";
import sitesReducer from "@/store/sitesReducer";
import statisticReducer from "@/store/statisticReducer";
import modalReducer from "@/store/modalReducer";
import departmentsReducer from "@/store/departmentsReducer";
import jobsReducer from "@/store/jobsReducer";
import schedulesReducer from "@/store/schedulesReducer";


const rootReducer = combineReducers({
    persons: personsReducer,
    programs: programsReducer,
    sites: sitesReducer,
    departments: departmentsReducer,
    jobs: jobsReducer,
    schedules: schedulesReducer,
    statistic: statisticReducer,
    modal: modalReducer,

})
export const store = createStore(rootReducer)