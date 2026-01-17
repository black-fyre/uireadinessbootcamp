'use client';

import { useEffect, useState } from 'react';

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('timeline');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const scheduleItems = [
    {
      time: '12:00 PM – 12:15 PM',
      duration: '15 mins',
      title: 'Ice Breaker with Host',
      type: 'general',
      icon: '🎉',
    },
    {
      time: '12:15 PM – 12:45 PM',
      duration: '30 mins',
      title: 'Pilot Session',
      speaker: 'Fehintoluwa Dahunsi',
      type: 'general',
      icon: '🎯',
    },
    {
      time: '12:45 PM – 1:00 PM',
      duration: '15 mins',
      title: 'How to Network – Instruction',
      type: 'general',
      icon: '🤝',
    },
    {
      time: '1:00 PM – 1:15 PM',
      duration: '15 mins',
      title: 'Networking – Practice',
      type: 'general',
      icon: '💬',
    },
    {
      time: '1:15 PM – 3:15 PM',
      duration: '2 hours',
      title: 'Breakout Session 1',
      type: 'breakout',
      icon: '🚀',
      tracks: [
        {
          name: 'Career',
          topic: 'Resume Writing',
          speaker: 'Emmanuel Adepoju',
          color: 'blue',
        },
        {
          name: 'Creative',
          topic: 'Building a Personal Brand',
          speaker: 'Ireoluwatunmise Ajewole',
          color: 'purple',
        },
        {
          name: 'Business',
          topic: 'Starting your Business',
          speaker: 'Oyindasola Bakare',
          color: 'green',
        },
      ],
    },
    {
      time: '3:15 PM – 3:30 PM',
      duration: '15 mins',
      title: 'Break',
      type: 'break',
      icon: '☕',
    },
    {
      time: '3:30 PM – 5:30 PM',
      duration: '2 hours',
      title: 'Breakout Session 2',
      type: 'breakout',
      icon: '🎓',
      tracks: [
        {
          name: 'Career',
          topic: 'Interview Prep: How to Ace an Interview',
          speaker: 'Emmanuel Adepoju',
          color: 'blue',
        },
        {
          name: 'Creative',
          topic: 'Pricing & How to get the right Creative Jobs',
          speaker: 'Ireoluwatunmise Ajewole',
          color: 'purple',
        },
        {
          name: 'Business',
          topic: 'Endurance 101: How to Last in Business',
          speaker: 'Oyindasola Bakare',
          color: 'green',
        },
      ],
    },
  ];

  const getTrackColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500/20 text-blue-700 border-blue-500/30';
      case 'purple':
        return 'bg-purple-500/20 text-purple-700 border-purple-500/30';
      case 'green':
        return 'bg-green-500/20 text-green-700 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            12:00 PM – 5:30 PM
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A carefully structured program designed to maximize learning and networking opportunities
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`relative pb-12 last:pb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline line */}
              {index !== scheduleItems.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"></div>
              )}

              {/* Timeline item */}
              <div className="flex gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                    item.type === 'breakout' ? 'bg-gradient-to-br from-blue-500 to-purple-600' :
                    item.type === 'break' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                    'bg-gradient-to-br from-blue-400 to-blue-600'
                  } flex items-center justify-center text-2xl sm:text-3xl shadow-lg transform hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Time badge */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                    <span className="text-xs text-gray-500">({item.duration})</span>
                  </div>

                  {/* Card */}
                  <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    item.type === 'breakout' ? 'border-2 border-blue-200' : 'border border-gray-200'
                  }`}>
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      {item.speaker && (
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Speaker:</span> {item.speaker}
                        </p>
                      )}

                      {/* Breakout tracks */}
                      {item.tracks && (
                        <div className="mt-4 space-y-3">
                          <p className="text-sm font-semibold text-gray-700 mb-3">Choose your track:</p>
                          {item.tracks.map((track, trackIndex) => (
                            <div
                              key={trackIndex}
                              className={`border rounded-xl p-4 ${getTrackColorClass(track.color)} hover:shadow-md transition-all`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-sm">{track.name} Track</span>
                                  </div>
                                  <p className="font-semibold text-gray-900 mb-1">{track.topic}</p>
                                  <p className="text-sm opacity-90">with {track.speaker}</p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  track.color === 'blue' ? 'bg-blue-600 text-white' :
                                  track.color === 'purple' ? 'bg-purple-600 text-white' :
                                  'bg-green-600 text-white'
                                }`}>
                                  {track.name}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Us?</h3>
            <p className="text-gray-600 mb-6">Secure your spot for this transformative experience</p>
            <a
              href="https://selar.com/1zx158t327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Register Now - ₦1,000
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
