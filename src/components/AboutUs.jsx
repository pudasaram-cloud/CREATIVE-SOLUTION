import React, { useState } from 'react';
import { Home as HomeIcon, Sparkles } from 'lucide-react';
import aboutTeamImg from '../assets/about-us-team.jpg';
import IdeasToSolutionsFlow from './IdeasToSolutionsFlow';
import ReadyToBuild from './ReadyToBuild';
import Footer from './Footer';

// Tech Brand SVG Components
function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 flex-shrink-0">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function NextjsLogo() {
  return (
    <svg viewBox="0 0 180 180" className="w-8 h-8 flex-shrink-0">
      <circle cx="90" cy="90" fill="#000000" r="90"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="#ffffff"/>
      <rect fill="#ffffff" height="72" width="12" x="115" y="54"/>
    </svg>
  );
}

function JavascriptLogo() {
  return (
    <svg viewBox="0 0 630 630" className="w-8 h-8 rounded-md flex-shrink-0">
      <rect width="630" height="630" fill="#F7DF1E"/>
      <path d="M165.3 532.7c26.6 0 48.7-14.7 58.7-37.4l-42-25.5c-5.7 10.4-11.7 17.5-22.3 17.5-12.7 0-21-9.4-21-39.7V311.2h-47v137.9c0 53.6 30 83.6 73.6 83.6zm182.2-4.4c48 0 79-24.7 79-66.2 0-39-24.5-55.8-63.5-72.2l-14-6c-22.3-9.5-32.8-17.7-32.8-34 0-14.5 11.2-26 29.5-26 18.7 0 28.7 9.5 35 22.8l42-26.8c-12.7-25-36-40.8-77-40.8-46.7 0-75.5 27.8-75.5 64.7 0 37.6 22.7 54.3 60 70l14.2 6.2c25.4 11 36.3 19.5 36.3 37.2 0 17-14.2 28.5-35.8 28.5-25 0-38.3-13.8-45.7-31l-42.5 24.8c12.2 28 39.8 47 90.8 47z" fill="#000000"/>
    </svg>
  );
}

function HtmlLogo() {
  return (
    <svg viewBox="0 0 512 512" className="w-8 h-8 flex-shrink-0">
      <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/>
      <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z"/>
      <path fill="#EBEBEB" d="M256 208h-74l-5-58h79V92H118l15 174h123zm0 157l-66-18-4-47h-58l8 94 120 33z"/>
      <path fill="#FFFFFF" d="M256 208v58h70l-7 74-63 17v59l119-33 17-175zm0-116v58h138l5-58z"/>
    </svg>
  );
}

function CssLogo() {
  return (
    <svg viewBox="0 0 512 512" className="w-8 h-8 flex-shrink-0">
      <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z"/>
      <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z"/>
      <path fill="#EBEBEB" d="M256 208H182l-5-58h79V92H118l15 174h123zm0 157l-66-18-4-47h-58l8 94 120 33z"/>
      <path fill="#FFFFFF" d="M256 208v58h70l-7 74-63 17v59l119-33 17-175zm0-116v58h138l5-58z"/>
    </svg>
  );
}

function NodejsLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8 flex-shrink-0">
      <path fill="#539E43" d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm7.3 16.8c-.2.4-.6.8-1 .9-1.5.8-3.1 1.2-4.7 1.2-3.8 0-6.1-2-6.1-5.3 0-3.3 2.2-5.4 6-5.4 1.4 0 2.8.3 4.1.9l-1 2.2c-1-.5-2.1-.7-3.1-.7-2.3 0-3.6 1.2-3.6 3 0 1.9 1.3 3 3.6 3 1.2 0 2.3-.3 3.3-.8v-2.2h-3.4v-2.1h5.5v5.4h.4z"/>
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <path fill="#3776AB" d="M63.6 0C28.4 0 30.6 15.3 30.6 15.3l.1 15.8h33.7v4.8H18.9S0 33.7 0 69.1c0 35.4 16.5 34.3 16.5 34.3h9.8V89.6s-.5-16.5 16.2-16.5h33.5s15.7.3 15.7-15.4V15.3S94.1 0 63.6 0zm-16.8 9.5a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6z"/>
      <path fill="#FFD43B" d="M64.4 128c35.2 0 33-15.3 33-15.3l-.1-15.8H63.6v-4.8h45.5s18.9 2.2 18.9-33.2c0-35.4-16.5-34.3-16.5-34.3h-9.8v13.8s.5 16.5-16.2 16.5H52s-15.7-.3-15.7 15.4v42.4S33.9 128 64.4 128zm16.8-9.5a5.3 5.3 0 1 1 0-10.6 5.3 5.3 0 0 1 0 10.6z"/>
    </svg>
  );
}

function PhpLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <ellipse cx="64" cy="64" rx="60" ry="36" fill="#777BB4"/>
      <path d="M42 50h-8c-2 0-3 1-3.5 3L23 81h8l2.5-12h5c7.5 0 12-4.5 13-11.5 1-6-2-7.5-9.5-7.5zm-5 13h-3l2-9h3c3 0 4.5.5 4 3.5-.5 3.5-3 5.5-6 5.5zm31-13h-8l-7.5 31h8l3-12h7l-3 12h8l7.5-31h-8l-3 12h-7l2.5-12zm30 0h-8c-2 0-3 1-3.5 3L80 81h8l2.5-12h5c7.5 0 12-4.5 13-11.5 1-6-2-7.5-9.5-7.5zm-5 13h-3l2-9h3c3 0 4.5.5 4 3.5-.5 3.5-3 5.5-6 5.5z" fill="#FFFFFF"/>
    </svg>
  );
}

function DotNetLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="60" fill="#512BD4"/>
      <circle cx="30" cy="74" r="7" fill="#FFFFFF"/>
      <path d="M45 42h9l17 26V42h9v44h-8L54 59v27h-9V42zm48 10h22v9H93v-9zm0 18h22v9H93v-9z" fill="#FFFFFF"/>
    </svg>
  );
}

function FlutterLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <path fill="#02569B" d="M79.3 2.5L25.8 56.1l17 17L113.3 2.5H79.3zm0 57.6L49.5 90l17 17 46.8-46.9H79.3z"/>
      <path fill="#0175C2" d="M66.5 107l16.8 16.8h34L83.5 90 66.5 107z"/>
      <path fill="#29B6F6" d="M83.5 90l14.8-14.8 15 14.8-15 15L83.5 90z"/>
    </svg>
  );
}

function ReactNativeLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="14" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="6" fill="none">
        <ellipse cx="64" cy="64" rx="54" ry="21"/>
        <ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  );
}

function MysqlLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="60" fill="#00758F"/>
      <path d="M30 76c5-15 18-28 34-32-2 7 0 14 3 20-8 2-15 6-21 12h-16zm44-30c14 4 25 14 29 28-5-3-11-5-18-5-4-8-9-16-11-23zm-10 40c0-6 4-12 10-15 6 3 10 9 10 15 0 8-7 15-10 17-3-2-10-9-10-17z" fill="#F29111"/>
      <circle cx="64" cy="71" r="5" fill="#FFFFFF"/>
    </svg>
  );
}

function PostgresLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="60" fill="#336791"/>
      <path d="M64 26c-18 0-30 14-30 29 0 20 18 36 26 42 1-3 1-6 2-9-5-4-15-14-16-24 5 1 10-1 14-4 2 8 8 15 16 19 2-3 4-8 5-13 4 5 10 8 17 8 0-4-1-8-3-11 7 0 13-3 17-8-3-3-8-4-13-4 1-5 1-10 0-15 8 1 15 5 20 11 1-5 0-11-3-15-7-4-16-6-25-6zm-6 20c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5zm22 0c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z" fill="#FFFFFF"/>
    </svg>
  );
}

function MongoLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <path fill="#47A248" d="M64 4s-4 4-9 14c-12 24-27 46-27 67 0 25 18 39 36 39 18 0 36-14 36-39 0-21-15-43-27-67-5-10-9-14-9-14z"/>
      <path fill="#499D4A" d="M64 4v120c18 0 36-14 36-39 0-21-15-43-27-67-5-10-9-14-9-14z"/>
      <path fill="#F5F5F5" d="M64 122c-1.5 0-3-1.5-3-3 0-8 2-17 3-25 1 8 3 17 3 25 0 1.5-1.5 3-3 3z"/>
    </svg>
  );
}

function AwsLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="60" fill="#232F3E"/>
      <path fill="#FF9900" d="M41 50h7l6 17 6-17h7l-10 24h-6l-10-24zm32 0h7l5 15 5-15h7l-8 24h-8l-8-24z"/>
      <path fill="#FF9900" d="M30 85c22 13 46 13 68 0 2-1 4 1 2 3-24 14-50 14-74 0-2-1 0-4 4-3z"/>
      <path fill="#FF9900" d="M96 83c2 2 3 5 3 8 0 1-1 2-2 2-3 0-5-3-6-5 0-2 1-4 3-5h2z"/>
    </svg>
  );
}

function AzureLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <path fill="#0089D6" d="M30 102h40l28-56-34-24H30l22 44-22 36z"/>
      <path fill="#0072C6" d="M70 102h32l-22-38-10 38z"/>
      <path fill="#00BCF2" d="M30 22h34l34 24-28 56H30l40-56L30 22z"/>
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="60" fill="#2496ED"/>
      <path fill="#FFFFFF" d="M40 45h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm-20 10h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm-20 10h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm-44 5s3 18 20 18c14 0 24-10 24-10 9 5 19 3 24-1 1-1 4-1 4-1s-2-5-6-7c9-1 12-7 12-7s-5-2-13 1c-4-9-13-11-13-11H26s1 9 10 18z"/>
    </svg>
  );
}

function AiLogo() {
  return (
    <svg viewBox="0 0 128 128" className="w-8 h-8 flex-shrink-0">
      <circle cx="64" cy="64" r="60" fill="#10A37F"/>
      <path fill="#FFFFFF" d="M64 26l8 18 18 8-18 8-8 18-8-18-18-8 18-8 8-18zm26 44l4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9zm-52 0l4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9z"/>
    </svg>
  );
}

function renderTechIcon(iconKey) {
  switch (iconKey) {
    case 'react': return <ReactLogo />;
    case 'nextjs': return <NextjsLogo />;
    case 'javascript': return <JavascriptLogo />;
    case 'html': return <HtmlLogo />;
    case 'css': return <CssLogo />;
    case 'nodejs': return <NodejsLogo />;
    case 'python': return <PythonLogo />;
    case 'php': return <PhpLogo />;
    case 'dotnet': return <DotNetLogo />;
    case 'flutter': return <FlutterLogo />;
    case 'reactnative': return <ReactNativeLogo />;
    case 'mysql': return <MysqlLogo />;
    case 'postgresql': return <PostgresLogo />;
    case 'mongodb': return <MongoLogo />;
    case 'aws': return <AwsLogo />;
    case 'azure': return <AzureLogo />;
    case 'docker': return <DockerLogo />;
    case 'ai': return <AiLogo />;
    default: return <Sparkles className="w-8 h-8 text-cyan-400" />;
  }
}

