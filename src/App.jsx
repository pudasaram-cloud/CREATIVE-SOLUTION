import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LatestAnnouncements from './components/LatestAnnouncements';
import IndustriesSolutions from './components/IndustriesSolutions';
import IntelligentTransformation from './components/IntelligentTransformation';
import BuiltOnTrust from './components/BuiltOnTrust';
import SustainableFuture from './components/SustainableFuture';
import NewsUpdates from './components/NewsUpdates';
import ReadyToBuild from './components/ReadyToBuild';
import Footer from './components/Footer';
import WebAppDevelopment from './components/services/WebAppDevelopment';
import AboutUs from './components/AboutUs';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash.includes('web-and-app-development')) {
        return 'web-and-app-development';
      }
      if (window.location.hash.includes('about')) {
        return 'about';
      }
    }
    return 'home';
  });

  useEffect(() => {
    if (currentPage === 'web-and-app-development') {
      document.title = "Web & App Development - Creative Solution";
    } else if (currentPage === 'about') {
      document.title = "About Us - Creative Solution";
    } else {
      document.title = "Creative Solution";
    }
  }, [currentPage]);

  // Synchronize with browser hash for back/forward buttons and direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('web-and-app-development')) {
        setCurrentPage('web-and-app-development');
      } else if (window.location.hash.includes('about')) {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, sectionId) => {
    setCurrentPage(page);
    if (page === 'web-and-app-development') {
      window.location.hash = 'services/web-and-app-development';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.hash.includes('web-and-app-development') || window.location.hash.includes('about')) {
        window.history.pushState(null, '', window.location.pathname + (sectionId ? `#${sectionId}` : ''));
      }
      if (sectionId && sectionId !== 'home') {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const navHeight = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-100 selection:bg-blue-600 selection:text-white w-full max-w-full overflow-x-clip">
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'web-and-app-development' ? (
        /* Web & App Development Page View */
        <main className="flex-grow w-full max-w-full overflow-x-clip bg-[#020714]">
          <WebAppDevelopment 
            onNavigate={handleNavigate} 
            onContactClick={() => handleNavigate('home', 'contact')} 
          />
        </main>
      ) : currentPage === 'about' ? (
        /* About Us Page View */
        <main className="flex-grow w-full max-w-full overflow-x-clip bg-white">
          <AboutUs 
            onNavigate={handleNavigate} 
            onContactClick={() => handleNavigate('home', 'contact')} 
          />
        </main>
      ) : (
        /* Home Main Content Section */
        <main className="flex-grow relative bg-white w-full max-w-full overflow-x-clip">
          {/* Hero Component (Pinned Sticky Layer Underneath when AI section aligns with viewport) */}
          <div className="sticky -top-[calc(100vh-80px)] md:-top-[calc(100vh-96px)] z-0 w-full max-w-full">
            <Home 
              onNavigate={handleNavigate} 
              onContactClick={() => handleNavigate('home', 'contact')} 
            />
          </div>

          {/* Main Content Sheet Wrapper (Elevated Layer Sliding Over Hero on Scroll) */}
          <div className="relative z-10 bg-[#020817] shadow-[0_-25px_60px_rgba(0,0,0,0.5)] rounded-t-3xl sm:rounded-t-[44px] border-t border-white/20 -mt-8 sm:-mt-11 w-full max-w-full">
            <LatestAnnouncements />
            <IndustriesSolutions />
            <IntelligentTransformation />
            <BuiltOnTrust />
            <SustainableFuture />
            <NewsUpdates />
            <ReadyToBuild />
            <Footer onNavigate={handleNavigate} />
          </div>
        </main>
      )}
    </div>
  );
}
