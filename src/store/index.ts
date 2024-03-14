import {combineReducers, createStore} from "redux";
import personsReducer from "@/store/personsReducer";
import programsReducer from "@/store/programsReducer";
import statisticReducer from "@/store/statisticReducer";
import modalReducer from "@/store/modalReducer";
import departmentsReducer from "@/store/departmentsReducer";
import jobsReducer from "@/store/jobsReducer";
import schedulesReducer from "@/store/schedulesReducer";
import programGroupsReducer from "@/store/programGroupsReducer";
import themeReducer from "@/store/themeReducer";


const rootReducer = combineReducers({
    persons: personsReducer,
    programs: programsReducer,
    departments: departmentsReducer,
    jobs: jobsReducer,
    programGroups: programGroupsReducer,
    schedules: schedulesReducer,
    statistic: statisticReducer,
    modal: modalReducer,
    theme: themeReducer,

})
export const store = createStore(rootReducer)