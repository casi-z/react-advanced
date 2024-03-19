import React, {FC, ReactChild, useState} from 'react'
import {Button, Divider, Grid, Paper, Tab, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Sites from "@/layouts/Sites/Sites";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface SitesSectionProps {

    children?: ReactChild,

}

const SitesSection: FC<SitesSectionProps> = ({children}) => {

    const theme = useTheme()

    const programs = useSelector((state: IState) => state.programs.programs)
    const sites = programs.filter(program => program.type === 'site')

    const [selectedTab, setSelectedTab] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newSelectedTab: string) => {
        setSelectedTab(newSelectedTab);
    };
    return (


        <Paper elevation={0} sx={{height: '49.25%', mt: {md: 0, xs: 2}}}>

            <Grid container height={'92%'} flexDirection={'column'} flexWrap={'nowrap'}>

                <TabContext value={selectedTab}>

                    <SectionTitle

                        tabs={
                            <TabList onChange={handleChange}>

                                <Tab label="Популярные" value="1"/>
                                <Tab label="Запрещённые" value="2"/>

                            </TabList>
                        }
                    >

                        Сайты

                    </SectionTitle>


                    <TabPanel sx={{padding: 0, overflowY: 'auto'}} value="1">

                        <Sites data={sites} get={"popular"}/>

                    </TabPanel>

                    <TabPanel sx={{padding: 0, overflowY: 'auto'}} value="2">

                        <Sites data={sites} get={"illegal"}/>

                    </TabPanel>


                </TabContext>

            </Grid>
            <Divider/>
            <Button fullWidth>
                Все сайты
            </Button>

        </Paper>

    )
}
export default SitesSection