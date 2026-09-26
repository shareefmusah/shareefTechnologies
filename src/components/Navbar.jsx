import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gist Product', path: '/product' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Developer', path: '/founder' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(7, 9, 14, 0.9)' : 'rgba(7, 9, 14, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        padding: '18px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Wordmark */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--accent-blue), #0056B3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 0 15px var(--accent-glow)'
          }}>
            <Terminal size={20} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              display: 'block',
              lineHeight: '1.1'
            }}>
              Shareef <span style={{ color: 'var(--accent-blue-light)' }}>Technologies</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-blue-light)' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? '600' : '500',
                transition: 'color 0.2s ease',
                borderBottom: isActive ? '2px solid var(--accent-blue-light)' : '2px solid transparent',
                paddingBottom: '4px'
              })}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/product"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--accent-blue)',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: '600',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              boxShadow: '0 4px 12px var(--accent-glow)',
            }}
          >
            View Gist <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '6px',
            display: 'none',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '73px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-dark)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-blue-light)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: isActive ? '600' : '500',
                padding: '8px 0',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}