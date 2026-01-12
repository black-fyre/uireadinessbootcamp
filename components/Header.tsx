'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10'
          : 'bg-slate-900/50 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl sm:text-2xl font-black transition-all duration-300 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}>
              <span className="text-white">UI Career </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 animate-gradient">
                Bootcamp
              </span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '#overview', label: 'Overview' },
              { href: '#tracks', label: 'Tracks' },
              { href: '#why-attend', label: 'Why Attend' },
              { href: '#register', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#register"
            className="relative group inline-flex items-center justify-center px-6 py-3 font-bold text-white overflow-hidden rounded-full transition-all duration-500 hover:scale-110"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600"></span>
            <span className="relative text-sm sm:text-base">Register Now</span>
            <svg className="relative ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute inset-0 rounded-full shadow-lg shadow-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/80 transition-all duration-500"></span>
          </a>
        </div>
      </nav>
    </header>
  );
}
