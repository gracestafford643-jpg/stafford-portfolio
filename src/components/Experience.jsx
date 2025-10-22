import React, { useState } from "react";
import "./Experience.css";
import { projects } from "../data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-grid">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`experience-card ${expandedIndex === i ? "expanded" : ""}`}
            onClick={() => handleToggle(i)}
          >
            <div className="experience-header">
              <h3>{proj.title}</h3>
              <p className="date">{proj.date}</p>
            </div>
            <p className="short-desc">{proj.shortDescription}</p>

            {expandedIndex === i && (
              <ul className="details">
                {proj.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
                {proj.link && (
                  <li className="example-link">
                    <a href={proj.link} target="_blank" rel="noreferrer">
                      View Example ↗
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
