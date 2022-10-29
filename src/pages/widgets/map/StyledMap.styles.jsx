import styled from "styled-components";

export const StyledMap = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 20px;
        border-radius: 5px;
        width: 100%;
`