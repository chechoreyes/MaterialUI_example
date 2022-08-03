import { FC } from 'react';
import { BasePageLayout } from '../../shared/layouts';

export const Dashboard: FC = () => {
    return (
        <BasePageLayout
            titulo='Página Inicial'
            toolBar={<>Barra de Herramientas</>}
        >
            <p>Holi</p>
        </BasePageLayout>
    );
};
