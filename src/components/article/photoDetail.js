import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";
class PhotoDetail extends Component {

    constructor(props) {

        super(props);
        this.state = {
            desigArt: 'React',
            descArt: '',
            qteArt: '',
            prixArt: '',
            marque: '',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3004/articles/' + id)
            .then(response => {
                this.setState({
                    desigArt: response.data.desigArt,
                    descArt: response.data.descArt,
                    qteArt: response.data.qteArt,
                    prixArt: response.data.prixArt,
                    marque: response.data.marque,
                    img: response.data.img,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            
            <div className="PhotoDetail" style={{ width: '100%', padding: '3rem 4rem' }}>
                <label style={{ display: 'flex', justifyContent: 'center',color:'#C2185B',fontSize:'40px',fontStyle:'italic',fontFamily:'Times new Romon' }}>{this.state.desigArt}</label><br></br><br></br>
                <Row gutter={[8, 8]}>
                    <Col sm={8}>
                        <img src={this.state.img} width={400} height={250} alt={this.state.desigArt} />
                    </Col>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Description: </label></strong>{this.state.descArt}</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Quantité: </label></strong>{this.state.qteArt}</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Prix: </label></strong>{this.state.prixArt} DT</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Marque: </label></strong>{this.state.marque}<br></br></ListGroup.Item>

                        </ListGroup>

<hr></hr>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <br></br><Link to={'/panier'}><Button variant="danger">Add to cart</Button></Link></div>
                    </Col>
                </Row>


            </div>
        );
    }
}
export default PhotoDetail;