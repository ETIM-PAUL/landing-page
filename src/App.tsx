import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider} from 'antd';
import './styles/style.css';
import Heading from './components/FirstTierComponent/Header';
import PaymentCard from './components/SecondTierComponent';
import ThirdTier from './components/ThirdTierComponent';
import LastTier from './components/LastTierComponent';
import { CssBaseline} from '@material-ui/core';

const App = () => {
  return (
    <>
    <CssBaseline>
      
        <Row justify="end">
          <Col><Heading/></Col>
        </Row>
        <br/>
        <Divider/>

        <PaymentCard/>
        <Divider/>
      
        <ThirdTier/>
        <Divider/>
      
        <LastTier/>
        <br/>

    </CssBaseline>
    </>
  );
}

export default App;
