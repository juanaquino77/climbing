import React, { Component, Fragment  } from 'react';
import Header from '../../components/Header';
import FindBar from '../../components/FindBar';
import {  ContentSection, GreenTheme } from './styled';
import Spot from './Spot';
import Sector from './Sector';
import Details from './Details';
import sector from '../../../assets/data/sector.js';
import spots from '../../../assets/data/spots.js';
import vias from '../../../assets/data/vias.js';

class Content extends Component {
  state = {
    sector: -1,
    details: "",
    spotName: "",
    spotSelected: {},
    sectorSelected: {},
    img: "",
  };
  handleClickSpot = (e) => {
    // console.log(e.target.name);
    this.setState({
      sector: e.target.id,
      spotName: e.target.name,
      spotSelected: spots[e.target.id - 1],
    })
  }  
  handleClickSector = (e) => {
      alert(e.target.id);
    this.setState({
      details: e.target.id,
      sectorName: e.target.name,
      sectorSelected: sector[e.target.id],
      img: e.target.name,
    })
  }
  
  render() {
    return (
      <Fragment>
        <Header />
        <FindBar />
          <ContentSection>
            {
              this.state.sector == -1 && this.state.details == "" &&
              <Spot places={spots} handleClickSpot={this.handleClickSpot} id="3" />
            }
            {
              this.state.sector !== -1 && this.state.details == "" &&
              <Sector 
              spotSelected={this.state.spotSelected}
              handleClickSector={this.handleClickSector}
              />
            }
            { 
            this.state.details !== "" &&
            <Details 
              sectorSelected={this.state.sectorSelected}
              img={this.state.img}
              vias={vias} 
              id={this.state.details}
              places={sector} 
              handleOpenModal={this.props.handleOpenModal} 
              /> 
            }
          </ContentSection>
      </Fragment>      
    )
  }
}

export default Content;
