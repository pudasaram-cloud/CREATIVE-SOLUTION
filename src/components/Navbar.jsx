import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logocs.png';
import solutionLeaderImg from '../assets/solution-leader.jpg';
import solutionTeamImg from '../assets/solution-team.jpg';
import SearchModal from './SearchModal';

const serviceCategories = [
  {
    title: 'Digital & Software',
    items: [
      'Web & App Development',
      'Custom Software Development',
      'System Integration',
      'POS & Retail Systems',
      'ERP & Business Management Systems',
    ],
  },
  {
    title: 'AI, Cloud & Data',
    items: [
      'AI Solutions',
      'Business Automation',
      'Cloud Solutions',
      'Data & Analytics',
      'Intelligent Process Automation',
    ],
  },
  {
    title: 'Cybersecurity & IT',
    items: [
      'Cybersecurity Solutions',
      'Firewall Services',
      'VAPT Services',
      'DDoS Protection',
      'IT Consulting & Support',
      'Managed IT Services',
    ],
  },
  {
    title: 'Creative & Media',
    items: [
      'Video Editing',
      'Custom Flyer Design',
      'Graphic Design',
      'Social Media Creative Design',
      'Digital Content Creation',
    ],
  },
];

const solutionCategories = [
  {
    title: 'Business Solutions',
    items: [
      'Business Management',
      'Digital Transformation',
      'Business Automation',
      'Enterprise Solutions',
      'Customer Experience',
      'Data & Analytics',
    ],
  },
  {
    title: 'Industry Solutions',
    items: [
      'Retail & POS',
      'Restaurants & Hospitality',
      'Manufacturing',
      'Construction & Engineering',
      'Logistics & Transportation',
      'Energy & Utilities',
      'Telecommunications',
    ],
  },
];

