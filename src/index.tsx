import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './theme';
import '@/fonts/Pretoria Deco.ttf'
import '@/index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
)
