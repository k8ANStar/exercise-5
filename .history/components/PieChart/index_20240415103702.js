import styles from "./VerticalChart.module.css";
import { Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";

import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

export default function PieChart() {
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Sat"],
			datasets: [
				{
					label: "Sale $",
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
