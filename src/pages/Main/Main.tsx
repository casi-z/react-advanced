import React, {FC, useState} from 'react'
import {Grid, Tab, Tabs, useTheme} from '@mui/material'
import Page from '@/components/Page/Page'
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


interface MainProps {

}

const Main: FC<MainProps> = () => {

    const theme = useTheme()

    const [value, setValue] = useState<number>(0);

    const statistic = useSelector((state: IState) => state.statistic.statistic)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

    };

    function tabProps(index: number) {
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
            time: statistic.workTime.toString()
        },
        {
            name: 'Простой',
            color: 'rgba(190,190,190,0.85)',
            procents: Calc.procentsByTime(statistic.idleTime, statistic.workTime),
            time: statistic.idleTime.toString()
        },
        {
            name: 'Продуктивно',
            procents: Calc.procentsByTime(statistic.productiveTime, statistic.workTime),
            color: 'rgb(15, 232, 175)',
            time: statistic.productiveTime.toString()
        },
        {
            name: 'Отвлечения',
            procents: Calc.procentsByTime(statistic.distractionTime, statistic.workTime),
            color: 'rgb(253, 133, 138)',
            time: statistic.distractionTime.toString()
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

                <Tab label="День" {...tabProps(1)}/>
                <Tab label="Неделя" {...tabProps(2)}/>
                <Tab label="Месяц"{...tabProps(3)} />
                <Tab label="Квартал" {...tabProps(4)}/>
                <Tab label="Год" {...tabProps(5)}/>

            </Tabs>

            <Grid container item xs={12} flexDirection={"column"}>

                <Grid
                    rowSpacing={{md: 0, xs: 2}}

                    flexDirection={{md: 'row', xs: 'column'}}
                    container
                    flexWrap={"nowrap"}
                    height={{md: '90vh', xs: 'auto'}}

                >

                    <Grid
                        rowSpacing={{md: 0, xs: 2}}
                        container
                        item md={8} xs={12}
                        height={'100%'}
                        flexDirection={'column'}
                        mr={{md: 2, xs: 0}}
                    >

                        <DiagrammSection/>

                        <Grid
                            height={'65.5%'}
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

                <Grid
                    flexDirection={{md: 'row', xs: 'column'}}
                    container
                    mt={2}
                    rowSpacing={{md: 0, xs: 2}}
                    flexWrap={'nowrap'}
                    height={{md: '100vh', xs: 'auto'}}
                >

                    <LastIncidentsSection/>

                    <Grid
                        ml={{md: 2, xs: 0}}
                        container
                        item
                        md={4}
                        xs={12}
                        justifyContent={'space-between'}
                        flexDirection={"column"}
                        flexWrap={'nowrap'}
                        height={'100%'}

                    >

                        <ProgramSection/>
                        <SitesSection/>

                    </Grid>

                </Grid>

            </Grid>

        </Page>
    )
}
export default Main