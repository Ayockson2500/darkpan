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
            transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
            outline: 1px solid #F58B8B;
            border-radius: 2px;
            box-shadow: .1px .1px .5px 5px #4E1B21;
    }
`