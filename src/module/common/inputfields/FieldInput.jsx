import React from 'react'
import {StyledFieldInput} from "./StyledFieldInput.styles"

const FieldInput = ({type, placeholder, className}) => {
  return (
    <StyledFieldInput>
        <input type={type} placeholder={placeholder} className={className} />
    </StyledFieldInput>
  )
}

export default FieldInput