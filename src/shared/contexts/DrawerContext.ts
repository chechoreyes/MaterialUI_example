import {
    createContext,
    useCallback,
    useState,
    useMemo,
    useContext,
} from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/material';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}
3
export interface Props {
    children: JSX.Element | JSX.Element[];
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const Provider = ({ children }: Props) => {
    const [themeName, setThemeName] = useState<boolean>(false);
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
        <DrawerContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width='100vw'
                    height={'100vh'}
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </DrawerContext.Provider>
    );
};
