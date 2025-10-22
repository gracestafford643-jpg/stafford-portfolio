import React from 'react';
import './About.css';
import profilePic from '../images/profile.jpg'; // we’ll add this image next!

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Grace Stafford — a Digital Analytics Engineer & Web Developer with a passion
            for turning data and design into actionable insights. My background spans
            implementing advanced tag management strategies, building modern web experiences,
            and optimizing performance across digital ecosystems.
          </p>
          <p>
            When I’m not debugging event tracking or coding new projects, I’m probably exploring
            the outdoors, training for my next half marathon, or cooking up something new in the kitchen.
          </p>
        </div>
      </div>
    </section>
  );
}
