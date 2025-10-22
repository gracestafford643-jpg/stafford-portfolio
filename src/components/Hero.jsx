import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I’m <span>Grace Stafford</span> 👋</h1>
        <p>
          Digital Analytics Engineer & Web Developer passionate about creating data-driven,
          user-focused web experiences.
        </p>
        <a href="#experience" className="cta">View My Work</a>
      </div>
    </section>
  );
}

