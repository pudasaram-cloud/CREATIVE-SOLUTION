import React, { useEffect, useRef, useState } from 'react';
import aiImg from '../assets/announcement-ai.jpg';
import businessImg from '../assets/announcement-business.jpg';
import futureImg from '../assets/announcement-future.jpg';

const announcements = [
  {
    id: 1,
    image: aiImg,
    alt: 'AI-Powered Solutions Are Here',
    title: 'AI-Powered Solutions Are Here',
    description: 'AI and automation are transforming the way modern businesses operate.',
    buttonText: 'FIND MORE',
  },
  {
    id: 2,
    image: businessImg,
    alt: 'Digital Solutions, Built for Business',
    title: 'Digital Solutions, Built for Business',
    description: 'Expanding our services with custom web, mobile, and business software solutions.',
    buttonText: 'FIND MORE',
  },
  {
    id: 3,
    image: futureImg,
    alt: 'Building the Future of Digital Business',
    title: 'Building the Future of Digital Business',
    description: 'Building connected digital experiences for the future of business.',
    buttonText: 'FIND MORE',
  },
];

export default function LatestAnnouncements() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative w-full bg-transparent text-white pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title with Scroll Fade & Slide Animation */}
        <div 
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight text-white font-primary leading-none mb-12 sm:mb-16">
            LATEST ANNOUNCEMENTS
          </h2>
        </div>

        {/* 3-Cards Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {announcements.map((item, index) => {
            const delayClasses = [
              'transition-all duration-700 delay-100',
              'transition-all duration-700 delay-300',
              'transition-all duration-700 delay-500',
            ];

            return (
              <div
                key={item.id}
                className={`group flex flex-col items-center text-center transform ${delayClasses[index]} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                {/* Card Image Container - Only Zoom on Hover */}
                <div className="w-full aspect-square overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl md:text-[21px] font-bold text-white font-primary mt-6 sm:mt-7 leading-snug px-2">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] text-slate-300/90 font-secondary mt-3 leading-relaxed max-w-[320px] mx-auto px-2">
                  {item.description}
                </p>

                {/* Call-To-Action Pill Button */}
                <div className="mt-6 sm:mt-7">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-9 py-3 sm:px-10 sm:py-3.5 rounded-full bg-[#002a7f] hover:bg-[#001f60] text-white font-secondary font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
