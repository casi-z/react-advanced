import React, {ReactChild, FC, useEffect, useState} from 'react'
import {Box, Button, Divider, Grid, Paper, Tab, Tabs, Typography, useTheme} from '@mui/material'
import Page from '@/components/Page/Page'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import RadialBarSection from "@/layouts/RadialBarSection/RadialBarSection";
import EventSection from "@/layouts/EventSection/EventSection";
import LatenessSection from "@/layouts/LatenessSection/LatenessSection";
import DiagrammSection from "@/layouts/DiagrammSection/DiagrammSection";
import LastIncidentsSection from "@/layouts/LastIncidentsSection/LastIncidentsSection";
import ProgramSection from "@/layouts/ProgramSection/ProgramSection";
import SitesSection from "@/layouts/SitesSection/SitesSection";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";
import Calc from "@/utils/calcUtil";


const {log} = console

interface MainProps {

    children?: ReactChild,

}

const Main: FC<MainProps> = ({children}) => {
    const theme = useTheme()

    const [value, setValue] = useState<number>(0);

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

    const radialBarData = [
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

    return (
        <Page>

            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
            >

                <Tab label="День" {...a11yProps(1)}/>
                <Tab label="Неделя" {...a11yProps(2)}/>
                <Tab label="Месяц"{...a11yProps(3)} />
                <Tab label="Квартал" {...a11yProps(4)}/>
                <Tab label="Год" {...a11yProps(5)}/>

            </Tabs>

            <Grid container item xs={12} flexDirection={"column"}>

                <Grid rowSpacing={{md: 0, xs: 2}} mb={{md: 0, xs: 2}} flexDirection={{md: 'row', xs: 'column'}} container flexWrap={"nowrap"}>

                    <Grid
                        rowSpacing={{md: 0, xs: 2}}
                        container
                        item md={8} xs={12}

                        flexDirection={'column'}
                        mr={{md: 2, xs: 0}}
                    >

                        <DiagrammSection/>

                        <Grid
                            minHeight={'60%'}
                            flexDirection={{md: 'row', xs: 'column'}}
                            rowSpacing={{md: 0, xs: 2}}
                            container
                            flexWrap={'nowrap'}
                        >

                            <EventSection/>
                            <LatenessSection/>

                        </Grid>

                    </Grid>

                    <RadialBarSection radialBarData={radialBarData}/>

                </Grid>

                <Grid flexDirection={{md: 'row', xs: 'column'}} container mt={2} rowSpacing={{md: 0, xs: 2}} flexWrap={'nowrap'}>

                    <LastIncidentsSection/>

                    <Grid ml={{md: 2, xs: 0}} container item md={4} xs={12} flexDirection={"column"} flexWrap={'nowrap'}>

                        <ProgramSection/>
                        <SitesSection/>

                    </Grid>

                </Grid>

            </Grid>

        </Page>
    )
}
export default Main