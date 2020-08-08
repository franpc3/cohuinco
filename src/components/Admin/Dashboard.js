import React from 'react'
import { Container, Row, Col, Nav, Tab, Table, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faConciergeBell, faWater, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css'

export default function Dashboard() {
    return (
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row className="mt-5">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> <FontAwesomeIcon className="mr-2" icon={faConciergeBell} /> Rooms</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">  <FontAwesomeIcon className="mr-2" icon={faWater} />Rafting</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th><Form.Check type="checkbox"/></th>
                                            <th>Room Number</th>
                                            <th>Floor</th>
                                            <th>Description</th>
                                            <th></th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check type="checkbox"/></td>
                                            <td>101</td>
                                            <td>1</td>
                                            <td>Simple room</td>
                                            <td> <Button variant="warning"><FontAwesomeIcon  icon={faEdit} /></Button> <Button variant="danger"><FontAwesomeIcon  icon={faTrashAlt}/></Button></td>
                                          
                                        </tr>
                                        <tr>
                                            <td><Form.Check type="checkbox"/></td>
                                            <td>102</td>
                                            <td>1</td>
                                            <td>Simple room</td>
                                            <td> <Button variant="warning"><FontAwesomeIcon  icon={faEdit} /></Button> <Button variant="danger"><FontAwesomeIcon  icon={faTrashAlt}/></Button></td>
                                           
                                        </tr>
                                        <tr>
                                            <td><Form.Check type="checkbox"/></td>
                                            <td>101</td>
                                            <td>2</td>
                                            <td>Family room</td>
                                            <td> <Button variant="warning"><FontAwesomeIcon  icon={faEdit} /></Button> <Button variant="danger"><FontAwesomeIcon  icon={faTrashAlt}/></Button></td>
                                           
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Table responsive>
                                    <thead>
                                        <tr>
                                            <th><Form.Check type="checkbox"/></th>
                                            <th>Room Number</th>
                                            <th>Floor</th>
                                            <th>Description</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check type="checkbox"/></td>
                                            <td>101</td>
                                            <td>1</td>
                                            <td>Simple room</td>
                                            <td> <Button variant="warning"><FontAwesomeIcon  icon={faEdit} /></Button> <Button variant="danger"><FontAwesomeIcon  icon={faTrashAlt}/></Button></td>
                                          
                                        </tr>
                                        <tr>
                                            <td><Form.Check type="checkbox"/></td>
                                            <td>102</td>
                                            <td>1</td>
                                            <td>Simple room</td>
                                            <td> <Button variant="warning"><FontAwesomeIcon  icon={faEdit} /></Button> <Button variant="danger"><FontAwesomeIcon  icon={faTrashAlt}/></Button></td>
                                           
                                        </tr>
                                        <tr>
                                            <td><Form.Check type="checkbox"/></td>
                                            <td>101</td>
                                            <td>2</td>
                                            <td>Family room</td>
                                            <td> <Button variant="warning"><FontAwesomeIcon  icon={faEdit} /></Button> <Button variant="danger"><FontAwesomeIcon  icon={faTrashAlt}/></Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
