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
					data: [122340, 235256, 152455, 102430, 24561, 104326, 30000],
					borderColor: "rgb(53, 162, 235)",
					backgroundColor: "rgb(53, 162, 235, 0.4)",
				},
				{
					label: "Data 2",
					data: [12340, 2356, 15255, 1020, 234517, 10432, 3000],
					borderColor: "rgb(150, 162, 235)",
					backgroundColor: "rgb(150, 162, 235, 0.4)",
				},
				{
					label: "Data 3",
					data: [13340, 205276, 154555, 14530, 22161, 143326, 67000],
					borderColor: "rgb(240, 162, 235)",
					backgroundColor: "rgb(240, 162, 235, 0.4)",
				},
			],
		});

		setChartOptions({
			plugins: {
				legend: {
					postion: "top",
				},
				title: {
					display: true,
					text: "Daily Revenue",
				},
			},
			maintainAspectRatio: false,
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
