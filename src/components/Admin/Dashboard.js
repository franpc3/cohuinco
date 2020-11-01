import React from 'react'
import { Container, Row, Col, Nav, Tab, Table, Form, Button, Image, Navbar, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faWater, faEdit, faTrashAlt, faSearch, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import admin from '../Images/admin.png'
import adminmobile from '../Images/adminmobile.png'
import AddRoomModal from './AddRoomModal';
import AddRaftingModal from './AddRaftingModal';
import './Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <Image fluid src={admin} className="d-none d-md-block" alt="" />
            <Image fluid src={adminmobile} className="d-block d-md-none" alt="" />
            <Container fluid >
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row className="mt-5">
                        <Col xs={12} lg={3} className="heightselect mb-3 mb-lg-0">
                            <h4>Seleccione </h4>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> <FontAwesomeIcon className="mr-2" icon={faConciergeBell} />Rooms</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">  <FontAwesomeIcon className="mr-2" icon={faWater} />Rafting</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} lg={9}>
                            
                            <Tab.Content className=" border-0">
                                <Tab.Pane eventKey="first" >
                                    <Form>
                                        <Row className="bg-trasparent text-center d-flex flex-row justify-content-center justify-content-lg-start py-2">
                                                <Col xs={12} lg={4} className="my-2 my-lg-0 d-flex flex-row" >
                                                    <FormControl type="text" className=" mr-sm-2" />
                                                    <Button type="submit" className="btncolor mx-2"> <FontAwesomeIcon className="mx-2" icon={faSearch} /></Button>
                                                </Col>
                                                <Col xs={12} lg={6} className="text-center text-lg-right" >
                                                    <AddRoomModal />
                                                </Col>
                                        </Row>
                                    </Form>
                                    <Table responsive  className="bg-white boxshadow">
                                        <thead>
                                        <tr className="bgorange text-white">
                                                <th>Dia</th>
                                                <th>Hasta</th>
                                                <th>Habitacion</th>
                                                <th>Apellido, Nombre</th>
                                                <th>Cantidad adultos</th>
                                                <th>Cantidad niños</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2/11/20</td>
                                                <td>10/11/20</td>
                                                <td>Cuarto 1</td>
                                                <td>Ruiz, Julio</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td> <Button variant="light"><FontAwesomeIcon icon={faEdit} className="text-warning" /></Button> <Button variant="light"><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Form >
                                        <Row className="bg-trasparent text-center d-flex flex-row justify-content-center justify-content-lg-start py-2">
                                                <Col xs={12} lg={4} className="my-2 my-lg-0 d-flex flex-row" >
                                                    <FormControl type="text" className=" mr-sm-2" />
                                                    <Button type="submit" className="btncolor mx-2"> <FontAwesomeIcon className="mx-2" icon={faSearch} /></Button>
                                                </Col>
                                                <Col xs={12} lg={6} className="text-center text-lg-right" >
                                                    <AddRaftingModal />
                                                </Col>
                                        </Row>
                                    </Form>
                                    <Table responsive className="bg-white boxshadow" >
                                        <thead>
                                            <tr className="bgorange text-white">
                                                <th>Dia</th>
                                                <th>Apellido, Nombre</th>
                                                <th>Turno</th>
                                                <th>Tipo</th>
                                                <th>Traslado</th>
                                                <th>Cantidad adultos</th>
                                                <th>Cantidad niños</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> 2/11/20</td>
                                                <td>Ruiz Julio</td>
                                                <td>Mañana</td>
                                                <td>Grado 1</td>
                                                <td>No o lugar del traslado</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td> <Button variant="light"><FontAwesomeIcon icon={faEdit} className="text-warning" /></Button> <Button variant="light"><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></Button></td>
                                            </tr>      
                                        </tbody>
                                    </Table>    
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}
