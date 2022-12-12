import React from "react";
import { StyledFieldInput } from "./StyledFieldInput.styles";

const FieldInput = ({
  type,
  placeholder,
  className,
  name,
  value,
  label,
  onChange,
  error,
  errorMessage,
  required
}) => {
  return (
    <StyledFieldInput>
      <label htmlFor="floatingInput">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={className}
        onChange={onChange}
        required={required}
      />
      {error && <p className="text-red">{errorMessage}</p>}
    </StyledFieldInput>
  );
};

export default FieldInput;
