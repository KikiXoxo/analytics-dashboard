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
import randomNum from "../helpers/randomNum";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.size = 10;

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: 4,
    color: "#9ca3af",
  },
  plugins: {
    title: {
      display: true,
      text: "Sales Trends",
      font: { weight: "600", size: "18px" },
      align: "start",
    },
    legend: {
      display: false,
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
      borderRadius: { topLeft: "10px", topRight: "10px" },
    },
  ],
};

export default function Chart() {
  return (
    <div className="md:h-full h-96 w-full relative md:w-3/5 bg-inherit border rounded-xl md:p-4 dark:border-gray-600">
      <Bar options={options} data={data} />
    </div>
  );
}
