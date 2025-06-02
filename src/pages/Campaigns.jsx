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