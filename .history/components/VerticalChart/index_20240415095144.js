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
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    })
  }, [])
    return 
    <>
    
    
    </>;
}
