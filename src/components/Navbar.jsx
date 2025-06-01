import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUsers,
  FiPackage,
  FiMail,
  FiSend,
  FiHome,
  FiLogOut,
  FiLogIn,
  FiZap,
  FiBarChart2,
  FiChevronDown,
  FiUser
} from "react-icons/fi";
import { fetchCurrentUser } from "../api/api";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const isLoggedIn = !!localStorage.getItem("jwt_token");

  useEffect(() => {
    if (isLoggedIn) {
      fetchCurrentUser()
        .then(res => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    setUser(null);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const navLinks = [
    { to: "/customers", label: "Customers", icon: FiUsers, color: "text-blue-400", hover: "hover:text-blue-300", active: "text-blue-200" },
    { to: "/orders", label: "Orders", icon: FiPackage, color: "text-emerald-400", hover: "hover:text-emerald-300", active: "text-emerald-200" },
    { to: "/campaigns", label: "Campaigns", icon: FiSend, color: "text-purple-400", hover: "hover:text-purple-300", active: "text-purple-200" },
    { to: "/communication-logs", label: "Logs", icon: FiMail, color: "text-pink-400", hover: "hover:text-pink-300", active: "text-pink-200" },
    // { to: "/ai-suggestions", label: "Suggestions", icon: FiZap, color: "text-indigo-400", hover: "hover:text-indigo-300", active: "text-indigo-200" },
    { to: "/analytics", label: "Analytics", icon: FiBarChart2, color: "text-teal-400", hover: "hover:text-teal-300", active: "text-teal-200" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Brand/Home */}
        <motion.button
          className="flex items-center gap-2 focus:outline-none"
          onClick={handleHomeClick}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-extrabold text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Connectix
          </span>
        </motion.button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 relative">
          {navLinks.map((link) => (
            <div 
              key={link.to}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.to)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive ? link.active : link.color + " " + link.hover
                  }`
                }
              >
                <link.icon className="text-lg" />
                <span className="font-medium">{link.label}</span>
              </NavLink>
              
              {hoveredLink === link.to && (
                <motion.div
                  layoutId="navHover"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* User Info and Login/Logout */}
        <div className="relative">
          {loading ? (
            <div className="w-24 h-8 bg-gray-700 rounded-lg animate-pulse" />
          ) : isLoggedIn ? (
            <div className="relative">
              <motion.button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  dropdownOpen 
                    ? "bg-gray-700/50" 
                    : "bg-gray-800 hover:bg-gray-700/50"
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                  <FiUser />
                </div>
                <span className="text-gray-200 font-medium max-w-[120px] truncate">
                  {user?.name || user?.email || "User"}
                </span>
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown className="text-gray-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 py-3 border-b border-gray-700">
                      <p className="text-sm text-gray-300 font-medium truncate">
                        {user?.email || "User"}
                      </p>
                      {user?.name && (
                        <p className="text-xs text-gray-400 mt-1 truncate">
                          {user.name}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      <FiLogOut className="text-red-400" />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              onClick={handleLogin}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLogIn />
              <span>Login</span>
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  );
}