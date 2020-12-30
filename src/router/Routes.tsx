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

/**
 * Register applications all routes here
 * @constructor
 */
const Routes: FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <LoginRoute exact path="/login" component={Login} />
        <Layout>
          <TopBar />
          <Layout>
            <SideBar />
            <Layout className="content-layout">
              <Content className="site-layout-background content-layout-section">
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute exact path="/settings" component={Settings} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
