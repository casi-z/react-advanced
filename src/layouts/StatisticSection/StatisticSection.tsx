import React, { ReactChild, FC } from 'react'
import {Box, Grid, useTheme} from '@mui/material'
import StatisticCard from "@/components/StatisticCard/StatisticCard";
import {IStatisticItem} from "@/types/types";

const { log } = console

interface StatisticSectionProps {
   
   data: IStatisticItem[]
   
}

const StatisticSection: FC<StatisticSectionProps> = ({ data }) => {
const theme = useTheme()

    return(
        <Grid container spacing={2} flexDirection={{md: 'row', xs: 'column'}}>

            {data.map(item =>
                <Grid container item md={12 / data.length} flexDirection={"column"}>
                    <StatisticCard
                        data={item}
                    />
                </Grid>
            )}

        </Grid>
    )
}
export default StatisticSection