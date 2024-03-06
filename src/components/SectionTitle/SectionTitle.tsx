import React, {ReactChild, FC, ReactNode} from 'react'
import {Box, Divider, Grid, Typography, useTheme} from '@mui/material'
import styled from 'styled-components'

const {log} = console

interface SectionTitleProps {

    children: ReactChild | ReactNode,
    tabs?: ReactChild | ReactNode,

}


const SectionTitle: FC<SectionTitleProps> = ({children, tabs}) => {

    const theme = useTheme()

    const Styles = styled.div`

        //Write your styles here

    `
    return (<>
        <Grid
            container
            pt={2}
            pb={2}
            pl={4}
            flexWrap={"nowrap"}
            alignItems={'center'}
        >
            <Typography variant={'h2'}>
                {children}
            </Typography>
            {tabs}
        </Grid>
        <Divider/>
    </>)
}
export default SectionTitle