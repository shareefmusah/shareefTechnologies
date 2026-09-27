import React, { useState } from 'react';
import { gistInfo } from '../data/gistData';
import { Sparkles, Smartphone, ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';

export default function FeaturedProduct() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="gist" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>Official Release</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', marginBottom: '16px' }}>
            Get <span className="gradient-text">{gistInfo.title}</span> for Mobile
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Official download links for university students on Android & iOS.
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
          }}
          className="product-showcase"
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
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue-light)', fontWeight: '500' }}>Official Build by Shareef Technologies</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '28px' }}>
              {gistInfo.description}
            </p>

            {/* Official Store Buttons */}
            <div style={{ marginBottom: '32px' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                Download Authentic App:
              </span>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={gistInfo.downloadLinks.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-active)',
                    color: '#FFF',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'var(--accent-blue-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'var(--border-active)';
                  }}
                >
                  <Download size={18} color="var(--accent-blue-light)" />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '400', lineHeight: '1' }}>GET IT ON</span>
                    Google Play
                  </div>
                </a>

                <a
                  href={gistInfo.downloadLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-subtle)',
                    color: '#FFF',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <Download size={18} color="#FFF" />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '400', lineHeight: '1' }}>DOWNLOAD ON THE</span>
                    App Store
                  </div>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px', fontSize: '0.8rem', color: '#4ADE80' }}>
                <ShieldCheck size={16} /> Verified Authentic Build â€¢ Package: com.gistapp.gist
              </div>
            </div>

            {/* Feature Highlights Accordion/Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {gistInfo.highlights.map((h, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activeTab === i ? 'rgba(0, 123, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    border: activeTab === i ? '1px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: activeTab === i ? 'var(--accent-blue-light)' : 'var(--text-primary)', marginBottom: '2px' }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Product Mockup & Security Verification Display */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                backgroundColor: '#07090E',
                border: '1px solid var(--border-subtle)',
                padding: '28px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={gistInfo.logoUrl}
                  alt="Gist App Preview"
                  style={{ width: '110px', height: '110px', borderRadius: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                />
              </div>

              <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px' }}>Gist Mobile Application</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '320px', margin: '0 auto 20px' }}>
                Official campus social platform with Android AppWidgets & iOS WidgetKit integrations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Publisher</span>
                  <span style={{ color: 'var(--accent-blue-light)', fontWeight: '600' }}>Shareef Technologies</span>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Package ID</span>
                  <span style={{ color: '#4ADE80', fontWeight: '600' }}>com.gistapp.gist</span>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Security Status</span>
                  <span style={{ color: '#4ADE80', fontWeight: '600' }}>SHA-1 Verified âœ“</span>
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

