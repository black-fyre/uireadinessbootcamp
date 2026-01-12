'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const tracks = [
  {
    icon: '🎯',
    title: 'Career Track',
    color: 'blue',
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
    features: [
      'Resume Building: Craft compelling resumes that stand out',
      'Interview Preparation: Master the art of acing job interviews',
      'Professional networking strategies',
    ],
  },
  {
    icon: '💼',
    title: 'Business Track',
    color: 'purple',
    gradient: 'from-teal-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&h=600&fit=crop',
    features: [
      'Starting Your Business: From idea to execution',
      'Finance 101: Financing strategies for your business',
      'Business planning and sustainability',
    ],
  },
  {
    icon: '🎨',
    title: 'Creative Track',
    color: 'pink',
    gradient: 'from-emerald-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=600&fit=crop',
    features: [
      'Building Your Brand: Personal and business branding essentials',
      'Creative portfolio development',
      'Monetizing your creative skills',
    ],
  },
];

export default function Tracks() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="tracks" ref={sectionRef} className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-900 via-emerald-950/30 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
              <span className="text-sm font-semibold text-green-300 tracking-wide uppercase">Workshop Tracks</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Three Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Tracks</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose your path to success with our specialized workshop tracks
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: isVisible ? `slide-up 0.6s ease-out ${index * 150}ms both` : 'none'
                }}
              >
                {/* Card */}
                <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 h-full ${
                  hoveredCard === index ? 'scale-105 shadow-2xl' : ''
                }`}>
                  {/* Image Header with Gradient Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredCard === index ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${track.gradient} opacity-60 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-4xl transform transition-transform duration-500 ${
                        hoveredCard === index ? 'rotate-12 scale-110' : ''
                      }`}>
                        {track.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title with Animated Underline */}
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${track.gradient} relative inline-block`}>
                      {track.title}
                      <span className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${track.gradient} transition-all duration-500 ${
                        hoveredCard === index ? 'w-full' : 'w-0'
                      }`}></span>
                    </h3>

                    {/* Features */}
                    <ul className="space-y-4">
                      {track.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start transition-all duration-300 ${
                            hoveredCard === index ? 'translate-x-2' : ''
                          }`}
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${track.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-200 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect Border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${track.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>

                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${track.gradient} blur-xl opacity-50`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
