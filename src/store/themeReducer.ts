const savedThemeMode = localStorage.getItem('themeMode')

const defaultState = {

    mode: savedThemeMode ? savedThemeMode : 'light',
}

const SET_THEME_MODE = 'SET_THEME_MODE'
const TOGGLE_THEME_MODE = 'TOGGLE_THEME_MODE'
export default function themeReducer(
    state = defaultState,
    action: { type: string, payload: 'light' | 'dark' }
) {

    switch (action.type) {

        case SET_THEME_MODE:
            localStorage.setItem('themeMode', action.payload)
            return {...state, mode: action.payload}

        case TOGGLE_THEME_MODE:
            localStorage.setItem('themeMode', state.mode === 'dark' ? 'light' : 'dark')
            return {...state, mode: state.mode === 'dark' ? 'light' : 'dark'}


        default:
            return state

    }
}

export const setThemeModeAction = (mode: 'light' | 'dark') => ({type: SET_THEME_MODE, payload: mode})
export const toggleThemeModeAction = () => ({type: TOGGLE_THEME_MODE, payload: ''})
