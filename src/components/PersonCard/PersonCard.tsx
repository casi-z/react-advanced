import React, {ReactChild, FC, useEffect} from 'react'
import {Avatar, Box, Chip, Divider, Grid, Typography, useTheme} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {selectPersonAction} from "@/store/personsReducer";
import {IPerson, IState} from "@/types/types";
import {setModalNameAction} from "@/store/modalReducer";
import stringToColor from "@/utils/stringToColor";

const {log} = console

interface PersonCardProps {

    data: IPerson,
    disablePadding?: boolean,
    noClickable?: boolean,


}

const PersonCard: FC<PersonCardProps> = (
    {
        data,

        disablePadding,
        noClickable
    }
) => {

    const theme = useTheme()
    const dispatch = useDispatch()
    const persons = useSelector((state: IState) => state.persons.persons)

    function handleClick() {

        if (!noClickable) {
            const selectedPerson = persons.filter(person => person.name === data.name)[0]

            dispatch(selectPersonAction(selectedPerson))
            dispatch(setModalNameAction('person'))
        }

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

                <Avatar
                    src={data.avatar}
                    sx={{
                        bgcolor: stringToColor(data.name),
                    }}

                >
                    {data.surname[0]}
                    {data.name[0]}
                </Avatar>

            </Grid>

            <Grid container item flexDirection={"column"} flexWrap={"nowrap"} ml={1}>

                <Typography whiteSpace={'nowrap'} variant="body2">
                    {data.surname} {data.name} {data.lastname}
                </Typography>

                <Typography whiteSpace={'nowrap'} variant="body1">
                    {data.job} / {data.department}
                </Typography>

            </Grid>

            {/*{lateness && <Chip label={`${lateness} минут`} color="warning" variant="filled" size={'small'}/>}*/}

        </Grid>
    )
}
export default PersonCard