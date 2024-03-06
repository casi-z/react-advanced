import React, {ReactChild, FC, useState} from 'react'
import {Box, Button, Divider, Grid, Paper, Tab, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Sites from "@/layouts/Sites/Sites";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


const {log} = console

interface ProgramSectionProps {

    children?: ReactChild,

}

const ProgramSection: FC<ProgramSectionProps> = ({children}) => {
    const theme = useTheme()

    const [selectedTab, setSelectedTab] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newSelectedTab: string) => {
        setSelectedTab(newSelectedTab);
    };

    const programs = useSelector((state: IState) => state.programs.programs)

    return (
        <Grid mb={2} sx={{overflowY: 'scroll', height: '50%'}} flexGrow={0} container item>

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

                            Программы

                        </SectionTitle>

                        <Grid container item xs={12}>

                            <TabPanel sx={{padding: 0}} value="1">

                                <Grid height={'100%'} container item xs={12}>

                                    <Sites data={programs} get={"popular"}/>


                                </Grid>

                            </TabPanel>

                            <TabPanel sx={{padding: 0}} value="2">

                                <Grid height={'100%'} container item xs={12}>

                                    <Sites data={programs} get={"illegal"}/>

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
export default ProgramSection