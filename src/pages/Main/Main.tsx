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


const {log} = console

interface MainProps {

    children?: ReactChild,

}

const Main: FC<MainProps> = ({children}) => {
    const theme = useTheme()

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

    const radialBarData = [
        {label: 'Отработано', color: 'rgba(254,176,25,0.85)', progress: 95.3, time: '78 ч. 29 мин. 00 сек'},
        {label: 'Простой', color: 'rgba(190,190,190,0.85)', progress: 10, time: '78 ч. 29 мин. 00 сек'},
        {label: 'Продуктивно', color: 'rgba(0,227,150,0.85)', progress: 35, time: '78 ч. 29 мин. 00 сек'},
        {label: 'Отвлечения', color: 'rgba(255,69,96,0.85)', progress: 60, time: '78 ч. 29 мин. 00 сек'},
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

            <Grid container item xs={12} flexDirection={"column"}>

                <Grid container flexWrap={"nowrap"}>

                    <Grid container item xs={8} flexDirection={'column'} mr={2}>

                        <DiagrammSection/>

                        <Grid minHeight={'60%'} container flexWrap={'nowrap'}>

                            <EventSection/>
                            <LatenessSection/>

                        </Grid>

                    </Grid>

                    <RadialBarSection radialBarData={radialBarData}/>

                </Grid>

                <Grid container mt={2} flexWrap={'nowrap'}>

                    <LastIncidentsSection/>

                    <Grid ml={2} container item xs={4} flexDirection={"column"} flexWrap={'nowrap'}>

                        <ProgramSection/>
                        <SitesSection/>

                    </Grid>

                </Grid>

            </Grid>

        </Page>
    )
}
export default Main