'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="UI Career Bootcamp Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              UI Career <span className="text-blue-600">Bootcamp</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">
              Overview
            </a>
            <a href="#tracks" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tracks
            </a>
            <a href="#timeline" className="text-gray-700 hover:text-blue-600 transition-colors">
              Timeline
            </a>
            <a href="#why-attend" className="text-gray-700 hover:text-blue-600 transition-colors">
              Why Attend
            </a>
          </div>

          <a
            href="https://selar.com/1zx158t327"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
          >
            Register Now
          </a>
        </div>
      </nav>
    </header>
  );
}
