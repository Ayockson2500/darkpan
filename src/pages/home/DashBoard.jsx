import React from "react";
import StyledDashBoard from "./StyledDashBoard.styles";
import Layout from "../../layout";
import DashboardWidget from "./dashboardContent/widget/DashboardWidget";
import DashboardTable from "./dashboardContent/tables/DashboardTable";
import BarChart from "../../components/charts/barChart/BarChart";
import Line from "../../components/charts/areaChart/AreaChart";
import Messages from "./dashboardContent/messages/Messages";
import TodoList from "./dashboardContent/todolist/TodoList";
import Calender from "./dashboardContent/calender/Calender";


const DashBoard = () => {
  return (
    <StyledDashBoard>
      <Layout>
        <main className="main-width">
          <DashboardWidget />
          <div className="chart-wrapper">
            <div className="chart" >
              <BarChart />
            </div>
            <div className="chart">
              <Line />
            </div>
          </div>
          <DashboardTable />
          <div className="messageCalender-wrapper">
            <Messages />
            <Calender />
            <TodoList />
          </div>
        </main>
      </Layout>
    </StyledDashBoard>
  );
};

export default DashBoard;
