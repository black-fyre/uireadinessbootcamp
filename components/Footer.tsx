export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">UI Career Bootcamp</h3>
              <p className="text-sm leading-relaxed">
                Shaping Visionaries in Business, Career & Creative Industries. A community giveback initiative by The Breakforth Group.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#overview" className="hover:text-white transition-colors">
                    Event Overview
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hover:text-white transition-colors">
                    Learning Tracks
                  </a>
                </li>
                <li>
                  <a href="#why-attend" className="hover:text-white transition-colors">
                    Why Attend
                  </a>
                </li>
                <li>
                  <a href="#register" className="hover:text-white transition-colors">
                    Register Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact & Inquiries</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>January 17, 2025<br/>12:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>University of Ibadan Campus</span>
                </div>
                <div className="pt-3">
                  <a
                    href="https://bit.ly/uicareerreadinessbootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} The Breakforth Group. All rights reserved.
            </p>
            <p className="mt-2 text-gray-500">
              Empowering the next generation of leaders and innovators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
