
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Target } from 'lucide-react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const boxAnimation = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-1 bg-slate-900" />
  </div>
);

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white relative">
      <section className="pt-32 pb-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <span className="text-[14px] uppercase tracking-[0.4em] font-black text-slate-500 mb-12 block">
              Institutional Identity <span className="text-brand-accent ml-2">/</span>
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-16 leading-[0.9]">
              The Backbone of <br/>Empowerment.
            </h1>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-display text-slate-800 leading-relaxed font-light">
                Awareness Africa Foundation is a pan-African umbrella organization established to serve as the strategic backbone for initiatives dedicated to community resilience and youth leadership.
              </p>
              
              <div className="h-px w-24 bg-brand-accent my-12" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <motion.div 
                  {...boxAnimation}
                  whileHover={{ y: -10, borderColor: '#C5A059' }}
                  className="p-10 border-[6px] border-slate-900 bg-white transition-colors duration-500 shadow-sm hover:shadow-2xl"
                >
                  <p className="text-slate-700 font-light leading-relaxed">
                    We operate with a long-term perspective, moving beyond short-term campaigns to build sustainable systems that foster awareness and early intervention. Our focus is continental, addressing the root causes of social vulnerability through data-driven and community-centered solutions.
                  </p>
                </motion.div>

                <motion.div 
                  {...boxAnimation}
                  transition={{ ...boxAnimation.transition, delay: 0.2 }}
                  whileHover={{ y: -10, borderColor: '#C5A059' }}
                  className="p-10 border-[6px] border-slate-900 bg-white transition-colors duration-500 shadow-sm hover:shadow-2xl"
                >
                  <p className="text-slate-700 font-light leading-relaxed">
                    By championing gender equity, vocational excellence, and mental well-being, the Foundation provides the structural support necessary for specialized initiatives to thrive. We believe in building a future where African youth are not merely beneficiaries, but the primary architects of their society.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="max-w-5xl">
            <div className="flex items-center gap-6 mb-12">
              <Target size={32} className="text-brand-accent" aria-hidden="true" />
              <h2 className="text-[14px] uppercase tracking-[0.4em] font-black text-slate-500">Our Vision</h2>
            </div>
            <p className="text-[48px] font-display font-bold text-slate-900 leading-tight">
              A future where African youth are confident, engaged, emotionally resilient, and empowered to lead inclusive social change.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="max-w-5xl">
            <div className="flex items-center gap-6 mb-12">
              <Shield size={32} className="text-brand-accent" aria-hidden="true" />
              <h2 className="text-[14px] uppercase tracking-[0.4em] font-black text-slate-500">Our Mission</h2>
            </div>
            <p className="text-[40px] font-display font-bold text-slate-900 leading-tight">
              To catalyze youth empowerment across Africa by building awareness, championing gender equity, and fostering emotional well-being through community-driven programs and partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[48px] font-display font-bold text-slate-900 leading-tight">Leadership & Advice</h2>
            <span className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mt-6 block">Governance</span>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[48px] font-display font-bold text-slate-900 mb-8 leading-tight">Institutional Partners</h2>
            <span className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-6 block">Our Network</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
