
import React, {ReactChild, FC, useState} from 'react'
import {Box, Button, Grid, Paper, Tab, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ItemCard from "@/components/ItemCard/ItemCard";
import Sites from "@/layouts/Sites/Sites";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


const {log} = console

interface SitesSectionProps {

    children?: ReactChild,

}

const SitesSection: FC<SitesSectionProps> = ({children}) => {

    const theme = useTheme()

    const sites = useSelector((state: IState) => state.sites.sites)

    const [selectedTab, setSelectedTab] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newSelectedTab: string) => {
        setSelectedTab(newSelectedTab);
    };
    return (
        <Grid sx={{overflowY: 'scroll'}} container height={'50%'}>

            <Paper elevation={0}>

                <Grid container>

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

                        <Grid container item xs={12}>

                            <TabPanel sx={{padding: 0}} value="1">

                                <Grid height={'100%'} container item xs={12}>

                                    <Sites data={sites} get={"popular"}/>


                                </Grid>

                            </TabPanel>

                            <TabPanel sx={{padding: 0}} value="2">

                                <Grid height={'100%'} container item xs={12}>

                                    <Sites data={sites} get={"illegal"}/>

                                </Grid>

                            </TabPanel>


                        </Grid>
                    </TabContext>

                </Grid>

                <Button fullWidth>
                    Все сайты
                </Button>

            </Paper>

        </Grid>
    )
}
export default SitesSection