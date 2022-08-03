import { createContext, useCallback, useState, useContext } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}
3;
interface Props {
    children: JSX.Element | JSX.Element[];
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};
