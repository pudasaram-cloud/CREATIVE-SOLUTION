import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Search, X, ArrowRight } from 'lucide-react';

const popularKeywords = [
  'AI Solutions',
  'Digital Transformation',
  'Cybersecurity',
  'Business Automation',
  'Cloud Solutions',
  'Web & App Development',
  'ERP & POS Systems',
  'Managed IT',
];

export default function SearchModal({ isOpen, onClose, onNavigate, onSelectResult }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  // Auto-focus input when opened & handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const executeSearch = (searchTerm) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return;

    handleClose();

    if (q.includes('web') || q.includes('app')) {
      if (onNavigate) onNavigate('web-and-app-development');
      return;
    }

    if (q.includes('ai') || q.includes('intelligent') || q.includes('future') || q.includes('transformation')) {
      if (onSelectResult) onSelectResult('ai-future');
      else if (onNavigate) onNavigate('home', 'ai-future');
      return;
    }

    if (q.includes('solution') || q.includes('pos') || q.includes('erp') || q.includes('automation') || q.includes('industry')) {
      if (onSelectResult) onSelectResult('solutions');
      else if (onNavigate) onNavigate('home', 'solutions');
      return;
    }

    if (q.includes('contact') || q.includes('talk') || q.includes('touch')) {
      if (onSelectResult) onSelectResult('contact');
      else if (onNavigate) onNavigate('home', 'contact');
      return;
    }

    if (q.includes('about') || q.includes('trust') || q.includes('partner')) {
      if (onSelectResult) onSelectResult('about');
      else if (onNavigate) onNavigate('home', 'about');
      return;
    }

    // Default to services
    if (onSelectResult) onSelectResult('services');
    else if (onNavigate) onNavigate('home', 'services');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeSearch(query);
  };

  const handleKeywordClick = (term) => {
    setQuery(term);
    executeSearch(term);
  };

  if (!isOpen) return null;
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] w-screen h-screen min-h-screen bg-[#020714] text-white flex flex-col items-center justify-start pt-20 sm:pt-28 md:pt-36 px-4 sm:px-6 md:px-8 overflow-y-auto animate-fade-in"
      style={{
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 42, 127, 0.45), transparent 75%)'
      }}
    >
      {/* Top Right Circular Close Button (Matching User Mockup) */}
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close search"
        className="fixed top-6 right-6 sm:top-8 sm:right-10 md:top-10 md:right-12 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/35 hover:border-white hover:bg-white/10 active:scale-95 flex items-center justify-center text-white transition-all duration-200 cursor-pointer group z-[10000]"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:rotate-90" strokeWidth={2.2} />
      </button>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Main Title Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight font-primary text-center mb-8 sm:mb-11 select-none">
          What are you looking for?
        </h2>

        {/* Large White Pill Search Bar Container */}
        <form 
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-full h-16 sm:h-20 px-5 sm:px-8 flex items-center shadow-2xl transition-all focus-within:ring-4 focus-within:ring-blue-500/30"
        >
          {/* Search Icon */}
          <Search className="w-6 h-6 sm:w-7 sm:h-7 text-slate-800 mr-3.5 sm:mr-4 flex-shrink-0" strokeWidth={2.2} />
          
          {/* Text Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Start typing to search"
            className="w-full bg-transparent text-slate-900 font-medium text-base sm:text-lg md:text-xl placeholder-slate-400 focus:outline-none font-secondary"
          />

          {/* Go Submit Button (Matching User Mockup) */}
          <button
            type="submit"
            className="ml-2 sm:ml-3 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#002a7f] hover:bg-[#001e5c] active:scale-95 text-white font-bold text-base sm:text-lg flex items-center space-x-2 transition-all shadow-md cursor-pointer flex-shrink-0 group font-secondary"
          >
            <span>Go</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </form>

        {/* Divider & Popular Searches / Keywords Section (Matching User Screenshot) */}
        <div className="w-full mt-24 sm:mt-32 md:mt-40 flex flex-col items-center pb-16">
          <div className="w-full max-w-xl h-[1px] bg-white/20 mb-5 sm:mb-6" />
          
          <span className="text-xs sm:text-sm text-slate-400 font-medium font-secondary select-none tracking-wide">
            Popular Searches
          </span>

          {/* Keyword tags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-4 sm:mt-5 max-w-xl">
            {popularKeywords.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => handleKeywordClick(term)}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs sm:text-sm text-slate-200 hover:text-white transition-all duration-200 cursor-pointer font-secondary hover:scale-105 active:scale-95"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}

