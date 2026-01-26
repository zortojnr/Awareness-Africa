
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Globe, Users, Zap } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full h-1 bg-brand-primary" />
);

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white relative selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-brand-accent" />
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400">
                Institutional Identity
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              A PAN-AFRICAN <br/><span className="text-brand-accent">BACKBONE.</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-slate-800 leading-tight font-light max-w-4xl italic">
              "We provide the strategic architecture necessary for specialized initiatives to thrive, building sustainable systems across the continent."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...revealProps} className="space-y-10">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900">The Awareness <br/>Methodology.</h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Awareness Africa Foundation operates as an umbrella organization, providing resources and data-driven strategies to targeted interventions. We bridge the gap between institutional funding and grassroots impact.
              </p>
              <div className="space-y-8">
                {[
                  { icon: <Target size={20} className="text-[#C5A059]" />, title: "Precision Intervention", desc: "Data-led mapping of community needs to ensure efficient resource allocation and maximum scalability." },
                  { icon: <Shield size={20} className="text-[#E91E63]" />, title: "Protection Frameworks", desc: "Building safety nets through community-driven education and reproductive health literacy." },
                  { icon: <Zap size={20} className="text-[#1976D2]" />, title: "Rapid Resilience", desc: "Equipping young men with mental tools to combat emotional isolation and foster communal strength." }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">{pillar.icon}</div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...revealProps} transition={{ delay: 0.2 }} className="relative aspect-video lg:aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1526662095394-13650df369ca?q=80&w=2000" 
                 alt="Community Strategy" 
                 className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 hover:scale-105"
               />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
           <motion.div {...revealProps} className="p-10 md:p-16 bg-white space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400">Our Vision</span>
              <p className="text-xl sm:text-3xl font-display font-bold text-slate-900 leading-tight">
                An Africa where every young person is emotionally resilient and economically empowered to build a meaningful future.
              </p>
           </motion.div>
           <motion.div {...revealProps} transition={{ delay: 0.2 }} className="p-10 md:p-16 bg-white space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400">Our Mission</span>
              <p className="text-xl sm:text-3xl font-display font-bold text-slate-900 leading-tight">
                To catalyze social change through institutional partnerships, research-backed strategy, and direct grassroots intervention.
              </p>
           </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...revealProps}>
            <Award className="mx-auto mb-8 text-brand-accent" size={32} />
            <h2 className="text-2xl md:text-5xl font-display font-bold mb-8">Institutional Integrity.</h2>
            <p className="text-white/40 text-sm font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Our governance model ensures total transparency and accountability to our donors and the communities we serve. Every resource is optimized for maximum social return.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="w-full sm:w-auto px-10" onClick={() => navigate('/contact')}>Institutional Inquiry</Button>
              <Button variant="outline" className="w-full sm:w-auto px-10 border-white/20 text-white hover:bg-white hover:text-black" onClick={() => navigate('/resources')}>Annual Reports</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;