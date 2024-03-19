import {GlobalStyles as MUIGlobalStyles, useTheme} from '@mui/material'


const GlobalStyle = () => {


    const theme = useTheme()

    return (

        <MUIGlobalStyles
            styles={{
                '*': {
                    boxSizing: 'border-box',
                    overflow: 'visible',
                    [theme.breakpoints.up('md')]: {
                        '&::-webkit-scrollbar': {
                            width: 6,
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'none'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: theme.palette.secondary.dark,
                            borderRadius: 20,
                        },
                    }
                },


                'html, body, #root': {
                    scrollBehavior: 'smooth',
                    fontFamily: `'Open Sans'`,
                    width: '100%',
                    minHeight: '100%',
                    background: theme.palette.secondary.main
                },

                '#root': {
                    overflowX: 'hidden',
                }

            }}
        />

    )
}

export default GlobalStyle