import React from "react";
import {Image, Row, Col} from 'antd';
import card1 from '../../images/card1.png'

const Payment = () => {
  return(
    <>
    <Row>
      <Col>
        <div className="payment">
        <h3 className="tot">Payment Information</h3>
        <h5>Choose your method of payment.</h5>
        <br/>
        <Image
        width={300}
        src={card1}
        />
        </div> 
      </Col>
    </Row>
    </>
  )
}

export default Payment