import {IPerson, ISite} from "@/types/types";

const defaultState = {

    sites: [],

}

const SET_SITES = 'SET_SITES'
export default function sitesReducer(
    state: { sites: ISite[] } = defaultState,
    action: { type: string, payload: string }
) {

    switch (action.type) {

        case SET_SITES:
            return {...state, sites: action.payload}


        default:
            return state

    }
}

export const setSitesAction = (sites: ISite[]) => ({type: SET_SITES, payload: sites})