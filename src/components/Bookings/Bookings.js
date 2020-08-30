import React, { useState, useEffect } from 'react';
import { faConciergeBell, faWater } from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col, Tab, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accommodation from '../Accommodation/Accommodation';
import Confirm from '../Confirm/Confirm';
import Rafting from '../Rafting/Rafting';
import Footer from '../Footer/Footer';
import moment from 'moment';
import './Bookings.css';

export default function Bookings() {
    const [form, setForm] = useState({ in: moment().format('YYYY-MM-DD'), out: moment().format('YYYY-MM-DD'), room: '', adults: 0, childs: 0, name: '', surname: '', phone: '', mail: '', terms: false, dni: '' }),
    [active, setActive] = useState('alojamiento'),
    [confirm, setConfirm] = useState(false);

    useEffect(() => {
        active === 'alojamiento' ? setForm({ in: moment().format('YYYY-MM-DD'), out: moment().format('YYYY-MM-DD'), room: '', adults: 0, childs: 0, name: '', surname: '', phone: '', mail: '', terms: false, dni: '' }) :
        setForm({ in: moment().format("YYYY-MM-DD"), time: "", adults: 0, childs: 0, tranfer: false, address: '', name: '', surname: '', phone: '', mail: '', terms: false, dni: '' });
    }, [active]);

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
                                    active === 'alojamiento' ? <Accommodation setConfirm={setConfirm} form={form} setForm={setForm} /> 
                                    : <Rafting setConfirm={setConfirm} form={form} setForm={setForm} />
                                }
                                </Container>
                            </Tab.Content>
                        </Row>
                    </> :
                    <Confirm setConfirm={setConfirm} form={form} setForm={setForm} />
                }
            </Tab.Container>
            <Footer />
        </div>
    );
}