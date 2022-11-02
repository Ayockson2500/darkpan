import styled from "styled-components";

const StyledWidget = styled.div`
    * {
        margin: 0;
        /* padding: 0; */
        box-sizing: border-box;
    }
    .widget-messageCalender-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
    .widget-testimonial-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
`

export default StyledWidget;