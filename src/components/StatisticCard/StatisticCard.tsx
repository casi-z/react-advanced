import React, {ReactChild, FC} from 'react'
import {Box, Grid, Paper, Typography, useTheme} from '@mui/material'
import styled from 'styled-components'
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import {IStatisticItem} from "@/types/types";

const {log} = console

interface StatisticCardProps {
    data: IStatisticItem


}


const StatisticCard: FC<StatisticCardProps> = ({data}) => {

    const theme = useTheme()

    const Styles = styled.div`

        //Write your styles here

    `
    return (
        <Paper elevation={0}>
            <Grid item xs={12} pl={2} pr={2} pt={2} pb={2}>


                <Grid container item justifyContent={"space-between"} xs={12} pb={2}>

                    <Typography variant={'h6'}>
                        {data.name}
                    </Typography>

                    <Typography variant="body1">
                        {data.procents.toFixed(2)}%
                    </Typography>

                </Grid>

                <ProgressBar progress={data.procents} color={data.color}/>
                <Grid item pt={2}>
                    <Typography variant="body1">
                        {data.time}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default StatisticCard