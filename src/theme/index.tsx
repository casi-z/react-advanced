import React, {FC, useMemo} from 'react';
import {CssBaseline} from "@mui/material"
import {createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider} from '@mui/material/styles'
import GlobalStyle from "./GlobalStyle"
import {useSelector} from "react-redux";
import {IState} from "@/types/types";

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const themeMode = useSelector((state: IState) => state.theme.mode)

    //Создаю тему
    const theme = useMemo(() => createTheme({

            //Цвета для всего сайта
            palette: {
                mode: themeMode,
                ...themeMode === 'light'
                    ?{
                        //Цвета для светлой темы
                        primary: {
                            main: '#49b7f9',
                            light: '#f4faff'
                        },
                        text: {
                            primary: '#000',
                            secondary: '#49b7f9',
                            disabled: 'rgba(255, 255, 255, 0.81)',
                        },
                        secondary: {
                            light: '#F49137',
                            main: 'rgb(245, 246, 248)',


                        },

                    }
                    : {
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


                        },

                    },



            },
            //Кастомизация компонента Typography
            typography: {
                h2: {
                    color: themeMode === 'light' ? 'rgb(77, 77, 77)' : '#f5f5f5',
                    fontSize: '18px',
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: '22px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                h6: {
                    color: themeMode === 'light' ? 'rgb(77, 77, 77)' : '#f5f5f5',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.14px',
                    fontStyle: "normal",
                    lineHeight: '18px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                body1: {
                    color: themeMode === 'light' ? 'rgb(77, 77, 77)' : '#f5f5f5',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '0.14px',
                    fontStyle: "normal",
                    lineHeight: '17px',
                    fontFamily: 'Montserrat, "sans-serif"'
                },

                body2: {
                    color: themeMode === 'light' ? '#000' : '#fff',
                }

            }

        }), [themeMode]
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