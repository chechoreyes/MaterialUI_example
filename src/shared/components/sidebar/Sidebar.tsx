import {
    HomeMaxOutlined,
    HomeOutlined,
    InboxOutlined,
} from '@mui/icons-material';
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrawerContext } from '../../contexts';

interface Props {
    children: JSX.Element | JSX.Element[] | ReactNode;
}

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: () => void;
}

const ListItemLink: FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};

export const Sidebar = ({ children }: Props) => {
    const spacing = 28;
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer
                open={isDrawerOpen}
                variant={smDown ? 'temporary' : 'permanent'}
                onClose={toggleDrawerOpen}
            >
                <Box
                    width={theme.spacing(spacing)}
                    display='flex'
                    flexDirection='column'
                    height={'100%'}
                >
                    <Box
                        width='100%'
                        height={theme.spacing(20)}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Avatar
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12),
                            }}
                            src='https://yt3.ggpht.com/grfYgQadT8iNg9WPb-jkrKB-9224y_DBDXAOtV4Yt7cyQmtR47J_453uveQOTDsp_dRSH851TMM=s108-c-k-c0x00ffffff-no-rj'
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeOutlined />
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box
                height='100vh'
                marginLeft={smDown ? 0 : theme.spacing(spacing)}
            >
                {children}
            </Box>
        </>
    );
};
