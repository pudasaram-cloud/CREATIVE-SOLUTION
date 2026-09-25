import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import sustainableImg from '../assets/sustainable-future.jpg';

export default function SustainableFuture() {
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
      className="relative w-full bg-white text-slate-900 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] flex items-center justify-center py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Title, Description, and CTA Button (with generous side padding) */}
          <div 
            className={`lg:col-span-7 flex flex-col items-start justify-center text-left px-3 sm:px-6 md:px-8 lg:px-10 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-primary tracking-tight leading-[1.18] select-none">
              <span className="block text-[#002a7f]">
                Digital Innovation for a
              </span>
              <span className="block text-[#82c341]">
                Sustainable Future
              </span>
            </h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[17px] text-slate-700 font-secondary leading-relaxed max-w-xl">
              We use digital technology and AI to help businesses work smarter, reduce waste, and build more sustainable operations. Our solutions create lasting value while supporting a cleaner, more responsible future.
            </p>

            <div className="mt-8 sm:mt-10">
              <button
                type="button"
                className="inline-flex items-center space-x-2.5 px-8 py-3.5 sm:px-9 sm:py-3.5 rounded-full bg-[#002a7f] hover:bg-[#001d5c] text-white font-secondary font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                id="btn-learn-more-sustainability"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.3} />
              </button>
            </div>
          </div>

          {/* Right Column: Circular Robotic Agriculture Frame with Green Border (with side padding) */}
          <div 
            className={`lg:col-span-5 flex items-center justify-center lg:justify-end px-3 sm:px-6 md:px-8 lg:px-10 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="group relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[470px] lg:h-[470px] rounded-full overflow-hidden border-[12px] sm:border-[16px] md:border-[18px] border-[#82c341] flex-shrink-0 bg-slate-100">
              <img
                src={sustainableImg}
                alt="Digital Innovation for a Sustainable Future - Robotic farming automation in modern greenhouse"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
