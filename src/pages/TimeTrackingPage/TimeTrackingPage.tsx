import useTimeTrackingPageStyles from './TimeTrackingPage.style'
import React, {ReactChild, FC, useState} from 'react'
import {
    Box, Chip,
    Grid,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
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
import persons from "@/data/fake/persons";
import PersonCard from "@/components/PersonCard/PersonCard";

const {log} = console

interface TimeTrackingPageProps {

    children?: ReactChild,

}

const TimeTrackingPage: FC<TimeTrackingPageProps> = ({children}) => {
    const theme = useTheme()
    const Styles = useTimeTrackingPageStyles(theme)

    const [value, setValue] = useState<number>(0);

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

    const statistic = [
        {
            name: 'Отработано',
            procents: 87.81,
            color: 'rgb(240, 183, 52)',
            time: '70 ч. 15 мин. 0 сек',
        },
        {
            name: 'Продуктивных часов',
            procents: 25.58,
            color: 'rgb(15, 232, 175)',
            time: '9 ч. 21 мин. 0 сек',
        },
        {
            name: 'Отвлечения',
            procents: 70.08,
            color: 'rgb(253, 133, 138)',
            time: '49 ч. 14 мин. 0 сек',
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

            <StatisticSection data={statistic}/>

            <Grid mt={1} container item xs={12}>

                <Paper>

                    <Grid container item xs={12}>

                        <SectionTitle>Статистика сотрудников</SectionTitle>

                        <Table aria-label="simple table">
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
                                    const sumOfLateness = row.lateness.length > 0 ?  row.lateness.reduce((acc, number) => acc + number, 0) : 0
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
                                                    label={`${row.workTime.hours}:${row.workTime.minutes}:0`}

                                                    color={row.workTime.hours >= row.agreedWorkTime.hours ? 'success' : "error"}
                                                    variant="filled"
                                                    size={'medium'}
                                                />

                                            </TableCell>

                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Grid>

                </Paper>


            </Grid>
        </Page>
    )
}
export default TimeTrackingPage