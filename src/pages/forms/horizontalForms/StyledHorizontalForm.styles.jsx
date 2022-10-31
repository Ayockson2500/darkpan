import styled from "styled-components";

export const StyleHorizontalForm = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       }
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        .title {
            color: ${props => props.theme.color.mainLightColor};
            margin-bottom: 10px;
        }
        .navy-color {
            color: ${props => props.theme.color.mainNavyColor};
        }
        .inputField {
            width: 300px;
            padding: 4px;
            border-radius: 3px;
        }
        label {
            color: ${props => props.theme.color.mainNavyColor};
            font-size: 14px;
        }
        .email-label {
            margin-right: 35px;
        }
        .password-label {
            margin-right: 10px;
        }
        Button a {
            padding: 4px 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        Button a {
            text-decoration: none;
            color: white;
            font-weight: normal;
            font-size: 14px;
        }
        .fs-14 {
            font-size: 14px;
        }
        .form-check-input[type="radio"] {
            border-radius: 50%;
        }
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
        .form-check-input input[type="radio"]:checked::before {
            background-color: red;
            background-repeat: no-repeat;
            background-position: center;
        }
`