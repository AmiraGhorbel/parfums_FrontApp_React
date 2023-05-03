import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from 'react-bootstrap';
import axios from 'axios';


class Fournisseur extends Component {

    constructor(props) {

        super(props);
        this.state = { fournisseurs: [] };
    }
    componentDidMount = async () => {
        this.getFournisseurs()

    }
    componentDidUpdate() { this.getFournisseurs(); }
    getFournisseurs = async () => {
        await axios.get("http://localhost:3004/fournisseurs")
            .then(response =>
                this.setState({
                    fournisseurs: response.data
                }))
            .catch(function (error) {
                console.log(error);
            })
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3004/fournisseurs/' + id)
            .then(response => {
                this.setState({
                    nomFour: response.data.nomFour,
                    descFour: response.data.descFour,
                    telFour: response.data.telFour,
                    emailFour: response.data.emailFour,
                    adresseFour: response.data.adresseFour,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="Fournisseur" >
                <br></br>
                <div style={{float:'left',fontSize:'20px'}}>
                <label style={{fontSize:'39px',color:'#BF360C',float:'left'}}>Nos Partenaires</label><br></br>
                <p style={{float:'left',color:'#795548'}}>Voici notre meilleures fournisseurs de notre site: </p></div>
                
                <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr>
                </hr>
                <br></br>
                <div className="fournisurs">
                    {this.state.fournisseurs.map((l) =>
                        <Card style={{float:'left', width: '22rem', height: '20rem' }}>
                            <Card.Body>
                                <Card.Title  style={{color:'#E65100',float:'center'}}>{l.nomFour}</Card.Title>
                                <br></br><hr></hr>
                                <Card.Text  style={{float:'left'}}><label style={{color:'#FFB74D'}}>Description:  </label>{l.descFour} </Card.Text>
                                <br></br><br></br>
                                <Card.Text  style={{float:'left'}}><label style={{color:'#FFB74D'}}>Telephone:  </label>{l.telFour}</Card.Text>
                                <br></br><br></br>
                                <Card.Text  style={{float:'left'}}> <label style={{color:'#FFB74D'}}>Email:  </label>{l.emailFour}</Card.Text>
                                <br></br><br></br>
                                <Card.Text  style={{float:'left'}}><label style={{color:'#FFB74D'}}>Adresse:  </label>{l.adresseFour}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                    }
                </div>
                </div>
            </div>
        );
    }
}
export default Fournisseur;