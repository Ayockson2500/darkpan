import styled from "styled-components";

const StyledMainNavBar = styled.div`
    background: ${props => props.theme.background.mainHompageDarkBg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 2px solid red;
    a {
        text-decoration: none;
        color: ${props => props.theme.color.mainNavyColor};
        font-size: ${props => props.theme.fontsize.fontsize20};
        font-weight: ${props => props.theme.fontWight.fontWight70};
    }
    .logo {
        color: ${props => props.theme.color.mainRedColor};
    }
    Button {
        padding: 2px 15px;
    }
    Button a {
        font-size: 12px;
    }
    .signUp-btn {
        background: #EDEDED;
        border: 1px solid red;
    }
`

export default StyledMainNavBar;