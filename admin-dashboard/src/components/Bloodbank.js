import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch, FaPlus } from "react-icons/fa";
import "../styles/bloodbank.css";

const Bloodbank = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodData, setBloodData] = useState([
    { bloodGroup: "A+", donors: 10, quantity: "5L" },
    { bloodGroup: "A-", donors: 4, quantity: "2L" },
    { bloodGroup: "B+", donors: 8, quantity: "4L" },
    { bloodGroup: "B-", donors: 3, quantity: "1.5L" },
    { bloodGroup: "AB+", donors: 5, quantity: "3L" },
    { bloodGroup: "AB-", donors: 2, quantity: "1L" },
    { bloodGroup: "O+", donors: 15, quantity: "7L" },
    { bloodGroup: "O-", donors: 6, quantity: "3L" },
  ]);
  const [newDonation, setNewDonation] = useState({
    bloodGroup: "",
    donors: "",
    quantity: "",
  });

  // Handle Search
  const handleSearch = () => {
    const result = bloodData.filter((data) =>
      data.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (result.length > 0) {
      toast.success(`${result.length} result(s) found!`);
    } else {
      toast.error("No results found!");
    }
    setBloodData(result);
  };

  // Handle Donation
  const handleDonation = () => {
    if (newDonation.bloodGroup && newDonation.donors && newDonation.quantity) {
      setBloodData([...bloodData, newDonation]);
      toast.success("Donation added successfully!");
      setNewDonation({ bloodGroup: "", donors: "", quantity: "" });
      // Trigger Animation: Slide up for new donation row
      const lastRow = document.querySelector("tbody tr:last-child");
      lastRow.classList.add("new-donation-row");
      setTimeout(() => {
        lastRow.classList.remove("new-donation-row");
      }, 1000); // Remove class after animation
    } else {
      toast.error("Please fill in all fields!");
    }
  };

  return (
    <div className="blood-bank-container">
      <h1>Blood Bank Management</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by blood group..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn">
          <FaSearch /> Search
        </button>
      </div>
      <div className="blood-data">
        <h2>Available Blood Data</h2>
        <table>
          <thead>
            <tr>
              <th>Blood Group</th>
              <th>Donors</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {bloodData.map((data, index) => (
              <tr key={index}>
                <td>{data.bloodGroup}</td>
                <td>{data.donors}</td>
                <td>{data.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="donation-section">
        <h2>Add Blood Donation</h2>
        <select
          value={newDonation.bloodGroup}
          onChange={(e) =>
            setNewDonation({ ...newDonation, bloodGroup: e.target.value })
          }
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input
          type="number"
          placeholder="Number of Donors"
          value={newDonation.donors}
          onChange={(e) =>
            setNewDonation({ ...newDonation, donors: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Quantity (e.g., 2L)"
          value={newDonation.quantity}
          onChange={(e) =>
            setNewDonation({ ...newDonation, quantity: e.target.value })
          }
        />
        <button onClick={handleDonation} className="donate-btn">
          <FaPlus /> Add Donation
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bloodbank;
