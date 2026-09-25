import React, { useEffect, useRef, useState } from 'react';

const cards = [
  { id: 1, text: 'Coming soon', delay: 'delay-150' },
  { id: 2, text: 'Coming soon', delay: 'delay-300' },
  { id: 3, text: 'Coming soon', delay: 'delay-450' },
];

export default function NewsUpdates() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white text-slate-900 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Section Heading with Scroll Entrance Animation */}
        <div 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-slate-950 font-primary leading-tight">
            News and updates
          </h2>
        </div>

        {/* 3 Large Coming Soon Cards Grid with Staggered Scroll Animation */}
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] bg-[#f8fafc] rounded-3xl sm:rounded-[36px] flex items-center justify-center p-8 transition-all duration-700 ease-out transform hover:scale-[1.01] ${card.delay} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <span className="text-xs sm:text-sm text-slate-500 font-normal font-secondary select-none">
                {card.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
