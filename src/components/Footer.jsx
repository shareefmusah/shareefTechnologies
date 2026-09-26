import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#05070B', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '36px', marginBottom: '48px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img
                src="/shareeftechnologies.png"
                alt="Shareef Technologies Logo"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  objectFit: 'contain'
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                Shareef <span style={{ color: 'var(--accent-blue-light)' }}>Technologies</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '320px' }}>
              Independent software studio founded by Musah Shareef in Ghana. Creator of Gist and digital product systems.
            </p>
          </div>

          {/* Quick Navigation Pages */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Pages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>About Studio</Link>
              <Link to="/product" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Gist Product</Link>
              <Link to="/technologies" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Tech Stack</Link>
              <Link to="/founder" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Developer</Link>
              <Link to="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Contact</Link>
            </div>
          </div>

          {/* Legal / Studio Meta */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Studio Meta
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <p>Founder: Musah Shareef</p>
              <p>Origin: Ghana 🇬🇭</p>
              <p>Status: Active Studio</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <p>© 2026 Shareef Technologies. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Engineered with precision in Ghana 🇬🇭
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}