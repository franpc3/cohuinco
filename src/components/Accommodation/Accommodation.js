import React, { useState, useEffect } from "react";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Accommodation.css";
import moment from 'moment';

export default function Accommodation({ setConfirm }) {
  const [form, setForm] = useState({ in: moment().format('YYYY-MM-DD'), out: moment().format('YYYY-MM-DD'), room: '', adults: 0, childs: 0 }),
  [disabled, setDisabled] = useState(true),

  handleChange = ({target}) => setForm({...form, [target.name]: target.value}),

  changeQty = (name, op) => {
    if (op === '-' && form[name] > 0) {
      setForm({...form, [name]: form[name] - 1});
    }
    else if (op === '+' && form[name] < 10) {
      setForm({...form, [name]: form[name] + 1});
    }
  },
  
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;
    setConfirm(true);
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
            <option value=''>Elegi una opción</option>
            <option value='550'>hab. compartida $550 </option>
            <option value='1500'>Base Doble $1500</option>
            <option value='1900'>Base Triple $1900</option>
            <option value='2500'>Base Cuádruple $2500</option>
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
                    <FormControl value={form.adults} name="adults" type="number" placeholder="0" onChange={handleChange} min={0} max={10} />
                    <InputGroup.Append>
                    <Button variant="success" className="btnorange" onClick={() => changeQty('adults', '+')} disabled={form.adults > 9}>
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
                    <FormControl value={form.childs} name="childs" type="number" placeholder="0" onChange={handleChange} min={0} max={10} />
                    <InputGroup.Append>
                    <Button variant="success" className="btnorange" onClick={() => changeQty('childs', '+')} disabled={form.childs > 9}>
                        +
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form.Row>
        <Button variant="success" type="submit" className="btncolor px-5" disabled={disabled}>
            Reservar
        </Button>
    </Form>
  );
}
