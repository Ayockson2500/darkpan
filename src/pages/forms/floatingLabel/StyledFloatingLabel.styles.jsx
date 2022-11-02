import styled from "styled-components";

export const StyledFloatingLabel = styled.div`
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
        .form-control {
            height: 48px;
            background: ${props => props.theme.color.secondaryDarkbg};
            border: none;
        }
        .form-control:focus {
            transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
            outline: 1px solid #F58B8B;
            border-radius: 2px;
            box-shadow: .1px .1px .5px 5px #4E1B21;
        }
`