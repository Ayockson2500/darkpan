import React from "react";
import { Line } from "react-chartjs-2";
import { registerables, Chart } from "chart.js";
import { StyledAreaChart } from "./StyledAreaChart.styles";
import { Link } from "react-router-dom";
Chart.register(...registerables);

const AreaChart = () => {
  return (
    <StyledAreaChart>
      <div className="d-flex align-items-center justify-content-between title-wrapper">
        <p>Salse & Revenue</p>
        <Link>Show All</Link>
      </div>
      <div>
        <Line
          className="chart"
          data={{
            labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
            datasets: [
              {
                label: "Sales",
                data: [0, 50, 100, 150, 200, 250, 300],
                backgroundColor: "#82191D",
                borderWidth: 3
              },
              {
                label: "Revenue",
                data: [0, 20, 60, 80, 100, 200, 250],
                backgroundColor: "#CC1718",
              },
            ],
          }}
          height={250}
          width={500}
          options={{
            maintainAspectRatio: false,
            plugins: {
              filler: {
                propagate: true,
              },
              legend: {
                labels: {
                    font: {
                        size: 12
                    }
                }
              },
              layout: {
                padding: 10
            }
            },
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
    </StyledAreaChart>
  );
};

export default AreaChart;
