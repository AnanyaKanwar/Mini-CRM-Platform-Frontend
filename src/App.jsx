import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Campaigns from "./pages/Campaigns";
import Logs from "./pages/Logs";
import MessageSuggestions from "./pages/MessageSuggestions";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />
      <div className=""> {/* Padding top for navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/communication-logs" element={<Logs />} />
          <Route path="/ai-suggestions" element={<MessageSuggestions />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
