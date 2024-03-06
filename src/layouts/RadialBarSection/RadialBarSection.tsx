import React, {ReactChild, FC} from 'react'
import {Box, Button, Divider, Grid, Paper, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import RadialBar from "@/components/RadialBar/RadialBar";
import LegendCard from "@/components/LegendCard/LegendCard";
import {IRadialBarDataItem} from "@/types/types";

const {log} = console

interface RadialBarSectionProps {

    radialBarData: IRadialBarDataItem[]

}

const RadialBarSection: FC<RadialBarSectionProps> = ({radialBarData}) => {

    return (
        <Grid height={'100%'} item xs={12} md={4}>

            <Paper elevation={0}>

                <SectionTitle>
                    Статистика рабочего времени
                </SectionTitle>

                <RadialBar data={radialBarData}/>

                {radialBarData.map(element => (<>

                    <LegendCard
                        color={element.color}
                        name={element.name}
                        time={element.time}
                        procents={element.procents}
                    />
                    <Divider/>
                </>))}

                <Button size={'large'} fullWidth>Подробная статистика</Button>

            </Paper>

        </Grid>
    )
}
export default RadialBarSection