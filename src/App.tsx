import { AppRoutes } from './routes';
import { Sidebar } from './shared/components';

export const App = () => {
    return (
        <Sidebar>
            <AppRoutes />
        </Sidebar>
    );
};

export default App;
