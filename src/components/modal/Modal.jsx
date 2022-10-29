import React from "react";
// import ReactDOM from "react-dom";
import { StyledModal } from "./StyledModal.styles";

const Modal = ({ children, onClose, show, className }) => {
  if (!show) return null;
  return (
    <>
      <StyledModal className={className} onclose={onClose}>
        {children}
      </StyledModal>
    </>
  );
};

export default Modal;
