import React from 'react';
import { ItemSection, Image, ItemDescription, Button, ItemDifficulty, TitleSection, Img } from './styled';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import { Card, Button, CardTitle, CardText } from 'reactstrap';


const Item = (props) => {
  // console.log(props.spot);
    return (
      <ItemSection>
        <Img src={props.spot.img} alt="Card image cap" id={props.spot.id} name={props.spot.name} onClick={props.handleClickSpot}/>
        <ItemDescription>
          <TitleSection>{props.spot.name}</TitleSection>
          <ItemDifficulty difficulty={props.spot.difficulty}>{props.spot.difficulty}</ItemDifficulty>
          <p>Distancia: {props.spot.Location.lat}</p>
          {/* <p>Longitud: {props.spot.Location.long}</p> */}
          {/* <p>Dificultad: {props.spot.difficulty}</p> */}
          <Button id={props.spot.id} name={props.spot.name} img={props.spot.img} onClick={props.handleClickSpot}>
            detalles
          </Button>
        </ItemDescription>
      </ItemSection>      
    );
}

export default Item;