import React from "react";
import Money from "./Money";
import Subtotal from "./Subtotal"
import { Row, Col} from 'antd';

const ThirdTier = () => {
  return(
    <>
    <Row gutter={[16,24]}>
      <Col span={12} push={1}><Subtotal/></Col>
      <Col span={12} className="money" pull={1}><Money/></Col>
    </Row>
    </>
  )
}

export default ThirdTier