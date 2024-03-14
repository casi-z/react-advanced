// @ts-nocheck
import React, {FC, ReactChild} from 'react'
import {Grid, Paper, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Chart from "react-apexcharts";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface DiagrammSectionProps {

    children?: ReactChild,

}

const DiagrammSection: FC<DiagrammSectionProps> = ({children}) => {
    const theme = useTheme()

    const {statistic} = useSelector((state: IState) => state)
    // @ts-ignore
    const diagram = {
        options: {
            // @ts-ignore
            chart: {

                stacked: true,
                stackType: "100%"
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,

                },
            },
            xaxis: {
                categories: [
                    '8ч',
                    '9ч',
                    '10ч',
                    '11ч',
                    '12ч',
                    '13ч',
                    '14ч',
                    '15ч',
                    '16ч',
                ],
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'right',
                offsetX: 0,
                offsetY: 50
            },
        },
        series: [
            {
                name: 'Отвлечения',
                color: 'rgba(255,69,96,0.85)',
                data: [44, 55, 41, 67, 22, 43, 21, 49, 1]
            },
            {
                name: 'Продуктивно',
                data: [13, 23, 20, 8, 13, 27, 33, 12, 0]
            },
            {
                name: 'Простой',
                color: 'rgba(190,190,190,0.85)',
                data: [13, 23, 20, 8, 13, 27, 33, 12, 0]
            },

        ],
    }


    // @ts-ignore
    return (
        <Grid height={'30%'} item mb={3}>
            <Paper elevation={0}>
                <SectionTitle>
                    Статистика рабочего времени
                </SectionTitle>
                {/*@ts-ignore*/}
                <Chart
                    options={diagram.options}
                    series={diagram.series}
                    type="bar"
                    height="100%"

                />
            </Paper>
        </Grid>

    )
}
export default DiagrammSection