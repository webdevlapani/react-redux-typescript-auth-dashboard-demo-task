import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '../../common/utilities/auth/auth';
import { IExtendedRouteProps } from '../interface/Routes';

/**
 * Login route need not auth if already login redirected on mainRoute
 * @param Component
 * @param rest
 * @constructor
 */
const LoginRoute: FC<IExtendedRouteProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) =>
      !isLogin() ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

export default LoginRoute;
