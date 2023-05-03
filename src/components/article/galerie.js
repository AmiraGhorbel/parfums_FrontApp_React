import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";


class Galerie extends Component {

    constructor(props) {

        super(props);
        this.state = { articles: [] };
    }
    componentDidMount = async () => {
        this.getArticles()

    }
    componentDidUpdate() { this.getArticles(); }
    getArticles = async () => {
        await axios.get("http://localhost:3004/articles")
            .then(response =>
                this.setState({
                    articles: response.data
                }))
            .catch(function (error) {
                console.log(error);
            })
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
        return (
            <div className="Galerie" >
                <div className="articls">
                    {this.state.articles.map((l) =>
                        <Card style={{ width: '22rem', height: '37rem' }}>
                            <Card.Img variant="top" src={l.img} alt='Image' />
                            <Card.Body>
                                <Card.Text>{l.desigArt}</Card.Text>
                                <Card.Text>{l.descArt} </Card.Text>
                                <Card.Text>{l.prixArt}Dt</Card.Text>
                                <Card.Text>{l.marque}</Card.Text>
                                <Card.Title><Link className="btn btn-primary" to={"/PhotoDetails/" + l._id}>Plus de Detail </Link></Card.Title>

                            </Card.Body>
                        </Card>
                    )
                    }
                </div>
            </div>
        );
    }
}
export default Galerie;