// ============================================================================
// File: components/HeroSection.tsx
// Purpose: Renders the primary landing area (Hero) with the main value proposition,
// background gradients, and call-to-action buttons.
// ============================================================================

import Link from "next/link"; // Importing Next.js Link for internal navigation

export default function HeroSection() {
  return (
    // The main container for the hero section. 
    // min-h-screen ensures it takes up at least the full height of the viewport.
    <section id="hero" className="relative flex flex-col items-center justify-center text-center min-h-screen px-8 pt-28 pb-16 overflow-hidden">
      
      {/* Background gradients and grids.
        These div layers sit behind the text (absolute inset-0) to create the visual depth.
      */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(232,160,32,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(26,171,122,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(224,92,58,0.05) 0%, transparent 60%)'
      }}></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 70%)'
      }}></div>

      {/* Main Content Wrapper - z-10 ensures it stays above the background grid */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Small descriptive badge above the main title */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e8a020]/30 bg-[#e8a020]/10 text-sm font-medium text-[#f5b942] mb-7" style={{ animation: 'fadeUp .6s ease both' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a020]" style={{ animation: 'pulse 2s infinite' }}></span>
          🇧🇩 Built for Bangladesh's Rental Market
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white" style={{ animation: 'fadeUp .7s .1s ease both' }}>
          Your city,<br />
          <span className="text-[#e8a020]">intelligently mapped.</span>
        </h1>

        {/* Sub-headline description */}
        <p className="text-[clamp(1rem,2vw,1.2rem)] text-[#e8e4dc]/65 max-w-[540px] my-5 font-light leading-relaxed" style={{ animation: 'fadeUp .7s .2s ease both' }}>
          NagorikHub transforms rental listings into a full decision intelligence system — verified utilities, safety scores, and AI-powered insights for every neighbourhood.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mt-2" style={{ animation: 'fadeUp .7s .3s ease both' }}>
          <Link href="/listings" className="px-8 py-3.5 rounded-lg bg-[#e8a020] text-[#0a0e1a] font-semibold hover:bg-[#f5b942] hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_rgba(232,160,32,0.3)]">
            Explore Listings &rarr;
          </Link>
          <Link href="#features" className="px-8 py-3.5 rounded-lg border border-white/20 bg-white/5 text-[#e8e4dc] font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all">
            See How It Works
          </Link>
        </div>

        {/* Project Statistics Row */}
        <div className="flex gap-12 justify-center flex-wrap mt-16" style={{ animation: 'fadeUp .7s .4s ease both' }}>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white tracking-tight">1200<span className="text-[#e8a020]">+</span></div>
            <div className="text-sm text-[#e8e4dc]/50 mt-1">Listings Indexed</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white tracking-tight">48<span className="text-[#e8a020]">+</span></div>
            <div className="text-sm text-[#e8e4dc]/50 mt-1">Areas Covered</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white tracking-tight">AI<span className="text-[#e8a020]">&uarr;</span></div>
            <div className="text-sm text-[#e8e4dc]/50 mt-1">Rent Prediction</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white tracking-tight">৳49</div>
            <div className="text-sm text-[#e8e4dc]/50 mt-1">Full Deep Report</div>
          </div>
        </div>

      </div>
    </section>
  );
}