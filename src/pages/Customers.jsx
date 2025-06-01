import React, { useEffect, useState } from "react";
import { fetchCustomers, fetchCurrentUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LoadingCircle = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Outer glow circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-indigo-500/20"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main rotating circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-400 border-r-purple-400"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner pulse circle */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Loading text with fade animation */}
      <motion.p
        className="text-gray-400 font-medium"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading customers...
      </motion.p>
    </div>
  );
};

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check authentication and fetch user
  useEffect(() => {
    fetchCurrentUser()
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Please login first");
        setLoading(false);
        navigate("/login");
      });
  }, [navigate]);

  // Fetch customers after user is loaded
  useEffect(() => {
    if (user) {
      fetchCustomers()
        .then(res => setCustomers(res.data))
        .catch(() => setError("Failed to fetch customers"));
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-12 border border-gray-700/50">
          <LoadingCircle />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
        <motion.div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-red-400 text-lg font-semibold border border-gray-700/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {error}
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden pt-20">
      {/* Background noise texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
            variants={fadeInUp}
          >
            <div>
              <motion.h2 
                className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Customer Dashboard
              </motion.h2>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Welcome back, <span className="text-white font-medium">{user.name || user.email}</span>
              </motion.p>
            </div>
            
            <motion.button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700/80 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FiLogOut className="group-hover:rotate-180 transition-transform" />
              Logout
            </motion.button>
          </motion.div>

          {/* Customers List */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <div className="p-6 border-b border-gray-700/50">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FiUser className="text-indigo-400" />
                Customer Directory
                <span className="ml-auto text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                  {customers.length} {customers.length === 1 ? 'customer' : 'customers'}
                </span>
              </h3>
            </div>
            
            <AnimatePresence>
              {customers.length === 0 ? (
                <motion.div 
                  className="p-12 text-center text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  No customers found. Start by adding your first customer.
                </motion.div>
              ) : (
                <motion.ul 
                  className="divide-y divide-gray-700/50"
                  variants={staggerContainer}
                >
                  {customers.map((c, i) => (
                    <motion.li
                      key={c._id}
                      variants={fadeInUp}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 p-6 hover:bg-gray-700/20 transition-all cursor-pointer">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-30 -z-10 group-hover:opacity-50 transition-opacity"></div>
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow">
                            {c.name ? c.name[0].toUpperCase() : "?"}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-lg truncate">
                            {c.name || <span className="italic text-gray-400">No Name</span>}
                          </h4>
                          <p className="text-gray-400 truncate">{c.email}</p>
                        </div>
                        
                        <FiChevronRight className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-12 text-center text-gray-500 text-sm"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Mini CRM Platform. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}