import React, {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'
import styled from 'styled-components'
import Chart from "react-apexcharts";
import {IRadialBarDataItem} from "@/types/types";

const {log} = console



interface RadialBarProps {

    data: IRadialBarDataItem[]

}


const RadialBar: FC<RadialBarProps> = ({data}) => {

    const theme = useTheme()

    const diagram = {
        options: {
            labels: data.map(dataItem => dataItem.name),
            colors: data.map(dataItem => dataItem.color),
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '50px'
                }
            },

        },
        series: data.map(dataItem => dataItem.procents),


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