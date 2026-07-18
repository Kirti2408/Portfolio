import React, { useState, useEffect } from 'react';
import { portfolioData } from '../portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Theme toggle handler
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Scroll event listener for changing navbar opacity/background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver for tracking active section
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Triggers when section occupies middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      background: scrolled ? 'var(--card-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
      borderBottomLeftRadius: scrolled ? '24px' : '0',
      borderBottomRightRadius: scrolled ? '24px' : '0',
      transition: 'var(--transition-smooth)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo and Name */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem'
        }}>
          {portfolioData.personal.logoImage ? (
            <img 
              src={portfolioData.personal.logoImage} 
              alt="Kirti Codecraft Logo" 
              style={{
                height: '35px',
                width: 'auto',
                borderRadius: '6px',
                objectFit: 'contain'
              }}
            />
          ) : null}
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.4rem 0',
                  opacity: activeSection === item.id ? 1 : 0.8
                }}
              >
                {item.label}
                {/* Active Indicator Underline */}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--accent-gradient)',
                  transform: activeSection === item.id ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease'
                }}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls (Theme Toggle + Contact Button) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Light/Dark Mode Switch Button */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--card-border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
          >
            {theme === 'dark' ? (
              // Sun Icon for Dark Mode (Toggles to Light Mode)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon for Light Mode (Toggles to Dark Mode)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Let's talk */}
          <a 
            href="#contact" 
            className="btn btn-secondary"
            style={{
              padding: '0.5rem 1.2rem',
              fontSize: '0.85rem'
            }}
          >
            Let's talk
          </a>
        </div>
      </div>
    </nav>
  );
}
