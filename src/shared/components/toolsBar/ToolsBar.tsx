import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface toolsBarInterface {
    searchText?: string;
    showInputSearch?: boolean;
    onChangeSearchText?: (newText: string) => void;
    textNewButton?: string;
    showNewButton?: boolean;
    handleNewButton?: () => void;
}

export const ToolsBar = ({
    searchText = '',
    showInputSearch = false,
    onChangeSearchText,
    textNewButton = 'Nuevo',
    showNewButton = false,
    handleNewButton,
}: toolsBarInterface) => {
    const theme = useTheme();

    return (
        <Box
            component={Paper}
            gap={1}
            height={theme.spacing(7)}
            display='flex'
            marginX={1}
            padding={1}
            paddingX={1}
            flexDirection='row'
            alignItems='center'
        >
            {showInputSearch && (
                <TextField
                    size='small'
                    placeholder='Buscar...'
                    value={searchText}
                    onChange={(e) => onChangeSearchText?.(e.target.value)}
                />
            )}
            <Box display='flex' flex={1} justifyContent='end'>
                {showNewButton && (
                    <Button
                        variant='contained'
                        color='primary'
                        disableElevation
                        endIcon={<Icon>add</Icon>}
                        onClick={handleNewButton}
                    >
                        {textNewButton}
                    </Button>
                )}
            </Box>
        </Box>
    );
};
