import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import blueLogo from '../assets/images/AAF blue logo (1).png';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-px bg-slate-200" />
  </div>
);

const Resources: React.FC = () => {
  return (
    <main className="bg-white selection:bg-slate-900 selection:text-white overflow-x-hidden">
      {/* Hero Section - Minimal & Architectural */}
      <section className="pt-32 pb-24 sm:pt-48 sm:pb-32 px-6 bg-white relative">
        {/* Hero Background Logo */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `url("${blueLogo}")`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="max-w-7xl mx-auto border-l-2 border-slate-900 pl-8 md:pl-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-8 block">Archive & Accountability</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-slate-900 mb-10 leading-[0.9] tracking-tighter">
              KNOWLEDGE <br/>HUB.
            </h1>
            <p className="text-lg sm:text-2xl font-display text-slate-600 leading-snug font-light max-w-3xl border-t border-slate-100 pt-8">
              "Transparency is the foundation of institutional trust. Explore our research, strategic papers, and progress reports."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Sidebar - Categories */}
            <div className="lg:col-span-4 space-y-12 lg:space-y-16">
               <div className="lg:sticky lg:top-32">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-900 mb-6 lg:mb-10 pb-4 border-b border-slate-900">Index</h3>
                  <div className="flex flex-col">
                    {["Annual Reports", "Strategic Papers", "Media Assets", "Research Data"].map((cat, i) => (
                      <button key={i} className="group flex items-center justify-between py-4 text-xs font-bold text-slate-500 hover:text-slate-900 border-b border-slate-100 transition-all uppercase tracking-widest text-left">
                        {cat}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </button>
                    ))}
                  </div>

                  <div className="mt-16 p-8 bg-slate-50 border border-slate-100">
                      <BookOpen className="text-slate-900 mb-6" size={20} />
                      <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 text-slate-900">Request Data</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-light mb-8">
                        Researchers may request detailed anonymized metrics for academic study.
                      </p>
                      <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-900 border-b border-slate-900 pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                        Contact Liaison
                      </button>
                   </div>
               </div>
            </div>

            {/* Content - Document List */}
            <div className="lg:col-span-8">
              <motion.div {...revealProps}>
                <div className="flex items-baseline justify-between mb-12 border-b border-slate-900 pb-6">
                   <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Institutional Documents</h2>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hidden sm:block">Latest Uploads</span>
                </div>
                
                <div className="grid gap-px bg-slate-200 border border-slate-200">
                  {[
                    { title: "2024 Institutional Progress Report", date: "Jan 2025", size: "2.4 MB" },
                    { title: "HerAwareness: Intervention Strategy", date: "Nov 2024", size: "1.8 MB" },
                    { title: "Governance & Transparency Policy", date: "Aug 2024", size: "0.9 MB" },
                    { title: "Community Impact Assessment - Q3", date: "Oct 2024", size: "3.1 MB" }
                  ].map((doc, i) => (
                    <div key={i} className="group relative bg-white p-8 hover:bg-slate-50 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-start gap-6">
                          <div className="w-12 h-12 border border-slate-100 bg-white flex items-center justify-center shrink-0 text-slate-300 group-hover:text-slate-900 group-hover:border-slate-300 transition-all duration-300">
                            <FileText size={20} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">{doc.title}</h4>
                            <div className="flex gap-4 text-[10px] uppercase tracking-widest font-medium text-slate-400">
                              <span>{doc.date}</span>
                              <span className="w-px h-3 bg-slate-300" />
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button className="self-start md:self-center flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                           Download <Download size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 px-6 text-center">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto px-12 border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-900"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Return to Top
        </Button>
      </section>
    </main>
  );
};

export default Resources;
