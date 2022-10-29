import styled from "styled-components";

export const StyledAdminProfile = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    border-radius: 5px;
    width: 100%;

    a {
        text-decoration: none;
        padding: 20px 0;
        color: ${props => props.theme.color.mainNavyColor};
        font-size: 13px;
    }

`