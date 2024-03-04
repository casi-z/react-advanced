const persons = [
    {
        id: 1,
        name: 'Фролов Василий Сергеевич',
        avatar: '',
        job: 'Маркетолог / Отдел маркетинга',
        workTime: {hours: 7, minutes: 4, seconds: 5},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2}

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
        name: 'Кобзева Екатерина Александровна',
        avatar: '',
        job: 'Дизайнер / Отдел дизайна',
        workTime: {hours: 8, minutes: 6, seconds: 2},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'site',
            name: 'AmoCRM'

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
        name: 'Коновалов Владимир Дмитриевич',
        avatar: '',
        job: 'Разработчик / Отдел разработки',
        workTime: {hours: 1, minutes: 5, seconds: 1},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'program',
            name: 'Adobe Illustrator'

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
        name: 'Кравченко Евгений Викторович',
        avatar: '',
        job: 'Менеджер по продажам / Отдел продаж',
        workTime: {hours: 5, minutes: 5, seconds: 23},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'site',
            name: 'nalog.ru'

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
        name: 'Кудрявцева Евгения Викторовна',
        avatar: '',
        job: 'Бухгалтер / Бухгалтерия',
        workTime: {hours: 2, minutes: 6, seconds: 2},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'site',
            name: 'pornhub.com'

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
        name: 'Мулатов Константин Евгеньевич',
        avatar: '',
        job: 'Начальник отдела кадров / Отдел персонала',
        workTime: {hours: 5, minutes: 3, seconds: 0},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2}

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
        name: 'Поляков Виктор Дмитриевич',
        avatar: '',
        job: 'Разработчик / Отдел разработки',
        workTime: {hours: 8, minutes: 0, seconds: 0},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2}

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
        name: 'Фролов Василий Сергеевич',
        avatar: '',
        job: 'SEO-специалист / Отдел продвижения',
        workTime: {hours: 1, minutes: 0, seconds: 0},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2}

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
        name: 'Фрязев Виталий Сергеевич',
        avatar: '',
        job: 'Менеджер по продажам / Отдел маркетинга',
        workTime: {hours: 4, minutes: 0, seconds: 0},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2}

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
        name: 'Шалина Светлана Викторовна',
        avatar: '',
        job: 'Дизайнер / Отдел дизайна',
        workTime: {hours: 3, minutes: 0, seconds: 0},
        agreedWorkTime: {hours: 8, minutes: 0, seconds: 0},
        state: {
            type: 'idle',
            time: {hours: 0, minutes: 2}

        },
        lateness: [],
        absenteeism: [],
        earlyLeaving: [
            5
        ],
        incidents: 0,


    },


]
export const allAgreedWorkTime = {hours: 0, minutes: 0, seconds: 0};

export const allWorkTime = {hours: 0, minutes: 0, seconds: 0}

persons.forEach(person => {
    allWorkTime.hours += person.workTime.hours
    allWorkTime.minutes += person.workTime.minutes
    allWorkTime.seconds += person.workTime.seconds

    allAgreedWorkTime.hours += person.agreedWorkTime.hours
    allAgreedWorkTime.minutes += person.agreedWorkTime.minutes
    allAgreedWorkTime.seconds += person.agreedWorkTime.seconds
})



console.log(allWorkTime)
export default persons