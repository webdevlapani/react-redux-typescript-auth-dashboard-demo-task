import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/Auth/authServices';
import { LockOutlined, UserOutlined } from '@ant-design/icons/lib';
import { IRootReducerState } from '../../store/IRootReducer';
import { IAuthState } from '../../store/Auth/authReducer';

import './Login.scss';

const { Text, Title } = Typography;

const tailLayout = {
  wrapperCol: { offset: 9, span: 6 },
};

const titleLayout = {
  wrapperCol: { offset: 10, span: 4 },
};

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onFinish = (values) => {
    dispatch(login(values, () => history.push('/dashboard')));
  };

  // getting auth data from redux
  const auth: IAuthState = useSelector((state: IRootReducerState) => state.auth);

  return (
    <div className="login-container">
      <div className="site-card-border-less-wrapper">
        <Form
          {...tailLayout}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item {...titleLayout}>
            <Title level={3} className="title">
              Dashboard Login
            </Title>
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {auth.error && (
            <Form.Item>
              <Text type="danger">{auth.error}</Text>
            </Form.Item>
          )}
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="login-form-button"
              loading={auth.loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
