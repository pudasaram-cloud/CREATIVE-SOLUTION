import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Zap, 
  Factory, 
  Truck, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const industriesData = [
  {
    id: 1,
    name: 'Aviation & Security',
    icon: ShieldCheck,
    panelTitle: 'Security That Move with you',
    panelDesc1: 'At Creative Solution, security is built into every digital solution from the ground up. We protect your business with secure systems, controlled access,',
    panelDesc2: 'and modern data protection practices. Our approach helps keep your information, applications, and users protected in an increasingly connected world.',
    panelDesc3: 'With Creative Solution, your business can innovate, grow, and stay confidently connected.',
  },
  {
    id: 2,
    name: 'Infrastructure & Development',
    icon: Building2,
    panelTitle: 'Resilient Infrastructure for Modern Enterprise',
    panelDesc1: 'We engineer high-performance cloud architecture and enterprise frameworks designed for seamless scalability, zero downtime, and robust stability.',
    panelDesc2: 'Our systems adapt to growing organizational workloads while streamlining data pipelines, developer tooling, and mission-critical cloud deployments.',
    panelDesc3: 'Empower your engineering teams with foundational technology built to withstand tomorrow’s business demands.',
  },
  {
    id: 3,
    name: 'Energy & Resources',
    icon: Zap,
    panelTitle: 'Smart Energy & Sustainable Automation',
    panelDesc1: 'Transforming energy grids, utility networks, and resource distribution through intelligent IoT monitoring and predictive machine learning algorithms.',
    panelDesc2: 'Track consumption metrics in real-time, anticipate equipment maintenance, and optimize output efficiency across diverse power generation plants.',
    panelDesc3: 'Drive sustainable operational excellence while minimizing ecological impact and operational overhead.',
  },
  {
    id: 4,
    name: 'Industrial Solutions',
    icon: Factory,
    panelTitle: 'Next-Generation Smart Manufacturing',
    panelDesc1: 'Connecting industrial production floors with modern digital telemetry, robotics interfaces, and end-to-end supply chain visibility.',
    panelDesc2: 'Harness automated quality control, inventory synchronization, and digital twin simulations to eliminate factory downtime and operational delays.',
    panelDesc3: 'Unlock new levels of manufacturing precision with connected smart industrial technology.',
  },
  {
    id: 5,
    name: 'Logistics & Mobility',
    icon: Truck,
    panelTitle: 'Intelligent Fleet & Supply Chain Control',
    panelDesc1: 'Real-time fleet tracking, dynamic route optimization, and intelligent cargo management systems that ensure timely deliveries and lower logistics costs.',
    panelDesc2: 'Gain transparency into transit checkpoints, temperature-sensitive shipments, and regulatory compliance through unified mobility dashboards.',
    panelDesc3: 'Ensure dependable, agile, and cost-effective cargo movement across domestic and global logistics hubs.',
  },
  {
    id: 6,
    name: 'Digital Connectivity',
    icon: Globe,
    panelTitle: 'Seamless Ecosystems & Unified Networks',
    panelDesc1: 'Delivering unified telecommunication channels, high-speed API gateways, and distributed cloud computing systems for global enterprises.',
    panelDesc2: 'Enable secure cross-border communication, frictionless multi-device synchronization, and instant collaboration across international teams.',
    panelDesc3: 'Bridge digital divides with scalable connectivity infrastructure engineered for speed and absolute reliability.',
  },
];

export default function IndustriesSolutions() {
  // First item open by default as shown in the mockup, or toggled on click
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section 
      id="solutions" 
      className="relative w-full bg-[#020817] text-white pt-6 sm:pt-8 md:pt-10 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 lg:px-12"
    >
      {/* SVG LinearGradient Definition for Purple, Blue & White Icons */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="purpleBlueWhiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Big Headline with CTA Button fixed/sticky while scrolling through industries */}
          <div className="lg:col-span-6 relative">
            <div className="lg:sticky lg:top-28 z-10 flex flex-col items-start justify-start pt-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[68px] font-extrabold font-primary text-white leading-[1.12] sm:leading-[1.14] tracking-tight select-none">
                <span className="bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-white bg-clip-text text-transparent block pb-2 sm:pb-2.5">
                  Digital solutions
                </span>
                <span className="block">that transform</span>
                <span className="block">businesses</span>
                <span className="block">across</span>
                <span className="block">diverse industries.</span>
              </h2>

              {/* Find Your Solution button positioned directly under the big text */}
              <div className="mt-8 sm:mt-10">
                <button
                  type="button"
                  className="inline-flex items-center space-x-3 px-8 py-4 sm:px-9 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-secondary font-bold text-base sm:text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                  id="btn-find-solution"
                >
                  <span>Find Your Solution</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Industry Items with Downward-Opening Panels */}
          <div className="lg:col-span-6 flex flex-col space-y-2 pt-0 mt-0">
            {industriesData.map((item, index) => {
              const IconComponent = item.icon;
              const isOpen = activeId === item.id;

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
                      {item.name}
                    </span>
                  </button>

                  {/* Downward-Opening Content Panel */}
                  {isOpen && (
                    <div className="pb-6 pt-1 animate-in fade-in slide-in-from-top-3 duration-300">
                      <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                        
                        {/* Panel Header with Shield Badge & Title */}
                        <div className="flex items-start sm:items-center space-x-4 sm:space-x-5 mb-5 sm:mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-purple-500/25 flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-white flex-shrink-0 shadow-sm">
                            <IconComponent 
                              className="w-8 h-8 sm:w-9 sm:h-9" 
                              stroke="url(#purpleBlueWhiteGradient)"
                              strokeWidth={2.3} 
                            />
                          </div>
                          <h4 className="text-xl sm:text-2xl md:text-[25px] font-bold font-primary text-slate-950 leading-snug">
                            {item.panelTitle}
                          </h4>
                        </div>

                        {/* Panel Body Text matching reference styling */}
                        <div className="space-y-3.5 text-slate-600 font-secondary text-sm sm:text-[15px] leading-relaxed">
                          <p>{item.panelDesc1}</p>
                          <p>{item.panelDesc2}</p>
                          <p className="font-medium text-slate-800">{item.panelDesc3}</p>
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
  );
}
