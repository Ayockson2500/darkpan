import React from 'react';
import StyledDashBoard  from "./StyledDashBoard.styles";
import Layout from '../../layout'
import DashboardWidget from './dashboardContent/widget/DashboardWidget';
import DashboardTable from './dashboardContent/tables/DashboardTable';
import BarChart from '../../components/charts/barChart/BarChart'

const DashBoard = () => {
  return (
    <StyledDashBoard>
        <Layout>
            <main>
              <DashboardWidget />
              <BarChart />
              <DashboardTable />
            </main>
        </Layout>
    </StyledDashBoard>
  )
}

export default DashBoard