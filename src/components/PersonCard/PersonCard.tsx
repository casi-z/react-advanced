import React, {ReactChild, FC, useEffect} from 'react'
import {Avatar, Box, Chip, Divider, Grid, Typography, useTheme} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {selectPersonAction} from "@/store/personsReducer";
import {IState} from "@/types/types";

const {log} = console

interface PersonCardProps {

    name: string,
    job: string,
    avatar: string,
    lateness?: number,
    disablePadding?: boolean,


}

const PersonCard: FC<PersonCardProps> = ({name, job, avatar, lateness, disablePadding}) => {

    const theme = useTheme()
    const dispatch = useDispatch()
    const persons = useSelector((state: IState )=> state.persons.persons)
    const reduxSelectedPerson = useSelector((state: IState )=> state.persons.selected)

    function handleClick(){

        const selectedPerson = persons.filter(person => person.name === name)[0]

        dispatch(selectPersonAction(selectedPerson))
    }


    return (
        <Grid
            onClick={handleClick}
            container
            sx={{cursor: 'pointer'}}
            item xs={12}
            flexWrap={"nowrap"}
            alignItems={"center"}
            pl={disablePadding ? 0 : 4}
            pb={1}
            pt={2}

        >

            <Grid item>

                <Avatar src={avatar}>{name[0]}</Avatar>

            </Grid>

            <Grid container item flexDirection={"column"} flexWrap={"nowrap"} ml={1}>

                <Typography whiteSpace={'nowrap'} variant="body2">
                    {name}
                </Typography>

                <Typography whiteSpace={'nowrap'} variant="body1">
                    {job}
                </Typography>

            </Grid>

            {lateness && <Chip label={`${lateness} минут`} color="warning" variant="filled" size={'small'}/>}

        </Grid>
    )
}
export default PersonCard