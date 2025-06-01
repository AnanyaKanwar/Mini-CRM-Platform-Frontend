import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPackage, FiSearch, FiRefreshCw, FiSend, FiBarChart2, FiUsers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const DUMMY_ORDERS = [
  { id: "ORD-1001", customer: "Ananya K.", date: "2025-05-20", status: "Delivered", amount: 2999, items: 3, campaign: "SUMMER25" },
  { id: "ORD-1002", customer: "Rajesh P.", date: "2025-05-22", status: "Processing", amount: 1599, items: 2, campaign: "WELCOME10" },
  { id: "ORD-1003", customer: "Sonia M.", date: "2025-05-24", status: "Cancelled", amount: 0, items: 1, campaign: null },
  { id: "ORD-1004", customer: "Mohit S.", date: "2025-05-25", status: "Delivered", amount: 4599, items: 5, campaign: "SUMMER25" },
  { id: "ORD-1005", customer: "Priya N.", date: "2025-05-26", status: "Processing", amount: 899, items: 1, campaign: null },
  { id: "ORD-1006", customer: "Amit R.", date: "2025-05-27", status: "Shipped", amount: 2299, items: 2, campaign: "LOYALTY15" },
];

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-600",
  Shipped: "bg-blue-100 text-blue-700"
};

const campaignColors = {
  SUMMER25: "bg-pink-100 text-pink-700",
  WELCOME10: "bg-purple-100 text-purple-700",
  LOYALTY15: "bg-indigo-100 text-indigo-700"
};

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [campaignStatus, setCampaignStatus] = useState({});
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    avgOrderValue: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrders(DUMMY_ORDERS);
      calculateStats(DUMMY_ORDERS);
      setIsLoading(false);
    }, 800);
  }, []);

  const calculateStats = (orders) => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
    const avgOrderValue = totalRevenue / totalOrders;
    
    setStats({
      totalOrders,
      totalRevenue,
      avgOrderValue: isNaN(avgOrderValue) ? 0 : avgOrderValue
    });
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase())
  );

  const launchCampaign = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    setCampaignStatus(prev => ({
      ...prev,
      [orderId]: { status: "sending", message: "Sending campaign..." }
    }));

    setTimeout(() => {
      const success = Math.random() > 0.1;
      
      setCampaignStatus(prev => ({
        ...prev,
        [orderId]: {
          status: success ? "delivered" : "failed",
          message: success 
            ? `Message sent: "Hi ${order.customer.split(' ')[0]}, here's 10% off on your next order!"`
            : "Delivery failed: Please try again later"
        }
      }));

      setTimeout(() => {
        console.log(`Delivery receipt received for order ${orderId}`);
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20">
      <div className="container mx-auto px-6 py-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-xl shadow-lg"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiPackage size={28} className="text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                Order Management
              </h1>
              <p className="text-gray-400">Track and manage all customer orders</p>
            </div>
          </div>
          
          <motion.div 
            className="flex gap-3 w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => navigate('/customers')}
              className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <FiUsers /> Customers
            </button>
            <motion.button 
              onClick={() => navigate('/campaigns')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend /> New Campaign
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[
            { 
              title: "Total Orders", 
              value: stats.totalOrders, 
              icon: <FiPackage size={20} />,
              bg: "bg-indigo-500/10",
              color: "text-indigo-300",
              hoverBorder: "hover:border-indigo-500/30"
            },
            { 
              title: "Total Revenue", 
              value: `₹${stats.totalRevenue.toLocaleString()}`, 
              icon: <FiBarChart2 size={20} />,
              bg: "bg-emerald-500/10",
              color: "text-emerald-300",
              hoverBorder: "hover:border-emerald-500/30"
            },
            { 
              title: "Avg. Order Value", 
              value: `₹${stats.avgOrderValue.toLocaleString()}`, 
              icon: <FiBarChart2 size={20} />,
              bg: "bg-purple-500/10",
              color: "text-purple-300",
              hoverBorder: "hover:border-purple-500/30"
            }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 ${stat.hoverBorder} transition-all`}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-6 border-b border-gray-700/50 flex flex-col md:flex-row justify-between gap-4">
            <motion.div 
              className="relative flex-grow max-w-xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search orders by ID, customer or campaign..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition hover:border-indigo-400/50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </motion.div>
            
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setOrders(DUMMY_ORDERS);
                    setIsLoading(false);
                  }, 500);
                }}
                className="flex items-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600 transition hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <FiRefreshCw 
                  size={16} 
                  className={`transition-transform ${isLoading ? "animate-spin" : ""}`} 
                /> 
                Refresh
              </button>
            </motion.div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/30">
                <tr>
                  {["Order ID", "Customer", "Date", "Items", "Status", "Campaign", "Amount", "Actions"].map((header, index) => (
                    <th 
                      key={index}
                      className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <FiRefreshCw size={48} className="text-gray-600 mb-4 animate-spin" />
                        <p className="text-lg">Loading orders...</p>
                      </motion.div>
                    </td>
                  </tr>
                ) : filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <FiPackage size={48} className="text-gray-600 mb-4" />
                        <p className="text-lg">No orders found</p>
                        <p className="text-sm">Try adjusting your search query</p>
                      </motion.div>
                    </td>
                  </tr>
                ) : (
                  <AnimatePresence>
                    {filteredOrders.map((order) => (
                      <motion.tr 
                        key={order.id}
                        className="hover:bg-gray-700/20 transition"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        layout
                      >
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer transition">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.items}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.campaign ? (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${campaignColors[order.campaign]}`}>
                              {order.campaign}
                            </span>
                          ) : (
                            <span className="text-gray-500 text-xs">None</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                          ₹{order.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex justify-end gap-2">
                            <motion.button 
                              onClick={() => launchCampaign(order.id)}
                              className="px-4 py-2 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 rounded-lg text-sm transition flex items-center gap-2"
                              disabled={campaignStatus[order.id]?.status === "sending"}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiSend size={14} />
                              {campaignStatus[order.id]?.status === "sending" ? "Sending..." : "Campaign"}
                            </motion.button>
                          </div>
                          {campaignStatus[order.id] && (
                            <motion.div 
                              className={`mt-2 text-xs text-right ${
                                campaignStatus[order.id].status === "delivered" ? "text-green-400" : 
                                campaignStatus[order.id].status === "failed" ? "text-red-400" : "text-gray-400"
                              }`}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              {campaignStatus[order.id].message}
                            </motion.div>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedOrder && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
              >
                <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Order Details</h3>
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-white transition transform hover:rotate-90"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">Detailed view coming soon!</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}