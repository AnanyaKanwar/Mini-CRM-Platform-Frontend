import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiPackage, FiSend, FiTrendingUp } from "react-icons/fi";
import Banner from "../../public/Banner.jpg"

export default function Home() {
  const navigate = useNavigate();

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
      bg: "bg-indigo-100",
      hover: "hover:shadow-indigo-200",
    },
    {
      title: "Order Tracking",
      description: "Monitor orders and sales seamlessly with real-time updates.",
      icon: <FiPackage className="mx-auto text-green-500 mb-4" size={48} />,
      route: "/orders",
      bg: "bg-green-100",
      hover: "hover:shadow-green-200",
    },
    {
      title: "Campaigns",
      description: "Create and manage marketing campaigns to grow your business.",
      icon: <FiSend className="mx-auto text-purple-500 mb-4" size={48} />,
      route: "/campaigns",
      bg: "bg-purple-100",
      hover: "hover:shadow-purple-200",
    },
    {
      title: "Analytics",
      description: "Gain insights with detailed reports and analytics dashboards.",
      icon: <FiTrendingUp className="mx-auto text-pink-500 mb-4" size={48} />,
      route: "/analytics",
      bg: "bg-pink-100",
      hover: "hover:shadow-pink-200",
    },
  ];

  const testimonials = [
    {
      name: "Ananya K.",
      feedback: "Mini CRM transformed how we manage customers. Easy, efficient, and reliable!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Rajesh P.",
      feedback: "The order tracking feature saved us hours every week. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sonia M.",
      feedback: "Campaign management is a breeze. Our sales have increased significantly.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Simplify Your Business with <span className="text-indigo-400">Mini CRM</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            Manage customers, orders, and campaigns effortlessly with our intuitive platform.
          </p>
          <button
            onClick={handleGetStarted}
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section> */}


       <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Banner Image */}
      <img
        src={Banner}
        alt="CRM Dashboard Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
        draggable={false}
        style={{ filter: "brightness(0.65) blur(0px)" }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-pink-800/40 to-transparent z-10 animate-gradient-move"></div>

      {/* Glassmorphism Content with pop-in animation */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-12 rounded-3xl bg-white/30 backdrop-blur-md shadow-2xl text-center text-white animate-pop-in">
        <span className="uppercase tracking-widest text-indigo-200 text-sm mb-4 block">
          Power your business growth
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Simplify Your Business with <span className="text-indigo-300">Mini CRM</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Effortlessly manage customers, orders, and campaigns with a platform designed for clarity and speed.
        </p>
        <button
          onClick={handleGetStarted}
          className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 rounded-full font-bold text-lg shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>

      {/* Animation styles */}
      <style>
        {`
          .animate-pop-in {
            animation: popIn 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(40px);
            }
            80% {
              opacity: 1;
              transform: scale(1.05) translateY(-8px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradientMove 8s ease-in-out infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-50">
            Why Choose Mini CRM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => navigate(feature.route)}
                className={`p-6 ${feature.bg} rounded-xl shadow hover:shadow-lg ${feature.hover} transition focus:outline-none cursor-pointer`}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map(({ name, feedback, avatar }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
              >
                <img
                  src={avatar}
                  alt={name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">"{feedback}"</p>
                <h4 className="font-semibold text-indigo-600">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
