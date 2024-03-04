import useLastIncidentsSectionStyles from './LastIncidentsSection.style'
import React, {ReactChild, FC} from 'react'
import {Box, Button, Divider, Grid, Paper, Typography, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import PersonCard from "@/components/PersonCard/PersonCard";
import persons from "@/data/fake/persons";

const {log} = console

interface LastIncidentsSectionProps {

    children?: ReactChild,

}

const LastIncidentsSection: FC<LastIncidentsSectionProps> = ({children}) => {
    const theme = useTheme()
    const Styles = useLastIncidentsSectionStyles(theme)

    return (
        <Grid container flexDirection={'column'} item xs={8}>

            <Paper elevation={0}>

                <SectionTitle>Последние инциденты</SectionTitle>

                <Grid item overflow={'scroll'} xs={12}>
                    {persons.map(person => {

                        let stateType;
                        let stateName = person.state.name;

                        switch (person.state.type){

                            case 'site':
                                stateType = "Сайт"
                                break
                            case 'program':
                                stateType = "Приложение"
                                break
                            case 'idle':
                                stateType = "Простой"
                                stateName = `${person.state.time?.hours} ч. ${person.state.time?.minutes} мин.`
                                break
                            default:
                                stateType = ""
                        }


                        return (<>

                            <Grid container item xs={12} pt={2} pb={2}>

                                <Grid pl={4} item xs={12}>

                                    <Typography variant="h2">
                                        {stateType} - {stateName}
                                    </Typography>
                                </Grid>

                                <PersonCard name={person.name} job={person.job} avatar={''}/>



                            </Grid>
                            <Divider/>
                        </>)
                    })}
                </Grid>
                <Button fullWidth>
                    Все инциденты
                </Button>
            </Paper>

        </Grid>
    )
}
export default LastIncidentsSection