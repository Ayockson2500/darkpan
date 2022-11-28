import React from "react";
import { StyledFieldInput } from "./StyledFieldInput.styles";

const FieldInput = ({ type, placeholder, className, value, label, onChange }) => {
  return (
    <StyledFieldInput>
      <label htmlFor="floatingInput">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onChange}
      />
    </StyledFieldInput>
  );
};

export default FieldInput;
