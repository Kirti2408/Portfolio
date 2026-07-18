import React, { useState } from 'react';
import { portfolioData } from '../portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const accessKey = portfolioData.personal.web3formsKey;
    if (!accessKey || accessKey.includes("YOUR_")) {
      // Simulation fallback if key is not configured
      alert("Note: Web3Forms Access Key is not configured in portfolioData.js yet! Simulating successful message submission.");
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Enquiry from ${formData.name}`
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please check your Web3Forms Access Key.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ overflow: 'hidden' }}>
      {/* Background ambient glow */}
      <div className="ambient-glow glow-bottom-right pulse-glow" style={{ bottom: '-15%', right: '-10%', background: 'var(--accent-primary)', opacity: 0.1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Get In Touch</h2>
          <div style={{
            width: '40px',
            height: '4px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Let's build something great</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Have a project in mind or just want to chat? Shoot me a message, and let's create something together. I'm always open to discussing new products, design systems, and frontend challenges.
              </p>
            </div>

            {/* Simple Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(129, 140, 248, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>EMAIL ME</div>
                  <a href={`mailto:${portfolioData.personal.email}`} style={{ fontSize: '1rem', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              {portfolioData.personal.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(129, 140, 248, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>CALL ME</div>
                    <a href={`tel:${portfolioData.personal.phone}`} style={{ fontSize: '1rem', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(129, 140, 248, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>LOCATION</div>
                  <span style={{ fontSize: '1rem', fontWeight: 500 }}>
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem', padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder=" " 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="name" className={`form-label ${focusedField === 'name' || formData.name ? 'floating' : ''}`}>Your Name</label>
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder=" " 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email" className={`form-label ${focusedField === 'email' || formData.email ? 'floating' : ''}`}>Email Address</label>
                </div>

                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="form-input" 
                    placeholder=" " 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    style={{ resize: 'vertical' }}></textarea>
                  <label htmlFor="message" className={`form-label ${focusedField === 'message' || formData.message ? 'floating' : ''}`}>Your Message</label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={submitting}
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
