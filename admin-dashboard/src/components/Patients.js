import React, { useState, useEffect } from "react";
import "../styles/Patients.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomNames = [
      "John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Chris Brown",
      "Amanda Wilson", "Daniel Lee", "Jessica Miller", "David Taylor", "Sarah Moore",
      "James Anderson", "Emma Thomas", "Lucas Martin", "Sophia Garcia", "Oliver Martinez",
      "Mia Robinson", "William Walker", "Isabella Harris", "Ethan Hall", "Ava Adams",
    ];

    const randomDiseases = [
      "Flu", "Cold", "Asthma", "Diabetes", "Hypertension",
      "Migraine", "Arthritis", "Allergy", "Heart Disease", "Anemia",
    ];

    const randomBloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const mockPatients = Array.from({ length: 120 }, (_, index) => ({
      id: index + 1,
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      age: Math.floor(Math.random() * 50) + 20,
      disease: randomDiseases[Math.floor(Math.random() * randomDiseases.length)],
      bloodGroup: randomBloodGroups[Math.floor(Math.random() * randomBloodGroups.length)],
      phone: `+1234567890${index}`,
      status: index % 2 === 0 ? "Charged" : "Discharged",
    }));

    setPatients(mockPatients);
    setFilteredPatients(mockPatients);
    setLoading(false);
  }, []);

  const filterPatientsByStatus = (status) => {
    const filtered = patients.filter((patient) => patient.status === status);
    setFilteredPatients(filtered);
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
    <div className="patients-container">
      <h1>Patients Management</h1>

      <div className="status-buttons">
        <button onClick={() => filterPatientsByStatus("Charged")} className="charged-btn">
          Show Charged Patients
        </button>
        <button onClick={() => filterPatientsByStatus("Discharged")} className="discharged-btn">
          Show Discharged Patients
        </button>
      </div>

      <div className="patients-section">
        <h2>{filteredPatients[0]?.status} Patients</h2>
        <div className="patients-list">
          {filteredPatients.map((patient) => (
            <div className={`patient-card ${patient.status.toLowerCase()}`} key={patient.id}>
              <h3>{patient.name}</h3>
              <p>Age: {patient.age}</p>
              <p>Disease: {patient.disease}</p>
              <p>Blood Group: {patient.bloodGroup}</p>
              <p>Phone: {patient.phone}</p>
              <div className="status">
                {patient.status === "Charged" ? (
                  <FaCheckCircle /> 
                ) : (
                  <FaTimesCircle />
                )}
                {patient.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
