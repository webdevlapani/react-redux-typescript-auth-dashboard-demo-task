import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined, StopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import './Layout.scss';

const { Sider } = Layout;

const sidebar = [
  {
    key: 1,
    path: '/',
    value: 'Dashboard',
    icon: <UserOutlined />,
  },
  {
    key: 2,
    path: '/settings',
    value: 'Settings',
    icon: <StopOutlined />,
  },
];

/**
 * Layout components
 * @param props
 * @constructor
 */
const SideBar: FC = () => {
  return (
    <>
      <Sider width={250} className="site-layout-background fix-sider">
        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          {sidebar.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <NavLink to={item.path}>{item.value}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
};

export default SideBar;
