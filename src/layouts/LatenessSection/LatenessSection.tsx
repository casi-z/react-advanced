import React, {FC, ReactChild} from 'react'
import {Button, Divider, Grid, Paper} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import PersonCard from "@/components/PersonCard/PersonCard";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface LatenessSectionProps {

    children?: ReactChild,

}

const LatenessSection: FC<LatenessSectionProps> = ({children}) => {

    const persons = useSelector((state: IState) => state.persons.persons)

    const latecomePersons = persons.filter(person => person.lateness.length !== 0)

    return (

        <Grid height={'100%'} item xs={12} md={7}>

            <Paper elevation={0} sx={{height: '100%'}}>

                <SectionTitle>Опоздания</SectionTitle>


                <Grid
                    sx={{overflowY: 'auto'}}
                    height={'82.4%'}
                    item
                    xs={12}
                >
                    {latecomePersons.map((person, index) => (

                        <React.Fragment key={index}>

                            <PersonCard
                                data={person}
                            />
                            <Divider/>

                        </React.Fragment>

                    ))}
                </Grid>


                <Divider/>


                <Button size={'large'} fullWidth>
                    Подробная статистика
                </Button>

            </Paper>

        </Grid>
    )
}
export default LatenessSection