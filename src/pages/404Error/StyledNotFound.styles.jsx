import styled from "styled-components";

const StyledNotFound = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.color.primaryDarkBg};

    .notfound-content {
        width: 40%;
    }
    .notfound-content h1 {
        color: white;
        font-size: 60px;
        font-weight: bold;
    }
    .notfound-content h2 {
        color: white;
        font-weight: bold;
    }
    .notfound-content p {
        color: ${props => props.theme.color.mainNavyColor};
        font-size: 14px;
    }
    .notfound-content a {
        color: ${props => props.theme.color.mainLightColor};
        text-decoration: none;
    }
    .error-btn {
        padding: 10px;
        border-radius: 50px;
    }
`

export default StyledNotFound;