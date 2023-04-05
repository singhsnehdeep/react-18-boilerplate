import { Routes as Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const Routes = () => {
    return (
        <Switch>
            <Route index path="/" element={<LoginPage />} />
        </Switch>
    );
};

export default Routes;
