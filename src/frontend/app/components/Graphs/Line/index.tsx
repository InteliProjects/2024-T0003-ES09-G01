import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: '2023',
      data: [84, 300, 220, 150, 53, 267, 145, 93, 109, 45, 67, 89],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
    {
      label: '2024',
      data: [
        132, 145, 167, 189, 145, 178, 200, 145, 167, 189, 145, 178,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const LineGraph = () => {
  return <Line data={data} />;
};

export default LineGraph;
