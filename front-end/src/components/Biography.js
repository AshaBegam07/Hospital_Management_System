import React from "react";
import "../styles/biography.css"

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
    

        {/* Text Section */}
        <div className="banner">
          <h3 className="biography-title">Who We Are</h3>
          <p className="biography-intro">
            Medicare Medical Institute is dedicated to redefining healthcare
            through innovation, compassion, and excellence. Our multidisciplinary
            team combines expertise with cutting-edge technology to provide
            holistic medical care tailored to every patient's unique needs.
          </p>
          <p className="biography-details">
            At Medicare, we believe in a patient-centered approach, where each
            individual is treated with the utmost respect and attention. We
            continuously strive to stay at the forefront of medical advancements,
            ensuring the highest standards of care and outcomes.
          </p>
          <p className="biography-vision">
            Our mission is to empower healthier lives by promoting wellness,
            preventive care, and advanced treatment options. Together, we are
            building a healthier, happier community.
          </p>
          <p className="biography-closing">
            Join us on our journey to make a meaningful impact in the field of
            healthcare. Medicare Medical Institute — where your health comes
            first.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
