import React from 'react';
import {useState}  from 'react'
import { Form, Col, InputGroup, Button} from 'react-bootstrap';
import  DatePicker  from 'react-datepicker';
import Alojamiento from './Alojamiento'
import Rafting from './Rafting'

export default function FormAppointmens() {

    const [forms,setForms] = useState({
      alojamiento: true,
      rafting:false
    })

    const { alojamiento, rafting } = forms;

    const showAlojamiento = () => {
      setForms({
        alojamiento: true,
        rafting: false
      })
    }

    const showRafting = () => {
      setForms({
        alojamiento: false,
        rafting: true
      })
    }


    return (
        <div>
            <Button type="" onClick={showAlojamiento}>Alojamiento </Button>
            <Button type="" onClick={showRafting} >Rafting </Button>
            <Button type="">Bicicleta</Button>
            {
              alojamiento && <Alojamiento/>
              
            }
            {
              rafting && <Rafting/>
            }
     
      </div>
    );
  }
  
  