import React from 'react'
import { StyledButton } from './StyledButton.styles'

const Button = ({children, className, onClick, disabled, type}) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled} type={type}>
        {children}
    </StyledButton>
  )
}

export default Button