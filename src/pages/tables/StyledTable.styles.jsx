import styled from "styled-components";

const StyleTable = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       }
       .table-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 20px;
       }
       .single-table-wrapper {
        margin-bottom: 20px;
       }
       .dark-bg {
        background: ${props => props.theme.color.secondaryDarkbg};
       }
`

export default StyleTable;