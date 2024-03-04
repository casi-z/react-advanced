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

const {log} = console

interface LegendCardProps {

    tumbColor: string,
    name: string,
    time: string,
    procents: number,


}


const LegendCard: FC<LegendCardProps> = ({name, time, procents, tumbColor}) => {

    const theme = useTheme()

    const Styles = styled.div`
        .LegendCard__name {
            position: relative;
        }

        .tumb {
            border-radius: 50%;
            background: ${tumbColor};
            width: 8px;
            height: 8px;
            position: absolute;
            top: 50%;
            transform: translate(-200%, -50%);


        }

    `
    return (<>
        <Paper elevation={0} component={Styles}>

            <Grid
                container
                flexDirection={"column"}
                rowSpacing={1}
                pl={3}
                pr={3}
                pt={2}
                pb={2}


            >

                <Typography className={'LegendCard__name'} variant="h6">
                    <Box className={'tumb'} component={'div'}></Box>
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