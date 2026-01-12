'use client';

import { useEffect, useRef, useState } from 'react';

const tracks = [
  {
    icon: '🎯',
    title: 'Career Track',
    color: 'blue',
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
    features: [
      'Building Your Brand: Personal and business branding essentials',
      'Creative portfolio development',
      'Monetizing your creative skills',
    ],
  },
];

export default function Tracks() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="tracks" ref={sectionRef} className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Learning Tracks
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path to success with our specialized workshop tracks
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tracks.map((track, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${
                  track.color === 'blue' ? 'border-blue-500' :
                  track.color === 'purple' ? 'border-purple-500' :
                  'border-pink-500'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                  track.color === 'blue' ? 'bg-blue-100' :
                  track.color === 'purple' ? 'bg-purple-100' :
                  'bg-pink-100'
                }`}>
                  {track.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-6 ${
                  track.color === 'blue' ? 'text-blue-600' :
                  track.color === 'purple' ? 'text-purple-600' :
                  'text-pink-600'
                }`}>
                  {track.title}
                </h3>

                {/* Features */}
                <ul className="space-y-4">
                  {track.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                        track.color === 'blue' ? 'text-blue-500' :
                        track.color === 'purple' ? 'text-purple-500' :
                        'text-pink-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
