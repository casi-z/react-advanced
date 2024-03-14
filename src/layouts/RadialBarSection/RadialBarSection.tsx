import React, {FC} from 'react'
import {Button, Divider, Grid, Paper} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import RadialBar from "@/components/RadialBar/RadialBar";
import LegendCard from "@/components/LegendCard/LegendCard";
import {IRadialBarDataItem} from "@/types/types";


interface RadialBarSectionProps {

    radialBarData: IRadialBarDataItem[]

}

const RadialBarSection: FC<RadialBarSectionProps> = ({radialBarData}) => {

    return (
        <Grid height={'100%'} item xs={12} md={4}>

            <Paper sx={{height: '95%'}} elevation={0}>

                <SectionTitle>
                    Статистика рабочего времени
                </SectionTitle>

                <RadialBar data={radialBarData}/>

                {radialBarData.map((element, index) => (

                    <React.Fragment key={index}>

                        <LegendCard

                            color={element.color}
                            name={element.name}
                            time={element.time}
                            procents={element.procents}
                        />
                        <Divider/>
                    </React.Fragment>

                ))}



            </Paper>
            <Paper elevation={0} square sx={{height: '5%'}}>
                <Button size={'large'} fullWidth>Подробная статистика</Button>
            </Paper>

        </Grid>
    )
}
export default RadialBarSection