const technologyCategories = [
  {
    id: 1,
    name: "Frontend",
    summary: "Creating fast, fluid, responsive, and accessible user interfaces with modern reactive standards.",
    techs: [
      { name: "React", type: "UI Library", icon: "react" },
      { name: "Next.js", type: "Fullstack Framework", icon: "nextjs" },
      { name: "JavaScript", type: "Web Logic", icon: "javascript" },
      { name: "HTML", type: "Semantic Markup", icon: "html" },
      { name: "CSS", type: "Modern Styling", icon: "css" },
    ],
  },
  {
    id: 2,
    name: "Backend",
    summary: "Engineering high-throughput server backends, secure APIs, and robust application logic.",
    techs: [
      { name: "Node.js", type: "Runtime Environment", icon: "nodejs" },
      { name: "Python", type: "AI & Server Logic", icon: "python" },
      { name: "PHP", type: "Web Frameworks", icon: "php" },
      { name: ".NET", type: "Enterprise Architecture", icon: "dotnet" },
    ],
  },
  {
    id: 3,
    name: "Mobile",
    summary: "Developing smooth, native-performance iOS & Android applications with unified developer velocity.",
    techs: [
      { name: "Flutter", type: "Cross-Platform Framework", icon: "flutter" },
      { name: "React Native", type: "Hybrid Native Apps", icon: "reactnative" },
    ],
  },
  {
    id: 4,
    name: "Database",
    summary: "Architecting reliable SQL & NoSQL data schemas built for speed, ACID compliance, and scale.",
    techs: [
      { name: "MySQL", type: "Relational Database", icon: "mysql" },
      { name: "PostgreSQL", type: "Enterprise SQL", icon: "postgresql" },
      { name: "MongoDB", type: "Document Store", icon: "mongodb" },
    ],
  },
  {
    id: 5,
    name: "Cloud & AI",
    summary: "Deploying resilient cloud infrastructure, containerized pipelines, and cutting-edge AI systems.",
    techs: [
      { name: "AWS", type: "Cloud Infrastructure", icon: "aws" },
      { name: "Azure", type: "Enterprise Cloud", icon: "azure" },
      { name: "Docker", type: "Containerization", icon: "docker" },
      { name: "AI", type: "Smart Machine Learning", icon: "ai" },
    ],
  },
];

