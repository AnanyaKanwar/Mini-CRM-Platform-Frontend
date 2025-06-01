// // import React, { useState } from "react";
// // import axios from "axios";
// // // import { FiSparkle } from "react-icons/fi";
// // import { FiStar } from "react-icons/fi";
// // import { FiZap } from "react-icons/fi";


// // export default function MessageSuggestions() {
// //   const [objective, setObjective] = useState("");
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSuggestions([]);
// //     setError("");
// //     if (!objective.trim()) {
// //       setError("Please enter a campaign objective.");
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       // Use full URL if your backend is on a different port/domain
// //       // const res = await axios.post(
// //       //   "/api/ai/message-suggestions",
// //       //   { objective },
// //       //   {
// //       //     headers: {
// //       //       "Content-Type": "application/json",
// //       //       // Uncomment if you use JWT auth:
// //       //       // Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
// //       //     }
// //       //   }
// //       // );


// //       const res = await axios.post(
// //   `${import.meta.env.VITE_API_BASE_URL}/ai/message-suggestions`,
// //   { objective },
// //   {
// //     headers: {
// //       "Content-Type": "application/json",
// //     }
// //   }
// // );

// //       setSuggestions(res.data.suggestions || []);
// //     } catch (err) {
// //       setError(
// //         err.response?.data?.error ||
// //           "Failed to get suggestions. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200/80">
// //       <div
// //         className="
// //           w-[90vw] max-w-[420px] h-[60vh] max-h-[420px] min-h-[340px]
// //           bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl
// //           border border-white/50 flex flex-col relative
// //         "
// //         style={{
// //           width: "40vw",
// //           minWidth: "320px",
// //           maxWidth: "420px",
// //           height: "40vh",
// //           minHeight: "320px",
// //           maxHeight: "420px",
// //         }}
// //       >
// //         {/* Header */}
// //         <div className="flex items-center gap-2 px-6 py-4 border-b border-indigo-100 bg-gradient-to-r from-indigo-400/20 to-pink-400/10 rounded-t-3xl">
// //           <FiStar className="text-2xl text-indigo-600" />
// //           <span className="text-lg font-bold text-indigo-700">AI Message Suggestions</span>
// //         </div>

// //         {/* Form */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className="flex flex-col gap-3 px-6 py-4"
// //         >
// //           <label className="text-sm font-medium text-gray-700">
// //             Campaign Objective:
// //           </label>
// //           <textarea
// //             value={objective}
// //             onChange={e => setObjective(e.target.value)}
// //             rows={2}
// //             className="border border-indigo-200 rounded-xl p-2 resize-none text-sm focus:ring-2 focus:ring-indigo-300"
// //             placeholder="e.g. Invite customers to our summer sale"
// //             disabled={loading}
// //             style={{ minHeight: "38px", maxHeight: "60px" }}
// //           />
// //           <button
// //             type="submit"
// //             className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold mt-2 transition disabled:opacity-50"
// //             disabled={loading}
// //           >
// //             {loading ? "Generating..." : "Get Suggestions"}
// //           </button>
// //         </form>

// //         {/* Suggestions */}
// //         <div className="flex-1 overflow-y-auto px-6 pb-4">
// //           {error && (
// //             <div className="text-red-500 text-xs mb-2">{error}</div>
// //           )}
// //           {suggestions.length > 0 && (
// //             <div className="mt-2 space-y-3">
// //               <div className="text-xs text-gray-500 mb-1">AI Suggestions:</div>
// //               {suggestions.map((msg, idx) => (
// //                 <div
// //                   key={idx}
// //                   className="bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-900 px-4 py-2 rounded-xl shadow mb-1 text-sm"
// //                 >
// //                   {msg}
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       {/* Optional: Soft glowing ring */}
// //       <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-300 via-pink-300 to-transparent opacity-40 blur-2xl pointer-events-none"></div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import axios from "axios";
// import { FiStar, FiZap, FiUser, FiSend } from "react-icons/fi";
// import { IoMdSettings } from "react-icons/io";

// export default function MessageSuggestions() {
//   const [objective, setObjective] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuggestions([]);
//     setError("");
//     if (!objective.trim()) {
//       setError("Please enter a campaign objective.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/ai/message-suggestions`,
//         { objective },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       setSuggestions(res.data.suggestions || []);
//     } catch (err) {
//       setError(
//         err.response?.data?.error ||
//         "Failed to get suggestions. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
//       {/* Subtle glowing border ring */}
      
