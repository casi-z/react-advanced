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
                    // minHeight: '100%',
                    background: theme.palette.secondary.main
                },

                '#root': {
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0
                },
                '.swiper-pagination': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                },
                '.swiper-pagination-bullet': {
                    background: '#36c650',
                    width: 12,
                    height: 12,
                    borderRadius: 0,
                    marginBottom: 12,
                    transform: 'rotate(45deg)'

                }



            }}
        />

    )
}

export default GlobalStyle