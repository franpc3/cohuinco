import React from 'react'
import { Container, Row, Col, Nav, Tab, Table, Form, Button, Image, Navbar, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faWater, faEdit, faTrashAlt, faSearch, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import admin from '../Images/admin.png'
import adminmobile from '../Images/adminmobile.png'
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
                        <Col xs={12} lg={9} >
                            <Form >
                                <Col xs={12} lg={4} className="text-center mt-2 d-block d-lg-none">
                                    <Button variant="dark" className="px-5 btncolor" >New</Button>
                                </Col>
                                <Navbar className="bg-light text-center justify-content-center justify-content-lg-start">
                                   

                                        <Col xs={6} lg={2} className="my-2 my-lg-0" >
                                            <FormControl type="text" className=" mr-sm-2" />
                                        </Col>
                                        <Col xs={5} lg={2}>
                                            <Button type="submit" className="btncolor"> <FontAwesomeIcon className="mr-2" icon={faSearch} />Buscar</Button>
                                        </Col>
                                        <Col  lg={6} className="text-right d-none d-lg-block " >
                                            <Button variant="dark" className="px-5 btncolor" >New</Button>
                                        </Col>
                                    


                                </Navbar>
                            </Form>
                            <Tab.Content className="boxshadow">
                                <Tab.Pane eventKey="first">
                                    <Table responsive  >
                                        <thead>
                                            <tr className="bgorange">
                                                <th>Room Number</th>
                                                <th>Floor</th>
                                                <th>Descripcion</th>
                                                <th>Habilitado</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><FontAwesomeIcon icon={faCaretRight} className="mr-2 mt-1 fa-lg" />101</td>
                                                <td>1</td>
                                                <td>Simple room</td>
                                                <td>Ocupado</td>
                                                <td> <Button variant="light"><FontAwesomeIcon icon={faEdit} className="text-warning" /></Button> <Button variant="light"><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Table responsive className="bg-light">
                                        <thead>
                                            <tr>
                                                <th><Form.Check type="checkbox" /></th>
                                                <th>Room Number</th>
                                                <th>Floor</th>
                                                <th>Description</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Form.Check type="checkbox" /></td>
                                                <td>101</td>
                                                <td>1</td>
                                                <td>Simple room</td>
                                                <td> <Button variant="light"><FontAwesomeIcon icon={faEdit} className="text-warning" /></Button> <Button variant="light"><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></Button></td>

                                            </tr>
                                            <tr>
                                                <td><Form.Check type="checkbox" /></td>
                                                <td>102</td>
                                                <td>1</td>
                                                <td>Simple room</td>
                                                <td> <Button variant="light"><FontAwesomeIcon icon={faEdit} className="text-warning" /></Button> <Button variant="light"><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></Button></td>

                                            </tr>
                                            <tr>
                                                <td><Form.Check type="checkbox" /></td>
                                                <td>101</td>
                                                <td>2</td>
                                                <td>Family room</td>
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