//       <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-700/20 via-purple-700/20 to-pink-700/20 opacity-50 blur-2xl pointer-events-none animate-pulse-slow"></div>
//       {/* Main Card */}
//       <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-xl shadow-2xl rounded-3xl border border-gray-700/60 z-10 overflow-hidden animate-fade-in-down w-full max-w-3xl h-[80vh] max-h-[640px] min-h-[480px] flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-8 py-6 border-b border-gray-700/40">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30">
//                 <FiZap className="text-indigo-400 text-xl" />
//               </div>
//               <div className="absolute -inset-1 rounded-full bg-indigo-400/20 blur-md pointer-events-none animate-pulse-slow"></div>
//             </div>
//             <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 drop-shadow">
//               AI Message Suggestions
//             </h2>
//           </div>
//           <button className="text-gray-400 hover:text-gray-200 transition">
//             <IoMdSettings size={20} />
//           </button>
//         </div>

//         {/* Bot Sign */}
//         <div className="absolute top-24 left-6 flex items-center gap-2">
//           <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400/20 backdrop-blur-sm border border-indigo-400/30">
//             <FiUser className="text-indigo-400 text-sm" />
//           </div>
//           <span className="text-xs text-gray-400 font-medium">AI Assistant</span>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="px-8 pt-14 pb-6 flex flex-col gap-4">
//           <label className="text-sm font-medium text-gray-300">
//             What’s your campaign objective?
//           </label>
//           <textarea
//             value={objective}
//             onChange={e => setObjective(e.target.value)}
//             rows={3}
//             className="w-full border border-gray-700 bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 text-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition disabled:opacity-60"
//             placeholder="e.g. Invite customers to our summer sale"
//             disabled={loading}
//           />
//           <div className="flex items-center gap-3">
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-3 rounded-xl font-medium transition disabled:opacity-50 shadow-md hover:shadow-indigo-500/30"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Generating...
//                 </>
//               ) : (
//                 <>
//                   <FiSend /> Get Suggestions
//                 </>
//               )}
//             </button>
//           </div>
//         </form>

//         {/* Suggestions */}
//         <div className="flex-1 overflow-y-auto px-8 pb-8">
//           {error && (
//             <div className="text-red-400 text-sm mb-4">{error}</div>
//           )}
//           {suggestions.length > 0 && (
//             <div className="mt-2 space-y-4">
//               <div className="text-sm text-gray-400 font-medium mb-2 ml-1">
//                 Suggestions from AI Assistant
//               </div>
//               {suggestions.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-700/60 backdrop-blur-sm text-gray-200 px-4 py-3 rounded-xl shadow-sm"
//                 >
//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/30">
//                       <FiStar className="text-purple-400 text-sm" />
//                     </div>
//                     <span>{msg}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {!loading && suggestions.length === 0 && !error && (
//             <div className="flex flex-col items-center justify-center h-full text-gray-500">
//               <FiZap className="text-4xl mb-4 text-indigo-400/40" />
//               <p className="text-center max-w-xs">
//                 Enter your campaign objective to get AI-generated message suggestions.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Animation keyframes */}
//       <style>
//         {`
//           .animate-fade-in-down {
//             animation: fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//           }
//           @keyframes fadeInDown {
//             0% { opacity: 0; transform: translateY(-40px) scale(0.97); }
//             100% { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           .animate-pulse-slow {
//             animation: pulseSlow 6s infinite;
//           }
//           @keyframes pulseSlow {
//             0%, 100% { opacity: 0.4; }
//             50% { opacity: 0.6; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import axios from "axios";
// import { FiStar, FiZap, FiUser, FiSend, FiX } from "react-icons/fi";
// import { IoMdSettings } from "react-icons/io";

// export default function MessageSuggestions() {
//   const [objective, setObjective] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuggestions([]);
//     setError("");
    
//     // Enhanced validation
//     if (!objective.trim()) {
//       setError("Please enter a campaign objective.");
//       return;
//     }
    