export default function AboutUs({ onNavigate, onContactClick }) {
  // First item open by default matching IndustriesSolutions behavior
  const [activeTechId, setActiveTechId] = useState(1);

  const toggleTech = (id) => {
    setActiveTechId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen flex flex-col font-secondary">
      
      {/* 1. Breadcrumb Bar */}
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

          {/* Current Page */}
          <span className="text-slate-900 font-bold tracking-tight">
            About Us
          </span>
        </div>
      </div>

      {/* 2. Hero Section (Matching User Reference Image Design) */}
      <section className="relative w-full bg-[#020714] text-white overflow-hidden py-14 sm:py-18 md:py-24 border-b border-blue-950/40">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-t from-cyan-600/10 to-transparent rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-end text-right">
            {/* Main Page Title (Prominent Right-Aligned as in Reference Image) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight font-primary leading-none mb-6 sm:mb-8">
              About us
            </h1>

            {/* Subtext Description (Formatted to maintain clean alignment and line breaks) */}
            <div className="max-w-4xl text-right">
              <p className="text-sm sm:text-base md:text-[17px] text-slate-300 font-secondary leading-relaxed sm:leading-loose font-normal space-y-1">
                <span className="block">
                  Creative Solution delivers innovative digital solutions that help businesses grow and evolve.
                </span>
                <span className="block">
                  We combine technology, creativity, and smart systems to simplify processes and improve efficiency.
                </span>
                <span className="block">
                  From websites to AI-powered solutions, we build reliable technology designed for your business success.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Story & Overview Section (Exact Content & Layout from User Reference Image) */}
      <section className="w-full bg-white py-14 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15] font-primary mb-3">
                Building Technology That Moves Businesses Forward
              </h2>

              {/* Subtitle */}
              <p className="text-slate-500 font-medium text-sm sm:text-base md:text-lg mb-8 leading-snug">
                A Sri Lankan technology company creating modern digital solutions for businesses through creativity, innovation, and intelligent technology.
              </p>

              {/* Paragraphs */}
              <div className="space-y-6 text-slate-700 font-secondary text-sm sm:text-base md:text-[16.5px] leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">Creative Solution was founded on August 31, 2026</strong>, with a simple vision to help businesses use technology to work smarter, faster and more efficiently. What started as an idea to bring modern digital solutions together has grown into a technology-focused company providing websites, software, business systems, AI solutions, and digital experiences. From the beginning, our focus has been on understanding real business challenges and creating practical solutions around them.
                </p>

                <p>
                  Today, Creative Solution continues to grow with a commitment to innovation, quality, and long-term partnerships, helping businesses take their next step into a smarter digital future.
                </p>
              </div>
            </div>

            {/* Right Image Column (Matching User Reference Image) */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-lg lg:max-w-none">
                {/* Decorative background shadow glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/15 to-cyan-500/15 rounded-[32px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                
                {/* Main Photo Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/80 bg-white">
                  <img
                    src={aboutTeamImg}
                    alt="Creative Solution Team collaborating around a conference table with hands stacked together"
                    className="w-full h-auto object-cover object-center aspect-[4/3] sm:aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Powered by Modern Technology Section (Matching User Reference Image & IndustriesSolutions Architecture) */}
      <section className="relative w-full bg-[#020817] text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20">
            
            {/* Left Column: Big Headline with Gradient Matching Web & App Development */}
            <div className="lg:col-span-6 relative">
              <div className="lg:sticky lg:top-24 xl:top-28 z-10 flex flex-col items-start justify-start pt-2">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-extrabold font-primary text-white leading-[1.08] sm:leading-[1.1] tracking-tight select-none">
                  <span className="bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-white bg-clip-text text-transparent block pb-2 sm:pb-2.5">
                    Powered by
                  </span>
                  <span className="block text-white">
                    Modern
                  </span>
                  <span className="block text-white">
                    Technology
                  </span>
                </h2>
              </div>
            </div>

            {/* Right Column: Accordion List with Downward-Opening Tech Panels */}
            <div className="lg:col-span-6 flex flex-col space-y-1 pt-0 mt-0">
              {technologyCategories.map((item, index) => {
                const isOpen = activeTechId === item.id;

                return (
                  <div 
                    key={item.id}
                    className="border-b border-white/20 transition-colors duration-200"
                  >
                    {/* Item Header Row */}
                    <button
                      type="button"
                      onClick={() => toggleTech(item.id)}
                      className={`w-full flex items-center text-left cursor-pointer focus:outline-none group ${
                        index === 0 ? 'pt-0 pb-5 sm:pb-6' : 'py-5 sm:py-6'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg sm:text-xl md:text-2xl font-bold font-primary tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </span>
                    </button>

                    {/* Downward-Opening Content Panel (Matching IndustriesSolutions white card) */}
                    {isOpen && (
                      <div className="pb-7 pt-1 animate-in fade-in slide-in-from-top-3 duration-300">
                        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                          
                          {/* Panel Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 mb-5 border-b border-slate-200">
                            <div>
                              <h4 className="text-xl sm:text-2xl font-bold font-primary text-slate-950">
                                {item.name} Stack
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 font-secondary mt-2 sm:mt-0 max-w-xs">
                              {item.summary}
                            </p>
                          </div>

                          {/* Tech Grid / Table with Official Brand Logos */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                            {item.techs.map((tech) => (
                              <div 
                                key={tech.name}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 group text-center cursor-default"
                              >
                                <div className="w-12 h-12 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-200">
                                  {renderTechIcon(tech.icon)}
                                </div>
                                <span className="text-sm font-bold text-slate-900 font-primary">
                                  {tech.name}
                                </span>
                                <span className="text-[11px] text-slate-500 font-secondary mt-0.5 leading-tight">
                                  {tech.type}
                                </span>
                              </div>
                            ))}
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

      {/* 5. From Ideas to Digital Solutions (Animated Circular Flow Section) */}
      <IdeasToSolutionsFlow onContactClick={onContactClick} />

      {/* 6. Contact Us / Ready to Build Form Section */}
      <ReadyToBuild />

      {/* 7. Footer */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
