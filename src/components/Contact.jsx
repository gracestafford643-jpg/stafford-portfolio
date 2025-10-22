import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
 <section className="contact-section" id="contact">
  <h2>Get In Touch</h2>
  <div className="contact-grid">
    <div className="contact-card">
      <i className="fas fa-envelope"></i>
      <p>Email</p>
      <a href="mailto:gracestafford643@gmail.com">gracestafford643@gmail.com</a>
    </div>
    <div className="contact-card">
      <i className="fas fa-phone"></i>
      <p>Phone</p>
      <a href="tel:+14433981030">(443) 398-1030</a>
    </div>
    <div className="contact-card">
      <i className="fab fa-linkedin"></i>
      <p>LinkedIn</p>
      <a href="https://www.linkedin.com/in/grace-643ges/" target="_blank" rel="noreferrer">
        /in/grace-643ges
      </a>
    </div>
  </div>
</section>

  );
}
