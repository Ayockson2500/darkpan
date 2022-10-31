import React from "react";
import { StyledFieldInput } from "./StyledFieldInput.styles";

const FieldInput = ({ type, placeholder, className, label, }) => {
  return (
    <StyledFieldInput>
      <label for="floatingInput">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </StyledFieldInput>
  );
};

export default FieldInput;
