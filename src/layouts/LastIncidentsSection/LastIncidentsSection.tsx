import React, {FC, ReactChild} from 'react'
import {Button, Divider, Grid, Paper, Typography} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import PersonCard from "@/components/PersonCard/PersonCard";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface LastIncidentsSectionProps {

    children?: ReactChild,

}

const LastIncidentsSection: FC<LastIncidentsSectionProps> = ({children}) => {

    const persons = useSelector((state: IState) => state.persons.persons)

    return (
        <Grid container flexDirection={'column'} item xs={12} md={8}>

            <Paper elevation={0}>

                <SectionTitle>Последние инциденты</SectionTitle>

                <Grid item overflow={'auto'} xs={12}>
                    {persons.map((person, index) => {

                        let stateType;
                        let stateName = person.state.name;

                        switch (person.state.type) {

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


                        return (
                            <React.Fragment key={index}>

                                <Grid container item xs={12} pt={2} pb={2}>

                                    <Grid pl={4} item xs={12}>

                                        <Typography variant="h2">
                                            {stateType} - {stateName}
                                        </Typography>
                                    </Grid>

                                    <PersonCard data={person}/>


                                </Grid>
                                <Divider/>
                            </React.Fragment>
                        )
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