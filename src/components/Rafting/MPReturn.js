import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import "./Rafting.css";

export default function MPReturn( ) {
    const [disabled, setDisabled] = useState(true),
    [form, setForm] = useState({ name: '', passport: '', phone: '', mail: '', in: moment().format("YYYY-MM-DD"), inP: moment().format("YYYY-MM-DD"), origin: '', cities: '', transport: '', previosIll: '', symptoms: '', insurance: '', insuranceData: '', declaration: '', sign: '' }),
    history = useHistory(),
    status = useParams(),

    handleChange = ({ target }) => setForm({ ...form, [target.name]: target.value }),

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled) return;
        // subir datos al sv
        history.push('/');
    };

    useEffect(() => {
        form.in && (form.transfer ? form.address : true) && form.time && form.adults + form.childs > 0 && form.type > 0
        ? setDisabled(false)
        : setDisabled(true);
    }, [form]);

    return (
        <Container fluid>
            <Row>
                <Col xs={12}  className="backgroundimage ">
                <Form className=" text-center marginx" onSubmit={handleSubmit}>
                    <h5 className="my-5 font-weight-bold">Declaración de estado de Salud de pasajeros (procedentes de áreas de transmisión sostenida: Europa, Asia, Estados Unidos. 12/03/2020) <span className="font-weight-normal">- Passenger Health Status Statement (from sustained transmission areas: Europe, Asia, United States (03/12/2020) </span></h5>
                    <Form.Row className="d-flex flex-column ">
                        <Form.Group as={Col}>
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Nombre y Apellido -Name and Surname</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.name}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Pasaporte - Passaport</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.passport}
                                    name="passport"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Teléfono de contacto - Telephone contact</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.phone}
                                    name="phone"
                                    type="phone"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Mail -Email</Form.Label>
                            </Col>
                            <Col xs={12}  >
                            <input
                                value={form.mail}
                                name="mail"
                                type="mail"
                                className="form-control"
                                onChange={handleChange}
                            />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Fecha de llegada a la Argentina - Date of Arrival to Argentina</Form.Label>
                            </Col>
                            <Col xs={12} className="mt-1">
                                <input
                                    value={form.in}
                                    max={form.inP}
                                    name="in"
                                    type="date"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Fecha de llegada a Bariloche - Date of arrival to Bariloche:</Form.Label>
                            </Col>
                            <Col xs={12}  className="mt-1">
                                <input
                                    value={form.inP}
                                    min={form.in}
                                    name="inP"
                                    type="date"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Procedencia - Origin: </Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.origin}
                                    name="origin"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>   
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Ciudades que visitó los últimos 14 días- Cities you have visited during the last 14 days:  </Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.cities}
                                    name="cities"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12} className="mt-1">
                                <Form.Label className="font-weight-bold">Medio de transporte utilizado- Mean of transport used:</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.transport}
                                    name="transport"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Enfermedades preexistentes- Pre-existing diseases: Diabetes (  ), Enfermedad respiratoria crónica- Chronic respiratoy disease(  ), Inmunodeprimido- Immunosuppressed (  ), Paciente oncológico- Cancer patient (  ), u otras- or others (cuáles- which…) :</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.previosIll}
                                    name="previosIll"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Actualmente presenta algún síntoma- Currently have any symptoms: Si-Yes (), No-No( ), Cuáles- Which…… (Tos, Fiebre, Dolor de garganta, Problema respiratorio- Cough, Fever, Sore throat, Breathing problems):</Form.Label>
                            </Col>
                            <Col xs={12}>
                                <input
                                    value={form.symptoms}
                                    name="symptoms"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12} className="mt-1">
                                <Form.Label className="font-weight-bold">Tiene seguro de viajero- Have traveler insurance: Si- Yes ( ), No- No ( ):</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.insurance}
                                    name="insurance"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Nombre y número del seguro- Name and number of insurance:</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <input
                                    value={form.insuranceData}
                                    name="insuranceData"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Declaro que ante la presencia de síntomas (fiebre o síntomas respiratorios), comunicaré a admisión. I declare that in presence of symptoms (fever or respiratoy symptoms), I will comunicate to admission</Form.Label>
                            </Col>
                            <Col xs={12}  >
                                <Form.Control as="select" custom name="declaration" value={form.declaration} onChange={handleChange}>
                                    <option value="">Elegi una opción - Choose a option</option>
                                    <option value="yes">Si - Yes</option>
                                    <option value="no">No - No</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="text-center">
                        <Form.Group as={Col} className ="d-flex flex-column">
                            <Col xs={12}  className="mt-1">
                                <Form.Label className="font-weight-bold">Firma y aclaración del pasajero- Passenger´s Signature and clarification :</Form.Label>
                            </Col>
                            <Col xs={12}>
                                <input
                                    value={form.sign}
                                    name="sign"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                
                    <Button variant="primary" type="submit" className="btncolor px-5 my-4" disabled={disabled}>
                        Finalizar - Finish
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>        
    );
}