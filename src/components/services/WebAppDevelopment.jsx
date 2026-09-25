import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Users,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import webappHeroImg from '../../assets/webapp-hero.jpg';
import digitalInnovation1 from '../../assets/digital-innovation-1.jpg';
import digitalInnovation2 from '../../assets/digital-innovation-2.jpg';
import ReadyToBuild from '../ReadyToBuild';
import Footer from '../Footer';

const faqItems = [
  {
    id: 1,
    question: "What digital solutions do you provide?",
    answer: "We provide website and app development, business management systems, POS solutions, LMS platforms, AI solutions, automation, cloud services, and custom software tailored to your business needs."
  },
  {
    id: 2,
    question: "Can you create a solution specifically for my business?",
    answer: "Yes. We develop customized solutions based on your business processes, goals, industry requirements, and future growth plans."
  },
  {
    id: 3,
    question: "How do you help businesses improve with technology?",
    answer: "We identify opportunities to simplify processes, automate repetitive tasks, improve customer experiences, and provide digital tools that help businesses operate more efficiently."
  },
  {
    id: 4,
    question: "Can you support and maintain the system after development?",
    answer: "Yes. We provide ongoing technical support, maintenance, updates, improvements, and scalability to keep your digital solutions secure and performing effectively."
  }
];

const whyChooseItems = [
  {
    id: 1,
    title: 'AI-Powered Innovation',
    icon: Sparkles,
    cardTitle: 'AI-Powered Innovation',
    desc1: 'At Creative Solution, artificial intelligence is built into every web and mobile solution from the ground up. We enhance your digital platforms with smart automation, predictive algorithms, and tailored recommendation engines.',
    desc2: 'Our intelligent features streamline user interactions, automate complex workflows, and deliver personalized user journeys that convert visitors into loyal customers.',
    desc3: 'With Creative Solution, your business can innovate, grow, and stay confidently connected.',
  },
  {
    id: 2,
    title: 'Custom-Built Solutions',
    icon: Layers,
    cardTitle: 'Custom-Built Solutions',
    desc1: 'We engineer bespoke websites, high-performance web applications, and intuitive mobile solutions built precisely around your operational workflows and business objectives.',
    desc2: 'From modern headless frontend architectures to scalable cloud-native microservices, our codebases are crafted cleanly without bloated templates or rigid constraints.',
    desc3: 'With Creative Solution, your digital architecture scales seamlessly alongside your business expansion.',
  },
  {
    id: 3,
    title: 'Secure & Scalable Technology',
    icon: ShieldCheck,
    cardTitle: 'Secure & Scalable Technology',
    desc1: 'Security and scalability are the foundation of our engineering process. We protect your business with zero-trust architectures, end-to-end data encryption, and robust access controls.',
    desc2: 'Our cloud deployments automatically balance traffic spikes, optimize load performance, and ensure enterprise compliance across every digital touchpoint.',
    desc3: 'With Creative Solution, your systems remain resilient, protected, and available around the clock.',
  },
  {
    id: 4,
    title: 'User-Centered Experiences',
    icon: Users,
    cardTitle: 'User-Centered Experiences',
    desc1: 'We craft human-centered digital experiences that merge visual elegance with frictionless usability, intuitive navigation, and rapid response times.',
    desc2: 'Through research-backed user journeys, interactive prototypes, and conversion rate optimization, we ensure every interaction delights your audience.',
    desc3: 'With Creative Solution, turn casual visitors into loyal brand advocates through unforgettable digital design.',
  },
];

const innovationSlides = [
  {
    id: 1,
    image: digitalInnovation1,
    alt: "Solutions to Drive Digital Innovation and Business Growth - Night Cityscape 1",
    cardTitle: "Creative Solution",
    desc1: "We deliver innovative digital solutions that connect technology, streamline operations, and create smarter ways for businesses to grow and succeed.",
    desc2: "Our solutions are designed to simplify complex processes and improve everyday business performance. From modern websites and business systems to AI-powered solutions, we turn ideas into practical digital experiences. We combine creative design, reliable technology, and scalable solutions to meet evolving business needs. With the right digital foundation, businesses can operate smarter, serve customers better, and build sustainable growth."
  },
  {
    id: 2,
    image: digitalInnovation2,
    alt: "Solutions to Drive Digital Innovation and Business Growth - Night Cityscape 2",
    cardTitle: "Creative Solution",
    desc1: "We engineer scalable digital platforms and high-performance applications designed to transform operational efficiency and accelerate market leadership.",
    desc2: "Our solutions are designed to simplify complex processes and improve everyday business performance. From modern websites and business systems to AI-powered solutions, we turn ideas into practical digital experiences. We combine creative design, reliable technology, and scalable solutions to meet evolving business needs. With the right digital foundation, businesses can operate smarter, serve customers better, and build sustainable growth."
  }
];

