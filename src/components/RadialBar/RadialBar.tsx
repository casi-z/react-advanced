import React, {FC} from 'react'
import Chart from "react-apexcharts";
import {IRadialBarDataItem} from "@/types/types";


interface RadialBarProps {

    data: IRadialBarDataItem[]

}


const RadialBar: FC<RadialBarProps> = ({data}) => {


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