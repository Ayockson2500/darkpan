import React from 'react'
import StyledInputField from "./StyledInputField.styles"

const InputField = ({placeholder}) => {
  return (
    <StyledInputField>
        <input type="text" placeholder={placeholder} />
    </StyledInputField>
  )
}

export default InputField