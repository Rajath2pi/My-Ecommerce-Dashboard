"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }: any) => {
  const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: data, // e.g., [75, 15, 10]
        backgroundColor: ["#14b8a6", "#ef4444", "#a1a1aa"], // Tailwind colors
        hoverBackgroundColor: ["#0d9488", "#dc2626", "#71717a"],
        borderColor: "transparent",
        cutout: "80%", // This creates the donut hole
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the default legend to create a custom one
      },
      tooltip: {
        // You can customize the tooltip here if you want
      },
    },
  };

  return (
    <div className="relative w-full">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;