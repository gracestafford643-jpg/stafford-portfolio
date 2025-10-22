import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        
        <div className="hero-left">
          <h1 className="hero-name">Grace Stafford</h1>
          <div className="hero-underline"></div>
          <h3 className="hero-title">Software Developer & Analytics Specialist</h3>
          
          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/grace-643ges/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Let’s Connect
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/Grace_Stafford_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Grace Stafford"
              className="hero-photo"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
