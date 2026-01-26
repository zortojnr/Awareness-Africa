
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Heart, Zap, Shield } from 'lucide-react';
import Button from '../components/Button';
import { openInvolvementModal } from '../utils/events';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full h-1 bg-brand-primary" />
);

const Programs: React.FC = () => {
  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-6 block">Operational Architecture</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              STRATEGIC <br/>EXECUTION.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "We move beyond reactive charity to build community-driven systems focused on resilience and long-term impact."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users size={22} />, title: "Empowerment Circles", tag: "Community-Led" },
              { icon: <BookOpen size={22} />, title: "Educational Access", tag: "Institutional" },
              { icon: <Zap size={22} />, title: "Vocational Skills", tag: "Capacity Building" },
              { icon: <Heart size={22} />, title: "Health & Dignity", tag: "Wellness" },
              { icon: <Shield size={22} />, title: "Mentorship Networks", tag: "Future-Focused" },
              { icon: <Globe size={22} />, title: "Regional Advocacy", tag: "Systemic Change" }
            ].map((prog, i) => (
              <motion.div 
                key={i} 
                className="p-8 md:p-10 bg-white border border-slate-100 shadow-sm flex flex-col justify-between group h-full"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    {/* Neutral professional icons - no hover color shift */}
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-900">{prog.icon}</div>
                    <span className="text-[9px] uppercase tracking-widest font-black text-slate-300">{prog.tag}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-slate-900">{prog.title}</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Scalable initiatives addressing root causes of social exclusion through structured, results-oriented delivery.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Scale the Impact.</h3>
            <p className="text-white/40 text-sm font-light mb-12 max-w-lg mx-auto leading-relaxed">
              Our programs are designed for replication. Partner with us to bring these interventions to your region and empower the next generation.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="w-full sm:w-auto px-12" onClick={openInvolvementModal}>Institutional Partnership</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Programs;