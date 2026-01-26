
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, ShieldCheck, ArrowRight, Award, Zap, BookOpen } from 'lucide-react';
import Button from '../components/Button';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-px bg-slate-900/10" />
  </div>
);

const Volunteer: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/c1gWdoQJ5UgtqLqJ6', '_blank');
  };

  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-6 block">Collaborative Stewardship</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              JOIN THE <br/>IMPACT.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "We seek individuals who understand that service is a commitment to communal progress and long-term transformation."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Pathways Section */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-4">Direct Engagement</h2>
            <h3 className="text-3xl font-display font-bold text-slate-900">Pathways of Contribution.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {[
              { icon: <Heart size={20} />, title: "Mentor", desc: "Guide young people through structured 6-month mentorship cycles." },
              { icon: <Users size={20} />, title: "Facilitator", desc: "Share vocational expertise during our community-led workshops." },
              { icon: <Globe size={20} />, title: "Advocate", desc: "Champion our localized initiatives through strategic storytelling." },
              { icon: <ShieldCheck size={20} />, title: "Liaison", desc: "Represent the foundation in high-level institutional partnerships." }
            ].map((path, i) => (
              <div key={i} className="p-10 md:p-14 bg-white space-y-6 flex flex-col">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                  {path.icon}
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{path.title}</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{path.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-24 sm:py-40 px-6 bg-slate-900 text-white flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...revealProps}>
             <Award className="text-brand-accent mx-auto mb-10" size={32} />
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 leading-tight">Be part of the <br/>Transformation.</h2>
             <div className="flex justify-center w-full">
               <Button 
                  variant="pink" 
                  className="w-full sm:w-auto px-16 py-4"
                  onClick={handleApplyClick}
                >
                  Apply Here <ArrowRight size={16} className="ml-3" />
               </Button>
             </div>
             <p className="mt-12 text-[9px] uppercase tracking-[0.4em] font-bold text-white/30">
               Official Registration Required
             </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;
