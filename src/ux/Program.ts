import {IProgram, IProgramData} from "@/types/types";
import Time from "@/ux/Time";

export default class Program implements IProgram {
    public id;
    public url;
    public type;
    public name;
    public legal;
    public time;

    constructor({id, name, url, legal, time, type}: IProgramData) {
        this.id = id
        this.name = name
        this.type = type
        this.url = url
        this.legal = legal
        this.time = {

            productive: new Time(time.productive),
            distraction: new Time(time.distraction),
            all: new Time(this.calcAllTime(time))

        }
    }

    private calcAllTime(timeData: any) {
        const productiveTime = timeData.productive
        const distractionTime = timeData.distraction

        return {
            hours: productiveTime.hours + distractionTime.hours,
            minutes: productiveTime.minutes + distractionTime.minutes,
            seconds: productiveTime.seconds + distractionTime.seconds,
        }
    }
}