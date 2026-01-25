
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Newspaper, BookOpen, Search, ArrowRight } from 'lucide-react';
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
    <main className="bg-white selection:bg-brand-accent selection:text-white">
      {/* Hero */}
      <section className="pt-32 pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-slate-400 mb-8 block">Archive & Accountability</span>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold text-slate-900 mb-12 leading-[0.85] tracking-tighter">
              KNOWLEDGE <br/>HUB.
            </h1>
            <p className="text-2xl md:text-4xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "Transparency is the foundation of institutional trust. Explore our research, progress reports, and reflections on African youth transformation."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Resource Sections */}
      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Sidebar Categories */}
            <div className="lg:col-span-3 space-y-12">
               <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 mb-8">Categories</h3>
                  <div className="flex flex-col gap-4">
                    {["Annual Reports", "Strategic Papers", "Media Assets", "Research Data"].map((cat, i) => (
                      <button key={i} className="text-left text-sm font-bold text-slate-900 hover:text-brand-accent border-b border-transparent hover:border-brand-accent pb-2 transition-all w-fit">
                        {cat}
                      </button>
                    ))}
                  </div>
               </div>
               <div className="p-8 bg-slate-900 text-white">
                  <BookOpen className="text-brand-accent mb-6" size={24} />
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Request Data</h4>
                  <p className="text-[10px] text-white/40 leading-relaxed font-light mb-6">Researchers may request detailed anonymized metrics for academic study.</p>
                  <Button variant="secondary" noCaps className="py-2 px-6 text-[10px]">Contact Liaison</Button>
               </div>
            </div>

            {/* Document List */}
            <div className="lg:col-span-9 space-y-20">
              <motion.div {...revealProps}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 border-b border-slate-100 pb-8">Institutional Documents</h2>
                <div className="space-y-6">
                  {[
                    { title: "2024 Institutional Progress Report", date: "Jan 2025", size: "4.2 MB", type: "PDF" },
                    { title: "HerAwareness: Southern Kaduna Intervention Strategy", date: "Nov 2024", size: "2.1 MB", type: "PDF" },
                    { title: "MenForward: Mental Well-being Framework", date: "Oct 2024", size: "1.8 MB", type: "PDF" },
                    { title: "Governance & Transparency Policy v2.1", date: "Aug 2024", size: "0.9 MB", type: "PDF" }
                  ].map((doc, i) => (
                    <div key={i} className="group flex items-center justify-between p-8 bg-white border border-slate-100 hover:shadow-xl transition-all duration-500 cursor-pointer">
                      <div className="flex items-center gap-8">
                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-brand-accent group-hover:text-white transition-colors"><FileText size={20} /></div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">{doc.title}</h4>
                          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{doc.date} • {doc.size} • {doc.type}</p>
                        </div>
                      </div>
                      <Download size={20} className="text-slate-200 group-hover:text-brand-accent transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...revealProps} transition={{ delay: 0.2 }}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 border-b border-slate-100 pb-8">Press Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { outlet: "Kaduna Daily", title: "NGO Launches New Mental Health Initiative for Men", date: "Dec 12, 2024" },
                    { outlet: "African Impact", title: "Empowering the Next Generation of Female Leaders", date: "Nov 28, 2024" }
                  ].map((news, i) => (
                    <div key={i} className="p-10 border border-slate-100 bg-white space-y-6 group cursor-pointer hover:border-brand-accent transition-colors">
                      <Newspaper className="text-brand-accent" size={24} />
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-accent transition-colors">{news.title}</h4>
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-black text-slate-300">
                        <span>{news.outlet}</span>
                        <span>{news.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer HQ Link */}
      <section className="py-24 px-6 flex flex-col md:flex-row items-center justify-between gap-12 bg-white">
        <div className="max-w-md">
          <p className="text-[14px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6">Unified Headquarters</p>
          <p className="text-2xl font-display font-bold text-slate-900 leading-tight">Return to the foundational <br/>strategic narrative.</p>
        </div>
        <Button 
          variant="outline" 
          noCaps 
          className="w-full md:w-auto border-slate-200 text-slate-600 px-14 font-light"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Scroll to Top
        </Button>
      </section>
    </main>
  );
};

export default Resources;
