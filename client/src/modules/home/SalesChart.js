import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const SalesChart = ({ chartData = { labels: [], data: [] } }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Check if data exists to prevent errors
    if (!chartData.labels.length || !chartData.data.length) {
      return;
    }

    const salesChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: "Sales",
            data: chartData.data,
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      salesChart.destroy(); // Cleanup chart on unmount
    };
  }, [chartData]);

  return (
    <div style={{ position: "relative", height: "300px", width: "100%" }}>
      <canvas ref={chartRef} style={{ height: "100%", width: "100%" }}></canvas>
    </div>
  );
};

export default SalesChart;
