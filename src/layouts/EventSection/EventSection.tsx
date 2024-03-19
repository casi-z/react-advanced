import React, {FC} from 'react'
import {Button, Chip, Divider, Grid, Paper} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";


interface EventSectionProps {


}

const EventSection: FC<EventSectionProps> = ({}) => {

    return (
        <Grid height={'100%'} mr={{md: 2, xs: 0}} item xs={12} md={5}>

            <Paper elevation={0} sx={{height: '100%'}}>

                <SectionTitle>
                    Статистика событий
                </SectionTitle>

                <Grid
                    sx={{ overflowY: 'auto'}}
                    height={'82.4%'}
                    rowSpacing={3}
                    flexDirection={'column'}
                    flexWrap={'nowrap'}
                    container
                    item
                    xs={12}
                    mt={0}
                    pl={3}
                    pt={3}
                    pb={3}
                >

                    <Grid item>
                        <Chip label="Опозданиe: 3" color="error" variant="filled" size={'small'}/>
                    </Grid>

                    <Grid item>
                        <Chip label="Ранний уход: 1" color="error" variant="filled" size={'small'}/>
                    </Grid>

                    <Grid item>
                        <Chip label="Прогул: 1" color="error" variant="filled" size={'small'}/>
                    </Grid>

                </Grid>

                <Divider/>


                <Button size={'large'} fullWidth>
                    Подробная статистика
                </Button>
            </Paper>

        </Grid>

    )
}
export default EventSection