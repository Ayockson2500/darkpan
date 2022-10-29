import styled from "styled-components";

const StyledInputField = styled.div`

input {
    background: ${props => props.theme.color.secondaryDarkbg};
    border: none;
    color: ${props => props.theme.color.mainNavyColor};
    padding: 2px 10px;
    border-radius: 5px;
}
input:focus {
    border: 4px solid ${props => props.theme.color.mainDarkRedColor};
    outline: none;
    border-radius: 5px;
}

input::-webkit-input-placeholder {
        color: ${props => props.theme.color.mainNavyColor};
        font-size: 14px;
  }  
`

export default StyledInputField;