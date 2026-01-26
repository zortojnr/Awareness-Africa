
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Shield, Zap } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ImpactPillars from '../components/ImpactPillars';
import CoreValues from '../components/CoreValues';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { openInvolvementModal } from '../utils/events';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full h-1 bg-brand-primary" />
);

const Home: React.FC = () => {
  const [activeImpactColor, setActiveImpactColor] = useState<string>('#FAF9F6');
  const [hoveredBranch, setHoveredBranch] = useState<'her' | 'men' | null>(null);
  const navigate = useNavigate();

  const isImpactActive = activeImpactColor !== '#FAF9F6';

  return (
    <main id="home" className="bg-[#FAF9F6] overflow-x-hidden">
      <HeroCarousel />

      <section id="about" className="py-20 sm:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526662095394-13650df369ca?q=80&w=2000&auto=format&fit=crop" 
            alt="Community" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF7] via-[#FCFBF7]/95 to-[#FCFBF7]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div 
            {...revealProps}
            className="lg:col-span-7"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand-accent mb-6 block">Our Purpose</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
              A Future Defined by <br/><span className="text-brand-accent">Empowerment.</span>
            </h2>
            <div className="relative">
              <p className="text-base md:text-xl font-display text-slate-600 italic leading-relaxed border-l-2 border-brand-accent pl-6 py-2 max-w-2xl">
                "To empower youth, amplify underrepresented voices, and create safe, inclusive spaces where emotional well-being and community resilience are nurtured."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
             {...revealProps}
             transition={{ ...revealProps.transition, delay: 0.2 }}
             className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-white relative overflow-hidden group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                alt="Impact" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />
      <CoreValues />
      <SectionDivider />

      <section id="initiatives" className="py-20 sm:py-32 relative px-6 overflow-hidden">
        {/* Background color orientation fix: vertical on desktop, horizontal on mobile */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <motion.div 
            animate={{ opacity: hoveredBranch === 'her' ? 0.6 : 1 }}
            transition={{ duration: 0.3 }}
            className="h-1/2 w-full md:h-full md:w-1/2 bg-[#E91E63]"
          />
          <motion.div 
            animate={{ opacity: hoveredBranch === 'men' ? 0.6 : 1 }}
            transition={{ duration: 0.3 }}
            className="h-1/2 w-full md:h-full md:w-1/2 bg-[#1976D2]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...revealProps} className="mb-12 md:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">Our Branches</h2>
              <p className="text-xs sm:text-base text-white/90 leading-relaxed font-bold uppercase tracking-widest">
                Specialized organizational arms designed to address unique demographic needs with precision.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              {...revealProps}
              onMouseEnter={() => setHoveredBranch('her')}
              onMouseLeave={() => setHoveredBranch(null)}
              className="group relative bg-white p-8 md:p-12 overflow-hidden border border-slate-200/40 shadow-sm transition-all duration-500"
            >
              <div className="relative z-10 h-full flex flex-col">
                <span className="text-[#E91E63] group-hover:text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold block mb-6 transition-colors">Empowerment</span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">HerAwareness Africa</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 mb-10 leading-relaxed max-w-sm font-light transition-colors">Protecting girls' rights to education and safety through systemic intervention.</p>
                <div className="mt-auto">
                  <Link to="/initiatives/her-awareness">
                    <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-bold text-slate-900 group-hover:text-white transition-all">
                      Explore Impact <ArrowRight size={12} />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#E91E63] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-0" />
            </motion.div>

            <motion.div 
              {...revealProps}
              onMouseEnter={() => setHoveredBranch('men')}
              onMouseLeave={() => setHoveredBranch(null)}
              transition={{ ...revealProps.transition, delay: 0.2 }}
              className="group relative bg-white p-8 md:p-12 overflow-hidden border border-slate-200/40 shadow-sm transition-all duration-500"
            >
              <div className="relative z-10 h-full flex flex-col">
                <span className="text-[#1976D2] group-hover:text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold block mb-6 transition-colors">Mental Well-being</span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">MenForward Africa</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 mb-10 leading-relaxed max-w-sm font-light transition-colors">Normalizing emotional expression and reducing suicide through culturally relevant support.</p>
                <div className="mt-auto">
                  <Link to="/initiatives/men-forward">
                    <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-bold text-slate-900 group-hover:text-white transition-all">
                      Explore Impact <ArrowRight size={12} />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#1976D2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <motion.section 
        id="impact" 
        animate={{ backgroundColor: activeImpactColor }}
        transition={{ duration: 1 }}
        className="py-20 sm:py-32 px-6 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...revealProps} className="text-center mb-12 md:mb-20">
            <motion.span 
              animate={{ color: isImpactActive ? 'rgba(255,255,255,0.7)' : '#C5A059' }}
              className="text-[11px] uppercase tracking-[0.5em] font-bold mb-4 block"
            >
              Our Global Reach
            </motion.span>
            <motion.h2 
              animate={{ color: isImpactActive ? '#FFFFFF' : '#0F172A' }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold transition-colors duration-500 leading-tight"
            >
              Metrics of Success.
            </motion.h2>
          </motion.div>
          <ImpactPillars onActiveColorChange={setActiveImpactColor} />
        </div>
      </motion.section>

      <SectionDivider />

      <section id="programs" className="py-20 sm:py-32 bg-[#0A0F1A] text-white px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            <motion.div {...revealProps} className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand-accent mb-6 block">Active Execution</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-[1.1]">Strategic <br/>Intervention.</h2>
              <p className="text-base text-white/60 font-light leading-relaxed">
                Our programs are data-driven and community-centered, ensuring long-term sustainability.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 w-full lg:w-auto">
              {[
                { icon: <Shield size={24} />, title: "Youth Circles", desc: "Safe spaces for peer-led dialogue." },
                { icon: <Zap size={24} />, title: "Workshops", desc: "Intensive skill-based vocational training." },
                { icon: <Globe size={24} />, title: "Advocacy", desc: "Breaking stigmas through storytelling." },
                { icon: <Users size={24} />, title: "Partnerships", desc: "Collaborating with global institutions." }
              ].map((item, idx) => (
                <motion.div key={idx} {...revealProps} transition={{ ...revealProps.transition, delay: 0.1 * idx }} className="group">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center mb-6">
                    <span className="text-brand-accent transition-colors">{item.icon}</span>
                  </div>
                  <h4 className="font-display text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="get-involved" className="py-20 sm:py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            {...revealProps}
            className="bg-white p-10 md:p-20 flex flex-col items-center gap-10 relative z-10 border border-slate-200/50 shadow-sm text-center"
          >
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand-accent block">Get Involved</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-slate-900">Be part of the solution.</h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-light leading-relaxed">
                Your support creates ripples of impact that redefine futures for generations across Africa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto px-10"
                onClick={openInvolvementModal}
              >
                Partner With Us
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto px-10 border-slate-900 text-slate-900"
                onClick={() => navigate('/volunteer')}
              >
                Become a Volunteer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;