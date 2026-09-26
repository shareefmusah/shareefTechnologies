import React from 'react';
import { companyInfo } from '../data/companyData';
import { Smartphone, Code, Layout, Server, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const iconMap = {
    Smartphone: <Smartphone size={24} color="var(--accent-blue-light)" />,
    Code: <Code size={24} color="var(--accent-blue-light)" />,
    Layout: <Layout size={24} color="var(--accent-blue-light)" />,
    Server: <Server size={24} color="var(--accent-blue-light)" />
  };

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '60px' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <span>About Shareef Technologies</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', marginBottom: '16px' }}>
            Independent software craftsmanship from Ghana.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Shareef Technologies is a focused software studio founded by <strong>{companyInfo.founder}</strong>. We specialize in building user-centered mobile applications and web systems with strong technical execution.
          </p>
        </div>

        {/* Services / Core Competencies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {companyInfo.services.map((service, i) => (
            <div key={i} className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                border: '1px solid rgba(0, 123, 255, 0.2)'
              }}>
                {iconMap[service.icon]}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px', color: 'var(--text-primary)' }}>
                {service.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Principles Banner */}
        <div className="glass-panel" style={{ marginTop: '48px', padding: '32px', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={20} color="var(--accent-blue-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>No Bloatware</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Clean codebase architecture designed for performance.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={20} color="var(--accent-blue-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Genuine Metrics</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Transparent development with zero fake fluff.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={20} color="var(--accent-blue-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Cross-Platform</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Unified UI systems for Android, iOS, and Web.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}