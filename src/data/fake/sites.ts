import {IProgram} from "@/types/types";

const sites = [
    {
        name: "Google",
        url: "google.com",
        legal: true,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        name: "Yandex",
        url: "yandex.ru",
        legal: true,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        name: "nalog.ru",
        url: "nalog.ru",
        legal: false,
        time: {
            productive: {hours: 40, minutes: 7, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        name: "Вконтакте",
        url: "vk.com",
        legal: false,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 30, minutes: 3, seconds: 2},
        },
    },

    {
        name: "Github",
        url: "github.com",
        legal: true,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        name: "mts.ru",
        url: "mts.ru",
        legal: false,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        name: "AmoCRM",
        url: "amocrm.com",
        legal: false,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
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
export default calcAllHours(sites)