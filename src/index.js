import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import store from './store/store';
import { Provider } from 'react-redux';

// @mui theme
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: ['Roboto Slab', 'serif'].join(','),
    },
    palette: {
        primary: {
            main: '#021859',
            light: '#173F73',
        },
        secondary: {
            main: '#384001',
            light: '#97A626',
        },
        background: {
            main: '#FEFFFA',
            dark: '#F6FAFF',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
