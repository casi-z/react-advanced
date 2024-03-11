
import React, {ReactChild, FC} from 'react'
import {Box, Button, Divider, Grid, Paper, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import PersonCard from "@/components/PersonCard/PersonCard";
import {persons} from "@/data/fake/persons";

const {log} = console

interface LatenessSectionProps {

    children?: ReactChild,

}

const LatenessSection: FC<LatenessSectionProps> = ({children}) => {
    const theme = useTheme()

    const latecomePersons = persons.filter(person => person.lateness.length !== 0)

    return (

        <Grid height={'100%'} item xs={12} md={7}>

            <Paper elevation={0}>
                <SectionTitle>Опоздания</SectionTitle>
                <Divider/>
            </Paper>

            <Paper elevation={0} sx={{maxHeight: '100%'}}>


                <Grid
                    container
                    spacing={2}
                    pl={2}
                    pb={2}
                >
                    {latecomePersons.map(person => (<>

                        <PersonCard
                            data={person}
                        />
                        <Divider/>

                    </>))}

                </Grid>

                <Divider/>



            </Paper>

            <Paper elevation={0}>

                <Grid item xs={12}>
                    <Button fullWidth>
                        Подробная статистика
                    </Button>
                </Grid>
            </Paper>

        </Grid>
    )
}
export default LatenessSection