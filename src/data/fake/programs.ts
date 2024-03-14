import {IProgramData} from "@/types/types";

const programs: IProgramData[] = [
    {
        id: 1,
        type: 'program',
        name: "Firefox",
        url: "Firefox",
        legal: true,
        time: {

            productive: {hours: 4, minutes: 3, seconds: 2},
            distraction: {hours: 2, minutes: 3, seconds: 2},
        },
    },
    {
        id: 2,
        type: 'program',
        name: "Notepad++",
        url: "Notepad",
        legal: false,
        time: {

            productive: {hours: 1, minutes: 3, seconds: 2},
            distraction: {hours: 4, minutes: 3, seconds: 2},
        },
    },
    {
        id: 3,
        type: 'program',
        name: "Microsoft Excel",
        url: "Microsoft Excel",
        legal: true,
        time: {

            productive: {hours: 2, minutes: 3, seconds: 2},
            distraction: {hours: 5, minutes: 3, seconds: 2},
        },

    },
    {
        id: 4,
        type: 'program',
        name: "Adobe Illustrator",
        url: "Adobe Illustrator",
        legal: false,
        time: {

            productive: {hours: 1, minutes: 3, seconds: 2},
            distraction: {hours: 9, minutes: 3, seconds: 2},
        },
    },
    {
        id: 5,
        type: 'program',
        name: "Adobe After Effects",
        url: "Adobe After Effects",
        legal: false,
        time: {

            productive: {hours: 4, minutes: 3, seconds: 2},
            distraction: {hours: 6, minutes: 3, seconds: 2},
        },
    },
    {
        id: 6,
        type: 'program',
        name: "Adobe PDF Reader",
        url: "Adobe PDF Reader",
        legal: false,
        time: {

            productive: {hours: 7, minutes: 3, seconds: 2},
            distraction: {hours: 5, minutes: 3, seconds: 2},
        },
    },
    {
        id: 7,
        type: 'program',
        name: "KOMPAS-3D",
        url: "KOMPAS-3D",
        legal: false,
        time: {

            productive: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 8, minutes: 3, seconds: 2},
        },
    },
    {
        id: 8,
        type: 'program',
        name: "CorelDRAW",
        url: "CorelDRAW",
        legal: false,
        time: {

            productive: {hours: 2, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
    },
    {
        id: 9,
        type: 'site',
        name: "Google",
        url: "google.com",
        legal: true,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        id: 10,
        type: 'site',
        name: "Yandex",
        url: "yandex.ru",
        legal: true,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        id: 11,
        type: 'site',
        name: "nalog.ru",
        url: "nalog.ru",
        legal: false,
        time: {
            productive: {hours: 40, minutes: 7, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        id: 12,
        type: 'site',
        name: "Вконтакте",
        url: "vk.com",
        legal: false,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 30, minutes: 3, seconds: 2},
        },
    },

    {
        id: 13,
        type: 'site',
        name: "Github",
        url: "github.com",
        legal: true,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        id: 14,
        type: 'site',
        name: "mts.ru",
        url: "mts.ru",
        legal: false,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },
    {
        id: 15,
        type: 'site',
        name: "AmoCRM",
        url: "amocrm.com",
        legal: false,
        time: {
            productive: {hours: 5, minutes: 3, seconds: 2},
            distraction: {hours: 3, minutes: 3, seconds: 2},
        },
    },


]



export default programs