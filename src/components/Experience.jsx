import React, { useState } from "react";
import { projects } from "../data";
import "./Experience.css";

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {projects.map((proj, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot"></div>
            <div
              className={`timeline-card ${expanded === i ? "active" : ""}`}
              onClick={() => toggleExpand(i)}
            >
              <h3>{proj.title}</h3>
              <span className="date">{proj.date}</span>
              <p className="summary">{proj.description[0]}</p>
              {expanded === i && (
                <ul>
                  {proj.description.slice(1).map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
