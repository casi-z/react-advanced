import React, {ReactChild, FC} from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Divider,
    Grid,
    Paper,
    Typography,
    useTheme
} from '@mui/material'
import styled from 'styled-components'
import {IRadialBarDataItem} from "@/types/types";

const {log} = console

interface LegendCardProps extends IRadialBarDataItem{



}


const LegendCard: FC<LegendCardProps> = ({name, time, procents, color}) => {


    return (<>
        <Paper elevation={0} >

            <Grid
                container
                flexDirection={"column"}
                rowSpacing={1}
                pl={3}
                pr={3}
                pt={2}
                pb={2}


            >

                <Typography sx={{position: 'relative'}} variant="h6">
                    <Box
                        sx={{
                            borderRadius: '100%',
                            background: color,
                            width: 8,
                            height: 8,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-200%, -50%)',
                        }}
                    />
                    {name}

                </Typography>


                <Grid item container xs={12} justifyContent={"space-between"}>

                    <Typography variant="body1">
                        {time}
                    </Typography>

                    <Typography variant="body1">
                        {procents}%
                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    </>)
}
export default LegendCard