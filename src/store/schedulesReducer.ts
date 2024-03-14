import {ISchedule} from "@/types/types";

const defaultState = {

    schedules: [
        {id: 0, name: ''}
    ],
    selected: null

}

const SET_SCHEDULES = 'SET_SCHEDULES'
const ADD_SCHEDULE = 'ADD_SCHEDULES'
const SELECT_SCHEDULE = 'SELECT_SCHEDULE'
const EDIT_SCHEDULE = 'EDIT_SCHEDULE'
const DELETE_SCHEDULE = 'DELETE_SCHEDULE'
export default function schedulesReducer(
    state = defaultState,
    action: { type: string, payload: ISchedule[] | ISchedule }
) {

    switch (action.type) {

        case SET_SCHEDULES:
            return {...state, schedules: action.payload}

        case SELECT_SCHEDULE:
            return {...state, selected: action.payload}

        case ADD_SCHEDULE:
            return {...state, schedules: [...state.schedules, action.payload]}

        case EDIT_SCHEDULE:

            const newSchedules = state.schedules.map(schedule => {
                //@ts-ignore
                if (schedule.id === action.payload.id) {
                    return action.payload
                } else {
                    return schedule
                }

            })
            return {...state, schedules: newSchedules}

        case DELETE_SCHEDULE:
            //@ts-ignore
            const newSchedules2 = [...state.schedules].filter(schedule => schedule.id !== action.payload.id)
            return {...state, schedules: newSchedules2}

        default:
            return state

    }
}

export const setSchedulesAction = (schedules: ISchedule[]) => ({type: SET_SCHEDULES, payload: schedules})
export const selectScheduleAction = (selectedSchedule: ISchedule | null) => ({
    type: SELECT_SCHEDULE,
    payload: selectedSchedule
})
export const addScheduleAction = (newSchedule: ISchedule) => ({type: ADD_SCHEDULE, payload: newSchedule})
export const editScheduleAction = (newSchedule: ISchedule) => ({type: EDIT_SCHEDULE, payload: newSchedule})
export const deleteScheduleAction = (schedule: ISchedule) => ({type: DELETE_SCHEDULE, payload: schedule})