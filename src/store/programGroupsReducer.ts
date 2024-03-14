import {IProgramGroup} from "@/types/types";

const defaultState = {

    programGroups: [
        {id: 0, name: ''}
    ],
    selected: null

}

const SET_PROGRAM_GROUPS = 'SET_PROGRAM_GROUPS'
const ADD_PROGRAM_GROUP = 'ADD_PROGRAM_GROUPS'
const SELECT_PROGRAM_GROUP = 'SELECT_PROGRAM_GROUP'
const EDIT_PROGRAM_GROUP = 'EDIT_PROGRAM_GROUP'
const DELETE_PROGRAM_GROUP = 'DELETE_PROGRAM_GROUP'
export default function programGroupsReducer(
    state = defaultState,
    action: { type: string, payload: IProgramGroup[] | IProgramGroup }
) {

    switch (action.type) {

        case SET_PROGRAM_GROUPS:
            return {...state, programGroups: action.payload}

        case SELECT_PROGRAM_GROUP:
            return {...state, selected: action.payload}

        case ADD_PROGRAM_GROUP:
            return {...state, programGroups: [...state.programGroups, action.payload]}

        case EDIT_PROGRAM_GROUP:

            const newProgramGroups = state.programGroups.map(programGroup => {
                //@ts-ignore
                if (programGroup.id === action.payload.id) {
                    return action.payload
                } else {
                    return programGroup
                }

            })
            return {...state, programGroups: newProgramGroups}

        case DELETE_PROGRAM_GROUP:
            //@ts-ignore
            const newProgramGroups2 = state.programGroups.filter(programGroup => (
                //@ts-ignore
                programGroup.id !== action.payload.id
            ))
            return {...state, programGroups: newProgramGroups2}

        default:
            return state

    }
}

export const setProgramGroupsAction = (programGroups: IProgramGroup[]) => ({type: SET_PROGRAM_GROUPS, payload: programGroups})
export const selectProgramGroupAction = (selectedProgramGroup: IProgramGroup | null) => ({type: SELECT_PROGRAM_GROUP, payload: selectedProgramGroup})
export const addProgramGroupAction = (newProgramGroup: IProgramGroup) => ({type: ADD_PROGRAM_GROUP, payload: newProgramGroup})
export const editProgramGroupAction = (newProgramGroup: IProgramGroup) => ({type: EDIT_PROGRAM_GROUP, payload: newProgramGroup})
export const deleteProgramGroupAction = (programGroup: IProgramGroup) => ({type: DELETE_PROGRAM_GROUP, payload: programGroup})