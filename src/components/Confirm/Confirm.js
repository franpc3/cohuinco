import React, { useState, useEffect } from "react";
import { faLongArrowAltLeft, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, Row, Col, FormControl, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import "./Confirm.css";

export default function Confirm({ setConfirm, form, setForm, type }) {
  const [disabled, setDisabled] = useState(true),
  [show, setShow] = useState(false),
  
  handleShow = () => setShow(true),
  handleClose = () => setShow(false),

  handleChange = ({target}) => setForm({...form, [target.name]: target.value}),

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;
    if (type === 'alojamiento') {
      axios.post(`/bookings`, { 
        bookingDate: {
          endDate: form.in,
          startDate: form.out
        },
        dniUser: form.dni,
        lastNameUser: form.surname,
        firstNameUser: form.name,
        phoneNumber: form.phone,
        mailUser: form.mail,
        roomType: form.room,
        adults: form.adults,
        kids: form.childs
      }).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      axios.post(`/rafting`, { 
        raftingDate: form.in,
        dniUser: form.dni,
        lastNameUser: form.surname,
        firstNameUser: form.name,
        phoneNumber: form.phone,
        mailUser: form.mail,
        raftingType: form.type,
        raftingTurne: form.time,
        transfer: form.transfer,
        addres: form.address,
        adults: form.adults,
        kids: form.childs
      }).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

  useEffect(() => {
    form.name && form.surname && form.phone && form.mail && form.terms ?
    setDisabled(false) : setDisabled(true);
  }, [form]);

  return (
    <>
      <div className="text-left mt-5">
        <Button variant="light" className="px-5 bg-transparent border-0 textorange" onClick={() => setConfirm(false)}>
          <FontAwesomeIcon className="mr-2 pt-1 fa-lg" icon={faLongArrowAltLeft} />volver
        </Button>
      </div>
      <Row className="justify-content-center">
        <Form className="formwidth">
          <Form.Row className="mb-3">
            <Form.Group as={Col} className="mb-3 font-weight-bold">
              <Form.Label>Nombre</Form.Label>
              <FormControl
                placeholder="Ingrese Nombre"
                name="name"
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 font-weight-bold">
              <Form.Label>Apellido</Form.Label>
              <FormControl placeholder="Ingrese Apellido" name="surname" onChange={handleChange} type="text" className="form-control" />
            </Form.Group>
          </Form.Row>
          <Form.Group className="mb-3 font-weight-bold">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="phone" type="text" onChange={handleChange} placeholder="Ingrese Teléfono" />
          </Form.Group>
          <Form.Group className="mb-3 font-weight-bold">
            <Form.Label>Mail</Form.Label>
            <Form.Control name="mail" type="text" placeholder="Ingrese Mail" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3 font-weight-bold">
            <Form.Label>DNI</Form.Label>
            <Form.Control name="dni" type="text" placeholder="Ingrese su dni" onChange={handleChange} />
          </Form.Group>
          <Form.Row className="justify-content-center">
            <Form.Group className="pt-2 font-weight-bold"> 
              <Form.Check value={form.terms} onChange={({target}) => setForm({...form, terms: target.checked})} />
            </Form.Group>
            <Form.Group className="font-weight-bold"> 
              <Button variant="light" onClick={handleShow}>
                Acepto terminos y condiciones
              </Button>

              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Terminos y condiciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Lorem 
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>            
            </Form.Group>
          </Form.Row>
          <Button variant="success" type="submit" className="btncolor px-5 mt-5" disabled={disabled} onClick={handleSubmit}>
            <FontAwesomeIcon className="mr-2 pt-1 fa-lg" icon={faCreditCard} />Pagar
          </Button>
        </Form>
      </Row>
    </>
  );
}