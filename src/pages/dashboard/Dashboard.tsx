import { FC } from 'react';
import { DetailsBar, ToolsBar } from '../../shared/components';
import { BasePageLayout } from '../../shared/layouts';

export const Dashboard: FC = () => {
    return (
        <BasePageLayout
            titulo='Página Inicial'
            toolBar={<DetailsBar />}
        ></BasePageLayout>
    );
};
