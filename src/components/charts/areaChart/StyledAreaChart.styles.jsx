import styled from "styled-components";

export const StyledAreaChart = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    padding: 20px;
    border-radius: 5px;

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
`