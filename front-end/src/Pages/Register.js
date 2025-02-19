import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // For animations
import { FaUserAlt, FaEnvelope, FaPhone, FaCalendarAlt, FaLock } from "react-icons/fa";
import "../styles/Register.css"; // Include custom CSS for styling

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://server-1-gc0n.onrender.com/api/register`, formData);
      toast.success(response.data.message);
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        password: "",
      });

      // Redirect to login page
      window.location.href = "https://poetic-biscotti-daadb6.netlify.app";
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <motion.div
      className="register-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="register-title">Patient Account</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <FaUserAlt className="icon" />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <FaPhone className="icon" />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>
        <div className="form-group">
          <FaCalendarAlt className="icon" />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            required
          />
        </div>
        <div className="form-group">
          <label className="gender-label">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Register
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Register;
