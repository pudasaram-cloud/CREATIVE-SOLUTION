import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import imgAutomation from '../assets/intelligent-transformation.jpg';
import imgAnalytics from '../assets/data-analytics.jpg';
import imgProcess from '../assets/process-collab.jpg';
import imgGrowth from '../assets/growth-innovation.jpg';

const transformationSlides = [
  {
    id: 1,
    title: 'AI-Powered Business Process Automation',
    description: 'Use AI to reduce repetitive tasks, streamline workflows, and improve everyday business operations.',
    buttonText: 'Learn More',
    image: imgAutomation,
    alt: 'AI-Powered Business Process Automation with smart robotic warehouse systems',
  },
  {
    id: 2,
    title: 'Advanced Data Intelligence & Analytics',
    description: 'Turn complex business data into clear, actionable insights that help you make smarter decisions, improve performance, and uncover new opportunities.',
    buttonText: 'Learn More',
    image: imgAnalytics,
    alt: 'Advanced Data Intelligence and Analytics dashboards with real-time business insights',
  },
  {
    id: 3,
    title: 'Digital Business Process Transformation',
    description: 'Transform manual business processes into streamlined digital workflows that improve efficiency, reduce complexity, and help your teams work smarter.',
    buttonText: 'Learn More',
    image: imgProcess,
    alt: 'Digital Business Process Transformation team collaborating on modern workflows',
  },
  {
    id: 4,
    title: 'Intelligent Business Growth & Innovation',
    description: 'Leverage digital solutions and AI to identify new opportunities, optimise performance, and build scalable strategies for sustainable business growth.',
    buttonText: 'Learn More',
    image: imgGrowth,
    alt: 'Intelligent Business Growth and Innovation 3D upward chart representation',
  },
];

export default function IntelligentTransformation() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Scroll reveal IntersectionObserver
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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformationSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === transformationSlides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play sliding every 5.5 seconds (pauses when user hovers over card)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === transformationSlides.length - 1 ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full bg-white text-slate-900 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Section Header with Smooth Entrance Animation */}
        <div 
          className={`text-center max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 font-primary leading-tight">
            Intelligent Transformation, Designed for Your Business
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-medium text-slate-600 font-secondary leading-relaxed max-w-3xl mx-auto">
            We bring digital technologies and AI together to help your business work smarter, move faster, and stay ready for what&apos;s next.
          </p>
        </div>

        {/* Sliding Panel Container (Wider width: max-w-[1360px], animated entrance) */}
        <div 
          className={`relative w-full max-w-[1360px] mx-auto px-2 sm:px-4 transition-all duration-1000 delay-200 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-14 scale-[0.98]'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Viewport with Hidden Overflow */}
          <div className="overflow-hidden rounded-3xl sm:rounded-[36px]">
            {/* Sliding Track */}
            <div 
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformationSlides.map((slide, idx) => {
                const isActive = currentIndex === idx;

                return (
                  <div 
                    key={slide.id} 
                    className="w-full flex-shrink-0"
                  >
                    <div className="w-full bg-[#f8fafc] rounded-3xl sm:rounded-[36px] border border-slate-200/80 p-6 sm:p-10 md:p-12 lg:p-16">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
                        
                        {/* Left Column: Title, Description, and CTA Button */}
                        <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
                          <h3 className={`text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-extrabold text-[#002a7f] font-primary leading-[1.2] tracking-tight transition-all duration-700 ${
                            isActive ? 'opacity-100 translate-x-0' : 'opacity-75 -translate-x-2'
                          }`}>
                            {slide.title}
                          </h3>

                          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-slate-700 font-secondary leading-relaxed max-w-lg">
                            {slide.description}
                          </p>

                          <div className="mt-8 sm:mt-10">
                            <button
                              type="button"
                              className="inline-flex items-center space-x-2.5 px-8 py-3.5 sm:px-9 sm:py-3.5 rounded-full bg-[#002a7f] hover:bg-[#001d5c] text-white font-secondary font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                              id={`btn-learn-more-${slide.id}`}
                            >
                              <span>{slide.buttonText}</span>
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.3} />
                            </button>
                          </div>
                        </div>

                        {/* Right Column: Slide Image */}
                        <div className="lg:col-span-7 w-full">
                          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 group">
                            <img
                              src={slide.image}
                              alt={slide.alt}
                              className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
                                isActive ? 'scale-100 filter-none' : 'scale-102'
                              }`}
                              loading="lazy"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Previous Slide Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-1 sm:left-2 lg:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#002a7f] shadow-lg hover:shadow-xl border border-slate-200/80 flex items-center justify-center transition-all duration-200 cursor-pointer z-20 hover:scale-110 active:scale-95 focus:outline-none"
            id="btn-prev-transformation-slide"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>

          {/* Next Slide Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-2 lg:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#002a7f] shadow-lg hover:shadow-xl border border-slate-200/80 flex items-center justify-center transition-all duration-200 cursor-pointer z-20 hover:scale-110 active:scale-95 focus:outline-none"
            id="btn-next-transformation-slide"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          {/* Slide Indicators / Dots */}
          <div className="flex items-center justify-center space-x-2.5 mt-8 sm:mt-10">
            {transformationSlides.map((slide, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'w-9 sm:w-11 bg-[#002a7f]' 
                      : 'w-2.5 sm:w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
