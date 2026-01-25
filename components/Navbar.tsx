
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { NAV_LINKS, COLORS } from '../constants';
import { openInvolvementModal } from '../utils/events';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (location.pathname === '/') {
        const sections = NAV_LINKS.filter(l => l.path.startsWith('#')).map(link => link.path.replace('#', ''));
        const current = sections.find(section => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setIsInitiativesOpen(false);
    
    if (path.startsWith('/')) {
      navigate(path);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(path.replace('#', ''));
      if (element) {
        const offset = 72;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-x-8 lg:gap-x-24">
        <button 
          onClick={() => handleNavClick('#home')} 
          className="flex flex-col items-start group focus:outline-none shrink-0"
        >
          <span className="font-display text-2xl font-bold tracking-tight uppercase leading-none text-brand-primary transition-colors duration-500 group-hover:text-brand-accent">
            Awareness Africa
          </span>
          <span className="text-[10px] tracking-[0.3em] font-medium uppercase opacity-60 text-brand-primary">
            Foundation
          </span>
        </button>

        <div className="hidden lg:flex items-center space-x-12">
          {NAV_LINKS.map((link) => {
            const isInitiatives = link.label === 'Initiatives';
            const isRoute = link.path.startsWith('/');
            const isActive = isRoute 
              ? location.pathname === link.path 
              : (location.pathname === '/' && activeSection === link.path.replace('#', ''));
            const isHovered = hoveredLink === link.path;
            
            if (isInitiatives) {
              return (
                <div 
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(link.path);
                    setIsInitiativesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setIsInitiativesOpen(false);
                  }}
                >
                  <button
                    className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-colors duration-500 relative py-2 flex items-center gap-1 focus:outline-none ${
                      isActive ? 'text-black' : 'text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform duration-500 ${isInitiativesOpen ? 'rotate-180' : ''}`} />
                    {isActive && (
                      <motion.div 
                        layoutId="navUnderline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isInitiativesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                      >
                        <div className="bg-white border border-slate-100 shadow-2xl overflow-hidden">
                          <Link 
                            to="/initiatives/her-awareness"
                            onClick={() => setIsInitiativesOpen(false)}
                            className="flex flex-col p-6 hover:bg-slate-50 transition-colors border-b border-slate-50 group"
                          >
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E91E63] mb-1">Empowerment</span>
                            <span className="text-sm font-display font-bold text-slate-900 group-hover:text-brand-accent transition-colors">HerAwareness Africa</span>
                          </Link>
                          <Link 
                            to="/initiatives/men-forward"
                            onClick={() => setIsInitiativesOpen(false)}
                            className="flex flex-col p-6 hover:bg-slate-50 transition-colors group"
                          >
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1976D2] mb-1">Mental Well-being</span>
                            <span className="text-sm font-display font-bold text-slate-900 group-hover:text-brand-accent transition-colors">MenForward Africa</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-colors duration-500 relative py-2 focus:outline-none ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent"
                  />
                )}
                {!isActive && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 origin-left"
                  />
                )}
              </button>
            );
          })}
          
          <button 
            onClick={openInvolvementModal}
            className="bg-brand-primary text-white px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all duration-700 ease-in-out shadow-sm hover:shadow-lg focus:outline-none"
          >
            Donate
          </button>
        </div>

        <button 
          className="lg:hidden text-brand-primary focus:outline-none p-2 transition-transform active:scale-90 z-[110]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={32} className="text-white" /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-primary z-[105] flex flex-col h-screen w-screen overflow-hidden lg:hidden"
          >
            <div className="flex flex-col h-full justify-center px-10 md:px-20">
              <div className="flex flex-col space-y-4 md:space-y-6 overflow-y-auto max-h-[70vh] custom-scrollbar py-10">
                {NAV_LINKS.map((link, index) => {
                  const isInitiatives = link.label === 'Initiatives';
                  const isRoute = link.path.startsWith('/');
                  const isActive = isRoute 
                    ? location.pathname === link.path 
                    : (location.pathname === '/' && activeSection === link.path.replace('#', ''));
                  
                  return (
                    <div key={link.path}>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => {
                          if (isInitiatives) {
                            setIsInitiativesOpen(!isInitiativesOpen);
                          } else {
                            handleNavClick(link.path);
                          }
                        }}
                        className={`text-5xl md:text-7xl font-display font-bold text-left transition-all duration-500 group relative flex items-center gap-4 ${
                          isActive ? 'text-brand-accent' : 'text-white hover:text-brand-accent'
                        }`}
                      >
                        <span className="relative_z-10">{link.label}</span>
                        {isInitiatives && <ChevronDown size={32} className={`transition-transform duration-500 ${isInitiativesOpen ? 'rotate-180' : ''}`} />}
                      </motion.button>
                      
                      {isInitiatives && (
                        <AnimatePresence>
                          {isInitiativesOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-4 mt-6 ml-6 border-l border-white/10 pl-8"
                            >
                              <Link 
                                to="/initiatives/her-awareness" 
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-display text-white/60 hover:text-brand-accent transition-colors"
                              >
                                HerAwareness Africa
                              </Link>
                              <Link 
                                to="/initiatives/men-forward" 
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-display text-white/60 hover:text-brand-accent transition-colors"
                              >
                                MenForward Africa
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-10 border-t border-white/10"
              >
                 <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-6">Connect With Us</p>
                 <div className="flex flex-col space-y-2">
                    <p className="text-2xl font-display text-white hover:text-brand-accent transition-colors duration-500 cursor-pointer">
                      info@awarenessafrica.org
                    </p>
                    <p className="text-sm text-gray-500 font-medium">Kaduna, Nigeria | Pan-African Office</p>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        openInvolvementModal();
                      }} 
                      className="bg-brand-accent text-brand-primary w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300"
                    >
                      Donate Now
                    </button>
                 </div>
              </motion.div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -z-10 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
