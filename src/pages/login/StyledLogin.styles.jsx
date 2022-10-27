import styled from "styled-components";
const StyledLogin = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.color.secondaryDarkbg};

    .orange-color {
        color: #EB1616;
    }
    .logo-wrapper {
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 15px;
    }
    .light-text {
        color: ${props => props.theme.color.mainLightColor};
    }
    .navy-text {
        color: ${props => props.theme.color.mainNavyColor};
    }
    .fs-14 {
        font-size: 14px;
    }
    form {
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 30px;
        width: 30%;
        border-radius: 5px;
    }
    form ::-webkit-input-placeholder {
        color: ${props => props.theme.color.mainNavyColor};
        font-size: 14px;
  }
    a {
        text-decoration: none;
        color: ${props => props.theme.color.mainRedColor};
    }
    a:hover {
        color: ${props => props.theme.color.mainHoverRed};
    }
    .signin-btn {
        width: 100%;
        margin: 20px 0;
    }
    .signin-btn:hover {
        background: ${props => props.theme.color.mainHoverRed};
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
    .form-check-input:checked {
        background-color: #EB1616;
        border-color: #EB1616;
}
`

export default StyledLogin;