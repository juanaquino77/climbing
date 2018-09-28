import React from 'react';
import { DetailsSection, Image, ItemParagraph, Button } from './styled';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import LaVisera from '../../../../assets/images/playa-grande.png';

function Details (props) {
   console.log(props.sectorSelected);  
    return (
        <DetailsSection>
          <Card>
            <CardTitle>
              Sector {props.sectorSelected.name}
            </CardTitle>
            <CardImg top width="100%" src={props.img} alt="imagen" />
            <CardSubtitle>Seleccionar via</CardSubtitle>
            <div>
              {
                props.sectorSelected.img.map((u) => {
                console.log(props.id)
                console.log(u.idImg)
                return (
                    u.vias.map((via) => {
                      // alert("entro")
                      return (
                        props.id === u.idImg &&
                        <Button
                        onClick={props.handleOpenModal} 
                        id={via} name={props.sectorSelected}
                        >
                          {u.idImg}
                        </Button> 
                      )
                    })
                  )
                })
              }
            </div>
            </Card>
        </DetailsSection>
    );
}

export default Details;