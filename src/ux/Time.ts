import {ITime} from "@/types/types";

export default class Time implements ITime{
    public hours;
    public minutes;
    public seconds;


    constructor({hours, minutes, seconds}: ITime) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    public toString(level?: 1 | 2){
        switch (level){
            case 1:
                return `${this.hours} ч.`

            case 2:
                return `${this.hours} ч. ${this.minutes} мин.`
            default:
                return `${this.hours} ч. ${this.minutes} мин. ${this.seconds} сек.`
        }

    }
}