import styled from "styled-components";

const StyledDashBoard = styled.div`
    .chart-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
    .messageCalender-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
    .chart {
        width: 100%;
        height: 100%;
    }
`
export default StyledDashBoard;