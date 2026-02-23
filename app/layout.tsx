import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Obispo Lopez | Cybersecurity Portfolio",
  description: "Aspiring Cybersecurity Analyst & SOC Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#05020a] text-gray-100 antialiased`}>
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-[#05020a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="font-black text-2xl tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              OL.SEC
            </Link>
            
            {/* Navigation Links - Forced Visible */}
            <div className="flex items-center space-x-6 lg:space-x-10">
              <Link href="/" className="text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                Skills
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                Projects
              </Link>
              
              {/* Highlighted AI Assistant Link */}
              <Link 
                href="/ai" 
                className="px-4 py-2 rounded-md border border-cyan-500 text-cyan-400 font-bold text-xs uppercase tracking-widest hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                AI Assistant
              </Link>
            </div>

          </div>
        </nav>

        {/* This div adds 80px of space so your page content doesn't hide under the navbar */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}