import {ITime} from "@/types/types";

abstract class Calc {
    public static timeToSeconds(time: ITime) {
        return (time.hours * 60 * 60) + (time.minutes * 60) + time.seconds
    }

    public static procentsByTime(time: ITime, agreeTime: ITime) {
        const timeSeconds = this.timeToSeconds(time)
        const agreeTimeSeconds = this.timeToSeconds(agreeTime)

        return Number(((timeSeconds / agreeTimeSeconds) * 100).toFixed(2))

    }
}

export default Calc