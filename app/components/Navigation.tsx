"use client";
import React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 border-b border-voice-border glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/aurus-logo-app.png" alt="Aurus Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
          <span className="font-bold text-lg sm:text-xl tracking-tight">AURUS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#agents" className="hover:text-white transition-colors">KI-Agenten</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-block bg-voice-primary hover:bg-voice-secondary px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-voice-primary/20">
            Download
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-voice-border glass-strong">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#agents"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              KI-Agenten
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 bg-voice-primary text-white text-center rounded-lg font-bold hover:bg-voice-secondary transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
