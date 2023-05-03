import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Button,Form} from 'react-bootstrap';


class Contact extends Component {
    state = {

    }

    render() {

        return (
            <div className="Contact">
                <br></br>
                <h2 style={{ float: 'left',color:'#AD1457',fontFamily:'Times New Romon' }}>Contacter Nous</h2>
                <br></br>
                <br></br>
                <hr></hr>
                <Form style={{ color:'#EC407A',fontSize:'20px' }}>
                    <Row >
                        <Col sm={6} controlId="formGridEmail">
                            <label style={{ float: 'left' }}>Email</label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Form.Group sm={6} as={Col} controlId="formGridPassword">
                            <label style={{ float: 'left' }}>Nom et Prenom</label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col sm={6} controlId="formGridAddress1">
                            <label style={{ float: 'left' }}>Address</label>
                            <Form.Control placeholder="1234 Main St" />
                        </Col>
                        <Form.Group sm={6} as={Col} controlId="formGridAddress2">
                            <label style={{ float: 'left' }}>Votre Message</label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                    </Row>
                    <br></br><br></br><Button style={{ float: 'left' }} variant="primary" type="submit">
                        Submit
  </Button><br></br>
                </Form>
                <label style={{float:'center',fontSize:'25px',color:'black',fontFamily:'Times New Romon'}}>amiraghorbel72@gmail.com</label><br></br><br></br>
                <label style={{float:'center',fontSize:'25px',color:'black',fontFamily:'Times New Romon'}}>52332840</label><br></br><br></br>
                <label style={{float:'center',fontSize:'25px',color:'black',fontFamily:'Times New Romon'}}>Route lmahdiya</label><br></br><br></br>
            </div>
        );
    }
}
export default Contact;