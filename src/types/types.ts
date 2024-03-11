import React, {SetStateAction} from "react";
import {allAgreedWorkTime, allProductiveTime} from "@/data/fake/persons";

export interface IMenuItem {
    name: string,
    href: string,
}
export interface IGlobalContext {

}
export interface IHTTPError {
    message: string
    status: number,
    errors: any[]
}
export interface IMainMenuItem {
    text: string,
    href: string,
    icon: React.ReactChild,
    page?: React.ReactChild,

}
export interface IRadialBarDataItem{
    name: string,
    color: string,
    procents: number,
    time: string
}
export interface IPerson {

    id: number,
    surname: string,
    name: string,
    lastname: string,
    avatar: string,
    job: string,
    department: string,

    workTime: {
        all?: ITime,
        productive: ITime,
        idle: ITime,
        distraction: ITime,
    },

    agreedWorkTime: ITime,

    //Чем сотрудник занимается сейчас (сайт/приложение/простой)
    state: {
        type: 'idle' | 'site' | 'program',
        name?: string,
        time: ITime,
    },

    lateness: number[] | [],

    absenteeism: number[] | [],

    earlyLeaving: number[] | [],

    incidents: number,

}
export interface IDepartment {
    id: number,
    name: string,
}
export interface IJob {
    id: number,
    name: string,
}
export interface ISchedule {
    id: number,
    name: string,
}


export interface ITime{
    hours: number,
    minutes: number,
    seconds: number,
}
export interface IProgram{
    name: string,
    legal: boolean,
    time: {
        all?: ITime;
        productive: ITime,
        distraction: ITime,
    },

}
export interface ISite extends IProgram{
    url: string,

}
export interface IStatisticItem {
    name: string
    procents: number,
    color: string
    time: string,
}
export interface IStatistic {
    workTime: ITime,
    agreedWorkTime: ITime,
    productiveTime: ITime,
    idleTime: ITime,
    distractionTime: ITime,
}
export interface IState {
    persons:{
        persons: IPerson[] | [],
        selected: IPerson | null,
    },
    programs: {
        programs: IProgram[] | [],
    },
    sites: {
        sites: ISite[] | [],
    },
    departments: {
        departments: IDepartment[],
        selected: IDepartment,
    }
    jobs: {
        jobs: IJob[],
        selected: IJob | null,
    },
    schedules: {
        schedules: ISchedule[],
        selected: ISchedule | null,
    }
    statistic: {
        statistic: IStatistic
    },
    modal:{
        open: string
    },
}