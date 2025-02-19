import React, { useState } from "react";
import { FaUserMd, FaPaperPlane } from "react-icons/fa";
import "../styles/Messages.css";

const doctorsList = [
  { id: 1, name: "Dr. Smith", specialization: "Cardiologist" },
  { id: 2, name: "Dr. Jane", specialization: "Dermatologist" },
  { id: 3, name: "Dr. Adams", specialization: "Neurologist" },
  { id: 4, name: "Dr. Taylor", specialization: "Orthopedic" },
  { id: 5, name: "Dr. Brown", specialization: "Pediatrician" },
];

const Messages = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [isAITyping, setIsAITyping] = useState(false);

  // Simulated AI response logic
  const simulateAIResponse = (doctorId) => {
    const aiResponses = [
      "Thank you for your message. How can I assist you?",
      "Please share more details about your concern.",
      "I'm here to help you. Let me know your symptoms.",
    ];

    const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];

    setIsAITyping(true);

    setTimeout(() => {
      const aiMessage = {
        doctorId,
        user: selectedDoctor.name,
        message: response,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => ({
        ...prev,
        [doctorId]: [...(prev[doctorId] || []), aiMessage],
      }));

      setIsAITyping(false);
    }, 1500);
  };

  const sendMessage = () => {
    if (message.trim() && selectedDoctor) {
      const userMessage = {
        doctorId: selectedDoctor.id,
        user: "You",
        message,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => ({
        ...prev,
        [userMessage.doctorId]: [...(prev[userMessage.doctorId] || []), userMessage],
      }));

      setMessage("");

      // Trigger AI response
      simulateAIResponse(selectedDoctor.id);
    }
  };

  return (
    <div className="messages-container">
      <div className="doctors-list">
        <h3>Doctors</h3>
        {doctorsList.map((doctor) => (
          <div
            key={doctor.id}
            className={`doctor-item ${selectedDoctor?.id === doctor.id ? "selected" : ""}`}
            onClick={() => setSelectedDoctor(doctor)}
          >
            <FaUserMd className="doctor-icon" />
            <div>
              <p className="doctor-name">{doctor.name}</p>
              <p className="doctor-specialization">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-area">
        {selectedDoctor ? (
          <>
            <div className="chat-header">
              <h3>Chat with {selectedDoctor.name}</h3>
            </div>
            <div className="chat-body">
              {(messages[selectedDoctor.id] || []).map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.user === "You" ? "patient" : "ai"}`}
                >
                  <p>
                    <strong>{msg.user}:</strong> {msg.message}
                  </p>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
              ))}

              {isAITyping && (
                <div className="chat-message ai">
                  <p>
                    <em>{selectedDoctor.name} is typing...</em>
                  </p>
                </div>
              )}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={sendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="no-doctor">
            <p>Select a doctor to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
