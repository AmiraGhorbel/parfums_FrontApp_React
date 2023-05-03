import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
class EditArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desigArt: 'React',
            descArt: '',
            qteArt: '',
            prixArt: 0.000,
            marque:'',
            img:'',
            fournisseur:'',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
        this.GetOne1(this.state.fournisseur);
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
                    fournisseur: response.data.fournisseur

                });
               
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    GetOne1 = async (id) => {
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
    Editarticle = () => {
        const { id } = this.props.match.params;
        const articleObject = {
            _id: id,
            desigArt: this.state.desigArt,
            descArt: this.state.descArt,
            qteArt: this.state.qteArt,
            prixArt: this.state.prixArt,
            marque: this.state.marque,
            img: this.state.img,
            fournisseur: this.state.fournisseur
        };
        axios.put('http://localhost:3004/articles/' + id, articleObject)
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
            <form  onSubmit={this.Editarticle}>
                <h1 style={{color:'#AD1457',fontFamily:'Times New Romon' }}>Modifier Article</h1>
                 <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Title: </label><br></br><input type="text" name="desigArt" value={this.state.desigArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Description: </label><br></br><input type="text" name="descArt" value={this.state.descArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Quantité: </label><br></br><input type="text" name="qteArt" value={this.state.qteArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Prix: </label><br></br><input type="text" name="prixArt" value={this.state.prixArt} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Marque: </label><br></br><input type="text" name="marque" value={this.state.marque} onChange={this.handleChange} />
                <br></br>
               
               <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}>Fournisseur:</label><br></br><br></br>
               <select id="fournisseur" name="fournisseur">
                   <option value={this.state.fournisseur}>{this.state.fournisseur.nomFour}</option>
               </select>
               <br></br><br></br>
               <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}><img src={this.state.img} height={100} width={100} alt="parfum"/></label><br></br><br></br><input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
               <br></br><br></br>
                <input type="submit" className="btn btn-danger" value="Submit" />
            </form>
        );
    }
}
export default EditArticle;