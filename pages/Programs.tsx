
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Landmark, Globe } from 'lucide-react';
import Button from '../components/Button';
import { openInvolvementModal } from '../App';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const imageReveal = {
  initial: { opacity: 0, scale: 1.05 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-1 bg-slate-900" />
  </div>
);

const Programs: React.FC = () => {
  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white">
      <section className="pt-32 pb-48 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-8 block">Active Operations</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-12 leading-[0.9]">
            Strategic Execution.
          </h1>
          <p className="text-xl md:text-2xl font-display text-slate-600 leading-relaxed font-light max-w-3xl mx-auto italic">
            "Our approach to social architecture is defined by precision. We move beyond reactive charity to build community-driven systems that focus on prevention, resilience, and long-term systemic impact."
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...revealProps} className="max-w-3xl mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 mb-8 leading-tight">Youth Empowerment Circles.</h2>
            <span className="text-[26px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6 block">Observational Documentation</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 mb-10 leading-tight">Workshops & <br/>Structural Learning.</h2>
            <span className="text-[26px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6 block">Capacity Building</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="text-center mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 mb-8 leading-tight">Institutional Partnerships.</h2>
            <span className="text-[26px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Unified Strength</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-32 bg-slate-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <h3 className="text-[52px] font-display font-bold mb-12 leading-tight">Join our efforts in building <br/>community resilience.</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button variant="secondary" className="group" onClick={openInvolvementModal}>
                Partner with us <ArrowRight size={16} className="ml-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
