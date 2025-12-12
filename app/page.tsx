'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Brain, Zap, Bot, Workflow, Cog, Database, Boxes, Users, ArrowUpRight, Mail, Phone, MapPin, MessageCircleIcon, MessageCircleCodeIcon } from 'lucide-react';

export default function AltairLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe-eoRAktiBjeLbdwTLO1Ik_zJMjcGED2o9vLe0k9Ji1-KLTQ/viewform?usp=header', '_blank');
  };

  const servicesData = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Agents",
      description: "Deploy autonomous AI agents that can reason, plan, and execute complex tasks. From customer service to data analysis, our agents work 24/7 to drive results.",
      gradient: "from-emerald-500 to-cyan-500",
      tag: "Autonomous"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Process Automation",
      description: "Deploy AI-powered bots that automate complex workflows, handle exceptions intelligently, and continuously optimize performance.",
      gradient: "from-cyan-500 to-blue-500",
      tag: "RPA + AI"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Orchestration",
      description: "Connect your entire tech stack with smart automation flows that adapt to changing conditions and scale with your business.",
      gradient: "from-purple-500 to-pink-500",
      tag: "Integration"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing Automation",
      description: "Automatically extract, transform, and analyze data from any source with machine learning-powered pipelines that never sleep.",
      gradient: "from-pink-500 to-orange-500",
      tag: "ETL + ML"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Cognitive Task Automation",
      description: "Automate document processing, email routing, customer support, and decision-making with natural language AI.",
      gradient: "from-blue-500 to-purple-500",
      tag: "NLP"
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Custom Automation Systems",
      description: "Bespoke AI automation solutions tailored to your unique processes, from legacy system integration to greenfield deployment.",
      gradient: "from-orange-500 to-pink-500",
      tag: "Enterprise"
    }
  ];

  const statsData = [
    { value: "$10,000+", label: "Saved Using Automation" },
    { value: "500+", label: "Workflows Automated" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white tracking-tight font-[family-name:var(--font-syne)]">
              Altair AI
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-jetbrains)]">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm tracking-wide uppercase">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm tracking-wide uppercase">
                Services
              </button>
              <button onClick={handleContactClick} className="group px-7 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                Contact Us
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-4 font-[family-name:var(--font-jetbrains)]">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={handleContactClick} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest font-[family-name:var(--font-jetbrains)]">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ◆ Next-Gen AI Automation ◆
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-[family-name:var(--font-syne)]">
            <span className="block mb-3 tracking-tight">Automate Everything</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              With Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-jetbrains)] font-light">
            <strong className="text-cyan-400 font-semibold">Altair AI</strong> delivers cutting-edge automation solutions that transform manual workflows into intelligent, self-learning systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 font-[family-name:var(--font-jetbrains)]">
            <button 
              onClick={handleContactClick}
              className="group px-9 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 uppercase tracking-wider"
            >
              Start Automating
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-9 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 uppercase tracking-wider"
            >
              View Solutions
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-[family-name:var(--font-syne)]">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Altair AI
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-[family-name:var(--font-jetbrains)] font-light">
              Architects of the intelligent future, engineering automation that <span className="text-purple-400 font-semibold">thinks</span> and <span className="text-cyan-400 font-semibold">adapts</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)]">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed font-[family-name:var(--font-jetbrains)] font-light text-sm">
                  Democratize intelligent automation, making enterprise-grade AI accessible to organizations worldwide while pioneering breakthrough solutions.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)]">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed font-[family-name:var(--font-jetbrains)] font-light text-sm">
                  A world where AI automation seamlessly amplifies human potential, solving complex challenges at unprecedented speed and scale.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-[family-name:var(--font-jetbrains)] font-light">
                Founded by pioneers in artificial intelligence and autonomous systems, Altair AI stands at the forefront of the automation revolution. We transform tedious, repetitive tasks into intelligent workflows that learn and optimize themselves.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-[family-name:var(--font-jetbrains)] font-light">
                Our elite team of AI researchers, ML engineers, and automation specialists builds systems that don't just execute—they <strong className="text-cyan-400 font-semibold">understand</strong>, <strong className="text-purple-400 font-semibold">predict</strong>, and <strong className="text-pink-400 font-semibold">evolve</strong>.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {statsData.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 font-[family-name:var(--font-syne)]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-[family-name:var(--font-jetbrains)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-[family-name:var(--font-syne)]">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Automation Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-[family-name:var(--font-jetbrains)] font-light">
              Transform your operations with intelligent automation that scales infinitely
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-jetbrains)]">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 font-[family-name:var(--font-syne)]">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed font-[family-name:var(--font-jetbrains)] font-light text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="inline-block p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/20 rounded-3xl backdrop-blur-sm">
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl font-[family-name:var(--font-jetbrains)] font-light">
                Don't see exactly what you need? We specialize in <strong className="text-purple-400 font-semibold">custom automation solutions</strong> for unique challenges.
              </p>
              <button 
                onClick={handleContactClick}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 mx-auto font-[family-name:var(--font-jetbrains)]"
              >
                Discuss Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-[family-name:var(--font-syne)]">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Automate Together
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-[family-name:var(--font-jetbrains)] font-light">
              Ready to <strong className="text-cyan-400 font-semibold">10x your efficiency</strong>? Connect with our automation experts.
            </p>
            <button 
              onClick={handleContactClick}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 uppercase tracking-wider inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains)]"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 font-[family-name:var(--font-jetbrains)]">
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
              <Mail className="w-6 h-6 mx-auto mb-3 text-cyan-400" />
              <div className="text-xs font-bold mb-1 text-gray-400 uppercase tracking-widest">Email</div>
              <a href="mailto:contact@altair-ai.com" className="text-base md:text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                sociallabs101@gmail.com
              </a>
            </div>
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <MessageCircleCodeIcon className="w-6 h-6 mx-auto mb-3 text-purple-400" />
              <div className="text-xs font-bold mb-2 text-gray-400 uppercase tracking-widest">Whatsapp</div>
              <a href="tel:+15551234567" className="text-base md:text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                +91-9454339006
              </a>
            </div>
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
              <MapPin className="w-6 h-6 mx-auto mb-3 text-pink-400" />
              <div className="text-xs font-bold mb-2 text-gray-400 uppercase tracking-widest">Location</div>
              <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Gr. Noida, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="inline-block mb-4 text-2xl font-bold text-white tracking-tight font-[family-name:var(--font-syne)]">
                Altair AI
              </a>
              <p className="text-gray-300 leading-relaxed max-w-md font-[family-name:var(--font-jetbrains)] font-light text-sm">
                Pioneering intelligent automation that transforms operations, amplifies human potential, and scales infinitely.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold mb-4 uppercase tracking-widest text-gray-400 font-[family-name:var(--font-jetbrains)]">Quick Links</h3>
              <ul className="space-y-3 font-[family-name:var(--font-jetbrains)]">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold mb-4 uppercase tracking-widest text-gray-400 font-[family-name:var(--font-jetbrains)]">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.youtube.com/@PrakharAIAutomation" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:scale-110 transition-all duration-300" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/altairaisolutions" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100092880740003" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://x.com/AiEnthusiasticx" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:border-gray-700 hover:scale-110 transition-all duration-300" aria-label="X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-[family-name:var(--font-jetbrains)]">
              <p className="text-gray-400 text-xs uppercase tracking-wider">
                © {new Date().getFullYear()} Altair AI Solutions. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs uppercase tracking-wider">
                <a
  href="/terms"
  className="text-gray-400 hover:text-cyan-400 transition-colors"
>
  Terms & Conditions
</a>

                <span className="text-gray-600">•</span>
                <a
  href="/privacy"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  Privacy Policy
</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}