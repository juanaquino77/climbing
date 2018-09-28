import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import Content from  './views/containers/Content';
import ModalContainer from '../src/widgets/containers/modal';
import Modall from '../src/widgets/components/modal';
import vias from './assets/data/vias.js';

class App extends Component {
  state = {
    modalVisible: false,
    viaId: "",
    viaName: "",
    viaSelected: {},
    modal: false,
    
  };
  handleCloseModal = (event) =>{
    this.setState({
      modalVisible: false,
    })
  }
  handleOpenModal = (event) =>{
    this.setState({
      modalVisible: true,
      viaId: event.target.id,
      viaSelected: vias[event.target.id-1],
    })
  }
  render() {
    // console.log(this.state.viaSelected);
    const { viaSelected } = this.state;
    return ( 
      <div>
        <Content handleOpenModal={this.handleOpenModal}/>  
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modall handleCloseModal={this.handleCloseModal} viaId={this.state.viaId} 
              isOpen={this.state.modalVisible} toggle={this.handleCloseModal} className={this.props.className}>
              <ModalHeader toggle={this.handleCloseModal}>
                {viaSelected.name}
              </ModalHeader>
              <ModalBody>
                Dificultad: {viaSelected.difficulty}
              </ModalBody>
            </Modall>
          </ModalContainer>
        }
       </div>
    );
  }
}

export default App;