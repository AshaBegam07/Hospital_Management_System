import React from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import "../styles/Appointment.css";

const Appointment = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login page
  };

  
  return (
    <div className="appointment-page">
      {/* Hero Section */}
      <Hero
        title={"Schedule Your Appointment | Medicare Medical Institute"}
      />

      {/* Content Section */}
      <div className="appointment-content">
        <h2 className="appointment-heading">Book Your Appointment with Ease</h2>
        <p className="appointment-description">
          At Medicare Medical Institute, we value your time and health. Our
          intuitive scheduling system ensures you can book your appointment
          with your preferred doctor effortlessly. Please log in to access the
          full booking experience.
        </p>

        {/* Book Appointment Button */}
        <button
          className="book-appointment-button"
          onClick={handleLoginRedirect}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
