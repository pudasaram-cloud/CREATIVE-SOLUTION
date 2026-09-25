import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

export default function ReadyToBuild() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Scroll reveal IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.email.trim() || !formData.firstName.trim() || !formData.lastName.trim() || !formData.subject.trim()) {
      setErrorMessage('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
      });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 900);
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#010614] text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16 overflow-visible"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left Column: Heading and Description Text (Sticky on Desktop while form scrolls) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 xl:top-32 self-start z-10">
            <div 
              className={`flex flex-col justify-start text-left transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="font-primary font-black tracking-tight leading-[1.06] select-none text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px]">
                <span className="block bg-gradient-to-r from-[#2962ff] via-[#4d7eff] to-[#91a8ff] bg-clip-text text-transparent">
                  Ready to Build
                </span>
                <span className="block text-white mt-1 sm:mt-2">
                  What&apos;s Next?
                </span>
              </h2>

              <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 max-w-lg">
                <p className="text-white text-sm sm:text-base md:text-[16.5px] font-medium leading-relaxed font-secondary">
                  Have a business challenge or an idea you want to explore? Connect with our team to discover how digital technology and AI can improve efficiency, drive innovation, and support your business growth.
                </p>

                <p className="text-white text-sm sm:text-base md:text-[16.5px] font-medium leading-relaxed font-secondary">
                  Tell us what you need, and our team will be ready to help you find the right solution for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div 
            className={`lg:col-span-7 w-full flex justify-end transition-all duration-1000 delay-150 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="w-full max-w-[620px]">
              {/* Success Notification Alert */}
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 flex items-start space-x-3 animate-fade-in text-sm font-secondary">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Message sent successfully!</p>
                    <p className="text-white/95 text-xs sm:text-sm mt-0.5">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {/* Error Notification Alert */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-600 text-white shadow-lg shadow-red-950/50 flex items-start space-x-3 text-sm font-secondary animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="font-medium text-white">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
                {/* Email Address * */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>

                {/* First Name * & Last Name * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Business / Company Name */}
                <div>
                  <label htmlFor="company" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>

                {/* Subject * */}
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>

                {/* Service / Industry Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                    Service / Industry
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full h-11 sm:h-12 px-4 pr-10 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 appearance-none cursor-pointer ${
                        formData.service ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      <option value="" disabled className="bg-[#020718] text-slate-400">
                        {/* Select a Service / Industry */}
                      </option>
                      <option value="Digital Transformation" className="bg-[#020718] text-white">
                        Digital Transformation
                      </option>
                      <option value="Software Solutions" className="bg-[#020718] text-white">
                        Software Solutions
                      </option>
                      <option value="IT & Security" className="bg-[#020718] text-white">
                        IT & Security
                      </option>
                      <option value="Business Automation" className="bg-[#020718] text-white">
                        Business Automation
                      </option>
                      <option value="Consulting" className="bg-[#020718] text-white">
                        Consulting
                      </option>
                      <option value="Other" className="bg-[#020718] text-white">
                        Other
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Your Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-[13px] font-medium text-slate-200 mb-1.5 font-secondary">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#020718]/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none min-h-[130px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="btn-contact-submit"
                    className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-xl bg-[#0038a8] hover:bg-[#0047c7] active:scale-[0.98] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-blue-600/30 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Contact us'}</span>
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.4} />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
