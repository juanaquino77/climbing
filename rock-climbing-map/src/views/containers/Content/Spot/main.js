import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Item from './Item';
import { SpotSection, SpotCol, SpotRow, SpotTitle } from './styled';


const Spot = (props) => {
  // console.log(props);
    return (
      <SpotSection>
        <SpotTitle>
          Spots
        </SpotTitle>
        {/* <Row> */}
        {/* <ul> */}
          {
            props.places.map((spot, key) => {
              return (
                // <Col xs="6">
                // <li>
                    <Item spot={spot} handleClickSpot={props.handleClickSpot} />
                // </li>                  
                // </Col>
              )
            })
          }
        {/* </ul>           */}
        {/* </Row> */}
      </SpotSection>
    );
}

export default Spot;