import styled from "styled-components";

export const StyledRecievedMessages = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    border-radius: 5px;
    width: 100%;

    .userImage {
        border-radius: 50px;
        margin-right: 15px;
    }
    .fs-14 {
        font-size: 10px;
    }
    .lightColor {
        color: ${props => props.theme.color.mainLightColor};
    }
    .GrayColor {
        color: ${props => props.theme.color.mainNavyColor};
    }
    .contentItem {
        border-bottom: 1px solid ${props => props.theme.color.secondaryDarkbg};
        padding: 10px 0;
    }
    .contentItem:hover {
        background: ${props => props.theme.color.secondaryDarkbg};
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.color.mainNavyColor};
        text-align: center;
    }
    .allMessage-wrapper:hover {
        background: ${props => props.theme.color.secondaryDarkbg}; 
        /* width: 100%; */
    }
`