import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';

export default function AddRoomModal() {
  const [show, setShow] = useState(false),
    handleClose = () => setShow(false),
    handleShow = () => setShow(true);
  return (
    <>
      <Button variant="px-5 btnsave text-white font-weight-bold" onClick={handleShow}>
        Crear Reserva
      </Button>

      <Modal 
        size="lg"
        show={show}
        onHide={handleClose} 
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Crear Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            


        </Modal.Body>
        <Modal.Footer>
          <Button className="btnsave" type="submit" onClick={handleClose}>
            Crear Reserva
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
