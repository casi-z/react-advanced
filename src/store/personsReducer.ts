import {IPerson} from "@/types/types";

const defaultState = {

    persons: [],
    selected: null

}

const SET_PERSONS = 'SET_PERSONS'
const SELECT_PERSON = 'SELECT_PERSON'
const ADD_PERSON = 'ADD_PERSONS'
const EDIT_PERSON = 'EDIT_PERSON'
const DELETE_PERSON = 'DELETE_PERSON'

export default function personsReducer(
    state = defaultState,
    action: { type: string, payload: IPerson | IPerson[] | null }
) {

    switch (action.type) {

        case SET_PERSONS:
            return {...state, persons: action.payload}

        case SELECT_PERSON:
            return {...state, selected: action.payload}

        case ADD_PERSON:
            return {...state, persons: [...state.persons, action.payload]}

        case EDIT_PERSON:

            const newPersons = state.persons.map(person => {
                //@ts-ignore
                if (person.id === action.payload.id) {
                    return action.payload
                } else {
                    return person
                }

            })
            return {...state, persons: newPersons}

        case DELETE_PERSON:
            //@ts-ignore
            const newPersons2 = [...state.persons].filter(person => person.id !== action.payload.id)
            return {...state, persons: newPersons2}


        default:
            return state

    }
}

export const setPersonsAction = (persons: IPerson[]) => ({type: SET_PERSONS, payload: persons})
export const selectPersonAction = (selectedPerson: IPerson | null) => ({type: SELECT_PERSON, payload: selectedPerson})
export const addPersonAction = (newPerson: IPerson) => ({type: ADD_PERSON, payload: newPerson})
export const editPersonAction = (newPerson: IPerson) => ({type: EDIT_PERSON, payload: newPerson})
export const deletePersonAction = (person: IPerson) => ({type: DELETE_PERSON, payload: person})