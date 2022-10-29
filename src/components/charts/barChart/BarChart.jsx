import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { registerables, Chart } from "chart.js";
import { StyledBarChart } from "./StyledBarChart.styles";
Chart.register(...registerables);

const BarChart = ({ className }) => {
  //   const data =

  return (
    <StyledBarChart>
      <div className="d-flex align-items-center justify-content-between title-wrapper">
            <p>Worldwide Sales</p>
            <Link></Link>
        </div>
      <div>
        <Bar
          className="chart"
          data={{
            labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
            datasets: [
              {
                label: "USA",
                data: [5, 10, 20, 40, 60, 80, 100],
                backgroundColor: "#A9080B",
              },
              {
                label: "UK",
                data: [15, 30, 25, 50, 75, 83, 97],
                backgroundColor: "#800E12",
              },
              {
                label: "UK",
                data: [8, 40, 30, 50, 90, 58, 60],
                backgroundColor: "#571419",
              },
            ],
          }}
          height={250}
          width={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: {
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </StyledBarChart>
  );
};

export default BarChart;
