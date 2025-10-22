import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>

      <div className="experience-container">

        {/* MEDIFAST */}
        <div className="experience-card">
          <h3>Software Developer — Medifast Inc.</h3>
          <p className="date">2022 – Present</p>
          <ul>
            <li>Lead the design and implementation of <strong>digital data capture strategies</strong> using HTML, CSS, JavaScript, and Tealium.</li>
            <li>Built and optimized <strong>scalable, user-facing solutions</strong> and A/B testing integrations via Optimizely.</li>
            <li>Collaborated with engineers and analysts to improve <strong>data accuracy and web performance</strong> across enterprise platforms.</li>
            <li>Mentored contractors and managed end-to-end analytics implementation pipelines.</li>
          </ul>
        </div>

        {/* CORSICA */}
        <div className="experience-card">
          <h3>Software Developer — Corsica Enterprise LLC</h3>
          <p className="date">2022 – 2025</p>
          <ul>
            <li>Developed full-stack web applications using <strong>React, .NET, and SQL Server</strong>, ensuring performance and maintainability.</li>
            <li>Implemented <strong>data-driven features and API integrations</strong> for analytics and business intelligence use cases.</li>
            <li>Refactored codebases to modern standards and improved backend efficiency with <strong>optimized SQL queries</strong>.</li>
          </ul>
        </div>

        {/* CAROLINA AGENCY */}
        <div className="experience-card">
          <h3>Creative Technologist — The Carolina Agency</h3>
          <p className="date">2019 – 2020</p>
          <ul>
            <li>Created interactive digital campaigns and <strong>Snapchat AR experiences</strong> using JavaScript and Lens Studio.</li>
            <li>Collaborated with designers and developers to balance <strong>visual creativity with technical precision</strong>.</li>
          </ul>
        </div>
      </div>

      <div className="resume-button-wrapper">
        <a
          href="/Grace_Stafford_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}

export default Experience;
