import React, { useState } from 'react'
import {Container, Row, Col, Tab, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faConciergeBell, faWater } from '@fortawesome/free-solid-svg-icons';
import Rafting from '../Rafting/Rafting';
import Accommodation from '../Accommodation/Accommodation';
import Footer from '../Footer/Footer';
import './Bookings.css'

export default function Bookings() {
    const [active, setActive] = useState('alojamiento');

    return (
        <div className="text-center">
            <h3 className="mt-4 mb-3 bordercolortitle pb-3" >Reserva tu Lugar</h3>
            <Tab.Container>
                <Row className="justify-content-center mx-0 mx-md-5 formheight">

                    { active === 'alojamiento' ?
                        <>
                            <Col xs={12} md={6}>
                                <ListGroup.Item className="bordercolor font-weight-bold" active onClick={() => setActive('alojamiento')}>
                                    <FontAwesomeIcon className="mr-2" icon={faConciergeBell} />Alojamiento
                                </ListGroup.Item>
                            </Col>
                            <Col xs={12} md={6} className="mt-2  mt-md-0">
                                <ListGroup.Item className="bordercolor font-weight-bold" onClick={() => setActive('rafting')}>
                                    <FontAwesomeIcon className="mr-2" icon={faWater} />Rafting
                                </ListGroup.Item>
                            </Col>
                        </> :
                        <>
                            <Col xs={12} md={6}>
                                <ListGroup.Item className="bordercolor font-weight-bold"onClick={() => setActive('alojamiento')}>
                                <FontAwesomeIcon className="mr-2" icon={faConciergeBell} />Alojamiento
                                </ListGroup.Item>
                            </Col>
                            <Col xs={12} md={6} className="mt-2  mt-md-0">
                                <ListGroup.Item className="bordercolor font-weight-bold" active onClick={() => setActive('rafting')}>
                                    <FontAwesomeIcon className="mr-2" icon={faWater} />Rafting
                                </ListGroup.Item>
                            </Col>
                        </>
                    }
                </Row>
                <Row className="justify-content-center">
                    <Tab.Content className="mt-5">
                        <Container className="d-flex flex-column justify-content-center mt-4 mt-lg-5" >
                        {
                            active === 'alojamiento' ? <Accommodation /> :
                                <Rafting />
                        }
                        </Container>
                    </Tab.Content>

                </Row>
            </Tab.Container>
            <Footer />
        </div>
    )
}

