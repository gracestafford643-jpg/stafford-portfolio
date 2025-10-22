import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Grace Stafford - Software Developer</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
