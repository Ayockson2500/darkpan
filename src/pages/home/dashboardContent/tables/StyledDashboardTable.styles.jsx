import styled from "styled-components";

export const StyledDashboardTable = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    margin-bottom: 20px;
    padding: 15px 20px;
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

    table {
        border: 1px solid black;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table thead th {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 14px;
        font-weight: bold;
        padding: 8px;
        border: 1px solid black;

    }
    table tr {
        border: 1px solid black;
        border-collapse: collapse;
    }
    table tr td {
        color: ${props => props.theme.color.mainNavyColor};
        padding: 8px;
        font-size: 14px;
        border: 1px solid black; 
        border-collapse: collapse;
    }
    table tr a {
        text-decoration: none;
        color: ${props => props.theme.color.mainLightColor};
        background: ${props => props.theme.color.mainRedColor};
        padding: 2px 5px;
        border-radius: 2px;
        font-size: 14px;
        margin-top: 5px;
    }
    table .form-check-input {
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