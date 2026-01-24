
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, ShieldCheck, ArrowRight, MessageSquare, Globe, BookOpen } from 'lucide-react';
import Button from '../components/Button';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-1 bg-slate-900" />
  </div>
);

const Volunteer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = () => {
    window.open('https://forms.gle/c1gWdoQJ5UgtqLqJ6', '_blank');
  };

  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <main className="bg-white">
      <section className="pt-32 pb-40 px-6 bg-slate-50/30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400">Collaborative Stewardship</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 leading-[0.9]">
              Become a <br/>Partner in Impact.
            </h1>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 leading-tight">Service Pathways.</h2>
            <span className="text-[26px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Direct Involvement</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div {...revealProps} className="space-y-12">
            <div>
              <h2 className="text-[88px] font-display font-bold text-slate-900 leading-[0.9] mb-8">Apply to <br/>Join Us.</h2>
              <span className="text-[26px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-6 block">Onboarding</span>
              
              <div className="flex flex-col gap-6 mt-12 pt-12 border-t border-slate-200">
                <p className="text-[32px] text-slate-900 font-bold uppercase tracking-tight">You can also</p>
                <button 
                  onClick={handleApplyClick}
                  className="bg-slate-900 text-white px-12 py-6 text-2xl font-black uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 shadow-2xl flex items-center justify-center gap-6"
                >
                  Apply Here <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />
    </main>
  );
};

export default Volunteer;
