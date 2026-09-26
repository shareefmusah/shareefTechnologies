import React, { useEffect, useState } from 'react';

export default function FixedBackgroundVisual() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleValue = 1 + scrollProgress * 0.05;
  const opacityValue = Math.max(0.85 - scrollProgress * 0.2, 0.5);

  return (
    <div className="fixed-bg-stage" aria-hidden="true">
      <div
        className="fixed-bg-wrapper"
        style={{
          transform: `scale(${scaleValue})`,
          opacity: opacityValue,
          transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        }}
      >
        <img
          src="/background.jpg"
          alt=""
          className="fixed-bg-image"
        />
        <div className="fixed-bg-vignette" />
      </div>
    </div>
  );
}