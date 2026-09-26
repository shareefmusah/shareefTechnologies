import React from 'react';
import { ArrowRight, Code, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import InteractiveTerminal from '../components/InteractiveTerminal';

export default function HeroSection() {
  return (
    <section id="hero" style={{ position: 'relative', paddingTop: '150px', paddingBottom: '90px', overflow: 'hidden' }}>
      {/* Subtle Background Glow */}
      <div
        className="pulse-glow"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,123,255,0.15) 0%, rgba(7,9,14,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Hero Content */}
          <div>
            <div className="badge-glow" style={{ marginBottom: '20px' }}>
              <span className="badge-dot" />
              <span>Independent Software Studio • Ghana</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px' }}>
              Building <span className="gradient-text">thoughtful digital products</span> for the next generation.
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '540px' }}>
              Shareef Technologies is an independent software studio founded by Musah Shareef in Ghana. We design and engineer mobile applications, web platforms, and digital systems built for reliability.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#gist"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-blue)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 20px var(--accent-glow)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-blue-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-blue)')}
              >
                Explore Our Work <ArrowRight size={18} />
              </a>

              <a
                href="#founder"
                className="glass-card"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                }}
              >
                Meet the Developer
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Gist</span>
                <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Flagship Product</span>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-subtle)' }} />
              <div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-blue-light)' }} /> Ghana
                </span>
                <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Studio Origin</span>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-subtle)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Cross-Platform</span>
                <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Android, iOS, Web</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Terminal Component */}
          <div>
            <InteractiveTerminal />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}