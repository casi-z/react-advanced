import useSitesPageStyles from './SitesPage.style'
import React, {ReactChild, FC, useState} from 'react'
import {
    Box,
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
import programs from "@/data/fake/programs";
import sites from "@/data/fake/sites";
import StackedProgressBar from "@/components/StackedProgressBar/StackedProgressBar";
import Calc from "@/utils/calcUtil";
import {allAgreedWorkTime} from "@/data/fake/persons";

const {log} = console

interface SitesPageProps {

    children?: ReactChild,

}

const SitesPage: FC<SitesPageProps> = ({children}) => {
    const theme = useTheme()
    const Styles = useSitesPageStyles(theme)

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

                        <SectionTitle>Статистика сайтов</SectionTitle>

                        <Table sx={{tableLayout: 'fixed'}} aria-label="simple table">
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
                                            progress: Calc.procentsByTime(row.time.distraction, allAgreedWorkTime),
                                            color: 'rgb(253, 133, 138)',
                                        },
                                        {
                                            progress: Calc.procentsByTime(row.time.productive, allAgreedWorkTime),
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

                                            <TableCell align="right">{row.time.all.hours} ч.</TableCell>
                                            <TableCell align="right"><StackedProgressBar
                                                data={stackedProgressBarData}/></TableCell>
                                            <TableCell
                                                align="right">{Calc.procentsByTime(row.time.all, allAgreedWorkTime).toFixed(2)}%</TableCell>

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
export default SitesPage