import styled from "styled-components";

export const StyledTodoList = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    padding: 20px;
    border-radius: 5px;

    .title-wrapper {
        margin: 15px 0;
    }
    .title-wrapper p {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 14px;
    }
    .title-wrapper a {
        text-decoration: none;
        color: ${props => props.theme.color.mainRedColor};
        font-size: 14px;
    }
    .fs-14 {
        font-size: 12px;
    }
    .todo-Btn {
        padding: 2px 5px;
        margin-left: 5px;
        color: ${props => props.theme.color.mainLightColor};
        font-weight: lighter;
    }
    .todo-Btn:hover {
       background: #C81313;
    }
    .GrayColor {
        color: ${props => props.theme.color.mainNavyColor};
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
   .close-btn {
    cursor: pointer;
    font-weight: bold;
   }
   .item-wrapper {
    width: 100%;
   }
   .activeClose-btn {
        width: 1em;
        height: 1em;
        border: 3px solid ${props => props.theme.color.mainDarkRedColor};
        font-size: 20px;
   }
   .todoItem {
        border-bottom: 1px solid ${props => props.theme.color.secondaryDarkbg};
        padding: 10px 0;
   }
   .lineThrough-text {
    text-decoration: line-through;
   }
   .checkedClose-btn {
    color: #EB1616;
   }
`