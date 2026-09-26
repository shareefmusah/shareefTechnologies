import React from 'react';
import { projectsList } from '../data/projectsData';
import { Layers, ArrowUpRight } from 'lucide-react';

export default function OtherProjects() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <span>Engineering Highlights</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '700' }}>
            Systems & Subsystem Architecture
          </h2>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projectsList.map((project) => (
            <div key={project.id} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    color: 'var(--accent-blue-light)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    border: '1px solid rgba(0, 123, 255, 0.2)'
                  }}>
                    {project.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.category}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {project.name}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}