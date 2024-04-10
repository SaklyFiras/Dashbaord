"use client";

import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js/auto";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export function LineChart({ ...props }) {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Merchline net",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: "Client net",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,75,192,0.4)",
				borderColor: "rgba(75,75,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,75,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,75,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [45, 39, 60, 71, 46, 35, 50],
			},
			{
				label: "Gross sales",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,75,0.4)",
				borderColor: "rgba(75,192,75,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,75,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,75,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [35, 29, 50, 61, 36, 25, 40],
			},
			{
				label: "Orders",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(192,75,75,0.4)",
				borderColor: "rgba(192,75,75,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(192,75,75,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(192,75,75,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [15, 19, 40, 51, 26, 15, 30],
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		//show scales
		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: "Month",
				},
			},
			y: {
				display: true,
				title: {
					display: true,
					text: "Value",
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: "top",
			},
			title: {
				display: true,
				text: "Sales",
			},
		},
		//animation
		animation: {
			duration: 2000,
			easing: "easeInOutQuart",
		},
		
		
		
	};

	return <Line className="h-96" options={options} data={data}></Line>;
}
