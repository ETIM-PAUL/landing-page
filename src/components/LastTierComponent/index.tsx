import React from "react";
import Complete from "./Complete";
import Total from "./Total"
import { Row, Col} from 'antd';

const LastTier = () => {
  return(
    <>
    <Row gutter={[16,24]}>
      <Col span={12} xs={{span:12,}} md={{span:12,push:1}}><Complete/></Col>
      <Col span={12} xs={{span:12,}} pull={1}><Total/></Col>
    </Row>
    </>
  )
}

export default LastTier