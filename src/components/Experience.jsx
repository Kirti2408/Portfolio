import React from 'react';
import { portfolioData } from '../portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Double Section Title/Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Work Experience Column */}
          <div>
            <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Experience</h2>
              <div style={{
                width: '40px',
                height: '4px',
                background: 'var(--accent-gradient)',
                borderRadius: '2px'
              }}></div>
            </div>

            <div style={{
              position: 'relative',
              padding: '0.5rem 0'
            }}>
              {/* Timeline Line */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '0',
                bottom: '0',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--accent-primary) 0%, rgba(255, 255, 255, 0.05) 100%)'
              }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                    {/* Node Dot */}
                    <div style={{
                      position: 'absolute',
                      left: '4px',
                      top: '6px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'var(--bg-primary)',
                      border: '3px solid var(--accent-primary)',
                      boxShadow: '0 0 8px var(--accent-primary)',
                      zIndex: 2
                    }}></div>

                    <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.015)' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        float: 'right',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}>
                        {exp.period}
                      </span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '0.8rem' }}>
                        {exp.company}
                      </div>

                      <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {exp.description.map((desc, idx) => (
                          <li key={idx} style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.5',
                            position: 'relative',
                            paddingLeft: '1rem'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: 0,
                              top: '7px',
                              width: '3px',
                              height: '3px',
                              borderRadius: '50%',
                              background: 'var(--accent-secondary)'
                            }}></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Education</h2>
              <div style={{
                width: '40px',
                height: '4px',
                background: 'var(--accent-gradient)',
                borderRadius: '2px'
              }}></div>
            </div>

            <div style={{
              position: 'relative',
              padding: '0.5rem 0'
            }}>
              {/* Timeline Line */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '0',
                bottom: '0',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--accent-secondary) 0%, rgba(255, 255, 255, 0.05) 100%)'
              }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                    {/* Node Dot */}
                    <div style={{
                      position: 'absolute',
                      left: '4px',
                      top: '6px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'var(--bg-primary)',
                      border: '3px solid var(--accent-secondary)',
                      boxShadow: '0 0 8px var(--accent-secondary)',
                      zIndex: 2
                    }}></div>

                    <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.015)' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--accent-secondary)',
                        float: 'right',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}>
                        {edu.status}
                      </span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        {edu.degree}
                      </h3>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        {edu.institution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
