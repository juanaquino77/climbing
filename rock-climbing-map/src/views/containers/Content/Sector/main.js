import React from 'react';
import { SectorSection } from './styled';
import { SpotTitle } from '../Spot/styled';
import { Container, Row, Col } from 'reactstrap';
import sector from '../../../../assets/data/sector.js';
import Item from './Item';

function Sector (props)  {
  const sectors = props.spotSelected.sector.map(s => {
    return (
      sector[s-1]
    )
  })
  return (
    <SectorSection>
      <SpotTitle>
        Spot {props.spotSelected.name} 
      </SpotTitle>
      <Item sectors={sectors} difficulty={props.spotSelected.difficulty} handleClickSector={props.handleClickSector} />
    </SectorSection>
  );
}

export default Sector;