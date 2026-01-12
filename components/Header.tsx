'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              UI Career <span className="text-blue-600">Bootcamp</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">
              Overview
            </a>
            <a href="#tracks" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tracks
            </a>
            <a href="#why-attend" className="text-gray-700 hover:text-blue-600 transition-colors">
              Why Attend
            </a>
            <a href="#register" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          <a
            href="#register"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
          >
            Register Now
          </a>
        </div>
      </nav>
    </header>
  );
}
