import React from "react";

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

export interface IRadialBarDataItem {
    name: string,
    color: string,
    procents: number,
    time: string
}

export interface IBirthDate{
    day: number,
    month: number,
    year: number,
}
export interface IPersonData {

    id: number,
    surname: string,
    name: string,
    lastname: string,
    birthDate: IBirthDate
    avatar: string,
    job: string,
    department: string,

    workTime: {

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

export interface IPerson extends IPersonData{
    fullName: string,
    workTime:{
        productive: ITime;
        idle: ITime;
        distraction: ITime;
        all: ITime
    }
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

export interface ITimeData {
    hours: number,
    minutes: number,
    seconds: number,
}

export interface ITime extends ITimeData{
    toString: (level?: 1 | 2) => string
}

export interface IProgramData {
    id: number,
    name: string,
    type: 'program' | 'site'
    url: string
    legal: boolean,
    time: {
        productive: ITime,
        distraction: ITime,
    },

}

export interface IProgram extends IProgramData{

    time: {
        productive: ITime,
        distraction: ITime,
        all: ITime
    },

}

export interface IProgramGroup{
    id: number,
    name: string,
    parentId: number | null,
}

export interface IStatisticItem {
    name: string
    procents: number,
    color: string
    time: ITime,
}

export interface IStatistic {
    workTime: ITime,
    agreedWorkTime: ITime,
    productiveTime: ITime,
    idleTime: ITime,
    distractionTime: ITime,
}

export interface IState {
    persons: {
        persons: IPerson[] | [],
        selected: IPerson | null,
    },
    programs: {
        programs: IProgram[] | [],
        selected: IProgram | null,
    },
    programGroups: {
        programGroups: IProgramGroup[] | [],
        selected: IProgramGroup | null,
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
    modal: {
        open: string
    },
    theme: {
        mode: 'light' | 'dark'
    }
}