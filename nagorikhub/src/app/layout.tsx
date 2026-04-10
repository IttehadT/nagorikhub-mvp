// Import the required fonts directly from Google via Next.js optimized font loader.
// This ensures the fonts load quickly without layout shifts.
import { Syne, DM_Sans } from 'next/font/google';
// Import the global Tailwind CSS file.
import './globals.css';

// Configure the Syne font for headings.
// We set the variable '--font-display' so we can use it easily in Tailwind or CSS.
const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-display', 
  weight: ['400', '700', '800'] 
});

// Configure the DM Sans font for regular body text.
const dm = DM_Sans({ 
  subsets: ['latin'], 
  variable: '--font-body' 
});

// This defines the standard layout that wraps around every page in your app.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // We apply the font variables to the HTML tag so they cascade down to all elements.
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      {/* The body tag is where your page content is injected. 
        Setting a dark background (bg-slate-900) here acts as a good default canvas.
      */}
      <body className="font-sans antialiased bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}