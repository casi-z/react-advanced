import {IPerson, IState} from "@/types/types";

const defaultState = {

    persons: [],
    selected: null

}

const SET_PERSONS = 'SET_PERSONS'
const SELECT_PERSON = 'SELECT_PERSON'

export default function personsReducer (
    state = defaultState,
    action: { type: string, payload: IPerson | IPerson[] | null}
) {

    switch (action.type) {

        case SET_PERSONS:
            return {...state, persons: action.payload}

        case SELECT_PERSON:
            return {...state, selected: action.payload}


        default:
            return state

    }
}

export const setPersonsAction = (persons: IPerson[]) => ({type: SET_PERSONS, payload: persons})
export const selectPersonAction = (selectedPerson: IPerson | null) => ({type: SELECT_PERSON, payload: selectedPerson})
