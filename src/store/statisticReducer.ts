import {IStatistic} from "@/types/types";

const defaultState = {

    statistic: {
        workTime: {hours: 0, minutes: 0, seconds: 0},
        agreedWorkTime: {hours: 0, minutes: 0, seconds: 0},
        productiveTime: {hours: 0, minutes: 0, seconds: 0},
        idleTime: {hours: 0, minutes: 0, seconds: 0},
        distractionTime: {hours: 0, minutes: 0, seconds: 0},
    },

}

const SET_STATISTIC = 'SET_STATISTIC'

export default function statisticReducer(
    state: { statistic: IStatistic } = defaultState,
    action: { type: string, payload: string }
) {

    switch (action.type) {

        case SET_STATISTIC:
            return {...state, statistic: action.payload}


        default:
            return state

    }
}

export const setStatisticAction = (statistic: IStatistic) => ({type: SET_STATISTIC, payload: statistic})