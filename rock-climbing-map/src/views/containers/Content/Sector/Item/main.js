import React from 'react';
import { ItemSection } from './styled';
import { Button, Img, Row, Roww  } from '../../Spot/Item/styled';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';

function Item (props) {
  //  console.log(props.sectors);
    return (
      <ItemSection>
        {
          props.sectors.map((sector) => {
            return (
            <Row>
              <Col xs="12">
                <h6>
                    Sector {sector.name}
                </h6>
                {
                  sector.img.map((img) => {
                    // console.log(img.url);
                    return (
                    <Roww>
                      <Col xs="6">
                        Dificultad {props.difficulty}
                          <Button id={img.idImg} onClick={props.handleClickSector} name={img.url}>
                          detalles
                        </Button>  
                      </Col>                    
                      <Col xs="6">
                          <Img src={img.url} id={img.idImg} name={img.url} onClick={props.handleClickSector} />
                      </Col>
                    </Roww>
                    )
                  })
                }
              </Col>            
            </Row>
            )
          })
        }
      </ItemSection>      
    );
  }
  
  export default Item;
