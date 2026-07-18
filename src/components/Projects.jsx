import React from 'react';
import { portfolioData } from '../portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Title */}
        <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Featured Projects</h2>
          <div style={{
            width: '40px',
            height: '4px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {portfolioData.projects.map((project) => (
            <article 
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}
            >

              {/* Project Card Header Visual */}
              <div style={{
                height: '160px',
                background: project.imageColor,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {/* Grid Pattern overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}></div>
                
                {/* Big decorative Title Initial */}
                <span style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'white',
                  opacity: 0.8,
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {project.title.split(' ')[0]}
                </span>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.8rem',
                  fontWeight: 600
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '1.2rem'
                }}>
                  {project.description}
                </p>

                {/* Features List */}
                {project.features && (
                  <div style={{ marginBottom: '1.2rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Features</div>
                    <ul style={{
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem'
                    }}>
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                          position: 'relative',
                          paddingLeft: '0.9rem',
                          lineHeight: '1.3'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            top: '6px',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'var(--accent-secondary)'
                          }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Tags (Pushes down to align card bottom) */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.5rem',
                  marginTop: 'auto'
                }}>
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(129, 140, 248, 0.08)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links (Rendered only if URLs exist) */}
                {(project.githubLink || project.liveLink) && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '1.2rem'
                  }}>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Code
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
