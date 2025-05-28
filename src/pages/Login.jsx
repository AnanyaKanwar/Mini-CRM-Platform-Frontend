import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginBanner from "../../public/Login.jpg";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("jwt_token", token);
      navigate("/customers");
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    window.location.href =
      "https://mini-crm-platform-backend.vercel.app/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Subtle glowing border ring */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-300 via-pink-300 to-transparent opacity-30 blur-2xl pointer-events-none"></div>
      {/* Glassmorphism Card with side-by-side layout */}
      <div className="relative bg-white/30 backdrop-blur-xl shadow-2xl rounded-3xl p-0 flex flex-col md:flex-row w-full max-w-5xl min-h-[520px] animate-fade-in-down border border-white/40 z-10 overflow-hidden">
        {/* Left: Banner Image */}
        <div className="md:w-1/2 w-full h-60 md:h-auto flex-shrink-0">
          <img
            src={LoginBanner}
            alt="Login Banner"
            className="w-full h-full object-cover object-center"
            draggable={false}
            loading="eager"
          />
        </div>
        {/* Right: Login Info */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-10 md:p-16 bg-white/90 backdrop-blur-sm rounded-none md:rounded-r-3xl shadow-lg min-h-[520px]">
          {/* CRM Illustration */}
          <div className="mb-6">
            <svg width={70} height={70} viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="24" fill="#6366F1" fillOpacity="0.12"/>
              <rect x="20" y="28" width="80" height="50" rx="12" fill="#6366F1" fillOpacity="0.2"/>
              <rect x="30" y="38" width="60" height="30" rx="7" fill="#fff"/>
              <rect x="38" y="48" width="44" height="7" rx="3.5" fill="#6366F1" fillOpacity="0.7"/>
              <rect x="38" y="59" width="28" height="5" rx="2.5" fill="#A78BFA" fillOpacity="0.6"/>
              <circle cx="90" cy="70" r="11" fill="#A78BFA" fillOpacity="0.7"/>
              <text x="90" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">CRM</text>
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight drop-shadow">
            Welcome to Mini CRM
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-xs font-medium text-lg">
            Effortlessly manage your customers and orders.<br />
            Sign in to get started!
          </p>
          <button
            onClick={handleGoogleLogin}
            className="
              flex items-center gap-3 px-7 py-4 rounded-xl shadow-lg bg-white/90 border border-gray-200
              hover:bg-blue-50 hover:border-blue-500 hover:shadow-xl
              hover:scale-105 hover:ring-2 hover:ring-blue-400
              transition-all duration-200 focus:outline-none
              active:scale-100 text-lg
            "
            style={{
              boxShadow: "0 2px 12px 0 rgba(66,133,244,0.15)"
            }}
          >
            <svg width="28" height="28" viewBox="0 0 48 48">
              <g>
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.2 6.4 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.8-8 19.8-20 0-1.3-.1-2.3-.3-3.3z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.8 16.1 19.6 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.2 6.4 29.4 4 24 4c-7.9 0-14.6 4.6-18.1 10.7z"/>
                <path fill="#FBBC05" d="M24 44c5.4 0 10.2-1.8 13.9-4.9l-6.4-5.2C29.7 35.7 27 36.8 24 36.8c-5.8 0-10.7-3.9-12.5-9.2l-7 5.4C9.4 39.4 16.1 44 24 44z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3-4.3 5.5-7.7 5.5-5.8 0-10.7-3.9-12.5-9.2l-7 5.4C9.4 39.4 16.1 44 24 44c7.9 0 14.6-4.6 18.1-10.7z"/>
              </g>
            </svg>
            <span className="font-semibold text-gray-700 text-lg">
              Sign in with Google
            </span>
          </button>
          <div className="mt-10 text-xs text-gray-700 text-center">
            &copy; {new Date().getFullYear()} Mini CRM Platform
          </div>
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