export default function Navbar({ 
  activeSection = 'home', 
  setActiveSection = () => {}, 
  currentPage = 'home', 
  onNavigate 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // Detect scroll to show/hide navbar on home page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside or pressing Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setServicesOpen(false);
        setSolutionsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setSolutionsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);

    if (sectionId === 'about') {
      if (onNavigate) {
        onNavigate('about');
        return;
      }
    }

    if (sectionId === 'home') {
      if (currentPage !== 'home' && onNavigate) {
        onNavigate('home', 'home');
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home', sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleServices = () => {
    setServicesOpen((prev) => {
      if (!prev) setSolutionsOpen(false);
      return !prev;
    });
  };

  const toggleSolutions = () => {
    setSolutionsOpen((prev) => {
      if (!prev) setServicesOpen(false);
      return !prev;
    });
  };

  const handleItemClick = (sectionTarget = 'home', itemName = null) => {
    setServicesOpen(false);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);

    if (itemName === 'Web & App Development' && onNavigate) {
      onNavigate('web-and-app-development');
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home', sectionTarget);
      return;
    }

    scrollToSection(sectionTarget);
  };

  const isHome = currentPage === 'home';
  const showNav = !isHome || scrolled || mobileMenuOpen || searchModalOpen;

  return (
    <>
      <header 
        ref={headerRef} 
      className={`${
        isHome 
          ? `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
              showNav 
                ? 'translate-y-0 opacity-100 shadow-xl pointer-events-auto' 
                : '-translate-y-full opacity-0 pointer-events-none'
            }`
          : 'sticky top-0 z-50 shadow-md transition-all duration-300 translate-y-0 opacity-100 pointer-events-auto'
      } bg-[#002a7f]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Left: Logo & Search Bar UI */}
          <div className="flex items-center space-x-8 md:space-x-10">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex flex-col items-start justify-center cursor-pointer select-none py-1"
              id="brand-logo"
            >
              <img 
                src={logoImg} 
                alt="Creative Solution Logo" 
                className="h-8 sm:h-9 md:h-11 w-auto object-contain"
              />
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-white uppercase font-sans mt-1 whitespace-nowrap leading-none drop-shadow-sm">
                CREATIVE SOLUTION
              </span>
            </a>

            {/* Search Bar UI Button */}
            <button
              type="button"
              onClick={() => {
                setServicesOpen(false);
                setSolutionsOpen(false);
                setSearchModalOpen(true);
              }}
              className="hidden sm:flex items-center border-[1.5px] border-white rounded-full px-5 py-2 bg-transparent hover:bg-white/10 active:scale-95 transition-all duration-200 w-44 md:w-48 font-secondary cursor-pointer text-left group"
              id="search-btn"
              aria-label="Open full screen search"
            >
              <Search className="w-5 h-5 text-white mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
              <span className="text-white text-base md:text-lg font-normal">Search</span>
            </button>
          </div>

          {/* Right: Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 font-secondary">
            
            {/* Home */}
            <button
              onClick={() => scrollToSection('home')}
              className={`text-base tracking-wider font-bold transition-colors duration-200 cursor-pointer font-secondary ${
                activeSection === 'home' && !servicesOpen && !solutionsOpen
                  ? 'text-white font-extrabold' 
                  : 'text-white hover:text-cyan-300'
              }`}
              id="nav-home"
            >
              Home
            </button>

            {/* Services Dropdown Toggle Button (Only opens on click) */}
            <button
              onClick={toggleServices}
              aria-expanded={servicesOpen}
              className={`text-base tracking-wider font-bold transition-colors duration-200 cursor-pointer font-secondary inline-flex items-center space-x-1.5 ${
                servicesOpen 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
              id="nav-services"
            >
              <span>Services</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180 text-cyan-300' : 'text-white'
                }`} 
                strokeWidth={2.5}
              />
            </button>

            {/* Solutions Dropdown Toggle Button (Only opens on click) */}
            <button
              onClick={toggleSolutions}
              aria-expanded={solutionsOpen}
              className={`text-base tracking-wider font-bold transition-colors duration-200 cursor-pointer font-secondary inline-flex items-center space-x-1.5 ${
                solutionsOpen 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
              id="nav-solutions"
            >
              <span>Solutions</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  solutionsOpen ? 'rotate-180 text-cyan-300' : 'text-white'
                }`} 
                strokeWidth={2.5}
              />
            </button>

            {/* About Us */}
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('about');
                } else {
                  scrollToSection('about');
                }
              }}
              className={`text-base tracking-wider font-bold transition-colors duration-200 cursor-pointer font-secondary ${
                currentPage === 'about'
                  ? 'text-cyan-300 font-extrabold'
                  : 'text-white hover:text-cyan-300'
              }`}
              id="nav-about"
            >
              About Us
            </button>

            {/* Contact Us */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-base tracking-wider font-bold text-white hover:text-cyan-300 transition-colors duration-200 cursor-pointer font-secondary"
              id="nav-contact"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Services Animated Expandable Mega Menu Panel */}
      <div 
        className={`hidden lg:grid transition-[grid-template-rows,opacity] duration-500 ease-in-out border-t shadow-[0_25px_60px_rgba(0,0,0,0.4)] ${
          servicesOpen 
            ? 'grid-rows-[1fr] opacity-100 border-white/15' 
            : 'grid-rows-[0fr] opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="overflow-hidden bg-[#002a7f]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-16 md:py-20 lg:py-24 min-h-[48vh] flex flex-col justify-center">
            <div className="grid grid-cols-4 gap-8 xl:gap-14">
              {serviceCategories.map((category, colIdx) => (
                <div 
                  key={category.title}
                  className={`flex flex-col transition-all duration-500 ease-out transform ${
                    servicesOpen 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{
                    transitionDelay: servicesOpen ? `${colIdx * 70}ms` : '0ms'
                  }}
                >
                  {/* Category Title with Bottom Line */}
                  <div className="mb-7 sm:mb-8">
                    <h4 className="text-xl sm:text-[22px] md:text-2xl font-extrabold text-white tracking-tight font-primary pb-3 border-b-2 border-white/40">
                      {category.title}
                    </h4>
                  </div>

                  {/* Category Items List */}
                  <ul className="space-y-4 sm:space-y-5 font-secondary">
                    {category.items.map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => handleItemClick('services', item)}
                          className="text-left text-white/95 hover:text-cyan-300 text-base sm:text-[17px] md:text-[18px] lg:text-[19px] font-semibold leading-snug transition-all duration-200 cursor-pointer block hover:translate-x-1.5 transform"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Animated Expandable Mega Menu Panel with Corner Images */}
      <div 
        className={`hidden lg:grid transition-[grid-template-rows,opacity] duration-500 ease-in-out border-t shadow-[0_25px_60px_rgba(0,0,0,0.4)] ${
          solutionsOpen 
            ? 'grid-rows-[1fr] opacity-100 border-white/15' 
            : 'grid-rows-[0fr] opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="overflow-hidden bg-[#002a7f]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-16 md:py-20 lg:py-24 min-h-[48vh] flex flex-col justify-center">
            <div className="grid grid-cols-12 gap-8 xl:gap-12 items-center">
              
              {/* Left Side: Business Solutions (Column 1) */}
              <div 
                className={`col-span-3 xl:col-span-3 flex flex-col transition-all duration-500 ease-out transform ${
                  solutionsOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: solutionsOpen ? '50ms' : '0ms' }}
              >
                <div className="mb-7 sm:mb-8">
                  <h4 className="text-xl sm:text-[22px] md:text-2xl font-extrabold text-white tracking-tight font-primary pb-3 border-b-2 border-white/40">
                    Business Solutions
                  </h4>
                </div>

                <ul className="space-y-4 sm:space-y-5 font-secondary">
                  {solutionCategories[0].items.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => handleItemClick('solutions')}
                        className="text-left text-white/95 hover:text-cyan-300 text-base sm:text-[17px] md:text-[18px] lg:text-[19px] font-semibold leading-snug transition-all duration-200 cursor-pointer block hover:translate-x-1.5 transform"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Middle Side: Industry Solutions (Column 2) */}
              <div 
                className={`col-span-4 xl:col-span-4 flex flex-col transition-all duration-500 ease-out transform ${
                  solutionsOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: solutionsOpen ? '120ms' : '0ms' }}
              >
                <div className="mb-7 sm:mb-8">
                  <h4 className="text-xl sm:text-[22px] md:text-2xl font-extrabold text-white tracking-tight font-primary pb-3 border-b-2 border-white/40">
                    Industry Solutions
                  </h4>
                </div>

                <ul className="space-y-4 sm:space-y-5 font-secondary">
                  {solutionCategories[1].items.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => handleItemClick('industries')}
                        className="text-left text-white/95 hover:text-cyan-300 text-base sm:text-[17px] md:text-[18px] lg:text-[19px] font-semibold leading-snug transition-all duration-200 cursor-pointer block hover:translate-x-1.5 transform"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Two Corner Images (Matching User Mockup) */}
              <div 
                className={`col-span-5 xl:col-span-5 flex items-center justify-end space-x-5 lg:space-x-6 transition-all duration-700 ease-out transform ${
                  solutionsOpen 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : 'opacity-0 scale-95 translate-x-6'
                }`}
                style={{ transitionDelay: solutionsOpen ? '180ms' : '0ms' }}
              >
                {/* Image 1: Corporate Leader in Suit */}
                <div className="group relative w-44 sm:w-48 md:w-52 lg:w-56 h-72 sm:h-80 md:h-[340px] rounded-2xl sm:rounded-[26px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex-shrink-0 bg-blue-950/50 border border-white/10">
                  <img 
                    src={solutionLeaderImg} 
                    alt="Corporate Business Solutions" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Image 2: Team Collaboration in Boardroom */}
                <div className="group relative w-44 sm:w-48 md:w-52 lg:w-56 h-72 sm:h-80 md:h-[340px] rounded-2xl sm:rounded-[26px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex-shrink-0 bg-blue-950/50 border border-white/10">
                  <img 
                    src={solutionTeamImg} 
                    alt="Industry Solutions Team Collaboration" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#00226b] border-t border-white/10 px-4 pt-4 pb-6 space-y-3 shadow-xl font-secondary animate-fade-in">
          {/* Mobile Search Bar Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchModalOpen(true);
            }}
            className="flex sm:hidden items-center border-[1.5px] border-white rounded-full px-4 py-2 bg-transparent hover:bg-white/10 active:scale-95 transition-all duration-200 w-full mb-3 font-secondary text-left group cursor-pointer"
            aria-label="Open full screen search"
          >
            <Search className="w-4 h-4 text-white mr-2.5 flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
            <span className="text-white text-sm">Search</span>
          </button>

          <div className="flex flex-col space-y-1 font-secondary">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left px-3 py-2 text-white font-bold tracking-wide rounded-lg hover:bg-white/10 text-base font-secondary cursor-pointer"
            >
              Home
            </button>

            {/* Mobile Services Accordion Toggle */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-white font-bold tracking-wide rounded-lg hover:bg-white/10 text-base font-secondary cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-cyan-300' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-4 bg-black/15 rounded-lg mt-1">
                  {serviceCategories.map((cat) => (
                    <div key={cat.title}>
                      <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                        {cat.title}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => handleItemClick('services', item)}
                              className="text-left text-xs text-white/90 hover:text-cyan-300 py-1 block cursor-pointer"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion Toggle */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-white font-bold tracking-wide rounded-lg hover:bg-white/10 text-base font-secondary cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180 text-cyan-300' : ''}`} />
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-4 bg-black/15 rounded-lg mt-1">
                  {solutionCategories.map((cat) => (
                    <div key={cat.title}>
                      <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                        {cat.title}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => handleItemClick('solutions')}
                              className="text-left text-xs text-white/90 hover:text-cyan-300 py-1 block cursor-pointer"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigate) {
                  onNavigate('about');
                } else {
                  scrollToSection('about');
                }
              }}
              className={`text-left px-3 py-2 font-bold tracking-wide rounded-lg hover:bg-white/10 text-base font-secondary cursor-pointer ${
                currentPage === 'about' ? 'text-cyan-300' : 'text-white'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 text-white font-bold tracking-wide rounded-lg hover:bg-white/10 text-base font-secondary cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
      </header>
      {/* Full-Screen Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
        onSelectResult={scrollToSection} 
        onNavigate={onNavigate}
      />
    </>
  );
}
