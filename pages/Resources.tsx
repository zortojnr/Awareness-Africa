
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Newspaper, BookOpen, Search } from 'lucide-react';
import Button from '../components/Button';

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

const Resources: React.FC = () => {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-48 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-8 block">Knowledge Hub</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-12 leading-[0.9]">
            Documentation & <br/>Insights.
          </h1>
          <p className="text-xl md:text-2xl font-display text-slate-600 leading-relaxed font-light max-w-3xl mx-auto italic">
            "Transparency is the foundation of institutional trust. This hub serves as our archive of accountability—sharing our progress, research, and reflections on the transformation of African youth."
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 leading-tight">Latest Updates.</h2>
            <span className="text-[26px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6 block">The Narrative</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...revealProps} className="max-w-3xl mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 leading-tight">Reports & <br/>Strategic Papers.</h2>
            <span className="text-[26px] uppercase tracking-[0.4em] font-bold text-slate-400 mt-8 block">Accountability</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[72px] font-display font-bold text-slate-900 mb-8 leading-tight">In the Press.</h2>
            <span className="text-[26px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Validation</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
