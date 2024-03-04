import React, {FC, useEffect, useState} from 'react';
import {CssBaseline} from "@mui/material"
import {ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider} from '@mui/material/styles'
import {useMemo} from "react"
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {


    //Создаю тему

    const theme = useMemo(
        () => createTheme({

            //Цвета для всего сайта
            palette: {
                primary: {
                    main: '#49b7f9'
                },
                text: {
                    primary: '#000',
                    secondary: '#49b7f9',
                    disabled: 'rgba(255, 255, 255, 0.81)',
                    //disabledOpacity: '#fff',
                },
                secondary: {
                    light: '#F49137',
                    main: 'rgb(245, 246, 248)',
                    dark: '#5B41F5',


                },

            },
            //Кастомизация компонента Typography
            typography: {
                h2: {
                    color: 'rgb(77, 77, 77)',
                    fontSize: '18px',
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: '22px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                h6: {
                    color: 'rgb(77, 77, 77)',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.14px',
                    fontStyle: "normal",
                    lineHeight: '18px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                body1: {
                    color: 'rgb(77, 77, 77)',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '0.14px',
                    fontStyle: "normal",
                    lineHeight: '17px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

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