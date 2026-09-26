import React from 'react';
import { User, MapPin, Code, ShieldCheck, Terminal, Award } from 'lucide-react';

export default function FounderSection() {
  const skills = [
    'React', 'React Native', 'Expo SDK', 'Firebase',
    'JavaScript', 'TypeScript', 'Node.js',
    'Software Testing & QA', 'UI/UX Architecture', 'Cloudflare'
  ];

  return (
    <section id="founder" className="section-padding">
      <div className="container">
        <div className="glass-card founder-grid" style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Founder Profile Card */}
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-subtle)', paddingRight: '36px' }} className="founder-card-left">
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-surface)',
              border: '2px solid var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 0 25px var(--accent-glow)',
              color: 'var(--accent-blue-light)'
            }}>
              <User size={56} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '6px' }}>Musah Shareef</h3>
            <p style={{ color: 'var(--accent-blue-light)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '12px' }}>
              Founder & Lead Systems Developer
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <MapPin size={16} /> Ghana 🇬🇭
            </div>
          </div>

          {/* Right Founder Bio & Skills */}
          <div>
            <div className="badge-glow" style={{ marginBottom: '16px' }}>
              <span>Meet the Developer</span>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '16px' }}>
              Driven by product quality & native performance.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Musah Shareef is a software engineer based in Ghana. As the founder of Shareef Technologies, he leads the design, development, and system architecture for digital products like Gist. His technical focus spans full-stack JavaScript, mobile app development with React Native/Expo, and real-time cloud backends.
            </p>

            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Core Technical Proficiencies
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(0, 123, 255, 0.08)',
                    border: '1px solid rgba(0, 123, 255, 0.2)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
          .founder-card-left {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle) !important;
            padding-right: 0 !important;
            padding-bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}