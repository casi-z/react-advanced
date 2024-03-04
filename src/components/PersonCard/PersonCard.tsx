import usePersonCardStyles from './PersonCard.style'
import React, {ReactChild, FC} from 'react'
import {Avatar, Box, Chip, Divider, Grid, Typography, useTheme} from '@mui/material'

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
    const Styles = usePersonCardStyles(theme)

    return (
        <Grid
            container
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