import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
   <section className="hero-section">
  <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Grace Stafford" className="hero-image" />
  <h1>Grace Stafford</h1>
  <h3>Digital Analytics Engineer & Web Developer</h3>
  <a
    href="https://www.linkedin.com/in/grace-643ges/"
    target="_blank"
    rel="noopener noreferrer"
    className="cta"
  >
    Let’s Connect
  </a>
</section>

  );
}

