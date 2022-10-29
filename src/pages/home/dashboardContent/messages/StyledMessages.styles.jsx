import styled from "styled-components";

export const StyledMessages = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    padding: 20px;
    border-radius: 5px;
    width: 100%;

    .title-wrapper {
        margin: 15px 0;
    }
    .title-wrapper p {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 14px;
    }
    .title-wrapper a {
        text-decoration: none;
        color: ${props => props.theme.color.mainRedColor};
        font-size: 14px;
    }
    .userImage {
        border-radius: 50px;
        margin-right: 15px;
    }
    .fs-14 {
        font-size: 12px;
    }
    .sender-name {
        font-size: 12px;
        font-weight: bold;
        margin-right: 27px;
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
`