import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { AppThemeProvider } from './shared/contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppThemeProvider>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </AppThemeProvider>
    </React.StrictMode>
);
