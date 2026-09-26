import React, { useState } from 'react';
import { Terminal, CheckCircle2, Cpu, Globe, Layers } from 'lucide-react';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('system');

  return (
    <div
      style={{
        borderRadius: 'var(--radius-xl)',
        backgroundColor: '#0A0E1A',
        border: '1px solid var(--border-active)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 123, 255, 0.15)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
      }}
    >
      {/* Terminal Window Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          backgroundColor: '#0F1526',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
          <span style={{ marginLeft: '12px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>shareef-studio-v1.0.env</span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('system')}
            style={{
              padding: '4px 10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: activeTab === 'system' ? 'var(--accent-blue)' : 'transparent',
              color: activeTab === 'system' ? '#FFF' : 'var(--text-muted)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Studio
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            style={{
              padding: '4px 10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: activeTab === 'stack' ? 'var(--accent-blue)' : 'transparent',
              color: activeTab === 'stack' ? '#FFF' : 'var(--text-muted)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Stack
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div style={{ padding: '24px', fontSize: '0.85rem', lineHeight: '1.7', color: '#D1D5DB' }}>
        {activeTab === 'system' ? (
          <div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>// Shareef Technologies Studio Initialization</p>
            <p><span style={{ color: 'var(--accent-blue-light)' }}>$</span> shareef-studio status --verbose</p>
            <div style={{ marginTop: '12px', paddingLeft: '8px', borderLeft: '2px solid var(--accent-blue)' }}>
              <p style={{ color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} /> Founder: Musah Shareef [Lead Engineer]
              </p>
              <p style={{ color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} /> Location: Ghana 🇬🇭
              </p>
              <p style={{ color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={14} /> Flagship: Gist (University Social Platform)
              </p>
              <p style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Cpu size={14} /> Systems: Android (AppWidgets) + iOS (WidgetKit)
              </p>
            </div>
            
            <div style={{ marginTop: '16px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '6px' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                status: <span style={{ color: '#4ADE80' }}>OPERATIONAL</span> | focus: Mobile & Web Software Engineering
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>// Primary Tech Stack Verification</p>
            <p><span style={{ color: 'var(--accent-blue-light)' }}>$</span> studio-deps --inspect</p>
            
            <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div><span style={{ color: 'var(--accent-blue-light)' }}>• React / React Native:</span> v19 / v0.86</div>
              <div><span style={{ color: 'var(--accent-blue-light)' }}>• Expo Framework:</span> SDK 57</div>
              <div><span style={{ color: 'var(--accent-blue-light)' }}>• Firebase Services:</span> Auth & Firestore</div>
              <div><span style={{ color: 'var(--accent-blue-light)' }}>• State Mgmt:</span> Zustand</div>
              <div><span style={{ color: 'var(--accent-blue-light)' }}>• Android Native:</span> Java AppWidgets</div>
              <div><span style={{ color: 'var(--accent-blue-light)' }}>• iOS Native:</span> Swift WidgetKit</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}