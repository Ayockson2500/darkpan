import styled from "styled-components";

export const StyledRecievedMessages = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    padding: 20px;
    border-radius: 5px;
    width: 100%;

    .userImage {
        border-radius: 50px;
        margin-right: 15px;
    }
    .fs-14 {
        font-size: 12px;
    }
`