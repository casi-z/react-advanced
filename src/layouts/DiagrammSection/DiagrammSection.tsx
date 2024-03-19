// @ts-nocheck
import React, {FC, ReactChild} from 'react'
import {Grid, Paper, useMediaQuery, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Chart from "react-apexcharts";
import {useSelector} from "react-redux";
import {IState} from "@/types/types";


interface DiagrammSectionProps {

    children?: ReactChild,

}

const DiagrammSection: FC<DiagrammSectionProps> = ({children}) => {
    const theme = useTheme()
    const mobileVersion = useMediaQuery(theme.breakpoints.down('md'))

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
            yaxis: {
                labels: {
                    show: false,
                }
            },
            xaxis: {
                labels: {
                    style: {
                        colors: theme.palette.text.primary
                    }
                },
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
                show: !mobileVersion,
                labels: {
                    colors: theme.palette.text.primary

                },

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
        <Grid
            sx={{
                '.apexcharts-tooltip': {
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                },
            }}
            height={'30%'}
            item
            mb={3}
        >
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