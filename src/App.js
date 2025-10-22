import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Professional Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

export default App;
