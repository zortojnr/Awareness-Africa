
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Users, Heart, Shield, Zap } from 'lucide-react';
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

const Home: React.FC = () => {
  const [activeImpactColor, setActiveImpactColor] = useState<string>('#FAF9F6');
  const [hoveredBranch, setHoveredBranch] = useState<'her' | 'men' | null>(null);
  const navigate = useNavigate();

  const isImpactActive = activeImpactColor !== '#FAF9F6';

  return (
    <main id="home" className="bg-[#FAF9F6]">
      <HeroCarousel />

      <section id="about" className="py-40 px-6 relative overflow-hidden border-b-[16px] border-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526662095394-13650df369ca?q=80&w=2000&auto=format&fit=crop" 
            alt="Community" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF7] via-[#FCFBF7]/95 to-[#FCFBF7]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
          <motion.div 
            {...revealProps}
            className="lg:col-span-7"
          >
            <span className="text-[14px] uppercase tracking-[0.4em] font-black text-brand-accent mb-8 block">Our Purpose</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-10 leading-tight">
              A Future Defined by <br/><span className="text-brand-accent">Empowerment.</span>
            </h2>
            <div className="relative">
              <p className="text-xl md:text-2xl font-display text-slate-600 italic leading-relaxed border-l-2 border-brand-accent pl-8 py-2 max-w-2xl">
                "To empower youth, amplify underrepresented voices, and create safe, inclusive spaces where emotional well-being, gender equity, and community resilience are nurtured through awareness, peer support, and leadership development across Africa."
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
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      <CoreValues />

      <section id="initiatives" className="py-40 relative px-6 overflow-hidden border-b-[16px] border-brand-primary">
        <div className="absolute inset-0 z-0 flex">
          <motion.div 
            animate={{ 
              opacity: hoveredBranch === 'her' ? 0.6 : 1,
              filter: hoveredBranch === 'her' ? 'brightness(0.8)' : 'brightness(1)'
            }}
            transition={{ duration: 0.3 }}
            className="h-full w-1/2 bg-[#E91E63]"
          />
          <motion.div 
            animate={{ 
              opacity: hoveredBranch === 'men' ? 0.6 : 1,
              filter: hoveredBranch === 'men' ? 'brightness(0.8)' : 'brightness(1)'
            }}
            transition={{ duration: 0.3 }}
            className="h-full w-1/2 bg-[#1976D2]"
          />
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1493676303813-f14820ba1551?q=80&w=2000&auto=format&fit=crop')] bg-cover grayscale mix-blend-overlay pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            {...revealProps}
            className="mb-24"
          >
            <div className="max-w-2xl">
              <h2 className="text-[48px] font-display font-bold text-white mb-6 leading-tight">Our Branches</h2>
              <p className="max-w-2xl text-[20px] text-white/90 leading-relaxed font-bold uppercase tracking-wider">
                Specialized organizational arms designed to address unique demographic needs with precision and localized expertise.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              {...revealProps}
              onMouseEnter={() => setHoveredBranch('her')}
              onMouseLeave={() => setHoveredBranch(null)}
              whileHover={{ y: -8 }}
              className="group relative h-full bg-white p-12 md:p-16 overflow-hidden border border-slate-200/40 shadow-sm transition-all duration-500"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="absolute inset-0 bg-[#E91E63]" />
                 <div className="absolute inset-0 bg-[#AD1457] origin-bottom-right transition-transform duration-700 ease-out translate-y-full group-hover:translate-y-0" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <span className="text-[#E91E63] group-hover:text-white/80 text-[14px] uppercase tracking-[0.4em] font-bold block mb-8 transition-colors">Empowerment</span>
                <h3 className="text-4xl font-display font-bold mb-6 text-slate-900 group-hover:text-white transition-colors">HerAwareness <br/>Africa</h3>
                <p className="text-slate-600 group-hover:text-white/90 mb-12 leading-relaxed max-w-sm font-light transition-colors">Focused on protecting girls' rights to education, safety, and self-determination through systemic intervention.</p>
                <div className="mt-auto">
                  <Link to="/initiatives/her-awareness">
                    <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 group-hover:text-white group-hover:gap-8 transition-all">
                      Explore Impact <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...revealProps}
              onMouseEnter={() => setHoveredBranch('men')}
              onMouseLeave={() => setHoveredBranch(null)}
              transition={{ ...revealProps.transition, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative h-full bg-white p-12 md:p-16 overflow-hidden border border-slate-200/40 shadow-sm transition-all duration-500"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="absolute inset-0 bg-[#1976D2]" />
                 <div className="absolute inset-0 bg-[#1565C0] origin-bottom-right transition-transform duration-700 ease-out translate-y-full group-hover:translate-y-0" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <span className="text-[#1976D2] group-hover:text-white/80 text-[14px] uppercase tracking-[0.4em] font-bold block mb-8 transition-colors">Mental Well-being</span>
                <h3 className="text-4xl font-display font-bold mb-6 text-slate-900 group-hover:text-white transition-colors">MenForward <br/>Africa</h3>
                <p className="text-slate-600 group-hover:text-white/90 mb-12 leading-relaxed max-w-sm font-light transition-colors">Normalizing emotional expression and reducing suicide through culturally relevant, non-shaming support.</p>
                <div className="mt-auto">
                  <Link to="/initiatives/men-forward">
                    <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 group-hover:text-white group-hover:gap-8 transition-all">
                      Explore Impact <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        id="impact" 
        animate={{ backgroundColor: activeImpactColor }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="py-32 px-6 overflow-hidden relative border-b-[16px] border-brand-primary"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...revealProps} className="text-center mb-24">
            <motion.span 
              animate={{ color: isImpactActive ? 'rgba(255,255,255,0.7)' : '#C5A059' }}
              className="text-[14px] uppercase tracking-[0.5em] font-bold mb-6 block transition-colors duration-500"
            >
              Our Global Reach
            </motion.span>
            <motion.h2 
              animate={{ color: isImpactActive ? '#FFFFFF' : '#0F172A' }}
              className="text-[64px] font-display font-bold transition-colors duration-500 leading-tight"
            >
              Metrics of Success.
            </motion.h2>
            <motion.p 
              animate={{ color: isImpactActive ? 'rgba(255,255,255,0.6)' : '#64748B' }}
              className="mt-6 max-w-xl mx-auto font-light leading-relaxed transition-colors duration-500"
            >
              Quantifying our dedication to sustainable social architecture across Africa.
            </motion.p>
          </motion.div>
          <ImpactPillars onActiveColorChange={setActiveImpactColor} />
        </div>
      </motion.section>

      <section id="programs" className="py-40 bg-[#0A0F1A] text-white px-6 relative overflow-hidden border-b-[16px] border-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop" 
            alt="Strategy" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0A0F1A]/80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-32">
            <motion.div {...revealProps} className="max-w-xl">
              <span className="text-[14px] uppercase tracking-[0.4em] font-black text-brand-accent mb-8 block">Active Execution</span>
              <h2 className="text-[64px] font-display font-bold mb-8 leading-[0.9]">Strategic <br/>Intervention.</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed">
                Our programs are data-driven and community-centered, ensuring long-term sustainability and authentic empowerment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full lg:w-auto">
              <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.1 }} className="group">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors duration-500">
                  <Shield className="text-brand-accent group-hover:text-white" size={32} />
                </div>
                <h4 className="font-display text-[32px] font-bold mb-4">Youth Circles</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">Safe, moderated spaces for peer-led dialogue, healing, and emotional growth.</p>
              </motion.div>
              
              <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.2 }} className="group">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors duration-500">
                  <Zap className="text-brand-accent group-hover:text-white" size={32} />
                </div>
                <h4 className="font-display text-[32px] font-bold mb-4">Workshops</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">Intensive skill-based sessions focused on vocational training and adaptive resilience.</p>
              </motion.div>

              <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.3 }} className="group">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors duration-500">
                  <Globe className="text-brand-accent group-hover:text-white" size={32} />
                </div>
                <h4 className="font-display text-[32px] font-bold mb-4">Advocacy</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">Driving policy change and breaking cultural stigmas through strategic storytelling.</p>
              </motion.div>
              
              <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.4 }} className="group">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors duration-500">
                  <Users className="text-brand-accent group-hover:text-white" size={32} />
                </div>
                <h4 className="font-display text-[32px] font-bold mb-4">Partnerships</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">Collaborating with global institutions to scale local solutions across the continent.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-40 px-6 relative overflow-hidden border-b-[16px] border-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2000&auto=format&fit=crop" 
            alt="Support" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-[#F1F3F5]/90" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            {...revealProps}
            className="bg-white p-12 md:p-24 lg:p-32 flex flex-col md:flex-row items-center gap-20 relative z-10 border border-slate-200/50 shadow-sm"
          >
            <div className="flex-1 space-y-10">
              <span className="text-[14px] uppercase tracking-[0.4em] font-black text-brand-accent block">Get Involved</span>
              <h2 className="text-5xl md:text-[6.5rem] font-display font-bold leading-[0.9] text-slate-900">Be part of the <br/>solution.</h2>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-light">
                Whether you are an individual donor, a corporate partner, or a potential volunteer, your support creates ripples of impact that redefine futures for generations.
              </p>
              <div className="flex wrap gap-6 pt-6">
                <Button 
                  variant="primary" 
                  className="shadow-lg"
                  onClick={openInvolvementModal}
                >
                  Partner With Us
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                  onClick={() => navigate('/volunteer')}
                >
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
