import React from "react";
import {Button,Row,Col} from "antd";

const Complete = () => {
  return(
    <>
    <Row>
      <Col>
        <Button 
        size="large" 
        type="primary" 
        block
        style={{ backgroundColor:'#0000ffb3', }}
        >
          Complete payment
          
        </Button>
      </Col>
    </Row>
    </>
  )
}

export default Complete