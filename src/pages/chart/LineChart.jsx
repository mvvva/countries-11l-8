import React, { useState } from "react";
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
  Filler,
} from "chart.js";

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Complete data for 2023 and 2024
const completeData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
  datasets: [
    {
      label: "2023",
      data: [200, 180, 220, 170, 190, 230, 210, 240], 
      fill: true,
      tension: 0.2,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "2024",
      data: [210, 195, 240, 230, 220, 250, 260, 270], 
      fill: true,
      tension: 0.2,
      backgroundColor: "#ede9fe",
      borderColor: "#8b5cf6",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Food Expenses (2023 vs 2024)",
    },
  },
};

const LineChart = () => {
  const [filteredData, setFilteredData] = useState(completeData);

  const filterData = (year) => {
    if (year === "all") {
      setFilteredData(completeData);
    } else if (year === "2023") {
      setFilteredData({
        ...completeData,
        datasets: [completeData.datasets[0]], 
      });
    } else if (year === "2024") {
      setFilteredData({
        ...completeData,
        datasets: [completeData.datasets[1]], 
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => filterData("all")}
          className="bg-blue-500 text-white px-4 rounded"
        >
          All
        </button>
        <button
          onClick={() => filterData("2023")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          2023
        </button>
        <button
          onClick={() => filterData("2024")}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          2024
        </button>
      </div>

      <Line data={filteredData} options={options} />
    </div>
  );
};

export default LineChart;
