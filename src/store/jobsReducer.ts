import {IJob} from "@/types/types";

const defaultState = {

    jobs: [
        {id: 0, name: ''}
    ],
    selected: null

}

const SET_JOBS = 'SET_JOBS'
const ADD_JOB = 'ADD_JOBS'
const SELECT_JOB = 'SELECT_JOB'
const EDIT_JOB = 'EDIT_JOB'
const DELETE_JOB = 'DELETE_JOB'
export default function jobsReducer(
    state = defaultState,
    action: { type: string, payload: IJob[] | IJob }
) {

    switch (action.type) {

        case SET_JOBS:
            return {...state, jobs: action.payload}

        case SELECT_JOB:
            return {...state, selected: action.payload}

        case ADD_JOB:
            return {...state, jobs: [...state.jobs, action.payload]}

        case EDIT_JOB:

            const newJobs = state.jobs.map(job => {
                //@ts-ignore
                if (job.id === action.payload.id) {
                    return action.payload
                } else {
                    return job
                }

            })
            return {...state, jobs: newJobs}

        case DELETE_JOB:
            //@ts-ignore
            const newJobs2 = [...state.jobs].filter(job => job.id !== action.payload.id)
            return {...state, jobs: newJobs2}

        default:
            return state

    }
}

export const setJobsAction = (jobs: IJob[]) => ({type: SET_JOBS, payload: jobs})
export const selectJobAction = (selectedJob: IJob | null) => ({type: SELECT_JOB, payload: selectedJob})
export const addJobAction = (newJob: IJob) => ({type: ADD_JOB, payload: newJob})
export const editJobAction = (newJob: IJob) => ({type: EDIT_JOB, payload: newJob})
export const deleteJobAction = (job: IJob) => ({type: DELETE_JOB, payload: job})