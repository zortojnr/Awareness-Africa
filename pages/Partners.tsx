import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink } from 'lucide-react';
import blueLogo from '../assets/images/AAF blue logo (1).png';
import sdgImage from '../assets/SDG Image.jpg';
import uswawaImage from '../assets/Uswawa Image.jpg';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full h-1 bg-brand-primary" />
);

const Partners: React.FC = () => {
  const partners = [
    {
      name: "SDG Youth Connect",
      image: sdgImage,
      website: "https://sdgyouthconnect.org",
      about: "SDG Youth Connect, established in 2025, aims to be a leading catalyst for youth education on the Sustainable Development Goals (SDGs). Our programs empower learners to contribute to the SDGs through informed giving to relevant initiatives and interactive, site-exclusive SDG games that educate in an engaging and impactful way. With regional directors driving localization and outreach, we extend our global impact, enabling learners to disseminate knowledge widely and multiply positive outcomes through SDG-oriented projects and education opportunities."
    },
    {
      name: "UsawaKwaWote Project",
      image: uswawaImage,
      website: null,
      about: "The Usawa kwa Wote Project is an advocacy and empowerment initiative dedicated to advancing Sexual and Reproductive Health Rights (SRHR) and Mental Health as core pillars of equality and human dignity. The project works to break barriers and amplify the voices of women, youth, and marginalized groups by ensuring access to accurate information, quality services, and supportive spaces. Through community awareness, dialogue, and policy engagement, Usawa kwa Wote promotes equal access to SRHR and mental health services, empowers individuals to claim their rights, and strengthens accountability for inclusive health systems. At its heart, the project believes that health and rights should never be a privilege they are the foundation of true equality."
    }
  ];

  return (
    <main className="bg-white relative selection:bg-brand-accent selection:text-white overflow-x-hidden">
      {/* Hero Section - Matching About Page Style */}
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6 relative">
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-brand-accent" />
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400">
                Strategic Alliances
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              Our Partners.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-slate-800 leading-tight font-light max-w-4xl italic">
              "We believe in the power of collaboration. Our strategic partnerships amplify our impact and enable us to reach more communities across Africa."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Partners Cards Section */}
      <section className="py-24 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mb-16"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400 block mb-4">
              Collaborative Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
              Building Together for Change.
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Through strategic partnerships, we amplify our reach and deepen our impact across Africa. Each collaboration brings unique expertise and shared commitment to sustainable development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white border border-slate-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                      {partner.name}
                    </h3>
                    {partner.website && (
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brand-accent hover:text-slate-900 transition-colors group/link"
                      >
                        <span className="text-[10px] uppercase tracking-widest font-bold">Visit</span>
                        <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <Globe size={18} className="text-brand-accent" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Partnership
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    {partner.about}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...revealProps}>
            <Globe className="mx-auto mb-8 text-brand-accent" size={32} />
            <h2 className="text-2xl md:text-5xl font-display font-bold mb-8">Partnership Opportunities.</h2>
            <p className="text-white/40 text-sm font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Interested in partnering with us? We welcome collaborations that align with our mission to empower youth and build resilient communities across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-10 py-4 bg-brand-accent text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-accent/90 transition-colors">
                  Get In Touch
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
