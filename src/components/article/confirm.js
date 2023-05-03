import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form } from 'react-bootstrap';


class Contact extends Component {
    state = {

    }

    render() {

        return (
            <div className="Contact">
                <br></br>
                <h2 style={{ float: 'left', color: '#AD1457', fontFamily: 'Times New Romon' }}>Contacter Nous</h2>
                <br></br>
                <br></br>
                <hr></hr>
                <Form style={{ color: '#EC407A', fontSize: '20px' }}>
                    <Row >
                        <Col sm={6} controlId="formGridEmail">
                            <label style={{ float: 'left' }}>Email</label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Form.Group sm={6} as={Col} controlId="formGridPassword">
                            <label style={{ float: 'left' }}>Nom et Prenom</label>
                            <Form.Control type="password" placeholder="Nom et Prenom" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col sm={6} controlId="formGridAddress1">
                            <label style={{ float: 'left' }}>Address</label>
                            <Form.Control placeholder="1234 Main St" />
                        </Col>
                        <Form.Group sm={6} as={Col} controlId="formGridAddress2">
                            <label style={{ float: 'left' }}>Address 2</label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                    </Row>


                    <Row>
                        <Col sm={6} controlId="formGridCity">
                            <label style={{ float: 'left' }}>Ville</label>
                            <Form.Control />
                        </Col>

                        <Form.Group sm={6} as={Col} controlId="formGridState">
                            <label style={{ float: 'left' }}>Rue</label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group sm={6} as={Col} controlId="formGridZip">
                            <label style={{ float: 'left' }}>Code Postal</label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check style={{ float: 'left' }} type="checkbox" label="Confirmer votre Commande s'il vous plait" /><br></br><br></br>
                    </Form.Group>
                    <Form.Group sm={6} as={Col} controlId="formGridZip">
                        <label style={{ float: 'left' }}>Mode Livraison</label><br></br>
                    </Form.Group>
                    <input type="radio" style={{ float: 'left' }} value="Domicile" /><label style={{ float: 'left' }}>Domicile</label><br></br>
                        <input type="radio" style={{ float: 'left'}} value="Par Poste" /><label style={{ float: 'left' }}>Par Poste</label><input style={{ float: 'left' }} type="text" placeholder="Numero carte Bancaire" />


                        <br></br><br></br><Button style={{ float: 'left' }} variant="primary" type="submit">
                            Envoyer
  </Button>
                </Form>
            </div>
        );
    }
}
export default Contact;



<form onSubmit={this.Addarticle}>
                <h1 style={{color:'#AD1457',fontFamily:'Times New Romon' }}>Ajout Article</h1>
                <Row>
                    <Col md='8'>
                <fieldset style={{backgroundColor:'#F8BBD0'}}>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }} className="col"> Title:</label><input type="text" name="desigArt" value={this.state.artDesig} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Description: </label><input type="textarea" name="descArt" value={this.state.artDesc} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Quantité: </label><input type="text" name="qteArt" value={this.state.artQte} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Prix: </label><input type="text" name="prixArt" value={this.state.artPrix} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Marque: </label><input type="text" name="marque" value={this.state.artMarque} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Image: </label><input type="text" name="image" value={this.state.img} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Fournisseur: </label><input type="text" name="four" value={this.state.fournisseur} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}>Categorie: </label><input type="text" name="cat" value={this.state.categorie} className="mb-3" as={Col} md="6" onChange={this.handleChange} />
                <br></br>
                <br></br>
                <input type="submit" className="btn btn-primary" value="Submit" />
                </fieldset>
                </Col>
                </Row>
            </form>