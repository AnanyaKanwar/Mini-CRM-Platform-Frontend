import React, { useEffect, useState } from "react";
import { FiSend, FiRefreshCcw, FiSearch, FiEdit2, FiBarChart2 } from "react-icons/fi";

// More campaign cards with varied banners and stats
const DUMMY_CAMPAIGNS = [
  {
    id: "CMP-1001",
    name: "Summer Sale 2025",
    status: "Active",
    banner: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    startDate: "2025-05-01",
    endDate: "2025-06-01",
    stats: "Open Rate: 45%",
  },
  {
    id: "CMP-1002",
    name: "Diwali Bonanza",
    status: "Scheduled",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    startDate: "2025-10-15",
    endDate: "2025-11-10",
    stats: "Scheduled",
  },
  {
    id: "CMP-1003",
    name: "Year End Clearance",
    status: "Completed",
    banner: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    stats: "CTR: 12%",
  },
  {
    id: "CMP-1004",
    name: "New Arrivals",
    status: "Active",
    banner: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    startDate: "2025-06-10",
    endDate: "2025-07-10",
    stats: "Open Rate: 53%",
  },
  {
    id: "CMP-1005",
    name: "Flash Friday",
    status: "Scheduled",
    banner: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    startDate: "2025-07-15",
    endDate: "2025-07-16",
    stats: "Scheduled",
  },
  {
    id: "CMP-1006",
    name: "Referral Boost",
    status: "Completed",
    banner: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    stats: "CTR: 18%",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700 border-green-300",
  Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Completed: "bg-blue-100 text-blue-700 border-blue-300",
};

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => setCampaigns(DUMMY_CAMPAIGNS), 500);
  }, []);

  const filteredCampaigns = campaigns.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 mt-6">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-pink-400 p-3 rounded-full shadow-lg">
              <FiSend size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-1 flex items-center gap-2 drop-shadow">
                Campaigns
              </h2>
              <p className="text-indigo-100 text-sm">
                Your marketing campaigns at a glance.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns"
                className="w-56 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setCampaigns(DUMMY_CAMPAIGNS)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition"
              title="Refresh"
            >
              <FiRefreshCcw />
              <span className="hidden md:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCampaigns.length === 0 ? (
            <div className="col-span-full text-center text-gray-200 text-lg py-16">
              <span className="text-4xl">📢</span>
              <div>No campaigns found.</div>
            </div>
          ) : (
            filteredCampaigns.map((c, i) => (
              <div
                key={c.id}
                className="relative rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col animate-fade-in-up hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Banner */}
                <div className="h-36 w-full relative">
                  <img
                    src={c.banner}
                    alt={c.name}
                    className="object-cover w-full h-full"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-semibold ${statusColors[c.status]} shadow`}>
                    {c.status}
                  </span>
                </div>
                {/* Info */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
                    <span className="text-xs text-gray-400">{c.id}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <span>
                      {c.startDate} &rarr; {c.endDate}
                    </span>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1">
                      <FiBarChart2 /> {c.stats}
                    </span>
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-semibold hover:bg-indigo-100 transition text-sm shadow">
                      <FiEdit2 /> Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-xs text-indigo-100 text-center">
          Tip: Click "Edit" to modify a campaign or view analytics (feature coming soon).
        </div>
        <div className="mt-2 text-xs text-indigo-200 text-center">
          &copy; {new Date().getFullYear()} Mini CRM Platform
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
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
