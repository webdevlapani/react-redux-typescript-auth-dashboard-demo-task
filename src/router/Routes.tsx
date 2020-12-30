import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';
import SideBar from '../components/Layout/SideBar';
import TopBar from '../components/Layout/TopBar';
import Dashboard from '../views/Dashboard/Dashboard';
import LoginRoute from './LoginRoute/LoginRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from '../views/Login/Login';
import Settings from '../views/Settings/Settings';
import store from '../store/store';
import './Routes.scss';

const { Content } = Layout;

/**
 * Creat browser history stack
 */
export const history = createBrowserHistory();

const DashBoardRoutes = () => {
  return <Layout>
    <TopBar />
    <Layout>
      <SideBar />
      <Layout className="content-layout">
        <Content className="site-layout-background content-layout-section">
          <Switch>
            <PrivateRoute exact path="/dashboard/settings" component={Settings} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute component={() => <div> 404 Page not found </div>} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
}

/**
 * Register applications all routes here
 * @constructor
 */
const Routes: FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <LoginRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard*" component={DashBoardRoutes} />
        <PrivateRoute component={() => <div> 404 Page not found </div>} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
