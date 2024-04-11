"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

export function BarChart() {
	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		animate: {
			duration: 2000,
			easing: "easeInOutQuart",
		},
	};

	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Gross Sales",
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(75,192,192,0.4)",
				hoverBorderColor: "rgba(75,192,192,1)",
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: "Total Orders",
				backgroundColor: "rgba(75,75,192,0.4)",
				borderColor: "rgba(75,75,192,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(75,75,192,0.4)",
				hoverBorderColor: "rgba(75,75,192,1)",
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
	};

	return <Bar data={data} options={options} />;
}
