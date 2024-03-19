import {IPerson, IPersonData} from "@/types/types";
import Time from "@/ux/Time";

export default class Person implements IPerson {
    public id;
    public surname;
    public name;
    public fullName;
    public lastname;
    public birthDate;
    public avatar;
    public job;
    public department;
    public workTime;
    public agreedWorkTime;
    public state;
    public lateness;
    public absenteeism;
    public earlyLeaving;
    public incidents;
    constructor(
        {
            id,
            surname,
            name,
            lastname,
            birthDate,
            avatar,
            job,
            department,
            workTime,
            agreedWorkTime,
            state,
            lateness,
            absenteeism,
            earlyLeaving,
            incidents,
        }: IPersonData
    ) {
        this.id = id
        this.surname = surname
        this.name = name
        this.lastname = lastname
        this.fullName = `${this.surname} ${this.name} ${this.lastname}`
        this.birthDate = birthDate
        this.avatar = avatar
        this.job = job
        this.department = department
        this.workTime = {

            productive: new Time(workTime.productive),
            distraction: new Time(workTime.distraction),
            idle: new Time(workTime.idle),
            all: new Time(this.calcAllWorkTime(workTime))

        }
        this.agreedWorkTime = agreedWorkTime
        this.state = state
        this.lateness = lateness
        this.absenteeism = absenteeism
        this.earlyLeaving = earlyLeaving
        this.incidents = incidents

    }

    private calcAllWorkTime(dataWorkTime: any){

        const productiveTime = dataWorkTime.productive
        const distractionTime = dataWorkTime.distraction
        const idleTime = dataWorkTime.idle

        return({
            hours: productiveTime.hours + distractionTime.hours + idleTime.hours,

            minutes: productiveTime.minutes + distractionTime.minutes + idleTime.minutes,

            seconds: productiveTime.seconds + distractionTime.seconds + idleTime.seconds,
        })
    }

}