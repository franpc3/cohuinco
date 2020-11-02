import React, { useState } from "react";
import {  Button,  Modal,  FormControl,  Form,  Col,  InputGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function AddRoomModal() {
  const [show, setShow] = useState(false),
    handleClose = () => setShow(false),
    handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="px-5 btnsave text-white font-weight-bold"
        onClick={handleShow}
      >
        Crear Reserva
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crear Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Row className="mb-1">
                <Form.Group as={Col} className="mb-3 font-weight-bold">
                  <Form.Label>Nombre</Form.Label>
                  <FormControl
                    placeholder="Ingrese Nombre"
                    name="name"
              
                    type="text"
                    className="form-control"
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-1 font-weight-bold">
                  <Form.Label>Apellido</Form.Label>
                  <FormControl
                    placeholder="Ingrese Apellido"
                    name="surname"
                   
                    type="text"
                    className="form-control"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="mb-1">
              <Form.Group as={Col} className="mb-1 font-weight-bold">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
             
                  placeholder="Ingrese Teléfono"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-1 font-weight-bold">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  name="dni"
                  type="text"
                  placeholder="Ingrese su dni"
                
                />
              </Form.Group>
              </Form.Row>
              <Form.Row className="mb-1">
              <Form.Group as={Col} className="mb-1 font-weight-bold">
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  name="mail"
                  type="text"
                  placeholder="Ingrese Mail"
                 
                />
              </Form.Group>
              </Form.Row>
              <Form.Row className="mb-1">
              <Form.Group as={Col} className="mb-1 font-weight-bold">
                <Form.Label>Ingreso</Form.Label>
                <input name="in" type="date" className="form-control" />
              </Form.Group>
              <Form.Group as={Col} className="mb-1 font-weight-bold">
                <Form.Label>Salida</Form.Label>
                <input name="out" type="date" className="form-control" />
              </Form.Group>
            </Form.Row>

            <Form.Group className="mb-1 font-weight-bold">
              <Form.Label>Habitación</Form.Label>
              <Form.Control as="select" name="room" custom>
                <option value="">Elegi una opción</option>
                <option value="1">hab. compartida $550 </option>
                <option value="2">Base Doble $1500</option>
                <option value="3">Base Triple $1900</option>
                <option value="4">Base Cuádruple $2500</option>
              </Form.Control>
            </Form.Group>

            <Form.Row className="mb-1 mt-1 font-weight-bold">
              <Form.Group as={Col}>
                <Form.Label>Adultos</Form.Label>
                <InputGroup className="mb-3 ">
                  <InputGroup.Prepend>
                    <Button variant="success" className="btnorange">
                      -
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    name="adults"
                    type="number"
                    placeholder="0"
                    min={0}
                    max={10}
                  />
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
                  <FormControl
                    name="childs"
                    type="number"
                    placeholder="0"
                    min={0}
                    max={10}
                  />
                  <InputGroup.Append>
                    <Button variant="success" className="btnorange">
                      +
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Modal.Footer className="justify-content-center">
              <Button className="btnsave" type="submit" onClick={handleClose}>
                <FontAwesomeIcon className="mr-2" icon={faConciergeBell} />{" "}
                Crear Reserva
              </Button>
              <Button variant="danger" onClick={handleClose}>
                <FontAwesomeIcon className="mr-2" icon={faTimes} />
                Cerrar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
