import React from "react";
import { StyledFieldInput } from "./StyledFieldInput.styles";

const FieldInput = ({ type, placeholder, className, label }) => {
  return (
    <StyledFieldInput>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        label={label}
      />
    </StyledFieldInput>
  );
};

export default FieldInput;
