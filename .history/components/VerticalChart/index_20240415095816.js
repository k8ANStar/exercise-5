import styles from "./VerticalChart.module.css";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { useEffect, useState } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function VerticalChart() {
	const [chartData, setChartData] = useEffect({
        datasets: []
    })
  const [chartOptions, setChartOptions] = useState({});  

  useEffect(() => {
    setChartData({
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: 'Sale $',
                data: [15234, 235256, 19245, 16243, 28456, 14326, 31000],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)'
            }
        ]
    })

    setChartOptions({
        plugins: {
            legend: {
                postion: 'top'
            }, 
            title: {
                display: true,
                text: "Daily Revenue"
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])
    return 
    <>
    
        <Bar data={chartData} {/>
    </>;
}
