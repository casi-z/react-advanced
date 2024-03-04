import useLatenessSectionStyles from './LatenessSection.style'
import React, {ReactChild, FC} from 'react'
import {Box, Button, Divider, Grid, Paper, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import PersonCard from "@/components/PersonCard/PersonCard";
import persons from "@/data/fake/persons";

const {log} = console

interface LatenessSectionProps {

    children?: ReactChild,

}

const LatenessSection: FC<LatenessSectionProps> = ({children}) => {
    const theme = useTheme()
    const Styles = useLatenessSectionStyles(theme)

    const latecomePersons = persons.filter(person => person.lateness.length !== 0)

    return (

        <Grid container item xs={7}>

            <Paper elevation={0}>
                <SectionTitle>Опоздания</SectionTitle>

                <Grid
                    container
                    spacing={2}
                    pl={2}
                    pb={2}
                >
                    {latecomePersons.map(person => (<>

                        <PersonCard
                            name={person.name}
                            job={person.job}
                            avatar={person.avatar}
                            lateness={person.lateness[0]}
                        />
                        <Divider/>

                    </>))}

                </Grid>

                <Divider/>

                <Button fullWidth>
                    Подробная статистика
                </Button>

            </Paper>

        </Grid>
    )
}
export default LatenessSection