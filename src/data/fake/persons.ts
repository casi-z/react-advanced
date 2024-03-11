import {IPerson, IProgram, ITime} from "@/types/types";

export const persons = calcAllHours([
    {
        id: 1,
        surname: 'Фролов',
        name: 'Василий',
        lastname: 'Сергеевич',
        avatar: '',
        job: 'Маркетолог',
        department: 'Отдел маркетинга',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 3,


    },

    {
        id: 2,
        surname: 'Кобзева',
        name: 'Екатерина',
        lastname: 'Александровна',
        avatar: '',
        job: 'Дизайнер',
        department: 'Отдел дизайна',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'site',
            name: 'AmoCRM',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [
            12
        ],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },

    {
        id: 3,
        surname: 'Коновалов',
        name: 'Владимир',
        lastname: 'Дмитриевич',
        avatar: '',
        job: 'Разработчик',
        department: 'Отдел разработки',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'program',
            name: 'Adobe Illustrator',
            time: {hours: 0, minutes: 3, seconds: 2}

        },
        lateness: [
            34
        ],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },

    {
        id: 4,
        surname: 'Кравченко',
        name: 'Евгений',
        lastname: 'Викторович',
        avatar: '',
        job: 'Менеджер по продажам',
        department: 'Отдел продаж',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'site',
            name: 'nalog.ru',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },

    {
        id: 5,
        surname: 'Кудрявцева',
        name: 'Евгения',
        lastname: 'Викторовна',
        avatar: '',
        job: 'Бухгалтер',
        department: 'Бухгалтерия',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'site',
            name: 'pornhub.com',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [
            43,
        ],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },

    {
        id: 6,
        surname: 'Мулатов',
        name: 'Константин',
        lastname: 'Евгеньевич',
        avatar: '',
        job: 'Начальник отдела кадров',
        department: 'Отдел персонала',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },
    {
        id: 7,
        surname: 'Поляков',
        name: 'Виктор',
        lastname: 'Дмитриевич',
        avatar: '',
        job: 'Разработчик',
        department: 'Отдел разработки',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },
    {
        id: 8,
        surname: 'Фролов',
        name: 'Василий',
        lastname: 'Сергеевич',
        avatar: '',
        job: 'SEO-специалист',
        department: 'Отдел продвижения',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },
    {
        id: 9,
        surname: 'Фрязев',
        name: 'Виталий',
        lastname: 'Сергеевич',
        avatar: '',
        job: 'Менеджер по продажам',
        department: 'Отдел маркетинга',
        workTime: {
            productive: {hours: 4, minutes: 3, seconds: 2},
            idle: {hours: 3, minutes: 3, seconds: 2},
            distraction: {hours: 1, minutes: 3, seconds: 2},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [
            8
        ],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },
    {
        id: 10,
        surname: 'Шалина',
        name: 'Светлана',
        lastname: 'Викторовна',
        avatar: '',
        job: 'Дизайнер',
        department: 'Отдел дизайна',
        workTime: {
            productive: {hours: 4, minutes: 0, seconds: 0},
            idle: {hours: 3, minutes: 0, seconds: 0},
            distraction: {hours: 1, minutes: 0, seconds: 0},
        },
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2, seconds: 0}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },


])
export const allAgreedWorkTime: ITime = {hours: 0, minutes: 0, seconds: 0};

export const allWorkTime: ITime = {hours: 0, minutes: 0, seconds: 0}
export const allProductiveTime: ITime = {hours: 0, minutes: 0, seconds: 0}
export const allIdleTime: ITime = {hours: 0, minutes: 0, seconds: 0}
export const allDistractionTime: ITime = {hours: 0, minutes: 0, seconds: 0}

function calcAllHours(array: IPerson[]) {

    return array.map(element => {

        const productiveTime = element.workTime.productive
        const distractionTime = element.workTime.distraction
        const idleTime = element.workTime.idle


        return {
            ...element, workTime: {
                ...element.workTime,
                all: {
                    hours: productiveTime.hours + distractionTime.hours + idleTime.hours,
                    // @ts-ignore
                    minutes: productiveTime.minutes + distractionTime.minutes + idleTime.minutes,
                    // @ts-ignore
                    seconds: productiveTime.seconds + distractionTime.seconds + idleTime.seconds,
                }
            }
        }

    })

}

//@ts-ignore
persons.forEach((person: IPerson) => {
    //@ts-ignore
    allWorkTime.hours += person.workTime.all.hours
    //@ts-ignore
    allWorkTime.minutes += person.workTime.all.minutes
    //@ts-ignore
    allWorkTime.seconds += person.workTime.all.seconds


    allProductiveTime.hours += person.workTime.productive.hours
    allProductiveTime.minutes += person.workTime.productive.minutes
    allProductiveTime.seconds += person.workTime.productive.seconds

    allIdleTime.hours += person.workTime.idle.hours
    allIdleTime.minutes += person.workTime.idle.minutes
    allIdleTime.seconds += person.workTime.idle.seconds

    allDistractionTime.hours += person.workTime.distraction.hours
    allDistractionTime.minutes += person.workTime.distraction.minutes
    allDistractionTime.seconds += person.workTime.distraction.seconds


    allAgreedWorkTime.hours += person.agreedWorkTime.hours
    allAgreedWorkTime.minutes += person.agreedWorkTime.minutes
    allAgreedWorkTime.seconds += person.agreedWorkTime.seconds

})

