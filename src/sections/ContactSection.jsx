import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-active)',
            padding: '48px',
            boxShadow: '0 20px 50px -15px var(--accent-glow)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-glow" style={{ marginBottom: '16px' }}>
              <Mail size={14} />
              <span>Get in Touch</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '12px' }}>
              Have a product or project in mind?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Reach out to Shareef Technologies for inquiries, technical collaboration, or software development.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 0' }}>
              <CheckCircle2 size={48} color="#4ADE80" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>Thank you for reaching out!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Your message has been received. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Kwame"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(7, 9, 14, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(7, 9, 14, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Project Description / Inquiry
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about your software project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(7, 9, 14, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px var(--accent-glow)',
                  transition: 'all 0.2s ease',
                  marginTop: '8px'
                }}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}