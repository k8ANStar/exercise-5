import styles from "./PieChart.module.css";
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
			labels: ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink"],
			datasets: [
				{
					label: "# of Votes",
					data: [12, 23, 15, 10, 6, 7, 3],
					borderColor: "rgb(200, 162, 235)",
					backgroundColor: [
						"rgb(242, 15, 15, 0.4)",
						"rgb(25, 126, 226, 0.4)",
						"rgb(11, 146, 65, 0.4)",
						"rgb(228, 243, 9, 0.4)",
						"rgb(12, 180, 235, 0.4)",
						"rgb(49, 178, 35, 0.4)",
						"rgb(19, 16, 25, 0.4)",
					],
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
					text: "Colors",
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<div>
			<Pie
				data={chartData}
				options={chartOptions}
				style={{ width: "500px", height: "300px" }}
			/>
		</div>
	);
}
