import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form,Button,FormControl,Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbarr extends Component {
    state = {

    }

    render() {

        return (
            <div className="Navbarr">
                <br></br>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/accueil" style={{fontStyle:'italic', fontFamily: 'Times New Romon', color: 'blue', fontSize: '25px' }}>Princesse de beauté</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/accueil" style={{ color: '#0D47A1', fontSize: '18px' }}>Acceuil</Nav.Link>
                        <Nav.Link href="/Galerie" style={{ color: '#0D47A1', fontSize: '18px' }}>Catalogue</Nav.Link>
                        <Nav.Link href="/apropos" style={{ color: '#0D47A1', fontSize: '18px' }}>A Propos</Nav.Link>
                        <Nav.Link href="/fournisseur" style={{color:'#0D47A1',fontSize:'18px'}}>Fournisseurs</Nav.Link>
                        <Nav.Link href="/Contact" style={{ color: '#0D47A1', fontSize: '18px' }}>Contact</Nav.Link>
                    </Nav>
                    <br></br>
                    <Form style={{ float: 'right' }} className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-sm-3"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button> 
                    </Form>
                    <Link style={{float:'right'}} className="btn btn-primary" to={"/login"}> Connection </Link>
                </Navbar>
                <br></br>
                </div>
        );
    }
}
export default Navbarr;