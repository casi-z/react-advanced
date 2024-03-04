import { GlobalStyles as MUIGlobalStyles, Theme, useTheme } from '@mui/material'
import Background from '../img/background.png'

export const sitePadding = '0 12vw'

const GlobalStyle = () => {

   
    const theme = useTheme()
    
    return (

        <MUIGlobalStyles styles={{
            '*': {
                boxSizing: 'border-box',
                overflow: 'visible',
                
            },


            'html, body, #root': {
                scrollBehavior: 'smooth',
                fontFamily: `'Open Sans'`,
                width: '100%',
                minHeight: '100%',
                background: theme.palette.secondary.main
            },
            'body':{

            },
            '#root':{
                overflowX: 'hidden',
            }

        }} />

    )
}

export default GlobalStyle