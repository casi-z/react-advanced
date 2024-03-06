import {ReactChild, FC} from 'react'
import {Box, Divider, Grid, Typography, useTheme} from '@mui/material'
import styled from 'styled-components'

const {log} = console

interface ItemCardProps {

    title: string,
    info: string,

}


const ItemCard: FC<ItemCardProps> = ({title, info}) => {

    const theme = useTheme()


    return (<>
        <Grid
            container
            item
            justifyContent={"space-between"}
            pl={3}
            pr={2}
            pt={2}
            pb={2}
        >
            <Typography variant="body1">
                {title}
            </Typography>

            <Typography variant="body1">
                {info}
            </Typography>

        </Grid>
        <Divider/>
    </>)
}
export default ItemCard