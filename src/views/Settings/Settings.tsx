import React, { FC, useEffect } from 'react';
import { Col, Divider, Row, Table, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBootcamps } from '../../store/Bootcamp/bootcampServices';
import { IRootReducerState } from '../../store/IRootReducer';

const { Title } = Typography;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
    render: (text) => (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const Settings: FC = () => {
  const dispatch = useDispatch();

  // getting currentUser data from redux
  const bootCamps = useSelector((state: IRootReducerState) => state.bootCamps);

  useEffect(() => {
    dispatch(getBootcamps());
  }, [dispatch]);
  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3}>Bootcamp List</Title>
          <Divider />
        </Col>

        <Col span={24}>
          <Table dataSource={bootCamps.bootCamps} columns={columns} />;
        </Col>
      </Row>
    </>
  );
};

export default Settings;
