
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import Button from '../components/Button';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-px bg-slate-100" />
  </div>
);

const Volunteer: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/c1gWdoQJ5UgtqLqJ6', '_blank');
  };

  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6 bg-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-6 block">Collaborative Stewardship</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              JOIN THE <br/>IMPACT.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "We seek individuals who understand that service is a commitment to communal progress."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {[
              { icon: <Heart size={22} className="text-[#E91E63]" />, title: "Mentor", desc: "Guide young people through mentorship cycles." },
              { icon: <Users size={22} className="text-[#1976D2]" />, title: "Facilitator", desc: "Share vocational expertise during our workshops." },
              { icon: <Globe size={22} className="text-[#C5A059]" />, title: "Advocate", desc: "Champion our initiatives through storytelling." },
              { icon: <ShieldCheck size={22} className="text-slate-900" />, title: "Liaison", desc: "Represent the foundation in high-level partnerships." }
            ].map((path, i) => (
              <div key={i} className="p-10 md:p-12 bg-white space-y-6 group transition-colors hover:bg-slate-50">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">{path.icon}</div>
                <h4 className="text-xl font-display font-bold text-slate-900">{path.title}</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...revealProps}>
             <Award className="text-brand-accent mx-auto mb-8" size={30} />
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-10">Be part of the <br/>Transformation.</h2>
             <Button 
                variant="pink" 
                className="w-full sm:w-auto px-12 py-3.5"
                onClick={handleApplyClick}
              >
                Apply Here <ArrowRight size={14} className="ml-3" />
             </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;
