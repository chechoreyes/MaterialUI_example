import { Box, Button, Paper, useTheme, Icon, Divider } from '@mui/material';
import { ButtonDetail } from '../Buttons/ButtonDetail';

export const DetailsBar = () => {
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
            <ButtonDetail
                showButton={true}
                textButton='Guardar'
                icon='save'
                outlined={false}
            />

            <ButtonDetail
                showButton={false}
                textButton='Guardar y Regresar'
                icon='save'
                outlined={true}
            />
            <ButtonDetail
                showButton={true}
                textButton='Borrar'
                icon='delete'
                outlined={true}
            />
            <ButtonDetail
                showButton={true}
                textButton='Nuevo'
                icon='add'
                outlined={true}
            />

            <Divider variant='middle' orientation='vertical' />

            <ButtonDetail
                showButton={true}
                textButton='Regresar'
                icon='arrow_back'
                outlined={true}
            />
        </Box>
    );
};
