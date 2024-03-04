import {IProgram} from "@/types/types";

const programs = [
    {
        name: "Firefox",
        legal: true,
        time: {

            productive: {hours: 4, minutes: 3, seconds: 2},
            distraction: {hours: 2, minutes: 3, seconds: 2},
        },
    },
    {
        name: "Notepad++",
        legal: false,
        time: {

            productive: {hours: 1, minutes: 3, seconds: 2},
            distraction: {hours: 4, minutes: 3, seconds: 2},
        },
    },
    {
        name: "Microsoft Excel",
        legal: true,
        time: {

            productive: {hours: 2, minutes: 3, seconds: 2},
            distraction: {hours: 5, minutes: 3, seconds: 2},
        },

    },
    {
        name: "Adobe Illustrator",
        legal: false,
        time: {

            productive: {hours: 1, minutes: 3, seconds: 2},
            distraction: {hours: 9, minutes: 3, seconds: 2},
        },
    },
    {
        name: "Adobe After Effects",
        legal: false,
        time: {

            productive: {hours: 4, minutes: 3, seconds: 2},
            distraction: {hours: 6, minutes: 3, seconds: 2},
        },
    },
    {
        name: "Adobe Illustrator",
        legal: false,
        time: {

            productive: {hours: 7, minutes: 3, seconds: 2},
            distraction: {hours: 5, minutes: 3, seconds: 2},
        },
    },
    {
        name: "KOMPAS-3D",
        legal: false,
        time: {

            productive: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 8, minutes: 3, seconds: 2},
        },
    },
    {
        name: "CorelDRAW",
        legal: false,
        time: {

            productive: {hours: 2, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
    },

]

function calcAllHours(array: IProgram[]) {

    const result = array.map(element => {

        const productiveTime = element.time.productive
        const distractionTime = element.time.distraction


        return {
            ...element, time: {
                ...element.time,
                all: {
                    hours: productiveTime.hours + distractionTime.hours,
                    // @ts-ignore
                    minutes: productiveTime.minutes + distractionTime.minutes,
                    // @ts-ignore
                    seconds: productiveTime.seconds + distractionTime.seconds,
                }
            }
        }

    })

    return result

}

export default calcAllHours([...programs])