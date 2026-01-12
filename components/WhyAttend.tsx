'use client';

import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Hands-On Workshops',
    description: 'Interactive sessions with practical exercises',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Expert Facilitators',
    description: 'Learn from industry professionals',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Networking Opportunities',
    description: 'Connect with like-minded peers',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Community Giveback',
    description: 'A social impact initiative by The Breakforth Group',
  },
];

export default function WhyAttend() {
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
    <section id="why-attend" ref={sectionRef} className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Attend?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Invest in your future with an experience designed to transform your career
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Registration Fee Info */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 border border-blue-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              About the Registration Fee
            </h3>
            <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
              This is a community giveback initiative. The ₦1,000 registration fee is designed to:
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">🎯</div>
                <p className="text-gray-700 font-medium">Encourage commitment and serious participation</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">📋</div>
                <p className="text-gray-700 font-medium">Cover administrative and logistics costs</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">📚</div>
                <p className="text-gray-700 font-medium">Ensure you get quality materials and resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
