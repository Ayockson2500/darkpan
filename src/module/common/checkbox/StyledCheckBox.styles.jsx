import styled from "styled-components";

export const StyledCheckBox = styled.div`
    .form-check-input {
        width: 1em;
        height: 1em;
        margin-top: 0.25em;
        vertical-align: top;
        background-color: #000;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: 1px solid rgba(0,0,0,0.25);
        appearance: none;
        color-adjust: exact;
    }
    .form-check-input:checked {
        background-color: #EB1616;
        border-color: #EB1616;
   }
`