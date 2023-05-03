import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";


class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [],
            Colornames: {Acheter:false} };
    }

    chkclick=(e)=>{
        var {name,checked}=e.target;
        this.setState((e)=>{
            var Selectedprix=e.Colornames;
            return Selectedprix[name]=checked;
        });
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
        var displayprix=Object.keys(this.state.Colornames).filter((x)=>this.state.Colornames[x]);
        return (
            <div className="Panier" >
                <Row>
                    <div className="overflowScroll" style={{ overflow: 'scroll', width: '930px', height: '370px', borderStyle: 'solid', borderColor: 'chocolate', borderWidth: '2px' }}>
                        <Col sm={10}>
                            <table>
                                <tr>
                                    <div className="articls">
                                        {this.state.articles.map((l) =>
                                        
                                            <td>
                                                <img width={200} height={200} src={l.img} alt='parfum' />

                                                <br></br><label>{l.desigArt}</label>
                                                <br></br><label>{l.descArt} </label>
                                                <br></br><label>{l.prixArt}Dt</label>
                                                <br></br><label>{l.qteArt}</label>
                                                <br></br><input type="checkbox" name={l.prixArt} value="aaaa" onChange={this.chkclick}/><label>Acheter</label>
                                                <hr></hr>
                                            </td>
                                        )
                                        }
                                    </div>
                                </tr>
                            </table>
                        </Col>

                    </div>
                    <Col sm={2}>
                        <div style={{ float: 'left' }}>
                            <br></br><input type="submit" class="btn btn-primary" style={{ float: 'left' }} value="verifier Total" />
                            <input type="reset" class="btn btn-danger" value="Annuler" /><br></br><br></br>
                            <p style={{ float: 'left' }}>Total Commande:</p><input type="text" value={displayprix} style={{ float: 'left' }} name="tot" disabled />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to={'/confirm'}><input type="button" style={{ float: 'left' }} class="btn btn-success" value="Payer" /></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Panier;