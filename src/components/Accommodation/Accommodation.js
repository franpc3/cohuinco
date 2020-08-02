import React from 'react'
import { Form, Button, Col } from 'react-bootstrap';

import './Accommodation.css'



export default function Accommodation() {

    return (
        <>
            <h4 className="mb-3">Alojamiento</h4>
            <Form className="formwidth" >
                <Form.Row className="mb-3">
                    <Form.Group as={Col} controlId="formGroupEmail" className="mb-3 font-weight-bold">
                        <Form.Label>Desde</Form.Label>
                        <input
                            placeholder="Ingresá la hora"
                            name="date"
                            type='date'
                            className="form-control"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGroupEmail" className="mb-3 font-weight-bold">
                        <Form.Label>Hasta </Form.Label>
                        <input
                            placeholder="Ingresá la hora"
                            name="date"
                            type='date'
                            className="form-control"
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGroupEmail" className="mb-3 font-weight-bold">
                    <Form.Label>Direccion de mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group controlId="formGridCity" className="mb-3 font-weight-bold">
                    <Form.Label>Pais</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa su Pais" />
                </Form.Group>


                <Form.Row className="mb-3">
                    <Form.Group className="col-8 font-weight-bold" controlId="formGridState">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa su Provincia" />
                    </Form.Group>

                    <Form.Group className="col-4 font-weight-bold" controlId="formGridZip">
                        <Form.Label>Codigo Postal</Form.Label>
                        <Form.Control placeholder="Ingresa tu codigo postal"/>
                    </Form.Group>
                </Form.Row>
                <Button variant="success" type="submit" className="btncolor px-5">
                    Reservar
                </Button>


            </Form>
        </>
    );
}
