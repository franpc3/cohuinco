import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Layout/Navigation';
import FormAppointmens from './components/form/Form'
import Slider from './components/cardImage/Slider';
import { Container,Row,Col} from 'react-bootstrap';
function App() {
  return (
        <div style={{position:"fixed"}} >
          <Container className="navigation" fluid><Navigation/></Container>
         <Container className="main" fluid>
        
          <Row >
            <Col lg={6} ><Slider/></Col>
            <Col lg={6}>
              <Row className="rowForm h-100">
              <Col lg={3}>
                <h2>Reservá tus lugares</h2>
                </Col>
                <Col lg={6}>
                <FormAppointmens/>
                </Col>
                <Col lg={3}>
                </Col>
              </Row>
              
            </Col>
          </Row>
        </Container>
        </div>
       
   
  );
}

export default App;
