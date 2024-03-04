import React, {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'
import styled from 'styled-components'
import Chart from "react-apexcharts";

const {log} = console

interface IData {
    label: string,
    progress: number,
    color: string,
}

interface RadialBarProps {

    data: IData[]

}


const RadialBar: FC<RadialBarProps> = ({data}) => {

    const theme = useTheme()

    const diagram = {
        options: {
            labels: data.map(dataItem => dataItem.label),
            colors: data.map(dataItem => dataItem.color),
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '50px'
                }
            },

        },
        series: data.map(dataItem => dataItem.progress),


    };

    const Styles = styled.div`

        //Write your styles here

    `
    log(diagram)

    return (
        // @ts-ignore
        <Chart
            // @ts-ignore
            options={diagram.options}
            series={diagram.series}
            type="radialBar"
        />
    )
}
export default RadialBar