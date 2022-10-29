import React from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from "./StyledModal.styles";

const Modal = ({children, show, onclose}) => {
    if (!show) return null;
  return ReactDOM.createPortal(
    <StyledModal show={show} onclose={onclose}>
        {children}
        <p>I am a modal</p>
    </StyledModal>
  ), document.body
}

export default Modal