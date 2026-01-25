
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Newspaper, BookOpen } from 'lucide-react';
import Button from '../components/Button';

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

const Resources: React.FC = () => {
  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[12px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-6 block">Archive & Accountability</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
              KNOWLEDGE <br/>HUB.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "Transparency is the foundation of institutional trust. Explore our research and progress reports."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-4 space-y-12">
               <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 mb-8">Categories</h3>
                  <div className="flex flex-col gap-3">
                    {["Annual Reports", "Strategic Papers", "Media Assets", "Research Data"].map((cat, i) => (
                      <button key={i} className="text-left text-xs font-bold text-slate-900 hover:text-brand-accent border-b border-transparent hover:border-brand-accent pb-2 transition-all w-fit uppercase tracking-widest">
                        {cat}
                      </button>
                    ))}
                  </div>
               </div>
               <div className="p-8 bg-slate-900 text-white">
                  <BookOpen className="text-brand-accent mb-6" size={20} />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Request Data</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed font-light mb-6">Researchers may request detailed anonymized metrics for academic study.</p>
                  <Button variant="secondary" className="w-full py-2.5">Contact Liaison</Button>
               </div>
            </div>

            <div className="lg:col-span-8 space-y-16">
              <motion.div {...revealProps}>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-10 border-b border-slate-100 pb-6">Institutional Documents</h2>
                <div className="space-y-4">
                  {[
                    { title: "2024 Institutional Progress Report", date: "Jan 2025" },
                    { title: "HerAwareness: Intervention Strategy", date: "Nov 2024" },
                    { title: "Governance & Transparency Policy", date: "Aug 2024" }
                  ].map((doc, i) => (
                    <div key={i} className="group flex items-center justify-between p-6 bg-white border border-slate-100 hover:border-brand-accent transition-all cursor-pointer">
                      <div className="flex items-center gap-6">
                        <div className="w-10 h-10 bg-slate-50 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors"><FileText size={18} /></div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">{doc.title}</h4>
                          <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{doc.date}</p>
                        </div>
                      </div>
                      <Download size={18} className="text-slate-200 group-hover:text-brand-accent transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-slate-100">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto px-12"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Return to Top
        </Button>
      </section>
    </main>
  );
};

export default Resources;
