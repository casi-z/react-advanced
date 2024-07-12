import React, {FC, useMemo} from 'react';
import {CssBaseline} from "@mui/material"
import {createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider} from '@mui/material/styles'
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {


    //Создаю тему
    const theme = useMemo(() => createTheme({

            //Цвета для всего сайта
            palette: {

                //Цвета для тёмной темы
                primary: {
                    main: '#49b7f9'
                },
                text: {
                    primary: '#f5f5f5',
                    secondary: '#49b7f9',
                    disabled: 'rgba(255, 255, 255, 0.81)',
                },
                secondary: {
                    light: '#F49137',
                    main: 'rgb(43, 45, 48)',
                    dark: 'rgb(68,68,68)'

                },
                success: {
                    main: '#238636'
                }


            },
            //Кастомизация компонента Typography
            typography: {
                h2: {
                    color:  '#f5f5f5',
                    fontSize: '18px',
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: '22px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                h6: {
                    color: '#f5f5f5',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.14px',
                    fontStyle: "normal",
                    lineHeight: '18px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                body1: {
                    color: '#f5f5f5',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '0.14px',
                    fontStyle: "normal",
                    lineHeight: '17px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                body2: {
                    color:  '#fff',
                }

            }

        }), []
    )


    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyle/>
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeProvider;