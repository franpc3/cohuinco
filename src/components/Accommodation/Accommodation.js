import React, { useState, useEffect } from "react";
import { Alert, Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Accommodation.css";
import moment from 'moment';
import axios from 'axios';

export default function Accommodation({ setConfirm, form, setForm }) {
  const [disabled, setDisabled] = useState(true),
  [errorMsg, setErrorMsg] = useState(""),
  [max, setMax] = useState(10),

  handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value});
    if (target.value < 2) {
        setMax(10);
    } else {
        setMax(target.value);
        if (form.adults + form.childs > target.value) {
            setForm({...form, adults: 0, childs: 0});
        }
    }
  },

  changeQty = (name, op) => {
    if (op === '-' && form[name] > 0) {
      setForm({...form, [name]: form[name] - 1});
    } else if (op === '+' && form[name] < max) {
      setForm({...form, [name]: form[name] + 1});
    }
  },
  
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;
    axios.get(`/bookings`)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
            //response.data => [bookings]
            setConfirm(true);
        } else {
            //setErrorMsg(response.msg);
            setErrorMsg("Hubo un error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    form.in && form.out && form.room && form.adults + form.childs > 0 ? setDisabled(false) : setDisabled(true);
  }, [form]);

  return (
    <Form className="formwidth" onSubmit={handleSubmit}>
        <h4 className="mb-3">Alojamiento</h4>
        <Form.Row className="mb-3">
            <Form.Group as={Col} className="mb-3 font-weight-bold">
                <Form.Label>Ingreso</Form.Label>
                <input
                    value={form.in}
                    min={moment().format('YYYY-MM-DD')}
                    name="in"
                    type="date"
                    className="form-control"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 font-weight-bold">
                <Form.Label>Salida</Form.Label>
                <input
                    value={form.out}
                    min={form.in}
                    name="out"
                    type="date"
                    className="form-control"
                    onChange={handleChange}
                />
            </Form.Group>
        </Form.Row>

        <Form.Group className="mb-3 font-weight-bold">
            <Form.Label>Habitación</Form.Label>
            <Form.Control as="select" name="room" custom value={form.room} onChange={handleChange}>
            <option value={0}>Elegi una opción</option>
            <option value={1}>Hab. compartida ${550 * ((form.adults + form.childs) || 1)} </option>
            <option value={2}>Base Doble $1500</option>
            <option value={3}>Base Triple $1900</option>
            <option value={4}>Base Cuádruple $2500</option>
            </Form.Control>
        </Form.Group>

        <Form.Row className="mb-3 mt-5 font-weight-bold">
            <Form.Group as={Col}>
                <Form.Label>Adultos</Form.Label>
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                    <Button variant="success" className="btnorange" onClick={() => changeQty('adults', '-')} disabled={form.adults < 1}>
                        -
                    </Button>
                    </InputGroup.Prepend>
                    <FormControl value={form.adults} name="adults" type="number" placeholder="0" onChange={handleChange} min={0} max={max - form.childs} />
                    <InputGroup.Append>
                    <Button variant="success" className="btnorange" onClick={() => changeQty('adults', '+')} disabled={form.adults >= (max - form.childs)}>
                        +
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Niños</Form.Label>
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                    <Button variant="success" className="btnorange" onClick={() => changeQty('childs', '-')} disabled={form.childs < 1}>
                        -
                    </Button>
                    </InputGroup.Prepend>
                    <FormControl value={form.childs} name="childs" type="number" placeholder="0" onChange={handleChange} min={0} max={max - form.adults} />
                    <InputGroup.Append>
                    <Button variant="success" className="btnorange" onClick={() => changeQty('childs', '+')} disabled={form.childs >= (max - form.adults)}>
                        +
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form.Row>
        <Alert dismissible show={errorMsg !== ''} onClose={() => setErrorMsg('')} variant="warning">
            {errorMsg}
        </Alert>
        <Button variant="success" type="submit" className="btncolor px-5" disabled={disabled}>
            Reservar
        </Button>
    </Form>
  );
}
