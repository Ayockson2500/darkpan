import styled from "styled-components";

export const StyleFileInput = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       }
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        .navy-color {
            color: ${props => props.theme.color.mainNavyColor};
        }
        .fs-14 {
            font-size: 14px;
        }
        .title {
            color: ${props => props.theme.color.mainLightColor};
            margin-bottom: 10px;
        }
        label {
            margin-bottom: 10px;
        }
`