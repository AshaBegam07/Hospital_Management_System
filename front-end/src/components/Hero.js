import React from "react";
import image from "../assets/images.jpg";


const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        {/* Banner Text Section */}
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Medicare Medical Institute is a premier healthcare facility renowned
            for its exceptional medical care and cutting-edge technology. Our
            highly qualified team of doctors, specialists, and healthcare
            professionals is dedicated to delivering world-class treatments
            tailored to individual needs. With a patient-first approach, we
            strive to create a comforting and inclusive environment, ensuring
            every patient receives compassionate and personalized care. Trust
            Medicare to be your partner in achieving optimal health and wellness.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
