import React from "react";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Accommodation.css";

export default function Accommodation({ setConfirm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setConfirm(true);
  };

  return (
    <>
      <h4 className="mb-3">Alojamiento</h4>
      <Form className="formwidth" onSubmit={handleSubmit}>
        <Form.Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGroup"
            className="mb-3 font-weight-bold"
          >
            <Form.Label>Ingreso</Form.Label>
            <input
              placeholder="Ingresá la hora"
              name="date"
              type="date"
              className="form-control"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGroup"
            className="mb-3 font-weight-bold"
          >
            <Form.Label>Salida </Form.Label>
            <input
              placeholder="Ingresá la hora"
              name="date"
              type="date"
              className="form-control"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group
          controlId="exampleForm.SelectCustom"
          className="mb-3 font-weight-bold"
        >
          <Form.Label>Habitación</Form.Label>
          <Form.Control as="select" custom>
            <option>Elegi una opción</option>
            <option>hab. compartida $550 </option>
            <option>Base Doble $1500</option>
            <option>Base Triple $1900</option>
            <option>Base Cuádruple $2500</option>
          </Form.Control>
        </Form.Group>

        <Form.Row className="mb-3 mt-5 font-weight-bold">
          <Form.Group as={Col}>
            <Form.Label>Adultos</Form.Label>
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
        <Button variant="success" type="submit" className="btncolor px-5">
          Reservar
        </Button>
      </Form>
    </>
  );
}
