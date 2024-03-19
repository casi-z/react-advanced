import React, {FC, ReactChild, useState} from 'react'
import {Button, Divider, Grid, Paper, Tab} from '@mui/material'
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
        <Paper elevation={0} sx={{height: '49.25%'}}>

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

                        Программы

                    </SectionTitle>


                    <TabPanel sx={{padding: 0, overflowY: 'auto'}} value="1">

                        <Sites data={programs} get={"popular"}/>

                    </TabPanel>

                    <TabPanel sx={{padding: 0, overflowY: 'auto'}} value="2">

                        <Sites data={programs} get={"illegal"}/>

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
export default ProgramSection