import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logocs.png';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export default function Footer({ onNavigate }) {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'about') {
      if (onNavigate) {
        onNavigate('about');
        return;
      }
    }
    if (onNavigate) {
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
    }
  };

  return (
    <footer className="w-full bg-[#001a4e] text-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-blue-900/40">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-3 flex flex-col items-start justify-start">
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="inline-block mb-6 select-none cursor-pointer"
            >
              <img 
                src={logoImg} 
                alt="Creative Solution Logo" 
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>

            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight font-primary">
              AI-powered. Future <br />
              ready.
            </h3>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-5 tracking-wide font-primary">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-secondary text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')} 
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Our Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('industries')} 
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Industries
                </button>
              </li>
              <li>
                <a href="#ai-innovation" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  AI & Innovation
                </a>
              </li>
              <li>
                <a href="#careers" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Careers
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-5 tracking-wide font-primary">
              Solutions
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-secondary text-sm">
              <li>
                <a href="#digital-transformation" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#artificial-intelligence" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#business-automation" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#data-analytics" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Data & Analytics
                </a>
              </li>
              <li>
                <a href="#cloud-solutions" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#cybersecurity" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-5 tracking-wide font-primary">
              Industries
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-secondary text-sm">
              <li>
                <a href="#manufacturing" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#energy-utilities" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Energy & Utilities
                </a>
              </li>
              <li>
                <a href="#construction-engineering" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Construction & Engineering
                </a>
              </li>
              <li>
                <a href="#telecommunications" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Telecommunications
                </a>
              </li>
              <li>
                <a href="#transportation-logistics" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Transportation & Logistics
                </a>
              </li>
              <li>
                <a href="#aerospace-defence" className="text-slate-300 hover:text-white transition-colors duration-200 block">
                  Aerospace & Defence
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-primary">
              Contact
            </h4>
            <p className="text-white font-semibold text-sm sm:text-base mb-1.5 font-secondary">
              Let&apos;s build what&apos;s next.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-secondary">
              Have a project, challenge, or idea? Our team is ready to help you explore the right technology solution.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm font-secondary">
              <a 
                href="mailto:CS@gmail.com" 
                className="flex items-center space-x-2.5 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                <span><strong className="text-white font-medium">Email:</strong> CS@gmail.com</span>
              </a>

              <a 
                href="tel:+94701095008" 
                className="flex items-center space-x-2.5 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                <span><strong className="text-white font-medium">Phone:</strong> +94 701095008</span>
              </a>

              <div className="flex items-center space-x-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Location:</strong> Sri Lanka</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-secondary">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            © 2026 Creative Solution. All rights reserved.
          </p>

          <div className="flex items-center space-x-5 text-slate-300">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
