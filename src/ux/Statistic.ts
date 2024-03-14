import {IPerson, IStatistic} from "@/types/types";

export default class Statistic implements IStatistic{
    public agreedWorkTime = {hours: 0, minutes: 0, seconds: 0};

    public workTime = {hours: 0, minutes: 0, seconds: 0}
    public productiveTime = {hours: 0, minutes: 0, seconds: 0}
    public idleTime = {hours: 0, minutes: 0, seconds: 0}
    public distractionTime = {hours: 0, minutes: 0, seconds: 0}
    
    constructor(persons: IPerson[]){
        persons.forEach(person => {

            this.workTime.hours += person.workTime.all.hours
            this.workTime.minutes += person.workTime.all.minutes
            this.workTime.seconds += person.workTime.all.seconds
            
            this.productiveTime.hours += person.workTime.productive.hours
            this.productiveTime.minutes += person.workTime.productive.minutes
            this.productiveTime.seconds += person.workTime.productive.seconds

            this.idleTime.hours += person.workTime.idle.hours
            this.idleTime.minutes += person.workTime.idle.minutes
            this.idleTime.seconds += person.workTime.idle.seconds

            this.distractionTime.hours += person.workTime.distraction.hours
            this.distractionTime.minutes += person.workTime.distraction.minutes
            this.distractionTime.seconds += person.workTime.distraction.seconds

            this.agreedWorkTime.hours += person.agreedWorkTime.hours
            this.agreedWorkTime.minutes += person.agreedWorkTime.minutes
            this.agreedWorkTime.seconds += person.agreedWorkTime.seconds

        })
    }
}