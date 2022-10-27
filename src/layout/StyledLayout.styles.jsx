import styled from "styled-components";

export const StyledLayout = styled.div`
 .main-wrapper {
    width: 80%;
    margin-left: 20%;
 }
 .mainChildren-wrapper {
   padding: 20px;
   background: ${props => props.theme.color.secondaryDarkbg};
 }
`