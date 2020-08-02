import React from 'react'
import { Form, Button, Col } from 'react-bootstrap';

export default function Rafting() {
   

    return (
        <>
            <Form className="formwidth" >
               
                        <h4 className="mb-4">Rafting</h4>
                        <Form.Group controlId="formGroupEmail" className="mb-4">
                            <Form.Label>Dia de excursión</Form.Label>
                            <input
                                placeholder="Ingresá la hora"
                                name="date"
                                type='date'
                                className="form-control"
                             
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail" className="mb-3 font-weight-bold">
                            <Form.Label>Direccion de mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                   
                   
                            <Form.Group  controlId="formGridCity" className="mb-3 font-weight-bold">
                                <Form.Label>Pais</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa su Pais"/>
                            </Form.Group>
                  
                   
                        <Form.Row className="mb-3">
                            <Form.Group as={Col} className="col-12 col-md-8 font-weight-bold" controlId="formGridState">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa su Provincia"/>
                            </Form.Group>

                            <Form.Group as={Col} className="col-12 col-md-4 font-weight-bold" controlId="formGridZip">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" className="btncolor px-5">
                            Reservar
                        </Button>
                 
                
            </Form>
        </>
    )
}