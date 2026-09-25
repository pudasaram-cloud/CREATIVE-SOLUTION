import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Assets
import webappHeroImg from '../assets/webapp-hero.jpg';
import serviceMobileImg from '../assets/service-mobile.jpg';
import serviceUiuxImg from '../assets/service-uiux.jpg';
import serviceRetailImg from '../assets/service-retail.jpg';
import serviceAiCloudImg from '../assets/service-ai-cloud.jpg';
import digitalInnovation1 from '../assets/digital-innovation-1.jpg';
import digitalInnovation2 from '../assets/digital-innovation-2.jpg';
import dataAnalyticsImg from '../assets/data-analytics.jpg';
import intelligentTransformationImg from '../assets/intelligent-transformation.jpg';
import processCollabImg from '../assets/process-collab.jpg';
import announcementBusinessImg from '../assets/announcement-business.jpg';
import announcementAiImg from '../assets/announcement-ai.jpg';
import announcementFutureImg from '../assets/announcement-future.jpg';
import growthInnovationImg from '../assets/growth-innovation.jpg';
import solutionTeamImg from '../assets/solution-team.jpg';
import solutionLeaderImg from '../assets/solution-leader.jpg';
import sustainableFutureImg from '../assets/sustainable-future.jpg';

// 8 Categories specified by user with exactly 3 sub-items each
const categories = [
  {
    id: 'web-mobile',
    number: '01',
    label: 'Web & Mobile',
    items: [
      {
        title: 'Web Development',
        subtitle: 'Modern & Scalable Architecture',
        image: webappHeroImg,
        badge: '01',
      },
      {
        title: 'Mobile App Development',
        subtitle: 'iOS & Android Native & Cross-Platform',
        image: serviceMobileImg,
        badge: '02',
      },
      {
        title: 'E-Commerce Solutions',
        subtitle: 'High-Converting Digital Stores',
        image: serviceUiuxImg,
        badge: '03',
      },
    ],
  },
  {
    id: 'uiux-design',
    number: '02',
    label: 'UI/UX & Design',
    items: [
      {
        title: 'UI/UX Design',
        subtitle: 'Human-Centered Interactive Systems',
        image: serviceUiuxImg,
        badge: '01',
      },
      {
        title: 'Website & App Design',
        subtitle: 'Bespoke Brand & UI Frameworks',
        image: webappHeroImg,
        badge: '02',
      },
      {
        title: 'Digital Product Design',
        subtitle: 'Engaging End-to-End User Journeys',
        image: digitalInnovation1,
        badge: '03',
      },
    ],
  },
  {
    id: 'software-solutions',
    number: '03',
    label: 'Software Solutions',
    items: [
      {
        title: 'Software Development',
        subtitle: 'Robust Enterprise Logic & Engineering',
        image: dataAnalyticsImg,
        badge: '01',
      },
      {
        title: 'Custom Software Solutions',
        subtitle: 'Tailored to Operational Workflows',
        image: intelligentTransformationImg,
        badge: '02',
      },
      {
        title: 'Business Applications',
        subtitle: 'Resilient Scalable Microservices',
        image: processCollabImg,
        badge: '03',
      },
    ],
  },
  {
    id: 'business-management',
    number: '04',
    label: 'Business Management',
    items: [
      {
        title: 'Business Management Systems',
        subtitle: 'Unified Real-Time Operational Hub',
        image: announcementBusinessImg,
        badge: '01',
      },
      {
        title: 'CRM Solutions',
        subtitle: 'Smart Pipeline & Customer Retention',
        image: growthInnovationImg,
        badge: '02',
      },
      {
        title: 'HR & Payroll Systems',
        subtitle: 'Automated Workforce & Payroll Flow',
        image: solutionTeamImg,
        badge: '03',
      },
    ],
  },
  {
    id: 'retail-operations',
    number: '05',
    label: 'Retail & Operations',
    items: [
      {
        title: 'POS Systems',
        subtitle: 'Omnichannel Fast Cloud Point-of-Sale',
        image: serviceRetailImg,
        badge: '01',
      },
      {
        title: 'Inventory Management',
        subtitle: 'Live Stock Control & Supply Forecasting',
        image: solutionLeaderImg,
        badge: '02',
      },
      {
        title: 'Booking & Reservation Systems',
        subtitle: 'Frictionless Real-Time Scheduling',
        image: serviceMobileImg,
        badge: '03',
      },
    ],
  },
  {
    id: 'automation-ai',
    number: '06',
    label: 'Automation & AI',
    items: [
      {
        title: 'Business Automation',
        subtitle: 'Robotic Process Optimization',
        image: serviceAiCloudImg,
        badge: '01',
      },
      {
        title: 'AI Solutions',
        subtitle: 'Tailored Machine Learning Models',
        image: announcementAiImg,
        badge: '02',
      },
      {
        title: 'Workflow Automation',
        subtitle: 'Seamless Cross-Platform Pipelines',
        image: intelligentTransformationImg,
        badge: '03',
      },
    ],
  },
  {
    id: 'cloud-transformation',
    number: '07',
    label: 'Cloud & Digital Transformation',
    items: [
      {
        title: 'Cloud & Hosting',
        subtitle: 'High-Availability Secure Cloud Infra',
        image: serviceAiCloudImg,
        badge: '01',
      },
      {
        title: 'Digital Transformation',
        subtitle: 'Modernizing Legacy Infrastructure',
        image: announcementFutureImg,
        badge: '02',
      },
      {
        title: 'System Integration',
        subtitle: 'Connected Enterprise API Ecosystem',
        image: digitalInnovation2,
        badge: '03',
      },
    ],
  },
  {
    id: 'support-growth',
    number: '08',
    label: 'Support & Growth',
    items: [
      {
        title: 'Maintenance & Support',
        subtitle: '24/7 Uptime & System Monitoring',
        image: sustainableFutureImg,
        badge: '01',
      },
      {
        title: 'System Upgrades',
        subtitle: 'Continuous Evolution & Optimization',
        image: growthInnovationImg,
        badge: '02',
      },
      {
        title: 'Technical Support',
        subtitle: 'Dedicated Engineering & SLA Assurance',
        image: solutionTeamImg,
        badge: '03',
      },
    ],
  },
];

