import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class Total extends Component {
    state = {
        Colornames: {
            Acheter:false,
            Payer:false,
            Commender:false
        }
    }
    chkclick=(e)=>{
        var {name,checked}=e.target;
        this.setState((e)=>{
            var Selectedprix=e.Colornames;
            return Selectedprix[name]=checked;
        });
    }
    render() {
        var displayprix=Object.keys(this.state.Colornames).filter((x)=>this.state.Colornames[x]);
        return (
            <div className="Total">
            <br></br><input type="checkbox" name={5} value="fff" onChange={this.chkclick}/><label>Acheter</label>
            <br></br><input type="checkbox" name={6} value="sss" onChange={this.chkclick}/><label>payer</label>
            <br></br><input type="checkbox" name={7} value="aaaa" onChange={this.chkclick}/><label>Commender</label>
            <input type="button" style={{ float: 'left' }} class="btn btn-success" onClick={this.chkclick} value="Payer" />
            <br></br><br></br><input type="text" value={displayprix}/>
            </div>
            );
    }
}
export default Total;