import React from 'react';
import { ModalSection, Button } from './styled';

function Modal (props) {
  return (
    <ModalSection>
      {props.children}
      {/* <Button onClick={props.handleCloseModal}>X</Button> */}
    </ModalSection>
  )
}

export default Modal;