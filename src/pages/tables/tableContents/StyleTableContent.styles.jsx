import styled from "styled-components";

export const StyledTableContent = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       }
        background: ${props => props.theme.color.primaryDarkBg};
        color: ${props => props.theme.color.mainNavyColor};
        border-radius: 5px;
        width: 100%;
        padding: 20px;

        table thead td {
            padding: 10px;
            color: #6C7285;
            font-size: 14px;
            border-bottom: 1px solid;
        }
        table tbody td {
            padding: 10px;
        }
        tr {
            border-bottom: 1px solid black;

        }
        .title {
            color: white;
        }
       
        table thead td .border-2 {
            border-bottom: 2px solid;
           
        }
`