// ============================================================================
// File: components/FeatureCarousel.tsx
// Purpose: Interactive 3D carousel displaying core platform features.
// ============================================================================
'use client'; // This directive tells Next.js to run this component on the client-side

import { useState, useEffect } from 'react';

// 1. The Data structure translated from your HTML script
const features = [
  {
    icon: '🏠', iconClass: 'bg-[#e8a020]/15',
    title: 'Listing Intelligence',
    desc: 'AI-predicted rent ranges, gas type, electricity uptime, and water source — all in one verified card.',
    tags: [{ label: 'Free', c: 'bg-[#1aab7a]/15 text-[#2dd4a4]' }, { label: 'AI Verified', c: 'bg-[#e8a020]/15 text-[#f5b942]' }, { label: 'Rent Predict', c: 'bg-blue-500/15 text-blue-300' }]
  },
  {
    icon: '📊', iconClass: 'bg-[#1aab7a]/15',
    title: 'Livability Score',
    desc: 'A composite score built from safety (30%), utilities (20%), amenities (20%), transport (15%), and community reviews (15%).',
    tags: [{ label: 'Free', c: 'bg-[#1aab7a]/15 text-[#2dd4a4]' }, { label: 'Weighted Score', c: 'bg-[#e8a020]/15 text-[#f5b942]' }]
  },
  {
    icon: '👨‍🏫', iconClass: 'bg-[#e05c3a]/15',
    title: 'Tutor Confidence Score',
    desc: 'Designed for tutors and home-visit workers — day/night safety, transport access, and area sentiment all factored in.',
    tags: [{ label: 'Free', c: 'bg-[#1aab7a]/15 text-[#2dd4a4]' }, { label: 'Night Safety', c: 'bg-[#e05c3a]/15 text-[#f08070]' }, { label: 'Transport', c: 'bg-blue-500/15 text-blue-300' }]
  },
  {
    icon: '💬', iconClass: 'bg-blue-500/15',
    title: 'AI Chat (RAG)',
    desc: 'Ask anything: "Is Dhanmondi safe at night?" The RAG system retrieves real review context before answering.',
    tags: [{ label: 'Beta', c: 'bg-[#e05c3a]/15 text-[#f08070]' }, { label: 'RAG', c: 'bg-[#e8a020]/15 text-[#f5b942]' }, { label: 'NLP', c: 'bg-blue-500/15 text-blue-300' }]
  },
  {
    icon: '📋', iconClass: 'bg-[#e8a020]/15',
    title: 'Deep Report — ৳49',
    desc: 'Detailed risk breakdown, 6-month rent prediction, utility history, and full sentiment analysis — all unlockable.',
    tags: [{ label: 'Paid', c: 'bg-[#e05c3a]/15 text-[#f08070]' }, { label: '6-mo Prediction', c: 'bg-[#e8a020]/15 text-[#f5b942]' }, { label: 'History', c: 'bg-[#1aab7a]/15 text-[#2dd4a4]' }]
  }
];

// 2. The 3D positional coordinates for the 5 cards
const positions = [
  { x: -580, z: -120, ry: -15, scale: .85, opacity: .5 },
  { x: -290, z: -40, ry: -8, scale: .92, opacity: .75 },
  { x: 0, z: 60, ry: 0, scale: 1, opacity: 1 },
  { x: 290, z: -40, ry: 8, scale: .92, opacity: .75 },
  { x: 580, z: -120, ry: 15, scale: .85, opacity: .5 },
];

export default function FeatureCarousel() {
  // React State to keep track of which slide is currently centered
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to calculate the mathematical wrap-around for the carousel
  const goTo = (idx: number) => {
    setCurrentIdx(((idx % features.length) + features.length) % features.length);
  };

  // Auto-advance logic (equivalent to your setInterval)
  useEffect(() => {
    if (isHovered) return; // Pause auto-scroll if user is hovering
    const timer = setInterval(() => goTo(currentIdx + 1), 4000);
    return () => clearInterval(timer);
  }, [currentIdx, isHovered]);

  return (
    <section id="features" className="py-24 px-8 max-w-[1200px] mx-auto text-center">
      {/* Section Header */}
      <div>
        <span className="inline-block text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-[#e8a020] mb-4">Core Features</span>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.1] tracking-tight">
          Everything you need<br />to make the right move.
        </h2>
        <p className="text-[#e8e4dc]/55 text-base mt-3 max-w-[460px] mx-auto font-light">
          Scores, sentiments, and smart predictions — all in one platform built for Dhaka.
        </p>
      </div>

      {/* 3D Carousel Wrapper */}
      <div 
        className="relative h-[420px] mt-12 perspective-[1200px]" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full relative transition-transform duration-600 ease-in-out" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Map through features and calculate 3D transforms dynamically */}
          {features.map((f, i) => {
            const n = features.length;
            const offset = ((i - currentIdx + n) % n);
            const p = positions[((i - currentIdx + 2 + n) % n)];
            
            const isActive = ((i - currentIdx + n) % n) === 0;

            return (
              <div 
                key={i}
                onClick={() => goTo(i - Math.floor(n / 2) + currentIdx)}
                className={`absolute left-1/2 top-1/2 w-[320px] h-[360px] rounded-2xl p-8 border backdrop-blur-xl flex flex-col gap-4 cursor-pointer transition-all duration-400 ease-in-out ${
                  isActive 
                  ? 'border-[#e8a020]/40 bg-[#1a2035]/90 shadow-[0_0_40px_rgba(232,160,32,0.12)]' 
                  : 'border-white/10 bg-[#1a2035]/70'
                }`}
                style={{
                  transform: `translate(-50%, -50%) translate3d(${p?.x || 0}px, 0, ${p?.z || -300}px) rotateY(${p?.ry || 0}deg) scale(${p?.scale || .7})`,
                  opacity: p?.opacity || 0,
                  zIndex: Math.round((p?.scale || 0) * 10),
                  pointerEvents: (p?.opacity || 0) > 0.4 ? 'auto' : 'none',
                }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${f.iconClass}`}>
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white text-left">{f.title}</h3>
                <p className="text-sm text-[#e8e4dc]/60 leading-[1.6] text-left">{f.desc}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {f.tags.map((t, idx) => (
                    <span key={idx} className={`px-2.5 py-1 rounded-full text-[0.72rem] font-medium ${t.c}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex gap-4 items-center justify-center mt-8">
        <button onClick={() => goTo(currentIdx - 1)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all hover:bg-white/10 hover:border-[#e8a020]">&#8592;</button>
        
        {features.map((_, i) => (
          <button 
            key={i} 
            onClick={() => goTo(i)} 
            className={`h-2 rounded-full transition-all duration-300 ${i === currentIdx ? 'bg-[#e8a020] w-6' : 'bg-white/20 w-2'}`}
          />
        ))}

        <button onClick={() => goTo(currentIdx + 1)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all hover:bg-white/10 hover:border-[#e8a020]">&#8594;</button>
      </div>
    </section>
  );
}