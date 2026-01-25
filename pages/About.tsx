
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
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-px bg-slate-100" />
  </div>
);

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white relative selection:bg-brand-accent selection:text-white">
      {/* Hero Header */}
      <section className="pt-32 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps}>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="text-[14px] uppercase tracking-[0.4em] font-black text-slate-400">
                Institutional Identity
              </span>
            </div>
            <h1 className="text-5xl md:text-[7.5rem] font-display font-bold text-slate-900 mb-16 leading-[0.85] tracking-tighter">
              A PAN-AFRICAN <br/><span className="text-brand-accent">BACKBONE.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-display text-slate-800 leading-tight font-light max-w-4xl italic">
              "We provide the strategic architecture necessary for specialized initiatives to thrive, moving beyond reactive charity to build sustainable systems across the continent."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Strategic Pillars */}
      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div {...revealProps} className="space-y-12">
              <h2 className="text-4xl font-display font-bold text-slate-900">The Awareness <br/>Methodology.</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
                Awareness Africa Foundation operates as an umbrella organization, providing resources, data-driven strategies, and institutional weight to targeted interventions in Southern Kaduna and beyond.
              </p>
              <div className="space-y-8">
                {[
                  { icon: <Target className="text-[#C5A059]" />, title: "Precision Intervention", desc: "Data-led mapping of community needs to ensure resources hit the most vulnerable sectors." },
                  { icon: <Shield className="text-[#E91E63]" />, title: "Protection Frameworks", desc: "Building safety nets for the girl child through education and reproductive health literacy." },
                  { icon: <Zap className="text-[#1976D2]" />, title: "Rapid Resilience", desc: "Equipping young men with mental tools to combat suicide and emotional isolation." }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">{pillar.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">{pillar.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...revealProps} transition={{ delay: 0.2 }} className="relative aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1526662095394-13650df369ca?q=80&w=2000" 
                 alt="Community Strategy" 
                 className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 hover:scale-105"
               />
               <div className="absolute inset-0 bg-brand-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Vision & Mission */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
           <motion.div {...revealProps} className="p-16 md:p-24 bg-white space-y-10">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400">Our Vision</span>
              <p className="text-3xl font-display font-bold text-slate-900 leading-tight">
                An Africa where every young person is emotionally resilient, economically empowered, and a primary architect of their community.
              </p>
           </motion.div>
           <motion.div {...revealProps} transition={{ delay: 0.2 }} className="p-16 md:p-24 bg-white space-y-10">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400">Our Mission</span>
              <p className="text-3xl font-display font-bold text-slate-900 leading-tight">
                To catalyze social change by fostering gender equity, youth leadership, and mental well-being through institutional partnerships and grassroots intervention.
              </p>
           </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Governance CTA */}
      <section className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...revealProps}>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">Institutional <br/>Integrity.</h2>
            <p className="text-white/40 text-lg font-light mb-16 max-w-2xl mx-auto">
              Our governance model ensures total transparency and accountability to our donors and the communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" onClick={() => navigate('/contact')}>Institutional Inquiry</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate('/resources')}>Annual Reports</Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      </section>
    </main>
  );
};

export default About;
