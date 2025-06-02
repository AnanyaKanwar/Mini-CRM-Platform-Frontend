import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiPackage, FiSend, FiTrendingUp, FiChevronRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "../../public/Banner.jpg";

export default function Home() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleGetStarted = () => {
    if (localStorage.getItem("jwt_token")) {
      navigate("/customers");
    } else {
      navigate("/login");
    }
  };

  const features = [
    {
      title: "Customer Management",
      description: "Keep track of all your customers in one place with easy-to-use tools.",
      icon: <FiUsers className="mx-auto text-indigo-500 mb-4" size={48} />,
      route: "/customers",
      bg: "from-indigo-500 to-indigo-600",
      hover: "hover:shadow-indigo-500/20 hover:-translate-y-2",
    },
    {
      title: "Order Tracking",
      description: "Monitor orders and sales seamlessly with real-time updates.",
      icon: <FiPackage className="mx-auto text-emerald-500 mb-4" size={48} />,
      route: "/orders",
      bg: "from-emerald-500 to-emerald-600",
      hover: "hover:shadow-emerald-500/20 hover:-translate-y-2",
    },
    {
      title: "Campaigns",
      description: "Create and manage marketing campaigns to grow your business.",
      icon: <FiSend className="mx-auto text-purple-500 mb-4" size={48} />,
      route: "/campaigns",
      bg: "from-purple-500 to-purple-600",
      hover: "hover:shadow-purple-500/20 hover:-translate-y-2",
    },
    {
      title: "Analytics",
      description: "Gain insights with detailed reports and analytics dashboards.",
      icon: <FiTrendingUp className="mx-auto text-rose-500 mb-4" size={48} />,
      route: "/analytics",
      bg: "from-rose-500 to-rose-600",
      hover: "hover:shadow-rose-500/20 hover:-translate-y-2",
    },
  ];

  const testimonials = [
    {
      name: "Ananya K.",
      role: "Marketing Director",
      feedback: "Connectix transformed how we manage customers. Easy, efficient, and reliable!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Rajesh P.",
      role: "Operations Manager",
      feedback: "The order tracking feature saved us hours every week. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sonia M.",
      role: "Sales Executive",
      feedback: "Campaign management is a breeze. Our sales have increased significantly.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const stats = [
    { value: "1000+", label: "Businesses Empowered", color: "text-indigo-400" },
    { value: "50K+", label: "Customers Managed", color: "text-emerald-400" },
    { value: "99.9%", label: "Uptime & Reliability", color: "text-purple-400" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div 
            className="w-full md:w-1/2 mb-16 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Power your business growth
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Business</span> with Mini CRM
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Effortlessly manage customers, orders, and campaigns with a platform designed for clarity and speed.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-lg text-white shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center group"
              >
                Get Started
                <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
              <img
                src={Banner}
                alt="CRM Dashboard Banner"
                className="relative w-full max-w-xl object-cover rounded-xl shadow-2xl border border-gray-700/50"
                loading="eager"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Who are we
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-16 leading-relaxed"
              variants={fadeInUp}
            >
              Connectix is a powerful yet lightweight customer relationship platform that focuses on intelligent segmentation, personalized campaigns, and actionable insights. Designed with scalability, usability, and real-world applicability in mind, this project showcases a hands-on approach to modern CRM challenges—from secure data ingestion and audience rule-building to smart message delivery and AI-powered enhancements.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Why Choose Mini CRM?
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
{features.map((feature, idx) => (
  <motion.div
    key={idx}
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="group"
  >
    <button
      onClick={() => navigate(feature.route)}
      className={`w-full h-full p-8 bg-gradient-to-br ${feature.bg} rounded-xl shadow-lg ${feature.hover} transition-all duration-300 flex flex-col items-center text-white`}
    >
      <div className="mb-6 p-4 bg-black/30 rounded-full border border-white/10">
        {React.cloneElement(feature.icon, { 
          className: feature.icon.props.className.replace('mb-4', '') 
        })}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-white/80 mb-6">{feature.description}</p>
      <span className="mt-auto text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
        Learn more <FiChevronRight className="ml-1" />
      </span>
    </button>
  </motion.div>
))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-800/50 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {testimonials.map(({ name, role, feedback, avatar }, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-30 -z-10"></div>
                      <img
                        src={avatar}
                        alt={name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
                      />
                    </div>
                    <p className="text-gray-300 italic mb-6">"{feedback}"</p>
                    <div>
                      <h4 className="font-semibold text-white">{name}</h4>
                      <p className="text-sm text-gray-400">{role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-100 mb-10"
              variants={fadeInUp}
            >
              Join hundreds of businesses already growing with Connectix.
            </motion.p>
            <motion.div
              variants={fadeInUp}
            >
              <button
                onClick={handleGetStarted}
                className="px-10 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 flex items-center mx-auto group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}