//     if (objective.trim().length < 10) {
//       setError("Please enter a more detailed objective (at least 10 characters).");
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/ai/message-suggestions`,
//         { objective },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       setSuggestions(res.data.suggestions || []);
//     } catch (err) {
//       setError(
//         err.response?.data?.error ||
//         "Failed to get suggestions. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to clear all input and suggestions
//   const handleClear = () => {
//     setObjective("");
//     setSuggestions([]);
//     setError("");
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
//       {/* Subtle glowing border ring */}
//       <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-700/20 via-purple-700/20 to-pink-700/20 opacity-50 blur-2xl pointer-events-none animate-pulse-slow"></div>
      
//       {/* Main Card */}
//       <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-xl shadow-2xl rounded-3xl border border-gray-700/60 z-10 overflow-hidden animate-fade-in-down w-full max-w-3xl h-[80vh] max-h-[640px] min-h-[480px] flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between px-8 py-6 border-b border-gray-700/40">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30">
//                 <FiZap className="text-indigo-400 text-xl" />
//               </div>
//               <div className="absolute -inset-1 rounded-full bg-indigo-400/20 blur-md pointer-events-none animate-pulse-slow"></div>
//             </div>
//             <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 drop-shadow">
//               AI Message Suggestions
//             </h2>
//           </div>
//           <div className="flex items-center gap-3">
//             <button 
//               onClick={handleClear}
//               className="text-gray-400 hover:text-gray-200 transition p-1 rounded-full hover:bg-gray-700/50"
//               title="Clear all"
//             >
//               <FiX size={20} />
//             </button>
//             <button className="text-gray-400 hover:text-gray-200 transition p-1 rounded-full hover:bg-gray-700/50">
//               <IoMdSettings size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Bot Sign */}
//         <div className="absolute top-24 left-6 flex items-center gap-2">
//           <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400/20 backdrop-blur-sm border border-indigo-400/30">
//             <FiUser className="text-indigo-400 text-sm" />
//           </div>
//           <span className="text-xs text-gray-400 font-medium">AI Assistant</span>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="px-8 pt-14 pb-6 flex flex-col gap-4">
//           <label className="text-sm font-medium text-gray-300">
//             What's your campaign objective?
//           </label>
//           <textarea
//             value={objective}
//             onChange={e => setObjective(e.target.value)}
//             rows={3}
//             className="w-full border border-gray-700 bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 text-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition disabled:opacity-60"
//             placeholder="e.g. Invite customers to our summer sale with 20% discount on all products"
//             disabled={loading}
//           />
//           <div className="flex items-center gap-3">
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-3 rounded-xl font-medium transition disabled:opacity-50 shadow-md hover:shadow-indigo-500/30"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Generating...
//                 </>
//               ) : (
//                 <>
//                   <FiSend /> Get Suggestions
//                 </>
//               )}
//             </button>
//             {objective && (
//               <button
//                 type="button"
//                 onClick={handleClear}
//                 className="text-gray-400 hover:text-gray-200 transition px-3 py-2 rounded-lg text-sm font-medium"
//                 disabled={loading}
//               >
//                 Clear
//               </button>
//             )}
//           </div>
//         </form>

//         {/* Suggestions */}
//         <div className="flex-1 overflow-y-auto px-8 pb-8">
//           {error && (
//             <div className="text-red-400 text-sm mb-4 flex items-start gap-2">
//               <FiX className="flex-shrink-0 mt-0.5" />
//               <span>{error}</span>
//             </div>
//           )}
//           {suggestions.length > 0 && (
//             <div className="mt-2 space-y-4">
//               <div className="flex items-center justify-between">
//                 <div className="text-sm text-gray-400 font-medium mb-2 ml-1">
//                   Suggestions from AI Assistant
//                 </div>
//                 <button
//                   onClick={handleClear}
//                   className="text-xs text-gray-500 hover:text-gray-300 transition"
//                 >
//                   Clear all
//                 </button>
//               </div>
//               {suggestions.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-700/60 backdrop-blur-sm text-gray-200 px-4 py-3 rounded-xl shadow-sm"
//                 >
//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/30">
//                       <FiStar className="text-purple-400 text-sm" />
//                     </div>
//                     <span>{msg}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {!loading && suggestions.length === 0 && !error && (
//             <div className="flex flex-col items-center justify-center h-full text-gray-500">
//               <FiZap className="text-4xl mb-4 text-indigo-400/40" />
//               <p className="text-center max-w-xs">
//                 Enter your campaign objective to get AI-generated message suggestions.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Animation keyframes */}
//       <style>
//         {`
//           .animate-fade-in-down {
//             animation: fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//           }
//           @keyframes fadeInDown {
//             0% { opacity: 0; transform: translateY(-40px) scale(0.97); }
//             100% { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           .animate-pulse-slow {
//             animation: pulseSlow 6s infinite;
//           }
//           @keyframes pulseSlow {
//             0%, 100% { opacity: 0.4; }
//             50% { opacity: 0.6; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }
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
