import React, { useState } from 'react';
import { faConciergeBell, faWater } from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col, Tab, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accommodation from '../Accommodation/Accommodation';
import Rafting from '../Rafting/Rafting';
import Footer from '../Footer/Footer';
import './Bookings.css';
import Confirm from '../Confirm/Confirm';

export default function Bookings() {
    const [active, setActive] = useState('alojamiento'),
    [confirm, setConfirm] = useState(false);

    return (
        <div className="text-center px-2">
            <Tab.Container>
                {
                    !confirm ? 
                    <>
                        <Row className="justify-content-center mx-0 mx-md-5 formheight">
                            <Col xs={12} md={6}>
                                <ListGroup.Item className="bordercolor font-weight-bold" active={active === 'alojamiento'} onClick={() => setActive('alojamiento')}>
                                    <FontAwesomeIcon className="mr-2" icon={faConciergeBell} />Alojamiento
                                </ListGroup.Item>
                            </Col>
                            <Col xs={12} md={6} className="mt-2 mt-md-0">
                                <ListGroup.Item className="bordercolor font-weight-bold" active={active === 'rafting'} onClick={() => setActive('rafting')}>
                                    <FontAwesomeIcon className="mr-2" icon={faWater} />Rafting
                                </ListGroup.Item>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Tab.Content className="mt-2">
                                <Container className="d-flex flex-column justify-content-center mt-4 mt-lg-5" >
                                {
                                    active === 'alojamiento' ? <Accommodation setConfirm={setConfirm} /> :
                                        <Rafting setConfirm={setConfirm} />
                                }
                                </Container>
                            </Tab.Content>
                        </Row>
                    </> :
                    <Confirm setConfirm={setConfirm} />
                }
            </Tab.Container>
            <Footer />
        </div>
    );
}