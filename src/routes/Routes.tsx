import { Routes as Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { routeEnums } from '../enums/RouteEnums';

const Routes = () => {
    return (
        <Switch>
            <Route
                index
                path={routeEnums.LOGIN_SCREEN}
                element={<LoginPage />}
            />
        </Switch>
    );
};

export default Routes;
