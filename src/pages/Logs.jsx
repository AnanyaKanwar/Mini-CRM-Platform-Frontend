import React, { useState, useEffect } from "react";
import { FiFileText, FiSearch, FiRefreshCcw } from "react-icons/fi";

const DUMMY_LOGS = [
  { id: 1, timestamp: "2025-05-27 10:30", message: "User Ananya logged in", severity: "Info" },
  { id: 2, timestamp: "2025-05-27 10:45", message: "Failed login attempt", severity: "Warning" },
  { id: 3, timestamp: "2025-05-27 11:00", message: "Database connection lost", severity: "Error" },
  { id: 4, timestamp: "2025-05-27 11:15", message: "System restarted", severity: "Info" },
];

const severityColors = {
  Info: "bg-green-500 bg-opacity-20 text-green-50 text-lg ",
  Warning: "bg-yellow-500 bg-opacity-20 text-yellow-50 text-lg",
  Error: "bg-red-500 bg-opacity-20 text-red-50 text-lg",
};

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => setLogs(DUMMY_LOGS), 300);
  }, []);

  const filteredLogs = logs.filter(
    (log) =>
      log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.severity.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 mt-10 pt-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-6 md:p-8 animate-fade-in-down border border-gray-700">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full shadow">
              <FiFileText size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">System Logs</h2>
              <p className="text-gray-400">View activity and error logs for your system.</p>
            </div>
          </div>

          {/* Search & Refresh */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search logs..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-700 to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setLogs(DUMMY_LOGS)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:shadow-indigo-500/30 transition"
            >
              <FiRefreshCcw />
              <span>Refresh</span>
            </button>
          </div>

          {/* Logs Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-br from-gray-700 to-gray-600">
                  <th className="px-4 py-3 rounded-tl-xl text-gray-300 font-semibold">Time</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold">Message</th>
                  <th className="px-4 py-3 rounded-tr-xl text-gray-300 font-semibold">Severity</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-10 text-gray-400 bg-gradient-to-br from-gray-800 to-gray-700">
                      <span className="text-3xl">📄</span>
                      <div>No logs found</div>
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log, idx) => (
                    <tr
                      key={log.id}
                      className="bg-gradient-to-br from-gray-800 to-gray-700 hover:bg-gray-700 transition animate-fade-in-up"
                      style={{ animationDelay: `${idx * 70}ms` }}
                    >
                      <td className="px-4 py-4 text-gray-300 border-t border-gray-700">{log.timestamp}</td>
                      <td className="px-4 py-4 text-gray-300 border-t border-gray-700">{log.message}</td>
                      <td className="px-4 py-4 border-t border-gray-700">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${severityColors[log.severity]}`}
                        >
                          {log.severity}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-8 text-sm text-gray-500 text-center">
            Tip: Sort or export logs coming soon.
          </div>
          <div className="mt-2 text-xs text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Mini CRM Platform
          </div>
        </div>
      </div>

      {/* Animations */}
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