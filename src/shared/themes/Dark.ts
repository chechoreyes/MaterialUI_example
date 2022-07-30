import { createTheme } from '@mui/material';
import { yellow, cyan } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[600],
            light: yellow[500],
            contrastText: '#fffff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#fffff',
        },
        background: {
            paper: '#303134',
            default: '#212124',
        },
    },
});
