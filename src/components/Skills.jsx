import React from "react";
import "./Skills.css";
import { Code2, Layers, BarChart3, Database, Wrench } from "lucide-react";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">

        <div className="skill-category">
          <Code2 className="skill-icon" />
          <h3>Languages & Frameworks</h3>
          <p>HTML, CSS, JavaScript, TypeScript, SQL, C#, Python, React, Node.js, .NET</p>
        </div>

        <div className="skill-category">
          <Layers className="skill-icon" />
          <h3>Web & Application Development</h3>
          <p>Front-end and back-end development, responsive UI/UX design, API integration, cross-browser optimization</p>
        </div>

        <div className="skill-category">
          <BarChart3 className="skill-icon" />
          <h3>Tagging & Analytics</h3>
          <p>Tealium iQ, GA4, A/B testing (Optimizely), data layer strategy, analytics QA, GDPR & CCPA compliance</p>
        </div>

        <div className="skill-category">
          <Database className="skill-icon" />
          <h3>Database & Infrastructure</h3>
          <p>SQL Server, relational database design, stored procedures, performance optimization</p>
        </div>

        <div className="skill-category">
          <Wrench className="skill-icon" />
          <h3>Tools & Platforms</h3>
          <p>Visual Studio, Git, Chrome DevTools, JIRA, Confluence, Adobe Creative Suite</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
