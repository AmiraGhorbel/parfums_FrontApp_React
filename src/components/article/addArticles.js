import React from 'react';
import axios from 'axios';
import "./static/art.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";


class NewArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desigArt: 'Parfum',
            descArt: '',
            qteArt: '',
            prixArt: 0.000,
            marque: '',
            fournisseur:'',
            redirect: null
        }
    }

    Addarticle = () => {
        const articleObject = {
            desigArt: this.state.desigArt,
            descArt: this.state.descArt,
            qteArt: this.state.qteArt,
            prixArt: this.state.prixArt,
            marque: this.state.marque,
            img: this.state.img,
            fournisseur: this.state.fournisseur
        };

        axios.post('http://localhost:3004/articles', articleObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/Articleslist" });
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            
            <form onSubmit={this.Addarticle}>
                <h1 style={{color:'#AD1457',fontFamily:'Times New Romon' }}>Ajout Article</h1>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }} className="col"> Title: </label><br></br><input type="text" name="desigArt" value={this.state.desigArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Description: </label><br></br><input type="textarea" name="descArt" value={this.state.descArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Quantité: </label><br></br><input type="text" name="qteArt" value={this.state.qteArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Prix: </label><br></br><input type="text" name="prixArt" value={this.state.prixArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Marque: </label><br></br><input type="text" name="marque" value={this.state.marque} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Image: </label><br></br><input type="text" name="image" value={this.state.img} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Fournisseur: </label><br></br><input type="text" name="marque" value={this.state.fournisseur} onChange={this.handleChange} />
                <br></br>
                <br></br>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        );
    }
}
export default NewArticle;