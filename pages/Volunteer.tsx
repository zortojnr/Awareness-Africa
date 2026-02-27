import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import Button from '../components/Button';
import img22 from '../assets/images/22.jpeg';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
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
      {/* Hero Section - Updated to match Contact Page Style */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-slate-900 py-32 px-6">
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-[#C5A059]/20" />
          <div className="flex-1 bg-[#E91E63]/20" />
          <div className="flex-1 bg-[#1976D2]/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-white mb-6 block">Collaborative Stewardship</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-10 leading-[1.1] tracking-tighter">
              JOIN THE <br/>IMPACT.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-white/90 leading-tight font-light max-w-4xl italic mx-auto">
              "We seek individuals who understand that service is a commitment to communal progress and long-term transformation."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Pathways Section */}
      <section className="py-24 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
             <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6">Direct Engagement</h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Pathways of Contribution.</h3>
             </div>
             {/* Strategic placement of Image 22 */}
             <div className="relative aspect-video bg-slate-100 overflow-hidden shadow-2xl rounded-sm border-4 border-white">
                <img src={img22} alt="Awareness Africa Foundation community engagement and volunteer opportunities" className="w-full h-full object-cover" loading="lazy" />
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { 
                icon: <Heart size={24} />, 
                title: "Mentor", 
                desc: "Guide young people through structured 6-month mentorship cycles.",
                accent: "border-l-4 border-[#E91E63]" 
              },
              { 
                icon: <Users size={24} />, 
                title: "Facilitator", 
                desc: "Share vocational expertise during our community-led workshops.",
                accent: "border-l-4 border-[#1976D2]" 
              },
              { 
                icon: <Globe size={24} />, 
                title: "Advocate", 
                desc: "Champion our localized initiatives through strategic storytelling.",
                accent: "border-l-4 border-[#C5A059]" 
              },
              { 
                icon: <ShieldCheck size={24} />, 
                title: "Liaison", 
                desc: "Represent the foundation in high-level institutional partnerships.",
                accent: "border-l-4 border-slate-900" 
              }
            ].map((path, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 sm:p-8 md:p-12 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group ${path.accent}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 flex items-center justify-center text-slate-900 mb-6 sm:mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 rounded-sm">
                  {path.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">{path.title}</h4>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{path.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section - Repositioned button centrally directly under content */}
      <section className="py-24 sm:py-40 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...revealProps} className="flex flex-col items-center">
             <Award className="text-brand-accent mb-10" size={32} />
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 leading-tight">Be part of the <br/>Transformation.</h2>
             <p className="text-sm md:text-base text-white/60 mb-12 font-light max-w-xl">
               Our missions depend on the dedication of people like you. Join our global network of change-makers today.
             </p>
             <div className="w-full flex justify-center">
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

      <SectionDivider />
      
      <section className="py-20 px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-8">Institutional Stewardship</p>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto px-12 border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-900"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top
        </Button>
      </section>
    </main>
  );
};

export default Volunteer;
