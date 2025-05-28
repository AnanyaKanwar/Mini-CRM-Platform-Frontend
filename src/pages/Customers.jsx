// import React, { useEffect, useState } from "react";
// import { fetchCustomers, fetchCurrentUser } from "../api/api";
// import { useNavigate } from "react-router-dom";

// export default function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCurrentUser()
//       .then(res => setUser(res.data))
//       .catch(() => {
//         setError("Please login first");
//         navigate("/login");
//       });
//   }, [navigate]);

//   useEffect(() => {
//     if (user) {
//       fetchCustomers()
//         .then(res => setCustomers(res.data))
//         .catch(() => setError("Failed to fetch customers"));
//     }
//   }, [user]);

//   const handleLogout = () => {
//     localStorage.removeItem("jwt_token");
//     navigate("/login");
//   };

//   if (error)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
//         <div className="bg-white rounded-xl shadow-2xl p-8 text-red-600 text-lg font-semibold animate-fade-in-down">
//           {error}
//         </div>
//       </div>
//     );
//   if (!user)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
//         <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-700 text-lg font-semibold animate-fade-in-down">
//           Loading...
//         </div>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl animate-fade-in-down">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-3xl font-extrabold text-gray-800 mb-1">
//               Welcome, {user.name || user.email}
//             </h2>
//             <p className="text-gray-500 text-sm">
//               Here are your customers:
//             </p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="ml-4 px-4 py-2 rounded-lg bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 hover:text-red-700 transition font-semibold shadow"
//           >
//             Logout
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <ul className="divide-y divide-gray-200">
//             {customers.length === 0 ? (
//               <li className="py-6 text-center text-gray-400 text-lg">
//                 No customers found.
//               </li>
//             ) : (
//               customers.map((c, i) => (
//                 <li
//                   key={c._id}
//                   className="flex items-center gap-4 py-4 px-2 hover:bg-blue-50 transition rounded"
//                 >
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl shadow">
//                       {c.name ? c.name[0].toUpperCase() : "?"}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-800 text-lg">
//                       {c.name || <span className="italic text-gray-400">No Name</span>}
//                     </div>
//                     <div className="text-gray-500">{c.email}</div>
//                   </div>
//                 </li>
//               ))
//             )}
//           </ul>
//         </div>
//         <div className="mt-8 text-xs text-gray-400 text-center">
//           &copy; {new Date().getFullYear()} Mini CRM Platform
//         </div>
//       </div>
//       {/* Animation keyframes */}
//       <style>
//         {`
//           .animate-fade-in-down {
//             animation: fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//           }
//           @keyframes fadeInDown {
//             0% {
//               opacity: 0;
//               transform: translateY(-40px) scale(0.97);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0) scale(1);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }


import React, { useEffect, useState, useMemo } from "react";
import { fetchCustomers, fetchCurrentUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUsers, FiSearch, FiPlus, FiDownload } from "react-icons/fi";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCurrentUser()
      .then(res => setUser(res.data))
      .catch(() => {
        setError("Please login first");
        navigate("/login");
      });
  }, [navigate]);

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

  // Filter customers by search term
  const filteredCustomers = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    return customers.filter(
      c =>
        (c.name && c.name.toLowerCase().includes(lower)) ||
        (c.email && c.email.toLowerCase().includes(lower))
    );
  }, [customers, searchTerm]);

  // Example stats
  const totalCustomers = customers.length;
  const vipCustomers = customers.filter(c => c.isVip).length;

  // Placeholder handlers
  const handleAddCustomer = () => alert("Add Customer feature coming soon!");
  const handleExport = () => alert("Export feature coming soon!");

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8 text-red-600 text-lg font-semibold animate-fade-in-down">
          {error}
        </div>
      </div>
    );
  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8 text-gray-700 text-lg font-semibold animate-fade-in-down">
          Loading...
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center py-12 px-4">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Glassmorphism Card */}
        <div className="relative bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 animate-fade-in-down border border-white/40">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-grow min-w-[220px]">
              <div className="bg-gradient-to-br from-indigo-500 to-pink-400 p-3 rounded-full shadow-lg">
                <FiUsers size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1 flex items-center gap-2">
                  Welcome, {user.name || user.email}
                </h2>
                <p className="text-gray-600 text-sm">
                  Manage your customers efficiently and grow your business.
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-100 text-indigo-600 border border-indigo-200 hover:bg-pink-100 hover:text-pink-700 transition font-semibold shadow"
            >
              <FiLogOut /> Logout
            </button>
          </div>

          {/* Summary Stats */}
          <div className="flex justify-around bg-indigo-100/40 rounded-xl p-6 mb-8 text-center text-indigo-700 font-semibold shadow-inner">
            <div>
              <div className="text-4xl">{totalCustomers}</div>
              <div className="text-sm mt-1">Total Customers</div>
            </div>
            <div>
              <div className="text-4xl">{vipCustomers}</div>
              <div className="text-sm mt-1">VIP Customers</div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="relative flex-grow max-w-md">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers by name or email"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={handleAddCustomer}
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold shadow transition"
            >
              <FiPlus /> Add Customer
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-lg font-semibold shadow transition"
            >
              <FiDownload /> Export Data
            </button>
          </div>

          {/* Customer List */}
          <div className="overflow-x-auto">
            <ul className="divide-y divide-white/60">
              {filteredCustomers.length === 0 ? (
                <li className="py-8 text-center text-gray-400 text-lg">
                  <span className="text-4xl">😕</span>
                  <div>No customers found.</div>
                </li>
              ) : (
                filteredCustomers.map((c, i) => (
                  <li
                    key={c._id}
                    className="flex items-center gap-4 py-5 px-2 group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-pink-50 transition rounded-xl animate-fade-in-up"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-bold text-2xl shadow group-hover:scale-110 transition">
                        {c.name ? c.name[0].toUpperCase() : "?"}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {c.name || <span className="italic text-gray-400">No Name</span>}
                      </div>
                      <div className="text-gray-600">{c.email}</div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Footer Note */}
          <div className="mt-10 text-xs text-gray-400 text-center">
            Tip: Click on a customer to view detailed information (feature coming soon).
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Mini CRM Platform
          </div>
        </div>

        {/* Subtle glowing ring for extra pop */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-300 via-pink-300 to-transparent opacity-40 blur-2xl pointer-events-none"></div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-40px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px) scale(0.97);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
        `}
      </style>
    </div>
  );
}
