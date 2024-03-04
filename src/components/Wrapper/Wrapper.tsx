import {ReactChild, FC, ReactNode} from 'react'
import {Box, Grid, useTheme} from '@mui/material'
import {sitePadding} from "@/theme/GlobalStyle";
import styled from 'styled-components';
import Footer from '@/layouts/Footer/Footer';

const {log} = console

interface WrapperProps {

    children: ReactChild | ReactNode,

}


const Wrapper: FC<WrapperProps> = ({children}) => {

   

    const theme = useTheme() 
 const Styles = styled.div`
      
      position: relative;
      overflow: visible;
      padding: ${sitePadding};

      ${theme.breakpoints.down('md')} {
        padding: 0 5px;
      }

      z-index: 2;


    `

    return (
        <Box component={Styles} className="Wrapper wrapper">
            {children}

        </Box>
    )
}
export default Wrapper