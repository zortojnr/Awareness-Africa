
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, ShieldCheck, ArrowRight, MessageSquare, Globe, BookOpen, Award } from 'lucide-react';
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
    <main className="bg-white selection:bg-brand-accent selection:text-white">
      {/* Hero */}
      <section className="pt-32 pb-48 px-6 bg-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-8 block">Collaborative Stewardship</span>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold text-slate-900 mb-12 leading-[0.85] tracking-tighter">
              JOIN THE <br/>IMPACT.
            </h1>
            <p className="text-2xl md:text-4xl font-display text-slate-600 leading-tight font-light max-w-4xl italic">
              "We seek individuals who understand that service is a commitment to communal progress. Join our local and global network of change agents."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Pathways */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">Service Pathways.</h2>
            <div className="h-px w-24 bg-brand-accent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {[
              { icon: <Heart className="text-[#E91E63]" />, title: "Community Mentor", desc: "Guide young ladies or men through structured 6-month mentorship cycles in Southern Kaduna." },
              { icon: <Users className="text-[#1976D2]" />, title: "Workshop Facilitator", desc: "Share vocational expertise or mental health knowledge during our intensive workshop sessions." },
              { icon: <Globe className="text-[#C5A059]" />, title: "Regional Advocate", desc: "Champion our initiatives through media storytelling, networking, and public policy awareness." },
              { icon: <ShieldCheck className="text-slate-900" />, title: "Institutional Liaison", desc: "Represent the foundation in high-level partnerships with NGOs and government bodies." }
            ].map((path, i) => (
              <div key={i} className="p-16 bg-white space-y-8 group transition-colors hover:bg-slate-50">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">{path.icon}</div>
                <h4 className="text-2xl font-display font-bold text-slate-900">{path.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed max-w-sm">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Apply Section */}
      <section className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...revealProps}>
             <Award className="text-brand-accent mx-auto mb-10" size={48} />
             <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">Be part of the <br/>Transformation.</h2>
             <p className="text-white/40 text-lg font-light mb-16 max-w-2xl mx-auto">
               Our onboarding process ensures that every volunteer is aligned with our mission and equipped for their role. Start your application today.
             </p>
             <div className="flex flex-col gap-6 items-center">
                <button 
                  onClick={handleApplyClick}
                  className="bg-brand-accent text-brand-primary px-16 py-6 text-xl font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-6"
                >
                  Apply Here <ArrowRight size={24} />
                </button>
                <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Standard Review Time: 5-7 Business Days</p>
             </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      </section>
    </main>
  );
};

export default Volunteer;
