// import React, { useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";

// Chart.register(...registerables);

// const SalesChart = ({ chartData = { labels: [], data: [] } }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext("2d");

//     // Check if data exists to prevent errors
//     if (!chartData.labels.length || !chartData.data.length) {
//       return;
//     }

//     const salesChart = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: chartData.labels,
//         datasets: [
//           {
//             label: "Sales",
//             data: chartData.data,
//             fill: false,
//             borderColor: "rgba(75,192,192,1)",
//             tension: 0.1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });

//     return () => {
//       salesChart.destroy(); // Cleanup chart on unmount
//     };
//   }, [chartData]);

//   return (
//     <div style={{ position: "relative", height: "300px", width: "100%" }}>
//       <canvas ref={chartRef} style={{ height: "100%", width: "100%" }}></canvas>
//     </div>
//   );
// };

// export default SalesChart;

import React from "react";
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

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Sales",
        data: chartData.data[0],
        backgroundColor: "rgba(40, 199, 111, 0.5)",
      },
      {
        label: "Purchases",
        data: chartData.data[1],
        backgroundColor: "rgba(249, 110, 111, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Sales and Purchases Over Time",
      // },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SalesChart;
