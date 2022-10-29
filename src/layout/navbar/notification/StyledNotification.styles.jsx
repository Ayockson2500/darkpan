import styled from "styled-components";

export const StyledNotification = styled.div`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    border-radius: 5px;
    width: 100%;

    .lightColor {
        color: ${props => props.theme.color.mainLightColor};
    }
    .GrayColor {
        color: ${props => props.theme.color.mainNavyColor};
    }
    .notificationItem {
        padding: 2px 0;
    }
    .fs-12 {
        font-size: 12px;
    }
    .fs-14 {
        font-size: 14px;
    }
    .contentItem {
        border-bottom: 1px solid ${props => props.theme.color.secondaryDarkbg};
        padding: 8px 0;
    }
    .contentItem a {
        text-decoration: none;
    }
    .contentItem:hover {
        background: ${props => props.theme.color.secondaryDarkbg};
        cursor: pointer;
    }
    .allMessage-wrapper a {
        text-decoration: none;
        color: ${props => props.theme.color.mainNavyColor};
    }
    .allMessage-wrapper:hover {
        background: ${props => props.theme.color.secondaryDarkbg}; 
    }
`