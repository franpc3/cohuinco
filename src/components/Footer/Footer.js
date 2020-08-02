import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="marginfooter">
            <div className="mb-0 pb-0 pt-3 borderfooter text-center">
             
            <Row>
                <Col xs={12} md={9} className="text-center text-md-left font-weight-bold">
                    <p className="footertext">COHUIN-CO  |  CONTACTANOS  </p>
                </Col>
                <Col xs={12} md={3} className="text-center text-md-right font-weight-bold">
                    <p className="footertext">&copy;2020 COHUIN-CO</p>
                </Col>
            </Row>
            </div>
        </footer>
    )
}
