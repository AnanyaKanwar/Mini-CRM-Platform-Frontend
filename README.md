This is the frontend (React SPA) for the Mini CRM Platform.
It provides a beautiful, interactive UI for managing customers, orders, campaigns, analytics, and more.

🚀 Features
-Modern dashboard with analytics and charts
-Dynamic campaign creation with visual rule builder
-AI-powered message suggestions (GPT-like assistant)
-Campaign history and delivery stats
-Customer and order management
-Responsive and animated UI
-Google OAuth login
-Floating AI assistant bot on all pages

🏗️ Tech Stack
-React.js (Vite)
-Tailwind CSS
-React Router
-React Icons
-Chart.js (react-chartjs-2)
-Axios
-react-hot-toast

⚙️ Setup
Clone the repository:
git clone https://github.com/yourusername/mini-crm-platform.git
cd mini-crm-platform/frontend

Install dependencies:
npm install
Create a .env file:

VITE_API_BASE_URL=http://localhost:5000/api     or        deployed backend link

Start the development server:
npm run dev
Open http://localhost:5173 in your browser.

🧩 Folder Structure
/src/components – Reusable UI components (Navbar, FloatingBot, etc.)

/src/pages – Page components (Home, Login, Customers, Campaigns, etc.)

/public – Images and static assets

📝 Notes
The frontend expects the backend to be running at VITE_API_BASE_URL.
For Google OAuth, ensure the backend is configured with the correct CLIENT_URL.

All API calls are handled via Axios.
