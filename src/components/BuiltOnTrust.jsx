import React, { useState, useEffect, useRef } from 'react';

export default function BuiltOnTrust() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ employees: 0, customers: 0, projects: 0 });
  const hasAnimated = useRef(false);

  // Scroll reveal IntersectionObserver (triggers heading animation and counter)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth speed count-up animation from 0 to targets
  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1500; // 1.5 seconds speed count
      const startTime = performance.now();
      const targets = { employees: 10, customers: 5, projects: 15 };

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutCubic curve for realistic fast acceleration and smooth decelerating finish
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounts({
          employees: Math.round(targets.employees * easeOut),
          customers: Math.round(targets.customers * easeOut),
          projects: Math.round(targets.projects * easeOut),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCounts(targets);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  const stats = [
    {
      id: 'employees',
      label: 'EMPLOYEES',
      value: counts.employees,
      description: 'A skilled team working together to deliver digital and AI solutions drive business growth.',
    },
    {
      id: 'customers',
      label: 'CUSTOMERS',
      value: counts.customers,
      description: 'Building lasting partnerships through reliable digital and AI solutions.',
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      value: counts.projects,
      description: 'Turning ideas into impactful digital solutions.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white text-slate-900 pt-4 sm:pt-6 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Section Header - Animated on scroll matching previous sections */}
        <div 
          className={`text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 font-primary leading-tight">
            Built on Trust. Driven by Innovation.
          </h2>
          <p className="mt-3 sm:mt-3.5 text-sm sm:text-base md:text-lg font-medium text-slate-600 font-secondary leading-relaxed max-w-2xl mx-auto">
            We combine digital expertise and AI to create lasting value and drive business growth.
          </p>
        </div>

        {/* 3 Stat Cards Grid (Same width max-w-[1360px], compact height) */}
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((item) => (
            <div 
              key={item.id}
              className="bg-[#f8fafc] rounded-3xl sm:rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col items-start justify-start transition-colors duration-200"
            >
              {/* Category Label */}
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-slate-900 uppercase font-secondary">
                {item.label}
              </span>

              {/* Counter Number */}
              <div className="my-2.5 sm:my-3">
                <span className="text-5xl sm:text-6xl lg:text-[68px] font-black text-[#002a7f] font-primary tracking-tight leading-none select-none">
                  {item.value}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-700 font-secondary leading-relaxed max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
