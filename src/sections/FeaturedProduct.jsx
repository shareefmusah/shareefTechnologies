import React, { useState } from 'react';
import { gistInfo } from '../data/gistData';
import { Sparkles, Smartphone, Layers, ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';

export default function FeaturedProduct() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="gist" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>Featured Product</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', marginBottom: '16px' }}>
            Introducing <span className="gradient-text">{gistInfo.title}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {gistInfo.subtitle} — {gistInfo.tagline}
          </p>
        </div>

        {/* Featured Card Showcase */}
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-active)',
            padding: '48px',
            boxShadow: '0 20px 40px -15px var(--accent-glow)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="product-showcase"
        >
          {/* Left Specs & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <img
                src={gistInfo.logoUrl}
                alt="Gist Logo"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
                  backgroundColor: '#0B1630'
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', lineHeight: '1.2' }}>{gistInfo.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue-light)', fontWeight: '500' }}>Developed by Shareef Technologies</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
              {gistInfo.description}
            </p>

            {/* Feature Highlights Accordion/Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {gistInfo.highlights.map((h, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activeTab === i ? 'rgba(0, 123, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    border: activeTab === i ? '1px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: activeTab === i ? 'var(--accent-blue-light)' : 'var(--text-primary)', marginBottom: '4px' }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                Engineered With:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {gistInfo.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Product Mockup Display */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                backgroundColor: '#07090E',
                border: '1px solid var(--border-subtle)',
                padding: '24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={gistInfo.logoUrl}
                  alt="Gist App Preview"
                  style={{ width: '120px', height: '120px', borderRadius: '28px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                />
              </div>

              <h4 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>Gist Mobile Experience</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '320px', margin: '0 auto 24px' }}>
                Real-time university feeds, Android AppWidgets & iOS WidgetKit integrations built for effortless student engagement.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', textAlign: 'left', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--accent-blue-light)', display: 'block', fontWeight: '600' }}>Platform</span>
                  Android & iOS
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: '#4ADE80', display: 'block', fontWeight: '600' }}>Backend</span>
                  Firebase Realtime
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .product-showcase {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}