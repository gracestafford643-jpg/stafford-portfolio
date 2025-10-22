import React, { useState } from "react";
import "./Experience.css";
import { projects } from "../data"; // adjust path if needed

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>

      <div className="experience-grid">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`experience-card ${activeIndex === i ? "active" : ""}`}
            onClick={() => handleCardClick(i)}
          >
            <div className="card-header">
              <h3>{proj.title}</h3>
              <p className="date">{proj.date}</p>
            </div>

            {/* Summary when collapsed */}
            {activeIndex !== i && (
              <p className="summary">{proj.description[0].slice(0, 100)}...</p>
            )}

            {/* Full list when expanded */}
            {activeIndex === i && (
              <ul className="details">
                {proj.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* View Resume Button */}
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
