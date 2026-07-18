import React from 'react';
import { portfolioData } from '../portfolioData';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glows */}
      <div className="ambient-glow glow-top-left pulse-glow" style={{ top: '-10%', left: '-15%' }}></div>
      <div className="ambient-glow glow-bottom-right" style={{ bottom: '-10%', right: '-15%', background: 'var(--accent-secondary)' }}></div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}>
        {/* Responsive Grid layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          textAlign: 'left'
        }}>
          {/* Intro text column */}
          <div style={{ order: 1 }}>
            {/* Animated Badge */}
            <div 
              className="animate-float" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                background: 'rgba(129, 140, 248, 0.08)',
                border: '1px solid rgba(129, 140, 248, 0.15)',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                color: 'var(--accent-primary)',
                fontWeight: 500
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                background: '#10b981', // green indicator
                borderRadius: '50%',
                boxShadow: '0 0 10px #10b981'
              }}></span>
              Open to new opportunities
            </div>

            {/* Hero Headings */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              lineHeight: '1.15',
              marginBottom: '1.2rem',
              fontWeight: 800
            }}>
              Hi, I'm <span className="text-gradient" style={{ whiteSpace: 'nowrap' }}>{portfolioData.personal.name}</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '2.5rem',
              fontWeight: 400
            }}>
              {portfolioData.personal.subtitle}
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#projects" className="btn btn-primary">
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Photo Column */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: window.innerWidth < 768 ? 0 : 2, // Photo on top on mobile, on right on desktop
            position: 'relative'
          }}>
            {/* Background glowing circle */}
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              opacity: 0.25,
              filter: 'blur(30px)',
              zIndex: 0
            }}></div>

            {/* Picture frame */}
            <div 
              className="glass-card"
              style={{
                width: '320px',
                height: '320px',
                padding: '0.75rem',
                borderRadius: '24px',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                transform: 'rotate(2deg)',
                transition: 'var(--transition-spring)',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(2deg) scale(1)';
              }}
            >
              {portfolioData.personal.profileImage ? (
                <img 
                  src={portfolioData.personal.profileImage} 
                  alt={portfolioData.personal.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  fontWeight: 800,
                  color: 'white'
                }}>
                  {portfolioData.personal.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
