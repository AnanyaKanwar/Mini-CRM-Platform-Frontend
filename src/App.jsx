import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Campaigns from "./pages/Campaigns";
import Logs from "./pages/Logs";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
     <div className=""> {/* Padding top for navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/campaigns" element={<Campaigns/>}/>
          <Route path="//communication-logs" element={<Logs/>}/>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
