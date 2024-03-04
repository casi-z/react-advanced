import React, {SetStateAction} from "react";

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

export interface ILeftPanelItem {
    text: string,
    href: string,
    icon: React.ReactChild,
    page?: React.ReactChild,

}
export interface IRadialBarDataItem{
    label: string,
    color: string,
    progress: number,
    time: string
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