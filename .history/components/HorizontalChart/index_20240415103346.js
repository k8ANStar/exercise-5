import styles from "./HorizontalChart.module.css";
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

export default function HorizontalChart() {
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			datasets: [
				{
					label: "Data 1",
					data: [1240, 3256, 1555, 1230, 2456, 1042, 3000],
					borderColor: "rgb(43, 162, 235)",
					backgroundColor: "rgb(43, 162, 235, 0.4)",
				},
				{
					label: "Data 2",
					data: [1230, 2361, 1555, 1240, 2317, 1432, 3000],
					borderColor: "rgb(170, 162, 235)",
					backgroundColor: "rgb(170, 172, 235, 0.4)",
				},
				{
					label: "Data 3",
					data: [1330, 2576, 1455, 1430, 2261, 1426, 2300],
					borderColor: "rgb(240, 162, 235)",
					backgroundColor: "rgb(240, 162, 235, 0.4)",
				},
			],
		});

		setChartOptions({
			indexAxis: "y",
			plugins: {
				legend: {
					postion: "top",
				},
				title: {
					display: true,
					text: "Daily Revenue",
				},
			},
			maintainAspectRatio: true,
			responsive: true,
		});
	}, []);

	return (
		<div>
			<Bar
				data={chartData}
				options={chartOptions}
				style={{ width: "500px", height: "300px" }}
			/>
		</div>
	);
}
