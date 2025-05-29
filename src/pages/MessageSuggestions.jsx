import React, { useState } from "react";
import axios from "axios";
// import { FiSparkle } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiZap } from "react-icons/fi";


export default function MessageSuggestions() {
  const [objective, setObjective] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuggestions([]);
    setError("");
    if (!objective.trim()) {
      setError("Please enter a campaign objective.");
      return;
    }
    setLoading(true);
    try {
      // Use full URL if your backend is on a different port/domain
      const res = await axios.post(
        "/api/ai/message-suggestions",
        { objective },
        {
          headers: {
            "Content-Type": "application/json",
            // Uncomment if you use JWT auth:
            // Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          }
        }
      );
      setSuggestions(res.data.suggestions || []);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to get suggestions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200/80">
      <div
        className="
          w-[90vw] max-w-[420px] h-[60vh] max-h-[420px] min-h-[340px]
          bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl
          border border-white/50 flex flex-col relative
        "
        style={{
          width: "40vw",
          minWidth: "320px",
          maxWidth: "420px",
          height: "40vh",
          minHeight: "320px",
          maxHeight: "420px",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-indigo-100 bg-gradient-to-r from-indigo-400/20 to-pink-400/10 rounded-t-3xl">
          <FiStar className="text-2xl text-indigo-600" />
          <span className="text-lg font-bold text-indigo-700">AI Message Suggestions</span>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-6 py-4"
        >
          <label className="text-sm font-medium text-gray-700">
            Campaign Objective:
          </label>
          <textarea
            value={objective}
            onChange={e => setObjective(e.target.value)}
            rows={2}
            className="border border-indigo-200 rounded-xl p-2 resize-none text-sm focus:ring-2 focus:ring-indigo-300"
            placeholder="e.g. Invite customers to our summer sale"
            disabled={loading}
            style={{ minHeight: "38px", maxHeight: "60px" }}
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold mt-2 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Generating..." : "Get Suggestions"}
          </button>
        </form>

        {/* Suggestions */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {error && (
            <div className="text-red-500 text-xs mb-2">{error}</div>
          )}
          {suggestions.length > 0 && (
            <div className="mt-2 space-y-3">
              <div className="text-xs text-gray-500 mb-1">AI Suggestions:</div>
              {suggestions.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-900 px-4 py-2 rounded-xl shadow mb-1 text-sm"
                >
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Optional: Soft glowing ring */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-300 via-pink-300 to-transparent opacity-40 blur-2xl pointer-events-none"></div>
    </div>
  );
}
