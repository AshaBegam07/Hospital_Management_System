import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // For animations
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://server-1-gc0n.onrender.com/api/login`, formData);
      toast.success(response.data.message);
      window.location.href = "https://fanciful-fairy-9af95d.netlify.app/dashboard"; // Redirect to App2
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="login-title">Welcome Back</h2>
      <p className="login-subtitle">Access your account to continue</p>
      <form onSubmit={handleLogin} className="login-form">
        <motion.div
          className="form-group"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
         
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </motion.div>
        <motion.div
          className="form-group"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
       
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.1, backgroundColor: "#167861" }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Login;
