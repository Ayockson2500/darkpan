import React from 'react'
import StyledInputField from "./StyledInputField.styles"

const InputField = ({placeholder, onChange}) => {
  return (
    <StyledInputField>
        <input type="text" placeholder={placeholder} onChange={onChange} />
    </StyledInputField>
  )
}

export default InputField