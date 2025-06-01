// // // import React, { useEffect, useState } from "react";
// // // import { FiSend, FiRefreshCcw, FiSearch, FiEdit2, FiBarChart2 } from "react-icons/fi";

// // // // More campaign cards with varied banners and stats
// // // const DUMMY_CAMPAIGNS = [
// // //   {
// // //     id: "CMP-1001",
// // //     name: "Summer Sale 2025",
// // //     status: "Active",
// // //     banner: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
// // //     startDate: "2025-05-01",
// // //     endDate: "2025-06-01",
// // //     stats: "Open Rate: 45%",
// // //   },
// // //   {
// // //     id: "CMP-1002",
// // //     name: "Diwali Bonanza",
// // //     status: "Scheduled",
// // //     banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
// // //     startDate: "2025-10-15",
// // //     endDate: "2025-11-10",
// // //     stats: "Scheduled",
// // //   },
// // //   {
// // //     id: "CMP-1003",
// // //     name: "Year End Clearance",
// // //     status: "Completed",
// // //     banner: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
// // //     startDate: "2024-12-01",
// // //     endDate: "2024-12-31",
// // //     stats: "CTR: 12%",
// // //   },
// // //   {
// // //     id: "CMP-1004",
// // //     name: "New Arrivals",
// // //     status: "Active",
// // //     banner: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
// // //     startDate: "2025-06-10",
// // //     endDate: "2025-07-10",
// // //     stats: "Open Rate: 53%",
// // //   },
// // //   {
// // //     id: "CMP-1005",
// // //     name: "Flash Friday",
// // //     status: "Scheduled",
// // //     banner: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
// // //     startDate: "2025-07-15",
// // //     endDate: "2025-07-16",
// // //     stats: "Scheduled",
// // //   },
// // //   {
// // //     id: "CMP-1006",
// // //     name: "Referral Boost",
// // //     status: "Completed",
// // //     banner: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
// // //     startDate: "2025-03-01",
// // //     endDate: "2025-03-31",
// // //     stats: "CTR: 18%",
// // //   },
// // // ];

// // // const statusColors = {
// // //   Active: "bg-green-100 text-green-700 border-green-300",
// // //   Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
// // //   Completed: "bg-blue-100 text-blue-700 border-blue-300",
// // // };

// // // export default function Campaigns() {
// // //   const [campaigns, setCampaigns] = useState([]);
// // //   const [search, setSearch] = useState("");

// // //   useEffect(() => {
// // //     setTimeout(() => setCampaigns(DUMMY_CAMPAIGNS), 500);
// // //   }, []);

// // //   const filteredCampaigns = campaigns.filter(
// // //     (c) =>
// // //       c.name.toLowerCase().includes(search.toLowerCase()) ||
// // //       c.id.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 mt-6">
// // //       <div className="relative w-full max-w-6xl mx-auto">
// // //         {/* Header */}
// // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
// // //           <div className="flex items-center gap-4">
// // //             <div className="bg-gradient-to-br from-indigo-500 to-pink-400 p-3 rounded-full shadow-lg">
// // //               <FiSend size={28} className="text-white" />
// // //             </div>
// // //             <div>
// // //               <h2 className="text-3xl font-extrabold text-white mb-1 flex items-center gap-2 drop-shadow">
// // //                 Campaigns
// // //               </h2>
// // //               <p className="text-indigo-100 text-sm">
// // //                 Your marketing campaigns at a glance.
// // //               </p>
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center gap-4">
// // //             <div className="relative">
// // //               <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search campaigns"
// // //                 className="w-56 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
// // //                 value={search}
// // //                 onChange={e => setSearch(e.target.value)}
// // //               />
// // //             </div>
// // //             <button
// // //               onClick={() => setCampaigns(DUMMY_CAMPAIGNS)}
// // //               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition"
// // //               title="Refresh"
// // //             >
// // //               <FiRefreshCcw />
// // //               <span className="hidden md:inline">Refresh</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Campaigns Grid */}
// // //         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
// // //           {filteredCampaigns.length === 0 ? (
// // //             <div className="col-span-full text-center text-gray-200 text-lg py-16">
// // //               <span className="text-4xl">📢</span>
// // //               <div>No campaigns found.</div>
// // //             </div>
// // //           ) : (
// // //             filteredCampaigns.map((c, i) => (
// // //               <div
// // //                 key={c.id}
// // //                 className="relative rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col animate-fade-in-up hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200"
// // //                 style={{ animationDelay: `${i * 80}ms` }}
// // //               >
// // //                 {/* Banner */}
// // //                 <div className="h-36 w-full relative">
// // //                   <img
// // //                     src={c.banner}
// // //                     alt={c.name}
// // //                     className="object-cover w-full h-full"
// // //                   />
// // //                   <span className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-semibold ${statusColors[c.status]} shadow`}>
// // //                     {c.status}
// // //                   </span>
// // //                 </div>
// // //                 {/* Info */}
// // //                 <div className="flex-1 flex flex-col p-6">
// // //                   <div className="flex items-center gap-2 mb-2">
// // //                     <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
// // //                     <span className="text-xs text-gray-400">{c.id}</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
// // //                     <span>
// // //                       {c.startDate} &rarr; {c.endDate}
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex-1"></div>
// // //                   <div className="flex items-center justify-between mt-2">
// // //                     <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1">
// // //                       <FiBarChart2 /> {c.stats}
// // //                     </span>
// // //                     <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-semibold hover:bg-indigo-100 transition text-sm shadow">
// // //                       <FiEdit2 /> Edit
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>

// // //         {/* Footer Note */}
// // //         <div className="mt-12 text-xs text-indigo-100 text-center">
// // //           Tip: Click "Edit" to modify a campaign or view analytics (feature coming soon).
// // //         </div>
// // //         <div className="mt-2 text-xs text-indigo-200 text-center">
// // //           &copy; {new Date().getFullYear()} Mini CRM Platform
// // //         </div>
// // //       </div>

// // //       {/* Animation keyframes */}
// // //       <style>
// // //         {`
// // //           .animate-fade-in-up {
// // //             animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
// // //           }
// // //           @keyframes fadeInUp {
// // //             0% { opacity: 0; transform: translateY(40px) scale(0.97);}
// // //             100% { opacity: 1; transform: translateY(0) scale(1);}
// // //           }
// // //         `}
// // //       </style>
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect } from 'react';
// // import { FiPlus, FiTrash2, FiCheck, FiSend, FiClock, FiSearch } from 'react-icons/fi';

// // const RuleBuilder = ({ rules, setRules, onPreview }) => {
// //   const addRule = () => {
// //     setRules([...rules, { id: Date.now(), field: "spend", operator: ">", value: "", connector: "AND" }]);
// //   };

// //   const removeRule = (id) => {
// //     setRules(rules.filter(rule => rule.id !== id));
// //   };

// //   const updateRule = (id, key, value) => {
// //     setRules(rules.map(rule => rule.id === id ? { ...rule, [key]: value } : rule));
// //   };

// //   const handlePreview = () => {
// //     const size = Math.floor(Math.random() * 1000) + 100;
// //     onPreview(size);
// //   };

