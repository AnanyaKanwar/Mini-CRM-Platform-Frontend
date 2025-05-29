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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Engagement</h2>
            <Bar
              data={customerEngagementData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Trends</h2>
            <Line
              data={orderTrendsData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Campaign Performance
            </h2>
            <div className="max-w-xs w-full h-64">
              <Pie
                data={campaignPerformanceData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
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
