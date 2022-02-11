import React, {useState} from "react";
import {Form, Input, Button, Radio, Row, Col, Space, Image, Modal} from 'antd';
import {} from '@ant-design/icons';
import visa from '../../images/visa.png'
import paypal from '../../images/paypal.png'
import discover from '../../images/discover.png'

const Card = () => {
  const[value, setValue] = useState('visa');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValue(e.target.value);
    // console.log(value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setValue('visa');

  };

  const handleCancel = () => {
    setValue('visa');
    setIsModalVisible(false);
  };

  return(
    <>
    <Row justify="end">
      <Col onChange={onChange}>
      <Radio.Group value={value}>
          <Radio value={'visa'} >
            <Image width={30} height={25} src={visa} />
            <Image width={30} height={25} src={discover} />
          </Radio> 
          <Radio value={'paypal'} onClick={showModal}>
            <Image width={50} height={40} src={paypal}/>
          </Radio>  
     </Radio.Group>
      </Col>
    </Row>
    <br/>

    { value === "visa" ? (
      <> <Row>
          <Space>
            <Col>
              <Form
                // wrapperCol={{span:100}}
                layout={'vertical'}
                size={'large'}
              >
                <Row>
                  <Col>
                    <Form.Item label="Credit card number">
                      <Input style={{backgroundColor:"whitesmoke"}} />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Security code">
                    < Input style={{backgroundColor:"whitesmoke"}} />
                    </Form.Item>
              </Col>
            </Row>
        </Form>
      </Col>

            <Col offset={6}>
              <Form
                // wrapperCol={{span:100}}
                layout={'vertical'}
                size={'large'}
              >
                <Row>
                  <Col>
                    <Form.Item label="Expiration Date">
                      <Input style={{backgroundColor:"whitesmoke"}} />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Postal Code">
                      <Input style={{backgroundColor:"whitesmoke"}} />
                   </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Space>
        </Row>
      <Row>
        <Col>
          <Radio>Use this card for next time purchase</Radio>
        </Col>
    </Row> 

    <br/>   
    
    <Button 
      size="large" 
      type="primary" 
      block
      style={{backgroundColor:'#0000ffb3'}}
    >
      Add Card
    </Button>
    </>
    
    ) : (
      <Modal title="PayPal Payment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>You will be directed to paypal portal to continue your payment</p>
      </Modal>
    )

}
    
    </>
  )
}

export default Card