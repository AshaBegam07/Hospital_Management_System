import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Bloodbank from "./components/Bloodbank";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Appointment from "./components/Appointment";
import "./App.css";

const App = () => {
  
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/bloodbank" element={<Bloodbank />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;
