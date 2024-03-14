import {GlobalStyles as MUIGlobalStyles, useTheme} from '@mui/material'


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
            'body': {},
            '#root': {
                overflowX: 'hidden',
            }

        }}/>

    )
}

export default GlobalStyle