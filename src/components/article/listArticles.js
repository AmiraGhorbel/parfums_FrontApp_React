import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";


export default class ListArticles extends Component {

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
  deleteArticle = async (_id) => {
    await axios.delete('http://localhost:3004/articles/' + _id)
      .then((res) => {
        console.log('Article successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }

  Listarticles = () => {
    return this.state.articles.map((l) =>
      <tr>

        <td>{l.desigArt}</td>
        <td>{l.prixArt}00Dt</td>
        <td>{l.qteArt}</td>
        <td>{l.descArt}</td>
        <td>{l.marque}</td>
        <td><img src={l.img} alt={l.desigArt} higth={100} width={100} /></td>
        <td>
          <Link className="btn btn-primary" to={"/edit/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteArticle(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListArticles">
        <Link style={{fontSize:'20px',float:'left'}} className="btn btn-warning" to={"/add"}> Add Article </Link>
        <Link style={{fontSize:'20px',float:'right'}} className="btn btn-primary" to={"/accueil"}> Deconnection </Link>
        <h1 align="center" style={{ color: 'crimson', fontFamily: 'Times New Romon', fontSize: '50px' }}>Article List</h1>
        
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Designation</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prix</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Quantité</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Description</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Marque</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Image</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: 'darkred', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.Listarticles()}
          </tbody>
        </Table>
      </div>
    );


  }



}