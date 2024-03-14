import React, {FC, ReactChild, useState} from 'react'
import {
    Grid,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
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
import StackedProgressBar from "@/components/StackedProgressBar/StackedProgressBar";
import Calc from "@/utils/calcUtil";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface SitesPageProps {

    children?: ReactChild,

}

const SitesPage: FC<SitesPageProps> = ({children}) => {
    const theme = useTheme()


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

    const statistic = useSelector((state: IState) => state.statistic.statistic)
    const programs = useSelector((state: IState) => state.programs.programs)
    const sites = programs.filter(program => program.type === 'site')

    const statisticCardsData = [
        {
            name: 'Отработано',
            procents: Calc.procentsByTime(statistic.workTime, statistic.agreedWorkTime),
            color: 'rgb(240, 183, 52)',
            time: `${statistic.workTime.hours} ч. ${statistic.workTime.minutes} мин. ${statistic.workTime.seconds} сек.`,
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

            <Grid mt={1} container item xs={12}>

                <Paper elevation={0} sx={{width: '100%', overflow: 'hidden'}}>


                    <SectionTitle>Статистика сайтов</SectionTitle>

                    <TableContainer>
                        <Table
                            sx={{
                                tableLayout: {
                                    md: 'fixed',
                                    xs: 'auto'
                                }
                            }}
                            stickyHeader
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Наименование</TableCell>
                                    <TableCell align="right">Статистика</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>

                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {sites.map(row => {
                                    const stackedProgressBarData = [
                                        {
                                            progress: Calc.procentsByTime(row.time.distraction, statistic.agreedWorkTime),
                                            color: 'rgb(253, 133, 138)',
                                        },
                                        {
                                            progress: Calc.procentsByTime(row.time.productive, statistic.agreedWorkTime),
                                            color: 'rgb(15, 232, 175)',
                                        },
                                    ]

                                    return (
                                        <TableRow
                                            className={'table-row'}
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">

                                                <Typography variant="body1">
                                                    {row.name}
                                                </Typography>

                                            </TableCell>

                                            <TableCell align="right">{row.time.all?.hours} ч.</TableCell>

                                            <TableCell align="right">

                                                <StackedProgressBar data={stackedProgressBarData}/>

                                            </TableCell>

                                            <TableCell
                                                align="right"
                                            >
                                                {/*@ts-ignore*/}
                                                {Calc.procentsByTime(row.time.all, statistic.agreedWorkTime).toFixed(2)}%
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
export default SitesPage