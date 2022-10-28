import styled from "styled-components";

export const StyledDashboardWidget = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 20px;

    .widget-data {
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 10px 20px;
        border-radius: 5px;
    }
    .widget-icon {
        color: ${props => props.theme.color.mainRedColor};
        font-size: 40px;
        font-weight: bold;
    }
    .widget-title {
        color: ${props => props.theme.color.mainNavyColor};
        font-size: 14px;
    }
    .widget-money {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 16px;
        font-weight: bold;
    }
`