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
					data: [122340, 235256, 152455, 102430, 234561, 104326, 30000],
					borderColor: "rgb(53, 162, 235)",
					backgroundColor: "rgb(53, 162, 235, 0.4)",
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
