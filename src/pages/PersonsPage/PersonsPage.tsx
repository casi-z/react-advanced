import usePersonsPageStyles from './PersonsPage.style'
import React, {ReactChild, FC, useState} from 'react'
import {
    Avatar,
    Box, Chip,
    Grid,
    Paper,
    Tab,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography,
    useTheme
} from '@mui/material'
import Page from "@/components/Page/Page";
import StatisticSection from "@/layouts/StatisticSection/StatisticSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import persons, {allAgreedWorkTime, allWorkTime} from "@/data/fake/persons";
import PersonCard from "@/components/PersonCard/PersonCard";
import Calc from "@/utils/calcUtil";

const {log} = console

interface PersonsPageProps {

    children?: ReactChild,

}

const PersonsPage: FC<PersonsPageProps> = ({children}) => {

    const theme = useTheme()
    const Styles = usePersonsPageStyles(theme)


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
            procents: Calc.procentsByTime(allWorkTime, allAgreedWorkTime),
            color: 'rgb(240, 183, 52)',
            time: `${allWorkTime.hours} ч. ${allWorkTime.minutes} мин. ${allWorkTime.seconds} сек.`,
        },
        {
            name: 'Продуктивных часов',
            procents: 25.58,
            color: 'rgb(15, 232, 175)',
            time: '9 ч. 21 мин. 0 сек',
        },
        {
            name: 'Простой',
            procents: 13.31,
            color: 'rgb(210, 210, 210)',
            time: '17 ч. 58 мин. 0 сек',
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

            <Grid component={Styles} mt={2} container spacing={2} item xs={12}>


                <Paper>

                    <Grid container item xs={12}>

                        <SectionTitle>Статистика сотрудников</SectionTitle>

                        <Table sx={{tableLayout: 'fixed'}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Сотрудник</TableCell>
                                    <TableCell align="right">Статистика</TableCell>
                                    <TableCell align="right">Опоздания</TableCell>
                                    <TableCell align="right">Прогулы</TableCell>
                                    <TableCell align="right">Ранний уход</TableCell>
                                    <TableCell align="right">Инцидентов</TableCell>
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

                                                <PersonCard name={row.name} job={row.job} avatar={row.avatar}/>

                                            </TableCell>

                                            <TableCell
                                                align="right"
                                            >
                                                {row.workTime.hours} ч. {row.workTime.minutes} мин
                                            </TableCell>

                                            <TableCell align="right">{sumOfLateness} мин</TableCell>

                                            <TableCell align="right">{sumOfAbsenteeism} мин</TableCell>

                                            <TableCell align="right">{sumOfEarlyLeaving} мин</TableCell>

                                            <TableCell align="right">

                                                <Chip
                                                    label={row.incidents}
                                                    color={row.incidents > 0 ? 'error' : 'success'}
                                                    variant="filled" size={'small'}
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
export default PersonsPage
