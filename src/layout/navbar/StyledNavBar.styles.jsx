import styled from "styled-components";

export const StyledNavBar = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.orange-color {
    color: #EB1616;
    cursor: pointer;
}
.bars-icon:hover {
    color: ${props => props.theme.color.mainHoverRed};
}
.navbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: ${props => props.theme.color.primaryDarkBg};
}
.barIconSearch-wrapper {
    margin-right: 100px;
}
.barsIcon-wrapper {
    background: ${props => props.theme.color.secondaryDarkbg};
    padding: 10px;
    border-radius: 50%;
}
.notification-wrapper {
    color: ${props => props.theme.color.mainNavyColor};
}
.userImage {
        border-radius: 50px;
    }
.itemIcons {
        background: ${props => props.theme.color.secondaryDarkbg};
        padding: 5px;
        border-radius: 50px;
        margin-right: 10px;
    }
.navItem:hover {
        color: ${props => props.theme.color.mainRedColor};
        transition: .5s;
        cursor: pointer;
}
`