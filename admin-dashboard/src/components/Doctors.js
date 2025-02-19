import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import "../styles/doctor.css";

const generateRandomDoctor = (index) => ({
  _id: `doctor-${index}`,
  docAvatar: null,
  firstName: `Dr. ${["Anees", "shifu", "siddik", "Sarah", "James", "Emily", "David", "Linda", "Robert", "Alice"][index % 10]}`,
  lastName: `Smith${index}`,
  email: `doctor${index}@hospital.com`,
  phone: `+123456789${index}`,
  dob: "1985-04-20",
  doctorDepartment: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Dermatology"][index % 5],
  nic: `1234-5678-${index}`,
  gender: index % 2 === 0 ? "Male" : "Female",
  status: index % 2 === 0 ? "active" : "inactive",
});

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const randomDoctors = Array.from({ length: 30 }, (_, index) =>
          generateRandomDoctor(index)
        );
        setDoctors(randomDoctors);
      } catch (error) {
        toast.error("Failed to fetch doctors.");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleClosePopup = () => {
    setSelectedDoctor(null);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        Loading...
      </div>
    );
  }

  return (
    <section className="page doctors">
      <h1>Doctors</h1>
      <div className="doctor-cards">
        {doctors.map((doctor) => (
          <div className={`doctor-card ${doctor.status}`} key={doctor._id}>
            <div
              className="doctor-icon-container"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <FaEye className="doctor-icon" />
            </div>
            <h4>{`${doctor.firstName} ${doctor.lastName}`}</h4>
            <div className={`doctor-status ${doctor.status}`}>
              {doctor.status === "active" ? "Active" : "Inactive"}
            </div>
          </div>
        ))}
      </div>
      {selectedDoctor && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>{`${selectedDoctor.firstName} ${selectedDoctor.lastName}`}</h2>
            <p>
              <strong>Email:</strong> {selectedDoctor.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedDoctor.phone}
            </p>
            <p>
              <strong>DOB:</strong> {selectedDoctor.dob}
            </p>
            <p>
              <strong>Department:</strong> {selectedDoctor.doctorDepartment}
            </p>
            <p>
              <strong>NIC:</strong> {selectedDoctor.nic}
            </p>
            <p>
              <strong>Gender:</strong> {selectedDoctor.gender}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctors;
