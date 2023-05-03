import React, { Component } from 'react';
import {Container,Jumbotron,Carousel,Card,CardGroup} from 'react-bootstrap';
import img from './image/h3.Jpeg';
import img1 from './image/h6.Jpeg';
import img2 from './image/h7.Jpeg';
import img3 from './image/p5.Jpeg';
import img4 from './image/parfum2.Jpeg';
import img5 from './image/homme.Jpeg';

import imge from './image/p5.jpg';
import imge1 from './image/p2.jpeg';
import imge2 from './image/p3.jpg';
import "bootstrap/dist/css/bootstrap.min.css";


class Acceuil extends Component {

  constructor(props) {
    super(props);

}

render(){
    return(
<div className="Acceuil">
  <h1 style={{fontFamily: 'Times new Romon',color:'#00B0FF'}}>BienVenue Dans Notre Site Web</h1>
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100" bg="373940" text="First slide" width="600px" height="600px"
      src={imge}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:'#01579B'}}>N'arrêter pas de rire!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100" bg="373940" text="First slide" width="600px" height="600px"
      src={imge1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'#6D4C41'}}>Précision Extrême</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100" bg="373940" text="First slide" width="600px" height="600px"
      src={imge2}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'#DCE775'}}>Passez Une Douce Nuit!</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Jumbotron fluid style={{backgroundColor:'#78909C'}}>
  <Container>
    <h1>Nous Recommandons</h1><br></br>
  </Container>
</Jumbotron>
<CardGroup>
  <Card><Card.Img variant="top" src={img} height="200px" width="150px"/> </Card>
    
  <Card>
    <Card.Img variant="top" src={img1} height="200px" width="150px"/>
  </Card>
  <Card>
    <Card.Img variant="top" src={img2} height="200px" width="150px"/>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} height="200px" width="150px"/>
  </Card>
  <Card>
    <Card.Img variant="top" src={img4} height="200px" width="150px"/>
  </Card>
  <Card>
    <Card.Img variant="top" src={img5} height="200px" width="150px"/>
  </Card>
</CardGroup>
  </div>
    );
}
}
export default Acceuil;