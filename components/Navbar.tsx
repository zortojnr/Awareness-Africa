
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
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white shadow-sm py-2 border-slate-100' 
        : 'bg-white py-3 lg:py-4 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO LEFT - Refined Spacing */}
        <button 
          onClick={() => handleNavClick('#home')} 
          className="flex flex-col items-start group focus:outline-none shrink-0"
        >
          <span className="font-display text-lg sm:text-2xl font-bold tracking-[0.05em] uppercase leading-none text-brand-primary transition-colors group-hover:text-brand-accent">
            Awareness Africa
          </span>
          <span className="text-[8px] tracking-[0.4em] font-medium uppercase opacity-60 text-brand-primary mt-1">
            Foundation
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => {
            const isInitiatives = link.label === 'Initiatives';
            const isRoute = link.path.startsWith('/');
            const isActive = isRoute 
              ? location.pathname === link.path 
              : (location.pathname === '/' && activeSection === link.path.replace('#', ''));
            
            if (isInitiatives) {
              return (
                <div 
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setIsInitiativesOpen(true)}
                  onMouseLeave={() => setIsInitiativesOpen(false)}
                >
                  <button
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors py-2 flex items-center gap-1 focus:outline-none ${
                      isActive ? 'text-black' : 'text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={10} className={`transition-transform duration-300 ${isInitiativesOpen ? 'rotate-180' : ''}`} />
                    {isActive && (
                      <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isInitiativesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60"
                      >
                        <div className="bg-white border border-slate-100 shadow-2xl">
                          <Link to="/initiatives/her-awareness" onClick={() => setIsInitiativesOpen(false)} className="flex flex-col p-5 hover:bg-slate-50 border-b border-slate-50 group">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#E91E63] mb-1">Empowerment</span>
                            <span className="text-sm font-display font-bold text-slate-900 group-hover:text-brand-accent transition-colors">HerAwareness Africa</span>
                          </Link>
                          <Link to="/initiatives/men-forward" onClick={() => setIsInitiativesOpen(false)} className="flex flex-col p-5 hover:bg-slate-50 group">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#1976D2] mb-1">Mental Well-being</span>
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
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors relative py-2 focus:outline-none ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent" />
                )}
              </button>
            );
          })}
          
          <button 
            onClick={openInvolvementModal}
            className="bg-brand-primary text-white px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all shadow-sm"
          >
            Donate
          </button>
        </div>

        {/* MOBILE TRIGGER RIGHT */}
        <button 
          className="lg:hidden text-brand-primary focus:outline-none p-2 z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-primary z-[105] flex flex-col h-screen w-screen overflow-hidden lg:hidden"
          >
            <div className="flex flex-col h-full justify-center px-10">
              <div className="flex flex-col space-y-6 overflow-y-auto pt-16 pb-10">
                {NAV_LINKS.map((link) => {
                  const isInitiatives = link.label === 'Initiatives';
                  const isRoute = link.path.startsWith('/');
                  const isActive = isRoute 
                    ? location.pathname === link.path 
                    : (location.pathname === '/' && activeSection === link.path.replace('#', ''));
                  
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => isInitiatives ? setIsInitiativesOpen(!isInitiativesOpen) : handleNavClick(link.path)}
                        className={`text-3xl font-display font-bold text-left transition-colors flex items-center gap-4 ${
                          isActive ? 'text-brand-accent' : 'text-white'
                        }`}
                      >
                        {link.label}
                        {isInitiatives && <ChevronDown size={20} className={`transition-transform ${isInitiativesOpen ? 'rotate-180' : ''}`} />}
                      </button>
                      
                      {isInitiatives && isInitiativesOpen && (
                        <div className="flex flex-col gap-5 mt-6 ml-4 border-l border-white/10 pl-6">
                          <Link to="/initiatives/her-awareness" onClick={() => setIsOpen(false)} className="text-lg font-display text-white/60">HerAwareness Africa</Link>
                          <Link to="/initiatives/men-forward" onClick={() => setIsOpen(false)} className="text-lg font-display text-white/60">MenForward Africa</Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto py-10 border-t border-white/10">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-6">Contact Institutional Headquarters</p>
                 <p className="text-lg font-display text-white mb-8">info@awarenessafrica.org</p>
                 <button 
                   onClick={() => { setIsOpen(false); openInvolvementModal(); }} 
                   className="bg-brand-accent text-brand-primary w-full px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em]"
                 >
                   Donate Now
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;