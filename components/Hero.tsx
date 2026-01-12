'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Floating Orbs with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div
          className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-delayed"
          style={{ transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow"
          style={{ transform: `translate(${mousePosition.y}px, ${-mousePosition.x}px)` }}
        ></div>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 animate-float-slow opacity-20 hidden lg:block">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden rotate-12 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute top-1/4 right-20 animate-float opacity-20 hidden lg:block">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden -rotate-6 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=400&fit=crop"
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-delayed opacity-20 hidden lg:block">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden rotate-6 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop"
              alt="Students learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 text-white rounded-full text-sm font-medium mb-8 animate-pulse-slow shadow-lg shadow-green-500/20">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            January 17, 2025 • 12:00 PM - 6:00 PM
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="inline-block animate-text-shimmer bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              UI Career Readiness
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 animate-gradient">
              Bootcamp 2025
            </span>
          </h1>

          {/* Subheading with Glow Effect */}
          <p className="text-2xl sm:text-3xl text-emerald-100 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Shaping Visionaries in Business, Career & Creative Industries
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us for an intensive, hands-on bootcamp designed to equip University of Ibadan students with essential skills for success.
          </p>

          {/* CTA Buttons with Advanced Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#register"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white overflow-hidden rounded-full transition-all duration-500 hover:scale-110"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600"></span>
              <span className="relative flex items-center">
                Register Now - ₦1,000
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-full shadow-lg shadow-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/80 transition-all duration-500"></span>
            </a>
            <a
              href="#overview"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/20 hover:border-white/40 hover:scale-105"
            >
              Learn More
              <svg className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Glassmorphism Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: '3', label: 'Learning Tracks', color: 'from-green-500 to-emerald-500', delay: '0' },
              { number: '6', label: 'Hours of Training', color: 'from-teal-500 to-cyan-500', delay: '100' },
              { number: 'UI', label: 'Campus Venue', color: 'from-emerald-500 to-green-600', delay: '200' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color} animate-gradient`}>
                  {stat.number}
                </div>
                <div className="text-gray-200 font-semibold text-lg">{stat.label}</div>
                <div className="absolute inset-0 rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-emerald-500/30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <a href="#overview" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow group">
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2 group-hover:border-white transition-colors">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll-down group-hover:bg-white"></div>
        </div>
      </a>
    </section>
  );
}
