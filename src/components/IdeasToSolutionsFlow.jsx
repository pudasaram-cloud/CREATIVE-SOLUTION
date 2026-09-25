import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Target, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Play, 
  Pause,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// The 6 Workflow Steps from User Specification
const WORKFLOW_STEPS = [
  {
    id: 1,
    number: "01",
    stepNum: "1",
    title: "Discover",
    subtitle: "Understand your business, goals, and challenges.",
    icon: Compass,
    accentColor: "#2563eb", // blue-600
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.4)",
    bgBadge: "bg-blue-50 text-blue-700 border-blue-200",
    deliverables: [
      "Stakeholder Goals",
      "Challenge Analysis",
      "Technical Feasibility",
      "Strategic Roadmap"
    ],
    summary: "We dive deep into your company's vision, current bottlenecks, and growth opportunities to design a crystal-clear digital blueprint."
  },
  {
    id: 2,
    number: "02",
    stepNum: "2",
    title: "Plan",
    subtitle: "Define the right technology and solution strategy.",
    icon: Target,
    accentColor: "#0284c7", // sky-600
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    glowColor: "rgba(2, 132, 199, 0.4)",
    bgBadge: "bg-sky-50 text-sky-700 border-sky-200",
    deliverables: [
      "Architecture Design",
      "Tech Stack Selection",
      "Timeline & Milestones",
      "Resource Planning"
    ],
    summary: "We outline technical specifications, choose scalable modern stacks, and construct an actionable implementation timeline."
  },
  {
    id: 3,
    number: "03",
    stepNum: "3",
    title: "Design",
    subtitle: "Create intuitive and user-focused digital experiences.",
    icon: Palette,
    accentColor: "#7c3aed", // violet-600
    gradient: "from-violet-600 via-purple-600 to-pink-500",
    glowColor: "rgba(124, 58, 237, 0.4)",
    bgBadge: "bg-violet-50 text-violet-700 border-violet-200",
    deliverables: [
      "Interactive Prototypes",
      "Modern UI/UX Systems",
      "Responsive Layouts",
      "Brand Harmony"
    ],
    summary: "Our design team crafts intuitive user interfaces and immersive journeys that drive engagement and convert visitors."
  },
  {
    id: 4,
    number: "04",
    stepNum: "4",
    title: "Develop",
    subtitle: "Build reliable and scalable technology solutions.",
    icon: Code2,
    accentColor: "#0d9488", // teal-600
    gradient: "from-teal-500 via-cyan-600 to-blue-600",
    glowColor: "rgba(13, 148, 136, 0.4)",
    bgBadge: "bg-teal-50 text-teal-700 border-teal-200",
    deliverables: [
      "Clean Code Architecture",
      "API & Cloud Services",
      "Scalable Infrastructure",
      "AI Model Integrations"
    ],
    summary: "We engineer high-performance, maintainable software and platforms leveraging clean code standards and scalable cloud architectures."
  },
  {
    id: 5,
    number: "05",
    stepNum: "5",
    title: "Test",
    subtitle: "Ensure quality, security, and performance.",
    icon: ShieldCheck,
    accentColor: "#16a34a", // emerald-600
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glowColor: "rgba(22, 163, 74, 0.4)",
    bgBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    deliverables: [
      "Automated Unit Tests",
      "Security Audits",
      "Performance & Speed",
      "Cross-Device QA"
    ],
    summary: "Rigorous automated testing and security validation guarantee your solution operates smoothly, safely, and at peak speed."
  },
  {
    id: 6,
    number: "06",
    stepNum: "6",
    title: "Launch & Support",
    subtitle: "Deploy the solution and provide ongoing support.",
    icon: Rocket,
    accentColor: "#ea580c", // orange-600
    gradient: "from-orange-500 via-amber-500 to-red-500",
    glowColor: "rgba(234, 88, 12, 0.4)",
    bgBadge: "bg-orange-50 text-orange-700 border-orange-200",
    deliverables: [
      "Seamless Deployment",
      "24/7 Health Monitoring",
      "SLA & Maintenance",
      "Continuous Optimization"
    ],
    summary: "We manage zero-downtime deployment, monitor system uptime 24/7, and offer continuous proactive updates as your business grows."
  },
];

