import React from 'react'
import { Form, Button } from 'react-bootstrap';

import './Accommodation.css'



export default function Accommodation() {

    return (
        <>
            <Form className="formwidth" >
               
                   
                        <Form.Group controlId="formGroupEmail" className="mb-3">
                            <Form.Label>Dia de alojamiento</Form.Label>
                            <input
                                placeholder="Ingresá la hora"
                                name="date"
                                type='date'
                                className="form-control"
                               
                            />
                        </Form.Group>

                   
                  
                        <Form.Group controlId="formGroupEmail" className="mb-3">
                            <Form.Label>Direccion de mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                   
                   
                            <Form.Group  controlId="formGridCity" className="mb-3">
                                <Form.Label>Pais</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa su Pais"/>
                            </Form.Group>
                  
                   
                        <Form.Row className="mb-3">
                            <Form.Group className="col-8" controlId="formGridState">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa su Provincia"/>
                            </Form.Group>

                            <Form.Group className="col-4" controlId="formGridZip">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="info" type="submit" className="btncolor">
                            Reservar
                        </Button>
                 
                
            </Form>
        </>
    );
}
