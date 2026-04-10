// ============================================================================
// File: components/Navbar.tsx
// Purpose: Renders the top navigation bar with the logo and login links.
// Next.js uses standard HTML tags, but applies classes using "className" instead of "class".
// ============================================================================

import Link from "next/link"; // Next.js built-in component for fast, client-side routing

export default function Navbar() {
  return (
    // 'nav' tag acts as the container. We use Tailwind utility classes here to style it.
    // fixed top-0 w-full z-50: Keeps it stuck to the top over other elements.
    // backdrop-blur-md: Creates that glassy background effect from your design.
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/10">
      
      {/* Brand Logo - Links back to the home page (/) */}
      <Link href="/" className="font-display text-2xl font-extrabold text-white tracking-tight">
        <span className="text-[#e8a020]">Nagorik</span>Hub
      </Link>

      {/* Main Navigation Links - Hidden on mobile (hidden md:flex) */}
      <ul className="hidden md:flex gap-8 list-none">
        <li><Link href="#features" className="text-[#e8e4dc]/70 hover:text-white transition-colors text-sm">Features</Link></li>
        <li><Link href="#roadmap" className="text-[#e8e4dc]/70 hover:text-white transition-colors text-sm">Roadmap</Link></li>
        <li><Link href="#about" className="text-[#e8e4dc]/70 hover:text-white transition-colors text-sm">About</Link></li>
        <li><Link href="#download" className="text-[#e8e4dc]/70 hover:text-white transition-colors text-sm">Apps</Link></li>
      </ul>

      {/* Call to Action Buttons */}
      <div className="flex gap-3 items-center">
        <Link href="/login" className="px-5 py-2 rounded-md border border-white/20 text-[#e8e4dc] text-sm hover:bg-white/10 transition-all">
          Login
        </Link>
        <Link href="/dashboard" className="px-5 py-2 rounded-md bg-[#e8a020] text-[#0a0e1a] font-semibold text-sm hover:bg-[#f5b942] transition-all hover:-translate-y-px">
          Dashboard &rarr;
        </Link>
      </div>
    </nav>
  );
}