export default function IdeasToSolutionsFlow({ onContactClick }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [replayCount, setReplayCount] = useState(0);

  // Trigger circular formation animation when scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [replayCount]);

  // Smooth auto-cycling through circular steps (pauses when user hovers)
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isVisible, isPaused]);

  // Replay circular formation animation
  const handleReplay = () => {
    setIsVisible(false);
    setTimeout(() => {
      setReplayCount((c) => c + 1);
      setIsVisible(true);
    }, 100);
  };

  const currentStepData = WORKFLOW_STEPS[activeStep];
  const CurrentIcon = currentStepData.icon;

  // Geometry configuration for the circular arrangement
  // Total 6 items -> 360 / 6 = 60 degrees apart
  // Starting at top (12 o'clock, -90 degrees) and moving clockwise
  const desktopRadius = 265;
  const tabletRadius = 210;

  return (
    <section
      id="workflow-process"
      ref={sectionRef}
      className="relative w-full bg-white text-slate-900 py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >

          {/* Main Title matching user specification */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-950 tracking-tight font-primary leading-[1.12]">
            From Ideas to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 font-secondary leading-relaxed max-w-2xl mx-auto">
            A continuous, circular workflow turning ambitious concepts into enterprise-grade digital realities through precision, design, and reliable engineering.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW: DYNAMIC ANIMATED CIRCULAR FLOW          */}
        {/* ============================================================== */}
        <div 
          className="hidden md:flex relative w-full max-w-[1240px] mx-auto items-center justify-center min-h-[820px] lg:min-h-[880px] select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular SVG Orbital Paths & Connecting Chevrons */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1140 860"
            fill="none"
          >
            <defs>
              {/* Gradient for the animated circular ring */}
              <linearGradient id="circleOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#0284c7" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#7c3aed" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.85" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Dashed Track */}
            <circle
              cx="570"
              cy="430"
              r={desktopRadius}
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="none"
              className="opacity-70"
            />

            {/* Animated Solid Circular Progress Orbit (Draws clockwise on scroll into view) */}
            <circle
              cx="570"
              cy="430"
              r={desktopRadius}
              stroke="url(#circleOrbitGradient)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              filter="url(#glowFilter)"
              style={{
                strokeDasharray: 2 * Math.PI * desktopRadius,
                strokeDashoffset: isVisible ? 0 : 2 * Math.PI * desktopRadius,
                transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transformOrigin: '570px 430px',
                transform: 'rotate(-90deg)'
              }}
            />

            {/* Clockwise Flow Chevrons indicating continuous circular momentum */}
            {[30, 90, 150, 210, 270, 330].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const x = 570 + desktopRadius * Math.cos(rad);
              const y = 430 + desktopRadius * Math.sin(rad);
              return (
                <g 
                  key={idx} 
                  transform={`translate(${x}, ${y}) rotate(${angle + 90})`}
                  className={`transition-opacity duration-1000 ${isVisible ? 'opacity-80' : 'opacity-0'}`}
                >
                  <polygon points="-4,-6 4,0 -4,6 -2,0" fill="#3b82f6" />
                </g>
              );
            })}
          </svg>

          {/* Orbiting Photon Light Particle */}
          {isVisible && (
            <div 
              className="absolute w-[1140px] h-[860px] pointer-events-none"
              style={{
                animation: 'orbitSpin 18s linear infinite',
                transformOrigin: '570px 430px'
              }}
            >
              <div 
                className="absolute w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee,0_0_30px_#0284c7]"
                style={{
                  top: `calc(430px - ${desktopRadius}px - 8px)`,
                  left: 'calc(570px - 8px)',
                }}
              />
            </div>
          )}

          <div 
            className="absolute z-20 w-[300px] h-[300px] lg:w-[330px] lg:h-[330px] p-6 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out select-none"
          >
            {/* Active Step Eyebrow */}
            <div className="relative z-10 flex items-center justify-center mb-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500 font-primary">
                PHASE {currentStepData.number} / 06
              </span>
            </div>

            {/* Active Step Icon Badge */}
            <div 
              className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110"
              style={{ 
                background: `linear-gradient(135deg, ${currentStepData.accentColor}, #0284c7)`,
                boxShadow: `0 10px 25px ${currentStepData.glowColor}`
              }}
            >
              <CurrentIcon className="w-7 h-7 lg:w-8 lg:h-8" />
            </div>

            {/* Active Step Title */}
            <h3 className="relative z-10 text-xl lg:text-2xl font-black font-primary text-slate-900 leading-tight">
              {currentStepData.stepNum}. {currentStepData.title}
            </h3>

            {/* Active Step Subtitle Description */}
            <p className="relative z-10 text-xs lg:text-[13px] text-slate-600 font-secondary mt-1 px-2 leading-snug line-clamp-2">
              {currentStepData.subtitle}
            </p>

            {/* Quick Navigation Dots */}
            <div className="relative z-10 flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-100">
              {WORKFLOW_STEPS.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStep === idx 
                      ? 'w-6 bg-blue-600' 
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to step ${s.stepNum}: ${s.title}`}
                />
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* THE 6 CIRCULAR NODES & FLOATING DETAIL CARDS                 */}
          {/* ============================================================ */}
          {WORKFLOW_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activeStep === idx;

            // Compute angle in radians (Clockwise starting at 12 o'clock / -90 deg)
            const angleDeg = -90 + idx * 60;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = Math.round(desktopRadius * Math.cos(angleRad));
            const y = Math.round(desktopRadius * Math.sin(angleRad));

            // Staggered outward animation delay
            const staggerDelay = idx * 130;

            // Determine label placement around each node
            // Steps on right (1, 2) extend right; Steps on left (4, 5) extend left;
            // Step 0 (top) extends top; Step 3 (bottom) extends bottom
            const isRightSide = idx === 1 || idx === 2;
            const isLeftSide = idx === 4 || idx === 5;
            const isTop = idx === 0;
            const isBottom = idx === 3;

            return (
              <div
                key={step.id}
                className="absolute flex items-center justify-center cursor-pointer transition-all duration-700 ease-out"
                style={{
                  // Starts from center (0,0) when not visible, springs outward to (x,y)
                  transform: isVisible
                    ? `translate(${x}px, ${y}px)`
                    : 'translate(0px, 0px) scale(0)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${staggerDelay}ms`,
                  zIndex: isActive ? 30 : 25,
                }}
                onClick={() => setActiveStep(idx)}
              >
                {/* Node Outer Wrapper with Hover Pulsing Glow */}
                <div className="relative group">
                  
                  {/* Glowing Halo around active node */}
                  <div 
                    className={`absolute -inset-3 rounded-full blur-md transition-all duration-500 pointer-events-none ${
                      isActive ? 'opacity-80 scale-110' : 'opacity-0 group-hover:opacity-40'
                    }`}
                    style={{ backgroundColor: step.accentColor }}
                  />

                  {/* Main Circular Node Badge ("Circle ekak wage") */}
                  <button
                    type="button"
                    className={`relative w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-md ${
                      isActive 
                        ? 'bg-slate-900 text-white scale-115 ring-4 ring-offset-2 ring-offset-white shadow-2xl' 
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-2 border-slate-200/90 hover:border-blue-400 group-hover:scale-105'
                    }`}
                    style={{
                      borderColor: isActive ? step.accentColor : undefined,
                      ['--tw-ring-color']: step.accentColor,
                    }}
                    aria-label={`Select step ${step.stepNum}: ${step.title}`}
                  >
                    {/* Number Badge Pill on top edge */}
                    <span 
                      className={`absolute -top-2.5 px-2 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase transition-colors ${
                        isActive 
                          ? 'bg-white text-slate-950 shadow-xs' 
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      {step.stepNum}
                    </span>

                    {/* Step Icon */}
                    <IconComponent 
                      className={`w-6 h-6 lg:w-7 lg:h-7 transition-colors ${
                        isActive ? 'text-cyan-300' : 'text-slate-700 group-hover:text-blue-600'
                      }`} 
                    />
                  </button>

                  {/* Attached Sleek Floating Info Card */}
                  <div
                    className={`absolute pointer-events-auto transition-all duration-300 ${
                      isRightSide 
                        ? 'left-full ml-6 top-1/2 -translate-y-1/2' 
                        : isLeftSide 
                        ? 'right-full mr-6 top-1/2 -translate-y-1/2' 
                        : isTop 
                        ? 'bottom-full mb-7 left-1/2 -translate-x-1/2' 
                        : 'top-full mt-7 left-1/2 -translate-x-1/2'
                    } w-[260px] lg:w-[290px]`}
                  >
                    <div 
                      className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-sm text-left transition-transform duration-300 ease-out cursor-pointer hover:scale-105 ${
                        isActive ? 'scale-105 shadow-md' : ''
                      }`}
                    >
                      <div className="mb-1.5">
                        <span className="text-base sm:text-[17px] font-black font-primary text-slate-900">
                          {step.stepNum}. {step.title}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 font-secondary leading-relaxed">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW: COMPACT INTERACTIVE CIRCULAR WHEEL + ACTIVE CARD  */}
        {/* ============================================================== */}
        <div className="md:hidden w-full flex flex-col items-center space-y-6">
          
          {/* Circular Wheel Dial for Mobile */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center select-none">
            {/* SVG Track on Mobile */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 300 300"
              fill="none"
            >
              <circle
                cx="150"
                cy="150"
                r="115"
                stroke="#e2e8f0"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
              <circle
                cx="150"
                cy="150"
                r="115"
                stroke="#2563eb"
                strokeWidth="3"
                fill="none"
                style={{
                  strokeDasharray: 2 * Math.PI * 115,
                  strokeDashoffset: isVisible ? 0 : 2 * Math.PI * 115,
                  transition: 'stroke-dashoffset 1.2s ease-out',
                  transformOrigin: '150px 150px',
                  transform: 'rotate(-90deg)'
                }}
              />
            </svg>

            {/* Mobile Center Core Mini Badge */}
            <div 
              className="w-24 h-24 flex flex-col items-center justify-center text-center p-2"
            >
              <span className="text-[10px] font-black text-blue-600 font-primary uppercase tracking-wider">
                Step {currentStepData.stepNum}
              </span>
              <CurrentIcon className="w-6 h-6 text-slate-900 my-0.5" />
              <span className="text-[11px] font-bold text-slate-800 truncate max-w-[80px]">
                {currentStepData.title}
              </span>
            </div>

            {/* 6 Circular Nodes around Mobile Dial */}
            {WORKFLOW_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              const angleDeg = -90 + idx * 60;
              const angleRad = (angleDeg * Math.PI) / 180;
              const mobileRadius = 115;
              const x = Math.round(mobileRadius * Math.cos(angleRad));
              const y = Math.round(mobileRadius * Math.sin(angleRad));

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`absolute w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
                    isActive 
                      ? 'bg-slate-950 text-white scale-115 ring-2 ring-offset-2 ring-blue-600' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                  style={{
                    transform: isVisible 
                      ? `translate(${x}px, ${y}px)` 
                      : 'translate(0px, 0px) scale(0)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${idx * 100}ms`
                  }}
                  aria-label={`Select ${step.title}`}
                >
                  <StepIcon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-700'}`} />
                  <span className="sr-only">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Card for Mobile */}
          <div className="w-full bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90 text-left">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black">
                  PHASE {currentStepData.number}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Step {currentStepData.stepNum} of 6
                </span>
              </div>
              <CurrentIcon className="w-5 h-5 text-blue-600" />
            </div>

            <h3 className="text-2xl font-black font-primary text-slate-900 mb-2">
              {currentStepData.stepNum}. {currentStepData.title}
            </h3>

            <p className="text-sm text-slate-600 font-secondary leading-relaxed mb-4">
              {currentStepData.subtitle}
            </p>

            <p className="text-xs text-slate-500 font-secondary leading-relaxed mb-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
              {currentStepData.summary}
            </p>

            {/* Key Deliverables Pills */}
            <div className="space-y-1.5 mb-5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Key Deliverables:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {currentStepData.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Next / Prev Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev === 0 ? WORKFLOW_STEPS.length - 1 : prev - 1))}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              
              <div className="flex gap-1.5">
                {WORKFLOW_STEPS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveStep(dotIdx)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === dotIdx ? 'w-5 bg-blue-600' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Embedded CSS for SVG Keyframe Animations */}
      <style>{`
        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
