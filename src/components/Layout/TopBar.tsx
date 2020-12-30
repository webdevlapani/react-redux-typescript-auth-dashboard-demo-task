import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './Layout.scss';
import { LogoutOutlined } from '@ant-design/icons/lib';

const { Header } = Layout;

/**
 * component for top navbar menu item
 * @constructor
 */
const TopBar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('accessToken');
    history.push('/login');
  };

  return (
    <>
      <Header className="fix-topbar">
        <div className="logo"> Dashboard </div>
        <Menu theme="dark" mode="horizontal" className="logout">
          <Menu.Item onClick={logout}>
            <LogoutOutlined /> Logout
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default TopBar;
