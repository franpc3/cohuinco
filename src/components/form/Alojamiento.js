


import React from 'react';
import {useState}  from 'react'
import { Form, Col, InputGroup, Button} from 'react-bootstrap';
import  DatePicker  from 'react-datepicker'

export default function Alojamiento() {

    const [validated, setValidated] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(startDate);
    const ExampleCustomInput = ({ value, onClick }) => (
      <Button    className="example-custom-input w-100" onClick={onClick}>
        {value}
      </Button>
    );




  
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    const [forms,setForms] = useState({
      alojamiento: true,
      rafting:false
    })

    const { alojamiento, rafting } = forms;
  
    return (
        <div>
           <Form noValidate validated={validated} onSubmit={handleSubmit}>
<Form.Row>
  <Form.Group as={Col}  lg="12" controlId="validationCustom01">
  <div className="datePicker">
     <DatePicker
            dateFormat="dd/MM/yyyy "
             selected={startDate}
             onChange={date => setStartDate(date)}
             selectsStart
             startDate={startDate}
             endDate={endDate} 
             customInput={<ExampleCustomInput />}
          />
           
     </div>
  
  </Form.Group>
  
  <Form.Group as={Col} lg="12" controlId="validationCustom02">
  <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
           selectsEnd
           startDate={startDate}
            endDate={endDate}
            minDate={startDate}
           />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="4" controlId="validationCustomUsername">
    <Form.Label>Username</Form.Label>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        placeholder="Username"
        aria-describedby="inputGroupPrepend"
        required
      />
      <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
</Form.Row>
<Form.Row>
  <Form.Group as={Col} md="6" controlId="validationCustom03">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="City" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid city.
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="3" controlId="validationCustom04">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="State" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid state.
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="3" controlId="validationCustom05">
    <Form.Label>Zip</Form.Label>
    <Form.Control type="text" placeholder="Zip" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid zip.
    </Form.Control.Feedback>
  </Form.Group>
</Form.Row>
<Form.Group>
  <Form.Check
    required
    label="Agree to terms and conditions"
    feedback="You must agree before submitting."
  />
</Form.Group>
<Button type="submit">Submit form</Button>
</Form>
     

     

      
      </div>
    );
  }
  
  