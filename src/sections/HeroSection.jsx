import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>


        {/* Confident Headline */}
        <h1 className="hero-title">
          SHAREEF TECHNOLOGIES
        </h1>

        {/* Subheading */}
        <p className="hero-subtitle">
          Building modern digital products.
        </p>

        {/* Description */}
        <p className="hero-description" style={{ margin: '0 0 36px', maxWidth: '620px' }}>
          Software, mobile apps and digital experiences built from Ghana.
        </p>

        {/* CTA Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: '40px' }}>
          <Link
            to="/product"
            className="hero-primary-cta"
          >
            Explore Our Work <ArrowRight size={18} />
          </Link>

          <Link
            to="/about"
            className="hero-secondary-cta"
          >
            About Shareef Technologies
          </Link>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down" style={{ alignItems: 'flex-start' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll to explore</span>
          <ChevronDown size={16} className="pulse-arrow" />
        </a>

      </div>
    </section>
  );
}