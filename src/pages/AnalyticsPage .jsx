import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { FiBarChart2, FiUsers } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineController,
  LineElement,
  PointElement
);

const AnalyticsPage = () => {
  // Mock data for the charts
  const customerEngagementData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Active Customers",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  };

  const orderTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Orders",
        data: [4, 6, 8, 7, 9],
        backgroundColor: "rgba(167, 139, 250, 0.5)",
        borderColor: "rgba(167, 139, 250, 1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const campaignPerformanceData = {
    labels: ["Campaign A", "Campaign B", "Campaign C"],
    datasets: [
      {
        label: "Engagement",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(239, 68, 68, 0.5)",
          "rgba(16, 185, 129, 0.5)",
          "rgba(249, 115, 22, 0.5)",
        ],
        borderColor: [
          "rgba(239, 68, 68, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(249, 115, 22, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 pt-24">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-8">
      <FiUsers className="text-indigo-400" size={36} />
      <h1 className="py-2 mt-1 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
        Analytics Dashboard
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Customer Engagement Card */}
      <div className="rounded-xl shadow-lg p-6 border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600 text-gray-100">
        <h2 className="text-xl font-semibold mb-4">Customer Engagement</h2>
        <div className="max-w-full md:max-w-md h-64">
          <Bar
            data={customerEngagementData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#f3f4f6", // Light gray for legend text (or use rgba(243, 244, 246, 1))
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#f3f4f6", // Light gray for x-axis labels
                  },
                  grid: {
                    color: "rgba(243, 244, 246, 0.1)", // Faint grid lines
                  },
                },
                y: {
                  ticks: {
                    color: "#f3f4f6", // Light gray for y-axis labels
                  },
                  grid: {
                    color: "rgba(243, 244, 246, 0.1)", // Faint grid lines
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Order Trends Card */}
      <div className="rounded-xl shadow-lg p-6 border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600 text-gray-100">
        <h2 className="text-xl font-semibold mb-4">Order Trends</h2>
        <div className="max-w-full md:max-w-md h-64">
          <Line
            data={orderTrendsData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#f3f4f6", // Light gray for legend text
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#f3f4f6", // Light gray for x-axis labels
                  },
                  grid: {
                    color: "rgba(243, 244, 246, 0.1)", // Faint grid lines
                  },
                },
                y: {
                  ticks: {
                    color: "#f3f4f6", // Light gray for y-axis labels
                  },
                  grid: {
                    color: "rgba(243, 244, 246, 0.1)", // Faint grid lines
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Campaign Performance Card */}
      <div className="rounded-xl shadow-lg p-6 border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600 text-gray-100 flex flex-col items-center md:col-span-2">
        <h2 className="text-xl font-semibold mb-4 text-center">Campaign Performance</h2>
        <div className="max-w-xs w-full h-64">
          <Pie
            data={campaignPerformanceData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#f3f4f6", // Light gray for legend text
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default AnalyticsPage;
