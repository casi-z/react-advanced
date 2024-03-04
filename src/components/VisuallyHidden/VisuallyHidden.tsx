import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import styled from 'styled-components'

const { log } = console

interface VisuallyHiddenProps {

    children: String,

}


const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children }) => {

    const theme = useTheme()
    const Styles = styled.span`
      visibility: hidden;
      opacity: 0;


    `

    return (

        <Box component={Styles} className="VisuallyHidden">
            {children}
        </Box>
    )
}
export default VisuallyHidden