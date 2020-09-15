import React, { useState, useEffect } from "react";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleVan } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "./Rafting.css";

export default function Rafting({ setConfirm, form, setForm }) {
    const [disabled, setDisabled] = useState(true),

    handleChange = ({ target }) => setForm({ ...form, [target.name]: target.value }),

    changeQty = (name, op) => {
        if (op === "-" && form[name] > 0) {
            setForm({ ...form, [name]: form[name] - 1 });
        } else if (op === "+" && form[name] < 10) {
            setForm({ ...form, [name]: form[name] + 1 });
        }
    },

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled) return;
        setConfirm(true);
    };

    useEffect(() => {
        form.in && form.address && form.time && form.adults + form.childs > 0
        ? setDisabled(false)
        : setDisabled(true);
    }, [form]);

    return (
        <Form className="formwidth" onSubmit={handleSubmit}>
            <h4 className="mb-3">Rafting</h4>
            <Form.Group>
                <Form.Label className="font-weight-bold">Dia</Form.Label>
                <input
                    value={form.in}
                    min={moment().format("YYYY-MM-DD")}
                    name="in"
                    type="date"
                    className="form-control"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-2 font-weight-bold">
                <Form.Label>Turno</Form.Label>
                <Form.Control as="select" custom name="time" value={form.time} onChange={handleChange}>
                    <option value="">Elegi una opción</option>
                    <option value="mañana">Mañana</option>
                    <option value="tarde">Tarde</option>
                </Form.Control>
            </Form.Group>

            <Form.Group className="my-3 font-weight-bold">
                <Form.Check inline checked={form.transfer} label="Traslado" type="switch" onChange={({target}) => {setForm({...form, transfer: target.checked}); console.log('target', target)}} />
                {/* <div className="custom-control custom-switch">
                    <label className="custom-control-label">
                        <FontAwesomeIcon
                        className="mr-2 fa-lg textorange"
                        icon={faShuttleVan}
                        />
                        Traslado
                    </label>
                </div> */}
            </Form.Group>

            {form.transfer &&
                <Form.Group className="mb-2 font-weight-bold">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa su Dirección"
                        name="address"
                        onChange={handleChange}
                    />
                </Form.Group>
            }
            
            <Form.Group className="font-weight-bold">
                <Form.Label>Tipo</Form.Label>
                <Form.Control as="select" custom name="time" value={form.time} onChange={handleChange}>
                    <option value="">Elegi una opción</option>
                    <option value="mañana">Familiar Steffen Grado 1</option>
                    <option value="tarde">Familiar Rio Manso grado2</option>
                    <option value="tarde">Frontera al Límite grado 4</option>
                </Form.Control>
            </Form.Group>

            <Form.Row className="font-weight-bold">
                <Form.Group as={Col}>
                    <Form.Label>Adultos</Form.Label>
                    <InputGroup >
                        <InputGroup.Prepend>
                            <Button
                                variant="success"
                                className="btnorange"
                                onClick={() => changeQty("adults", "-")}
                                disabled={form.adults < 1}
                            >
                                -
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            value={form.adults}
                            name="adults"
                            type="number"
                            placeholder="0"
                            onChange={handleChange}
                            min={0}
                            max={10}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="success"
                                className="btnorange"
                                onClick={() => changeQty("adults", "+")}
                                disabled={form.adults > 9}
                            >
                                +
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Niños</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button
                                variant="success"
                                className="btnorange"
                                onClick={() => changeQty("childs", "-")}
                                disabled={form.childs < 1}
                            >
                                -
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            value={form.childs}
                            name="childs"
                            type="number"
                            placeholder="0"
                            onChange={handleChange}
                            min={0}
                            max={10}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="success"
                                className="btnorange"
                                onClick={() => changeQty("childs", "+")}
                                disabled={form.childs > 9}
                            >
                                +
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" className="btncolor px-5" disabled={disabled}>
                Siguiente
            </Button>
        </Form>
    );
}