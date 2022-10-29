import styled from "styled-components";

const StyledForms = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .form-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
`

export default StyledForms;