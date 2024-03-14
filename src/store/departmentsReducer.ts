import {IDepartment} from "@/types/types";

const defaultState = {

    departments: [
        {id: 0, name: ''}
    ],
    selected: null

}

const SET_DEPARTMENTS = 'SET_DEPARTMENTS'
const ADD_DEPARTMENT = 'ADD_DEPARTMENTS'
const SELECT_DEPARTMENT = 'SELECT_DEPARTMENT'
const EDIT_DEPARTMENT = 'EDIT_DEPARTMENT'
const DELETE_DEPARTMENT = 'DELETE_DEPARTMENT'
export default function departmentsReducer(
    state = defaultState,
    action: { type: string, payload: IDepartment[] | IDepartment }
) {

    switch (action.type) {

        case SET_DEPARTMENTS:
            return {...state, departments: action.payload}

        case SELECT_DEPARTMENT:
            return {...state, selected: action.payload}

        case ADD_DEPARTMENT:
            return {...state, departments: [...state.departments, action.payload]}

        case EDIT_DEPARTMENT:

            const newDepartments = state.departments.map(department => {
                //@ts-ignore
                if (department.id === action.payload.id) {
                    return action.payload
                } else {
                    return department
                }

            })
            return {...state, departments: newDepartments}

        case DELETE_DEPARTMENT:
            //@ts-ignore
            const newDepartments2 = [...state.departments].filter(department => department.id !== action.payload.id)
            return {...state, departments: newDepartments2}

        default:
            return state

    }
}

export const setDepartmentsAction = (departments: IDepartment[]) => ({type: SET_DEPARTMENTS, payload: departments})
export const selectDepartmentAction = (selectedDepartment: IDepartment | null) => ({
    type: SELECT_DEPARTMENT,
    payload: selectedDepartment
})
export const addDepartmentAction = (newDepartment: IDepartment) => ({type: ADD_DEPARTMENT, payload: newDepartment})
export const editDepartmentAction = (newDepartment: IDepartment) => ({type: EDIT_DEPARTMENT, payload: newDepartment})
export const deleteDepartmentAction = (department: IDepartment) => ({type: DELETE_DEPARTMENT, payload: department})