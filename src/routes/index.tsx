import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

    useEffect(() => {
        setDrawerOption([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Pagina Inicial',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route
                path='/pagina-inicial'
                element={
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={toggleDrawerOpen}
                    >
                        Toggle drawer
                    </Button>
                }
            />
            <Route path='*' element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    );
};
