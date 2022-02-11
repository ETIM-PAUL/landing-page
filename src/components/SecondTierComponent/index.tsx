import React from "react";
import Payment from "./Payment";
import Card from "./Card"
import { Row, Col} from 'antd';

const PaymentCard = () => {
  return(
    <>
    <Row gutter={[20,{xs:10}]}>
      <Col span={12} xs={{span:24}} md={12} push={1}><Payment/></Col>
      <Col span={12} xs={{span:24,}} md={{span:12,pull:1}}  ><Card/></Col>
    </Row>
    </>
  )
}
export default PaymentCard