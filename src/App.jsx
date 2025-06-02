
// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import FloatingBot from "./components/FloatingBot";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Campaigns from "./pages/Campaigns";
import Logs from "./pages/Logs";
import MessageSuggestions from "./pages/MessageSuggestions";
import AnalyticsPage from "./pages/AnalyticsPage ";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/communication-logs" element={<Logs />} />
          <Route path="/ai-suggestions" element={<MessageSuggestions />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </div>
      <FloatingBot /> 
    </BrowserRouter>
  );
}

export default App;
