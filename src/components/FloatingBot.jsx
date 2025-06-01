// import React, { useState } from "react";
// import { FiZap } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const FloatingBot = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/ai-suggestions");
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-40">
//       <div
//         className="relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           onClick={handleClick}
//           className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/90 hover:bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/40 transition-all duration-200"
//           title="Get AI Suggestions"
//         >
//           <FiZap size={20} />
//         </button>
//         {isHovered && (
//           <div className="absolute bottom-16 right-0 bg-gray-800/90 backdrop-blur-sm border border-gray-700/60 rounded-xl shadow-lg px-4 py-3 w-48 text-gray-100 text-sm animate-fade-in-down">
//             <p className="font-medium">AI Message Suggestions</p>
//             <p className="mt-1">Click to get campaign message ideas!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FloatingBot;
import React, { useState } from "react";
import { FiZap } from "react-icons/fi";
import MessageSuggestionsModal from "../pages/MessageSuggestions";

const FloatingBot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500/90 hover:bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/40 transition-all duration-200 animate-spin-dance"
        title="Get AI Suggestions"
      >
        <FiZap size={24} className="animate-wiggle" />
      </button>
      <MessageSuggestionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Animation keyframes */}
      <style>
        {`
          @keyframes spin-dance {
            0%, 100% {
              transform: rotate(0deg) translateY(0);
            }
            25% {
              transform: rotate(10deg) translateY(-4px);
            }
            50% {
              transform: rotate(0deg) translateY(-8px);
            }
            75% {
              transform: rotate(-10deg) translateY(-4px);
            }
          }
          .animate-spin-dance {
            animation: spin-dance 3s ease-in-out infinite;
          }
          @keyframes wiggle {
            0%, 100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(10deg);
            }
            75% {
              transform: rotate(-10deg);
            }
          }
          .animate-wiggle {
            animation: wiggle 1s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FloatingBot;
