import styled from "styled-components";

export const StyledBasicForm = styled.form`
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
        }
        label {
            color: ${props => props.theme.color.mainNavyColor};
            font-size: 14px;
        }
        .inputField {
            margin-bottom: 0;
            padding: 4px;
        }
        .email-field-wrapper  {
            margin-bottom: 10px;
        }
        .email-field-wrapper span {
            color: #67674F;
            font-size: 12px;
        }
        .checkbox-wrapper {
            margin-bottom: 15px;
        }
        .checkbox-wrapper span {
            color: ${props => props.theme.color.mainNavyColor};
            font-size: 14px;
            margin-left: 7px;
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
`