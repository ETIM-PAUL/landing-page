import React from "react";
import {Row, Col} from 'antd';

const Money = () => {
  return(
    <>
    <Row justify="end">
      <Col style={{textAlign:"end"}}>
        <pre>&#8358;2,4970.00</pre>
        <pre>&#8358;119.64</pre>
        <pre>&#8358;-60.00</pre>
      </Col>
    </Row>
    </>
  )
}

export default Money