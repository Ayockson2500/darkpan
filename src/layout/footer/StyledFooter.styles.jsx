import styled from "styled-components";

const StyledFooter = styled.footer`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    background: ${props => props.theme.color.primaryDarkBg};
    border-radius: 5px;

    .orange-color {
        color: #EB1616;
    }
    .navy-color {
        color:#416593;
    }
`

export default StyledFooter;