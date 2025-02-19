import React, { useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Home.css';
import { FaUserMd, FaHeartbeat, FaBaby } from "react-icons/fa";
import { FaStethoscope, FaSyringe, FaHospitalAlt, FaVials } from 'react-icons/fa';
import image1 from "../assets/facility.png";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "all 1s ease-out";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, index * 200); 
    });
  }, []);

    const testimonials = [
      {
        name: "John Doe",
        feedback: "The services were excellent! Highly recommended.",
        designation: "Software Engineer",
      },
      {
        name: "Jane Smith",
        feedback: "A seamless experience with great support!",
        designation: "Business Analyst",
      },
      {
        name: "Michael Johnson",
        feedback: "Fantastic platform for healthcare management.",
        designation: "Doctor",
      },
    ]

    const [activeQuestion, setActiveQuestion] = useState(null);

  const faq = [
    {
      question: "What is the hospital management system?",
      answer: "It is a software solution that manages all aspects of a hospital's operations, including patient management, appointments, billing, and inventory.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by logging into your account and selecting a doctor and time slot from the available options.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we ensure that all patient and hospital data is encrypted and stored securely, following industry standards for data privacy.",
    },
    {
      question: "Can I access the system from anywhere?",
      answer: "Yes, our system is cloud-based, meaning you can access it from anywhere with an internet connection.",
    },
    {
      question: "How do I make a payment?",
      answer: "Payments can be made online via our integrated payment gateway or at the hospital reception using cash or card.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index); // Toggle the answer visibility
  };


  const services = [
    { icon: <FaStethoscope />, title: 'General Check-up', description: 'Comprehensive health check-ups for all ages.' },
    { icon: <FaSyringe />, title: 'Vaccinations', description: 'Safe and timely vaccinations for your family.' },
    { icon: <FaHospitalAlt />, title: 'Emergency Care', description: '24/7 emergency services for urgent needs.' },
    { icon: <FaVials />, title: 'Lab Testing', description: 'Accurate and quick diagnostic tests.' },
  ];

  const handleSuccessToast = () => {
    toast.success('Feedback submitted successfully!');
  };

  const handleErrorToast = () => {
    toast.error('There was an error submitting your feedback!');
  };

  return (
    <div className="home-container">
      {/* Toastify */}
      <ToastContainer />

      {/* Header Section */}
      <div className="home-container">
      {/* Hero Section */}

      <div className="home-title">
      <div className="home-title-content fade-in">
        <p className="home-subtitle fade-in">
        Your health and wellness are our top priority~
        <small>"We treat every patient with the utmost care and respect, 
          ensuring you feel supported at every step of your health journey. 
          Your well-being is our top priority, and we are here for you through every challenge. 
          Together, we will work towards a healthier, happier future. Your health matters to us, 
          and we’ll always be by your side."</small>
        </p>
      </div>
      <div className="home-title-image fade-in">
        <img src={image1} alt="Healthcare banner" />
      </div>
    </div>
    
      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>10M+</h3>
          <p>Patients Served</p>
        </div>
        <div className="feature-card">
          <h3>30K+</h3>
          <p>Doctors</p>
        </div>
        <div className="feature-card">
          <h3>50+</h3>
          <p>Cities</p>
        </div>
        <div className="feature-card">
          <h3>10+</h3>
          <p>Countries</p>
        </div>
      </div>
    </div>

      {/* Our Services */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

       {/* Meet Our Team Section */}
       <section className="team-section">
  <h2>Meet Our Team</h2>
  <div className="team-members">
    <div className="team-member">
      <div className="team-icon">
        <FaUserMd size={50} color="#166871" />
      </div>
      <h3>Dr. John Smith</h3>
      <p>Chief Surgeon</p>
      <p>
        Dr. John Smith is a highly experienced surgeon with over 20 years in
        the medical field. His dedication to patient care and surgical precision
        has made him a leader in his field.
      </p>
    </div>
    <div className="team-member">
      <div className="team-icon">
        <FaHeartbeat size={50} color="#166871" />
      </div>
      <h3>Dr. Jane Doe</h3>
      <p>Cardiologist</p>
      <p>
        Dr. Jane Doe specializes in cardiology and has helped numerous patients
        with heart conditions. Her compassionate approach and expertise in heart
        care have earned her a reputation as one of the best cardiologists.
      </p>
    </div>
    <div className="team-member">
      <div className="team-icon">
        <FaBaby size={50} color="#166871" />
      </div>
      <h3>Dr. Emily Brown</h3>
      <p>Pediatrician</p>
      <p>
        Dr. Emily Brown is dedicated to providing high-quality pediatric care.
        She has a special interest in child development and preventive
        healthcare for children of all ages.
      </p>
    </div>
  </div>
</section>

<hr />


      {/* Admin Feedback Section */}
      <section className="admin-feedback-section">
        <h2> Feedback Submission</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSuccessToast(); }}>
          <textarea placeholder="Write your feedback..." required />
          <button type="submit">Submit Feedback</button>
        </form>
      </section>

        {/* Feedback */}
        <div className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </div>
      <hr />

      
      {/* Frequently Asked Questions */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faq.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <p className="faq-question-text">{item.question}</p>
                <span className={`faq-arrow ${activeQuestion === index ? "open" : ""}`}>&#9660;</span>
              </div>
              <div className={`faq-answer ${activeQuestion === index ? "show" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
