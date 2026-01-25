
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Landmark, Globe, Shield, Heart, Zap } from 'lucide-react';
import Button from '../components/Button';
import { openInvolvementModal } from '../utils/events';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-px bg-slate-100" />
  </div>
);

const Programs: React.FC = () => {
  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white">
      {/* Hero */}
      <section className="pt-32 pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-8 block">Operational Architecture</span>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold text-slate-900 mb-12 leading-[0.85] tracking-tighter">
              STRATEGIC <br/>EXECUTION.
            </h1>
            <p className="text-2xl md:text-4xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "We move beyond reactive charity to build community-driven systems focused on prevention, resilience, and long-term impact."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Program Breakdown */}
      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                icon: <Users className="text-[#C5A059]" />, 
                title: "Empowerment Circles", 
                desc: "Moderated peer-led safe spaces for dialogue, emotional healing, and leadership training among Southern Kaduna youth.",
                tag: "Community-Led" 
              },
              { 
                icon: <BookOpen className="text-[#E91E63]" />, 
                title: "Educational Access", 
                desc: "Scholarships and material support to reduce drop-out rates, specifically targeting young women in secondary education.",
                tag: "Institutional" 
              },
              { 
                icon: <Zap className="text-[#1976D2]" />, 
                title: "Vocational Skills", 
                desc: "Intensive 2-day workshops providing practical career pathways and self-reliance skills for economic independence.",
                tag: "Capacity Building" 
              },
              { 
                icon: <Heart className="text-[#C5A059]" />, 
                title: "Health & Dignity", 
                desc: "Reproductive health education and sanitary pad distribution to maintain hygiene and school attendance.",
                tag: "Wellness" 
              },
              { 
                icon: <Shield className="text-[#E91E63]" />, 
                title: "Mentorship Networks", 
                desc: "Connecting high-potential youth with established African professionals for long-term guidance and growth.",
                tag: "Future-Focused" 
              },
              { 
                icon: <Globe className="text-[#1976D2]" />, 
                title: "Regional Advocacy", 
                desc: "Policy engagement and public awareness campaigns to break cultural stigmas around mental health and gender equity.",
                tag: "Systemic Change" 
              }
            ].map((prog, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="p-10 bg-white border border-slate-100 shadow-sm flex flex-col justify-between group h-full"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-brand-accent group-hover:text-white transition-colors">{prog.icon}</div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-300">{prog.tag}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-brand-accent transition-colors">{prog.title}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Call to Action */}
      <section className="py-40 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-12">Scale the Impact.</h3>
            <p className="text-white/40 text-lg font-light mb-16 max-w-2xl mx-auto">
              Our programs are designed for replication. Partner with us to bring these interventions to new regions.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" onClick={openInvolvementModal}>Institutional Partnership</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
