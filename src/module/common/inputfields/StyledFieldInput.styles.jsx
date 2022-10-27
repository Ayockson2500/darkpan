import styled from "styled-components";

export const StyledFieldInput = styled.div`
    input {
        background: ${props => props.theme.color.secondaryDarkbg};
        padding: 10px;
        width: 100%;
        border: none;
        margin-bottom: 15px;
        border-radius: 2px;
    }
    input:focus {
        outline: 1.6px solid ${props => props.theme.color.mainRedColor};
        border: .5px solid #F58B8B;
        border-radius: 2px;
    }
`