// //   return (
// //     <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
// //       <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Audience Segment Rules</h3>
// //       {rules.map((rule, index) => (
// //         <div key={rule.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
// //           {index > 0 && (
// //             <select
// //               style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px', background: '#f8fafc' }}
// //               value={rule.connector}
// //               onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
// //             >
// //               <option value="AND">AND</option>
// //               <option value="OR">OR</option>
// //             </select>
// //           )}
// //           <select
// //             style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px', background: '#f8fafc' }}
// //             value={rule.field}
// //             onChange={(e) => updateRule(rule.id, "field", e.target.value)}
// //           >
// //             <option value="spend">Spend</option>
// //             <option value="visits">Visits</option>
// //             <option value="inactiveDays">Inactive Days</option>
// //           </select>
// //           <select
// //             style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px', background: '#f8fafc' }}
// //             value={rule.operator}
// //             onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
// //           >
// //             <option value=">">&gt;</option>
// //             <option value="<">&lt;</option>
// //             <option value="==">==</option>
// //             <option value="!=">!=</option>
// //           </select>
// //           <input
// //             type="number"
// //             style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px', background: '#f8fafc', width: '96px' }}
// //             value={rule.value}
// //             onChange={(e) => updateRule(rule.id, "value", e.target.value)}
// //           />
// //           <button
// //             onClick={() => removeRule(rule.id)}
// //             style={{ padding: '8px', color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer' }}
// //           >
// //             <FiTrash2 />
// //           </button>
// //         </div>
// //       ))}
// //       <button
// //         onClick={addRule}
// //         style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', background: '#e0e7ff', color: '#4f46e5', fontWeight: '600', border: 'none', cursor: 'pointer' }}
// //       >
// //         <FiPlus /> Add Rule
// //       </button>
// //       <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
// //         <button
// //           onClick={handlePreview}
// //           style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', background: '#dbeafe', color: '#1d4ed8', fontWeight: '600', border: 'none', cursor: 'pointer' }}
// //         >
// //           <FiCheck /> Preview Audience
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default function CampaignsPage() {
// //   const [view, setView] = useState("create");
// //   const [campaigns, setCampaigns] = useState([
// //     {
// //       id: "CMP-1001",
// //       name: "Summer Sale 2025",
// //       audienceSize: 450,
// //       sent: 405,
// //       failed: 45,
// //       date: "2025-05-01",
// //     },
// //     {
// //       id: "CMP-1002",
// //       name: "Diwali Bonanza",
// //       audienceSize: 320,
// //       sent: 288,
// //       failed: 32,
// //       date: "2025-10-15",
// //     },
// //   ]);
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [rules, setRules] = useState([{ id: Date.now(), field: "spend", operator: ">", value: 10000, connector: "AND" }]);
// //   const [audienceSize, setAudienceSize] = useState(null);
// //   const [search, setSearch] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleSave = () => {
// //     if (!name || !message || !audienceSize) return;

// //     setLoading(true);
// //     setTimeout(() => {
// //       const newCampaign = {
// //         id: `CMP-${Date.now()}`,
// //         name,
// //         message,
// //         rules,
// //         audienceSize,
// //         sent: Math.floor(audienceSize * 0.9),
// //         failed: audienceSize - Math.floor(audienceSize * 0.9),
// //         date: new Date().toISOString().split('T')[0],
// //       };
// //       setCampaigns([newCampaign, ...campaigns]);
// //       setLoading(false);
// //       setView("history");
// //       setName("");
// //       setMessage("");
// //       setAudienceSize(null);
// //       setRules([{ id: Date.now(), field: "spend", operator: ">", value: 10000, connector: "AND" }]);
// //     }, 500);
// //   };

// //   const filteredCampaigns = campaigns.filter(
// //     (c) =>
// //       c.name.toLowerCase().includes(search.toLowerCase()) ||
// //       c.id.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div style={{ minHeight: '100vh', paddingTop: '64px', background: 'linear-gradient(to bottom right, #e0e7ff, #fae8ff)', padding: '24px' }}>
// //       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
// //           <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
// //             {view === "create" ? "Create New Campaign" : "Campaign History"}
// //           </h2>
// //           <div style={{ display: 'flex', gap: '16px' }}>
// //             <button
// //               onClick={() => setView("create")}
// //               style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', background: '#4f46e5', color: '#fff', fontWeight: '600', border: 'none', cursor: 'pointer' }}
// //             >
// //               <FiPlus /> New Campaign
// //             </button>
// //             <button
// //               onClick={() => setView("history")}
// //               style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', background: '#e0e7ff', color: '#4f46e5', fontWeight: '600', border: 'none', cursor: 'pointer' }}
// //             >
// //               <FiClock /> Campaign History
// //             </button>
// //           </div>
// //         </div>

// //         {view === "create" ? (
// //           <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
// //             <div style={{ marginBottom: '24px' }}>
// //               <label style={{ display: 'block', color: '#4b5563', marginBottom: '8px' }}>Campaign Name</label>
// //               <input
// //                 type="text"
// //                 style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px' }}
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
// //             <div style={{ marginBottom: '24px' }}>
// //               <label style={{ display: 'block', color: '#4b5563', marginBottom: '8px' }}>Message</label>
// //               <textarea
// //                 style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px', minHeight: '96px' }}
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 placeholder="Hi {name}, here’s 10% off on your next order!"
// //               />
// //             </div>
// //             <RuleBuilder
// //               rules={rules}
// //               setRules={setRules}
// //               onPreview={setAudienceSize}
// //             />
// //             {audienceSize !== null && (
// //               <div style={{ marginTop: '16px', color: '#4b5563' }}>
// //                 Audience Size: {audienceSize}
// //               </div>
// //             )}
// //             <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
// //               <button
// //                 onClick={handleSave}
// //                 style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 24px', borderRadius: '8px', background: '#4f46e5', color: '#fff', fontWeight: '600', border: 'none', cursor: 'pointer' }}
// //                 disabled={!name || !message || !audienceSize || loading}
// //               >
// //                 <FiSend /> {loading ? "Sending..." : "Save & Send Campaign"}
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <div>
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
// //               <div style={{ position: 'relative' }}>
// //                 <FiSearch style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#9ca3af' }} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search campaigns"
// //                   style={{ width: '224px', paddingLeft: '40px', paddingRight: '16px', paddingBlock: '8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'rgba(255,255,255,0.9)' }}
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                 />
// //               </div>
// //             </div>
// //             {loading ? (
// //               <div style={{ textAlign: 'center', padding: '32px', color: '#6b7280' }}>Loading campaigns...</div>
// //             ) : (
// //               <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
// //                 <table style={{ width: '100%' }}>
// //                   <thead style={{ background: '#f9fafb' }}>
// //                     <tr>
// //                       <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>Name</th>
// //                       <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>Date</th>
// //                       <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>Audience</th>
// //                       <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>Sent</th>
// //                       <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>Failed</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody style={{ fontSize: '14px' }}>
// //                     {filteredCampaigns.map((c) => (
// //                       <tr key={c.id} style={{ borderTop: '1px solid #e5e7eb' }}>
// //                         <td style={{ padding: '16px 24px', whiteSpace: 'nowrap' }}>
// //                           <div style={{ display: 'flex', alignItems: 'center' }}>
// //                             <div style={{ marginLeft: '16px' }}>
// //                               <div style={{ fontWeight: '500', color: '#111827' }}>{c.name}</div>
// //                               <div style={{ fontSize: '12px', color: '#6b7280' }}>{c.id}</div>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', color: '#6b7280' }}>{c.date}</td>
// //                         <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', color: '#6b7280' }}>{c.audienceSize}</td>
// //                         <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', color: '#6b7280' }}>{c.sent}</td>
// //                         <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', color: '#6b7280' }}>{c.failed}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from 'react';
// // import { 
// //   FiPlus, 
// //   FiTrash2, 
// //   FiCheck, 
// //   FiSend, 
// //   FiClock, 
// //   FiSearch, 
// //   FiEdit2, 
// //   FiBarChart2,
// //   FiRefreshCw,
// //   FiArrowLeft
// // } from 'react-icons/fi';

// // // RuleBuilder Component
// // const RuleBuilder = ({ rules, setRules, onPreview }) => {
// //   const addRule = () => {
// //     setRules([...rules, { 
// //       id: Date.now(), 
// //       field: "spend", 
// //       operator: ">", 
// //       value: "", 
// //       connector: "AND" 
// //     }]);
// //   };

// //   const removeRule = (id) => {
// //     setRules(rules.filter(rule => rule.id !== id));
// //   };

// //   const updateRule = (id, key, value) => {
// //     setRules(rules.map(rule => 
// //       rule.id === id ? { ...rule, [key]: value } : rule
// //     ));
// //   };

// //   const handlePreview = () => {
// //     const size = Math.floor(Math.random() * 1000) + 100;
// //     onPreview(size);
// //   };

// //   return (
// //     <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
// //       <h3 className="text-xl font-bold mb-4">Audience Segment Rules</h3>
// //       {rules.map((rule, index) => (
// //         <div key={rule.id} className="flex items-center gap-2 mb-3">
// //           {index > 0 && (
// //             <select
// //               className="border border-gray-200 rounded-md p-2 bg-gray-50"
// //               value={rule.connector}
// //               onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
// //             >
// //               <option value="AND">AND</option>
// //               <option value="OR">OR</option>
// //             </select>
// //           )}
// //           <select
// //             className="border border-gray-200 rounded-md p-2 bg-gray-50"
// //             value={rule.field}
// //             onChange={(e) => updateRule(rule.id, "field", e.target.value)}
// //           >
// //             <option value="spend">Total Spend</option>
// //             <option value="visits">Store Visits</option>
// //             <option value="inactiveDays">Inactive Days</option>
// //             <option value="lastPurchase">Last Purchase</option>
// //             <option value="emailOpens">Email Opens</option>
// //           </select>
// //           <select
// //             className="border border-gray-200 rounded-md p-2 bg-gray-50"
// //             value={rule.operator}
// //             onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
// //           >
// //             <option value=">">&gt;</option>
// //             <option value="<">&lt;</option>
// //             <option value="==">=</option>
// //             <option value="!=">≠</option>
// //             <option value=">=">≥</option>
// //             <option value="<=">≤</option>
// //           </select>
// //           <input
// //             type="number"
// //             className="border border-gray-200 rounded-md p-2 bg-gray-50 w-24"
// //             value={rule.value}
// //             onChange={(e) => updateRule(rule.id, "value", e.target.value)}
// //           />
// //           <button
// //             onClick={() => removeRule(rule.id)}
// //             className="p-2 text-red-500 hover:text-red-700"
// //           >
// //             <FiTrash2 />
// //           </button>
// //         </div>
// //       ))}
// //       <button
// //         onClick={addRule}
// //         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium"
// //       >
// //         <FiPlus /> Add Rule
// //       </button>
// //       <div className="flex items-center gap-4 mt-4">
// //         <button
// //           onClick={handlePreview}
// //           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium"
// //         >
// //           <FiCheck /> Preview Audience
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // CampaignCard Component
// // const CampaignCard = ({ campaign, onEdit }) => {
// //   const statusColors = {
// //     Active: "bg-green-100 text-green-700 border-green-300",
// //     Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
// //     Completed: "bg-blue-100 text-blue-700 border-blue-300",
// //     Draft: "bg-gray-100 text-gray-700 border-gray-300"
// //   };

// //   return (
// //     <div className="relative rounded-xl shadow-md bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
// //       {/* Banner */}
// //       <div className="h-40 w-full relative bg-gradient-to-r from-indigo-500 to-purple-600">
// //         <span className={`absolute top-3 right-3 px-3 py-1 rounded-full border text-xs font-semibold ${statusColors[campaign.status]} shadow`}>
// //           {campaign.status}
// //         </span>
// //       </div>
      
// //       {/* Info */}
// //       <div className="flex-1 flex flex-col p-5">
// //         <div className="flex items-center gap-2 mb-2">
// //           <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
// //           <span className="text-xs text-gray-400">{campaign.id}</span>
// //         </div>
        
// //         <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
// //           <span>{campaign.date}</span>
// //         </div>
        
// //         <div className="grid grid-cols-2 gap-3 mb-4">
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Audience</div>
// //             <div className="font-semibold">{campaign.audienceSize}</div>
// //           </div>
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Sent</div>
// //             <div className="font-semibold text-green-600">{campaign.sent}</div>
// //           </div>
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Failed</div>
// //             <div className="font-semibold text-red-600">{campaign.failed}</div>
// //           </div>
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Open Rate</div>
// //             <div className="font-semibold text-blue-600">
// //               {Math.floor(Math.random() * 30) + 20}%
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="flex items-center justify-between mt-auto">
// //           <button 
// //             onClick={() => onEdit(campaign)}
// //             className="flex items-center gap-1 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100"
// //           >
// //             <FiEdit2 /> View Details
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Campaigns Component
// // const Campaigns = () => {
// //   const [view, setView] = useState("list");
// //   const [detailView, setDetailView] = useState(null);
// //   const [campaigns, setCampaigns] = useState([]);
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [rules, setRules] = useState([{ 
// //     id: Date.now(), 
// //     field: "spend", 
// //     operator: ">", 
// //     value: 100, 
// //     connector: "AND" 
// //   }]);
// //   const [audienceSize, setAudienceSize] = useState(null);
// //   const [search, setSearch] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [selectedStatus, setSelectedStatus] = useState("all");

// //   // Load sample campaigns
// //   useEffect(() => {
// //     const sampleCampaigns = [
// //       {
// //         id: "CMP-1001",
// //         name: "Summer Sale 2025",
// //         status: "Active",
// //         audienceSize: 450,
// //         sent: 405,
// //         failed: 45,
// //         date: "2025-05-01",
// //         message: "Hi {name}, enjoy 20% off on summer collection!",
// //         rules: [{ field: "spend", operator: ">", value: 100 }]
// //       },
// //       {
// //         id: "CMP-1002",
// //         name: "Diwali Bonanza",
// //         status: "Scheduled",
// //         audienceSize: 320,
// //         sent: 0,
// //         failed: 0,
// //         date: "2025-10-15",
// //         message: "Diwali special: Buy 1 get 1 free on selected items!",
// //         rules: [{ field: "visits", operator: ">", value: 3 }]
// //       },
// //       {
// //         id: "CMP-1003",
// //         name: "New Arrivals",
// //         status: "Completed",
// //         audienceSize: 780,
// //         sent: 702,
// //         failed: 78,
// //         date: "2025-03-10",
// //         message: "Check out our new collection with 15% discount!",
// //         rules: [{ field: "lastPurchase", operator: "<", value: 30 }]
// //       },
// //       {
// //         id: "CMP-1004",
// //         name: "Loyalty Rewards",
// //         status: "Draft",
// //         audienceSize: 0,
// //         sent: 0,
// //         failed: 0,
// //         date: "2025-06-20",
// //         message: "Exclusive rewards for our loyal customers!",
// //         rules: [{ field: "spend", operator: ">", value: 500 }]
// //       }
// //     ];
// //     setCampaigns(sampleCampaigns);
// //   }, []);

// //   const handleSave = () => {
// //     if (!name || !message || !audienceSize) return;

// //     setLoading(true);
// //     setTimeout(() => {
// //       const newCampaign = {
// //         id: `CMP-${Date.now()}`,
// //         name,
// //         message,
// //         rules,
// //         audienceSize,
// //         sent: Math.floor(audienceSize * 0.9),
// //         failed: audienceSize - Math.floor(audienceSize * 0.9),
// //         date: new Date().toISOString().split('T')[0],
// //         status: "Active"
// //       };
// //       setCampaigns([newCampaign, ...campaigns]);
// //       setLoading(false);
// //       setView("list");
// //       resetForm();
// //     }, 800);
// //   };

// //   const resetForm = () => {
// //     setName("");
// //     setMessage("");
// //     setAudienceSize(null);
// //     setRules([{ id: Date.now(), field: "spend", operator: ">", value: 100, connector: "AND" }]);
// //   };

// //   const filteredCampaigns = campaigns.filter(c => {
// //     const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
// //                          c.id.toLowerCase().includes(search.toLowerCase());
// //     const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
// //     return matchesSearch && matchesStatus;
// //   });

// //   const handleEdit = (campaign) => {
// //     setDetailView(campaign);
// //     setView("detail");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 mt-12">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
// //           {view === "list" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <div className="bg-indigo-500 p-3 rounded-full shadow">
// //                   <FiSend size={24} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-800">Campaigns</h2>
// //                   <p className="text-gray-500 text-sm">
// //                     {filteredCampaigns.length} campaigns found
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => setView("create")}
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
// //                 >
// //                   <FiPlus /> New Campaign
// //                 </button>
// //               </div>
// //             </>
// //           ) : view === "create" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => setView("list")}
// //                   className="p-2 rounded-full hover:bg-gray-100"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-800">Create New Campaign</h2>
// //                   <p className="text-gray-500 text-sm">
// //                     Define your audience and message
// //                   </p>
// //                 </div>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => setView("list")}
// //                   className="p-2 rounded-full hover:bg-gray-100"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-800">{detailView?.name}</h2>
// //                   <p className="text-gray-500 text-sm">
// //                     Campaign ID: {detailView?.id}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
// //                 >
// //                   <FiSend /> Resend
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* Main Content */}
// //         {view === "list" ? (
// //           <>
// //             {/* Filters */}
// //             <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
// //               <div className="relative flex-1">
// //                 <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search campaigns..."
// //                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <select
// //                   className="border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   value={selectedStatus}
// //                   onChange={(e) => setSelectedStatus(e.target.value)}
// //                 >
// //                   <option value="all">All Status</option>
// //                   <option value="Active">Active</option>
// //                   <option value="Scheduled">Scheduled</option>
// //                   <option value="Completed">Completed</option>
// //                   <option value="Draft">Draft</option>
// //                 </select>
// //                 <button
// //                   onClick={() => window.location.reload()}
// //                   className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
// //                   title="Refresh"
// //                 >
// //                   <FiRefreshCw />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Campaigns Grid */}
// //             {loading ? (
// //               <div className="text-center py-16 text-gray-500">
// //                 Loading campaigns...
// //               </div>
// //             ) : filteredCampaigns.length === 0 ? (
// //               <div className="bg-white rounded-xl p-8 text-center">
// //                 <div className="text-5xl mb-4">📢</div>
// //                 <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
// //                 <p className="text-gray-500 mb-4">
// //                   {search ? "Try a different search term" : "Create your first campaign"}
// //                 </p>
// //                 <button
// //                   onClick={() => setView("create")}
// //                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //                 >
// //                   Create Campaign
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //                 {filteredCampaigns.map((campaign) => (
// //                   <CampaignCard 
// //                     key={campaign.id} 
// //                     campaign={campaign} 
// //                     onEdit={handleEdit}
// //                   />
// //                 ))}
// //               </div>
// //             )}
// //           </>
// //         ) : view === "create" ? (
// //           <div className="bg-white rounded-xl p-6 shadow-sm">
// //             <div className="mb-6">
// //               <label className="block text-gray-700 mb-2">Campaign Name</label>
// //               <input
// //                 type="text"
// //                 className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="e.g. Summer Sale 2025"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
            
// //             <div className="mb-6">
// //               <label className="block text-gray-700 mb-2">Message Template</label>
// //               <textarea
// //                 className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="Hi {name}, here's your exclusive offer..."
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //               />
// //               <p className="text-sm text-gray-500 mt-1">
// //                 Use {"{name}"} to personalize the message
// //               </p>
// //             </div>
            
// //             <RuleBuilder
// //               rules={rules}
// //               setRules={setRules}
// //               onPreview={setAudienceSize}
// //             />
            
// //             {audienceSize !== null && (
// //               <div className="mb-6 p-4 bg-blue-50 rounded-lg">
// //                 <div className="font-medium text-blue-800">
// //                   Estimated Audience Size: <span className="font-bold">{audienceSize}</span> customers
// //                 </div>
// //               </div>
// //             )}
            
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 onClick={() => {
// //                   resetForm();
// //                   setView("list");
// //                 }}
// //                 className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleSave}
// //                 disabled={!name || !message || !audienceSize || loading}
// //                 className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
// //                   !name || !message || !audienceSize || loading
// //                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
// //                     : "bg-indigo-600 text-white hover:bg-indigo-700"
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     Creating...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <FiSend /> Save & Send Campaign
// //                   </>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
// //             {/* Campaign Header */}
// //             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <h2 className="text-2xl font-bold">{detailView?.name}</h2>
// //                   <p className="opacity-80">ID: {detailView?.id}</p>
// //                 </div>
// //                 <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
// //                   detailView?.status === "Active" ? "bg-green-100 text-green-800" :
// //                   detailView?.status === "Scheduled" ? "bg-yellow-100 text-yellow-800" :
// //                   detailView?.status === "Completed" ? "bg-blue-100 text-blue-800" :
// //                   "bg-gray-100 text-gray-800"
// //                 }`}>
// //                   {detailView?.status}
// //                 </span>
// //               </div>
// //             </div>
            
// //             {/* Campaign Details */}
// //             <div className="p-6">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Audience Size</h3>
// //                   <p className="text-2xl font-bold">{detailView?.audienceSize}</p>
// //                 </div>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Messages Sent</h3>
// //                   <p className="text-2xl font-bold text-green-600">{detailView?.sent}</p>
// //                 </div>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Messages Failed</h3>
// //                   <p className="text-2xl font-bold text-red-600">{detailView?.failed}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3">Message Content</h3>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <p className="whitespace-pre-line">{detailView?.message}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3">Targeting Rules</h3>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   {detailView?.rules?.map((rule, index) => (
// //                     <div key={index} className="mb-2 last:mb-0">
// //                       {index > 0 && (
// //                         <span className="text-gray-400 font-medium mr-2">
// //                           {rule.connector || "AND"}
// //                         </span>
// //                       )}
// //                       <span className="font-medium">{rule.field}</span>
// //                       <span className="mx-2">{rule.operator}</span>
// //                       <span className="font-medium">{rule.value}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
// //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Open Rate</h4>
// //                     <p className="text-xl font-bold">42%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Click Rate</h4>
// //                     <p className="text-xl font-bold">12%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Conversion</h4>
// //                     <p className="text-xl font-bold">5.2%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Revenue</h4>
// //                     <p className="text-xl font-bold">$8,450</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Campaigns;


// // import React, { useState, useEffect } from 'react';
// // import { 
// //   FiPlus, 
// //   FiTrash2, 
// //   FiCheck, 
// //   FiSend, 
// //   FiClock, 
// //   FiSearch, 
// //   FiEdit2, 
// //   FiBarChart2,
// //   FiRefreshCw,
// //   FiArrowLeft
// // } from 'react-icons/fi';

// // // Generate random Unsplash image URL
// // const getRandomImage = (seed) => {
// //   const categories = ['product', 'marketing', 'advertising', 'business', 'technology'];
// //   const category = categories[Math.floor(Math.random() * categories.length)];
// //   return `https://source.unsplash.com/random/600x400/?${category},campaign&seed=${seed}`;
// // };

// // // RuleBuilder Component
// // const RuleBuilder = ({ rules, setRules, onPreview }) => {
// //   const addRule = () => {
// //     setRules([...rules, { 
// //       id: Date.now(), 
// //       field: "spend", 
// //       operator: ">", 
// //       value: "", 
// //       connector: "AND" 
// //     }]);
// //   };

// //   const removeRule = (id) => {
// //     setRules(rules.filter(rule => rule.id !== id));
// //   };

// //   const updateRule = (id, key, value) => {
// //     setRules(rules.map(rule => 
// //       rule.id === id ? { ...rule, [key]: value } : rule
// //     ));
// //   };

// //   const handlePreview = () => {
// //     const size = Math.floor(Math.random() * 1000) + 100;
// //     onPreview(size);
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  text-white rounded-xl p-6 mb-6 shadow-sm">
// //       <h3 className="text-2xl text-white font-bold mb-4">Audience Segment Rules</h3>
// //       {rules.map((rule, index) => (
// //         <div key={rule.id} className="flex items-center gap-2 mb-3">
// //           {index > 0 && (
// //             <select
// //               className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //               value={rule.connector}
// //               onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
// //             >
// //               <option value="AND">AND</option>
// //               <option value="OR">OR</option>
// //             </select>
// //           )}
// //           <select
// //             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //             value={rule.field}
// //             onChange={(e) => updateRule(rule.id, "field", e.target.value)}
// //           >
// //             <option value="spend">Total Spend</option>
// //             <option value="visits">Store Visits</option>
// //             <option value="inactiveDays">Inactive Days</option>
// //             <option value="lastPurchase">Last Purchase</option>
// //             <option value="emailOpens">Email Opens</option>
// //           </select>
// //           <select
// //             className=" rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700  border-gray-200 transition hover:shadow-lg hover:shadow-indigo-500/10"
// //             value={rule.operator}
// //             onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
// //           >
// //             <option value=">">&gt;</option>
// //             <option value="<">&lt;</option>
// //             <option value="==">=</option>
// //             <option value="!=">≠</option>
// //             <option value=">=">≥</option>
// //             <option value="<=">≤</option>
// //           </select>
// //           <input
// //             type="number"
// //             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 w-24"
// //             value={rule.value}
// //             onChange={(e) => updateRule(rule.id, "value", e.target.value)}
// //           />
// //           <button
// //             onClick={() => removeRule(rule.id)}
// //             className="p-2 text-red-500 hover:text-red-700"
// //           >
// //             <FiTrash2 />
// //           </button>
// //         </div>
// //       ))}
// //       <button
// //         onClick={addRule}
// //         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
// //       >
// //         <FiPlus /> Add Rule
// //       </button>
// //       <div className="flex items-center gap-4 mt-4">
// //         <button
// //           onClick={handlePreview}
// //           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
// //         >
// //           <FiCheck /> Preview Audience
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // CampaignCard Component
// // const CampaignCard = ({ campaign, onEdit }) => {
// //   const statusColors = {
// //     Active: "bg-green-100 text-green-700 border-green-300",
// //     Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
// //     Completed: "bg-blue-100 text-blue-700 border-blue-300",
// //     Draft: "bg-gray-100 text-gray-700 border-gray-300"
// //   };

// //   return (
// //     <div className="relative rounded-xl shadow-md bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
// //       {/* Banner with Unsplash image */}
// //       <div className="h-40 w-full relative">
// //         <img 
// //           src={campaign.image || getRandomImage(campaign.id)} 
// //           alt={campaign.name}
// //           className="w-full h-full object-cover"
// //           onError={(e) => {
// //             e.target.src = getRandomImage(campaign.id + 'fallback');
// //           }}
// //         />
// //         <span className={`absolute top-3 right-3 px-3 py-1 rounded-full border text-xs font-semibold ${statusColors[campaign.status]} shadow`}>
// //           {campaign.status}
// //         </span>
// //       </div>
      
// //       {/* Info */}
// //       <div className="flex-1 flex flex-col p-5">
// //         <div className="flex items-center gap-2 mb-2">
// //           <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
// //           <span className="text-xs text-gray-400">{campaign.id}</span>
// //         </div>
        
// //         <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
// //           <span>{campaign.date}</span>
// //         </div>
        
// //         <div className="grid grid-cols-2 gap-3 mb-4">
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Audience</div>
// //             <div className="font-semibold">{campaign.audienceSize}</div>
// //           </div>
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Sent</div>
// //             <div className="font-semibold text-green-600">{campaign.sent}</div>
// //           </div>
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Failed</div>
// //             <div className="font-semibold text-red-600">{campaign.failed}</div>
// //           </div>
// //           <div className="bg-gray-50 p-3 rounded-lg">
// //             <div className="text-xs text-gray-500">Open Rate</div>
// //             <div className="font-semibold text-blue-600">
// //               {Math.floor(Math.random() * 30) + 20}%
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="flex items-center justify-between mt-auto">
// //           <button 
// //             onClick={() => onEdit(campaign)}
// //             className="flex items-center gap-1 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100"
// //           >
// //             <FiEdit2 /> View Details
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Campaigns Component
// // const Campaigns = () => {
// //   const [view, setView] = useState("list");
// //   const [detailView, setDetailView] = useState(null);
// //   const [campaigns, setCampaigns] = useState([]);
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [rules, setRules] = useState([{ 
// //     id: Date.now(), 
// //     field: "spend", 
// //     operator: ">", 
// //     value: 100, 
// //     connector: "AND" 
// //   }]);
// //   const [audienceSize, setAudienceSize] = useState(null);
// //   const [search, setSearch] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [selectedStatus, setSelectedStatus] = useState("all");

// //   // Load campaigns from localStorage or initialize with sample data
// //   useEffect(() => {
// //     const savedCampaigns = localStorage.getItem('campaigns');
// //     if (savedCampaigns) {
// //       setCampaigns(JSON.parse(savedCampaigns));
// //     } else {
// //       const sampleCampaigns = [
// //         {
// //           id: "CMP-1001",
// //           name: "Summer Sale 2025",
// //           status: "Active",
// //           audienceSize: 450,
// //           sent: 405,
// //           failed: 45,
// //           date: "2025-05-01",
// //           message: "Hi {name}, enjoy 20% off on summer collection!",
// //           rules: [{ field: "spend", operator: ">", value: 100 }],
// //           image: getRandomImage('summer-sale')
// //         },
// //         {
// //           id: "CMP-1002",
// //           name: "Diwali Bonanza",
// //           status: "Scheduled",
// //           audienceSize: 320,
// //           sent: 0,
// //           failed: 0,
// //           date: "2025-10-15",
// //           message: "Diwali special: Buy 1 get 1 free on selected items!",
// //           rules: [{ field: "visits", operator: ">", value: 3 }],
// //           image: getRandomImage('diwali')
// //         },
// //         {
// //           id: "CMP-1003",
// //           name: "New Arrivals",
// //           status: "Completed",
// //           audienceSize: 780,
// //           sent: 702,
// //           failed: 78,
// //           date: "2025-03-10",
// //           message: "Check out our new collection with 15% discount!",
// //           rules: [{ field: "lastPurchase", operator: "<", value: 30 }],
// //           image: getRandomImage('new-arrivals')
// //         },
// //         {
// //           id: "CMP-1004",
// //           name: "Loyalty Rewards",
// //           status: "Draft",
// //           audienceSize: 0,
// //           sent: 0,
// //           failed: 0,
// //           date: "2025-06-20",
// //           message: "Exclusive rewards for our loyal customers!",
// //           rules: [{ field: "spend", operator: ">", value: 500 }],
// //           image: getRandomImage('loyalty')
// //         }
// //       ];
// //       setCampaigns(sampleCampaigns);
// //       localStorage.setItem('campaigns', JSON.stringify(sampleCampaigns));
// //     }
// //   }, []);

// //   // Save campaigns to localStorage whenever they change
// //   useEffect(() => {
// //     if (campaigns.length > 0) {
// //       localStorage.setItem('campaigns', JSON.stringify(campaigns));
// //     }
// //   }, [campaigns]);

// //   const handleSave = () => {
// //     if (!name || !message || !audienceSize) return;

// //     setLoading(true);
// //     setTimeout(() => {
// //       const newCampaign = {
// //         id: `CMP-${Date.now()}`,
// //         name,
// //         message,
// //         rules,
// //         audienceSize,
// //         sent: Math.floor(audienceSize * 0.9),
// //         failed: audienceSize - Math.floor(audienceSize * 0.9),
// //         date: new Date().toISOString().split('T')[0],
// //         status: "Active",
// //         image: getRandomImage(name)
// //       };
// //       const updatedCampaigns = [newCampaign, ...campaigns];
// //       setCampaigns(updatedCampaigns);
// //       localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //       setLoading(false);
// //       setView("list");
// //       resetForm();
// //     }, 800);
// //   };

// //   const resetForm = () => {
// //     setName("");
// //     setMessage("");
// //     setAudienceSize(null);
// //     setRules([{ id: Date.now(), field: "spend", operator: ">", value: 100, connector: "AND" }]);
// //   };

// //   const filteredCampaigns = campaigns.filter(c => {
// //     const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
// //                          c.id.toLowerCase().includes(search.toLowerCase());
// //     const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
// //     return matchesSearch && matchesStatus;
// //   });

// //   const handleEdit = (campaign) => {
// //     setDetailView(campaign);
// //     setView("detail");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800  p-4 md:p-8 mt-20">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
// //           {view === "list" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <div className="bg-indigo-500 p-3 rounded-full shadow">
// //                   <FiSend size={24} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">Campaigns</h2>
// //                   <p className="text-gray-400">
// //                     {filteredCampaigns.length} campaigns found
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => setView("create")}
// //                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition"
// //                 >
// //                   <FiPlus /> New Campaign
// //                 </button>
// //               </div>
// //             </>
// //           ) : view === "create" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => setView("list")}
// //                   className="p-2 rounded-full flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 ro border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white "
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">Create New Campaign</h2>
// //                   <p className="pl-2 text-white">
// //                     Define your audience and message
// //                   </p>
// //                 </div>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => setView("list")}
// //                   className="p-2 rounded-full hover:bg-gray-100"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-800">{detailView?.name}</h2>
// //                   <p className="text-gray-500 text-sm">
// //                     Campaign ID: {detailView?.id}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
// //                 >
// //                   <FiSend /> Resend
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* Main Content */}
// //         {view === "list" ? (
// //           <>
// //             {/* Filters */}
// //             <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
// //               <div className="relative flex-1">
// //                 <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search campaigns..."
// //                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <select
// //                   className="border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   value={selectedStatus}
// //                   onChange={(e) => setSelectedStatus(e.target.value)}
// //                 >
// //                   <option value="all">All Status</option>
// //                   <option value="Active">Active</option>
// //                   <option value="Scheduled">Scheduled</option>
// //                   <option value="Completed">Completed</option>
// //                   <option value="Draft">Draft</option>
// //                 </select>
// //                 <button
// //                   onClick={() => window.location.reload()}
// //                   className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
// //                   title="Refresh"
// //                 >
// //                   <FiRefreshCw />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Campaigns Grid */}
// //             {loading ? (
// //               <div className="text-center py-16 text-gray-500">
// //                 Loading campaigns...
// //               </div>
// //             ) : filteredCampaigns.length === 0 ? (
// //               <div className="bg-white rounded-xl p-8 text-center">
// //                 <div className="text-5xl mb-4">📢</div>
// //                 <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
// //                 <p className="text-gray-500 mb-4">
// //                   {search ? "Try a different search term" : "Create your first campaign"}
// //                 </p>
// //                 <button
// //                   onClick={() => setView("create")}
// //                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //                 >
// //                   Create Campaign
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //                 {filteredCampaigns.map((campaign) => (
// //                   <CampaignCard 
// //                     key={campaign.id} 
// //                     campaign={campaign} 
// //                     onEdit={handleEdit}
// //                   />
// //                 ))}
// //               </div>
// //             )}
// //           </>
// //         ) : view === "create" ? (
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  text-white rounded-xl p-6 shadow-sm">
// //             <div className="mb-6">
// //               <label className="block text-white text-xl mb-2">Campaign Name</label>
// //               <input
// //                 type="text"
// //                 className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="e.g. Summer Sale 2025 text-white"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
            
// //             <div className="mb-6">
// //               <label className="block text-white text-xl mb-2">Message Template</label>
// //               <textarea
// //                 className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="Hi {name}, here's your exclusive offer..."
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //               />
// //               <p className="text-sm text-red-500 mt-1">
// //                 Use {"{name}"} to personalize the message
// //               </p>
// //             </div>
            
// //             <RuleBuilder
// //               rules={rules}
// //               setRules={setRules}
// //               onPreview={setAudienceSize}
// //             />
            
// //             {audienceSize !== null && (
// //               <div className="mb-6 p-4 bg-gradient-to-br from-gray-700 to-gray-600
// //  text-white rounded-lg">
// //                 <div className="font-medium text-white">
// //                   Estimated Audience Size: <span className="font-bold">{audienceSize}</span> customers
// //                 </div>
// //               </div>
// //             )}
            
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 onClick={() => {
// //                   resetForm();
// //                   setView("list");
// //                 }}
// //                 className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleSave}
// //                 disabled={!name || !message || !audienceSize || loading}
// //                 className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
// //                   !name || !message || !audienceSize || loading
// //                     ? "flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white cursor-not-allowed"
// //                     : "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition text-white"
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     Creating...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <FiSend /> Save & Send Campaign
// //                   </>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
// //             {/* Campaign Header */}
// //             <div className="relative h-48 w-full">
// //               <img 
// //                 src={detailView?.image || getRandomImage(detailView?.id)} 
// //                 alt={detailView?.name}
// //                 className="w-full h-full object-cover"
// //                 onError={(e) => {
// //                   e.target.src = getRandomImage(detailView?.id + 'fallback');
// //                 }}
// //               />
// //               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h2 className="text-2xl font-bold">{detailView?.name}</h2>
// //                     <p className="opacity-80">ID: {detailView?.id}</p>
// //                   </div>
// //                   <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
// //                     detailView?.status === "Active" ? "bg-green-100 text-green-800" :
// //                     detailView?.status === "Scheduled" ? "bg-yellow-100 text-yellow-800" :
// //                     detailView?.status === "Completed" ? "bg-blue-100 text-blue-800" :
// //                     "bg-gray-100 text-gray-800"
// //                   }`}>
// //                     {detailView?.status}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Campaign Details */}
// //             <div className="p-6">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Audience Size</h3>
// //                   <p className="text-2xl font-bold">{detailView?.audienceSize}</p>
// //                 </div>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Messages Sent</h3>
// //                   <p className="text-2xl font-bold text-green-600">{detailView?.sent}</p>
// //                 </div>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Messages Failed</h3>
// //                   <p className="text-2xl font-bold text-red-600">{detailView?.failed}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3">Message Content</h3>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   <p className="whitespace-pre-line">{detailView?.message}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3">Targeting Rules</h3>
// //                 <div className="bg-gray-50 p-4 rounded-lg">
// //                   {detailView?.rules?.map((rule, index) => (
// //                     <div key={index} className="mb-2 last:mb-0">
// //                       {index > 0 && (
// //                         <span className="text-gray-400 font-medium mr-2">
// //                           {rule.connector || "AND"}
// //                         </span>
// //                       )}
// //                       <span className="font-medium">{rule.field}</span>
// //                       <span className="mx-2">{rule.operator}</span>
// //                       <span className="font-medium">{rule.value}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
// //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Open Rate</h4>
// //                     <p className="text-xl font-bold">42%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Click Rate</h4>
// //                     <p className="text-xl font-bold">12%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Conversion</h4>
// //                     <p className="text-xl font-bold">5.2%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Revenue</h4>
// //                     <p className="text-xl font-bold">$8,450</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Campaigns;
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   FiPlus, 
// //   FiTrash2, 
// //   FiCheck, 
// //   FiSend, 
// //   FiClock, 
// //   FiSearch, 
// //   FiEdit2, 
// //   FiBarChart2,
// //   FiRefreshCw,
// //   FiArrowLeft,
// //   FiSave,
// //   FiEye
// // } from 'react-icons/fi';

// // // Generate random Unsplash image URL
// // const getRandomImage = (seed) => {
// //   const categories = ['product', 'marketing', 'advertising', 'business', 'technology'];
// //   const category = categories[Math.floor(Math.random() * categories.length)];
// //   return `https://source.unsplash.com/random/600x400/?${category},campaign&seed=${seed}`;
// // };

// // // RuleBuilder Component
// // const RuleBuilder = ({ rules, setRules, onPreview }) => {
// //   const addRule = () => {
// //     setRules([...rules, { 
// //       id: Date.now(), 
// //       field: "spend", 
// //       operator: ">", 
// //       value: "", 
// //       connector: "AND" 
// //     }]);
// //   };

// //   const removeRule = (id) => {
// //     setRules(rules.filter(rule => rule.id !== id));
// //   };

// //   const updateRule = (id, key, value) => {
// //     setRules(rules.map(rule => 
// //       rule.id === id ? { ...rule, [key]: value } : rule
// //     ));
// //   };

// //   const handlePreview = () => {
// //     const size = Math.floor(Math.random() * 1000) + 100;
// //     onPreview(size);
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 mb-6 shadow-sm">
// //       <h3 className="text-2xl text-white font-bold mb-4">Audience Segment Rules</h3>
// //       {rules.map((rule, index) => (
// //         <div key={rule.id} className="flex items-center gap-2 mb-3">
// //           {index > 0 && (
// //             <select
// //               className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //               value={rule.connector}
// //               onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
// //             >
// //               <option value="AND">AND</option>
// //               <option value="OR">OR</option>
// //             </select>
// //           )}
// //           <select
// //             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //             value={rule.field}
// //             onChange={(e) => updateRule(rule.id, "field", e.target.value)}
// //           >
// //             <option value="spend">Total Spend</option>
// //             <option value="visits">Store Visits</option>
// //             <option value="inactiveDays">Inactive Days</option>
// //             <option value="lastPurchase">Last Purchase</option>
// //             <option value="emailOpens">Email Opens</option>
// //           </select>
// //           <select
// //             className=" rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700  border-gray-200 transition hover:shadow-lg hover:shadow-indigo-500/10"
// //             value={rule.operator}
// //             onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
// //           >
// //             <option value=">">&gt;</option>
// //             <option value="<">&lt;</option>
// //             <option value="==">=</option>
// //             <option value="!=">≠</option>
// //             <option value=">=">≥</option>
// //             <option value="<=">≤</option>
// //           </select>
// //           <input
// //             type="number"
// //             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 w-24"
// //             value={rule.value}
// //             onChange={(e) => updateRule(rule.id, "value", e.target.value)}
// //           />
// //           <button
// //             onClick={() => removeRule(rule.id)}
// //             className="p-2 text-red-500 hover:text-red-700"
// //           >
// //             <FiTrash2 />
// //           </button>
// //         </div>
// //       ))}
// //       <button
// //         onClick={addRule}
// //         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
// //       >
// //         <FiPlus /> Add Rule
// //       </button>
// //       <div className="flex items-center gap-4 mt-4">
// //         <button
// //           onClick={handlePreview}
// //           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
// //         >
// //           <FiCheck /> Preview Audience
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // CampaignCard Component
// // const CampaignCard = ({ campaign, onViewDetails, onEdit, onDelete }) => {
// //   const statusColors = {
// //     Active: "bg-green-100 text-green-700 border-green-300",
// //     Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
// //     Completed: "bg-blue-100 text-blue-700 border-blue-300",
// //     Draft: "bg-gray-100 text-gray-700 border-gray-300"
// //   };

// //   return (
// //     <div className="{`relative rounded-xl shadow-md ${cardColors[index % cardColors.length]} border border-gray-700 overflow-hidden flex flex-col hover:shadow-xl transition-shadow text-white`}">
// //       {/* Banner with Unsplash image */}
// //       <div className="h-40 w-full relative">
// //         <img 
// //           src={campaign.image || getRandomImage(campaign.id)} 
// //           alt={campaign.name}
// //           className="w-full h-full object-cover"
// //           onError={(e) => {
// //             e.target.src = getRandomImage(campaign.id + 'fallback');
// //           }}
// //         />
// //         <span className={`absolute top-3 right-3 px-3 py-1 rounded-full border text-xs font-semibold ${statusColors[campaign.status]} shadow`}>
// //           {campaign.status}
// //         </span>
// //       </div>
      
// //       {/* Info */}
// //       <div className="flex-1 flex flex-col p-5">
// //         <div className="flex items-center gap-2 mb-2">
// //           <h3 className="text-xl font-bold text-purple-300">{campaign.name}</h3>
// //           <span className="text-xs text-gray-200">{campaign.id}</span>
// //         </div>
        
// //         <div className="flex items-center gap-2 text-gray-200 text-sm mb-4">
// //           <span>{campaign.date}</span>
// //         </div>
        
// //         <div className="grid grid-cols-2 gap-3 mb-4">
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Audience</div>
// //             <div className="font-semibold text-purple-600">{campaign.audienceSize}</div>
// //           </div>
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Sent</div>
// //             <div className="font-semibold text-green-600">{campaign.sent}</div>
// //           </div>
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Failed</div>
// //             <div className="font-semibold text-red-600">{campaign.failed}</div>
// //           </div>
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Open Rate</div>
// //             <div className="font-semibold text-blue-600">
// //               {Math.floor(Math.random() * 30) + 20}%
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="flex items-center justify-between mt-auto">
// //           <button 
// //             onClick={() => onViewDetails(campaign)}
// //             className="flex items-center gap-1 px-3 py-2 bg-gradient-to-br from-gray-400 to-gray-300
// //  rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100"
// //           >
// //             <FiEye /> View Details
// //           </button>
// //           <div className="flex gap-2">
// //             <button 
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onEdit(campaign);
// //               }}
// //               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300
// //  text-gray-700 font-medium text-sm hover:bg-gray-100"
// //             >
// //               <FiEdit2 />
// //             </button>
// //             <button 
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onDelete(campaign.id);
// //               }}
// //               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300
// //  text-red-700 font-medium text-sm hover:bg-red-100"
// //             >
// //               <FiTrash2 />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Campaigns Component
// // const Campaigns = () => {
// //   const [view, setView] = useState("list");
// //   const [detailView, setDetailView] = useState(null);
// //   const [campaigns, setCampaigns] = useState([]);
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [rules, setRules] = useState([{ 
// //     id: Date.now(), 
// //     field: "spend", 
// //     operator: ">", 
// //     value: 100, 
// //     connector: "AND" 
// //   }]);
// //   const [audienceSize, setAudienceSize] = useState(null);
// //   const [search, setSearch] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [selectedStatus, setSelectedStatus] = useState("all");
// //   const [editingId, setEditingId] = useState(null);

// //   // Load campaigns from localStorage or initialize with sample data
// //   useEffect(() => {
// //     const savedCampaigns = localStorage.getItem('campaigns');
// //     if (savedCampaigns) {
// //       setCampaigns(JSON.parse(savedCampaigns));
// //     } else {
// //       const sampleCampaigns = [
// //         {
// //           id: "CMP-1001",
// //           name: "Summer Sale 2025",
// //           status: "Active",
// //           audienceSize: 450,
// //           sent: 405,
// //           failed: 45,
// //           date: "2025-05-01",
// //           message: "Hi {name}, enjoy 20% off on summer collection!",
// //           rules: [{ field: "spend", operator: ">", value: 100 }],
// //           image: getRandomImage('summer-sale')
// //         },
// //         {
// //           id: "CMP-1002",
// //           name: "Diwali Bonanza",
// //           status: "Scheduled",
// //           audienceSize: 320,
// //           sent: 0,
// //           failed: 0,
// //           date: "2025-10-15",
// //           message: "Diwali special: Buy 1 get 1 free on selected items!",
// //           rules: [{ field: "visits", operator: ">", value: 3 }],
// //           image: getRandomImage('diwali')
// //         },
// //         {
// //           id: "CMP-1003",
// //           name: "New Arrivals",
// //           status: "Completed",
// //           audienceSize: 780,
// //           sent: 702,
// //           failed: 78,
// //           date: "2025-03-10",
// //           message: "Check out our new collection with 15% discount!",
// //           rules: [{ field: "lastPurchase", operator: "<", value: 30 }],
// //           image: getRandomImage('new-arrivals')
// //         },
// //         {
// //           id: "CMP-1004",
// //           name: "Loyalty Rewards",
// //           status: "Draft",
// //           audienceSize: 0,
// //           sent: 0,
// //           failed: 0,
// //           date: "2025-06-20",
// //           message: "Exclusive rewards for our loyal customers!",
// //           rules: [{ field: "spend", operator: ">", value: 500 }],
// //           image: getRandomImage('loyalty')
// //         }
// //       ];
// //       setCampaigns(sampleCampaigns);
// //       localStorage.setItem('campaigns', JSON.stringify(sampleCampaigns));
// //     }
// //   }, []);

// //   // Save campaigns to localStorage whenever they change
// //   useEffect(() => {
// //     if (campaigns.length > 0) {
// //       localStorage.setItem('campaigns', JSON.stringify(campaigns));
// //     }
// //   }, [campaigns]);

// //   const handleSave = () => {
// //     if (!name || !message || !audienceSize) return;

// //     setLoading(true);
// //     setTimeout(() => {
// //       if (editingId) {
// //         // Update existing campaign
// //         const updatedCampaigns = campaigns.map(campaign => 
// //           campaign.id === editingId ? {
// //             ...campaign,
// //             name,
// //             message,
// //             rules,
// //             audienceSize,
// //             sent: Math.floor(audienceSize * 0.9),
// //             failed: audienceSize - Math.floor(audienceSize * 0.9),
// //             date: new Date().toISOString().split('T')[0],
// //             status: "Active"
// //           } : campaign
// //         );
// //         setCampaigns(updatedCampaigns);
// //         localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //         setEditingId(null);
// //       } else {
// //         // Create new campaign
// //         const newCampaign = {
// //           id: `CMP-${Date.now()}`,
// //           name,
// //           message,
// //           rules,
// //           audienceSize,
// //           sent: Math.floor(audienceSize * 0.9),
// //           failed: audienceSize - Math.floor(audienceSize * 0.9),
// //           date: new Date().toISOString().split('T')[0],
// //           status: "Active",
// //           image: getRandomImage(name)
// //         };
// //         const updatedCampaigns = [newCampaign, ...campaigns];
// //         setCampaigns(updatedCampaigns);
// //         localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //       }
// //       setLoading(false);
// //       setView("list");
// //       resetForm();
// //     }, 800);
// //   };

// //   const resetForm = () => {
// //     setName("");
// //     setMessage("");
// //     setAudienceSize(null);
// //     setRules([{ id: Date.now(), field: "spend", operator: ">", value: 100, connector: "AND" }]);
// //     setEditingId(null);
// //   };

// //   const handleEdit = (campaign) => {
// //     setView("create");
// //     setName(campaign.name);
// //     setMessage(campaign.message);
// //     setRules(campaign.rules);
// //     setAudienceSize(campaign.audienceSize);
// //     setEditingId(campaign.id);
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm("Are you sure you want to delete this campaign?")) {
// //       const updatedCampaigns = campaigns.filter(campaign => campaign.id !== id);
// //       setCampaigns(updatedCampaigns);
// //       localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //     }
// //   };

// //   const handleViewDetails = (campaign) => {
// //     setDetailView(campaign);
// //     setView("detail");
// //   };

// //   const handleEditFromDetails = () => {
// //     if (detailView) {
// //       handleEdit(detailView);
// //       setView("create");
// //     }
// //   };

// //   const filteredCampaigns = campaigns.filter(c => {
// //     const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
// //                          c.id.toLowerCase().includes(search.toLowerCase());
// //     const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
// //     return matchesSearch && matchesStatus;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 mt-20">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
// //           {view === "list" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <div className="bg-indigo-500 p-3 rounded-full shadow">
// //                   <FiSend size={24} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">Campaigns</h2>
// //                   <p className="text-gray-400">
// //                     {filteredCampaigns.length} campaigns found
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => {
// //                     resetForm();
// //                     setView("create");
// //                   }}
// //                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition"
// //                 >
// //                   <FiPlus /> New Campaign
// //                 </button>
// //               </div>
// //             </>
// //           ) : view === "create" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => {
// //                     resetForm();
// //                     setView("list");
// //                   }}
// //                   className="p-2 rounded-full flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 ro border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">
// //                     {editingId ? "Edit Campaign" : "Create New Campaign"}
// //                   </h2>
// //                   <p className="pl-2 text-white">
// //                     {editingId ? "Update your campaign details" : "Define your audience and message"}
// //                   </p>
// //                 </div>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => setView("list")}
// //                   className="p-2 rounded-full text-white hover:bg-gray-100 hover:text-gray-900"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">{detailView?.name}</h2>
// //                   <p className="text-gray-400">
// //                     Campaign ID: {detailView?.id}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={handleEditFromDetails}
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500  text-white font-medium shadow hover:bg-indigo-700"
// //                 >
// //                   <FiEdit2 /> Edit Campaign
// //                 </button>
// //                 <button
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700"
// //                 >
// //                   <FiSend /> Resend
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* Main Content */}
// //         {view === "list" ? (
// //           <>
// //             {/* Filters */}
// //             <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
// //               <div className="relative flex-1">
// //                 <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search campaigns..."
// //                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600
// //  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <select
// //                   className="rounded-lg px-3 py-2 bg-gray-800 text-white border-bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   value={selectedStatus}
// //                   onChange={(e) => setSelectedStatus(e.target.value)}
// //                 >
// //                   <option value="all">All Status</option>
// //                   <option value="Active">Active</option>
// //                   <option value="Scheduled">Scheduled</option>
// //                   <option value="Completed">Completed</option>
// //                   <option value="Draft">Draft</option>
// //                 </select>
// //                 <button
// //                   onClick={() => window.location.reload()}
// //                   className="p-2 rounded-lg  border-bg-gray-900 bg-gray-800 hover:bg-gray-700  text-white"
// //                   title="Refresh"
// //                 >
// //                   <FiRefreshCw />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Campaigns Grid */}
// //             {loading ? (
// //               <div className="text-center py-16 text-white">
// //                 Loading campaigns...
// //               </div>
// //             ) : filteredCampaigns.length === 0 ? (
// //               <div className="bg-white rounded-xl p-8 text-center">
// //                 <div className="text-5xl mb-4">📢</div>
// //                 <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
// //                 <p className="text-gray-500 mb-4">
// //                   {search ? "Try a different search term" : "Create your first campaign"}
// //                 </p>
// //                 <button
// //                   onClick={() => {
// //                     resetForm();
// //                     setView("create");
// //                   }}
// //                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //                 >
// //                   Create Campaign
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //                 {filteredCampaigns.map((campaign) => (
// //                   <CampaignCard 
// //                     key={campaign.id} 
// //                     campaign={campaign} 
// //                     onViewDetails={handleViewDetails}
// //                     onEdit={handleEdit}
// //                     onDelete={handleDelete}
// //                   />
// //                 ))}
// //               </div>
// //             )}
// //           </>
// //         ) : view === "create" ? (
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 shadow-sm">
// //             <div className="mb-6">
// //               <label className="block text-white text-xl mb-2">Campaign Name</label>
// //               <input
// //                 type="text"
// //                 className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="e.g. Summer Sale 2025 text-white"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
            
// //             <div className="mb-6">
// //               <label className="block text-white text-xl mb-2">Message Template</label>
// //               <textarea
// //                 className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="Hi {name}, here's your exclusive offer..."
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //               />
// //               <p className="text-sm text-red-500 mt-1">
// //                 Use {"{name}"} to personalize the message
// //               </p>
// //             </div>
            
// //             <RuleBuilder
// //               rules={rules}
// //               setRules={setRules}
// //               onPreview={setAudienceSize}
// //             />
            
// //             {audienceSize !== null && (
// //               <div className="mb-6 p-4 bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-lg">
// //                 <div className="font-medium text-white">
// //                   Estimated Audience Size: <span className="font-bold">{audienceSize}</span> customers
// //                 </div>
// //               </div>
// //             )}
            
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 onClick={() => {
// //                   resetForm();
// //                   setView("list");
// //                 }}
// //                 className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleSave}
// //                 disabled={!name || !message || !audienceSize || loading}
// //                 className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
// //                   !name || !message || !audienceSize || loading
// //                     ? "flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white cursor-not-allowed"
// //                     : "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition text-white"
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     {editingId ? "Updating..." : "Creating..."}
// //                   </>
// //                 ) : (
// //                   <>
// //                     {editingId ? <FiSave /> : <FiSend />} 
// //                     {editingId ? "Update Campaign" : "Save & Send Campaign"}
// //                   </>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600
// //  rounded-xl shadow-sm overflow-hidden">
// //             {/* Campaign Header */}
// //             <div className="relative h-48 w-full">
// //               <img 
// //                 src={detailView?.image || getRandomImage(detailView?.id)} 
// //                 alt={detailView?.name}
// //                 className="w-full h-full object-cover"
// //                 onError={(e) => {
// //                   e.target.src = getRandomImage(detailView?.id + 'fallback');
// //                 }}
// //               />
// //               <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h2 className="text-2xl font-bold">{detailView?.name}</h2>
// //                     <p className="opacity-80">ID: {detailView?.id}</p>
// //                   </div>
// //                   <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
// //                     detailView?.status === "Active" ? "bg-green-100 text-green-800" :
// //                     detailView?.status === "Scheduled" ? "bg-yellow-100 text-yellow-800" :
// //                     detailView?.status === "Completed" ? "bg-blue-100 text-blue-800" :
// //                     "bg-gray-100 text-gray-800"
// //                   }`}>
// //                     {detailView?.status}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Campaign Details */}
// //             <div className="p-6">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //                 <div className="bg-gray-800 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-white mb-1">Audience Size</h3>
// //                   <p className="text-2xl font-bold text-blue-500">{detailView?.audienceSize}</p>
// //                 </div>
// //                 <div className="bg-gray-800 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-white mb-1">Messages Sent</h3>
// //                   <p className="text-2xl font-bold text-green-600">{detailView?.sent}</p>
// //                 </div>
// //                 <div className="bg-gray-800 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-white mb-1">Messages Failed</h3>
// //                   <p className="text-2xl font-bold text-red-600">{detailView?.failed}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-xl font-semibold mb-3 text-">Message Content</h3>
// //                 <div className="bg-gray-600 text-white
// //  p-4 rounded-lg">
// //                   <p className="whitespace-pre-line">{detailView?.message}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-xl font-semibold mb-3">Targeting Rules</h3>
// //                 <div className="bg-gray-600 text-white p-4 rounded-lg">
// //                   {detailView?.rules?.map((rule, index) => (
// //                     <div key={index} className="mb-2 last:mb-0">
// //                       {index > 0 && (
// //                         <span className="text-gray-400 font-medium mr-2">
// //                           {rule.connector || "AND"}
// //                         </span>
// //                       )}
// //                       <span className="font-medium">{rule.field}</span>
// //                       <span className="mx-2">{rule.operator}</span>
// //                       <span className="font-medium">{rule.value}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
// //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                   <div className="bg-gray-800 text-white p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Open Rate</h4>
// //                     <p className="text-xl font-bold">42%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Click Rate</h4>
// //                     <p className="text-xl font-bold">12%</p>
// //                   </div>
// //                   <div className="bg-gray-800 text-white p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Conversion</h4>
// //                     <p className="text-xl font-bold">5.2%</p>
// //                   </div>
// //                   <div className="bg-gray-50 p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-500">Revenue</h4>
// //                     <p className="text-xl font-bold">$8,450</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Campaigns;
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   FiPlus, 
// //   FiTrash2, 
// //   FiCheck, 
// //   FiSend, 
// //   FiClock, 
// //   FiSearch, 
// //   FiEdit2, 
// //   FiBarChart2,
// //   FiRefreshCw,
// //   FiArrowLeft,
// //   FiSave,
// //   FiEye
// // } from 'react-icons/fi';

// // // RuleBuilder Component
// // const RuleBuilder = ({ rules, setRules, onPreview }) => {
// //   const addRule = () => {
// //     setRules([...rules, { 
// //       id: Date.now(), 
// //       field: "spend", 
// //       operator: ">", 
// //       value: "", 
// //       connector: "AND" 
// //     }]);
// //   };

// //   const removeRule = (id) => {
// //     setRules(rules.filter(rule => rule.id !== id));
// //   };

// //   const updateRule = (id, key, value) => {
// //     setRules(rules.map(rule => 
// //       rule.id === id ? { ...rule, [key]: value } : rule
// //     ));
// //   };

// //   const handlePreview = () => {
// //     const size = Math.floor(Math.random() * 1000) + 100;
// //     onPreview(size);
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 mb-6 shadow-sm">
// //       <h3 className="text-2xl text-white font-bold mb-4">Audience Segment Rules</h3>
// //       {rules.map((rule, index) => (
// //         <div key={rule.id} className="flex items-center gap-2 mb-3">
// //           {index > 0 && (
// //             <select
// //               className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //               value={rule.connector}
// //               onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
// //             >
// //               <option value="AND">AND</option>
// //               <option value="OR">OR</option>
// //             </select>
// //           )}
// //           <select
// //             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //             value={rule.field}
// //             onChange={(e) => updateRule(rule.id, "field", e.target.value)}
// //           >
// //             <option value="spend">Total Spend</option>
// //             <option value="visits">Store Visits</option>
// //             <option value="inactiveDays">Inactive Days</option>
// //             <option value="lastPurchase">Last Purchase</option>
// //             <option value="emailOpens">Email Opens</option>
// //           </select>
// //           <select
// //             className=" rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700  border-gray-200 transition hover:shadow-lg hover:shadow-indigo-500/10"
// //             value={rule.operator}
// //             onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
// //           >
// //             <option value=">">&gt;</option>
// //             <option value="<">&lt;</option>
// //             <option value="==">=</option>
// //             <option value="!=">≠</option>
// //             <option value=">=">≥</option>
// //             <option value="<=">≤</option>
// //           </select>
// //           <input
// //             type="number"
// //             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 w-24"
// //             value={rule.value}
// //             onChange={(e) => updateRule(rule.id, "value", e.target.value)}
// //           />
// //           <button
// //             onClick={() => removeRule(rule.id)}
// //             className="p-2 text-red-500 hover:text-red-700"
// //           >
// //             <FiTrash2 />
// //           </button>
// //         </div>
// //       ))}
// //       <button
// //         onClick={addRule}
// //         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
// //       >
// //         <FiPlus /> Add Rule
// //       </button>
// //       <div className="flex items-center gap-4 mt-4">
// //         <button
// //           onClick={handlePreview}
// //           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
// //         >
// //           <FiCheck /> Preview Audience
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // CampaignCard Component
// // const CampaignCard = ({ campaign, onViewDetails, onEdit, onDelete }) => {
// //   const statusColors = {
// //     Active: "bg-green-100 text-green-700 border-green-300",
// //     Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
// //     Completed: "bg-blue-100 text-blue-700 border-blue-300",
// //     Draft: "bg-gray-100 text-gray-700 border-gray-300"
// //   };

// //   return (
// //     <div className="relative rounded-xl shadow-md bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-700 overflow-hidden flex flex-col hover:shadow-xl transition-shadow text-white">
// //       {/* Info */}
// //       <div className="flex-1 flex flex-col p-5">
// //         <div className="flex items-center gap-2 mb-2">
// //           <h3 className="text-xl font-bold text-purple-300">{campaign.name}</h3>
// //           <span className="text-xs text-gray-200">{campaign.id}</span>
// //         </div>
        
// //         <div className="flex items-center gap-2 text-gray-200 text-sm mb-4">
// //           <span>{campaign.date}</span>
// //           <span className={`px-2 py-1 rounded-full text-xs ${statusColors[campaign.status]}`}>
// //             {campaign.status}
// //           </span>
// //         </div>
        
// //         <div className="grid grid-cols-2 gap-3 mb-4">
// //           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Audience</div>
// //             <div className="font-semibold text-purple-600">{campaign.audienceSize}</div>
// //           </div>
// //           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Sent</div>
// //             <div className="font-semibold text-green-600">{campaign.sent}</div>
// //           </div>
// //           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Failed</div>
// //             <div className="font-semibold text-red-600">{campaign.failed}</div>
// //           </div>
// //           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
// //             <div className="text-xs text-gray-200">Open Rate</div>
// //             <div className="font-semibold text-blue-600">
// //               {Math.floor(Math.random() * 30) + 20}%
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="flex items-center justify-between mt-auto">
// //           <button 
// //             onClick={() => onViewDetails(campaign)}
// //             className="flex items-center gap-1 px-3 py-2 bg-gradient-to-br from-gray-400 to-gray-300 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100"
// //           >
// //             <FiEye /> View Details
// //           </button>
// //           <div className="flex gap-2">
// //             <button 
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onEdit(campaign);
// //               }}
// //               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100"
// //             >
// //               <FiEdit2 />
// //             </button>
// //             <button 
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onDelete(campaign.id);
// //               }}
// //               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 text-red-700 font-medium text-sm hover:bg-red-100"
// //             >
// //               <FiTrash2 />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Campaigns Component
// // const Campaigns = () => {
// //   const [view, setView] = useState("list");
// //   const [detailView, setDetailView] = useState(null);
// //   const [campaigns, setCampaigns] = useState([]);
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [rules, setRules] = useState([{ 
// //     id: Date.now(), 
// //     field: "spend", 
// //     operator: ">", 
// //     value: 100, 
// //     connector: "AND" 
// //   }]);
// //   const [audienceSize, setAudienceSize] = useState(null);
// //   const [search, setSearch] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [selectedStatus, setSelectedStatus] = useState("all");
// //   const [editingId, setEditingId] = useState(null);

// //   // Load campaigns from localStorage or initialize with sample data
// //   useEffect(() => {
// //     const savedCampaigns = localStorage.getItem('campaigns');
// //     if (savedCampaigns) {
// //       setCampaigns(JSON.parse(savedCampaigns));
// //     } else {
// //       const sampleCampaigns = [
// //         {
// //           id: "CMP-1001",
// //           name: "Summer Sale 2025",
// //           status: "Active",
// //           audienceSize: 450,
// //           sent: 405,
// //           failed: 45,
// //           date: "2025-05-01",
// //           message: "Hi {name}, enjoy 20% off on summer collection!",
// //           rules: [{ field: "spend", operator: ">", value: 100 }]
// //         },
// //         {
// //           id: "CMP-1002",
// //           name: "Diwali Bonanza",
// //           status: "Scheduled",
// //           audienceSize: 320,
// //           sent: 0,
// //           failed: 0,
// //           date: "2025-10-15",
// //           message: "Diwali special: Buy 1 get 1 free on selected items!",
// //           rules: [{ field: "visits", operator: ">", value: 3 }]
// //         },
// //         {
// //           id: "CMP-1003",
// //           name: "New Arrivals",
// //           status: "Completed",
// //           audienceSize: 780,
// //           sent: 702,
// //           failed: 78,
// //           date: "2025-03-10",
// //           message: "Check out our new collection with 15% discount!",
// //           rules: [{ field: "lastPurchase", operator: "<", value: 30 }]
// //         },
// //         {
// //           id: "CMP-1004",
// //           name: "Loyalty Rewards",
// //           status: "Draft",
// //           audienceSize: 0,
// //           sent: 0,
// //           failed: 0,
// //           date: "2025-06-20",
// //           message: "Exclusive rewards for our loyal customers!",
// //           rules: [{ field: "spend", operator: ">", value: 500 }]
// //         }
// //       ];
// //       setCampaigns(sampleCampaigns);
// //       localStorage.setItem('campaigns', JSON.stringify(sampleCampaigns));
// //     }
// //   }, []);

// //   // Save campaigns to localStorage whenever they change
// //   useEffect(() => {
// //     if (campaigns.length > 0) {
// //       localStorage.setItem('campaigns', JSON.stringify(campaigns));
// //     }
// //   }, [campaigns]);

// //   const handleSave = () => {
// //     if (!name || !message || !audienceSize) return;

// //     setLoading(true);
// //     setTimeout(() => {
// //       if (editingId) {
// //         // Update existing campaign
// //         const updatedCampaigns = campaigns.map(campaign => 
// //           campaign.id === editingId ? {
// //             ...campaign,
// //             name,
// //             message,
// //             rules,
// //             audienceSize,
// //             sent: Math.floor(audienceSize * 0.9),
// //             failed: audienceSize - Math.floor(audienceSize * 0.9),
// //             date: new Date().toISOString().split('T')[0],
// //             status: "Active"
// //           } : campaign
// //         );
// //         setCampaigns(updatedCampaigns);
// //         localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //         setEditingId(null);
// //       } else {
// //         // Create new campaign
// //         const newCampaign = {
// //           id: `CMP-${Date.now()}`,
// //           name,
// //           message,
// //           rules,
// //           audienceSize,
// //           sent: Math.floor(audienceSize * 0.9),
// //           failed: audienceSize - Math.floor(audienceSize * 0.9),
// //           date: new Date().toISOString().split('T')[0],
// //           status: "Active"
// //         };
// //         const updatedCampaigns = [newCampaign, ...campaigns];
// //         setCampaigns(updatedCampaigns);
// //         localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //       }
// //       setLoading(false);
// //       setView("list");
// //       resetForm();
// //     }, 800);
// //   };

// //   const resetForm = () => {
// //     setName("");
// //     setMessage("");
// //     setAudienceSize(null);
// //     setRules([{ id: Date.now(), field: "spend", operator: ">", value: 100, connector: "AND" }]);
// //     setEditingId(null);
// //   };

// //   const handleEdit = (campaign) => {
// //     setView("create");
// //     setName(campaign.name);
// //     setMessage(campaign.message);
// //     setRules(campaign.rules);
// //     setAudienceSize(campaign.audienceSize);
// //     setEditingId(campaign.id);
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm("Are you sure you want to delete this campaign?")) {
// //       const updatedCampaigns = campaigns.filter(campaign => campaign.id !== id);
// //       setCampaigns(updatedCampaigns);
// //       localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
// //     }
// //   };

// //   const handleViewDetails = (campaign) => {
// //     setDetailView(campaign);
// //     setView("detail");
// //   };

// //   const handleEditFromDetails = () => {
// //     if (detailView) {
// //       handleEdit(detailView);
// //       setView("create");
// //     }
// //   };

// //   const filteredCampaigns = campaigns.filter(c => {
// //     const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
// //                          c.id.toLowerCase().includes(search.toLowerCase());
// //     const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
// //     return matchesSearch && matchesStatus;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 mt-20">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
// //           {view === "list" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <div className="bg-indigo-500 p-3 rounded-full shadow">
// //                   <FiSend size={24} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">Campaigns</h2>
// //                   <p className="text-gray-400">
// //                     {filteredCampaigns.length} campaigns found
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => {
// //                     resetForm();
// //                     setView("create");
// //                   }}
// //                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition"
// //                 >
// //                   <FiPlus /> New Campaign
// //                 </button>
// //               </div>
// //             </>
// //           ) : view === "create" ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => {
// //                     resetForm();
// //                     setView("list");
// //                   }}
// //                   className="p-2 rounded-full flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 ro border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">
// //                     {editingId ? "Edit Campaign" : "Create New Campaign"}
// //                   </h2>
// //                   <p className="pl-2 text-white">
// //                     {editingId ? "Update your campaign details" : "Define your audience and message"}
// //                   </p>
// //                 </div>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <button 
// //                   onClick={() => setView("list")}
// //                   className="p-2 rounded-full text-white hover:bg-gray-100 hover:text-gray-900"
// //                 >
// //                   <FiArrowLeft size={20} />
// //                 </button>
// //                 <div>
// //                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">{detailView?.name}</h2>
// //                   <p className="text-gray-400">
// //                     Campaign ID: {detailView?.id}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={handleEditFromDetails}
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500  text-white font-medium shadow hover:bg-indigo-700"
// //                 >
// //                   <FiEdit2 /> Edit Campaign
// //                 </button>
// //                 <button
// //                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700"
// //                 >
// //                   <FiSend /> Resend
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* Main Content */}
// //         {view === "list" ? (
// //           <>
// //             {/* Filters */}
// //             <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
// //               <div className="relative flex-1">
// //                 <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search campaigns..."
// //                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <select
// //                   className="rounded-lg px-3 py-2 bg-gray-800 text-white border-bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   value={selectedStatus}
// //                   onChange={(e) => setSelectedStatus(e.target.value)}
// //                 >
// //                   <option value="all">All Status</option>
// //                   <option value="Active">Active</option>
// //                   <option value="Scheduled">Scheduled</option>
// //                   <option value="Completed">Completed</option>
// //                   <option value="Draft">Draft</option>
// //                 </select>
// //                 <button
// //                   onClick={() => window.location.reload()}
// //                   className="p-2 rounded-lg  border-bg-gray-900 bg-gray-800 hover:bg-gray-700  text-white"
// //                   title="Refresh"
// //                 >
// //                   <FiRefreshCw />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Campaigns Grid */}
// //             {loading ? (
// //               <div className="text-center py-16 text-white">
// //                 Loading campaigns...
// //               </div>
// //             ) : filteredCampaigns.length === 0 ? (
// //               <div className="bg-white rounded-xl p-8 text-center">
// //                 <div className="text-5xl mb-4">📢</div>
// //                 <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
// //                 <p className="text-gray-500 mb-4">
// //                   {search ? "Try a different search term" : "Create your first campaign"}
// //                 </p>
// //                 <button
// //                   onClick={() => {
// //                     resetForm();
// //                     setView("create");
// //                   }}
// //                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //                 >
// //                   Create Campaign
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //                 {filteredCampaigns.map((campaign) => (
// //                   <CampaignCard 
// //                     key={campaign.id} 
// //                     campaign={campaign} 
// //                     onViewDetails={handleViewDetails}
// //                     onEdit={handleEdit}
// //                     onDelete={handleDelete}
// //                   />
// //                 ))}
// //               </div>
// //             )}
// //           </>
// //         ) : view === "create" ? (
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 shadow-sm">
// //             <div className="mb-6">
// //               <label className="block text-white text-xl mb-2">Campaign Name</label>
// //               <input
// //                 type="text"
// //                 className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="e.g. Summer Sale 2025 text-white"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
            
// //             <div className="mb-6">
// //               <label className="block text-white text-xl mb-2">Message Template</label>
// //               <textarea
// //                 className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                 placeholder="Hi {name}, here's your exclusive offer..."
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //               />
// //               <p className="text-sm text-red-500 mt-1">
// //                 Use {"{name}"} to personalize the message
// //               </p>
// //             </div>
            
// //             <RuleBuilder
// //               rules={rules}
// //               setRules={setRules}
// //               onPreview={setAudienceSize}
// //             />
            
// //             {audienceSize !== null && (
// //               <div className="mb-6 p-4 bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-lg">
// //                 <div className="font-medium text-white">
// //                   Estimated Audience Size: <span className="font-bold">{audienceSize}</span> customers
// //                 </div>
// //               </div>
// //             )}
            
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 onClick={() => {
// //                   resetForm();
// //                   setView("list");
// //                 }}
// //                 className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleSave}
// //                 disabled={!name || !message || !audienceSize || loading}
// //                 className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
// //                   !name || !message || !audienceSize || loading
// //                     ? "flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white cursor-not-allowed"
// //                     : "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition text-white"
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     {editingId ? "Updating..." : "Creating..."}
// //                   </>
// //                 ) : (
// //                   <>
// //                     {editingId ? <FiSave /> : <FiSend />} 
// //                     {editingId ? "Update Campaign" : "Save & Send Campaign"}
// //                   </>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-sm overflow-hidden">
// //             {/* Campaign Header */}
// //             <div className="p-6 bg-gray-800">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-white">{detailView?.name}</h2>
// //                   <p className="opacity-80 text-gray-300">ID: {detailView?.id}</p>
// //                 </div>
// //                 <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
// //                   detailView?.status === "Active" ? "bg-green-100 text-green-800" :
// //                   detailView?.status === "Scheduled" ? "bg-yellow-100 text-yellow-800" :
// //                   detailView?.status === "Completed" ? "bg-blue-100 text-blue-800" :
// //                   "bg-gray-100 text-gray-800"
// //                 }`}>
// //                   {detailView?.status}
// //                 </span>
// //               </div>
// //             </div>
            
// //             {/* Campaign Details */}
// //             <div className="p-6">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //                 <div className="bg-gray-800 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-white mb-1">Audience Size</h3>
// //                   <p className="text-2xl font-bold text-blue-500">{detailView?.audienceSize}</p>
// //                 </div>
// //                 <div className="bg-gray-800 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-white mb-1">Messages Sent</h3>
// //                   <p className="text-2xl font-bold text-green-600">{detailView?.sent}</p>
// //                 </div>
// //                 <div className="bg-gray-800 p-4 rounded-lg">
// //                   <h3 className="text-sm font-medium text-white mb-1">Messages Failed</h3>
// //                   <p className="text-2xl font-bold text-red-600">{detailView?.failed}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-xl font-semibold mb-3 text-white">Message Content</h3>
// //                 <div className="bg-gray-800 text-white p-4 rounded-lg">
// //                   <p className="whitespace-pre-line">{detailView?.message}</p>
// //                 </div>
// //               </div>
              
// //               <div className="mb-6">
// //                 <h3 className="text-xl font-semibold mb-3 text-white">Targeting Rules</h3>
// //                 <div className="bg-gray-800 text-white p-4 rounded-lg">
// //                   {detailView?.rules?.map((rule, index) => (
// //                     <div key={index} className="mb-2 last:mb-0">
// //                       {index > 0 && (
// //                         <span className="text-gray-400 font-medium mr-2">
// //                           {rule.connector || "AND"}
// //                         </span>
// //                       )}
// //                       <span className="font-medium">{rule.field}</span>
// //                       <span className="mx-2">{rule.operator}</span>
// //                       <span className="font-medium">{rule.value}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <h3 className="text-lg font-semibold mb-3 text-white">Performance Metrics</h3>
// //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                   <div className="bg-gray-800 text-white p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-400">Open Rate</h4>
// //                     <p className="text-xl font-bold">42%</p>
// //                   </div>
// //                   <div className="bg-gray-800 text-white p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-400">Click Rate</h4>
// //                     <p className="text-xl font-bold">12%</p>
// //                   </div>
// //                   <div className="bg-gray-800 text-white p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-400">Conversion</h4>
// //                     <p className="text-xl font-bold">5.2%</p>
// //                   </div>
// //                   <div className="bg-gray-800 text-white p-3 rounded-lg">
// //                     <h4 className="text-xs text-gray-400">Revenue</h4>
// //                     <p className="text-xl font-bold">$8,450</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Campaigns;

// import React, { useState, useEffect } from 'react';
// import { 
//   FiPlus, 
//   FiTrash2, 
//   FiCheck, 
//   FiSend, 
//   FiClock, 
//   FiSearch, 
//   FiEdit2, 
//   FiBarChart2,
//   FiRefreshCw,
//   FiArrowLeft,
//   FiSave,
//   FiEye
// } from 'react-icons/fi';

// // RuleBuilder Component
// const RuleBuilder = ({ rules, setRules, onPreview }) => {
//   const addRule = () => {
//     setRules([...rules, { 
//       id: Date.now(), 
//       field: "spend", 
//       operator: ">", 
//       value: "", 
//       connector: "AND" 
//     }]);
//   };

//   const removeRule = (id) => {
//     setRules(rules.filter(rule => rule.id !== id));
//   };

//   const updateRule = (id, key, value) => {
//     setRules(rules.map(rule => 
//       rule.id === id ? { ...rule, [key]: value } : rule
//     ));
//   };

//   const handlePreview = () => {
//     const size = Math.floor(Math.random() * 1000) + 100;
//     onPreview(size);
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 mb-6 shadow-sm">
//       <h3 className="text-2xl text-white font-bold mb-4">Audience Segment Rules</h3>
//       {rules.map((rule, index) => (
//         <div key={rule.id} className="flex items-center gap-2 mb-3">
//           {index > 0 && (
//             <select
//               className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
//               value={rule.connector}
//               onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
//             >
//               <option value="AND">AND</option>
//               <option value="OR">OR</option>
//             </select>
//           )}
//           <select
//             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
//             value={rule.field}
//             onChange={(e) => updateRule(rule.id, "field", e.target.value)}
//           >
//             <option value="spend">Total Spend</option>
//             <option value="visits">Store Visits</option>
//             <option value="inactiveDays">Inactive Days</option>
//             <option value="lastPurchase">Last Purchase</option>
//             <option value="emailOpens">Email Opens</option>
//           </select>
//           <select
//             className=" rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700  border-gray-200 transition hover:shadow-lg hover:shadow-indigo-500/10"
//             value={rule.operator}
//             onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
//           >
//             <option value=">">&gt;</option>
//             <option value="<">&lt;</option>
//             <option value="==">=</option>
//             <option value="!=">≠</option>
//             <option value=">=">≥</option>
//             <option value="<=">≤</option>
//           </select>
//           <input
//             type="number"
//             className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 w-24"
//             value={rule.value}
//             onChange={(e) => updateRule(rule.id, "value", e.target.value)}
//           />
//           <button
//             onClick={() => removeRule(rule.id)}
//             className="p-2 text-red-500 hover:text-red-700"
//           >
//             <FiTrash2 />
//           </button>
//         </div>
//       ))}
//       <button
//         onClick={addRule}
//         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
//       >
//         <FiPlus /> Add Rule
//       </button>
//       <div className="flex items-center gap-4 mt-4">
//         <button
//           onClick={handlePreview}
//           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
//         >
//           <FiCheck /> Preview Audience
//         </button>
//       </div>
//     </div>
//   );
// };

// // CampaignCard Component
// const CampaignCard = ({ campaign, onViewDetails, onEdit, onDelete }) => {
//   const statusColors = {
//     Active: "bg-green-100 text-green-700 border-green-300",
//     Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
//     Completed: "bg-blue-100 text-blue-700 border-blue-300",
//     Draft: "bg-gray-100 text-gray-700 border-gray-300"
//   };

//   return (
//     <div className="relative rounded-xl shadow-md bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-700 overflow-hidden flex flex-col hover:shadow-xl transition-shadow text-white">
//       {/* Info */}
//       <div className="flex-1 flex flex-col p-5">
//         <div className="flex items-center gap-2 mb-2">
//           <h3 className="text-xl font-bold text-purple-300">{campaign.name}</h3>
//           <span className="text-xs text-gray-200">{campaign.id}</span>
//         </div>
        
//         <div className="flex items-center gap-2 text-gray-200 text-sm mb-4">
//           <span>{campaign.date}</span>
//           <span className={`px-2 py-1 rounded-full text-xs ${statusColors[campaign.status]}`}>
//             {campaign.status}
//           </span>
//         </div>
        
//         <div className="grid grid-cols-2 gap-3 mb-4">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
//             <div className="text-xs text-gray-200">Audience</div>
//             <div className="font-semibold text-purple-600">{campaign.audienceSize}</div>
//           </div>
//           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
//             <div className="text-xs text-gray-200">Sent</div>
//             <div className="font-semibold text-green-600">{campaign.sent}</div>
//           </div>
//           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
//             <div className="text-xs text-gray-200">Failed</div>
//             <div className="font-semibold text-red-600">{campaign.failed}</div>
//           </div>
//           <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg">
//             <div className="text-xs text-gray-200">Open Rate</div>
//             <div className="font-semibold text-blue-600">
//               {Math.floor(Math.random() * 30) + 20}%
//             </div>
//           </div>
//         </div>
        
//         <div className="flex items-center justify-between mt-auto">
//           <button 
//             onClick={() => onViewDetails(campaign)}
//             className="flex items-center gap-1 px-3 py-2 bg-gradient-to-br from-gray-400 to-gray-300 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100"
//           >
//             <FiEye /> View Details
//           </button>
//           <div className="flex gap-2">
//             <button 
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onEdit(campaign);
//               }}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100"
//             >
//               <FiEdit2 />
//             </button>
//             <button 
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onDelete(campaign.id);
//               }}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 text-red-700 font-medium text-sm hover:bg-red-100"
//             >
//               <FiTrash2 />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Campaigns Component
// const Campaigns = () => {
//   const [view, setView] = useState("list");
//   const [detailView, setDetailView] = useState(null);
//   const [campaigns, setCampaigns] = useState([]);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [rules, setRules] = useState([{ 
//     id: Date.now(), 
//     field: "spend", 
//     operator: ">", 
//     value: 100, 
//     connector: "AND" 
//   }]);
//   const [audienceSize, setAudienceSize] = useState(null);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const [editingId, setEditingId] = useState(null);

//   // Fixed sample data that will always be included
//   const fixedSampleCampaigns = [
//     {
//       id: "CMP-FIXED-1001",
//       name: "Welcome Campaign",
//       status: "Active",
//       audienceSize: 1200,
//       sent: 1080,
//       failed: 120,
//       date: "2025-01-15",
//       message: "Welcome to our service! Enjoy your 10% discount.",
//       rules: [{ field: "lastPurchase", operator: "<", value: 1 }],
//       isFixed: true // Mark as fixed so it can't be deleted
//     },
//     {
//       id: "CMP-FIXED-1002",
//       name: "Anniversary Special",
//       status: "Scheduled",
//       audienceSize: 850,
//       sent: 0,
//       failed: 0,
//       date: "2025-12-01",
//       message: "Happy anniversary! Here's a special gift for you.",
//       rules: [{ field: "inactiveDays", operator: "<", value: 365 }],
//       isFixed: true
//     }
//   ];

//   // Load campaigns from localStorage or initialize with sample data
//   useEffect(() => {
//     const savedCampaigns = localStorage.getItem('campaigns');
//     if (savedCampaigns) {
//       // Combine fixed campaigns with saved user campaigns (user campaigns first)
//       const userCampaigns = JSON.parse(savedCampaigns);
//       setCampaigns([...userCampaigns, ...fixedSampleCampaigns]);
//     } else {
//       const sampleCampaigns = [
//         {
//           id: "CMP-1001",
//           name: "Summer Sale 2025",
//           status: "Active",
//           audienceSize: 450,
//           sent: 405,
//           failed: 45,
//           date: "2025-05-01",
//           message: "Hi {name}, enjoy 20% off on summer collection!",
//           rules: [{ field: "spend", operator: ">", value: 100 }]
//         },
//         {
//           id: "CMP-1002",
//           name: "Diwali Bonanza",
//           status: "Scheduled",
//           audienceSize: 320,
//           sent: 0,
//           failed: 0,
//           date: "2025-10-15",
//           message: "Diwali special: Buy 1 get 1 free on selected items!",
//           rules: [{ field: "visits", operator: ">", value: 3 }]
//         },
//         {
//           id: "CMP-1003",
//           name: "New Arrivals",
//           status: "Completed",
//           audienceSize: 780,
//           sent: 702,
//           failed: 78,
//           date: "2025-03-10",
//           message: "Check out our new collection with 15% discount!",
//           rules: [{ field: "lastPurchase", operator: "<", value: 30 }]
//         },
//         {
//           id: "CMP-1004",
//           name: "Loyalty Rewards",
//           status: "Draft",
//           audienceSize: 0,
//           sent: 0,
//           failed: 0,
//           date: "2025-06-20",
//           message: "Exclusive rewards for our loyal customers!",
//           rules: [{ field: "spend", operator: ">", value: 500 }]
//         }
//       ];
//       // Combine sample campaigns with fixed campaigns (sample first)
//       setCampaigns([...sampleCampaigns, ...fixedSampleCampaigns]);
//       localStorage.setItem('campaigns', JSON.stringify(sampleCampaigns));
//     }
//   }, []);

//   // Save user campaigns to localStorage whenever they change
//   useEffect(() => {
//     if (campaigns.length > 0) {
//       // Only save non-fixed campaigns to localStorage
//       const userCampaigns = campaigns.filter(c => !c.isFixed);
//       localStorage.setItem('campaigns', JSON.stringify(userCampaigns));
//     }
//   }, [campaigns]);

//   const handleSave = () => {
//     if (!name || !message || !audienceSize) return;

//     setLoading(true);
//     setTimeout(() => {
//       if (editingId) {
//         // Update existing campaign
//         const updatedCampaigns = campaigns.map(campaign => 
//           campaign.id === editingId ? {
//             ...campaign,
//             name,
//             message,
//             rules,
//             audienceSize,
//             sent: Math.floor(audienceSize * 0.9),
//             failed: audienceSize - Math.floor(audienceSize * 0.9),
//             date: new Date().toISOString().split('T')[0],
//             status: "Active"
//           } : campaign
//         );
//         setCampaigns(updatedCampaigns);
//         setEditingId(null);
//       } else {
//         // Create new campaign - add to the beginning of the array
//         const newCampaign = {
//           id: `CMP-${Date.now()}`,
//           name,
//           message,
//           rules,
//           audienceSize,
//           sent: Math.floor(audienceSize * 0.9),
//           failed: audienceSize - Math.floor(audienceSize * 0.9),
//           date: new Date().toISOString().split('T')[0],
//           status: "Active"
//         };
//         // Add new campaign at the beginning (before other user campaigns but after fixed ones)
//         const nonFixedCampaigns = campaigns.filter(c => !c.isFixed);
//         const fixedCampaigns = campaigns.filter(c => c.isFixed);
//         const updatedCampaigns = [newCampaign, ...nonFixedCampaigns, ...fixedCampaigns];
//         setCampaigns(updatedCampaigns);
//       }
//       setLoading(false);
//       setView("list");
//       resetForm();
//     }, 800);
//   };

//   const resetForm = () => {
//     setName("");
//     setMessage("");
//     setAudienceSize(null);
//     setRules([{ id: Date.now(), field: "spend", operator: ">", value: 100, connector: "AND" }]);
//     setEditingId(null);
//   };

//   const handleEdit = (campaign) => {
//     if (campaign.isFixed) return; // Prevent editing fixed campaigns
    
//     setView("create");
//     setName(campaign.name);
//     setMessage(campaign.message);
//     setRules(campaign.rules);
//     setAudienceSize(campaign.audienceSize);
//     setEditingId(campaign.id);
//   };

//   const handleDelete = (id) => {
//     const campaignToDelete = campaigns.find(c => c.id === id);
//     if (campaignToDelete?.isFixed) return; // Prevent deleting fixed campaigns
    
//     if (window.confirm("Are you sure you want to delete this campaign?")) {
//       const updatedCampaigns = campaigns.filter(campaign => campaign.id !== id);
//       setCampaigns(updatedCampaigns);
//     }
//   };

//   const handleViewDetails = (campaign) => {
//     setDetailView(campaign);
//     setView("detail");
//   };

//   const handleEditFromDetails = () => {
//     if (detailView && !detailView.isFixed) {
//       handleEdit(detailView);
//       setView("create");
//     }
//   };

//   const filteredCampaigns = campaigns.filter(c => {
//     const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
//                          c.id.toLowerCase().includes(search.toLowerCase());
//     const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 mt-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//           {view === "list" ? (
//             <>
//               <div className="flex items-center gap-4">
//                 <div className="bg-indigo-500 p-3 rounded-full shadow">
//                   <FiSend size={24} className="text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">Campaigns</h2>
//                   <p className="text-gray-400">
//                     {filteredCampaigns.length} campaigns found
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => {
//                     resetForm();
//                     setView("create");
//                   }}
//                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition"
//                 >
//                   <FiPlus /> New Campaign
//                 </button>
//               </div>
//             </>
//           ) : view === "create" ? (
//             <>
//               <div className="flex items-center gap-4">
//                 <button 
//                   onClick={() => {
//                     resetForm();
//                     setView("list");
//                   }}
//                   className="p-2 rounded-full flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 ro border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
//                 >
//                   <FiArrowLeft size={20} />
//                 </button>
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2">
//                     {editingId ? "Edit Campaign" : "Create New Campaign"}
//                   </h2>
//                   <p className="pl-2 text-white">
//                     {editingId ? "Update your campaign details" : "Define your audience and message"}
//                   </p>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="flex items-center gap-4">
//                 <button 
//                   onClick={() => setView("list")}
//                   className="p-2 rounded-full text-white hover:bg-gray-100 hover:text-gray-900"
//                 >
//                   <FiArrowLeft size={20} />
//                 </button>
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">{detailView?.name}</h2>
//                   <p className="text-gray-400">
//                     Campaign ID: {detailView?.id}
//                     {detailView?.isFixed && <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">Fixed Campaign</span>}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 {!detailView?.isFixed && (
//                   <button
//                     onClick={handleEditFromDetails}
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500  text-white font-medium shadow hover:bg-indigo-700"
//                   >
//                     <FiEdit2 /> Edit Campaign
//                   </button>
//                 )}
//                 <button
//                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700"
//                 >
//                   <FiSend /> Resend
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Main Content */}
//         {view === "list" ? (
//           <>
//             {/* Filters */}
//             <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
//               <div className="relative flex-1">
//                 <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search campaigns..."
//                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//               <div className="flex items-center gap-3">
//                 <select
//                   className="rounded-lg px-3 py-2 bg-gray-800 text-white border-bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   value={selectedStatus}
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                 >
//                   <option value="all">All Status</option>
//                   <option value="Active">Active</option>
//                   <option value="Scheduled">Scheduled</option>
//                   <option value="Completed">Completed</option>
//                   <option value="Draft">Draft</option>
//                 </select>
//                 <button
//                   onClick={() => window.location.reload()}
//                   className="p-2 rounded-lg  border-bg-gray-900 bg-gray-800 hover:bg-gray-700  text-white"
//                   title="Refresh"
//                 >
//                   <FiRefreshCw />
//                 </button>
//               </div>
//             </div>

//             {/* Campaigns Grid */}
//             {loading ? (
//               <div className="text-center py-16 text-white">
//                 Loading campaigns...
//               </div>
//             ) : filteredCampaigns.length === 0 ? (
//               <div className="bg-white rounded-xl p-8 text-center">
//                 <div className="text-5xl mb-4">📢</div>
//                 <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
//                 <p className="text-gray-500 mb-4">
//                   {search ? "Try a different search term" : "Create your first campaign"}
//                 </p>
//                 <button
//                   onClick={() => {
//                     resetForm();
//                     setView("create");
//                   }}
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//                 >
//                   Create Campaign
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredCampaigns.map((campaign) => (
//                   <CampaignCard 
//                     key={campaign.id} 
//                     campaign={campaign} 
//                     onViewDetails={handleViewDetails}
//                     onEdit={handleEdit}
//                     onDelete={handleDelete}
//                   />
//                 ))}
//               </div>
//             )}
//           </>
//         ) : view === "create" ? (
//           <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 shadow-sm">
//             <div className="mb-6">
//               <label className="block text-white text-xl mb-2">Campaign Name</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 placeholder="e.g. Summer Sale 2025 text-white"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
            
//             <div className="mb-6">
//               <label className="block text-white text-xl mb-2">Message Template</label>
//               <textarea
//                 className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 placeholder="Hi {name}, here's your exclusive offer..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <p className="text-sm text-red-500 mt-1">
//                 Use {"{name}"} to personalize the message
//               </p>
//             </div>
            
//             <RuleBuilder
//               rules={rules}
//               setRules={setRules}
//               onPreview={setAudienceSize}
//             />
            
//             {audienceSize !== null && (
//               <div className="mb-6 p-4 bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-lg">
//                 <div className="font-medium text-white">
//                   Estimated Audience Size: <span className="font-bold">{audienceSize}</span> customers
//                 </div>
//               </div>
//             )}
            
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => {
//                   resetForm();
//                   setView("list");
//                 }}
//                 className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 disabled={!name || !message || !audienceSize || loading}
//                 className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
//                   !name || !message || !audienceSize || loading
//                     ? "flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white cursor-not-allowed"
//                     : "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition text-white"
//                 }`}
//               >
//                 {loading ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     {editingId ? "Updating..." : "Creating..."}
//                   </>
//                 ) : (
//                   <>
//                     {editingId ? <FiSave /> : <FiSend />} 
//                     {editingId ? "Update Campaign" : "Save & Send Campaign"}
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-sm overflow-hidden">
//             {/* Campaign Header */}
//             <div className="p-6 bg-gray-800">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="text-2xl font-bold text-white">{detailView?.name}</h2>
//                   <p className="opacity-80 text-gray-300">ID: {detailView?.id}</p>
//                 </div>
//                 <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                   detailView?.status === "Active" ? "bg-green-100 text-green-800" :
//                   detailView?.status === "Scheduled" ? "bg-yellow-100 text-yellow-800" :
//                   detailView?.status === "Completed" ? "bg-blue-100 text-blue-800" :
//                   "bg-gray-100 text-gray-800"
//                 }`}>
//                   {detailView?.status}
//                 </span>
//               </div>
//             </div>
            
//             {/* Campaign Details */}
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-gray-800 p-4 rounded-lg">
//                   <h3 className="text-sm font-medium text-white mb-1">Audience Size</h3>
//                   <p className="text-2xl font-bold text-blue-500">{detailView?.audienceSize}</p>
//                 </div>
//                 <div className="bg-gray-800 p-4 rounded-lg">
//                   <h3 className="text-sm font-medium text-white mb-1">Messages Sent</h3>
//                   <p className="text-2xl font-bold text-green-600">{detailView?.sent}</p>
//                 </div>
//                 <div className="bg-gray-800 p-4 rounded-lg">
//                   <h3 className="text-sm font-medium text-white mb-1">Messages Failed</h3>
//                   <p className="text-2xl font-bold text-red-600">{detailView?.failed}</p>
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-3 text-white">Message Content</h3>
//                 <div className="bg-gray-800 text-white p-4 rounded-lg">
//                   <p className="whitespace-pre-line">{detailView?.message}</p>
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-3 text-white">Targeting Rules</h3>
//                 <div className="bg-gray-800 text-white p-4 rounded-lg">
//                   {detailView?.rules?.map((rule, index) => (
//                     <div key={index} className="mb-2 last:mb-0">
//                       {index > 0 && (
//                         <span className="text-gray-400 font-medium mr-2">
//                           {rule.connector || "AND"}
//                         </span>
//                       )}
//                       <span className="font-medium">{rule.field}</span>
//                       <span className="mx-2">{rule.operator}</span>
//                       <span className="font-medium">{rule.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold mb-3 text-white">Performance Metrics</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <div className="bg-gray-800 text-white p-3 rounded-lg">
//                     <h4 className="text-xs text-gray-400">Open Rate</h4>
//                     <p className="text-xl font-bold">42%</p>
//                   </div>
//                   <div className="bg-gray-800 text-white p-3 rounded-lg">
//                     <h4 className="text-xs text-gray-400">Click Rate</h4>
//                     <p className="text-xl font-bold">12%</p>
//                   </div>
//                   <div className="bg-gray-800 text-white p-3 rounded-lg">
//                     <h4 className="text-xs text-gray-400">Conversion</h4>
//                     <p className="text-xl font-bold">5.2%</p>
//                   </div>
//                   <div className="bg-gray-800 text-white p-3 rounded-lg">
//                     <h4 className="text-xs text-gray-400">Revenue</h4>
//                     <p className="text-xl font-bold">$8,450</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Campaigns;

import React, { useState, useEffect } from 'react';
import { 
  FiPlus, 
  FiTrash2, 
  FiCheck, 
  FiSend, 
  FiClock, 
  FiSearch, 
  FiEdit2, 
  FiBarChart2,
  FiRefreshCw,
  FiArrowLeft,
  FiSave,
  FiEye
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ruleVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120
    }
  },
  exit: { x: 20, opacity: 0 }
};

// RuleBuilder Component with animations
const RuleBuilder = ({ rules, setRules, onPreview }) => {
  const addRule = () => {
    setRules([...rules, { 
      id: Date.now(), 
      field: "spend", 
      operator: ">", 
      value: "", 
      connector: "AND" 
    }]);
  };

  const removeRule = (id) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const updateRule = (id, key, value) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, [key]: value } : rule
    ));
  };

  const handlePreview = () => {
    const size = Math.floor(Math.random() * 1000) + 100;
    onPreview(size);
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 mb-6 shadow-sm"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 className="text-2xl text-white font-bold mb-4" variants={itemVariants}>
        Audience Segment Rules
      </motion.h3>
      
      <AnimatePresence>
        {rules.map((rule, index) => (
          <motion.div 
            key={rule.id}
            className="flex items-center gap-2 mb-3"
            variants={ruleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
          >
            {index > 0 && (
              <motion.select
                className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
                value={rule.connector}
                onChange={(e) => updateRule(rule.id, "connector", e.target.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <option value="AND">AND</option>
                <option value="OR">OR</option>
              </motion.select>
            )}
            <motion.select
              className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
              value={rule.field}
              onChange={(e) => updateRule(rule.id, "field", e.target.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <option value="spend">Total Spend</option>
              <option value="visits">Store Visits</option>
              <option value="inactiveDays">Inactive Days</option>
              <option value="lastPurchase">Last Purchase</option>
              <option value="emailOpens">Email Opens</option>
            </motion.select>
            <motion.select
              className="rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 border-gray-200 transition hover:shadow-lg hover:shadow-indigo-500/10"
              value={rule.operator}
              onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <option value=">">&gt;</option>
              <option value="<">&lt;</option>
              <option value="==">=</option>
              <option value="!=">≠</option>
              <option value=">=">≥</option>
              <option value="<=">≤</option>
            </motion.select>
            <motion.input
              type="number"
              className="border border-gray-200 rounded-md p-2 flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 w-24"
              value={rule.value}
              onChange={(e) => updateRule(rule.id, "value", e.target.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            />
            <motion.button
              onClick={() => removeRule(rule.id)}
              className="p-2 text-red-500 hover:text-red-700"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTrash2 />
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <motion.button
        onClick={addRule}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiPlus /> Add Rule
      </motion.button>
      
      <motion.div className="flex items-center gap-4 mt-4">
        <motion.button
          onClick={handlePreview}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FiCheck /> Preview Audience
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// CampaignCard Component with animations
const CampaignCard = ({ campaign, onViewDetails, onEdit, onDelete }) => {
  const statusColors = {
    Active: "bg-green-100 text-green-700 border-green-300",
    Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Completed: "bg-blue-100 text-blue-700 border-blue-300",
    Draft: "bg-gray-100 text-gray-700 border-gray-300"
  };

  return (
    <motion.div 
      className="relative rounded-xl shadow-md bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-700 overflow-hidden flex flex-col hover:shadow-xl transition-shadow text-white"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
    >
      {/* Info */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-purple-300">{campaign.name}</h3>
          <span className="text-xs text-gray-200">{campaign.id}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-200 text-sm mb-4">
          <span>{campaign.date}</span>
          <motion.span 
            className={`px-2 py-1 rounded-full text-xs ${statusColors[campaign.status]}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {campaign.status}
          </motion.span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg"
            whileHover={{ y: -3 }}
          >
            <div className="text-xs text-gray-200">Audience</div>
            <div className="font-semibold text-purple-600">{campaign.audienceSize}</div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg"
            whileHover={{ y: -3 }}
          >
            <div className="text-xs text-gray-200">Sent</div>
            <div className="font-semibold text-green-600">{campaign.sent}</div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg"
            whileHover={{ y: -3 }}
          >
            <div className="text-xs text-gray-200">Failed</div>
            <div className="font-semibold text-red-600">{campaign.failed}</div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg"
            whileHover={{ y: -3 }}
          >
            <div className="text-xs text-gray-200">Open Rate</div>
            <div className="font-semibold text-blue-600">
              {Math.floor(Math.random() * 30) + 20}%
            </div>
          </motion.div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <motion.button 
            onClick={() => onViewDetails(campaign)}
            className="flex items-center gap-1 px-3 py-2 bg-gradient-to-br from-gray-400 to-gray-300 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiEye /> View Details
          </motion.button>
          <div className="flex gap-2">
            <motion.button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit(campaign);
              }}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiEdit2 />
            </motion.button>
            <motion.button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete(campaign.id);
              }}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 text-red-700 font-medium text-sm hover:bg-red-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 10 }}
            >
              <FiTrash2 />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Campaigns Component with animations
const Campaigns = () => {
  const [view, setView] = useState("list");
  const [detailView, setDetailView] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rules, setRules] = useState([{ 
    id: Date.now(), 
    field: "spend", 
    operator: ">", 
    value: 100, 
    connector: "AND" 
  }]);
  const [audienceSize, setAudienceSize] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [editingId, setEditingId] = useState(null);

  // Fixed sample data that will always be included
  const fixedSampleCampaigns = [
    {
      id: "CMP-FIXED-1001",
      name: "Welcome Campaign",
      status: "Active",
      audienceSize: 1200,
      sent: 1080,
      failed: 120,
      date: "2025-01-15",
      message: "Welcome to our service! Enjoy your 10% discount.",
      rules: [{ field: "lastPurchase", operator: "<", value: 1 }],
      isFixed: true // Mark as fixed so it can't be deleted
    },
    {
      id: "CMP-FIXED-1002",
      name: "Anniversary Special",
      status: "Scheduled",
      audienceSize: 850,
      sent: 0,
      failed: 0,
      date: "2025-12-01",
      message: "Happy anniversary! Here's a special gift for you.",
      rules: [{ field: "inactiveDays", operator: "<", value: 365 }],
      isFixed: true
    }
  ];

  // Load campaigns from localStorage or initialize with sample data
  useEffect(() => {
    const savedCampaigns = localStorage.getItem('campaigns');
    if (savedCampaigns) {
      // Combine fixed campaigns with saved user campaigns (user campaigns first)
      const userCampaigns = JSON.parse(savedCampaigns);
      setCampaigns([...userCampaigns, ...fixedSampleCampaigns]);
    } else {
      const sampleCampaigns = [
        {
          id: "CMP-1001",
          name: "Summer Sale 2025",
          status: "Active",
          audienceSize: 450,
          sent: 405,
          failed: 45,
          date: "2025-05-01",
          message: "Hi {name}, enjoy 20% off on summer collection!",
          rules: [{ field: "spend", operator: ">", value: 100 }]
        },
        {
          id: "CMP-1002",
          name: "Diwali Bonanza",
          status: "Scheduled",
          audienceSize: 320,
          sent: 0,
          failed: 0,
          date: "2025-10-15",
          message: "Diwali special: Buy 1 get 1 free on selected items!",
          rules: [{ field: "visits", operator: ">", value: 3 }]
        },
        {
          id: "CMP-1003",
          name: "New Arrivals",
          status: "Completed",
          audienceSize: 780,
          sent: 702,
          failed: 78,
          date: "2025-03-10",
          message: "Check out our new collection with 15% discount!",
          rules: [{ field: "lastPurchase", operator: "<", value: 30 }]
        },
        {
          id: "CMP-1004",
          name: "Loyalty Rewards",
          status: "Draft",
          audienceSize: 0,
          sent: 0,
          failed: 0,
          date: "2025-06-20",
          message: "Exclusive rewards for our loyal customers!",
          rules: [{ field: "spend", operator: ">", value: 500 }]
        }
      ];
      // Combine sample campaigns with fixed campaigns (sample first)
      setCampaigns([...sampleCampaigns, ...fixedSampleCampaigns]);
      localStorage.setItem('campaigns', JSON.stringify(sampleCampaigns));
    }
  }, []);

  // Save user campaigns to localStorage whenever they change
  useEffect(() => {
    if (campaigns.length > 0) {
      // Only save non-fixed campaigns to localStorage
      const userCampaigns = campaigns.filter(c => !c.isFixed);
      localStorage.setItem('campaigns', JSON.stringify(userCampaigns));
    }
  }, [campaigns]);

  const handleSave = () => {
    if (!name || !message || !audienceSize) return;

    setLoading(true);
    setTimeout(() => {
      if (editingId) {
        // Update existing campaign
        const updatedCampaigns = campaigns.map(campaign => 
          campaign.id === editingId ? {
            ...campaign,
            name,
            message,
            rules,
            audienceSize,
            sent: Math.floor(audienceSize * 0.9),
            failed: audienceSize - Math.floor(audienceSize * 0.9),
            date: new Date().toISOString().split('T')[0],
            status: "Active"
          } : campaign
        );
        setCampaigns(updatedCampaigns);
        setEditingId(null);
      } else {
        // Create new campaign - add to the beginning of the array
        const newCampaign = {
          id: `CMP-${Date.now()}`,
          name,
          message,
          rules,
          audienceSize,
          sent: Math.floor(audienceSize * 0.9),
          failed: audienceSize - Math.floor(audienceSize * 0.9),
          date: new Date().toISOString().split('T')[0],
          status: "Active"
        };
        // Add new campaign at the beginning (before other user campaigns but after fixed ones)
        const nonFixedCampaigns = campaigns.filter(c => !c.isFixed);
        const fixedCampaigns = campaigns.filter(c => c.isFixed);
        const updatedCampaigns = [newCampaign, ...nonFixedCampaigns, ...fixedCampaigns];
        setCampaigns(updatedCampaigns);
      }
      setLoading(false);
      setView("list");
      resetForm();
    }, 800);
  };

  const resetForm = () => {
    setName("");
    setMessage("");
    setAudienceSize(null);
    setRules([{ id: Date.now(), field: "spend", operator: ">", value: 100, connector: "AND" }]);
    setEditingId(null);
  };

  const handleEdit = (campaign) => {
    if (campaign.isFixed) return; // Prevent editing fixed campaigns
    
    setView("create");
    setName(campaign.name);
    setMessage(campaign.message);
    setRules(campaign.rules);
    setAudienceSize(campaign.audienceSize);
    setEditingId(campaign.id);
  };

  const handleDelete = (id) => {
    const campaignToDelete = campaigns.find(c => c.id === id);
    if (campaignToDelete?.isFixed) return; // Prevent deleting fixed campaigns
    
    if (window.confirm("Are you sure you want to delete this campaign?")) {
      const updatedCampaigns = campaigns.filter(campaign => campaign.id !== id);
      setCampaigns(updatedCampaigns);
    }
  };

  const handleViewDetails = (campaign) => {
    setDetailView(campaign);
    setView("detail");
  };

  const handleEditFromDetails = () => {
    if (detailView && !detailView.isFixed) {
      handleEdit(detailView);
      setView("create");
    }
  };

  const filteredCampaigns = campaigns.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                         c.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {view === "list" ? (
            <>
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <motion.div 
                  className="bg-indigo-500 p-3 rounded-full shadow"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FiSend size={24} className="text-white" />
                </motion.div>
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Campaigns
                  </motion.h2>
                  <motion.p 
                    className="text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {filteredCampaigns.length} campaigns found
                  </motion.p>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3" variants={itemVariants}>
                <motion.button
                  onClick={() => {
                    resetForm();
                    setView("create");
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition"
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlus /> New Campaign
                </motion.button>
              </motion.div>
            </>
          ) : view === "create" ? (
            <>
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <motion.button 
                  onClick={() => {
                    resetForm();
                    setView("list");
                  }}
                  className="p-2 rounded-full flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 ro border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowLeft size={20} />
                </motion.button>
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 pb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {editingId ? "Edit Campaign" : "Create New Campaign"}
                  </motion.h2>
                  <motion.p 
                    className="pl-2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {editingId ? "Update your campaign details" : "Define your audience and message"}
                  </motion.p>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <motion.button 
                  onClick={() => setView("list")}
                  className="p-2 rounded-full text-white hover:bg-gray-100 hover:text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiArrowLeft size={20} />
                </motion.button>
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {detailView?.name}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Campaign ID: {detailView?.id}
                    {detailView?.isFixed && (
                      <motion.span 
                        className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        Fixed Campaign
                      </motion.span>
                    )}
                  </motion.p>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3" variants={itemVariants}>
                {!detailView?.isFixed && (
                  <motion.button
                    onClick={handleEditFromDetails}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:bg-indigo-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiEdit2 /> Edit Campaign
                  </motion.button>
                )}
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend /> Resend
                </motion.button>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {view === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Filters */}
              <motion.div 
                className="flex flex-col md:flex-row md:items-center gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="relative flex-1" variants={itemVariants}>
                  <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search campaigns..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-700 to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </motion.div>
                <motion.div className="flex items-center gap-3" variants={itemVariants}>
                  <select
                    className="rounded-lg px-3 py-2 bg-gray-800 text-white border-bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Draft">Draft</option>
                  </select>
                  <motion.button
                    onClick={() => window.location.reload()}
                    className="p-2 rounded-lg border-bg-gray-900 bg-gray-800 hover:bg-gray-700 text-white"
                    title="Refresh"
                    whileHover={{ rotate: 180 }}
                    transition={{ type: "spring" }}
                  >
                    <FiRefreshCw />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Campaigns Grid */}
              {loading ? (
                <motion.div 
                  className="text-center py-16 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Loading campaigns...
                </motion.div>
              ) : filteredCampaigns.length === 0 ? (
                <motion.div 
                  className="bg-white rounded-xl p-8 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-5xl mb-4">📢</div>
                  <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
                  <p className="text-gray-500 mb-4">
                    {search ? "Try a different search term" : "Create your first campaign"}
                  </p>
                  <motion.button
                    onClick={() => {
                      resetForm();
                      setView("create");
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Create Campaign
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredCampaigns.map((campaign) => (
                    <CampaignCard 
                      key={campaign.id} 
                      campaign={campaign} 
                      onViewDetails={handleViewDetails}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ) : view === "create" ? (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-xl p-6 shadow-sm"
            >
              <div className="mb-6">
                <motion.label 
                  className="block text-white text-xl mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Campaign Name
                </motion.label>
                <motion.input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g. Summer Sale 2025 text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                />
              </div>
              
              <div className="mb-6">
                <motion.label 
                  className="block text-white text-xl mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Message Template
                </motion.label>
                <motion.textarea
                  className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Hi {name}, here's your exclusive offer..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                />
                <motion.p 
                  className="text-sm text-red-500 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Use {"{name}"} to personalize the message
                </motion.p>
              </div>
              
              <RuleBuilder
                rules={rules}
                setRules={setRules}
                onPreview={setAudienceSize}
              />
              
              <AnimatePresence>
                {audienceSize !== null && (
                  <motion.div 
                    className="mb-6 p-4 bg-gradient-to-br from-gray-700 to-gray-600 text-white rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="font-medium text-white">
                      Estimated Audience Size: <span className="font-bold">{audienceSize}</span> customers
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div 
                className="flex justify-end gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={() => {
                    resetForm();
                    setView("list");
                  }}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleSave}
                  disabled={!name || !message || !audienceSize || loading}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    !name || !message || !audienceSize || loading
                      ? "flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition hover:shadow-lg hover:shadow-indigo-500/10 text-white cursor-not-allowed"
                      : "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-indigo-500/30 transition text-white"
                  }`}
                  whileHover={!name || !message || !audienceSize || loading ? {} : { scale: 1.05 }}
                  whileTap={!name || !message || !audienceSize || loading ? {} : { scale: 0.95 }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {editingId ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    <>
                      {editingId ? <FiSave /> : <FiSend />} 
                      {editingId ? "Update Campaign" : "Save & Send Campaign"}
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-sm overflow-hidden"
            >
              {/* Campaign Header */}
              <div className="p-6 bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.h2 
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {detailView?.name}
                    </motion.h2>
                    <motion.p 
                      className="opacity-80 text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      ID: {detailView?.id}
                    </motion.p>
                  </div>
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      detailView?.status === "Active" ? "bg-green-100 text-green-800" :
                      detailView?.status === "Scheduled" ? "bg-yellow-100 text-yellow-800" :
                      detailView?.status === "Completed" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {detailView?.status}
                  </motion.span>
                </div>
              </div>
              
              {/* Campaign Details */}
              <div className="p-6">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="bg-gray-800 p-4 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-sm font-medium text-white mb-1">Audience Size</h3>
                    <p className="text-2xl font-bold text-blue-500">{detailView?.audienceSize}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800 p-4 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-sm font-medium text-white mb-1">Messages Sent</h3>
                    <p className="text-2xl font-bold text-green-600">{detailView?.sent}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800 p-4 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-sm font-medium text-white mb-1">Messages Failed</h3>
                    <p className="text-2xl font-bold text-red-600">{detailView?.failed}</p>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">Message Content</h3>
                  <motion.div 
                    className="bg-gray-800 text-white p-4 rounded-lg"
                    whileHover={{ scale: 1.01 }}
                  >
                    <p className="whitespace-pre-line">{detailView?.message}</p>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">Targeting Rules</h3>
                  <motion.div 
                    className="bg-gray-800 text-white p-4 rounded-lg"
                    whileHover={{ scale: 1.01 }}
                  >
                    {detailView?.rules?.map((rule, index) => (
                      <motion.div 
                        key={index} 
                        className="mb-2 last:mb-0"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        {index > 0 && (
                          <span className="text-gray-400 font-medium mr-2">
                            {rule.connector || "AND"}
                          </span>
                        )}
                        <span className="font-medium">{rule.field}</span>
                        <span className="mx-2">{rule.operator}</span>
                        <span className="font-medium">{rule.value}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-white">Performance Metrics</h3>
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="bg-gray-800 text-white p-3 rounded-lg"
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-xs text-gray-400">Open Rate</h4>
                      <p className="text-xl font-bold">42%</p>
                    </motion.div>
                    <motion.div 
                      className="bg-gray-800 text-white p-3 rounded-lg"
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-xs text-gray-400">Click Rate</h4>
                      <p className="text-xl font-bold">12%</p>
                    </motion.div>
                    <motion.div 
                      className="bg-gray-800 text-white p-3 rounded-lg"
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-xs text-gray-400">Conversion</h4>
                      <p className="text-xl font-bold">5.2%</p>
                    </motion.div>
                    <motion.div 
                      className="bg-gray-800 text-white p-3 rounded-lg"
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-xs text-gray-400">Revenue</h4>
                      <p className="text-xl font-bold">$8,450</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Campaigns;