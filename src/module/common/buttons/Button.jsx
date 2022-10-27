import React from 'react'
import { StyledButton } from './StyledButton.styles'

const Button = ({children, className, onClick}) => {
  return (
    <StyledButton className={className} onClick={onClick}>
        {children}
    </StyledButton>
  )
}

export default Button