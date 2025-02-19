import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AppointmentForm.css";

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]); // This will be populated from the doctorsList

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  useEffect(() => {
    // Setting doctors list (you can later fetch this data from an API)
    const doctorsList = [
      { id: 1, firstName: "Dr. John", lastName: "Doe", profession: "Pediatrics" },
      { id: 2, firstName: "Dr. Jane", lastName: "Smith", profession: "Orthopedics" },
      { id: 3, firstName: "Dr. Jim", lastName: "Brown", profession: "Cardiology" },
      { id: 4, firstName: "Dr. Emily", lastName: "Davis", profession: "Neurology" },
      { id: 5, firstName: "Dr. Michael", lastName: "Johnson", profession: "Oncology" },
      { id: 6, firstName: "Dr. Sarah", lastName: "Miller", profession: "Radiology" },
      { id: 7, firstName: "Dr. David", lastName: "Wilson", profession: "Physical Therapy" },
      { id: 8, firstName: "Dr. Olivia", lastName: "Taylor", profession: "Dermatology" },
      { id: 9, firstName: "Dr. William", lastName: "Anderson", profession: "ENT" },
      { id: 10, firstName: "Dr. Ava", lastName: "Thomas", profession: "Pediatrics" },
      { id: 11, firstName: "Dr. Matthew", lastName: "Jackson", profession: "Orthopedics" },
      { id: 12, firstName: "Dr. Sophia", lastName: "White", profession: "Cardiology" },
      { id: 13, firstName: "Dr. Benjamin", lastName: "Harris", profession: "Neurology" },
      { id: 14, firstName: "Dr. Isabella", lastName: "Martin", profession: "Oncology" },
      { id: 15, firstName: "Dr. Daniel", lastName: "Garcia", profession: "Radiology" },
      { id: 16, firstName: "Dr. Mia", lastName: "Rodriguez", profession: "Physical Therapy" },
      { id: 17, firstName: "Dr. Lucas", lastName: "Martinez", profession: "Dermatology" },
      { id: 18, firstName: "Dr. Elijah", lastName: "Lee", profession: "ENT" },
      { id: 19, firstName: "Dr. Harper", lastName: "Lopez", profession: "Pediatrics" },
      { id: 20, firstName: "Dr. Alexander", lastName: "Gonzalez", profession: "Orthopedics" },
      { id: 21, firstName: "Dr. Charlotte", lastName: "Perez", profession: "Cardiology" },
      { id: 22, firstName: "Dr. Evelyn", lastName: "Young", profession: "Neurology" },
      { id: 23, firstName: "Dr. Henry", lastName: "Allen", profession: "Oncology" },
      { id: 24, firstName: "Dr. Grace", lastName: "Sanchez", profession: "Radiology" },
      { id: 25, firstName: "Dr. Leo", lastName: "King", profession: "Physical Therapy" },
      { id: 26, firstName: "Dr. Chloe", lastName: "Scott", profession: "Dermatology" },
      { id: 27, firstName: "Dr. Gabriel", lastName: "Adams", profession: "ENT" },
      { id: 28, firstName: "Dr. Madison", lastName: "Baker", profession: "Pediatrics" },
      { id: 29, firstName: "Dr. Samuel", lastName: "Carter", profession: "Orthopedics" },
      { id: 30, firstName: "Dr. Lily", lastName: "Mitchell", profession: "Cardiology" },
      { id: 31, firstName: "Dr. James", lastName: "Perez", profession: "Neurology" },
      { id: 32, firstName: "Dr. Amelia", lastName: "Roberts", profession: "Oncology" },
      { id: 33, firstName: "Dr. Jackson", lastName: "Walker", profession: "Radiology" },
      { id: 34, firstName: "Dr. Zoe", lastName: "Gonzalez", profession: "Physical Therapy" },
      { id: 35, firstName: "Dr. Isaac", lastName: "Nelson", profession: "Dermatology" },
    ];

    setDoctors(doctorsList);
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const response = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);

      // Reset form state
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to book appointment.");
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleAppointment}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setDoctorFirstName("");
              setDoctorLastName("");
            }}
          >
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>
                {depart}
              </option>
            ))}
          </select>
          <select
            value={`${doctorFirstName} ${doctorLastName}`}
            onChange={(e) => {
              const [firstName, lastName] = e.target.value.split(" ");
              setDoctorFirstName(firstName);
              setDoctorLastName(lastName);
            }}
          >
            <option value="">Select Doctor</option>
            {doctors
              .filter((doctor) => doctor.profession === department)
              .map((doctor) => (
                <option key={doctor.id} value={`${doctor.firstName} ${doctor.lastName}`}>
                  {doctor.firstName} {doctor.lastName} - {doctor.profession}
                </option>
              ))}
          </select>
        </div>
        <textarea
          rows="5"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ marginBottom: 0 }}>Have you visited before?</label>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
