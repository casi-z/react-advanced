import {ITime} from "@/types/types";

class Calc {
    public static timeToSeconds(time: ITime){
        return (time.hours * 60 * 60) + (time.minutes * 60) + time.seconds
    }
    public static procentsByTime(time: ITime, agreeTime: ITime){
        const timeSeconds = this.timeToSeconds(time)
        const agreeTimeSeconds = this.timeToSeconds(agreeTime)

        return ((timeSeconds / agreeTimeSeconds) * 100)

    }
}
export default Calc