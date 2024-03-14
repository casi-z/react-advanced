const defaultState = {

    open: ''
}

const OPEN_MODAL = 'OPEN_MODAL'

export default function modalReducer(
    state = defaultState,
    action: { type: string, payload: string }
) {

    switch (action.type) {

        case OPEN_MODAL:
            return {...state, open: action.payload}


        default:
            return state

    }
}

export const setModalNameAction = (modalName: string) => ({type: OPEN_MODAL, payload: modalName})

