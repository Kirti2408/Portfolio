import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero / Introduction */}
      <Hero />

      {/* About & Skills */}
      <About />

      {/* Portfolio Projects */}
      <Projects />

      {/* Work / Accomplishments Timeline */}
      <Experience />

      {/* Get In Touch */}
      <Contact />

      {/* Footer copyright & links */}
      <Footer />
    </>
  );
}
