import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '../../common/utilities/auth/auth';
import { IExtendedRouteProps } from '../interface/Routes';

/**
 * Private route need auth before enter into this route else redirected on login
 * @param Component
 * @param rest
 * @constructor
 */
const PrivateRoute: FC<IExtendedRouteProps> = ({ component: Component, ...rest }) => (
  <Route
    render={(props: RouteComponentProps) =>
      isLogin() ? <Component {...props} /> : <Redirect to="/login" />
    }
    {...rest}
  />
);

export default PrivateRoute;
