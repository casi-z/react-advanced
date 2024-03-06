
import React, {ReactChild, FC, useState} from 'react'
import {
    Box, Chip,
    Grid,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography,
    useTheme
} from '@mui/material'
import Page from "@/components/Page/Page";
import StatisticSection from "@/layouts/StatisticSection/StatisticSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import sites from "@/data/fake/sites";

import PersonCard from "@/components/PersonCard/PersonCard";
import Calc from "@/utils/calcUtil";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";

const {log} = console

interface TimeTrackingPageProps {

    children?: ReactChild,

}

const TimeTrackingPage: FC<TimeTrackingPageProps> = ({children}) => {



    const [value, setValue] = useState<number>(0);

    const persons = useSelector((state: IState) => state.persons.persons)
    const statistic = useSelector((state: IState) => state.statistic.statistic)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        log(value)
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const statisticCardsData = [
        {
            name: 'Отработано',
            procents: Calc.procentsByTime(statistic.workTime, statistic.agreedWorkTime),
            color: 'rgb(240, 183, 52)',
            time: `${statistic.workTime.hours} ч. ${statistic.workTime.minutes} мин. ${statistic.workTime.seconds} сек.`,
        },
        {
            name: 'Продуктивных часов',
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

    return (
        <Page>

            <Tabs value={value} onChange={handleChange}>

                <Tab label="День" {...a11yProps(1)}/>
                <Tab label="Неделя" {...a11yProps(2)}/>
                <Tab label="Месяц"{...a11yProps(3)} />
                <Tab label="Квартал" {...a11yProps(4)}/>
                <Tab label="Год" {...a11yProps(5)}/>

            </Tabs>

            <StatisticSection data={statisticCardsData}/>

            <Grid mt={1} container item xs={12}>

                <Paper elevation={0} sx={{width: '100%', overflow: 'hidden'}}>

                    <SectionTitle>Статистика сотрудников</SectionTitle>

                    <TableContainer>

                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="body1">
                                            Сотрудник
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Кол-во <br/>опозданий
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Продолжительность <br/> опозданий
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Кол-во <br/> прогулов
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Продолжительность <br/> прогулов
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Кол-во <br/> ранних <br/> уходов
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Продолжительность <br/> ранних <br/> уходов
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Typography variant="body1">
                                            Средняя <br/> продолжительность <br/> работы
                                        </Typography>
                                    </TableCell>

                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {persons.map(row => {

                                    // @ts-ignore
                                    const sumOfLateness = row.lateness.length > 0 ? row.lateness.reduce((acc, number) => acc + number, 0) : 0
                                    // @ts-ignore
                                    const sumOfEarlyLeaving = row.earlyLeaving.length > 0 ? row.earlyLeaving.reduce((acc, number) => acc + number, 0) : 0
                                    // @ts-ignore
                                    const sumOfAbsenteeism = row.absenteeism.length > 0 ? row.absenteeism.reduce((acc, number) => acc + number, 0) : 0

                                    return (
                                        <TableRow
                                            className={'table-row'}
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">

                                                <PersonCard disablePadding name={row.name} job={row.job}
                                                            avatar={row.avatar}/>

                                            </TableCell>

                                            <TableCell align="center">{row.lateness.length}</TableCell>
                                            <TableCell align="center">{sumOfLateness}</TableCell>
                                            <TableCell align="center">{row.absenteeism.length}</TableCell>
                                            <TableCell align="center">{sumOfAbsenteeism}</TableCell>
                                            <TableCell align="center">{row.earlyLeaving.length}</TableCell>
                                            <TableCell align="center">{sumOfEarlyLeaving}</TableCell>
                                            <TableCell align="center">

                                                <Chip
                                                    label={`${row.workTime.all?.hours}:${row.workTime.all?.minutes}:0`}
                                                    //@ts-ignore
                                                    color={row.workTime?.all?.hours >= row.agreedWorkTime.hours ? 'success' : "error"}
                                                    variant="filled"
                                                    size={'medium'}
                                                />

                                            </TableCell>

                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>

                    </TableContainer>

                </Paper>


            </Grid>
        </Page>
    )
}
export default TimeTrackingPage