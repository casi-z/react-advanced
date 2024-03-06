import useEventSectionStyles from './EventSection.style'
import React, {ReactChild, FC} from 'react'
import {Box, Button, Chip, Divider, Grid, Paper, Stack, useTheme} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const {log} = console

interface EventSectionProps {


}

const EventSection: FC<EventSectionProps> = ({}) => {
    const theme = useTheme()
    const Styles = useEventSectionStyles(theme)

    return (
        <Grid minHeight={'100%'} mr={{md: 2, xs: 0}} item xs={12} md={5}>

            <Paper elevation={0}>

                <SectionTitle>
                    Статистика событий
                </SectionTitle>

                <Grid

                    rowSpacing={3}
                    flexDirection={'column'}
                    container
                    item
                    xs={8}
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

                <Button fullWidth>
                    Подробная статистика
                </Button>

            </Paper>

        </Grid>

    )
}
export default EventSection