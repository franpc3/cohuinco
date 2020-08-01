import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
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
                    <Col xs={12} lg={6}>
                        <Bookings />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
