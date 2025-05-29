// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   FiUsers,
//   FiPackage,
//   FiMail,
//   FiSend,
//   FiHome,
//   FiLogOut,
//   FiLogIn,
// } from "react-icons/fi";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("jwt_token");

//   const handleLogout = () => {
//     localStorage.removeItem("jwt_token");
//     navigate("/login");
//   };

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white z-50">
//       <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
//         {/* Brand/Home: clickable */}
//         <button
//           className="flex items-center gap-2 focus:outline-none"
//           onClick={handleHomeClick}
//           style={{ background: "none", border: "none", cursor: "pointer" }}
//         >
//           <FiHome className="text-indigo-500" size={28} />
//           <span className="font-bold text-xl text-indigo-700 tracking-tight">
//             Mini CRM
//           </span>
//         </button>
//         {/* Navigation Links */}
//         <div className="flex items-center gap-8">
//           <NavLink
//             to="/customers"
//             className={({ isActive }) =>
//               `flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition ${
//                 isActive ? "text-blue-700 font-bold" : ""
//               }`
//             }
//           >
//             <FiUsers /> Customers
//           </NavLink>
//           <NavLink
//             to="/orders"
//             className={({ isActive }) =>
//               `flex items-center gap-1 text-gray-600 hover:text-green-600 font-medium transition ${
//                 isActive ? "text-green-700 font-bold" : ""
//               }`
//             }
//           >
//             <FiPackage /> Orders
//           </NavLink>
//           <NavLink
//             to="/campaigns"
//             className={({ isActive }) =>
//               `flex items-center gap-1 text-gray-600 hover:text-purple-600 font-medium transition ${
//                 isActive ? "text-purple-700 font-bold" : ""
//               }`
//             }
//           >
//             <FiSend /> Campaigns
//           </NavLink>
//           <NavLink
//             to="/communication-logs"
//             className={({ isActive }) =>
//               `flex items-center gap-1 text-gray-600 hover:text-pink-600 font-medium transition ${
//                 isActive ? "text-pink-700 font-bold" : ""
//               }`
//             }
//           >
//             <FiMail /> Logs
//           </NavLink>
//         </div>
//         {/* Login/Logout Button */}
//         {isLoggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-1 px-3 py-1 rounded bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 hover:text-red-700 transition font-semibold"
//           >
//             <FiLogOut /> Logout
//           </button>
//         ) : (
//           <button
//             onClick={handleLogin}
//             className="flex items-center gap-1 px-3 py-1 rounded bg-blue-50 text-blue-500 border border-blue-200 hover:bg-blue-100 hover:text-blue-700 transition font-semibold"
//           >
//             <FiLogIn /> Login
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("jwt_token");

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand/Home: clickable */}
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={handleHomeClick}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FiHome className="text-indigo-500" size={28} />
          <span className="font-bold text-xl text-indigo-700 tracking-tight">
            Mini CRM
          </span>
        </button>
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition ${
                isActive ? "text-blue-700 font-bold" : ""
              }`
            }
          >
            <FiUsers /> Customers
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-600 hover:text-green-600 font-medium transition ${
                isActive ? "text-green-700 font-bold" : ""
              }`
            }
          >
            <FiPackage /> Orders
          </NavLink>
          <NavLink
            to="/campaigns"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-600 hover:text-purple-600 font-medium transition ${
                isActive ? "text-purple-700 font-bold" : ""
              }`
            }
          >
            <FiSend /> Campaigns
          </NavLink>
          <NavLink
            to="/communication-logs"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-600 hover:text-pink-600 font-medium transition ${
                isActive ? "text-pink-700 font-bold" : ""
              }`
            }
          >
            <FiMail /> Logs
          </NavLink>
          <NavLink
            to="/ai-suggestions"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-600 hover:text-indigo-600 font-medium transition ${
                isActive ? "text-indigo-700 font-bold" : ""
              }`
            }
          >
            <FiZap /> Suggestions
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-600 hover:text-teal-600 font-medium transition ${
                isActive ? "text-teal-700 font-bold" : ""
              }`
            }
          >
            <FiBarChart2 /> Analytics
          </NavLink>
        </div>
        {/* Login/Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1 rounded bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 hover:text-red-700 transition font-semibold"
          >
            <FiLogOut /> Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="flex items-center gap-1 px-3 py-1 rounded bg-blue-50 text-blue-500 border border-blue-200 hover:bg-blue-100 hover:text-blue-700 transition font-semibold"
          >
            <FiLogIn /> Login
          </button>
        )}
      </div>
    </nav>
  );
}
