
import { Bar } from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);
import { StyledBarChart } from "./StyledBarChart.styles"

const BarChart = () => {
      
    //   const data = 
     
    
  return (
    <StyledBarChart>
        <Bar
        height={500}
        width={500}
        data={{
            labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
            datasets: [{
                label: "USA",
                data: [0, 20, 40, 60, 80, 100],
                backgroundColor: '#A9080B'
            }]
        }}
        options={{maintainAspectRatio: false}}
        />
    </StyledBarChart>
  )
}

export default BarChart

