import React from 'react';
import { Space, Avatar, Row, Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Heading = () =>  {
  return (
    <>
    <br/>
    <Row>
      <Col>
      <Space size={30}>
        <a href="#"><b>TRIPS</b></a>
        <a href="#"><b>RECENTLY VIEWED</b></a>
        <a href="#"><b>BOOKINGS</b></a>
          <Avatar size={50} style={{backgroundColor: '#87d068'}}>
            <UserOutlined/>
          </Avatar>
      </Space>   
      </Col>
    </Row>
  </>
  )
}

export default Heading;