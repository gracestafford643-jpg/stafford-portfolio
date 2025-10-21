import React from 'react';
import './Projects.css';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
