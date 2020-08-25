import React from 'react'
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import './Rafting.css';

export default function Rafting({ setConfirm }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setConfirm(true);
    };

    return (
        <Form className="formwidth" onSubmit={handleSubmit}>
            <h4 className="mb-3">Rafting</h4>
            <Form.Group controlId="formGroupEmail" className="mb-2">
                <Form.Label className="font-weight-bold">Dia</Form.Label>
                <input
                    placeholder="Ingresá la hora"
                    name="date"
                    type='date'
                    className="form-control"
                    
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail" className="mb-2 font-weight-bold">
                 <Form.Label>Turno</Form.Label>
                <Form.Control as="select" custom>
                    <option>Elegi una opción</option>
                    <option>Mañana</option>
                    <option>Tarde</option>
                </Form.Control>
            </Form.Group>

            <Form.Group  controlId="formGridCity" className="my-3 font-weight-bold">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label" for="customSwitch1"><FontAwesomeIcon className="mr-2 fa-lg textorange" icon={faShuttleVan} />Traslado</label>
                    </div>
            </Form.Group>
        
            <Form.Group  controlId="formGridCity" className="mb-2 font-weight-bold">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingresa su Dirección"/>
            </Form.Group>
        
            <Form.Row className="mb-2 mt-2 font-weight-bold">
          <Form.Group as={Col}>
            <Form.Label>Adultos</Form.Label>
            <InputGroup className="mb- ">
              <InputGroup.Prepend>
                <Button variant="success" className="btnorange">
                  -
                </Button>
              </InputGroup.Prepend>
              <FormControl />
              <InputGroup.Append>
                <Button variant="success" className="btnorange">
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Niños</Form.Label>
            <InputGroup className="mb-3 ">
              <InputGroup.Prepend>
                <Button variant="success" className="btnorange">
                  -
                </Button>
              </InputGroup.Prepend>
              <FormControl />
              <InputGroup.Append>
                <Button variant="success" className="btnorange">
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form.Row>
            <Button variant="primary" type="submit" className="btncolor px-5">
                Reservar
            </Button>
        </Form>
    );
}