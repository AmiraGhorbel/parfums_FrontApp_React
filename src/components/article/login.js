import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    state = {

    }

    render() {

        return (
            <div className="Login" style={{float:'center'}}>
                <center><Form onSubmit={(e)=> login(e)} style={{float:'center',fontSize:'20px',fontFamily:'Times New Roman',color:'#C51162',backgroundColor:'#EF9A9A',height:'300px',width:'400px'}}>
                    <Row className="justify-content-md-center mt-5">
                        <Form.Group  sm={8} as={Col} controlId="formGridLogin">
                            <label style={{fontSize:'30px',float: 'center'}}>Login</label><br></br>
                            <input type="text" placeholder="Enter login" id="log" /><br></br><br></br>
                        </Form.Group >
                        <Form.Group sm={8} as={Col} controlId="formGridPassword">
                            <label style={{ fontSize:'30px',float: 'center' }}>Password</label>
                            <br></br>
                            <input type="password" placeholder="Password" id="pass" />
                            <br></br><br></br>
                           <Link to={'/Articleslist'} class="btn btn-primary">Connection</Link> <button type="submit" class="btn btn-primary">VerifierLogin</button>
                        </Form.Group>
                    </Row>
                </Form></center>
            </div>
        );
    }
}
function login(e){
    e.preventDefault();
    let request={
        login: document.getElementById('log').value,
        password: document.getElementById('pass').value
    }
    axios.post('http://localhost:3004/logins', request)
    .then( resp =>{ alert(resp.data.message);
})
.catch(err =>{
    console.log(err);
})
}
export default Login;