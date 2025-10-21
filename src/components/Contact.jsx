import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <div className="contact-grid">
        <a
          className="contact-card"
          href="mailto:gracestafford643@gmail.com"
          aria-label="Email Grace"
        >
          <span className="contact-label">Email</span>
          <span className="contact-value">gracestafford643@gmail.com</span>
        </a>

        <a
          className="contact-card"
          href="tel:+14433981030"
          aria-label="Call Grace"
        >
          <span className="contact-label">Phone</span>
          <span className="contact-value">(443) 398-1030</span>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/grace-643ges/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Grace's LinkedIn"
        >
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">/in/grace-643ges</span>
        </a>
      </div>
    </section>
  );
}
