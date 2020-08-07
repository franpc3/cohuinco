import React, { useState } from 'react';
import { Form, Button, Image, Alert } from 'react-bootstrap';
import './Login.css';
import ingresar from '../Images/ingresar.png'

export default function Login({setLogin}) {

    const [form, setForm] = useState({name: "", password: ""});
    const [errorMsj, setErrorMsj] = useState(''); 

    const onChange = target =>  setForm({...form , [target.id]: target.value})
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(form.name === 'cohuinco' && form.password === 'cohuinco20'){
            setLogin(true);
        }else{
            setLogin(false);
            setErrorMsj('Usuario o contraseña incorrecto');
        }
    }

    return ( 
        <>
            <Image src={ingresar} fluid alt="ingresar" />
            <div className="d-flex justify-content-center align-content-center mt-5 ">

                <Form className="d-flex flex-column align-content-center text-center nose" onSubmit={event =>handleSubmit(event)} >

                    <Form.Group controlId="name" >
                        <Form.Label className="font-weight-bold" >Usuario</Form.Label>
                        <Form.Control type="text" className="borderinput"  value={form.name} onChange={({target}) => onChange(target) } />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label className="font-weight-bold">Contraseña</Form.Label>
                        <Form.Control type="password" className="borderinput" value={form.password} onChange={({target}) => onChange(target) }/>
                    </Form.Group>
                    <Button variant="dark" type="submit" className=" btncolor px-5 mt-2" >
                        Ingresar
                    </Button>
                    <Alert variant="danger" className="mt-5" show={errorMsj !== ''} onClose={() => setErrorMsj('')} dismissible>{errorMsj}</Alert>
                </Form>
            </div>
        </>
    );
}