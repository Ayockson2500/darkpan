import styled from "styled-components";

export const StyledTestimonial = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 20px;
        border-radius: 5px;
        width: 100%;
    h4 {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 14px;
        font-weight: bold;
    }
    img {
        border-radius: 50%;
        object-fit: fill;
        margin-bottom: 25px;
    }
    h3 {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 16px;
        font-weight: bold;
    }
    .client-profession {
        margin-bottom: 18px;
    }
    p {
        color: ${props => props.theme.color.mainNavyColor};
    }
    .text-content {
        font-size: 12px;
    }
`