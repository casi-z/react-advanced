import {IPerson, IProgram} from "@/types/types";

const defaultState = {

    programs: [],

}

const SET_PROGRAMS = 'SET_PROGRAMS'

export default function programsReducer(
    state: { programs: IProgram[] } = defaultState,
    action: { type: string, payload: string }
) {

    switch (action.type) {

        case SET_PROGRAMS:
            return {...state, programs: action.payload}


        default:
            return state

    }
}
export const setProgramsAction = (programs: IProgram[]) => ({type: SET_PROGRAMS, payload: programs})