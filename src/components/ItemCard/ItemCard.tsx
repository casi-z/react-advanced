import {FC} from 'react'
import {Divider, Grid, Typography, useTheme} from '@mui/material'


interface ItemCardProps {

    title: string,
    info: string,

}


const ItemCard: FC<ItemCardProps> = ({title, info}) => {

    const theme = useTheme()


    return (<>
        <Divider/>
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

    </>)
}
export default ItemCard