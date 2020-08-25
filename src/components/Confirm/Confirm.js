import React from "react";
import { Form, Button, Row, Col, FormControl } from "react-bootstrap";
import { faLongArrowAltLeft, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Confirm.css";

export default function Confirm({ setConfirm }) {
  return (
    <>
      <div className="text-left mt-5">
        <Button
          variant="light"
          className="px-5 bg-transparent border-0 textorange"
          onClick={() => setConfirm(false)}
            >
          <FontAwesomeIcon className="mr-2 pt-1 fa-lg" icon={faLongArrowAltLeft} />
          volver
        </Button>
      </div>
      <h4 className="mb-4 mt-5">Alojamiento</h4>
      <Row className="justify-content-center">
        <Form className="formwidth">
          <Form.Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="formGroupNombre"
              className="mb-3 font-weight-bold"
            >
              <Form.Label>Nombre</Form.Label>
              <FormControl placeholder="Ingrese Nombre" name="name" type="text" className="form-control" />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGroupSurname"
              className="mb-3 font-weight-bold"
            >
              <Form.Label>Apellido </Form.Label>
              <FormControl
                placeholder="Ingrese Apellido"
                name="surname"
                type="text"
                className="form-control"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group
            controlId="formGroupTelefono"
            className="mb-3 font-weight-bold"
          >
            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="telefono" type="text" placeholder="Ingrese Teléfono"></Form.Control>
          </Form.Group>

          <Form.Group
            controlId="formGroupMail"
            className="mb-3 font-weight-bold"
          >
            <Form.Label>Mail</Form.Label>
            <Form.Control name="Mail" type="text" placeholder="Ingrese Mail"></Form.Control>
          </Form.Group>

          <Button variant="success" type="submit" className="btncolor px-5 mt-5">
          <FontAwesomeIcon className="mr-2 pt-1 fa-lg" icon={faCreditCard} />Pagar
          </Button>
        </Form>
      </Row>
    </>
  );
}
