import React, { useState } from "react";
import "../styles/Appointment.css";
import { FaUserMd } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify"; // Correct import
import "react-toastify/dist/ReactToastify.css"; // Toastify styles

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    reason: "",
    date: "",
    time: "",
  });
  // Mock Data
function generateRandomAppointments() {
  const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "James", "Laura"];
  const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Wilson", "Taylor"];
  const reasons = ["Checkup", "Consultation", "Follow-up", "Surgery"];
  const doctors = ["Dr. Lee", "Dr. Taylor", "Dr. Brown", "Dr. Martinez"];

  const randomAppointments = [];
  for (let i = 0; i < 30; i++) { // Increase the count to 30
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];
    const randomDate = `2024-01-${String(Math.floor(Math.random() * 30) + 1).padStart(2, "0")}`;
    const randomTime = `${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}:00`;

    randomAppointments.push({
      id: i + 1,
      patientName: `${randomFirstName} ${randomLastName}`,
      doctorName: randomDoctor,
      reason: randomReason,
      date: randomDate,
      time: randomTime,
    });
  }

  return randomAppointments;
}


  const [appointments, setAppointments] = useState(generateRandomAppointments());
  const [myAppointments, setMyAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState("myAppointments");

  const doctors = [
    "Dr. Smith",
    "Dr. Lee",
    "Dr. Taylor",
    "Dr. Johnson",
    "Dr. Brown",
    "Dr. Davis",
    "Dr. Martinez",
    "Dr. Wilson",
    "Dr. Anderson",
    "Dr. Clark",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: myAppointments.length + 1,
      ...formData,
    };
    setMyAppointments([newAppointment, ...myAppointments]);
    
    // Toast notification
    toast.success("Appointment Registered Successfully!");
    
    setFormData({ patientName: "", doctorName: "", reason: "", date: "", time: "" });
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="appointment-container">
      {/* Corrected Toast Container */}
      <ToastContainer /> {/* Correct ToastContainer here */}

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "myAppointments" ? "active" : ""}`}
          onClick={() => handleTabSwitch("myAppointments")}
        >
        Book Your Appointment
        </button>
        <button
          className={`tab-button ${activeTab === "availableAppointments" ? "active" : ""}`}
          onClick={() => handleTabSwitch("availableAppointments")}
        >
          Booking Appointments
        </button>
      </div>

      {/* Content */}
      {activeTab === "myAppointments" && (
        <div className="tab-content">
          {/* Form Section */}
          <div className="appointment-form-section">
            <h2>Register for an Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label>Patient Name:</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doctor Name:</label>
                <select
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Reason for Appointment:</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Appointment Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <AiOutlineCalendar />
              </div>
              <div className="form-group">
                <label>Appointment Time:</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
                <AiOutlineClockCircle />
              </div>
              <button type="submit">Register Appointment</button>
            </form>
          </div>

          {/* My Appointments Section */}
          <div className="my-appointments-section">
            <h2>My Appointments</h2>
            <div className="appointments-list">
              {myAppointments.map((appointment) => (
                <div key={appointment.id} className="appointment-card">
                  <h3>
                    <FaUserMd /> {appointment.doctorName}
                  </h3>
                  <p>
                    <strong>Patient:</strong> {appointment.patientName}
                  </p>
                  <p>
                    <strong>Reason:</strong> {appointment.reason}
                  </p>
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "availableAppointments" && (
        <div className="appointments-list-section">
          <h2>Available Appointments</h2>
          <div className="appointments-list">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <h3>
                  <FaUserMd /> {appointment.doctorName}
                </h3>
                <p>
                  <strong>Patient:</strong> {appointment.patientName}
                </p>
                <p>
                  <strong>Reason:</strong> {appointment.reason}
                </p>
                <p>
                  <strong>Date:</strong> {appointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mock Data
function generateRandomAppointments() {
  const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "James", "Laura"];
  const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Wilson", "Taylor"];
  const reasons = ["Checkup", "Consultation", "Follow-up", "Surgery"];
  const doctors = ["Dr. Lee", "Dr. Taylor", "Dr. Brown", "Dr. Martinez"];

  const randomAppointments = [];
  for (let i = 0; i < 10; i++) {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];
    const randomDate = `2024-01-${String(Math.floor(Math.random() * 30) + 1).padStart(2, "0")}`;
    const randomTime = `${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}:00`;

    randomAppointments.push({
      id: i + 1,
      patientName: `${randomFirstName} ${randomLastName}`,
      doctorName: randomDoctor,
      reason: randomReason,
      date: randomDate,
      time: randomTime,
    });
  }

  return randomAppointments;
}

export default Appointment;
