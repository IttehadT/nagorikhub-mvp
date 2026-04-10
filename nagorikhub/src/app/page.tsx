'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  // --- CAROUSEL LOGIC (Translated from your script) ---
  const features = [
    { icon: '🏠', iconClass: 'amber', title: 'Listing Intelligence', desc: 'AI-predicted rent ranges, gas type, electricity uptime, and water source — all in one verified card.', tags: [{ label: 'Free', c: 'teal' }, { label: 'AI Verified', c: 'amber' }, { label: 'Rent Predict', c: 'blue' }] },
    { icon: '📊', iconClass: 'teal', title: 'Livability Score', desc: 'A composite score built from safety (30%), utilities (20%), amenities (20%), transport (15%), and community reviews (15%).', tags: [{ label: 'Free', c: 'teal' }, { label: 'Weighted Score', c: 'amber' }] },
    { icon: '👨‍🏫', iconClass: 'coral', title: 'Tutor Confidence Score', desc: 'Designed for tutors and home-visit workers — day/night safety, transport access, and area sentiment all factored in.', tags: [{ label: 'Free', c: 'teal' }, { label: 'Night Safety', c: 'coral' }, { label: 'Transport', c: 'blue' }] },
    { icon: '💬', iconClass: 'blue', title: 'AI Chat (RAG)', desc: 'Ask anything: "Is Dhanmondi safe at night?" The RAG system retrieves real review context before answering.', tags: [{ label: 'Beta', c: 'coral' }, { label: 'RAG', c: 'amber' }, { label: 'NLP', c: 'blue' }] },
    { icon: '📋', iconClass: 'amber', title: 'Deep Report — ৳49', desc: 'Detailed risk breakdown, 6-month rent prediction, utility history, and full sentiment analysis — all unlockable.', tags: [{ label: 'Paid', c: 'coral' }, { label: '6-mo Prediction', c: 'amber' }, { label: 'History', c: 'teal' }] }
  ];

  const positions = [
    { x: -580, z: -120, ry: -15, scale: .85, opacity: .5 },
    { x: -290, z: -40, ry: -8, scale: .92, opacity: .75 },
    { x: 0, z: 60, ry: 0, scale: 1, opacity: 1 },
    { x: 290, z: -40, ry: 8, scale: .92, opacity: .75 },
    { x: 580, z: -120, ry: 15, scale: .85, opacity: .5 },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = (idx: number) => {
    setCurrentIdx(((idx % features.length) + features.length) % features.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => goTo(currentIdx + 1), 4000);
    return () => clearInterval(timer);
  }, [currentIdx, isHovered]);

  // --- SCROLL REVEAL LOGIC ---
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <Link href="/" className="nav-logo"><span>Nagorik</span>Hub</Link>
        <ul className="nav-links">
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#roadmap">Roadmap</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#download">Apps</Link></li>
        </ul>
        <div className="nav-actions">
          <Link href="/login" className="btn-ghost">Login</Link>
          <Link href="/dashboard" className="btn-amber">Dashboard &rarr;</Link>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-badge">🇧🇩 Built for Bangladesh's Rental Market</div>
        <h1>
          Your city,<br />
          <span className="line2">intelligently mapped.</span>
        </h1>
        <p className="hero-sub">NagorikHub transforms rental listings into a full decision intelligence system — verified utilities, safety scores, and AI-powered insights for every neighbourhood.</p>
        <div className="hero-cta">
          <Link href="/listings" className="btn-large amber">Explore Listings &rarr;</Link>
          <Link href="#features" className="btn-large outline">See How It Works</Link>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="stat-num">1200<span>+</span></div><div className="stat-label">Listings Indexed</div></div>
          <div className="stat"><div className="stat-num">48<span>+</span></div><div className="stat-label">Areas Covered</div></div>
          <div className="stat"><div className="stat-num">AI<span>&uarr;</span></div><div className="stat-label">Rent Prediction</div></div>
          <div className="stat"><div className="stat-num">৳49</div><div className="stat-label">Full Deep Report</div></div>
        </div>
      </section>

      {/* 3D FEATURE CAROUSEL */}
      <section id="features">
        <div className="reveal">
          <span className="section-tag">Core Features</span>
          <h2 className="section-title">Everything you need<br />to make the right move.</h2>
          <p className="section-sub">Scores, sentiments, and smart predictions — all in one platform built for Dhaka.</p>
        </div>

        <div className="carousel-wrapper reveal" id="carouselWrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="carousel-scene" id="carouselScene" style={{ transformStyle: 'preserve-3d' }}>
            {features.map((f, i) => {
              const n = features.length;
              const offset = ((i - currentIdx + n) % n);
              const p = offset <= 2 ? positions[offset + 2] : offset >= n - 2 ? positions[offset - (n - 2)] : null;
              const isActive = ((i - currentIdx + n) % n) === 0;

              return (
                <div
                  key={i}
                  className={`feature-card ${isActive ? 'active' : ''}`}
                  onClick={() => goTo(i - Math.floor(n / 2) + currentIdx)}
                  style={{
                    left: '50%', top: '50%',
                    transform: `translate(-50%,-50%) translate3d(${p?.x || 0}px,0,${p?.z || -300}px) rotateY(${p?.ry || 0}deg) scale(${p?.scale || .7})`,
                    opacity: p?.opacity || 0,
                    zIndex: Math.round((p?.scale || 0) * 10),
                    pointerEvents: (p?.opacity || 0) > 0.4 ? 'auto' : 'none',
                  }}
                >
                  <div className={`feat-icon ${f.iconClass}`}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="feat-tags">
                    {f.tags.map((t, idx) => <span key={idx} className={`tag ${t.c}`}>{t.label}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-controls reveal">
          <button className="c-btn" onClick={() => goTo(currentIdx - 1)}>&#8592;</button>
          {features.map((_, i) => (
            <button key={i} className={`c-dot ${i === currentIdx ? 'active' : ''}`} onClick={() => goTo(i)}></button>
          ))}
          <button className="c-btn" onClick={() => goTo(currentIdx + 1)}>&#8594;</button>
        </div>
      </section>
      
      {/* YOU CAN PASTE THE REST OF YOUR HTML HERE (Roadmap, About, Footer) */}
      {/* Just remember to change "class=" to "className=" */}

    </>
  );
}