const allCategoryItems = [
  {
    title: 'Web & Mobile Solutions',
    subtitle: 'High-Performance Scalable Digital Platforms',
    image: webappHeroImg,
  },
  {
    title: 'AI & Automation Systems',
    subtitle: 'Intelligent Workflows & Machine Learning',
    image: serviceAiCloudImg,
  },
  {
    title: 'UI/UX & Product Design',
    subtitle: 'Human-Centered Digital Product Design',
    image: serviceUiuxImg,
  },
  {
    title: 'Cloud & Software Platforms',
    subtitle: 'High-Availability Enterprise Tech',
    image: digitalInnovation2,
  },
  {
    title: 'Retail POS & Operations',
    subtitle: 'Connected POS, Inventory & Orders',
    image: serviceRetailImg,
  },
  {
    title: 'Mobile App Development',
    subtitle: 'iOS & Android Native & Cross-Platform',
    image: serviceMobileImg,
  },
];

export default function Home({ onNavigate, onContactClick }) {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Modern entrance animation on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  // The active items to display based on activeTab
  const activeItems = activeTab === 'all' 
    ? allCategoryItems 
    : (categories.find((c) => c.id === activeTab)?.items || allCategoryItems);

  // Handle category tab selection
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setCenterIndex(0);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % activeItems.length);
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  };

  // Auto-advance 3D rotation in 'all' section (pauses on user hover)
  useEffect(() => {
    if (activeTab !== 'all' || isHovered) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % activeItems.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [activeTab, isHovered, activeItems.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
  };

  // 3D positioning calculation relative to centerIndex
  const getCardPosition = (idx) => {
    const total = activeItems.length;
    let diff = idx - centerIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;

    if (diff === 0) {
      return {
        role: 'center',
        style: {
          transform: 'translateX(0%) rotateY(0deg) scale(1) translateZ(40px)',
          zIndex: 30,
          opacity: 1,
        },
      };
    } else if (diff === -1) {
      return {
        role: 'left',
        style: {
          transform: 'translateX(-68%) rotateY(16deg) scale(0.88) translateZ(-30px)',
          zIndex: 20,
          opacity: 0.85,
        },
      };
    } else if (diff === 1) {
      return {
        role: 'right',
        style: {
          transform: 'translateX(68%) rotateY(-16deg) scale(0.88) translateZ(-30px)',
          zIndex: 20,
          opacity: 0.85,
        },
      };
    } else {
      return {
        role: 'hidden',
        style: {
          display: 'none',
          transform: `translateX(${diff > 0 ? 100 : -100}%) scale(0.65) translateZ(-100px)`,
          zIndex: 10,
          opacity: 0,
          pointerEvents: 'none',
        },
      };
    }
  };

  const handleCardClick = (role, item) => {
    if (role === 'center') {
      if (onNavigate) onNavigate('web-and-app-development');
    } else if (role === 'left') {
      handlePrev();
    } else if (role === 'right') {
      handleNext();
    } else {
      const targetIdx = activeItems.indexOf(item);
      if (targetIdx !== -1) setCenterIndex(targetIdx);
    }
  };

  const handleContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const navHeight = 90;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (onContactClick) {
      onContactClick();
    } else if (onNavigate) {
      onNavigate('home', 'contact');
    }
  };

  return (
    <section id="home" className="relative w-full max-w-full overflow-x-clip bg-white text-slate-900">
      
      {/* 1. Hero Showcase Section (Replacing the Old Video) */}
      <div 
        className="w-full min-h-screen bg-white flex flex-col justify-between pt-5 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16"
      >
        
        {/* Top Header Row: CREATIVE SOLUTION Logo & LETS TALK Button */}
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-7">
          
          {/* Left: Branding Title & Subtitle */}
          <div 
            className={`flex flex-col items-start w-fit max-w-full transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black font-primary tracking-tight leading-none select-none">
              <span className="text-[#002a7f]">CREATIVE</span>{' '}
              <span className="text-black">SOLUTION</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 font-secondary font-medium tracking-wide mt-1.5 sm:mt-2 select-none">
              Your Vision. Our Innovation.
            </p>
          </div>

          {/* Right: LETS TALK CTA Button */}
          <div 
            className={`shrink-0 transition-all duration-700 delay-150 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-90'
            }`}
          >
            <button
              type="button"
              onClick={handleContact}
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-[#002a7f] hover:bg-[#0038a8] active:scale-95 text-white font-secondary font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer whitespace-nowrap"
              id="hero-btn-lets-talk"
            >
              <span>LETS TALK</span>
            </button>
          </div>

        </div>

        {/* Category Filter Pill Bar */}
        <div 
          className={`w-full max-w-[1440px] mx-auto mb-4 sm:mb-5 md:mb-6 transition-all duration-700 delay-300 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="w-full flex items-center justify-center py-1">
            <div className="inline-flex items-center space-x-0.5 sm:space-x-1 border border-slate-300/80 rounded-full p-1 bg-white/95 shadow-sm max-w-full overflow-x-auto lg:overflow-hidden no-scrollbar">
              
              {/* "All" Tab */}
              <button
                type="button"
                onClick={() => handleTabClick('all')}
                className={`rounded-full px-3 sm:px-3.5 md:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#002a7f] text-white shadow-sm'
                    : 'text-slate-700 hover:text-black hover:bg-slate-100'
                }`}
              >
                All
              </button>

              {/* 8 Category Tabs */}
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleTabClick(cat.id)}
                    className={`rounded-full px-2 sm:px-2.5 md:px-3 lg:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#002a7f] text-white shadow-sm'
                        : 'text-slate-700 hover:text-black hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}

            </div>
          </div>
        </div>

        {/* 3D Showcase Carousel Section */}
        <div 
          className="w-full max-w-[1100px] mx-auto flex-grow flex flex-col items-center justify-center my-1 sm:my-2 relative px-2 sm:px-4 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 3D Stage Viewport */}
          <div 
            className="w-full h-[300px] sm:h-[340px] md:h-[370px] lg:h-[400px] relative flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            {/* Left Nav Arrow Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-1 sm:left-2 md:left-4 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#002a7f] shadow-lg backdrop-blur-md border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-1 sm:right-2 md:right-4 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#002a7f] shadow-lg backdrop-blur-md border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mapped 3D Cards */}
            {activeItems.map((item, idx) => {
              const { role, style } = getCardPosition(idx);
              const isCenter = role === 'center';

              return (
                <div
                  key={`${item.title}-${idx}`}
                  onClick={() => handleCardClick(role, item)}
                  style={style}
                  className={`absolute w-[240px] sm:w-[280px] md:w-[315px] lg:w-[345px] h-[260px] sm:h-[305px] md:h-[335px] lg:h-[365px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out will-change-transform select-none ${
                    isCenter
                      ? 'border border-slate-200/90'
                      : 'border border-slate-200/60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none transition-opacity duration-500 ${
                    isCenter 
                      ? 'from-black/85 via-black/25 to-transparent' 
                      : 'from-black/90 via-black/45 to-black/15'
                  }`} />

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-white">
                    <h3 className={`font-bold font-primary tracking-tight leading-snug transition-colors ${
                      isCenter 
                        ? 'text-lg sm:text-xl md:text-2xl text-white group-hover:text-cyan-300' 
                        : 'text-sm sm:text-base md:text-lg text-slate-100'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-slate-300 font-secondary mt-1 line-clamp-1 ${
                      isCenter ? 'text-xs sm:text-sm text-slate-200' : 'text-[11px] sm:text-xs text-slate-300'
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3D Carousel Dot Indicators */}
          <div className="flex items-center justify-center space-x-2 pt-2 sm:pt-3">
            {activeItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCenterIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  centerIndex === idx
                    ? 'w-7 sm:w-8 h-2 bg-[#002a7f] shadow-sm'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* 2. AI-POWERED THE FUTURE OF BUSINESS Section */}
      <div 
        id="ai-future"
        className="w-full max-w-full bg-white text-slate-900 flex items-center justify-center relative z-10 overflow-hidden h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] min-h-[480px] pb-12 sm:pb-16 md:pb-20 border-t border-slate-100"
      >
        <div className="w-full max-w-[1440px] mx-auto h-full px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
          
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold uppercase tracking-tight whitespace-normal md:whitespace-nowrap leading-tight select-none animate-gradient-blue-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] max-w-full">
            AI-POWERED THE FUTURE OF BUSINESS
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] font-semibold text-slate-800 font-secondary leading-relaxed max-w-3xl mx-auto text-balance">
            We build intelligent software that transforms complex business processes into simple,
            connected experiences combining AI, automation, and modern technology
            to help businesses work smarter, move faster, and grow with confidence.
          </p>

          {/* Discover More CTA Button */}
          <div className="mt-6 sm:mt-8 relative z-20">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('web-and-app-development')}
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-3.5 rounded-full bg-[#002a7f] hover:bg-[#001d5c] text-white font-secondary font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              id="btn-discover-more"
            >
              Discover More
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
