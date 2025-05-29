// src/pages/Customers.jsx
import React, { useEffect, useState } from "react";
import { fetchCustomers, fetchCurrentUser } from "../api/api";
import { useNavigate } from "react-router-dom";

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
        console.log("User fetched successfully")
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

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-700 text-lg font-semibold animate-fade-in-down">
          Loading...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white rounded-xl shadow-2xl p-8 text-red-600 text-lg font-semibold animate-fade-in-down">
          {error}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl animate-fade-in-down">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-1">
              Welcome, {user.name || user.email}
            </h2>
            <p className="text-gray-500 text-sm">
              Here are your customers:
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 rounded-lg bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 hover:text-red-700 transition font-semibold shadow"
          >
            Logout
          </button>
        </div>
        <div className="overflow-x-auto">
          <ul className="divide-y divide-gray-200">
            {customers.length === 0 ? (
              <li className="py-6 text-center text-gray-400 text-lg">
                No customers found.
              </li>
            ) : (
              customers.map((c, i) => (
                <li
                  key={c._id}
                  className="flex items-center gap-4 py-4 px-2 hover:bg-blue-50 transition rounded"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl shadow">
                      {c.name ? c.name[0].toUpperCase() : "?"}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-lg">
                      {c.name || <span className="italic text-gray-400">No Name</span>}
                    </div>
                    <div className="text-gray-500">{c.email}</div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="mt-8 text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Mini CRM Platform
        </div>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-40px) scale(0.97);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
