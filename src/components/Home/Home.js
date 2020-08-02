import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import reservatulugar from '../Images/reservatulugar.png'
import Slide from '../Slider/Slider';
import Bookings from '../Bookings/Bookings';

import './Home.css'

export default function Home() {
    return (
        <>
            
            <Container fluid>
                <Row>
                    <Col xs={12} lg={6} className="p-0">
                        <Slide />
                    </Col>
                    <Col xs={12} lg={6} className="backgroundimage">
                        <Image src={reservatulugar} fluid alt="" />
                        <Bookings />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
