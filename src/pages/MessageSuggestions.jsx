import React, { useState } from "react";
import axios from "axios";
import { FiStar, FiZap, FiUser, FiSend, FiX } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

export default function MessageSuggestions({ isOpen, onClose }) {
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
    if (objective.trim().length < 10) {
      setError("Please enter a more detailed objective (at least 10 characters).");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/ai/message-suggestions`,
        { objective },
        { headers: { "Content-Type": "application/json" } }
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

  const handleClear = () => {
    setObjective("");
    setSuggestions([]);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-xl shadow-2xl rounded-3xl border border-gray-700/60 z-10 overflow-hidden animate-fade-in-down w-full max-w-lg h-[60vh] max-h-[450px] min-h-[350px]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/40">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30">
                <FiZap className="text-indigo-400 text-lg" />
              </div>
            </div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 drop-shadow">
              AI Message Suggestions
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition p-1 rounded-full hover:bg-gray-700/50"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Bot Sign */}
        <div className="absolute top-16 left-5 flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-400/20 backdrop-blur-sm border border-indigo-400/30">
            <FiUser className="text-indigo-400 text-xs" />
          </div>
          <span className="text-xs text-gray-400 font-medium">AI Assistant</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pt-12 pb-4 flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-300">
            What's your campaign objective?
          </label>
          <textarea
            value={objective}
            onChange={e => setObjective(e.target.value)}
            rows={2}
            className="w-full border border-gray-700 bg-gray-800/60 backdrop-blur-sm rounded-xl p-2 text-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition disabled:opacity-60 text-sm"
            placeholder="e.g. Invite customers to our summer sale"
            disabled={loading}
          />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-50 shadow-md hover:shadow-indigo-500/30 text-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <FiSend size={14} /> Get Suggestions
                </>
              )}
            </button>
            {objective && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-200 transition px-3 py-1.5 rounded-lg text-xs font-medium"
                disabled={loading}
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {/* Suggestions */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {error && (
            <div className="text-red-400 text-xs mb-3 flex items-start gap-2">
              <FiX className="flex-shrink-0 mt-0.5" size={14} />
              <span>{error}</span>
            </div>
          )}
          {suggestions.length > 0 && (
            <div className="mt-2 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Suggestions from AI Assistant
                </div>
                <button
                  onClick={handleClear}
                  className="text-xs text-gray-500 hover:text-gray-300 transition"
                >
                  Clear all
                </button>
              </div>
              {suggestions.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-700/60 backdrop-blur-sm text-gray-200 px-3 py-2 rounded-lg shadow-sm text-sm"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/30">
                      <FiStar className="text-purple-400 text-xs" />
                    </div>
                    <span>{msg}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && suggestions.length === 0 && !error && (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 text-xs">
              <FiZap className="text-2xl mb-2 text-indigo-400/40" />
              <p className="text-center max-w-xs">
                Enter your campaign objective to get AI-generated message suggestions.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 0.3s ease-out;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
