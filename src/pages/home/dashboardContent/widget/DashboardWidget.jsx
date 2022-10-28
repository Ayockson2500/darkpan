import {StyledDashboardWidget} from "./StyledDashboardWidget.styles";
import { FaChartLine, FaChartBar, FaChartArea } from "react-icons/fa";
import { MdPieChart } from "react-icons/md";

const DashboardWidget = () => {
    let widgetData = [
        {
            title: "Today Sale",
            isMoney: "$1234",
            icon: <FaChartLine />
        },
        {
            title: "Total Sale",
            isMoney: "$1234",
            icon: <FaChartBar />
        },
        {
            title: "Today Revenue",
            isMoney: "$1234",
            icon: <FaChartArea />
        },
        {
            title: "Total Revenue",
            isMoney: "$1234",
            icon: <MdPieChart />
        }
    ]
  return (
    <StyledDashboardWidget>
        {
            widgetData.map((data, index) => (
                <div key={index} className="d-flex align-items-center justify-content-between widget-data">
                    <i className="widget-icon">{data.icon}</i>
                    <div>
                        <p className="widget-title">{data.title}</p>
                        <p className="widget-money">{data.isMoney}</p>
                    </div>
                </div>
            ))
        }
    </StyledDashboardWidget>
  )
}

export default DashboardWidget