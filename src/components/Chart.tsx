import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useDark from "../hooks/useDark";
import randomNum from "../helpers/randomNum";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Sales Trends",
      font: { weight: "600", size: "18px" },
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset",
      data: labels.map(() => randomNum(0, 50000)),
      backgroundColor: "rgb(52, 202, 165)",
    },
  ],
};

export default function Chart() {
  // const updatedData = { ...data };
  return (
    <div className="w-full md:w-3/5 bg-inherit border rounded-xl md:p-4 dark:border-gray-600">
      <Bar options={options} data={data} />
    </div>
  );
}
