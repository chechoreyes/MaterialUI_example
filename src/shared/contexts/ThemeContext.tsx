import {
    createContext,
    useCallback,
    useState,
    useMemo,
    useContext,
} from 'react';
import { DarkTheme, LightTheme } from '../themes';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/material';

interface IThemeContextData {
    themeName: 'Light' | 'Dark';
    toggleTheme: () => void;
}

export interface Props {
    children: JSX.Element | JSX.Element[];
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: Props) => {
    const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light');
    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) =>
            oldThemeName === 'Light' ? 'Dark' : 'Light'
        );
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'Light') return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width='100vw'
                    height={'100vh'}
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
