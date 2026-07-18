import React from 'react';
import { portfolioData } from '../portfolioData';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>About Me</h2>
          <div style={{
            width: '40px',
            height: '4px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Bio Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8'
            }}>
              {portfolioData.personal.bio}
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8'
            }}>
              I believe in writing clean, modular code and crafting pixel-perfect interfaces that delight users. Outside of coding, I love experimenting with UI interactions and keeping up with the latest design systems trends.
            </p>
            
            {/* Resume Button */}
            <div style={{ marginTop: '1rem' }}>
              <a 
                href={portfolioData.personal.resumeUrl} 
                className="btn btn-secondary"
                style={{
                  padding: '0.8rem 1.8rem'
                }}
              >
                Download Resume
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Skills Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {portfolioData.skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="glass-card" 
                style={{ 
                  padding: '1.8rem',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <h3 style={{
                  fontSize: '1.15rem',
                  marginBottom: '1.2rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase'
                }}>
                  {skillGroup.category}
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '20px',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-primary)';
                        e.target.style.color = 'var(--text-primary)';
                        e.target.style.background = 'rgba(129, 140, 248, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
