import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import styled from 'styled-components'

const { log } = console

interface MainTabsProps {
   
   children?: ReactChild,
   
}


const MainTabs: FC<MainTabsProps> = ({ children }) => {

const theme = useTheme()

const Styles = styled.div`

    //Write your styles here

`
    return(
       <Styles className="MainTabs">
          
       </Styles>
    )
}
export default MainTabs