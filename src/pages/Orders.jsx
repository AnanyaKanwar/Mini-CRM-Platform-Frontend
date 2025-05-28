import React, { useEffect, useState } from "react";
import { FiPackage, FiSearch, FiRefreshCcw } from "react-icons/fi";

const DUMMY_ORDERS = [
  { id: "ORD-1001", customer: "Ananya K.", date: "2025-05-20", status: "Delivered", amount: 2999 },
  { id: "ORD-1002", customer: "Rajesh P.", date: "2025-05-22", status: "Processing", amount: 1599 },
  { id: "ORD-1003", customer: "Sonia M.", date: "2025-05-24", status: "Cancelled", amount: 0 },
];

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-600",
};

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => setOrders(DUMMY_ORDERS), 500);
  }, []);

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 py-12 px-4">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* White Box */}
        <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-12 animate-fade-in-down border border-gray-200 bg-opacity-90 backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-pink-400 p-3 rounded-full shadow-lg">
              <FiPackage size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 flex items-center gap-2">
                Orders
              </h2>
              <p className="text-gray-700 text-sm">
                Track and manage all your orders in one place.
              </p>
            </div>
          </div>

          {/* Search Bar and Refresh */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-grow max-w-md">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID or customer"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setOrders(DUMMY_ORDERS)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition"
              title="Refresh"
            >
              <FiRefreshCcw />
              <span className="hidden md:inline">Refresh</span>
            </button>
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-xl shadow">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="px-4 py-3 rounded-tl-xl text-gray-900">Order ID</th>
                  <th className="px-4 py-3 text-gray-900">Customer</th>
                  <th className="px-4 py-3 text-gray-900">Date</th>
                  <th className="px-4 py-3 text-gray-900">Status</th>
                  <th className="px-4 py-3 rounded-tr-xl text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-gray-400">
                      <span className="text-3xl">📦</span>
                      <div>No orders found.</div>
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order, idx) => (
                    <tr
                      key={order.id}
                      className="hover:bg-indigo-50 transition animate-fade-in-up"
                      style={{ animationDelay: `${idx * 70}ms` }}
                    >
                      <td className="px-4 py-4 font-semibold text-indigo-700">{order.id}</td>
                      <td className="px-4 py-4 text-gray-900">{order.customer}</td>
                      <td className="px-4 py-4 text-gray-900">{order.date}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-semibold text-right text-gray-900">
                        ₹{order.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <div className="mt-10 text-xs text-gray-500 text-center">
            Tip: Click an order for more details (feature coming soon).
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Mini CRM Platform
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 0.8s ease-out;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s ease-out both;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px) scale(0.97);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
        `}
      </style>
    </div>
  );
}
