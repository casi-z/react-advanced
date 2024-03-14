import React, {FC, ReactChild, useState} from 'react'
import {Button, Grid, Paper, Tab} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Sites from "@/layouts/Sites/Sites";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface ProgramSectionProps {

    children?: ReactChild,

}

const ProgramSection: FC<ProgramSectionProps> = ({children}) => {

    const [selectedTab, setSelectedTab] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newSelectedTab: string) => {
        setSelectedTab(newSelectedTab);
    };

    const programs = useSelector((state: IState) => state.programs.programs)
    const onlyPrograms = programs.filter(program => program.type === 'program')

    return (
        <Grid mb={2} sx={{height: '50%'}} flexGrow={0} container>

            <Paper elevation={0}>

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

                                <Sites data={onlyPrograms} get={"popular"}/>


                            </Grid>

                        </TabPanel>

                        <TabPanel sx={{padding: 0}} value="2">

                            <Grid height={'100%'} container item xs={12}>

                                <Sites data={onlyPrograms} get={"illegal"}/>

                            </Grid>

                        </TabPanel>


                    </Grid>
                </TabContext>


            </Paper>

            <Paper elevation={0} square>
                <Button size={'large'} fullWidth>Подробная статистика</Button>
            </Paper>

        </Grid>
    )
}
export default ProgramSection