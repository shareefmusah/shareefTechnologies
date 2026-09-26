import React from 'react';
import { Cpu } from 'lucide-react';

export default function TechStackSection() {
  const technologies = [
    { name: 'React', desc: 'Modern Web UI Library' },
    { name: 'React Native', desc: 'Cross-Platform Mobile Framework' },
    { name: 'Expo', desc: 'React Native Tooling & SDK 57' },
    { name: 'Firebase', desc: 'Authentication & Firestore Realtime' },
    { name: 'JavaScript', desc: 'Core Application Logic' },
    { name: 'Node.js', desc: 'Runtime & Build Tools' },
    { name: 'Cloudflare', desc: 'Edge CDN & DNS Security' },
    { name: 'Git & GitHub', desc: 'Version Control & CI Pipeline' }
  ];

  return (
    <section id="technologies" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Cpu size={14} />
            <span>Technologies</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '700' }}>
            Engineered with modern toolchains
          </h2>
        </div>

        {/* Tech Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
          {technologies.map((t) => (
            <div
              key={t.name}
              className="glass-card"
              style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                {t.name}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}