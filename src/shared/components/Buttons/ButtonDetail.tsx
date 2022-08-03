import { Button, Icon } from '@mui/material';

interface IButtonDetailProps {
    textButton?: string;
    icon?: string;
    showButton?: boolean;
    outlined?: boolean;
    handleButton?: () => void;
}

export const ButtonDetail = ({
    textButton,
    showButton,
    handleButton,
    icon,
    outlined,
}: IButtonDetailProps) => {
    return showButton ? (
        <Button
            variant={outlined ? 'outlined' : 'contained'}
            color='primary'
            disableElevation
            startIcon={<Icon>{icon}</Icon>}
            onClick={handleButton}
        >
            {textButton}
        </Button>
    ) : (
        <></>
    );
};
