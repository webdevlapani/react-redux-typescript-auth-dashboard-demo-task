import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Spin, Typography } from 'antd';
import { getCurrentUser } from '../../store/CurrentUser/currentUserServices';
import { IRootReducerState } from '../../store/IRootReducer';
import { ICurrentUserState } from '../../store/CurrentUser/currentUserReducer';

import './dashboard.scss';

const { Title, Text } = Typography;

/**
 * Login page load when match '/greeting' route
 * @constructor
 */
const Dashboard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // getting currentUser data from redux
  const currentUser: ICurrentUserState = useSelector(
    (state: IRootReducerState) => state.currentUser
  );

  if (currentUser?.loading) {
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={1}>Welcome {currentUser?.user?.name} !</Title>
          <Text type="secondary">Your email is : {currentUser?.user?.email}</Text>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
