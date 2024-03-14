import React, {FC, ReactChild, useState} from 'react'
import {Chip, Tab, Tabs} from '@mui/material'
import Page from "@/components/Page/Page";
import StatisticSection from "@/layouts/StatisticSection/StatisticSection";
import Calc from "@/utils/calcUtil";
import {IPerson, IState} from "@/types/types";
import {useSelector} from "react-redux";
import BasicTable from "@/layouts/BasicTable/BasicTable";
import PersonCard from "@/components/PersonCard/PersonCard";
import StackedProgressBar from "@/components/StackedProgressBar/StackedProgressBar";


interface PersonsPageProps {

    children?: ReactChild,

}

const PersonsPage: FC<PersonsPageProps> = ({children}) => {


    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function tabProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const persons = useSelector((state: IState) => state.persons.persons)
    const statistic = useSelector((state: IState) => state.statistic.statistic)

    const statisticCardsData = [
        {
            name: 'Отработано',
            procents: Calc.procentsByTime(statistic.workTime, statistic.agreedWorkTime),
            color: 'rgb(240, 183, 52)',
            time: `${statistic.workTime.hours} ч. ${statistic.workTime.minutes} мин. ${statistic.workTime.seconds} сек.`,
        },
        {
            name: 'Простой',
            color: 'rgba(190,190,190,0.85)',
            procents: Calc.procentsByTime(statistic.idleTime, statistic.workTime),
            time: `${statistic.idleTime.hours} ч. ${statistic.idleTime.minutes} мин. ${statistic.idleTime.seconds} сек.`,
        },
        {
            name: 'Продуктивно',
            procents: Calc.procentsByTime(statistic.productiveTime, statistic.workTime),
            color: 'rgb(15, 232, 175)',
            time: `${statistic.productiveTime.hours} ч. ${statistic.productiveTime.minutes} мин. ${statistic.productiveTime.seconds} сек.`,
        },
        {
            name: 'Отвлечения',
            procents: Calc.procentsByTime(statistic.distractionTime, statistic.workTime),
            color: 'rgb(253, 133, 138)',
            time: `${statistic.distractionTime.hours} ч. ${statistic.distractionTime.minutes} мин. ${statistic.distractionTime.seconds} сек.`,
        },

    ]

    function createData(array: IPerson[]) {

        return array.map(person => {

            // @ts-ignore
            const sumOfLateness = person.lateness.length > 0 ? person.lateness.reduce((acc, number) => acc + number, 0) : 0
            // @ts-ignore
            const sumOfEarlyLeaving = person.earlyLeaving.length > 0 ? person.earlyLeaving.reduce((acc, number) => acc + number, 0) : 0
            // @ts-ignore
            const sumOfAbsenteeism = person.absenteeism.length > 0 ? person.absenteeism.reduce((acc, number) => acc + number, 0) : 0

            const stackedProgressBarData = [
                {
                    progress: Calc.procentsByTime(person.workTime.distraction, statistic.agreedWorkTime),
                    color: 'rgb(253, 133, 138)',
                },
                {
                    progress: Calc.procentsByTime(person.workTime.productive, statistic.agreedWorkTime),
                    color: 'rgb(15, 232, 175)',
                },
            ]

            return[

                <PersonCard data={person}/>,

                <StackedProgressBar data={stackedProgressBarData}/>,

                `${person.workTime.all?.hours} ч. ${person.workTime.all?.minutes} мин`,

                sumOfLateness,
                sumOfEarlyLeaving,
                sumOfAbsenteeism,

                <Chip
                    label={person.incidents}
                    color={person.incidents > 0 ? 'error' : 'success'}
                    variant="filled" size={'small'}
                />





            ]

        })
    }

    return (
        <Page>

            <Tabs value={value} onChange={handleChange}>

                <Tab label="День" {...tabProps(1)}/>
                <Tab label="Неделя" {...tabProps(2)}/>
                <Tab label="Месяц"{...tabProps(3)} />
                <Tab label="Квартал" {...tabProps(4)}/>
                <Tab label="Год" {...tabProps(5)}/>

            </Tabs>
            <StatisticSection data={statisticCardsData}/>

            <BasicTable
                title={'Статистика сотрудников'}
                tableHead={['Сотрудник', 'Статистика', '', 'Опоздания', 'Прогулы', 'Ранний уход', 'Инцидентов']}
                tableBody={createData(persons)}
                height={68}

            />

            {/*<Grid container mt={2}>*/}
            {/*    <Paper sx={{width: '100%', overflow: 'hidden'}}>*/}

            {/*        <SectionTitle>Статистика сотрудников</SectionTitle>*/}

            {/*        <TableContainer>*/}
            {/*            <Table*/}
            {/*                sx={{*/}
            {/*                    tableLayout: {*/}
            {/*                        md: 'fixed',*/}
            {/*                        xs: 'auto'*/}
            {/*                    }*/}
            {/*                }}*/}
            {/*                stickyHeader*/}
            {/*                aria-label="simple table"*/}
            {/*            >*/}
            {/*                <TableHead>*/}
            {/*                    <TableRow>*/}
            {/*                        <TableCell>Сотрудник</TableCell>*/}
            {/*                        <TableCell align="right">Статистика</TableCell>*/}
            {/*                        <TableCell align="right"></TableCell>*/}
            {/*                        <TableCell align="right">Опоздания</TableCell>*/}
            {/*                        <TableCell align="right">Прогулы</TableCell>*/}
            {/*                        <TableCell align="right">Ранний уход</TableCell>*/}
            {/*                        <TableCell align="right">Инцидентов</TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                </TableHead>*/}
            {/*                <TableBody>*/}
            {/*                    {persons.map((row: IPerson) => {*/}

            {/*// @ts-ignore*/}
            {/*const sumOfLateness = row.lateness.length > 0 ? row.lateness.reduce((acc, number) => acc + number, 0) : 0*/}
            {/*// @ts-ignore*/}
            {/*const sumOfEarlyLeaving = row.earlyLeaving.length > 0 ? row.earlyLeaving.reduce((acc, number) => acc + number, 0) : 0*/}
            {/*// @ts-ignore*/}
            {/*const sumOfAbsenteeism = row.absenteeism.length > 0 ? row.absenteeism.reduce((acc, number) => acc + number, 0) : 0*/}

            {/*const stackedProgressBarData = [*/}
            {/*    {*/}
            {/*        progress: Calc.procentsByTime(row.workTime.distraction, statistic.agreedWorkTime),*/}
            {/*        color: 'rgb(253, 133, 138)',*/}
            {/*    },*/}
            {/*    {*/}
            {/*        progress: Calc.procentsByTime(row.workTime.productive, statistic.agreedWorkTime),*/}
            {/*        color: 'rgb(15, 232, 175)',*/}
            {/*    },*/}
            {/*]*/}

            {/*                        return (*/}

            {/*                            <TableRow*/}
            {/*                                className={'table-row'}*/}
            {/*                                key={row.name}*/}
            {/*                                sx={{'&:last-child td, &:last-child th': {border: 0}}}*/}
            {/*                            >*/}
            {/*                                <TableCell component="th" scope="row">*/}

            {/*                                    <PersonCard data={row}/>*/}

            {/*                                </TableCell>*/}

            {/*                                <TableCell*/}
            {/*                                    align="right"*/}
            {/*                                >*/}
            {/*                                    {row.workTime.all?.hours} ч. {row.workTime.all?.minutes} мин*/}

            {/*                                </TableCell>*/}

            {/*                                <TableCell align={"center"}>*/}
            {/*                                    <StackedProgressBar data={stackedProgressBarData}/>*/}
            {/*                                </TableCell>*/}

            {/*                                <TableCell align="right">{sumOfLateness} мин</TableCell>*/}

            {/*                                <TableCell align="right">{sumOfAbsenteeism} мин</TableCell>*/}

            {/*                                <TableCell align="right">{sumOfEarlyLeaving} мин</TableCell>*/}

            {/*                                <TableCell align="right">*/}

                                                {/*<Chip*/}
                                                {/*    label={row.incidents}*/}
                                                {/*    color={row.incidents > 0 ? 'error' : 'success'}*/}
                                                {/*    variant="filled" size={'small'}*/}
                                                {/*/>*/}

            {/*                                </TableCell>*/}

            {/*                            </TableRow>*/}

            {/*                        )*/}
            {/*                    })}*/}

            {/*                </TableBody>*/}
            {/*            </Table>*/}
            {/*        </TableContainer>*/}
            {/*    </Paper>*/}
            {/*</Grid>*/}


        </Page>
    )
}
export default PersonsPage
