
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
// Fix: openInvolvementModal is exported from ../utils/events, not ../App
import { openInvolvementModal } from '../utils/events';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-1 bg-slate-900" />
  </div>
);

const GetInvolved: React.FC = () => {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-48 px-6 text-center border-b border-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-8 block">Collective Action</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-12 leading-[0.9]">
            Be part of the <br/>Transformation.
          </h1>
        </motion.div>
      </section>

      <SectionDivider />

      <section className="py-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div {...revealProps}>
              <h3 className="text-[72px] font-display font-bold text-slate-900 mb-10 leading-tight">Volunteer <br/>Network.</h3>
              <div className="flex items-center gap-4 mb-10">
                <Users size={32} className="text-brand-accent" />
                <h2 className="text-[26px] uppercase tracking-[0.5em] font-bold text-slate-400">Participation</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...revealProps} className="order-1 lg:order-2">
              <h3 className="text-[72px] font-display font-bold text-slate-900 mb-10 leading-tight">Partner <br/>With Us.</h3>
              <div className="flex items-center gap-4 mb-10">
                <Briefcase size={32} className="text-brand-accent" />
                <h2 className="text-[26px] uppercase tracking-[0.5em] font-bold text-slate-400">Collaborate</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...revealProps} className="text-center">
            <h3 className="text-[88px] font-display font-bold text-slate-900 mb-10 leading-tight">Giving With <br/>Dignity.</h3>
            <div className="flex items-center justify-center gap-4 mb-10">
              <Heart size={32} className="text-brand-accent" />
              <h2 className="text-[26px] uppercase tracking-[0.5em] font-bold text-slate-400">Direct Support</h2>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />
    </main>
  );
};

export default GetInvolved;
