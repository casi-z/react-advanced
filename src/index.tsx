import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './theme';
import '@/fonts/Pretoria Deco.ttf'
import '@/index.css'

import {Provider as ReduxProvider} from "react-redux";
import {store} from "@/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <ReduxProvider store={store}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </ReduxProvider>
)
