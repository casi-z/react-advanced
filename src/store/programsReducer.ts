import {IProgram} from "@/types/types";

const defaultState = {

    programs: [
        {id: 0, name: ''}
    ],
    selected: null

}

const SET_PROGRAMS = 'SET_PROGRAMS'
const ADD_PROGRAM = 'ADD_PROGRAMS'
const SELECT_PROGRAM = 'SELECT_PROGRAM'
const EDIT_PROGRAM = 'EDIT_PROGRAM'
const DELETE_PROGRAM = 'DELETE_PROGRAM'
export default function programsReducer(
    state = defaultState,
    action: { type: string, payload: IProgram[] | IProgram }
) {

    switch (action.type) {

        case SET_PROGRAMS:
            return {...state, programs: action.payload}

        case SELECT_PROGRAM:
            return {...state, selected: action.payload}

        case ADD_PROGRAM:
            return {...state, programs: [...state.programs, action.payload]}

        case EDIT_PROGRAM:

            const newPrograms = state.programs.map(program => {
                //@ts-ignore
                if (program.id === action.payload.id) {
                    return action.payload
                } else {
                    return program
                }

            })
            return {...state, programs: newPrograms}

        case DELETE_PROGRAM:
            //@ts-ignore
            const newPrograms2 = [...state.programs].filter(program => program.id !== action.payload.id)
            return {...state, programs: newPrograms2}

        default:
            return state

    }
}

export const setProgramsAction = (programs: IProgram[]) => ({type: SET_PROGRAMS, payload: programs})
export const selectProgramAction = (selectedProgram: IProgram | null) => ({type: SELECT_PROGRAM, payload: selectedProgram})
export const addProgramAction = (newProgram: IProgram) => ({type: ADD_PROGRAM, payload: newProgram})
export const editProgramAction = (newProgram: IProgram) => ({type: EDIT_PROGRAM, payload: newProgram})
export const deleteProgramAction = (program: IProgram) => ({type: DELETE_PROGRAM, payload: program})