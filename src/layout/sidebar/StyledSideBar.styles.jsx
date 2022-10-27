import styled from "styled-components";

const StyledSideBar = styled.div`
    background: ${props => props.theme.color.primaryDarkBg};
    width: 20%;
    height: 100vh;
    position: fixed;
    padding-right: 20px;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .orange-color {
        color: #EB1616;
    }
    .logo-wrapper {
        font-size: 25px;
        font-weight: 800;
        padding: 10px 0 0 20px;
        margin-bottom: 15px;
    }
    .userImage {
        border-radius: 50px;
        margin-right: 10px;
    }
    .adminImage-wrapper {
        padding-left: 20px;
        p {
            color: ${props => props.theme.color.mainLightColor};
        }
        span {
            color: ${props => props.theme.color.mainNavyColor};
        }
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.color.mainNavyColor};
        font-weight: 500;
        font-size: 12px;
    }
    a:hover {
        color: ${props => props.theme.color.mainRedColor};
        font-weight: 700;
    }
    .menu-list {
        padding: 12px 20px;
    }
    .active-menu {
        background: ${props => props.theme.color.secondaryDarkbg};
        border-left: 3px solid ${props => props.theme.color.mainRedColor};
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    .menu-list:hover {
        background: ${props => props.theme.color.secondaryDarkbg};
        border-left: 3px solid ${props => props.theme.color.mainRedColor};
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    .itemIcons {
        background: ${props => props.theme.color.secondaryDarkbg};
        padding: 5px;
        border-radius: 50px;
        margin-right: 10px;
    }
`

export default StyledSideBar;