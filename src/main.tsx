import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { Sidebar } from './shared/components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppThemeProvider>
            <DrawerProvider>
                <BrowserRouter>
                    <CssBaseline />
                    <App />
                </BrowserRouter>
            </DrawerProvider>
        </AppThemeProvider>
    </React.StrictMode>
);