export default function WebAppDevelopment({ onNavigate, onContactClick }) {
  // First item open by default as in IndustriesSolutions, toggled on click
  const [activeWhyChooseId, setActiveWhyChooseId] = useState(1);

  // FAQ accordion state (first item open by default)
  const [activeFaqId, setActiveFaqId] = useState(1);

  // 5-second automatic sliding carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

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
      // Swiped left
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    } else if (distance < -50) {
      // Swiped right
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const toggleItem = (id) => {
    setActiveWhyChooseId((prevId) => (prevId === id ? null : id));
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
    <div className="w-full bg-[#020714] text-white min-h-screen flex flex-col font-secondary">
      
      {/* 1. Breadcrumb Bar (Matching User Screenshot) */}
      <div className="w-full bg-white text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center space-x-2.5 text-xs sm:text-sm font-secondary font-medium">
          {/* Home Icon */}
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center text-slate-700 hover:text-[#002a7f] transition-colors cursor-pointer"
            aria-label="Back to Home"
          >
            <HomeIcon className="w-4 h-4" />
          </button>

          <span className="text-slate-400 font-normal select-none">&gt;</span>

          {/* Services Link */}
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('home', 'services')}
            className="text-slate-700 hover:text-[#002a7f] transition-colors cursor-pointer"
          >
            Services
          </button>

          <span className="text-slate-400 font-normal select-none">&gt;</span>

          {/* Current Page */}
          <span className="text-slate-900 font-bold tracking-tight">
            Web &amp; App development
          </span>
        </div>
      </div>

      {/* 2. Hero Section (Matching User Screenshot) */}
      <section className="relative w-full bg-[#020714] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Heading, Description & Action Buttons */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-primary select-none">
                Web &amp;<br />App Development
              </h1>

              {/* Description Paragraph */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-200/90 leading-relaxed font-secondary font-normal max-w-xl">
                We build modern, scalable, and user-focused websites and applications that turn ideas into powerful digital experiences. From business websites and mobile apps to custom web platforms, we create secure, responsive solutions designed to support growth and deliver real business value.
              </p>

              {/* Action Buttons Row */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                {/* Book a demo Button */}
                <button
                  type="button"
                  onClick={handleContact}
                  className="inline-flex items-center space-x-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#002a7f] hover:bg-[#0038a8] text-white font-secondary font-bold text-base shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                  id="btn-book-demo"
                >
                  <span>Book a demo</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" strokeWidth={2.5} />
                </button>

                {/* Contact us Button */}
                <button
                  type="button"
                  onClick={handleContact}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 hover:border-white hover:bg-white/10 active:scale-95 text-white font-secondary font-semibold text-base transition-all duration-200 cursor-pointer"
                >
                  <span>Contact us</span>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
                <img
                  src={webappHeroImg}
                  alt="Web & App Development"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Three Sentences Aligned White Section */}
      <section className="w-full bg-white text-slate-700 py-12 sm:py-14 md:py-16 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="w-full max-w-6xl mx-auto text-center font-secondary space-y-2 sm:space-y-2.5">
          <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] font-medium text-slate-600 leading-relaxed text-center">
            We combine modern web and app development with AI to create smarter digital experiences.
          </p>
          <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] font-medium text-slate-600 leading-relaxed text-center">
            From AI-powered websites and mobile apps to intelligent automation and customer support, we build solutions that adapt to your business needs.
          </p>
          <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] font-medium text-slate-600 leading-relaxed text-center">
            Our technology helps businesses work smarter, serve customers better, and grow faster.
          </p>
        </div>
      </section>

      {/* 4. Why Choose Our Web & App Development Section (Sticky Headline & Downward-Opening Accordion) */}
      <section 
        id="why-choose" 
        className="relative w-full bg-[#020714] text-white pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-12 border-t border-white/10"
      >
        {/* SVG LinearGradient Definition for Purple, Blue & White Icons */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="purpleBlueWhiteGradientWebApp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14">
            
            {/* Left Column: Fixed / Sticky Big Headline occupying at least half of page height */}
            <div className="lg:col-span-7 xl:col-span-6 relative">
              <div className="lg:sticky lg:top-24 xl:top-28 z-10 flex flex-col items-start justify-start pt-2">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[100px] font-extrabold font-primary text-white leading-[1.1] sm:leading-[1.12] tracking-tight select-none">
                  <span className="bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-white bg-clip-text text-transparent block pb-2 sm:pb-2.5">
                    Why Choose
                  </span>
                  <span className="block">Our Web &amp; App</span>
                  <span className="block">Development</span>
                </h2>
              </div>
            </div>

            {/* Right Column: Items with Downward-Opening Panels (Exact same behavior as IndustriesSolutions) */}
            <div className="lg:col-span-5 xl:col-span-6 flex flex-col space-y-2 pt-0 mt-0">
              {whyChooseItems.map((item, index) => {
                const IconComponent = item.icon;
                const isOpen = activeWhyChooseId === item.id;

                return (
                  <div 
                    key={item.id}
                    className="border-b border-white/15 transition-colors duration-200"
                  >
                    {/* Item Header Row */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center text-left cursor-pointer focus:outline-none group ${
                        index === 0 ? 'pt-0 pb-5 sm:pb-6' : 'py-5 sm:py-6'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg md:text-xl font-bold font-primary tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </span>
                    </button>

                    {/* Downward-Opening Content Panel */}
                    {isOpen && (
                      <div className="pb-6 pt-1 animate-in fade-in slide-in-from-top-3 duration-300">
                        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                          
                          {/* Panel Header with Icon Badge & Title */}
                          <div className="flex items-start sm:items-center space-x-4 sm:space-x-5 mb-5 sm:mb-6">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-purple-500/25 flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-white flex-shrink-0 shadow-sm">
                              <IconComponent 
                                className="w-8 h-8 sm:w-9 sm:h-9" 
                                stroke="url(#purpleBlueWhiteGradientWebApp)"
                                strokeWidth={2.3} 
                              />
                            </div>
                            <h4 className="text-xl sm:text-2xl md:text-[25px] font-bold font-primary text-slate-950 leading-snug">
                              {item.cardTitle}
                            </h4>
                          </div>

                          {/* Panel Body Text */}
                          <div className="space-y-3.5 text-slate-600 font-secondary text-sm sm:text-[15px] leading-relaxed">
                            <p>{item.desc1}</p>
                            <p>{item.desc2}</p>
                            <p className="font-medium text-slate-800">{item.desc3}</p>
                          </div>

                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Solutions to Drive Digital Innovation and Business Growth (Slider Banner) */}
      <section className="w-full bg-white text-slate-900 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-hidden">
        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold font-primary text-black tracking-tight leading-tight max-w-4xl mx-auto">
            Solutions to Drive Digital Innovation and<br className="hidden sm:inline" /> Business Growth
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full overflow-hidden group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {innovationSlides.map((slide, idx) => (
              <div 
                key={slide.id}
                className="w-full flex-shrink-0 relative h-[50vh] min-h-[380px] md:min-h-[420px] flex items-center"
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading={idx === 0 ? "eager" : "lazy"}
                />

                {/* Subtle dark gradient overlay for optimal depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none" />

                {/* Content Overlay Card Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
                  <div className="bg-white text-slate-900 rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-w-md sm:max-w-lg md:max-w-xl border border-white/80">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold font-primary text-black tracking-tight mb-2 sm:mb-3">
                      {slide.cardTitle}
                    </h3>
                    <p className="text-xs sm:text-[13px] md:text-[13.5px] text-slate-600 font-secondary leading-relaxed mb-2.5 sm:mb-3">
                      {slide.desc1}
                    </p>
                    <p className="text-xs sm:text-[13px] md:text-[13.5px] text-slate-600 font-secondary leading-relaxed">
                      {slide.desc2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? innovationSlides.length - 1 : prev - 1))}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev === innovationSlides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators Row (Pill for active, Dot for inactive - Matching User Screenshot) */}
        <div className="w-full bg-white pt-6 pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-start space-x-2.5">
            {innovationSlides.map((_, index) => {
              const isActive = currentSlide === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'w-12 sm:w-14 h-2 sm:h-2.5 rounded-full bg-[#002a7f]' 
                      : 'w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#002a7f] hover:opacity-80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? 'true' : 'false'}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (Matching User Screenshot) */}
      <section className="w-full bg-white text-slate-900 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-primary text-black tracking-tight text-center mb-12 sm:mb-16">
            Frequently Asked Questions
          </h2>

          {/* FAQ Accordion List */}
          <div className="flex flex-col divide-y divide-slate-200">
            {faqItems.map((item) => {
              const isOpen = activeFaqId === item.id;
              return (
                <div key={item.id} className="py-6 sm:py-7 transition-colors">
                  {/* Question Header Row */}
                  <button
                    type="button"
                    onClick={() => setActiveFaqId((prev) => (prev === item.id ? null : item.id))}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl md:text-[22px] font-bold font-primary text-black tracking-tight group-hover:text-[#002a7f] transition-colors pr-6">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 text-black flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {/* Answer Content Panel */}
                  {isOpen && (
                    <div className="pt-4 sm:pt-5 pr-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-500 font-secondary leading-relaxed max-w-2xl">
                        {item.answer}
                      </p>
                      <div className="mt-5 sm:mt-6">
                        <button
                          type="button"
                          onClick={handleContact}
                          className="inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#002a7f] hover:bg-[#0038a8] active:scale-95 text-white text-sm font-semibold font-secondary shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group/btn"
                        >
                          <span>Read more</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.2} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Ready to Build (Contact Form Section) */}
      <ReadyToBuild />

      {/* 8. Footer */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
