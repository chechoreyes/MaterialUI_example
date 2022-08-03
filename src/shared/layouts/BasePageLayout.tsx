import {
    Box,
    IconButton,
    Icon,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { Theme } from '@mui/system';
import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useDrawerContext } from '../contexts/DrawerContext';

interface Props {
    children?: JSX.Element | JSX.Element[] | ReactNode;
    titulo: string;
    toolBar: ReactNode;
}

export const BasePageLayout = ({ children, titulo, toolBar }: Props) => {
    const smDown = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const mdDown = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Helmet>
                <title>{`${titulo} | MUI Example`}</title>
            </Helmet>

            <Box
                height='100%'
                display='flex'
                flexDirection='column'
                alignContent='center'
                gap={1}
            >
                <Box
                    padding={1}
                    height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
                    display='flex'
                    alignItems='center'
                    justifyContent='flex-start'
                >
                    {smDown && (
                        <IconButton onClick={toggleDrawerOpen}>
                            <Icon>menu</Icon>
                        </IconButton>
                    )}
                    <Typography
                        variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                        overflow='hidden'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                    >
                        {titulo}
                    </Typography>
                </Box>

                {toolBar && <Box>{toolBar}</Box>}

                <Box flex={1} overflow='auto'>
                    {children}
                </Box>
            </Box>
        </>
    );
};
